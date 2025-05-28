<template>
    <div>
        <h1>{{ message }}</h1>
    </div>
</template>

<script setup>
import { inject } from 'vue';

const message = inject('message', "default Value");
console.log(1111, message)
</script>

<style scoped>
h2 {
    color: white;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;
    text-align: center;
}
</style>