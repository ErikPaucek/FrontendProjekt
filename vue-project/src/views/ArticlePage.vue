<script lang="ts">
import { useArticlesStore } from '../stores/articlesStore';
import { useCommentsStore } from '../stores/commentsStore';
import ArticleDetail from '../components/ArticleDetail.vue';
import Comment from '../components/Comment.vue';
import CommentForm from '../components/CommentForm.vue';

export default {
  name: 'ArticlePage',
  components: { ArticleDetail, Comment, CommentForm },
  data() {
    const articlesStore = useArticlesStore();
    const commentsStore = useCommentsStore();
    const articleId = Number(this.$route.params.id);
    const article = articlesStore.getArticleById(articleId);
    const comments = commentsStore.getCommentsByArticle(articleId);

    return {
      article,
      comments: comments as Array<{ author: string; text: string }>,
    };
  },
  methods: {
    addComment(comment: { author: string; text: string }): void {
      const commentsStore = useCommentsStore();
      const articleId = Number(this.$route.params.id);
      commentsStore.addComment(articleId, comment);
      this.comments = commentsStore.getCommentsByArticle(articleId);
    },
  },
};
</script>

<template>
  <div class="article-page">
    <article-detail v-if="article" :title="article.title" :content="article.content" />
    <h3 v-if="article">Recenzia od diváka:</h3>
    <comment
      v-for="(comment, index) in comments"
      :key="index"
      :author="comment.author"
      :text="comment.text"
    />
    <comment-form @comment-added="addComment" />
  </div>
</template>

<style scoped>
.article-page {
  background-color: #DECBA4;
  margin-top: 6rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
  border-radius: 8px;
  color: black;
}

h3 {
  margin-bottom: 1rem;
}

.comment p {
  margin: 0.5rem 0;
}
</style>
