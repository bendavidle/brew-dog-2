<template>
  <div>
    <div v-if="type == 'fermentation'">
      <h3>Fermentation</h3>
      <p>Temp: {{ `${method.temp.value} ${method.temp.unit}` }}</p>
    </div>
    <div v-if="type == 'mash_temp'">
      <h3>Mashing Temp</h3>
      <div v-for="(temp, index) in method" :key="index">
        <p>{{ `Duration: ${temp.duration} minutes @ ${temp.temp.value} ${temp.temp.unit}` }}</p>
        <MashTimer :countdown="temp.duration" />
      </div>
    </div>
    <p v-if="type == 'twist'">Twist: {{ method }}</p>
  </div>
</template>

<script>
import MashTimer from '@/components/MashTimer.vue';
export default {
  name: 'BeerMethod',
  components: {
    MashTimer,
  },
  props: {
    method: Object,
    type: String,
  },
  mounted() {
    if (this.type != 'twist') {
      console.log('Inside the Method: ' + this.type + this.method.temp);
    }
  },
};
</script>

<style scoped>
</style>