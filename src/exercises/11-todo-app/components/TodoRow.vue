<template>
    <tr class="todo-row">
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
  }

  .todo-row:hover {
    background: #f8f9fa;
  }

  .dark-mode .todo-row:hover {
    background: #363636;
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
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0.5rem;
    margin-right: 0.5rem;
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

  /* Edit input style */
  .edit-input {
    width: 100%;
    padding: 0.5rem;
    border: 2px solid #4CAF50;
    border-radius: 4px;
    font-size: 1rem;
    background: white;
    color: #333;
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
  }

  .dark-mode .due-date {
    color: #ccc;
  }
  </style>