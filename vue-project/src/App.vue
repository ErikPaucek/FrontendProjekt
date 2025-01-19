<script>
import { useArticlesStore } from './stores/articlesStore';

export default {
  name: 'App',
  data() {
    const articlesStore = useArticlesStore();
    return {
      articles: articlesStore.articles,
    };
  },
};
</script>

<template>
  <div id="app">
    <nav>
      <router-link to="/about">O blogu</router-link>
      <router-link to="/">Články</router-link>
      <router-link to="/gallery">Galéria hier</router-link>
      <router-link to="/games">TOP Hry</router-link>
    </nav>
    <router-view />
    <footer>
      <p>Copyright 2025</p>
    </footer>
  </div>
</template>

<style>
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  background: linear-gradient(#000000, #434343);
  min-height: 100vh;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

nav {
  padding: 1em;
  display: flex;
  justify-content: center;
  max-width: 100%;
}

nav a {
  color: white;
  text-decoration: none;
  margin: 0 1em;
}

nav a:hover {
  text-decoration: underline;
}

footer {
  background-color: #434343;
  color: white;
  text-align: center;
  width: 100%;
  margin-top: auto;
}
</style>
