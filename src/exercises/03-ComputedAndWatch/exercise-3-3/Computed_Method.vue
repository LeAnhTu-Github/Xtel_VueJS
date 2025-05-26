<template>
    <div class="todo-container">
        <h1>Bài Tập Vue.js</h1>
        <h2>Bài 3.3: Computed Method</h2>

        <div class="filter-controls">
            <div class="search-box">
                <label for="search">Tìm kiếm:</label>
                <input type="text" id="search" v-model="searchQuery" class="search-input">
            </div>
            <div class="category-filter">
                <label for="category">Chọn danh mục:</label>
                <select id="category" v-model="selectedCategory" class="category-select">
                    <option value="">Tất cả</option>
                    <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
                </select>
            </div>
        </div>

        <div class="performance-metrics">
            <div class="metric">
                <h3>Thời gian search bằng Method</h3>
                <p>{{ methodTime }} ms</p>
            </div>
            <div class="metric">
                <h3>Thời gian search bằng Computed</h3>
                <p>{{ computedTime }} ms</p>
            </div>
        </div>

        <div class="results-container">
            <div class="results-section">
                <h3>Danh sách tìm kiếm bằng Method</h3>
                <ul class="items-list">
                    <li v-for="item in methodFilteredItems" 
                        :key="item.id" 
                        class="item">
                        {{ item.name }} - ${{ item.price }} ({{ item.category }})
                    </li>
                </ul>
            </div>

            <div class="results-section">
                <h3>Danh sách tìm kiếm bằng Computed</h3>
                <ul class="items-list">
                    <li v-for="item in computedFilteredItems" 
                        :key="item.id" 
                        class="item">
                        {{ item.name }} - ${{ item.price }} ({{ item.category }})
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

// Dữ liệu mẫu - 1000 items
const generateLargeDataset = () => {
  const items = [];
  for (let i = 1; i <= 1000; i++) {
    items.push({
      id: i,
      name: `Product ${i}`,
      price: Math.floor(Math.random() * 1000) + 100,
      category: ['Electronics', 'Clothing', 'Books', 'Home'][Math.floor(Math.random() * 4)]
    });
  }
  return items;
};

// State
const items = ref(generateLargeDataset())
const categories = ['Electronics', 'Clothing', 'Books', 'Home']
const searchQuery = ref('')
const selectedCategory = ref('')

// Method filter
const methodFilteredItems = ref([])
const methodTime = ref(0)
function filterByMethod() {
    const start = performance.now()
    let result = items.value
    if (searchQuery.value.trim()) {
        result = result.filter(item =>
            item.name.toLowerCase().includes(searchQuery.value.toLowerCase())
        )
    }
    if (selectedCategory.value) {
        result = result.filter(item => item.category === selectedCategory.value)
    }
    methodFilteredItems.value = result
    methodTime.value = (performance.now() - start).toFixed(2)
}

// Computed filter
const computedTime = ref(0)
const computedFilteredItems = computed(() => {
    const start = performance.now()
    let result = items.value
    if (searchQuery.value.trim()) {
        result = result.filter(item =>
            item.name.toLowerCase().includes(searchQuery.value.toLowerCase())
        )
    }
    if (selectedCategory.value) {
        result = result.filter(item => item.category === selectedCategory.value)
    }
    computedTime.value = (performance.now() - start).toFixed(2)
    return result
})

// Watch để cập nhật method filter khi input thay đổi
watch([searchQuery, selectedCategory], filterByMethod, { immediate: true })
</script>

<style scoped>
.todo-container {
    max-width: 1200px;
    margin: 2rem auto;
    padding: 2rem;
    background: #f8f9fa;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.filter-controls {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
}

.search-box, .category-filter {
    flex: 1;
}

.search-input, .category-select {
    width: 100%;
    padding: 0.75rem;
    border: 2px solid #e9ecef;
    border-radius: 6px;
    font-size: 1rem;
}

.performance-metrics {
    display: flex;
    gap: 2rem;
    margin-bottom: 2rem;
}

.metric {
    background: #fff;
    border-radius: 8px;
    padding: 1rem 2rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    flex: 1;
}

.results-container {
    display: flex;
    gap: 2rem;
}

.results-section {
    flex: 1;
    background: #fff;
    border-radius: 8px;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.items-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.item {
    padding: 0.5rem;
    border-bottom: 1px solid #e9ecef;
}

.item:last-child {
    border-bottom: none;
}

.item:hover {
    background-color: #f8f9fa;
}

@media (max-width: 900px) {
    .results-container {
        flex-direction: column;
    }
}
</style>