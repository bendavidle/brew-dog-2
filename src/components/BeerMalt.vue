<template>
  <div>
    <h3 v-if="done">O</h3>
    <h3 v-else>X</h3>
    {{ malt.name }}
    add {{ malt.amount.value }} {{ malt.amount.unit }}
    {{ malt.add }}
    <button v-if="done" :disabled="!enabled" @click="finishTask">Remove</button>
    <button v-else :disabled="!enabled" @click="finishTask">Add</button>
  </div>
</template>

<script>
export default {
  name: 'BeerMalt',
  props: {
    malt: Object,
    index: Number,
    enabled: Boolean,
  },
  data() {
    return {
      done: false,
    };
  },
  mounted() {},
  methods: {
    finishTask() {
      this.done = !this.done;
    },
  },
};
</script>

<style>
</style>