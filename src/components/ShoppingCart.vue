<template>
  <div class="cart-wrapper">
    <h3 class="cart-title">購物籃</h3>
    <div class="product-panel">
      <div
        class="product d-flex justify-content-between"
        v-for="product in products"
        :key="product.id"
      >
        <img class="product-photo" :src="product.img" alt="" />
        <div
          class="
            product-info
            w-40
            d-flex
            flex-column
            align-items-end
            justify-content-between
          "
        >
          <div class="name">{{ product.name }}</div>
          <div class="count">
            <div @click.stop.prevent="handleMinusClick(product.id)">
              <img class="minus" src="../assets/img/minus.png" alt="" />
            </div>
            <span class="quantity-box">{{ product.quantity }}</span>
            <div @click.stop.prevent="handlePlusClick(product.id)">
              <img class="plus" src="../assets/img/plus.png" alt="" />
            </div>
          </div>
          <div class="price">
            <span>{{
              product.price.toLocaleString("zh-TW", {
                maximumFractionDigits: 0,
                style: "currency",
                currency: "TWD",
              })
            }}</span>
          </div>
        </div>
      </div>
      <div class="shipping d-flex justify-content-between">
        <span class="shipping-name">運費</span>
        <span class="shipping-total">{{ deliveryFee | chineseName }}</span>
      </div>
      <div class="amount d-flex justify-content-between">
        <span class="amount-name">小計</span>
        <span class="amount-total">{{ renewTotalAmount }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import image1 from "../assets/img/Block.png";
import image2 from "../assets/img/Block(1).png";
/* eslint-disable */
const dummyData = {
  products: [
    {
      id: 1,
      name: "破壞補丁修身牛仔褲",
      price: 3999,
      quantity: 1,
      img: image1,
    },
    {
      id: 2,
      name: "刷色直筒牛仔褲",
      price: 1999,
      quantity: 1,
      img: image2,
    },
  ],
};

export default {
  props: {
    deliveryFee: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      products: [],
      totalPrice: 0,
    };
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      this.products = dummyData.products;
    },
    handleMinusClick(productId) {
      this.products = this.products.map((product) => {
        if (product.id === productId && product.quantity !== 0) {
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        }
        return product;
      });
    },
    handlePlusClick(productId) {
      this.products = this.products.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      });
    },
  },
  computed: {
    renewTotalAmount() {
      this.totalPrice = 0;
      this.products.forEach((product) => {
        this.totalPrice += product.quantity * product.price;
      });
      this.totalPrice += this.deliveryFee;
      return this.totalPrice.toLocaleString("zh-TW", {
        maximumFractionDigits: 0,
        style: "currency",
        currency: "TWD",
      });
    },
  },
  filters: {
    chineseName(deliveryFee) {
      return deliveryFee === 0
        ? "免費"
        : deliveryFee.toLocaleString("zh-TW", {
            maximumFractionDigits: 0,
            style: "currency",
            currency: "TWD",
          });
    },
  },
};
</script>