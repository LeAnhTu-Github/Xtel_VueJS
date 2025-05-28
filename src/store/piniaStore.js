// Pinia store
import { defineStore } from "pinia";

export const useTodoStore = defineStore("todos", {
  state: () => ({
    todos: [],
    categories: ["Work", "Personal", "Shopping", "Health"],
    darkMode: localStorage.getItem('darkMode') === "true",
  }),
  getters: {
    getTodos: (state) => state.todos,
  },
  actions: {
    // Create
    addTodo(todo) {
      this.todos.push({
        id: Date.now(),
        text: todo.text,
        completed: false,
        category: todo.category,
        tags: todo.tags || [],
        createdAt: new Date(),
        dueDate: todo.dueDate,
      });
      this.saveToLocalStorage();
    },

    // Read
    getTodoById(id) {
      return this.todos.find(todo => todo.id === id);
    },

    // Update
    updateTodo(id, updatedTodo) {
      const index = this.todos.findIndex(todo => todo.id === id);
      if (index !== -1) {
        this.todos[index] = {
          ...this.todos[index],
          ...updatedTodo,
          updatedAt: new Date()
        };
        this.saveToLocalStorage();
      }
    },

    // Delete
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
      this.saveToLocalStorage();
    },

    // Toggle completion status
    toggleTodoStatus(id) {
      const todo = this.todos.find(todo => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
        this.saveToLocalStorage();
      }
    },

    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      localStorage.setItem('darkMode', this.darkMode);
      if (this.darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    },

    initializeDarkMode() {
      if (this.darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    },

    saveToLocalStorage() {
      try {
        localStorage.setItem("todos", JSON.stringify(this.todos));
      } catch (error) {
        console.error("Error saving todos to localStorage:", error);
      }
    },

    loadFromLocalStorage() {
      try {
        const savedTodos = localStorage.getItem("todos");
        if (savedTodos) {
          const parsedTodos = JSON.parse(savedTodos);
          this.todos = parsedTodos;
          return parsedTodos;
        }
        return [];
      } catch (error) {
        console.error("Error loading todos from localStorage:", error);
        this.todos = [];
        return [];
      }
    },

    updateTodosOrder(newOrder) {
      this.todos = [...newOrder];
      this.saveToLocalStorage();
    },
  },
});
