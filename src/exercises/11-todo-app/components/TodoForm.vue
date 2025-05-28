<template>
    <div class="add-todo-form">
      <div class="form-group">
        <input 
          type="text" 
          v-model="newTodo.text" 
          placeholder="Điều gì cần được làm?" 
          class="todo-input"
        />
      </div>
      <div class="form-group">
        <select v-model="newTodo.category" class="category-select">
          <option value="">Chọn Danh Mục</option>
          <option v-for="category in categories" :key="category" :value="category">
            {{ category }}
          </option>
        </select>
      </div>
      <div class="form-group">
        <input 
          type="date" 
          v-model="newTodo.dueDate"
          class="date-input"
        />
      </div>
      <TagInput v-model="newTodo.tags" />
      <button @click="addTodo" class="add-button">
        <span class="button-icon"></span> Add Todo
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { useTodoStore } from '../../../store/piniaStore';
  import TagInput from './TagInput.vue';
  
  const todoStore = useTodoStore();
  const categories = computed(() => todoStore.categories);
  
  const newTodo = ref({
    text: '',
    category: '',
    dueDate: '',
    tags: []
  });
  
  const addTodo = () => {
    if (newTodo.value.text.trim()) {
      todoStore.addTodo(newTodo.value);
      newTodo.value = {
        text: '',
        category: '',
        dueDate: '',
        tags: []
      };
    }
  };
  </script>
  
  <style scoped>
  .add-todo-form {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 1rem;
    margin-bottom: 2rem;
    padding: 1.5rem;
    background: #f8f9fa;
    border-radius: 8px;
  }
  
  .dark-mode .add-todo-form {
    background: #363636;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .todo-input,
  .category-select,
  .date-input {
    padding: 0.8rem;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-size: 1rem;
    transition: all 0.3s ease;
  }
  
  .dark-mode .todo-input,
  .dark-mode .category-select,
  .dark-mode .date-input {
    background: #444;
    border-color: #555;
    color: white;
  }
  
  .add-button {
    grid-column: 1 / -1;
    justify-self: center;
    width: 200px;
    background: #4CAF50;
    color: white;
    border: none;
    padding: 0.8rem 1.5rem;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    transition: all 0.3s ease;
  }
  
  .add-button:hover {
    background: #45a049;
    transform: translateY(-2px);
  }
  
  .tags-input {
    grid-column: 1 / -1;
    width: 100%;
  }
  </style>