<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Comment',
  props: {
    author: String,
    text: String,
  },
});
</script>

<template>
  <div class="comment">
    <p><strong>{{ author }}:</strong> {{ text }}</p>
  </div>
</template>

<style scoped>
.comment {
  margin-top: 1rem;
  max-width: 600px;
  border-radius: 8px;
  color: black;
}
</style>
