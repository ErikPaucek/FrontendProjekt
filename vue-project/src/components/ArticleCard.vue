<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ArticleCard',
  props: {
    title: String,
    summary: String,
    image: String,
  },
  methods: {
    handleClick() {
      this.$emit('read-more', this.title);
    },
  },
});
</script>

<template>
  <div class="article-card">
    <h2>{{ title }}</h2>
    <p>{{ summary }}</p>
    <button @click="handleClick">Čítať viac</button>
  </div>
</template>

<style scoped>
.article-card {
  background-color: #DECBA4;
  color: black;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  transition: transform 0.2s, box-shadow 0.2s;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.article-card:hover {
  transform: scale(1.03);

}

h2 {
  color: black;
  margin-bottom: 1rem;
}

p {
  margin-bottom: 1.5rem;
}

button {
  padding: 0.5rem 1rem;
  background-color: #434343;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

button:hover {
  background-color: gray;
}
</style>
