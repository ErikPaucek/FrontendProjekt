import { defineStore } from 'pinia';

export const useCommentsStore = defineStore('commentsStore', {
  state: () => ({
    comments: [],
  }),
  actions: {
    addComment(articleId: number, comment: { author: string; text: string }) {
      this.comments.push({
        articleId: articleId,
        author: comment.author,
        text: comment.text,
      });
    },
    getCommentsByArticle(articleId: number) {
      return this.comments.filter((comment) => comment.articleId === articleId);
    },
  },
});
