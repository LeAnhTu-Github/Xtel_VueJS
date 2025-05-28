<template>
    <div class="error-container">
      <h3>Lỗi khi tải component</h3>
      <p>Có lỗi xảy ra. Vui lòng thử lại.</p>
      <button @click="$emit('retry')">Thử lại</button>
    </div>
  </template>
  
  <style scoped>
  .error-container {
    padding: 20px;
    text-align: center;
    color: #dc3545;
  }
  
  button {
    background-color: #dc3545;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;
  }
  
  button:hover {
    background-color: #c82333;
  }
  </style>