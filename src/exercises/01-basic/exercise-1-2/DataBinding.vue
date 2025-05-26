<template>
    <h1>Bài Tập Vue.js</h1>
    <h2>Bài 1.2: Data Binding</h2>
    <div class="registration-form">
      <h2>Form Đăng Ký</h2>
      
      <div class="form-group">
        <label for="username">Username:</label>
        <input 
          type="text" 
          id="username"
          v-model="username" 
          placeholder="Nhập username"
          class="form-input"
        />
        <p class="preview">Username: {{ username }}</p>
      </div>
  
      <div class="form-group">
        <label for="email">Email:</label>
        <input 
          type="email" 
          id="email"
          v-model="email" 
          placeholder="Nhập email"
          class="form-input"
          :class="{ 'error': !isValidEmail && email !== '' }"
        />
        <p class="preview">Email: {{ email }}</p>
        <p class="error-message" v-if="!isValidEmail && email !== ''">
          Email không hợp lệ
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'

  const username = ref('')
  const email = ref('')
  
  const isValidEmail = computed(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email.value)
  })
  </script>
  
  <style scoped>
  .registration-form {
    width: 500px;
    max-width: 500px;
    opacity: 0.95;
    background-color: #009879;
    margin: 0 auto;
    padding: 2rem;
    font-family: Arial, sans-serif;
    border-radius: 10px;
  }
  
  h2 {
    color: white;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 1.5rem;
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #2c3e50;
    font-weight: bold;
    text-align: left;
  }
  
  .form-input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    transition: border-color 0.3s;
  }
  
  .form-input:focus {
    outline: none;
    border-color: #42b983;
  }
  
  .form-input.error {
    border-color: #ff4444;
  }
  
  .preview {
    margin-top: 0.5rem;
    color: #fff;
    font-size: 0.9rem;
  }
  
  .error-message {
    color: #ff4444;
    font-size: 1.2rem;
    font-weight: bold;
    margin-top: 0.25rem;
  }
  </style>