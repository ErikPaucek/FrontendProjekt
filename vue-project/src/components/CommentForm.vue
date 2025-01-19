<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CommentForm',
  data() {
    return {
      author: '',
      text: '',
    };
  },
  methods: {
    submitComment() {
      const newComment = {
        author: this.author,
        text: this.text,
      };

      this.$emit('comment-added', newComment);
      this.author = '';
      this.text = '';
    },
  },
});
</script>

<template>
  <form @submit.prevent="submitComment" class="comment-form">
    <label for="author">Meno:</label>
    <input v-model="author" required />
    <label for="text">Recenzia:</label>
    <textarea v-model="text" required></textarea>
    <button type="submit">Pridať Recenziu</button>
  </form>
</template>

<style scoped>
.comment-form {
  background-color: #DECBA4;
  margin-top: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  padding: 1.5rem;
  border-radius: 8px;
}

input,
textarea {
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem;
  color: black;
}

button {
  padding: 0.5rem 1rem;
  background-color: #434343;
  color: white;
  font-weight: bold;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  width: 30%;
  transition: background-color 0.2s;
  display: block;
  margin: 0 auto;
}

button:hover {
  background-color: gray;
}
</style>
