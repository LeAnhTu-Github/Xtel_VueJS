<template>
    <h1>Bài Tập Vue.js</h1>
    <h2>Bài 2.1: Form Đăng Nhập</h2>
    <div class="login-form">
        <h2>Đăng Nhập</h2>
        
        <div v-if="!isLoggedIn">
            <div class="form-group">
                <label for="username">Username:</label>
                <input 
                    type="text" 
                    id="username"
                    v-model="username" 
                    placeholder="Nhập username"
                    class="form-input"
                />
            </div>

            <div class="form-group">
                <label for="password">Password:</label>
                <div class="password-input">
                    <input 
                        :type="showPassword ? 'text' : 'password'"
                        id="password"
                        v-model="password" 
                        placeholder="Nhập password"
                        class="form-input"
                    />
                    <button 
                        type="button" 
                        class="toggle-password"
                        @click="togglePassword"
                    >
                        {{ showPassword ? '👁️' : '👁️‍🗨️' }}
                    </button>
                </div>
            </div>

            <div v-if="showError" class="error-message">
                Username hoặc password không đúng!
            </div>

            <button @click="login" class="login-btn">
                Đăng Nhập
            </button>
        </div>

        <div v-else class="success-message">
            <h3>Đăng nhập thành công!</h3>
            <p>Chào mừng {{ username }}!</p>
            <button @click="logout" class="logout-btn">
                Đăng Xuất
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

// State
const username = ref('')
const password = ref('')
const isLoggedIn = ref(false)
const showError = ref(false)
const showPassword = ref(false)

// Constants
const validUser = {
    username: "admin",
    password: "123456"
}

// Methods
const login = () => {
    if (username.value === validUser.username && 
        password.value === validUser.password) {
        isLoggedIn.value = true
        showError.value = false
    } else {
        showError.value = true
        isLoggedIn.value = false
    }
}

const logout = () => {
    isLoggedIn.value = false
    username.value = ''
    password.value = ''
    showError.value = false
}

const togglePassword = () => {
    showPassword.value = !showPassword.value
}
</script>

<style scoped>
.login-form {
    width: 500px;
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
    border: 2px solid #e9ecef;
    border-radius: 6px;
    font-size: 1rem;
    transition: all 0.3s ease;
}

.form-input:focus {
    outline: none;
    border-color: #42b983;
    box-shadow: 0 0 0 3px rgba(66, 185, 131, 0.2);
}

.password-input {
    position: relative;
}

.toggle-password {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
    padding: 0.5rem;
}

.login-btn, .logout-btn {
    width: 100%;
    padding: 0.75rem;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
}

.login-btn:hover, .logout-btn:hover {
    background-color: #3aa876;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(66, 185, 131, 0.2);
}

.error-message {
    color: #dc3545;
    text-align: center;
    margin-bottom: 1rem;
    font-weight: bold;
}

.success-message {
    text-align: center;
    color: #2c3e50;
}

.success-message h3 {
    color: #42b983;
    margin-bottom: 1rem;
}

.logout-btn {
    margin-top: 1rem;
    background-color: #dc3545;
}

.logout-btn:hover {
    background-color: #c82333;
}
</style>