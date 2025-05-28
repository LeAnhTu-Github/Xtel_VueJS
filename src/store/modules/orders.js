export default {
    namespaced: true,
    state: {
      orders: [],
      currentOrder: null
    },
    mutations: {
      ADD_ORDER(state, order) {
        state.orders.push({
          id: Date.now(),
          ...order,
          status: 'pending',
          createdAt: new Date().toISOString()
        });
      },
      UPDATE_ORDER_STATUS(state, { orderId, status }) {
        const order = state.orders.find(o => o.id === orderId);
        if (order) {
          order.status = status;
        }
      },
      SET_CURRENT_ORDER(state, order) {
        state.currentOrder = order;
      },
      CLEAR_CURRENT_ORDER(state) {
        state.currentOrder = null;
      }
    },
    actions: {
      createOrder({ commit, rootState }, { items, total, shippingAddress }) {
        const order = {
          items: items.map(item => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity
          })),
          total,
          shippingAddress,
          userId: rootState.auth.user?.id
        };
        commit('ADD_ORDER', order);
        return order;
      },
      updateOrderStatus({ commit }, { orderId, status }) {
        commit('UPDATE_ORDER_STATUS', { orderId, status });
      },
      setCurrentOrder({ commit }, order) {
        commit('SET_CURRENT_ORDER', order);
      },
      clearCurrentOrder({ commit }) {
        commit('CLEAR_CURRENT_ORDER');
      }
    },
    getters: {
      getOrders: state => state.orders,
      getCurrentOrder: state => state.currentOrder,
      getOrderById: state => (id) => state.orders.find(o => o.id === id),
      getOrdersByStatus: state => (status) => state.orders.filter(o => o.status === status),
      getPendingOrders: state => state.orders.filter(o => o.status === 'pending'),
      getCompletedOrders: state => state.orders.filter(o => o.status === 'completed'),
      getCancelledOrders: state => state.orders.filter(o => o.status === 'cancelled')
    }
  };