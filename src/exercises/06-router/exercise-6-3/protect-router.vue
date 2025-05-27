<template>
  <div>
    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/dashboard">Dashboard</RouterLink> |
      <RouterLink to="/admin">Admin</RouterLink>
    </nav>

    <div v-if="!isAuthenticated">
      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <input v-model="username" type="text" placeholder="Username" />
        <input v-model="password" type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>

    <RouterView v-else></RouterView>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { authService } from '../../../router/auth'

const username = ref('')
const password = ref('')
const router = useRouter()

// Create a computed property to track authentication state
const isAuthenticated = computed(() => authService.isAuthenticated)

const handleLogin = () => {
  if (authService.login(username.value, password.value)) {
    if (authService.user.role === 'admin') {
      router.push('/admin')
    } else {
      router.push('/dashboard')
    }
  } else {
    alert('Invalid credentials')
  }
}

</script>

<style scoped>
nav {
  padding: 20px;
}

nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #2c3e50;
}

nav a.router-link-active {
  color: #42b983;
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 300px;
  margin: 20px auto;
}

input {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  padding: 8px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #3aa876;
}
</style>
