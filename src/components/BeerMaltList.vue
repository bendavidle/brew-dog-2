<template>
  <ul>
    <li v-for="(malt, index) in this.malt" :key="index">
      <BeerMalt :malt="malt" :index="index" :enabled="true" />
    </li>
  </ul>
</template>

<script>
import BeerMalt from '@/components/BeerMalt.vue';

export default {
  name: 'BeerMaltList',
  props: {
    malt: Array,
  },
  components: {
    BeerMalt,
  },
  data() {
    return {};
  },
  mounted() {
    console.log(this.malt);
  },
  methods: {},
};
</script>

<style></style>
