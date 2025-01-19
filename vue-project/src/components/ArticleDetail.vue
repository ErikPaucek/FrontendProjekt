<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ArticleDetail',
  props: {
    title: String,
    content: String,
  },
});
</script>

<template>
  <div class="article-detail">
    <h1>{{ title }}</h1>
    <p>{{ content }}</p>
  </div>
</template>


<style scoped>
.article-detail {
  background-color: #DECBA4;
  margin-top: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 2rem;
  border-radius: 8px;
  color: black;
}

h1 {
  margin-bottom: 1rem;
}

p {
  margin: 1rem 0;
}
</style>
