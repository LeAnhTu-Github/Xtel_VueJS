<template>
    <div class="admin">
      <h1>Admin Page</h1>
      <p>Welcome to the admin page!</p>
    <button @click="$router.push('/')">Go to Home</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Contact'
  }
  </script>
  
  <style scoped>
  .admin {
    padding: 20px;
  }
  </style> 