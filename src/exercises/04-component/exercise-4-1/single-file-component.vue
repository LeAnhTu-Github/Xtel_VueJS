<template>
    <h1>Bài Tập Vue.js</h1>
    <h2>Bài 4.1: Single File Components</h2>
    <div class="user-list">
        <UserCard v-for="user in users" :key="user.id" :name="user.name" :age="user.age" :avatar="user.avatar"
            @click-card="handleClickCard(user)">
            <p>Slot ID: {{ user.id }}</p>
        </UserCard>
    </div>
</template>

<script setup>
import UserCard from '@/components/UserCard.vue';
import { ref } from 'vue';

const users = [
    { id: 1, name: "John Doe", age: 30, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John" },
    { id: 2, name: "Jane Smith", age: 25, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane" },
    { id: 3, name: "Bob Johnson", age: 35, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob" }
];

const handleClickCard = (user) => {
    alert(`You clicked on User: ${user.id} - ${user.name}`);
};
</script>

<style scoped>
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

.user-list {
    display: flex;
    flex-direction: row;
    gap: 16px;
    max-width: 600px;
    margin: auto;
}
</style>