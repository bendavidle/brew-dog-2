<template>
  <router-link :to="{ name: 'BeerDetails', params: { id: beer.id } }">
    <div class="beeritem">
      <div>
        <img :src="beer.image_url" :alt="beer.name" />
      </div>
      <div class="beerinfo">
        <h1>{{ beer.name }}</h1>
        <h2>ABV: {{ beer.abv }}</h2>
        <p>{{ beer.description }}</p>
      </div>
    </div>
  </router-link>
</template>

<script lang="js">

export default {
  name: "BeerItem",
  props: {
    beer: Object,
  }
  
}
</script>

<style scoped lang="css">
* {
  color: #2c3e50;
  text-decoration: none;
}

.beeritem {
  min-height: 26vh;
  background-color: #f3f3f3;
  display: flex;
  gap: 1.5rem;
  text-align: left;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.2);
}

.beeritem:hover {
  transform: scale(1.02);
  transition: 50ms;
}

.beerinfo {
  display: flex;
  flex-direction: column;
  align-self: center;
  gap: 1rem;
  align-items: center;
}

.beerinfo * {
  margin: 0;
}

img {
  width: 3vw;
  height: 100%;
  object-fit: contain;
}
li {
  list-style: none;
}
</style>