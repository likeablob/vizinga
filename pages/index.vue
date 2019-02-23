<template lang="pug">
v-layout(row fill-height :style="layout")
  .code-flex.fill-height(:style="codeFlex")
    no-ssr(placeholder='Loading...')
      codemirror.codemirror(
        ref='cm'
        v-model='src'
        :options='cmOptions'
        @ready=''
        @focus=''
        @input='onInput')
  .image-flex.fill-height(xs6 :style="imageFlex")
    v-layout.image-wrapper(fill-height justify-center align-center)
      .errbar(v-if="vizErr") {{vizErr.toString()}}
      img.img(:src="imgData" v-show="imgData" @click="onClickImage" title="Click to download")
      v-progress-circular.loading(v-if="!imgData" indeterminate size="64" color="accent")

  .page-switcher(
      :style="pageSwitcher"
      @click="reversePos = !reversePos"
    )
    v-tooltip(bottom)
      v-btn(depressed icon small absolute slot="activator")
        v-icon {{reversePos ? 'undo' : 'redo'}}
      span Swap pane

  .page-resizer(
      :style="pageResizer"
      @drag="onDragResizer"
      draggable="true"
      @dragstart="onDragResizerStart"
    )
    v-btn(depressed icon small absolute :ripple="false")
      v-icon more_vert
</template>

<script>
import _ from 'lodash';
import { mapState } from 'vuex';
import { codemirror } from 'vue-codemirror';

import Viz from 'viz.js';

let viz = new Viz({
  workerURL: '/full.render.js',
});

export default {
  middleware: ['parse-query'],
  components: {
    codemirror,
  },
  data() {
    return {
      imgData: null,
      borderX: 50,
      vizErr: '',
      cmOptions: {
        tabSize: 4,
        mode: 'simplemode',
        theme: 'idea fill-height',
        lineNumbers: true,
        line: true,
        styleActiveLine: true,
        // lineWrapping: true,
      },
    };
  },
  computed: {
    ...mapState(['title']),
    src: {
      get() {
        return this.$store.state.src;
      },
      set(value) {
        return this.$store.commit('setSrc', value);
      },
    },
    reversePos: {
      get() {
        return this.$store.state.reversePos;
      },
      set(value) {
        return this.$store.commit('setReversePos', value);
      },
    },
    layout() {
      return {
        flexDirection: this.reversePos ? 'row-reverse' : 'row',
        justifyContent: this.reversePos ? 'flex-end' : 'flex-start',
      };
    },
    codeWidth() {
      return this.reversePos ? `${100 - this.borderX}%` : `${this.borderX}%`;
    },
    imgWidth() {
      return this.reversePos ? `${this.borderX}%` : `${100 - this.borderX}%`;
    },
    codeFlex() {
      return {
        flexGrow: 1,
        maxWidth: this.codeWidth,
        paddingLeft: this.reversePos ? '20px' : 9,
      };
    },
    imageFlex() {
      return {
        flexBasis: this.reversePos
          ? `${this.borderX}%`
          : `${100 - this.borderX}%`,
      };
    },
    pageSwitcher() {
      return {
        left: `${this.borderX}%`,
      };
    },
    pageResizer() {
      return {
        left: `${this.borderX}%`,
      };
    },
  },
  mounted() {
    this.refresh();
  },
  methods: {
    onClickImage() {
      // donwload image
      const a = document.createElement('a');
      a.href = this.imgData;
      a.download = `vizinga_${this.title || 'Untitled'}_${Date.now()}.png`;
      a.click();
    },
    onDragResizerStart(ev) {
      // hide dragImage
      ev.dataTransfer.setDragImage(new Image(), 0, 0);
    },
    onDragResizer(ev) {
      let percentX = (ev.screenX / window.innerWidth) * 100;
      const min = 10;
      const max = 90;
      if (percentX === 0) {
        return;
      }
      if (percentX < min) {
        percentX = min;
      }
      if (max < percentX) {
        percentX = max;
      }
      this.borderX = percentX;
    },
    onInput() {
      _.throttle(this.refresh, 100)();
    },
    refresh() {
      viz
        .renderImageElement(this.src)
        .then(data => {
          this.imgData = data.src;
          this.vizErr = '';
        })
        .catch(err => {
          console.log('ERR', err);
          this.vizErr = err;
          console.log(viz);
          viz.wrapper.worker.terminate();
          viz = new Viz({
            workerURL: '/full.render.js',
          });
        });
    },
  },
};
</script>

<style media="screen" lang="scss">
.code-flex {
  // max-width: 100%;
  background-color: white;
}

.image-flex {
  background-color: white;
}

.image-wrapper {
}

.img {
  height: auto;
  max-width: 100%;
  max-height: 100%;
  -webkit-user-drag: none;
  user-select: none;
  cursor: s-resize;
}

.errbar {
  position: absolute;
  top: 0;
  margin: 10px;
  padding: 10px;
  box-sizing: content-box;
  font-size: 15pt;
  background-color: transparentize(black, 0.8);
  color: red;
}

.codemirror {
  height: 100%;
  width: 100%;
  overflow: auto;
}

.cm-s-fill-height {
  height: 100%;
  min-width: 1%;
}

.loading {
  position: absolute;
}

.page-switcher {
  z-index: 1000;
  position: absolute;
  top: 0;
}

.page-resizer {
  z-index: 10;
  position: absolute;
  top: 50%;
  & button {
    cursor: col-resize;
  }
}
</style>
