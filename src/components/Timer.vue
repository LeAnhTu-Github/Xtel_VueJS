<template>
  <div class="timer">
    <h2>Timer: {{ seconds }} seconds</h2>
  </div>
</template>

<script setup>
    import { ref, onMounted, onBeforeUnmount, onBeforeMount } from 'vue';

    const seconds = ref(0);
    const timer = ref(null);
    
    onBeforeMount(() => {
        console.log('beforeMount: Component is about to be mounted')
    });

    onMounted(() => {
        console.log('mounted: Component is mounted')
        // Start counting
        timer.value = setInterval(() => {
            seconds.value++
        }, 1000)
    });

    onBeforeUnmount(() => {
        console.log('beforeUnmount: Component is about to be unmounted')
        // Cleanup timer
        if (timer.value) {
            clearInterval(timer.value)
            timer.value = null
        }
    });
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
