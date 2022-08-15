<template>
<form id="a-form" @change="handleFeeAmountChosen">
  <div class="part part-two">
    <h2>運送方式</h2>
    <div
      class="transport-method mt-4"
      v-for="delivery in deliverys"
      :key="delivery.id"
    >
      <input 
      name="transport" 
      type="radio" 
      :value="delivery.feeAmount"
      v-model="feeAmount" 
      class="transport" />
      <label for="regular" class="transport-detail">
        <p class="transport-way">{{delivery.name}}<br /><span>{{delivery.deliveryDays}}</span></p>
        <p class="transport-price">{{delivery.fee}}</p>
      </label>
    </div>
  </div>
  </form>
</template>

<script>
/* eslint-disable */
const dummyData = {
  deliverys: [
    {
      id: 1,
      name: "標準運送",
      fee: "免費",
      feeAmount: 0,
      deliveryDays: "約3~7個工作天",
    },
    {
      id: 2,
      name: "DHL貨運",
      fee: "$500",
      feeAmount: 500,
      deliveryDays: "48小時內送達",
    },
  ],
};
export default {
  data() {
    return {
      deliverys: [],
      feeAmount:0
    };
  },
  created (){
    this.fetchDelivery()
  },
  methods: {
    fetchDelivery (){
      this.deliverys = dummyData.deliverys
    },
    handleFeeAmountChosen(){
    
    this.$emit("after-feeAmount-chosen", this.feeAmount)
    }
  },
};
</script>