<template>
  <div class="container">
    <h1>Vuex Modules</h1>
    <div v-if="!isAuthenticated" class="login-container">
      <h2>Login</h2>
      <form @submit.prevent="handleLogin" class="login-form">
        <div class="form-group">
          <input 
            v-model="username" 
            type="text" 
            placeholder="Username"
            class="form-input"
          />
        </div>
        <div class="form-group">
          <input 
            v-model="password" 
            type="password" 
            placeholder="Password"
            class="form-input"
          />
        </div>
        <div v-if="error" class="error-message">
          {{ error }}
        </div>
        <button type="submit" class="login-button">Login</button>
      </form>
    </div>
    <div v-else>
      <div class="cart-container">
        <h2>Add to Cart</h2>
        <form @submit.prevent="handleAddToCart" class="cart-form">
          <div class="form-group">
            <input 
              v-model="newProduct.name" 
              type="text" 
              placeholder="Product Name"
              class="form-input"
              required
            />
          </div>
          <div class="form-group">
            <input 
              v-model.number="newProduct.price" 
              type="number" 
              placeholder="Price"
              class="form-input"
              required
              min="0"
              step="1000"
            />
          </div>
          <div class="form-group">
            <input 
              v-model.number="newProduct.quantity" 
              type="number" 
              placeholder="Quantity"
              class="form-input"
              required
              min="1"
            />
          </div>
          <button type="submit" class="login-button">Add to Cart</button>
        </form>

        <div class="cart-items">
          <h3>Cart Items</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in cartItems" :key="item.id">
                <td>{{ item.name }}</td>
                <td>${{ item.price }}</td>
                <td>{{ item.quantity }}</td>
                <td>${{ item.price * item.quantity }}</td>
              </tr>
            </tbody>
          </table>
          <div class="cart-total">
            <h3>Total: ${{ cartTotal }}</h3>
          </div>
        </div>
      </div>
      <button @click="logout" class="login-button">Logout</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const username = ref('');
const password = ref('');
const error = ref('');
const newProduct = ref({
  name: '',
  price: 0,
  quantity: 1
});

const isAuthenticated = computed(() => store.state.user.isAuthenticated);
const profile = computed(() => store.state.user.profile);
const cartItems = computed(() => store.state.cart.items);
const cartTotal = computed(() => store.state.cart.total);

const logout = async () => {
  try {
    await store.dispatch('user/logout');
    console.log("Logout successful");
  } catch (error) {
    console.error('Logout failed:', error);
  }
};

const handleLogin = async () => {
  try {
    error.value = '';
    await store.dispatch('user/login', {
      username: username.value,
      password: password.value
    });
    
    if (isAuthenticated.value) {
      console.log("Login successful");
      username.value = '';
      password.value = '';
    } else {
      error.value = 'Invalid credentials';
      alert('Invalid credentials');
    }
  } catch (err) {
    error.value = 'Invalid credentials';
    alert('Invalid credentials');
  }
};

const handleAddToCart = () => {
  store.dispatch('cart/addToCart', {
    name: newProduct.value.name,
    price: newProduct.value.price,
    quantity: newProduct.value.quantity
  });
  newProduct.value = {
    name: '',
    price: 0,
    quantity: 1
  };
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  background-color: #f5f5f5;
  padding: 20px;
}

h1 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #2c3e50;
}

.login-container {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

h2 {
  font-size: 1.8rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  text-align: center;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-input:focus {
  outline: none;
  border-color: #42b983;
  box-shadow: 0 0 0 2px rgba(66, 185, 131, 0.2);
}

.login-button {
  background-color: #42b983;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-button:hover {
  background-color: #3aa876;
}

.login-button:active {
  transform: scale(0.98);
}

.error-message {
  color: #dc3545;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  text-align: center;
  padding: 8px;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 4px;
}

.cart-container {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 800px;
  margin-bottom: 2rem;
}

.cart-form {
  margin-bottom: 2rem;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}

th, td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f8f9fa;
  font-weight: 600;
}

.cart-total {
  margin-top: 1rem;
  text-align: right;
  font-size: 1.2rem;
  font-weight: bold;
}

h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
}
</style>