import { defineStore } from 'pinia';

interface Comment {
  articleId: number;
  author: string;
  text: string;
}

export const useCommentsStore = defineStore('commentsStore', {
  state: () => ({
    comments: [] as Comment[],
  }),
  actions: {
    addComment(articleId: number, comment: { author: string; text: string }): void {
      this.comments.push({
        articleId,
        author: comment.author,
        text: comment.text,
      });
    },
    getCommentsByArticle(articleId: number): Comment[] {
      return this.comments.filter((comment) => comment.articleId === articleId);
    },
  },
});
