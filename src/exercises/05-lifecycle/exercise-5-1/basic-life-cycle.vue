<template>
    <div>
      <button @click="showTimer = !showTimer">Toggle Timer</button>
      <Timer v-if="showTimer" />
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import Timer from '@/components/Timer.vue';

    const showTimer = ref(true);    
</script>

<style scoped>
.timer {
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    margin: 20px;
    text-align: center;
    background-color: #f8f9fa;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.timer h2 {
    color: #2c3e50;
    font-size: 1.5rem;
    margin: 0;
    font-weight: 500;
}
</style>
