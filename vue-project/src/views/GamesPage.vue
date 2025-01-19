<script lang="ts">
import { defineComponent } from 'vue';
import { useGameStore } from '../stores/gameStore';
import GameCard from '../components/GameCard.vue';

export default defineComponent({
  name: 'GamesPage',
  components: { GameCard },
  computed: {
    games() {
      const gameStore = useGameStore();
      return gameStore.games;
    },
  },
});
</script>

<template>
  <div class="games-view">
    <div class="games-list">
      <GameCard v-for="game in games" :key="game.id" :game="game" />
    </div>
  </div>
</template>

<style scoped>
.games-view {
  margin-top: 4rem;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #DECBA4;
}

.games-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  padding: 1rem;
  background-color: #DECBA4;
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
