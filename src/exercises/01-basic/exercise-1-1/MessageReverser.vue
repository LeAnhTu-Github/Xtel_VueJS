<template>
    <h1>Bài Tập Vue.js</h1>
    <h2>Bài 1.1: Đảo Lộn Tin Nhắn</h2>
    <div class="message-reverser">
        <div class="message">{{ message }}</div>
        <button @click="reverseMessage" class="reverse-btn">
            Reverse Message
        </button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const message = ref('Hello Vue!')
const reverseMessage = () => {
    message.value = message.value.split(' ').reverse().join(' ')
}
</script>

<style scoped>
.message-reverser {
    max-width: 600px;
    margin: 2rem auto;
    padding: 1rem;
    font-family: Arial, sans-serif;
}

.message {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    padding: 1rem;
    background-color: #f0f0f0;
    border-radius: 4px;
}

.reverse-btn {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.reverse-btn:hover {
    background-color: #45a049;
}
</style> 