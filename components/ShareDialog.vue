<template lang="pug">
v-dialog(v-model='dialog', width='500')
  v-btn(slot='activator' icon)
    v-icon share
  v-card
    v-card-title.headline.primary()
      | Share
    v-card-text
      v-layout.loading-container(v-if="loading")
        v-progress-linear(indeterminate color="accent")
      v-layout(v-else align-center)
        v-text-field.pl-2(color="accent" hide-details flat label="Share Link" readonly :value="shareUrl")
        v-btn(large color="accent" @click="onClickCopy") copy it
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      dialog: false,
      loading: false,
    };
  },
  computed: {
    ...mapState(['src', 'title', 'shareUrl']),
  },
  watch: {
    dialog(v) {
      if (v) {
        this.loading = v;
        this.getShareUrl().then(() => {
          this.loading = false;
        });
      }
    },
  },
  mounted() {},
  methods: {
    ...mapActions(['getShareUrl']),
    onClickCopy() {
      this.$copyText(this.shareUrl)
        .then(() => {
          this.$toast.success('Copied!');
        })
        .catch(() => {});
    },
  },
};
</script>

<style>
</style>
