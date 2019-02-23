<template lang="pug">
v-app()
  v-toolbar(app flat color="primary" fixed height="56")
    AboutDialog
      div.mr-3.logo-box()
    v-toolbar-items
      v-text-field(flat color="accent"
        placeholder="Untitled" v-model="title" :maxlength="30")
    v-btn.btn(outline @click="resetDocument") new
    v-spacer
    ShareDialog
  v-content
    v-container.container(fluid fill-height)
      nuxt
</template>

<script>
import { mapActions, mapState } from 'vuex';

import AboutDialog from '@/components/AboutDialog';
import ShareDialog from '@/components/ShareDialog';

export default {
  components: {
    AboutDialog,
    ShareDialog,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(['shareUrl']),
    title: {
      get() {
        return this.$store.state.title;
      },
      set(v) {
        this.$store.commit('setTitle', v);
      },
    },
  },
  mounted() {},
  methods: {
    ...mapActions(['resetDocument', 'getShareUrl']),
    async onClick() {
      await this.getShareUrl();
      this.$copyText(this.shareUrl)
        .then(() => {
          this.$toast.success('Copied!');
        })
        .catch(err => {
          console.error(err);
        });
    },
  },
};
</script>

<style media="screen" lang="scss" scoped>
.container {
  max-height: calc(100vh - 64px);
  padding: 0;
}

.logo-box {
  display: flex;
  user-select: none;
  width: 130px;
  height: 38px;
  flex-shrink: 0;
  background-position: center;
  background-size: contain;
  background-image: url('~assets/logo_s.png');
}
</style>

<style media="screen" lang="scss">
.v-toolbar__content {
  padding: 0 8px 0 8px;
}
</style>
