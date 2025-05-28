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
  
  export default {
    namespaced: true,
    state: {
      user: null,
      isAuthenticated: false
    },
    mutations: {
      SET_USER(state, user) {
        state.user = user;
        state.isAuthenticated = true;
      },
      SET_IS_AUTHENTICATED(state, isAuthenticated) {
        state.isAuthenticated = isAuthenticated;
      }
    },
    actions: {
      async login({ commit }, credentials) {
        try {
          const user = await mockLoginAPI(credentials);
          commit("SET_USER", user);
          return user;
        } catch (error) {
          console.error("Login failed:", error);
          throw error;
        }
      },
      logout({ commit }) {
        commit("SET_USER", null);
        commit("SET_IS_AUTHENTICATED", false);
      }
    },
    getters: {
      getUser: state => state.user,
      isAuthenticated: state => !!state.user
    }
  };