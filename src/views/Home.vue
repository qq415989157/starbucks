<template>
  <div class="home">
    <app-header/>
    <app-banner :banner="banner"></app-banner>
    <app-promotion/>
    <app-program/>
    <app-Tmall/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Banner from "@/components/Banner.vue";
import Promotion from "@/components/Promotion.vue";
import Program from "@/components/Program.vue";
import Tmall from "@/components/Tmall.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    Banner,
    Promotion,
    Program,
    Tmall,
    "app-banner": Banner,
    "app-header": HelloWorld,
    "app-promotion": Promotion,
    "app-program": Program,
    "app-Tmall": Tmall
  },
  beforeCreate: function() {
    document.getElementsByTagName("body")[0].className =
      "page-front non-logged-in";
  },
  data() {
    return {
      banner: [
        {
          url: "javasript::",
          image:
            "https://www.starbucks.com.cn/assets/images/featured/2019summer/homepage-3-mobile.jpg"
        },
        {
          url: "javasript:;",
          image:
            "https://www.starbucks.com.cn/assets/images/featured/2019summer/delivery-0612-mobile.gif"
        },
        {
          url: "javasript:;",
          image:
            "https://www.starbucks.com.cn/assets/images/featured/2019summer/homepage-1-mobile.jpg"
        },
        {
          url: "javasript:;",
          image:
            "https://www.starbucks.com.cn/assets/images/featured/2019summer/homepage-4-mobile.jpg"
        }
      ] //虚拟数据
    };
  }
};
</script>

