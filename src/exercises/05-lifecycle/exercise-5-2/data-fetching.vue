<template>
    <div class="user-profile">
      <div v-if="loading" class="loading">
        Loading...
      </div>
      
      <div v-else-if="error" class="error">
        <p>{{ error }}</p>
        <button @click="fetchUserData" class="retry-btn">Retry</button>
      </div>
      
      <div v-else-if="user" class="user-card">
        <img :src="user.avatar" :alt="user.name" class="avatar">
        <h2>{{ user.name }}</h2>
        <p>{{ user.email }}</p>
        <button @click="fetchUserData" class="refresh-btn">Refresh</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  // Mock API data
  const mockUserAPI = {
  fetchUser: (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: id,
          name: `User ${id}`,
          email: `user${id}@example.com`,
          avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=user${id}`
        });
      }, 1000);
    });
  }
};
  
  const user = ref(null);
  const loading = ref(false);
  const error = ref(null);
  
  const fetchUserData = async () => {
    loading.value = true;
    error.value = null;
    
    try {
      const userId = Math.floor(Math.random() * 100) + 1;
      const data = await mockUserAPI.fetchUser(userId);
      user.value = data;
    } catch (err) {
      error.value = 'Không thể lấy dữ liệu người dùng. Vui lòng thử lại.';
      console.error('Lỗi khi lấy dữ liệu người dùng:', err);
    } finally {
      loading.value = false;
    }
  };
  
  // Fetch data when component is created
  onMounted(() => {
    fetchUserData();
  });
  </script>
  
  <style scoped>
  .user-profile {
    max-width: 400px;
    margin: 20px auto;
    padding: 20px;
  }
  
  .user-card {
    background-color: #f8f9fa;
    border-radius: 8px;
    padding: 20px;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 15px;
  }
  
  h2 {
    color: #2c3e50;
    margin: 10px 0;
  }
  
  p {
    color: #666;
    margin: 5px 0;
  }
  
  .loading {
    text-align: center;
    padding: 20px;
    color: #666;
  }
  
  .error {
    text-align: center;
    padding: 20px;
    color: #dc3545;
  }
  
  button {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #45a049;
  }
  
  .retry-btn {
    background-color: #dc3545;
  }
  
  .retry-btn:hover {
    background-color: #c82333;
  }
  </style>