<template>
    <div :class="{ 'dark-mode': darkMode }" class="todo-app">
      <div class="app-container">
        <TodoHeader />
        <TodoForm />
        <TodoTable />
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed, onMounted } from 'vue';
  import { useTodoStore } from '../../store/piniaStore';
  import TodoHeader from './components/TodoHeader.vue';
  import TodoForm from './components/TodoForm.vue';
  import TodoTable from './components/TodoTable.vue';
  
  const todoStore = useTodoStore();
  const darkMode = computed(() => todoStore.darkMode);
  
  onMounted(() => {
    todoStore.loadFromLocalStorage();
  });
  </script>
  
  <style scoped>
  .todo-app {
    min-height: 70vh;
    padding: 2rem;
    transition: all 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;  
  }
  
  .app-container {
    max-width: 1200px;
    margin: 0 auto;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 2rem;
  }
  
  .dark-mode {
    background-color: #1a1a1a;
    color: #ffffff;
  }
  
  .dark-mode .app-container {
    background: #2d2d2d;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  }
  </style>