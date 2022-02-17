<template>
  <ul>
    <button @click="resetHops">RESET</button>
    <h2>Start</h2>
    <li v-for="(hop, index) in this.startTasks" :key="index">
      <BeerHop v-if="startDone" @task="updateTasks" :enabled="false" :hop="hop" :index="index" />
      <BeerHop v-else @taskupdate="checkTasks" @task="updateTasks" :enabled="true" :hop="hop" :index="index" />
    </li>
    <div v-if="middleTasks.length > 0">
      <h2>Middle</h2>
      <li v-for="(hop, index) in this.middleTasks" :key="index">
        <BeerHop v-if="middleDone" :enabled="false" :hop="hop" :index="index" />
        <BeerHop v-else-if="startDone" @taskupdate="checkTasks" @task="updateTasks" :enabled="true" :hop="hop" :index="index" />
        <BeerHop v-else :enabled="false" :hop="hop" :index="index" />
      </li>
    </div>
    <div v-if="endTasks.length > 0">
      <h2>End</h2>
      <li v-for="(hop, index) in this.endTasks" :key="index">
        <BeerHop v-if="endDone" :enabled="false" :hop="hop" :index="index" />
        <BeerHop v-else-if="middleDone" @taskupdate="checkTasks" @task="updateTasks" :enabled="true" :hop="hop" :index="index" />
        <BeerHop v-else :enabled="false" :hop="hop" :index="index" />
      </li>
    </div>
  </ul>
</template>

<script>
import BeerHop from '@/components/BeerHop.vue';

export default {
  name: 'BeerHopList',
  props: {
    hops: Array,
  },
  components: {
    BeerHop,
  },
  data() {
    return {
      startTasks: [],
      middleTasks: [],
      endTasks: [],
      startDone: undefined,
      middleDone: undefined,
      endDone: undefined,
    };
  },
  mounted() {
    this.hops.forEach((hop) => {
      hop.done = false;
      if (hop.add == 'start') {
        this.startTasks.push(hop);
      } else if (hop.add == 'middle') {
        this.middleTasks.push(hop);
      } else if (hop.add == 'end') {
        this.endTasks.push(hop);
      }
    });
  },
  updated() {},
  methods: {
    updateTasks(index, list, state) {
      if (list == 'start') {
        this.startTasks[index].done = state;
      }

      if (list == 'middle') {
        this.middleTasks[index].done = state;
      }

      if (list == 'end') {
        this.endTasks[index].done = state;
      }
    },

    checkTasks() {
      const checkDone = (list) => {
        return Object.values(list).every((item) => item.done);
      };

      this.startDone = checkDone(this.startTasks);
      this.middleDone = checkDone(this.middleTasks) && checkDone(this.startTasks);
      this.endDone = checkDone(this.endTasks);

      console.log(`Start done: ${this.startDone}  |  Middle done: ${this.middleDone}  |  End done: ${this.endDone}`);
    },

    resetHops() {
      this.startTasks.forEach((task) => {
        task.done = false;
      });

      this.middleTasks.forEach((task) => {
        task.done = false;
      });

      this.endTasks.forEach((task) => {
        task.done = false;
      });

      this.startDone = undefined;
      this.middleDone = undefined;
      this.endDone = undefined;
    },
  },
};
</script>

<style></style>
