<template>
  <div class="control-panel">
    <button
      class="btn first-last-step last-step"
      @click.stop.prevent="lastStep(step)"
      v-if="step>1"
    >
      ← 上一步
    </button>
    <button
      class="btn next-step"
      v-if="step === 3"
    >
      確認訂單
    </button>
    <button
      class="btn first-next-step next-step"
      @click.stop.prevent="nextStep(step)"
      v-else
    >
      下一步 →
    </button>
    
  </div>
</template>

<script>
export default {
  props: {
    nowStep: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      step: this.nowStep,
    };
  },
  methods: {
    lastStep(step) {
      this.step = step - 1;
      console.log(step);
    },
    nextStep(step) {
      this.step = step + 1;
      console.log(step);
    },
  },
};
</script>