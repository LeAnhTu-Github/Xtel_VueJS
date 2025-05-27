<template>
  <div class="blog-post" v-if="post">
    <div class="post-header">
      <h1>{{ post.title }}</h1>
      <div class="post-meta">
        <span class="author">By {{ post.author }}</span>
        <span class="date">on {{ formatDate(post.date) }}</span>
      </div>
      <div class="post-tags">
        <span v-for="tag in post.tags" :key="tag" class="tag">
          #{{ tag }}
        </span>
      </div>
    </div>
    
    <div class="post-content">
      {{ post.content }}
    </div>

    <div class="post-navigation">
      <RouterLink 
        v-if="previousPost"
        :to="{ name: 'post', params: { id: previousPost.id }}"
        class="nav-link prev"
      >
        <span class="nav-arrow">←</span>
        <span class="nav-title">{{ previousPost.title }}</span>
      </RouterLink>
      <RouterLink 
        v-if="nextPost"
        :to="{ name: 'post', params: { id: nextPost.id }}"
        class="nav-link next"
      >
        <span class="nav-title">{{ nextPost.title }}</span>
        <span class="nav-arrow">→</span>
      </RouterLink>
    </div>
  </div>
  <NotFound v-else />
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import NotFound from './NotFound.vue'

const props = defineProps({
  posts: {
    type: Array,
    required: true
  }
})

const route = useRoute()
const postId = computed(() => parseInt(route.params.id))

const post = computed(() => {
  return props.posts.find(p => p.id === postId.value)
})

const currentIndex = computed(() => {
  return props.posts.findIndex(p => p.id === postId.value)
})

const previousPost = computed(() => {
  return currentIndex.value > 0 ? props.posts[currentIndex.value - 1] : null
})

const nextPost = computed(() => {
  return currentIndex.value < props.posts.length - 1 ? props.posts[currentIndex.value + 1] : null
})

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString()
}
</script>

<style scoped>
.blog-post {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.post-header {
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 2px solid #f0f0f0;
}

.post-header h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 20px;
  line-height: 1.2;
}

.post-meta {
  display: flex;
  gap: 20px;
  color: #666;
  margin: 15px 0;
  font-size: 1.1rem;
}

.post-meta .author {
  color: #42b983;
  font-weight: 500;
}

.post-meta .date {
  color: #666;
}

.post-tags {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tag {
  background-color: #f8f9fa;
  color: #42b983;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid #e9ecef;
  transition: all 0.3s ease;
}

.tag:hover {
  background-color: #42b983;
  color: white;
  transform: translateY(-2px);
}

.post-content {
  line-height: 1.8;
  font-size: 1.1rem;
  color: #2c3e50;
  margin-bottom: 40px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
}

.post-navigation {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 2px solid #f0f0f0;
}

.nav-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #2c3e50;
  padding: 12px 20px;
  border-radius: 8px;
  transition: all 0.3s ease;
  background: #f8f9fa;
  border: 1px solid #e9ecef;
}

.nav-link:hover {
  background-color: #42b983;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(66, 185, 131, 0.2);
}

.nav-arrow {
  font-size: 1.2rem;
  margin: 0 8px;
}

.nav-title {
  font-weight: 500;
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.prev {
  margin-right: auto;
}

.next {
  margin-left: auto;
}

/* Responsive Design */
@media (max-width: 768px) {
  .blog-post {
    padding: 20px;
    margin: 20px;
  }

  .post-header h1 {
    font-size: 2rem;
  }

  .post-meta {
    flex-direction: column;
    gap: 10px;
  }

  .post-navigation {
    flex-direction: column;
    gap: 20px;
  }

  .nav-link {
    width: 100%;
    justify-content: center;
  }

  .nav-title {
    max-width: none;
  }
}
</style> 