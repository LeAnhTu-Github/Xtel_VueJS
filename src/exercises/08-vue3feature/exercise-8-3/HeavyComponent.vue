<template>
    <div class="heavy-component">
      <h2> HeavyComponent Đã Được Tải!</h2>
      <p>Component này đã được tải một cách không đồng bộ.</p>
      <div class="content">
        <p>Đây là một component Heavy</p>
      </div>
    </div>
  </template>
  
  <script setup>

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  await sleep(2000);
  </script>
  
  <style scoped>
  .heavy-component {
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  .content {
    margin-top: 20px;
    padding: 15px;
    background: #f8f9fa;
    border-radius: 4px;
  }
  </style>