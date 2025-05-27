<template>
  <div class="not-found">
    <h1>404</h1>
    <h2>Page Not Found</h2>
    <p>The page you're looking for doesn't exist or has been moved.</p>
    <RouterLink to="/" class="home-link">Back to Home</RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.not-found {
  text-align: center;
  padding: 60px 20px;
  max-width: 600px;
  margin: 0 auto;
}

h1 {
  font-size: 6rem;
  margin: 0;
  color: #42b983;
}

h2 {
  font-size: 2rem;
  margin: 20px 0;
  color: #2c3e50;
}

p {
  color: #666;
  margin-bottom: 30px;
}

.home-link {
  display: inline-block;
  padding: 12px 24px;
  background-color: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.home-link:hover {
  background-color: #3aa876;
}
</style> 