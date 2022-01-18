import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import { authModule } from "./auth";

import { INCREMENT_COUNTER, CHANGE_FIRST_NAME, SET_POST } from "./mutations";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 0,
    firstName: "Sacha",
    lastName: "Bouillez",
    post: {},
  },
  getters: {
    fullName(state) {
      return `${state.firstName} ${state.lastName}`;
    },
  },
  mutations: {
    [INCREMENT_COUNTER](state) {
      state.counter++;
    },
    [CHANGE_FIRST_NAME](state, firstName) {
      state.firstName = firstName;
    },
    [SET_POST](state, post) {
      state.post = post;
    },
  },
  actions: {
    async getPost(context) {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1"
        );
        const post = await response.json();
        context.commit(SET_POST, post);
      } catch (e) {
        context.commit(SET_POST, {});
      }
    },
  },
  modules: {
    auth: authModule,
  },
  plugins: [createPersistedState({
    paths: ['counter']
  })]
});
