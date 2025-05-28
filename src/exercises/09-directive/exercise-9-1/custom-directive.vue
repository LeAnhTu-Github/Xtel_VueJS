<template>
  <div>
    <input 
      v-focus
      type="text"
      placeholder="This input will be focused automatically"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const inputValue = ref('');

const handleInput = (value) => {
  inputValue.value = value;
}
</script>

<style scoped>
input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

input:focus {
  outline: none;
  border-color: #42b983;
  box-shadow: 0 0 0 2px rgba(66, 185, 131, 0.2);
}
</style>
