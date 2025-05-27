import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Contact from '../pages/Contact.vue'
import Dashboard from '../pages/Dashboard.vue'
import Admin from '../pages/Admin.vue'
import protectRouter from '@/exercises/06-router/exercise-6-3/protect-router.vue'
import { authService } from './auth'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {   
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {   
      path: '/login',
      name: 'login',
      component: protectRouter
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: { requiresAuth: true }
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      meta: { requiresAuth: true, role: 'admin' }
    }

  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !authService.isAuthenticated) {
    next('/login');
  } else if (to.meta.role && authService.user?.role !== to.meta.role) {
    next('/dashboard');
  } else {
    next();
  }
});

export default router;