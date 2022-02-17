<template>
  <div>
    <h3 v-if="hop.done">O</h3>
    <h3 v-else>X</h3>
    {{ hop.name }}
    add {{ hop.amount.value }} {{ hop.amount.unit }}
    {{ hop.add }}
    <button :disabled="!enabled" @click="finishTask">Add</button>
  </div>
</template>

<script>
export default {
  name: 'BeerHop',
  props: {
    hop: Object,
    enabled: Boolean,
    index: Number,
  },
  updated() {
    this.$emit('taskupdate');
  },
  mounted() {
    console.log('Hop: ', this.hop);
    console.log('Index: ', this.index);
  },
  methods: {
    finishTask() {
      this.done = !this.done;
      this.$emit('task', this.index, this.hop.add, this.done);
    },
  },
};
</script>

<style lang="css">
</style>