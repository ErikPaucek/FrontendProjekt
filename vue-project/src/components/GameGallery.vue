<script lang="ts">
import { defineComponent } from 'vue';
import { useGameGalleryStore } from '../stores/gameGalleryStore';

export default defineComponent({
  name: 'GameGallery',
  computed: {
    games() {
      const gameGalleryStore = useGameGalleryStore();
      return gameGalleryStore.games;
    },
  },
});
</script>

<template>
  <div class="game-gallery">
    <div class="gallery">
      <div class="game-card" v-for="game in games" :key="game.id">
        <a :href="game.purchaseUrl" class="game-link" target="_blank">
          <img :src="game.image" :alt="game.name" />
        </a>
        <h3>{{ game.name }}</h3>
      </div>
    </div>
  </div>
</template>

<style scoped>
.game-gallery {
  margin-top: 4rem;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #DECBA4;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  padding: 1rem;
  background-color: #DECBA4;
}

.game-card {
  background-color: white;
  text-align: center;
  border: 1px solid black;
  border-radius: 8px;
  padding: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.game-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.game-card img {
  width: 100%;
  height: 200px;
  object-fit: contain;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.game-card h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.game-card p {
  font-size: 0.9rem;
  color: #666;
}
</style>
