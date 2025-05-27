<template>
    <div class="todo-list">
        <h1>Todo List</h1>
        <table class="todo-table">
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Priority</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in todo" :key="item.id" :class="{ 'completed': item.completed }">
                    <TodoItem 
                        :id="item.id"
                        :text="item.text"
                        :completed="item.completed"
                        :priority="item.priority"
                        @complete="handleComplete"
                        @delete="handleDelete"
                    />
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import TodoItem from './TodoItem.vue'

const props = defineProps({
    todo: {
        type: Array,
        required: true
    }
})

const emit = defineEmits(['update:todo'])

const handleComplete = (id) => {
    const updatedTodo = props.todo.map(item => {
        if (item.id === id) {
            return { ...item, completed: !item.completed }
        }
        return item
    })
    emit('update:todo', updatedTodo)
}

const handleDelete = (id) => {
    const updatedTodo = props.todo.filter(item => item.id !== id)
    emit('update:todo', updatedTodo)
}
</script>

<style scoped>
.todo-list {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

h1 {
    color: #2c3e50;
    text-align: center;
    margin-bottom: 30px;
}

.todo-table {
    width: 100%;
    border-collapse: collapse;
    background: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
}

th {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid #eee;
    background-color: #f8f9fa;
    font-weight: 600;
    color: #2c3e50;
}
</style>