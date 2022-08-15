<template>
  <div 
    id="alpha-shop"
    :data-theme="theme"
  >
    <!-- navbar -->
    <Navbar 
      @change-theme="changeTheme"
      :theme="theme"
    />
    <main>
      <router-view />
    </main>

    <!-- footer -->
    <Footer />

  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from "./components/Footer.vue";

const themeMap = {
  light: 'dark',
  dark: 'light',
}

export default {
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      theme: 'light',
    }
  },
  created() {
    this.initialTheme()
  },
  methods :{
    initialTheme () {
      this.theme = localStorage.getItem('theme') || 'light'
    },
    changeTheme () {
      this.theme = themeMap[this.theme] || 'light'
      localStorage.setItem('theme', this.theme)
    },
  }
}
</script>

<style lang="scss">


</style>
