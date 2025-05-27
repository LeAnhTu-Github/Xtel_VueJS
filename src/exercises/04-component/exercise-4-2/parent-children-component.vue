<template>
    <div class="container">
        <h1>Bài Tập Vue.js</h1>
        <h2>Bài 4.2: Parent Children Component</h2>
        <div class="todo-list-container">
            <TodoList 
                v-model:todo="todoData"
            />
        </div>
    </div>
</template>

<script setup>
import TodoList from '@/components/todo-list/TodoList.vue';
import { ref } from 'vue';

// Dữ liệu mẫu cho TodoList
const todoData = ref([
    { id: 1, text: "Complete Vue.js tutorial", completed: false, priority: "high" },
    { id: 2, text: "Build portfolio website", completed: true, priority: "medium" },
    { id: 3, text: "Learn Vuex", completed: false, priority: "low" },
    { id: 4, text: "Master Vue Router", completed: false, priority: "high" }
]);
</script>

<style scoped>
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

h1 {
    color: #2c3e50;
    text-align: center;
    margin-bottom: 0.5rem;
}

h2 {
    color: #42b983;
    text-align: center;
    margin-bottom: 2rem;
    font-size: 1.5rem;
}

.todo-list-container {
    background-color: #f8f9fa;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>