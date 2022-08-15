<template>
  <main>
    <div class="h1-container">
      <h1>結帳</h1>
    </div>

    <div class="container">
      <div class="checkout-wapper">
        <!-- CheckoutStep -->
        <CheckoutStep 
        :now-step="step"
        :form-completed="isFormCompleted" />

        <div class="form-panel">
          <!-- AddressForm -->
          <AddressForm v-if="step === 1" />
          <!-- DeliveryForm -->
          <DeliveryForm v-if="step === 2"
          @after-feeAmount-chosen="afterFeeAmountChosen" />
          <!-- PaymentForm -->
          <PaymentForm v-if="step === 3" />
        </div>
      </div>

      <div class="cart-wapper ">
        <!-- ShoppingCart -->
        <ShoppingCart :delivery-fee="deliveryFee"/>
      </div>
      <hr class="hr" />
      <div class="control-panel">
        <button
          class="btn last-step"
          :class="[{ firstStep: step === 1 }]"
          @click.stop.prevent="lastStep(step)"
        >
          ← 上一步
        </button>
        <button 
          class="btn next-step" v-if="step === 3"
          @click.stop.prevent="confirmAccount"
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
    </div>
  </main>
</template>

<script>
import CheckoutStep from "../components/CheckoutStep.vue";
import AddressForm from "../components/AddressForm.vue";
import DeliveryForm from "../components/DeliveryForm.vue";
import PaymentForm from "../components/PaymentForm.vue";
// import StepControlButton from "../components/StepControlButton.vue";
import ShoppingCart from "../components/ShoppingCart.vue";

export default {
  components: {
    CheckoutStep,
    AddressForm,
    DeliveryForm,
    PaymentForm,
    // StepControlButton,
    ShoppingCart,
  },
  data() {
    return {
      step: 1,
      isFormCompleted: false,
      deliveryFee: 0
    };
  },
  methods: {
    nextStep(step) {
      this.step = step + 1;
      console.log(this.step);
    },
    lastStep(step) {
      this.step = this.step - 1;
      console.log(step);
    },
    confirmAccount() {
      this.isFormCompleted = true;
    },
    afterFeeAmountChosen(feeAmount) {
      this.deliveryFee = feeAmount
    }
  },
};
</script>

<style lang="sass">
</style>