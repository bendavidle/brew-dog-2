<template>
  <div v-if="beer">
    <h1>{{ beer.name }}</h1>
    <img :src="beer.image_url" :alt="beer.name" />
    <h2>ABV: {{ beer.abv }}</h2>
    <p>This is beer {{ beer.id }}</p>
    <p>{{ beer.description }}</p>
    <h1>Hops</h1>
    <ul>
      <li v-for="(hop, index) in beer.ingredients.hops" :key="index">
        <p>{{ hop.name }}</p>
      </li>
    </ul>
    <h1>Malt</h1>
    <ul>
      <li v-for="(malt, index) in beer.ingredients.malt" :key="index">
        <p>{{ malt.name }}</p>
      </li>
    </ul>
    <ul>
      <li v-for="(method, key) in beer.method" :key="key">
        <!-- Beer Method Component here. -->
        {{ method }}
      </li>
    </ul>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  props: ["id"],
  data() {
    return {
      beer: null,
    };
  },
  async mounted() {
    let beer = await axios.get("https://api.punkapi.com/v2/beers/" + this.id);
    this.beer = beer.data[0];
    console.log(beer.data);
  },
};
</script>

<style lang="css" scoped>
li,
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>