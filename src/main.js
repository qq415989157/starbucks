import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/styles.css"
import "swiper/dist/css/swiper.css"
import axios from 'axios'
// import { swiper, swiperSlide } from "vue-awesome-swiper";
// import 'swiper/dist/css/swiper.css'
Vue.prototype.$ajax = axios
Vue.config.productionTip = false
// Vue.use({ swiper, swiperSlide })
new Vue({
  router,
  store,
  // swiper,
  // swiperSlide,
  render: h => h(App)
}).$mount('#app')
