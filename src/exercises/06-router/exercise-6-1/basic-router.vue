<template>
    <div id="app">
      <nav class="nav-menu">
        <RouterLink to="/" class="nav-link">Home</RouterLink>
        <RouterLink to="/about" class="nav-link">About</RouterLink>
        <RouterLink to="/contact" class="nav-link">Contact</RouterLink>
      </nav>
      <main class="content">
        <RouterView />
      </main>
    </div>
  </template>

  <script setup>
    import { RouterLink, RouterView } from 'vue-router'
  </script>
  
  <style>
  .nav-menu {
    background-color: white;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;
  }

  .nav-link {
    display: inline-block;
    padding: 0.5rem 1rem;
    margin: 0 0.5rem;
    text-decoration: none;
    color: #2c3e50;
    font-weight: 500;
    border-radius: 4px;
    transition: all 0.3s ease;
  }

  .nav-link:hover {
    background-color: #f8f9fa;
    color: #42b983;
  }

  .nav-link.router-link-active {
    background-color: #42b983;
    color: white;
  }

  .content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .nav-menu {
      padding: 0.5rem;
    }

    .nav-link {
      padding: 0.4rem 0.8rem;
      margin: 0 0.2rem;
      font-size: 0.9rem;
    }

    .content {
      padding: 1rem;
    }
  }
  </style>