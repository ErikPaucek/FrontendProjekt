import { defineStore } from 'pinia';

export const useArticlesStore = defineStore('articlesStore', {
  state: () => ({
    articles: [
      {
        id: 1,
        title: 'The Legend of Zelda: Tears of the Kingdom',
        summary: 'Epické dobrodružstvo vo svete Hyrule.',
        content: 'Pridajte sa k Linkovi na jeho epickej ceste naprieč fascinujúcim svetom Hyrule. Tears of the Kingdom prináša nové schopnosti, obrovské plochy na preskúmanie a jedinečné výzvy, ktoré posunú vaše schopnosti na maximum. Objavte tajomstvá Sky Islands a zastavte starobylé zlo ohrozujúce kráľovstvo.',
      },
      {
        id: 2,
        title: 'Starfield',
        summary: 'Preskúmajte vesmír v tejto ambicióznej hre od Bethesda.',
        content: 'Vstúpte do nekonečného vesmíru plného planét na preskúmanie, komplexných príbehov a náročných výziev. Starfield je najambicióznejší projekt Bethesdy, ktorý kombinuje prvky RPG s vesmírnym dobrodružstvom. Vybudujte si vlastnú loď, spravte si reputáciu v galaxiách a objavte tajomstvá vesmíru.',
      },
      {
        id: 3,
        title: 'Baldur’s Gate 3',
        summary: 'Vstúpte do sveta Dungeons & Dragons s touto RPG klasikou.',
        content: 'Baldur’s Gate 3 ponúka hlboký príbeh, rozvetvené dialógy a komplexné súboje na základe pravidiel D&D. Zvoľte si vlastnú cestu, budujte vzťahy s postavami a rozhodujte o osude sveta Faerûn. Táto hra je majstrovským dielom v oblasti moderných RPG hier.',
      },
      {
        id: 4,
        title: 'Cyberpunk 2077: Phantom Liberty',
        summary: 'Nový datadisk, ktorý rozširuje svet Night City.',
        content: 'Phantom Liberty je expanzia, ktorá vylepšuje a rozširuje Cyberpunk 2077. Prináša nové postavy, zbrane a jedinečný príbeh špionáže. Objavte temné zákutia Night City a zapojte sa do nebezpečných misií, ktoré vás vtiahnu do sveta intríg a zrady.',
      },
      {
        id: 5,
        title: 'Elden Ring',
        summary: 'Objavte magický svet od FromSoftware.',
        content: 'Elden Ring kombinuje jedinečný svet od George R. R. Martina s náročnou hrateľnosťou známej série Dark Souls. Preskúmajte obrovský otvorený svet, bojujte proti mocným nepriateľom a odhaľte tajomstvá starobylého Elden Ringu. Každý krok je výzvou a každé víťazstvo je sladké.',
      },
      {
        id: 6,
        title: 'Hogwarts Legacy',
        summary: 'Život čarodejníka na Rokforte.',
        content: 'Preneste sa do magického sveta Harryho Pottera a zažite Rokfort ako nikdy predtým. Hogwarts Legacy vám umožní vytvoriť si vlastného čarodejníka, preskúmať ikonické miesta a učiť sa mocné kúzla. Objavte skryté tajomstvá a rozhodnite o osude kúzelníckeho sveta.',
      },
      {
        id: 7,
        title: 'Call of Duty: Modern Warfare III',
        summary: 'Akčná FPS s intenzívnymi bojmi.',
        content: 'Zažite dramatické boje a adrenalínové misie v najnovšej časti série Modern Warfare. Hra prináša nové mechaniky, strhujúcu kampaň a multiplayerový režim, ktorý posúva zážitok z FPS na novú úroveň. Modern Warfare III je povinnosť pre každého fanúšika akčných hier.',
      },
      {
        id: 8,
        title: 'Assassin’s Creed Mirage',
        summary: 'Návrat k základom série Assassin’s Creed.',
        content: 'Mirage nás vracia do stredovekého Bagdadu, kde prežijete pútavý príbeh asasína Basima. Hra kladie dôraz na stealth, parkour a staré dobré hodnoty série. Objavte fascinujúce mesto, plňte misie a porazte nepriateľov so štýlom.',
      }
    ],
  }),
  actions: {
    getArticleById(id:any) {
      return this.articles.find((article) => article.id === id);
    },
  },
});
