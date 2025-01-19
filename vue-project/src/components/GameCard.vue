<script lang="ts">
import { defineComponent } from 'vue';
import { useGameStore } from '../stores/gameStore';

export default defineComponent({
  name: "GameCard",
  props: {
    game: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      gameStore: useGameStore(),
    };
  },
  methods: {
    increaseRating() {
      this.gameStore.increaseRating(this.game.id);
    },
    decreaseRating() {
      this.gameStore.decreaseRating(this.game.id);
    },
  },
});
</script>

<template>
  <div class="game-card">
    <img :src="game.image" :alt="game.name" class="game-image" />
    <h3>{{ game.name }}</h3>
    <p>{{ game.category }}</p>
    <p>Hodnotenie: {{ game.rating }}</p>
    <div class="links">
      <a :href="game.trailerUrl" target="_blank">Trailer</a>
    </div>
    <div class="rating-controls">
      <button @click="decreaseRating">-</button>
      <button @click="increaseRating">+</button>
    </div>
  </div>
</template>

<style scoped>
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

.game-image {
  width: 100%;
  height: 200px;
  object-fit: contain;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.links a {
  display: inline-block;
  margin: 0.5rem;
  color: black;
  text-transform: uppercase;

}

.links a:hover {
  text-decoration: underline;
}

.rating-controls {
  margin-top: 0.5rem;
}

.rating-controls button {
  padding: 0.5rem 1rem;
  margin: 0 0.25rem;
  background-color: #434343;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.rating-controls button:hover {
  background-color: gray;
}
</style>
