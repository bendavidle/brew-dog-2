<template>
  <div>
    <BeerItem v-for="beer in beers" :key="beer.id" :beer="beer"></BeerItem>
  </div>
</template>

<script lang="js">
const axios = require('axios');
import BeerItem from "@/components/BeerItem.vue"

export default {
  name: "BeerView",
  components: {
    BeerItem,
  },
  data() {
    return {
      beers: [],
    }
  },
  async mounted() {
    let beers = await axios.get('https://api.punkapi.com/v2/beers');
    this.beers.length=0;
    this.beers.push(...beers.data)
    console.log(this.beers)
  },
}
</script>

<style lang="css" scoped>
div {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 1rem;
}
</style>