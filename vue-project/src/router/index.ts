import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import ArticlePage from '../views/ArticlePage.vue';
import AboutPage from '../views/AboutPage.vue';
import GameGalleryPage from '../views/GameGalleryPage.vue';
import GamesPage from "@/views/GamesPage.vue";

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/article/:id', name: 'Article', component: ArticlePage },
  { path: '/about', name: 'About', component: AboutPage },
  { path: '/gallery', name: 'GameGallery', component: GameGalleryPage },
  {path : '/games', name: 'Games', component: GamesPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
