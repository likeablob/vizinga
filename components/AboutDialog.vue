<template lang="pug">
v-dialog(v-model='dialog', width='500' attach="body" transition="fade")
  slot(slot='activator')
  transition(name="fade")
    v-card
      v-card-title.headline.primary()
        | About
      v-layout
        div.image-wrapper
          img(src="@/assets/vizinga_banner_2.png")
      v-card-text
        v-layout(justify-center align-center column)
          v-spacer
          h3 Vizinga - {{version}}
          a.accent--text(:href="homepage")
            | ({{homepage}})
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      homepage: process.env.HOMEPAGE,
      version: process.env.VERSION,
    };
  },
};
</script>

<style lang="scss" scoped>
.image-wrapper {
  width: 100%;
  img {
    width: 100%;
  }
}
</style>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
  animation: shake 0.3s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, -1px, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 2px, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, -4px, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 4px, 0);
  }
}
</style>
