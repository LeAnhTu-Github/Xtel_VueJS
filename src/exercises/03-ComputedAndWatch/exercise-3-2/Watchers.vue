<template>
    <div class="todo-container">
        <h1>Bài Tập Vue.js</h1>
        <h2>Bài 3.2: Watchers</h2>
        
        <form @submit.prevent="handleSearch" class="todo-input">
            <div class="search-wrapper">
                <input 
                    type="text" 
                    v-model="inputSearch" 
                    placeholder="Nhập thiết bị cần tìm kiếm"
                    :disabled="isLoading"
                >
                <div v-if="isLoading" class="loading-spinner"></div>
            </div>
            <button type="submit" class="search-btn" :disabled="isLoading">
                {{ isLoading ? 'Đang tìm...' : 'Tìm kiếm' }}
            </button>
        </form>

        <div class="search-results">
            <div v-if="searchResults.length > 0" class="results-list">
                <div v-for="(result, index) in searchResults" 
                     :key="index" 
                     class="result-item">
                    {{ result }}
                </div>
            </div>
            <div v-else-if="hasSearched" class="no-results">
                Không tìm thấy kết quả phù hợp
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const mockData = ref([
    "Apple iPhone 15", "Samsung Galaxy S24", "Google Pixel 8",
    "OnePlus 11", "Sony Xperia 1", "Xiaomi Mi 13",
    "Oppo Find X6", "Huawei P60", "Realme GT3",
    "Vivo X90", "Honor Magic5", "Asus ROG Phone 7"
])

const inputSearch = ref('')
const searchResults = ref([])
const isLoading = ref(false)
const hasSearched = ref(false)
const searchTimeout = ref(null)

const handleSearch = async () => {
    if (!inputSearch.value.trim()) {
        searchResults.value = []
        hasSearched.value = false
        return
    }

    isLoading.value = true
    hasSearched.value = true

    try {
        await new Promise(resolve => setTimeout(resolve, 800))
        
        searchResults.value = mockData.value.filter(item => 
            item.toLowerCase().includes(inputSearch.value.toLowerCase())
        )
    } catch (error) {
        console.error('Search error:', error)
        searchResults.value = []
    } finally {
        isLoading.value = false
    }
}

watch(inputSearch, () => {
    if (searchTimeout.value) {
        clearTimeout(searchTimeout.value)
    }

    searchTimeout.value = setTimeout(() => {
        handleSearch()
    }, 500) 
}, {immediate: true})
</script>
<style scoped>
.todo-container {
    width: 600px;
    margin: 2rem auto;
    padding: 2rem;
    background-color: #f8f9fa;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

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

.todo-input {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
    background-color: white;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.search-wrapper {
    flex: 1;
    position: relative;
}

input[type="text"] {
    width: 100%;
    padding: 0.75rem;
    border: 2px solid #e9ecef;
    border-radius: 6px;
    font-size: 1rem;
    transition: all 0.3s ease;
}

input[type="text"]:focus {
    outline: none;
    border-color: #42b983;
    box-shadow: 0 0 0 3px rgba(66, 185, 131, 0.2);
}

input[type="text"]:disabled {
    background-color: #f8f9fa;
    cursor: not-allowed;
}

.search-btn {
    padding: 0.75rem 1.5rem;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    min-width: 120px;
}

.search-btn:hover:not(:disabled) {
    background-color: #3aa876;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(66, 185, 131, 0.2);
}

.search-btn:disabled {
    background-color: #a8d5c2;
    cursor: not-allowed;
}

.loading-spinner {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    border: 2px solid #f3f3f3;
    border-top: 2px solid #42b983;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: translateY(-50%) rotate(0deg); }
    100% { transform: translateY(-50%) rotate(360deg); }
}

.search-results {
    background-color: white;
    border-radius: 8px;
    padding: 1rem;
    min-height: 100px;
}

.results-list {
    display: grid;
    gap: 0.5rem;
}

.result-item {
    padding: 0.75rem;
    background-color: #f8f9fa;
    border-radius: 6px;
    transition: all 0.2s ease;
}

.result-item:hover {
    background-color: #e9ecef;
    transform: translateX(4px);
}

.no-results {
    text-align: center;
    color: #6c757d;
    padding: 2rem;
    font-style: italic;
}

@media screen and (max-width: 768px) {
    .todo-container {
        margin: 1rem;
        padding: 1rem;
    }

    .todo-input {
        flex-direction: column;
    }

    .search-btn {
        width: 100%;
    }
}
</style>