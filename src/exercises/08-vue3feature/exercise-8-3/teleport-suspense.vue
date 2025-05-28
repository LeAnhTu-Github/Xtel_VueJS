
<template>
  <div>
    <button @click="open" class="open-button">Open Modal</button>

    <Teleport to="body">
      <div v-if="isVisible" class="modal-overlay" @click="close">
        <div class="modal" @click.stop>
          <h1>Modal</h1>
          <p>This is a modal</p>
          <button @click="close" class="close-button">Close</button>
        </div>
      </div>
    </Teleport>
    <!-- Async component với Suspense -->
    <div class="async-section">
      <h2>Async Component Demo</h2>
      <Suspense>
        <template #default>
          <AsyncComponent />
        </template>
        <template #fallback>
          <LoadingSpinner />
        </template>
      </Suspense>
    </div>
  </div>
</template>

<script setup>
import { ref,defineAsyncComponent,Suspense } from 'vue';
import LoadingSpinner from './LoadingSpinner.vue';
import ErrorComponent from './ErrorComponent.vue';

const isVisible = ref(false);

const open = () => {
  isVisible.value = true;
};

const close = () => {
  isVisible.value = false;
};
// Async component với Suspense
const AsyncComponent = defineAsyncComponent({
  loader: () => import('./HeavyComponent.vue'),
  loadingComponent: LoadingSpinner,
  errorComponent: ErrorComponent,
  delay: 200,
  timeout: 3000
});
</script>

<style scoped>
h2{
    margin-top: 30px;
}
.open-button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.open-button:hover {
  background-color: #3aa876;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background: white;
  padding: 20px;
  border-radius: 8px;
  min-width: 300px;
  max-width: 500px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.modal h1 {
  margin-top: 0;
  color: #2c3e50;
}

.close-button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 16px;
}

.close-button:hover {
  background-color: #3aa876;
}
</style>