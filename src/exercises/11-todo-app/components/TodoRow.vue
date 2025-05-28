<template>
    <tr class="todo-row" :data-draggable="true">
      <td class="drag-cell">
        <div class="drag-handle">⋮⋮</div>
      </td>
      <td>
        <label class="checkbox-container">
          <input 
            type="checkbox" 
            :checked="todo.completed"
            @change="toggleTodoStatus"
          />
          <span class="checkmark"></span>
        </label>
      </td>
      <td :class="{ 'completed': todo.completed }">
        <span v-if="!isEditing">
          {{ todo.text }}
        </span>
        <input 
          v-else
          type="text"
          v-model="editedText"
          @blur="updateTodo"
          class="edit-input"
        />
      </td>
      <td>
        <span class="category-badge">{{ todo.category }}</span>
      </td>
      <td>
        <div class="tags-list">
          <span 
            v-for="(tag, index) in todo.tags" 
            :key="index"
            class="tag"
          >
            {{ tag }}
          </span>
        </div>
      </td>
      <td>
        <span class="due-date">{{ formatDate(todo.dueDate) }}</span>
      </td>
      <td>
        <div class="action-buttons">
          <button @click="startEditing" class="edit-button">✏️</button>
          <button @click="deleteTodo" class="delete-button">🗑️</button>
        </div>
      </td>
    </tr>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useTodoStore } from '../../../store/piniaStore';
  
  const props = defineProps({
    todo: {
      type: Object,
      required: true
    }
  });
  
  const todoStore = useTodoStore();
  const isEditing = ref(false);
  const editedText = ref('');
  
  const toggleTodoStatus = () => {
    todoStore.toggleTodoStatus(props.todo.id);
  };
  
  const startEditing = () => {
    isEditing.value = true;
    editedText.value = props.todo.text;
  };
  
  const updateTodo = () => {
    if (editedText.value.trim()) {
      todoStore.updateTodo(props.todo.id, {
        ...props.todo,
        text: editedText.value
      });
    }
    isEditing.value = false;
  };
  
  const deleteTodo = () => {
    if (confirm('Are you sure you want to delete this todo?')) {
      todoStore.deleteTodo(props.todo.id);
    }
  };
  
  const formatDate = (date) => {
    if (!date) return '';
    return new Date(date).toLocaleDateString();
  };
  </script>
  
  <style scoped>
  .todo-row {
    transition: all 0.3s ease;
    background: white;
    border-bottom: 1px solid #eee;
    position: relative;
  }

  .todo-row:hover {
    background: #f8f9fa;
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }

  .dark-mode .todo-row {
    background: #2d2d2d;
    border-bottom-color: #444;
  }

  .dark-mode .todo-row:hover {
    background: #363636;
  }

  /* Drag handle styles */
  .drag-cell {
    width: 40px;
    padding: 0.5rem !important;
  }

  .drag-handle {
    cursor: grab;
    color: #666;
    padding: 0.5rem;
    border-radius: 4px;
    transition: all 0.3s ease;
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
  }

  .drag-handle:hover {
    background: #f0f0f0;
    color: #333;
  }

  .dark-mode .drag-handle {
    color: #ccc;
  }

  .dark-mode .drag-handle:hover {
    background: #444;
    color: #fff;
  }

  /* Checkbox styles */
  .checkbox-container {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    user-select: none;
  }

  .checkbox-container input {
    cursor: pointer;
    width: 20px;
    height: 20px;
    border: 2px solid #ccc;
    border-radius: 4px;
    transition: all 0.3s ease;
  }

  .checkbox-container input:checked {
    background-color: #4CAF50;
    border-color: #4CAF50;
  }

  /* Completed task style */
  .completed {
    text-decoration: line-through;
    color: #888;
  }

  /* Category badge */
  .category-badge {
    background: #e3f2fd;
    color: #1976d2;
    padding: 0.4rem 0.8rem;
    border-radius: 16px;
    font-size: 0.9rem;
    display: inline-block;
    transition: all 0.3s ease;
  }

  .category-badge:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .dark-mode .category-badge {
    background: #1a237e;
    color: #fff;
  }

  /* Tags styles */
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
    transition: all 0.3s ease;
  }

  .tag:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .dark-mode .tag {
    background: #444;
    color: #fff;
  }

  /* Action buttons */
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
    font-size: 1.2rem;
  }

  .edit-button:hover {
    background: #e3f2fd;
    transform: scale(1.1);
  }

  .delete-button:hover {
    background: #ffebee;
    transform: scale(1.1);
  }

  .dark-mode .edit-button:hover {
    background: #1a237e;
  }

  .dark-mode .delete-button:hover {
    background: #b71c1c;
  }

  /* Edit input style */
  .edit-input {
    width: 100%;
    padding: 0.5rem;
    border: 2px solid #4CAF50;
    border-radius: 4px;
    font-size: 1rem;
    background: white;
    color: #333;
    transition: all 0.3s ease;
  }

  .edit-input:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.2);
  }

  .dark-mode .edit-input {
    background: #444;
    color: white;
    border-color: #66bb6a;
  }

  /* Due date style */
  .due-date {
    font-size: 0.9rem;
    color: #666;
    transition: all 0.3s ease;
  }

  .dark-mode .due-date {
    color: #ccc;
  }

  /* Dragging styles */
  .todo-row.sortable-ghost {
    opacity: 0.5;
    background: #f0f0f0;
  }

  .dark-mode .todo-row.sortable-ghost {
    background: #444;
  }

  .todo-row.sortable-drag {
    background: white;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    cursor: grabbing;
  }

  .dark-mode .todo-row.sortable-drag {
    background: #2d2d2d;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
  </style>