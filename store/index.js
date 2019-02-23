import { utf8ToB64 } from '@/lib/utils';
import { dot } from './default.dot.js';

export const state = () => ({
  src: dot,
  title: '',
  reversePos: true,
  shareUrl: '',
});
export const getters = {};

export const mutations = {
  setSrc(state, data) {
    state.src = data;
  },
  setTitle(state, data) {
    state.title = data;
  },
  setReversePos(state, data) {
    state.reversePos = data;
  },
  setShareUrl(state, data) {
    state.shareUrl = data;
  },
};

export const actions = {
  resetDocument({ commit }) {
    commit('setSrc', dot);
    commit('setTitle', '');
  },
  async getShareUrl({ commit, state }) {
    const data = utf8ToB64(
      JSON.stringify({
        t: state.title,
        d: state.src,
      })
    );
    const param = new URLSearchParams();
    param.append('data', data);
    const longUrl = `${location.origin}/?${param}`;

    const token = process.env.BITLY_TOKEN;
    if (!token) {
      commit('setShareUrl', longUrl);
      return longUrl;
    }

    const shortenURL = async longUrl => {
      const apiUrl = `//api-ssl.bitly.com/v3/shorten?access_token=${token}&longUrl=${encodeURI(
        longUrl
      )}`;

      const res = await this.$axios.$get(apiUrl);
      const url = res.data.url;
      if (!url) {
        return Promise.reject(res);
      }
      return url;
    };
    const shareUrl = await shortenURL(longUrl).catch(err => {
      console.error(err);
      return longUrl;
    });
    commit('setShareUrl', shareUrl);
  },
};
