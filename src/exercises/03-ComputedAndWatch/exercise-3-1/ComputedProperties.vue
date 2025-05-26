<template>
    <div class="cart-container">
        <h1>Bài Tập Vue.js</h1>
        <h2>Bài 3.1: Computed Properties</h2>

        <div class="filter-section">
            <label for="priceFilter">Lọc theo giá:</label>
            <select v-model="priceFilter" id="priceFilter" class="filter-select">
                <option value="all">Tất cả</option>
                <option value="low">Dưới 500</option>
                <option value="medium">500 - 1000</option>
                <option value="high">Trên 1000</option>
            </select>
        </div>

        <div class="cart-summary">
            <p class="total-price">Tổng tiền: ${{ totalPrice }}</p>
            <p v-if="hasDiscount" class="discount-message">
                Bạn được giảm giá 10%!
            </p>
        </div>

        <div class="cart-items">
            <div v-for="item in filteredItems" :key="item.id" class="cart-item">
                <h3>{{ item.name }}</h3>
                <p>Giá: ${{ item.price }}</p>
                <p>Số lượng: {{ item.quantity }}</p>
                <p>Thành tiền: ${{ item.price * item.quantity }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const cartItems = ref([
    { id: 1, name: "Laptop", price: 1200, quantity: 1 },
    { id: 2, name: "Smartphone", price: 800, quantity: 2 },
    { id: 3, name: "Tablet", price: 600, quantity: 1 },
    { id: 4, name: "Headphones", price: 200, quantity: 2 },
    { id: 5, name: "Smartwatch", price: 300, quantity: 1 }
])

const priceFilter = ref('all')

const totalPrice = computed(() => {
    return cartItems.value.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0);
})

const hasDiscount = computed(() => {
    return totalPrice.value > 1000;
})

const filteredItems = computed(() => {
    switch(priceFilter.value) {
        case 'low':
            return cartItems.value.filter(item => item.price < 500);
        case 'medium':
            return cartItems.value.filter(item => item.price >= 500 && item.price <= 1000);
        case 'high':
            return cartItems.value.filter(item => item.price > 1000);
        default:
            return cartItems.value;
    }
})
</script>
<style scoped>
.cart-container {
    max-width: 800px;
    margin: 2rem auto;
    padding: 2rem;
    background-color: #f8f9fa;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h1 {
    color: #2c3e50;
    text-align: center;
    margin-bottom: 0.5rem;
}

h2 {
    color: #42b983;
    text-align: center;
    margin-bottom: 2rem;
    font-size: 1.5rem;
}

.filter-section {
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    gap: 1rem;
}

.filter-select {
    padding: 0.5rem;
    border: 2px solid #e9ecef;
    border-radius: 6px;
    font-size: 1rem;
    min-width: 200px;
}

.cart-summary {
    background-color: white;
    padding: 1rem;
    border-radius: 8px;
    margin-bottom: 2rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.total-price {
    font-size: 1.2rem;
    font-weight: bold;
    color: #2c3e50;
    margin: 0;
}

.discount-message {
    color: #42b983;
    font-weight: bold;
    margin: 0.5rem 0 0 0;
}

.cart-items {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
    padding: 1rem 0;
}

.cart-item {
    background-color: white;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.cart-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.cart-item h3 {
    color: #2c3e50;
    margin: 0 0 0.5rem 0;
}

.cart-item p {
    color: #666;
    margin: 0.25rem 0;
}

@media screen and (max-width: 1200px) {
    .cart-items {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media screen and (max-width: 900px) {
    .cart-items {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media screen and (max-width: 600px) {
    .cart-items {
        grid-template-columns: 1fr;
    }
    
    .cart-container {
        margin: 1rem;
        padding: 1rem;
    }

    .filter-section {
        flex-direction: column;
        align-items: stretch;
    }

    .filter-select {
        width: 100%;
    }
}
</style>