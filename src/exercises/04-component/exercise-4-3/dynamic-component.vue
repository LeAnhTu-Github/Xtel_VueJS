<template>
    <div class="container">
        <h1>Bài Tập Vue.js</h1>
        <h2>Bài 4.3: Dynamic Component</h2>
        
        <div class="tab-container">
            <div v-for="tab in tabComponents" 
                 :key="tab.name" 
                 class="tab-item"
                 :class="{ 'active': activeTab === tab.name }">
                <button @click="activeTab = tab.name">
                    {{ tab.title }}
                </button>
            </div>
        </div>

        <div class="tab-content">
            <transition name="fade" mode="out-in">
                <keep-alive>
                    <component :is="currentComponent" />
                </keep-alive>
            </transition>
        </div>
    </div>
</template>

<script setup>
import ProfileTab from '@/components/tab-component/ProfileTab.vue';
import SettingsTab from '@/components/tab-component/SettingsTab.vue';
import MessagesTab from '@/components/tab-component/MessagesTab.vue';
import NotificationsTab from '@/components/tab-component/NotificationsTab.vue';
import { ref, computed } from 'vue';

// Dữ liệu mẫu
const tabComponents = ref([
    { name: 'ProfileTab', title: 'Profile', component: ProfileTab },
    { name: 'SettingsTab', title: 'Settings', component: SettingsTab },
    { name: 'MessagesTab', title: 'Messages', component: MessagesTab },
    { name: 'NotificationsTab', title: 'Notifications', component: NotificationsTab }
]);

const activeTab = ref('ProfileTab');

const currentComponent = computed(() => {
    const tab = tabComponents.value.find(tab => tab.name === activeTab.value);
    return tab ? tab.component : ProfileTab;
});
</script>

<style scoped>
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
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

/* Tab Container Styles */
.tab-container {
    display: flex;
    gap: 10px;
    background-color: #f8f9fa;
    border-radius: 12px;
    padding: 15px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
}

/* Tab Item Styles */
.tab-item {
    flex: 1;
}

.tab-item button {
    width: 100%;
    padding: 12px 20px;
    border: none;
    background: transparent;
    color: #2c3e50;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    border-radius: 8px;
    transition: all 0.3s ease;
}

.tab-item button:hover {
    background-color: #e9ecef;
}

/* Active Tab Styles */
.tab-item.active button {
    background-color: #42b983;
    color: white;
}

/* Tab Content Styles */
.tab-content {
    background-color: white;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    min-height: 300px;
}

/* Transition Styles */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>