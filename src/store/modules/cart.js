export default {
    namespaced: true,
    state: {
      items: [],
      total: 0,
      discount: 0
    },
    mutations: {
      ADD_TO_CART(state, product) {
        const existingProduct = state.items.find(item => item.id === product.id);
        if (existingProduct) {
          existingProduct.quantity += product.quantity;
        } else {
          state.items.push(product);
        }
      },
      UPDATE_TOTAL(state) {
        state.total = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
      },
      DELETE_FROM_CART(state, productId) {
        state.items = state.items.filter(item => item.id !== productId);
      },
      UPDATE_CART_ITEM(state, { productId, quantity }) {
        const product = state.items.find(item => item.id === productId);
        if (product) {
          product.quantity = quantity;
        }
      }
    },
    actions: {
      addToCart({ commit }, product) {
        commit("ADD_TO_CART", product);
        commit("UPDATE_TOTAL");
      },
      updateCartItem({ commit }, { productId, quantity }) {
        commit("UPDATE_CART_ITEM", { productId, quantity });
        commit("UPDATE_TOTAL");
      },
      deleteFromCart({ commit }, productId) {
        commit("DELETE_FROM_CART", productId);
        commit("UPDATE_TOTAL");
      },
      updateTotal({ commit }) {
        commit("UPDATE_TOTAL");
      }
    },
    getters: {
      getCartItems: state => state.items,
      getCartTotal: state => state.total,
      getCartItemById: state => (id) => state.items.find(item => item.id === id)
    }
  };