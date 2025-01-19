<template>
  <div class="about-page">
    <h1>O blogu</h1>
    <p>Vitajte na blogu o hrách, kde nájdete najnovšie informácie, recenzie a užitočné návody. Tento blog vznikol s cieľom priniesť vám kvalitné a pravidelne aktualizované články o vašich obľúbených hrách.</p>
    <p>Blog bol vytvorený ako školský projekt so zameraním na moderné webové technológie ako Vue.js 3 a Pinia. Naším cieľom je poskytnúť návštevníkom hodnotný obsah, ktorý ich bude baviť čítať a inšpirovať k novým objavom v hernom svete.</p>

    <div class="about-image">
      <img src="/images/legion.webp" />
      <img src="/images/nintendo.jpg" />
    </div>
    <br>
    <h2>Technológie použité na vývoj:</h2>
    <ul>
      <li>Vue.js 3 – moderný JavaScript framework pre rýchly vývoj interaktívnych aplikácií.</li>
      <li>CSS3, HTML5 – pre elegantný a responzívny dizajn.</li>
      <li>Pinia pre state management – efektívne spravovanie stavu aplikácie.</li>
    </ul>

    <div class="about-image">
      <img src="/images/konzola.jpg" />
      <img src="/images/pcherny.png" />
    </div>
  </div>
</template>

<style scoped>
.about-page {
  padding: 2rem;
  color: #555;
}

.about-page h1, .about-page h2 {
  color: #333;
  margin-top: 1rem;
  color: white;
}

.about-page p {
  margin-bottom: 1rem;
  color: white;
}

.about-page ul {
  list-style-type: disc;
  margin-left: 1.5rem;
  color: white;
}

.about-page li {
  margin-bottom: 0.5rem;
}

.about-page img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-top: 1rem;
}

.about-image {
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
  text-align: center;
}

.about-image img {
  max-width: 45%;
  height: auto;
  border-radius: 8px;
  margin-top: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  object-fit: cover;
  aspect-ratio: 16/9;
}
</style>
