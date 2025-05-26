<template>
    <div class="todo-container">
        <h1>Bài Tập Vue.js</h1>
        <h2>Bài 2.3: Todo List</h2>

        <form @submit.prevent="addTodo" class="todo-input">
            <input 
                type="text" 
                v-model="newTodo" 
                placeholder="Thêm công việc mới"
            >
            <button type="submit" class="add-btn">Thêm</button>
        </form>

        <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên</th>
                        <th>Trạng thái</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="todo in todos" :key="todo.id">
                        <td>{{ todo.id }}</td>
                        <td>{{ todo.text }}</td>
                        <td>
                            <span :class="['status', todo.completed ? 'completed' : 'pending']">
                                {{ todo.completed ? 'Hoàn thành' : 'Chưa hoàn thành' }}
                            </span>
                        </td>
                        <td>
                            <button @click="deleteTodo(todo.id)" class="delete-btn">Xóa</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const todos = ref([
    { id: 1, text: "Learn Vue.js", completed: false },
    { id: 2, text: "Build a project", completed: false },
    { id: 3, text: "Master Vue Router", completed: true }
])
const newTodo = ref('')

const addTodo = () => {
    if (newTodo.value.trim() === '') return;
    todos.value.push({ 
        id: todos.value.length + 1, 
        text: newTodo.value, 
        completed: false 
    });
    newTodo.value = '';
}

const deleteTodo = (id) => {
    todos.value = todos.value.filter(todo => todo.id !== id);
}
</script>


<style scoped>
.todo-container {
    max-width: 800px;
    margin: 2rem auto;
    padding: 2rem;
    background-color: #f8f9fa;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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

.todo-input {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
    background-color: white;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

input[type="text"] {
    flex: 1;
    padding: 0.75rem;
    border: 2px solid #e9ecef;
    border-radius: 6px;
    font-size: 1rem;
    transition: all 0.3s ease;
}

input[type="text"]:focus {
    outline: none;
    border-color: #42b983;
    box-shadow: 0 0 0 3px rgba(66, 185, 131, 0.2);
}

input[type="text"]:invalid {
    border-color: #dc3545;
}

.add-btn {
    padding: 0.75rem 1.5rem;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
}

.add-btn:hover {
    background-color: #3aa876;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(66, 185, 131, 0.2);
}

.table-container {
    overflow-x: auto;
}

table {
    width: 100%;
    border-collapse: collapse;
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
}

thead {
    background-color: #42b983;
    color: white;
}

th,
td {
    padding: 1rem;
    text-align: left;
}

th {
    font-weight: bold;
    text-transform: uppercase;
    font-size: 0.9rem;
    letter-spacing: 0.5px;
}

tbody tr {
    border-bottom: 1px solid #e9ecef;
    transition: background-color 0.3s ease;
}

tbody tr:hover {
    background-color: #f8f9fa;
}

.status {
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 500;
}

.completed {
    background-color: #d4edda;
    color: #155724;
}

.pending {
    background-color: #fff3cd;
    color: #856404;
}

.delete-btn {
    padding: 0.5rem 1rem;
    background-color: #dc3545;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.delete-btn:hover {
    background-color: #c82333;
    transform: translateY(-2px);
}

/* Responsive design */
@media screen and (max-width: 600px) {
    .todo-container {
        margin: 1rem;
        padding: 1rem;
    }

    .todo-input {
        flex-direction: column;
    }

    .add-btn {
        width: 100%;
    }

    th,
    td {
        padding: 0.75rem;
    }
}
</style>