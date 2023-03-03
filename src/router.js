import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import AboutUs from './pages/AboutUs.vue';
import PostsList from './pages/PostsList.vue';

   const router = createRouter({
   history: createWebHistory(),
   routes: [
      {
      path: '/',
      name: 'home',
      component: HomePage
      },
      {
         path: '/about-us',
         name: 'about-us',
         component: AboutUs
      },
      {
      path: '/posts',
      name: 'posts',
      component: PostsList
      },
   ]
});
export { router };