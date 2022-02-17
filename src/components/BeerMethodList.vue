<template>
  <div>
    <ul>
      <li v-for="(method, key) in methods" :key="key">
        <BeerMethod v-if="method" :method="method" :type="key" />
      </li>
    </ul>
  </div>
</template>

<script>
import BeerMethod from '@/components/BeerMethod.vue';
export default {
  name: 'BeerMethodList',
  components: {
    BeerMethod,
  },
  props: {
    methods: Object,
  },
  mounted() {
    console.log(this.methods);
  },
};
</script>

<style scoped>
* {
  list-style: none;
}

ul {
  padding: 0;
}
</style>