<template>
  <section class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) in banner" :key="index" v-show="banner!=''">
        <a :href="item.url">
          <div class="swiper-img flex3">
            <img :src="item.image" width="100%" alt="banner" style="display:block;">
          </div>
        </a>
      </div>
    </div>
    <div class="swiper-button-next swiper-button-white"></div>
  </section>
</template>

<script>
// import $ from "../jquery.min.js";
import Swiper from "swiper";

export default {
  name: "banner",
  props: ["banner"],
  components: {
    Swiper
    // swiperSlide
  },
  mounted() {
    new Swiper(".swiper-container", {
      autoplay: true,
      // paginationClickable: true,
      // centeredSlides: true,
      // autoplayDisableOnInteraction: false,
      // preventClicks: false,
      // speed: 600,
      // observer: true,
      loop: true,
      nextButton: ".swiper-button-next"
      // observeParents: true
    });
  }
};
</script>
