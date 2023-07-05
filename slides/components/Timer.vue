<script>
import { ref, watch, onUnmounted, computed } from 'vue';

export default {
  props: ['minutes'],
  setup(props) {
    const timerCount = ref(props.minutes * 60);
    const milliseconds = ref(0);
    const intervalId = ref(null);

    const start = () => {
      if (!intervalId.value) {
        intervalId.value = setInterval(() => {
          if (milliseconds.value === 0) {
            timerCount.value--;
          }

          if(timerCount.value === 0 && milliseconds.value === 0) {
            clearInterval(intervalId.value);
            intervalId.value = null;
            return;
          } else {
            milliseconds.value = milliseconds.value === 0 ? 99 : milliseconds.value -1;
          }
        }, 10);
      }
    };

    const pause = () => {
      if (intervalId.value) {
        clearInterval(intervalId.value);
        intervalId.value = null;
      }
    };

    const resume = () => {
      if (!intervalId.value) {
        start();
      }
    };

    const reset = () => {
      pause();
      timerCount.value = props.minutes * 60;
      milliseconds.value = 0;
    };

    const isRunning = computed(() => intervalId.value !== null)

    const numberToTwoDigits = (number) => {
      return number < 10 ? `0${number}` : number;
    };

    watch(timerCount, (newValue) => {
      if (newValue === 0) {
        pause();
      }
    });

    onUnmounted(() => {
      pause();
    });

    return {
      timerCount,
      milliseconds,
      isRunning,
      numberToTwoDigits,
      start,
      pause,
      resume,
      reset,
    };
  },
};
</script>

<template>
  <div class="absolute top-5 right-5 flex items-center text-xl">
    <div class="flex flex-col items-center mr-4 cursor-pointer">
      <uil-play v-if="!isRunning" class="text-2xl text-green-500 hover:text-green-700" @click="start" />
      <uil-pause v-else class="text-2xl text-red-500 hover:text-red-700" @click="pause" />
      <a class="text-xl" @click="reset">reset</a>
    </div>
    <div class="text-7xl border-b-5 border-transparent" :class="{ 'pulse-border': timerCount === 0 }">
      <span>{{ numberToTwoDigits(Math.floor(timerCount / 60)) }}</span>:<span>{{ numberToTwoDigits(Math.floor(timerCount % 60)) }}</span>.<span class="text-6xl">{{ numberToTwoDigits(milliseconds) }}</span>
    </div>
  </div>
</template>

<style scoped>
@keyframes pulse-border {
  0%, 100% {
    border-color: rgba(239, 68, 68, .3);
  }
  50% {
    border-color: rgba(239, 68, 68, 1);
  }
}
@-webkit-keyframes pulse-border {
  0%, 100% {
    border-color: rgba(239, 68, 68, .3);
  }
  50% {
    border-color: rgba(239, 68, 68, 1);
  }
}

.pulse-border {
  -webkit-animation: pulse-border 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  animation: pulse-border 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
