<template>
  <div class="blog-container">
    <h1>Blog Posts</h1>
    <div class="posts-list">
      <RouterLink 
        v-for="post in blogPosts" 
        :key="post.id"
        :to="{ 
          name: 'post', 
          params: { id: post.id },
          props: { posts: blogPosts }
        }"
        class="post-link"
      >
        <h2>{{ post.title }}</h2>
        <p class="post-meta">
          By {{ post.author }} on {{ formatDate(post.date) }}
        </p>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const blogPosts = ref([
  {
    id: 1,
    title: "Getting Started with Vue.js",
    content: "Vue.js is a progressive framework...",
    author: "John Doe",
    date: "2024-01-15",
    tags: ["vuejs", "javascript"]
  },
  {
    id: 2,
    title: "Understanding the Composition API",
    content: "The Composition API provides...",
    author: "Jane Smith",
    date: "2024-01-20",
    tags: ["vuejs", "composition-api"]
  },
  {
    id: 3,
    title: "Vue Router Best Practices",
    content: "When building SPAs with Vue...",
    author: "Bob Johnson",
    date: "2024-01-25",
    tags: ["vuejs", "router"]
  }
])

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString()
}
</script>

<style scoped>
.blog-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.posts-list {
  margin-top: 20px;
}

.post-link {
  display: block;
  padding: 15px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
}

.post-link:hover {
  background-color: #f5f5f5;
  transform: translateY(-2px);
}

.post-meta {
  color: #666;
  font-size: 0.9em;
  margin-top: 5px;
}
</style>
