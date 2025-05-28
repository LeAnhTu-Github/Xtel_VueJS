import { createStore } from "vuex";

const mockLoginAPI = async (credentials) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  if (credentials.username === 'admin' && credentials.password === '123456') {
    return {
      name: 'Anh Tus',
      email: 'anhtus@gmail.com'
    };
  }
  throw new Error('Invalid credentials');
};
// User module
const userModule = {
  namespaced: true,
  state: {
    profile: null,
    isAuthenticated: false,
  },
  mutations: {
    SET_PROFILE(state, profile) {
      state.profile = profile;
    },
    SET_AUTH(state, status) {
      state.isAuthenticated = status;
    },
  },
  actions: {
    async login({ commit }, credentials) {
      const user = await mockLoginAPI(credentials);
      commit("SET_PROFILE", user);
      commit("SET_AUTH", true);
    },
    async logout({ commit }) {
      commit("SET_PROFILE", null);
      commit("SET_AUTH", false);
    },
  },
};

// Cart module
const cartModule = {
  namespaced: true,
  state: {
    items: [],
    total: 0,
  },
  mutations: {
    ADD_TO_CART(state, product) {
      state.items.push(product);
    },
    UPDATE_TOTAL(state) {
      state.total = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },
  },
  actions: {
    addToCart({ commit }, product) {
      commit("ADD_TO_CART", product);
      commit("UPDATE_TOTAL");
    },
  }
};

const store = createStore({
  modules: {
    user: userModule,
    cart: cartModule,
  },
});

export default store;