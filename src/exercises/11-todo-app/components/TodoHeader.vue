<template>
    <header class="app-header">
      <h1>Todo Application</h1>
      <button @click="toggleDarkMode" class="theme-toggle">
        <span class="theme-icon">{{ darkMode ? '☀️' : '🌙' }}</span>
        {{ darkMode ? 'Light Mode' : 'Dark Mode' }}
      </button>
    </header>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useTodoStore } from '../../../store/piniaStore';
  
  const todoStore = useTodoStore();
  const darkMode = computed(() => todoStore.darkMode);
  
  const toggleDarkMode = () => {
    todoStore.toggleDarkMode();
  };
  </script>
  
  <style scoped>
  .app-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid #eee;
  }
  
  .dark-mode .app-header {
    border-bottom-color: #444;
  }
  
  h1 {
    font-size: 2rem;
    color: #2c3e50;
    margin: 0;
  }
  
  .dark-mode h1 {
    color: #fff;
  }
  
  .theme-toggle {
    background: none;
    border: 2px solid #4CAF50;
    color: #4CAF50;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease;
  }
  
  .dark-mode .theme-toggle {
    border-color: #fff;
    color: #fff;
  }
  
  .theme-toggle:hover {
    background: #4CAF50;
    color: white;
  }
  
  .dark-mode .theme-toggle:hover {
    background: #fff;
    color: #1a1a1a;
  }
  
  .theme-icon {
    font-size: 1.2rem;
  }
  </style>