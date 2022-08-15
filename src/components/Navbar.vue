<template>
  <header class="header">
    <div class="container">
      <label class="navbar-toggle-label" for="navbar-toggle">
        <img src="../assets/img/Vector.png" alt="" />
      </label>
      <input type="checkbox" class="navbar-toggle" id="navbar-toggle" />
      <a href="" class="navbar-brand logo"> </a>
      <nav class="nav">
        <ul class="nav-list">
          <li class="nav-item nav-link-select pb-7">
            <a href="" class="nav-link">男款</a>
          </li>
          <li class="nav-item nav-link-select py-7">
            <a href="" class="nav-link">女款</a>
          </li>
          <li class="nav-item nav-link-select py-7">
            <a href="" class="nav-link">最新消息</a>
          </li>
          <li class="nav-item nav-link-select py-7">
            <a href="" class="nav-link">聯絡我們</a>
          </li>
          <li class="nav-item nav-link-select py-7">
            <a href="" class="nav-link">客製商品</a>
          </li>
          <li class="nav-item py-7 nav-icons d-flex justify-content-center">
            <a href="" class="nav-link search-icon"> </a>
            <a href="" class="nav-link cart-icon"> </a>
            <a href="" class="darkmode" id="dark__mode__toggle">
              <img
                class="light-mode"
                src="../assets/img/moon.png"
                alt=""
                @click.stop.prevent="toggleTheme"
                v-if="theme === 'light'"
              />
              <img
                class="dark-mode"
                src="../assets/img/sun.png"
                alt=""
                @click.stop.prevent="toggleTheme"
                v-if="theme === 'dark'"
              />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    theme: {
      type: String,
      default: "light",
    },
  },
  methods: {
    toggleTheme() {
      console.log("change");
      this.$emit("change-theme");
    },
  },
};
</script>