<template>
    <td class="task-text">{{ text }}</td>
    <td>
        <span :class="['priority-badge', priority]">{{ priority }}</span>
    </td>
    <td>
        <span :class="['status-badge', completed ? 'completed' : 'pending']">
            {{ completed ? 'Completed' : 'Pending' }}
        </span>
    </td>
    <td class="actions">
        <button @click="$emit('complete', id)" class="btn-complete">
            {{ completed ? 'Undo' : 'Complete' }}
        </button>
        <button @click="$emit('delete', id)" class="btn-delete">Delete</button>
    </td>
</template>

<script setup>
const props = defineProps({
    id: {
        type: Number,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    priority: {
        type: String,
        default: 'low',
        validator: (value) => ['low', 'medium', 'high'].includes(value)
    }
})

defineEmits(['complete', 'delete'])
</script>

<style scoped>
.task-text {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid #eee;
}

.priority-badge {
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 0.85em;
    font-weight: 500;
    display: inline-block;
}

.priority-badge.high {
    background-color: #ffebee;
    color: #c62828;
}

.priority-badge.medium {
    background-color: #fff3e0;
    color: #ef6c00;
}

.priority-badge.low {
    background-color: #e8f5e9;
    color: #2e7d32;
}

.status-badge {
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 0.85em;
    font-weight: 500;
    display: inline-block;
}

.status-badge.completed {
    background-color: #e8f5e9;
    color: #2e7d32;
}

.status-badge.pending {
    background-color: #fff3e0;
    color: #ef6c00;
}

.actions {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid #eee;
}

button {
    padding: 6px 12px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.9em;
    margin-right: 8px;
    transition: all 0.3s ease;
}

.btn-complete {
    background-color: #4caf50;
    color: white;
}

.btn-complete:hover {
    background-color: #388e3c;
}

.btn-delete {
    background-color: #f44336;
    color: white;
}

.btn-delete:hover {
    background-color: #d32f2f;
}
</style>