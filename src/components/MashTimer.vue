 <template>
  <div v-if="!timerFinished">
    <h5>Countdown: {{ this.displayTime }}</h5>
    <button v-if="!timerEnabled" @click="startTimer">Start Timer</button>
    <button v-else @click="stopTimer">Stop Timer</button>
  </div>
  <div v-else>
    <h5>TIMER FINISHED</h5>
  </div>
</template>
 
 <script>
export default {
  name: 'MashTimer',
  props: {
    countdown: Number,
  },
  data() {
    return {
      timerFinished: false,
      timerEnabled: false,
      currentTime: this.countdown * 60,
    };
  },
  computed: {
    displayTime() {
      let minutes = Math.floor(this.currentTime / 60);
      let seconds = this.currentTime - minutes * 60;
      if (seconds < 10) {
        seconds = '0' + seconds;
      }
      return minutes + ':' + seconds;
    },
  },
  updated() {
    console.log(this.displayTime);
  },
  watch: {
    timerEnabled(value) {
      if (value) {
        setTimeout(() => {
          this.currentTime--;
        }, 1000);
      }
    },

    currentTime: {
      handler(value) {
        if (value > 0 && this.timerEnabled) {
          setTimeout(() => {
            this.currentTime--;
          }, 1000);
        }

        if (value == 0) {
          this.timerFinished = true;
        }
      },
      immediate: true,
    },
  },
  methods: {
    startTimer() {
      this.timerEnabled = true;
    },

    stopTimer() {
      this.timerEnabled = false;
    },
  },
};
</script>
 
 <style scoped>
</style>