import Vue from 'vue';
import Vuetify from 'vuetify';
import colors from 'vuetify/es5/util/colors';

Vue.use(Vuetify, {
  theme: {
    base: colors.yellow.darken3,
    primary: colors.yellow.darken1,
    secondary: colors.yellow.darken1,
    accent: colors.purple.darken1,
    error: colors.red.base,
    warning: colors.yellow.darken2,
    info: colors.blue.base,
    success: colors.green.base,
  },
});
