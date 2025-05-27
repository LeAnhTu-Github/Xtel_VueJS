<template>
    <div class="user-card" @click="$emit('click-card')">

        <img :src="avatar" alt="User Avatar" class="avatar" />
        <div class="info">
            <slot />
            <h2>{{ name }}</h2>
            <p>Age: {{ age }}</p>

        </div>
    </div>
</template>

<script setup>
defineProps({
    name: String,
    age: Number,
    avatar: String
});

defineEmits(['click-card']);
</script>

<style scoped>
.user-card {
    display: flex;
    align-items: center;
    gap: 16px;
    border: 1px solid #ccc;
    border-radius: 12px;
    padding: 12px;
    cursor: pointer;
    transition: box-shadow 0.3s ease;
}

.user-card:hover {
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.avatar {
    width: 64px;
    height: 64px;
    border-radius: 50%;
}

.info h2 {
    margin: 0;
    font-size: 1.2rem;
}

.info p {
    margin: 4px 0 0;
    color: #666;
}
</style>