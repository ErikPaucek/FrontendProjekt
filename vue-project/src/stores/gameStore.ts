import { defineStore } from 'pinia';

export const useGameStore = defineStore('gameStore', {
  state: () => ({
    games: [
      {
        id: 1,
        name: 'The Witcher 3: Blood and Wine',
        category: 'Najlepšia hra roka 2016',
        rating: 9,
        trailerUrl: 'https://www.youtube.com/watch?v=UZP1W6D6aZA&ab_channel=GameSpot',
        image: '/images/witcher.jpg',
      },
      {
        id: 2,
        name: 'Horizon Zero Dawn',
        category: 'Najlepšia hra roka 2017',
        rating: 9.5,
        trailerUrl: 'https://www.youtube.com/watch?v=wzx96gYA8ek&ab_channel=PlayStation',
        image: '/images/horizon.jpg',
      },
      {
        id: 3,
        name: 'Red Dead Redemption 2',
        category: 'Najlepšia hra roka 2018',
        rating: 9.8,
        trailerUrl: 'https://www.youtube.com/watch?v=eaW0tYpxyp0&ab_channel=RockstarGames',
        image: '/images/rdr.avif',
      },
      {
        id: 4,
        name: 'Sekiro: Shadows Die Twice',
        category: 'Najlepšia hra roka 2019',
        rating: 9,
        trailerUrl: 'https://www.youtube.com/watch?v=4OgoTZXPACo',
        image: '/images/sekiro.jpg',
      },
      {
        id: 5,
        name: 'The Last of Us Part II',
        category: 'Najlepšia hra roka 2020',
        rating: 9.5,
        trailerUrl: 'https://www.youtube.com/watch?v=vhII1qlcZ4E&ab_channel=PlayStation',
        image: '/images/last.avif',
      },
      {
        id: 6,
        name: 'It Takes Two',
        category: 'Najlepšia hra roka 2021',
        rating: 9.8,
        trailerUrl: 'https://www.youtube.com/watch?v=ohClxMmNLQQ&ab_channel=ElectronicArts',
        image: '/images/2.webp',
      },
      {
        id: 7,
        name: 'God of War Ragnarök',
        category: 'Najlepšia hra roka 2022',
        rating: 9,
        trailerUrl: 'https://www.youtube.com/watch?v=EE-4GvjKcfs',
        image: '/images/gow.webp',
      },
      {
        id: 8,
        name: 'Resident Evil 4 Remake',
        category: 'Najlepšia hra roka 2023',
        rating: 9.5,
        trailerUrl: 'https://www.youtube.com/watch?v=Id2EaldBaWw&ab_channel=ResidentEvil',
        image: '/images/re.avif',
      },
    ],
  }),
  actions: {
    increaseRating(gameId: number) {
      const game = this.games.find((game) => game.id === gameId);
      if (game && game.rating < 10) {
        game.rating += 0.1;
        game.rating = parseFloat(game.rating.toFixed(1));
      }
    },
    decreaseRating(gameId: number) {
      const game = this.games.find((game) => game.id === gameId);
      if (game && game.rating > 0) {
        game.rating -= 0.1;
        game.rating = parseFloat(game.rating.toFixed(1));
      }
    },
  },
});
