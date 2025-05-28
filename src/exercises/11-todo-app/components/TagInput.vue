<template>
    <div class="form-group tags-input">
      <div class="input-wrapper">
        <div class="tags-container">
          <span 
            v-for="(tag, index) in modelValue" 
            :key="index"
            class="tag"
          >
            {{ tag }}
            <button @click="removeTag(index)" class="tag-remove">×</button>
          </span>
          <input 
            type="text" 
            v-model="tagInput"
            @keydown.enter.prevent="addTag"
            placeholder="Thêm tag"
            class="tag-input"
          />
        </div>
        <span class="input-icon">#</span>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps({
    modelValue: {
      type: Array,
      required: true
    }
  });
  
  const emit = defineEmits(['update:modelValue']);
  
  const tagInput = ref('');
  
  const addTag = () => {
    if (tagInput.value.trim() && !props.modelValue.includes(tagInput.value.trim())) {
      emit('update:modelValue', [...props.modelValue, tagInput.value.trim()]);
      tagInput.value = '';
    }
  };
  
  const removeTag = (index) => {
    const newTags = [...props.modelValue];
    newTags.splice(index, 1);
    emit('update:modelValue', newTags);
  };
  </script>
  
  <style scoped>
  .tags-input {
    width: 100%;
  }
  
  .input-wrapper {
    position: relative;
    width: 100%;
  }
  
  .tags-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
    padding: 8px 40px 8px 40px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    background: white;
    min-height: 48px;
    transition: all 0.3s ease;
    width: 100%;
    box-sizing: border-box;
  }
  
  .tags-container:focus-within {
    border-color: #4CAF50;
    box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.2);
  }
  
  .tag-input {
    flex: 1;
    min-width: 120px;
    border: none;
    padding: 4px;
    font-size: 1rem;
    color: #333;
    background: transparent;
  }
  
  .tag-input:focus {
    outline: none;
  }
  
  .tag {
    background: #e3f2fd;
    color: #1976d2;
    padding: 4px 8px;
    border-radius: 16px;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    gap: 4px;
    transition: all 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .tag-remove {
    background: none;
    border: none;
    color: inherit;
    opacity: 0.7;
    cursor: pointer;
    padding: 0 2px;
    font-size: 1.1rem;
    line-height: 1;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    border-radius: 50%;
  }
  
  .tag-remove:hover {
    opacity: 1;
    background: rgba(0, 0, 0, 0.1);
  }
  
  .input-icon {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: #666;
    font-size: 1.2rem;
    pointer-events: none;
  }
  
  /* Dark mode styles */
  .dark-mode .tags-container {
    background: #2d2d2d;
    border-color: #444;
  }
  
  .dark-mode .tag-input {
    color: #fff;
  }
  
  .dark-mode .tag {
    background: #1a237e;
    color: #fff;
  }
  
  .dark-mode .tag-remove:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  
  .dark-mode .input-icon {
    color: #888;
  }
  
  /* Responsive styles */
  @media (max-width: 768px) {
    .tags-container {
      padding: 6px 36px 6px 36px;
      min-height: 42px;
    }
    
    .tag {
      padding: 3px 6px;
      font-size: 0.85rem;
    }
    
    .tag-input {
      min-width: 100px;
    }
  }
  </style>