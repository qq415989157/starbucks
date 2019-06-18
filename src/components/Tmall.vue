<template>
  <section class="tmall center">
    <div class="wrapper">
      <h2 class="wrapper-mobile">星巴克精选</h2>
      <p class="light wrapper-mobile">在星巴克天猫旗舰店发现更多咖啡心意</p>
      <ul class="grid columns-4 padded-2">
        <li v-for="(item,index) in card" :key="index">
          <a
            id="home-tmall-msr"
            href="http://tb.cn/wBOXXJw"
            target="_blank"
            class="show-mobile tablet-hidden"
          >
            <img :src="item.imgurl">
            <p class="title-1">
              <strong>{{item.title}}</strong>
            </p>
            <p class="margin2">
              {{item.margin1}}
              <br>{{item.margin2}}
            </p>
            <p class="caption">了解更多 ›</p>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      card: [
          {
              title:"会员星礼包",
              margin1:"星享卡新升级",
              margin2:"更多心意好礼",
              imgurl:"https://www.starbucks.com.cn/assets/images/homepage/tmall-card-01.png",
          },
          {
              title:"星礼卡",
              margin1:"用一份心礼",
              margin2:"让心意相随",
              imgurl:"https://www.starbucks.com.cn/assets/images/homepage/tmall-card-02.png",
          },
          {
              title:"电子产品券",
              margin1:"心意",
              margin2:"从这一杯开始",
              imgurl:"https://www.starbucks.com.cn/assets/images/homepage/tmall-eticket.png",
          },
          {
              title:"咖啡生活",
              margin1:"星巴克",
              margin2:"用心制作",
              imgurl:"https://www.starbucks.com.cn/assets/images/homepage/tmall-reserve.png",
          }
      ]
    };
  }
};
</script>