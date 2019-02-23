<template lang="pug">
v-dialog(v-model='dialog', width='500' attach="body")
  slot(slot='activator')
  v-card
    v-card-title.headline.primary()
      | Settings
    v-card-text
      v-layout
        p hoge
        v-diveder
        p hoge
    v-divider
    v-card-actions
      v-spacer
      v-btn(large color="accent" @click="onClickCopy") save
</template>

<script>
export default {
  data() {
    return {
      dialog: !true,
    };
  },
  computed: {},
  methods: {},
};
</script>

<style>
</style>
