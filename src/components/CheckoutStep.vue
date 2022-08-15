<template>
  <div id="stepper-control" class="stepper-panel">
    <div class="stepper-container">
      <div
        class="step step-one"
        :class="[{ active: nowStep === 1 }, { checked: nowStep > 1 }]"
      >
        <div class="circle-container"></div>
        <div class="label-container">寄送地址</div>
      </div>
      <div
        class="step"
        :class="[{ active: nowStep >= 2 }, { checked: nowStep > 2 }]"
      >
        <div class="circle-container"></div>
        <div class="label-container">運送方式</div>
        <div class="connect-line"></div>
      </div>
      <div
        class="step"
        :class="[{ active: nowStep === 3 }, { checked: formCompleted }]"
      >
        <div class="circle-container"></div>
        <div class="label-container">付款資訊</div>
        <div class="connect-line" :class="[{ active: nowStep === 3 }]"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    nowStep: {
      type: Number,
      default: 1,
    },
    formCompleted: {
      type: Boolean,
      default: false,
    },
  },
};
</script>