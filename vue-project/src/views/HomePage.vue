<script lang="ts">
import { useArticlesStore } from '../stores/articlesStore';
import ArticleCard from '../components/ArticleCard.vue';

export default {
  name: 'HomePage',
  components: { ArticleCard },
  data() {
    return {
      articles: useArticlesStore().articles,
    };
  },
  methods: {
    readMore(title:string) {
      const article = this.articles.find((a) => a.title === title);
      if (article) {
        this.$router.push(`/article/${article.id}`);
      }
    },
  },
};
</script>

<template>
  <div class="home-page">
    <div class="articles-grid">
      <article-card
        v-for="article in articles"
        :key="article.id"
        :title="article.title"
        :summary="article.summary"
        @read-more="readMore"
      />
    </div>
  </div>
</template>

<style scoped>
.home-page {
  background: linear-gradient(#000000, #434343);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  box-sizing: border-box;
  overflow-x: hidden;
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
  gap: 2rem;
  column-gap: 10rem;
  width: calc(100% - 4rem);
  max-width: 1000px;
}

</style>
