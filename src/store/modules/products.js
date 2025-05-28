const initialProducts = [
    {
      id: 1,
      name: "Premium Laptop",
      price: 1499,
      category: "Electronics",
      stock: 10,
      image: "https://i0.wp.com/vuatao.vn/wp-content/uploads/2021/06/macbook-air-m1-2020-8-core-gpu-gold-thumb-650x650-1.png?fit=650%2C650&ssl=1"
    },
    {
      id: 2,
      name: "Wireless Earbuds",
      price: 199,
      category: "Electronics",
      stock: 25,
      image: "https://images-na.ssl-images-amazon.com/images/I/61hf2tu4IvL.jpg"
    },
    {
      id: 3,
      name: "Smart Watch",
      price: 299,
      category: "Electronics",
      stock: 15,
      image: "https://images-na.ssl-images-amazon.com/images/I/71TIOhVWQ5L.jpg"
    }
  ];
  
  export default {
    namespaced: true,
    state: {
      products: initialProducts
    },
    mutations: {
      ADD_PRODUCT(state, product) {
        state.products.push(product);
      },
      UPDATE_PRODUCT(state, product) {
        const index = state.products.findIndex(p => p.id === product.id);
        if (index !== -1) {
          state.products[index] = product;
        }
      },
      DELETE_PRODUCT(state, productId) {
        state.products = state.products.filter(p => p.id !== productId);
      }
    },
    actions: {
      addProduct({ commit }, product) {
        commit("ADD_PRODUCT", product);
      },
      updateProduct({ commit }, product) {
        commit("UPDATE_PRODUCT", product);
      },
      deleteProduct({ commit }, productId) {
        commit("DELETE_PRODUCT", productId);
      }
    },
    getters: {
      getProducts: state => state.products,
      getProductById: state => (id) => state.products.find(p => p.id === id)
    }
  };