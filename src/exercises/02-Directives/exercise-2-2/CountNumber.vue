<template>
        <h1>Bài Tập Vue.js</h1>
        <h2>Bài 2.2: Đếm Số</h2>
    <div class="count-number">
        <p class="count-display">Count:</p>
        <p class="count-display" v-bind:class="{ 'negative-number': count < 0 }">{{ count }}</p>
        <div class="button-group">
            <button @click="decrement" class="btn" v-bind:disabled="count === minCount">-</button>
            <button @click="increment" class="btn" v-bind:disabled="count === maxCount">+</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)
const minCount = ref(-10)
const maxCount = ref(10)

const decrement = () => {
    count.value--
}

const increment = () => {
    count.value++
}
</script>

<style scoped>
.count-number {
    width: 300px;
    margin: 2rem auto;
    padding: 2rem;
    background-color: #f8f9fa;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.count-display {
    font-size: 2rem;
    font-weight: bold;
    color: #2c3e50;
    margin-bottom: 1.5rem;
}

.button-group {
    display: flex;
    gap: 1rem;
    justify-content: center;
}

.btn {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    background-color: #42b983;
    color: white;
}

.btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.btn:active {
    transform: translateY(0);
}

.count-display {
    transition: all 0.3s ease;
}

.count-display:active {
    transform: scale(1.1);
}

.negative-number {
    color: red;
}
</style>