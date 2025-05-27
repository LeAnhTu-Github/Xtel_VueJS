<template>
    <div class="dashboard">
      <h1>Dashboard Page</h1>
      <p>Welcome to the dashboard!</p>
    <button @click="$router.push('/')">Go to Home</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Contact'
  }
  </script>
  
  <style scoped>
  .dashboard {
    padding: 20px;
  }
  </style> 