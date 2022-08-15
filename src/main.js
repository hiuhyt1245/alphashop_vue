import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/scss/reset.scss"
import "./assets/scss/basic.scss"
import "./assets/scss/index.scss"

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
