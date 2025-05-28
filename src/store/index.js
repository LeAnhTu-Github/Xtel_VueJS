import { createStore } from 'vuex';

const store = createStore({
    state: {
      count: 0,
    },
    mutations: {
      increment(state) { state.count++; },
      decrement(state) { state.count--; }
    },
    getters: {
      doubleCount: state => state.count * 2
    },
    actions: {
      asyncIncrement({ commit }) {
        return new Promise((resolve) => {
          setTimeout(() => {
            commit('increment');
            resolve();
          }, 1000);
        });
      }
    }
  });

export default store;