<template>
    <h1>Bài Tập Vue.js</h1>
    <h2>Bài 1.3: Vòng Lặp For</h2>
    <div class="product-table">
        <h2>Danh Sách Sản Phẩm</h2>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Tên Sản Phẩm</th>
                    <th>Giá</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in products" :key="product.id">
                    <td>{{ product.id }}</td>
                    <td>{{ product.name }}</td>
                    <td>${{ product.price }}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="2">Tổng Giá:</td>
                    <td>${{ totalPrice }}</td>
                </tr>
            </tfoot>
        </table>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// State
const products = ref([
    { id: 1, name: "iPhone 15", price: 999 },
    { id: 2, name: "Samsung Galaxy S24", price: 899 },
    { id: 3, name: "MacBook Pro", price: 1999 },
    { id: 4, name: "iPad Air", price: 599 },
    { id: 5, name: "AirPods Pro", price: 249 }
])

const totalPrice = computed(() => {
    return products.value.reduce((total, product) => total + product.price, 0)
})
</script>

<style scoped>
.product-table {
    max-width: 800px;
    margin: 2rem auto;
    padding: 2rem;
    background-color: #f8f9fa;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h2 {
    color: #2c3e50;
    text-align: center;
    margin-bottom: 2rem;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1rem;
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
}

th, td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid #e9ecef;
}

th {
    background-color: #42b983;
    color: white;
    font-weight: bold;
}

tr:hover {
    background-color: #f8f9fa;
}

tfoot tr {
    background-color: #f1f1f1;
    font-weight: bold;
}

tfoot td {
    border-bottom: none;
}
</style>