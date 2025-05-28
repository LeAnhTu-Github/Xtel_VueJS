<template>
  <div class="vuex-demo">
    <h2>Vuex Demo</h2>
    
    <div class="counter-section">
      <h3>Counter: {{ count }}</h3>
      <h4>Double Count: {{ doubleCount }}</h4>
      
      <div class="buttons">
        <button @click="increment">Increment</button>
        <button @click="decrement">Decrement</button>
        <button @click="asyncIncrement" :disabled="isLoading">
          {{ isLoading ? 'Loading...' : 'Async Increment' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'VuexDemo',
  data() {
    return {
      isLoading: false
    }
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['doubleCount'])
  },
  methods: {
    ...mapMutations(['increment', 'decrement']),
    ...mapActions(['asyncIncrement']),
    async handleAsyncIncrement() {
      this.isLoading = true
      await this.asyncIncrement()
      this.isLoading = false
    }
  }
}
</script>

<style scoped>
.vuex-demo {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.counter-section {
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.buttons {
  margin-top: 20px;
}

button {
  margin: 0 5px;
  padding: 8px 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}
</style>
