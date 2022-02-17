<template>
  <div v-if="beer">
    <img :src="beer.image_url" :alt="beer.name" />
    <h1>{{ beer.name }}</h1>
    <h2>ABV: {{ beer.abv }}</h2>
    <p>This is beer id: {{ beer.id }}</p>
    <p>{{ beer.description }}</p>
    <div>
      <h1>Hops</h1>
      <BeerHopList :hops="beer.ingredients.hops" />
    </div>
    <div>
      <h1>Malt</h1>
      <BeerMaltList :malt="beer.ingredients.malt" />
    </div>
    <div>
      <h1>Methods</h1>
      <BeerMethodList :methods="beer.method" />
    </div>
  </div>
</template>

<script>
const axios = require('axios');
import BeerHopList from '@/components/BeerHopList.vue';
import BeerMaltList from '@/components/BeerMaltList.vue';
import BeerMethodList from '@/components/BeerMethodList.vue';

export default {
  props: ['id'],
  components: {
    BeerHopList,
    BeerMaltList,
    BeerMethodList,
  },
  data() {
    return {
      beer: null,
    };
  },
  async mounted() {
    let beer = await axios.get('https://api.punkapi.com/v2/beers/' + this.id);
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