<template>
    <div class="table-container">
      <table class="todo-table">
        <thead>
          <tr>
            <th>Status</th>
            <th>Task</th>
            <th>Category</th>
            <th>Tags</th>
            <th>Due Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <TodoRow 
            v-for="todo in todos" 
            :key="todo.id" 
            :todo="todo"
          />
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useTodoStore } from '../../../store/piniaStore';
  import TodoRow from './TodoRow.vue';
  
  const todoStore = useTodoStore();
  const todos = computed(() => todoStore.todos);
  </script>
  
  <style scoped>
    .table-container {
  overflow-x: auto;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.todo-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background: white;
}

.dark-mode .todo-table {
  background: #2d2d2d;
}

.todo-table th {
  background: #f8f9fa;
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  color: #2c3e50;
}

.dark-mode .todo-table th {
  background: #363636;
  color: #fff;
}

.todo-table td {
  padding: 1rem;
  border-bottom: 1px solid #eee;
}

.dark-mode .todo-table td {
  border-bottom-color: #444;
}

.checkbox-container {
  display: inline-block;
  position: relative;
  padding-left: 25px;
  cursor: pointer;
  user-select: none;
}

.checkbox-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #eee;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.checkbox-container:hover input ~ .checkmark {
  background-color: #ccc;
}

.checkbox-container input:checked ~ .checkmark {
  background-color: #4CAF50;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.checkbox-container input:checked ~ .checkmark:after {
  display: block;
}

.checkbox-container .checkmark:after {
  left: 7px;
  top: 3px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.completed {
  text-decoration: line-through;
  color: #888;
}

.category-badge {
  background: #e3f2fd;
  color: #1976d2;
  padding: 0.4rem 0.8rem;
  border-radius: 16px;
  font-size: 0.9rem;
}

.dark-mode .category-badge {
  background: #1a237e;
  color: #fff;
}

.tags-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background: #e0e0e0;
  color: #333;
  padding: 0.4rem 0.8rem;
  border-radius: 16px;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.dark-mode .tag {
  background: #444;
  color: #fff;
}

.tag-remove {
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  padding: 0 0.4rem;
  font-size: 1.2rem;
  line-height: 1;
}

.dark-mode .tag-remove {
  color: #ccc;
}

.tag-remove:hover {
  color: #f44336;
}

.action-buttons {
  display: flex;
  gap: 0.5rem;
}

.edit-button,
.delete-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.edit-button:hover {
  background: #e3f2fd;
}

.delete-button:hover {
  background: #ffebee;
}

.dark-mode .edit-button:hover {
  background: #1a237e;
}

.dark-mode .delete-button:hover {
  background: #b71c1c;
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

  </style>