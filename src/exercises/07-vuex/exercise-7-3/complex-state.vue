<template>
    <div class="container">
        <h1>Vuex Complex State</h1>
        <div v-if="!isAuthenticated" class="login-container">
            <h2>Login</h2>
            <form @submit.prevent="handleLogin" class="login-form">
                <div class="form-group">
                    <input v-model="username" type="text" placeholder="Username" class="form-input" />
                </div>
                <div class="form-group">
                    <input v-model="password" type="password" placeholder="Password" class="form-input" />
                </div>
                <div v-if="error" class="error-message">
                    {{ error }}
                </div>
                <button type="submit" class="login-button">Login</button>
            </form>
        </div>
        <div v-else>
            <div class="products-section">
                <h2>Danh sách sản phẩm</h2>
                <div class="product-grid">
                    <div v-for="product in products" :key="product.id" class="product-card">
                        <img :src="product.image" :alt="product.name" class="product-image">
                        <div class="product-info">
                            <h3>{{ product.name }}</h3>
                            <p class="price">${{ product.price }}</p>
                            <p class="category">Category: {{ product.category }}</p>
                            <p class="stock">In Stock: {{ product.stock }}</p>
                            <button @click="addToCart(product)" class="add-to-cart-btn" :disabled="product.stock === 0">
                                {{ product.stock === 0 ? 'Out of Stock' : 'Add to Cart' }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <button @click="logout" class="login-button">Logout</button>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const username = ref('');
const password = ref('');
const error = ref('');

const isAuthenticated = computed(() => store.state.auth.isAuthenticated);
const products = computed(() => store.state.products.products);
const cartItems = computed(() => store.state.cart.items);
const cartTotal = computed(() => store.state.cart.total);

const logout = async () => {
    try {
        await store.dispatch('auth/logout');
        console.log("Logout successful");
    } catch (error) {
        console.error('Logout failed:', error);
    }
};

const handleLogin = async () => {
    try {
        error.value = '';
        await store.dispatch('auth/login', {
            username: username.value,
            password: password.value
        });

        if (isAuthenticated.value) {
            console.log("Login successful");
            username.value = '';
            password.value = '';
        } else {
            error.value = 'Invalid credentials';
        }
    } catch (err) {
        error.value = 'Login failed';
    }
};
const addToCart = (product) => {
    if (product.stock > 0) {
        store.dispatch('cart/addToCart', {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        });
    }
};
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90vw;
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

.products-section {
    margin-bottom: 2rem;
    width: 100%;
    overflow-x: auto;
    padding: 0 10px;
}

.product-grid {
    display: flex;
    flex-direction: row;
    gap: 20px;
    overflow-x: auto;
    padding: 20px 10px;
    width: 100%;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
}

.product-grid::-webkit-scrollbar {
    height: 8px;
}

.product-grid::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
}

.product-grid::-webkit-scrollbar-thumb {
    background: #42b983;
    border-radius: 4px;
}

.product-grid::-webkit-scrollbar-thumb:hover {
    background: #3aa876;
}

.product-card {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: all 0.3s ease;
    min-width: 280px;
    max-width: 320px;
    margin: 10px;
    position: relative;
}

.product-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.product-image {
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-bottom: 1px solid #eee;
    transition: transform 0.3s ease;
}

.product-card:hover .product-image {
    transform: scale(1.05);
}

.product-info {
    padding: 20px;
    background: white;
}

.product-info h3 {
    margin: 0 0 12px 0;
    font-size: 1.3em;
    color: #2c3e50;
    font-weight: 600;
    line-height: 1.4;
}

.price {
    color: #42b983;
    font-weight: bold;
    font-size: 1.4em;
    margin: 10px 0;
    display: flex;
    align-items: center;
}

.price::before {
    content: '$';
    font-size: 0.8em;
    margin-right: 2px;
}

.category {
    color: #666;
    font-size: 0.9em;
    margin: 8px 0;
    padding: 4px 8px;
    background: #f8f9fa;
    border-radius: 4px;
    display: inline-block;
}

.stock {
    color: #666;
    font-size: 0.9em;
    margin: 8px 0;
    display: flex;
    align-items: center;
    gap: 5px;
}

.stock::before {
    content: '•';
    color: #42b983;
    font-size: 1.2em;
}

.add-to-cart-btn {
    width: 100%;
    padding: 12px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    font-size: 1em;
    transition: all 0.3s ease;
    margin-top: 15px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.add-to-cart-btn:hover:not(:disabled) {
    background-color: #3aa876;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(66, 185, 131, 0.2);
}

</style>