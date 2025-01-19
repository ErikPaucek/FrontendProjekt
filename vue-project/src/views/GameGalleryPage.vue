<script lang="ts">
import {defineComponent} from 'vue'
import GameGallery from '../components/GameGallery.vue';
export default defineComponent({
  name: 'GameGalleryPage',
  components: {
    GameGallery,
  },
});

</script>

<template>
  <div>
    <game-gallery />
  </div>
</template>

<style scoped>

</style>
