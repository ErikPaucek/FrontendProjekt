import { defineStore } from 'pinia';

export const useGameGalleryStore = defineStore('gameGalleryStore', {
  state: () => ({
    games: [
      {
        id: 1,
        name: 'Assassin’s Creed',
        image: '/images/assasinscreed.avif',
        purchaseUrl: 'https://store.steampowered.com/app/3035570/Assassins_Creed_Mirage/',
      },
      {
        id: 2,
        name: 'Baldurs Gate',
        image: '/images/baldurs_gate.jpg',
        purchaseUrl: 'https://store.steampowered.com/app/1086940/Baldurs_Gate_3/'
      },
      {
        id: 3,
        name: 'Call of Duty Modern Warfare III',
        image: '/images/cod.jpg',
        purchaseUrl: 'https://store.steampowered.com/app/2519060/Call_of_Duty_Modern_Warfare_III/',
      },
      {
        id: 4,
        name: 'Cyberpunk 2077',
        image: '/images/cyberpunk.jpg',
        purchaseUrl: 'https://store.steampowered.com/app/1091500/Cyberpunk_2077/',
      },
      {
        id: 5,
        name: 'Elden Ring',
        image: '/images/elden_ring.jpg',
        purchaseUrl: 'https://store.steampowered.com/app/1245620/ELDEN_RING/',
      },
      {
        id: 6,
        name: 'Hogwarts Legacy',
        image: '/images/hogwards_legacy.webp',
        purchaseUrl: 'https://store.steampowered.com/app/990080/Hogwarts_Legacy/',
      },
      {
        id: 7,
        name: 'Starfield',
        image: '/images/starfield.jpg',
        purchaseUrl: 'https://store.steampowered.com/app/1716740/Starfield/',
      },
      {
        id: 8,
        name: 'Zelda',
        image: 'images/zelda.jpg',
        purchaseUrl: 'https://www.g2a.com/the-legend-of-zelda-breath-of-the-wild-nintendo-switch-nintendo-eshop-account-global-i10000154753007?___language=en&er=e7cbda0a75eef75582f9c6ee7d4e3549984c1576437563c4802446efe2a48a3378ea9d2e42459a07c1211538583a9332&uuid=b1c371e1-12c9-4aa0-a309-d8d878c4a7fa&adid=GA-SK_PEB_ON_CGD_PMAX_FULL&id=47&utm_medium=cpc&utm_source=google&utm_campaign=GA-SK_PEB_ON_CGD_PMAX_FULL&utm_id=20485787228&gad_source=1&gclid=Cj0KCQiAv628BhC2ARIsAIJIiK_iUfS-Dr_VtxX30sSH2jV4eK19FO6wYzdA4YoAv7j55o5Qyk1pVgkaAgOcEALw_wcB&gclsrc=aw.ds',
      },
    ],
  }),
});
