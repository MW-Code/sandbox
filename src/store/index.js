import Vue from 'vue';
import Vuex from 'vuex';

import vuexstore from './test-vuex';
// import vuexstore from './release-vuex';

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      vuexstore,
    },
  });

  return Store;
}
