<template>
  <div class="dom-manipulation">
    <input
      ref="inputRef"
      v-model="inputValue"
      type="text"
      class="input-field"
      placeholder="Type something..."
    />
    <div ref="contentRef" class="content">
      {{ inputValue }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUpdated } from 'vue'

const inputValue = ref('')
const inputRef = ref(null)
const contentRef = ref(null)

onMounted(() => {
  inputRef.value.focus()
})

onUpdated(() => {
  const content = contentRef.value
  content.style.animation = 'none'
  content.offsetHeight
  content.style.animation = 'fadeIn 0.5s ease-in-out'
})
</script>

<style scoped>
.dom-manipulation {
  padding: 20px;
}

.input-field {
  padding: 8px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 4px;
  width: 100%;
  max-width: 300px;
}

.content {
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 4px;
  min-height: 40px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
