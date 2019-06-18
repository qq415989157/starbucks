<template>
  <section id="content">
    <span class="tag_ad">广告</span>
    <section class="hero relative">
      <div class="block relative show-mobile tablet-hidden">
        <a href="#lto-items">
          <img
            src="https://www.starbucks.com.cn/assets/images/featured/2019summer/banner-1-mobile.jpg"
            class="img"
          >
        </a>
      </div>

      <div class="wrapper">
        <h2>玩味冰调™ 夏天自造</h2>
        <p class="text description" style="padding:0 20px">
          窗外蝉鸣声响起，那是夏天又来到的信号。
          <br>这次，我们将用玩味冰调™致敬夏天，用焕然一新的沁爽活力，赶走夏日的沉闷，自在享受夏日时光。富于层次感的口感，带来不一样的味蕾体验。零脂、真材实料、不添加化学合成色素和甜味剂，让这一杯带你轻盈一“夏”。
        </p>
      </div>
    </section>
    <section class="featured-items">
      <div class="item">
        <div class="show-mobile tablet-hidden">
          <a href="#lto-items" class="block relative">
            <img
              src="https://www.starbucks.com.cn/assets/images/featured/2019summer/banner-2-mobile.jpg"
              class="img"
            >
          </a>
          <div class="description text wrapper featured-collapsible collapsed">
            <h2>一口轻盈 清爽一夏</h2>
            <div class="body">
              <p>
                星轻盈系列，蛋糕也可以清爽一夏无负担。
                <br>采用风味酸奶为原料，搭配大颗真实果粒，清新轻甜，满足想吃甜点的小心思。
                <br>这一季还加入新品夏日趣玩西小瓜蛋糕，夏日风味，轻盈无负担，可爱又好吃，还可以很好玩哦~
              </p>
            </div>
            <span class="icon"></span>
          </div>
        </div>
      </div>
    </section>

    <section class="lto-items wrapper" id="lto-items">
      <h2>所有新品</h2>
      <div class="grid columns-3 padded-2">
        <div class="item" style="height: 249px;">
          <img
            src="https://www.starbucks.com.cn/assets/images/featured/2019summer/blueberry-passion-pearl-fizz.jpg"
          >
          <p>蓝莓星空</p>
        </div>
        <div class="item" style="height: 249px;">
          <img
            src="https://www.starbucks.com.cn/assets/images/featured/2019summer/citrus-mint-mojito.jpg"
          >
          <p>橘香茉吉托</p>
        </div>
        <div class="item" style="height: 249px;">
          <img
            src="https://www.starbucks.com.cn/assets/images/featured/2019summer/cold-brew-lemon-sour.jpg"
          >
          <p>酸柠浮冷萃</p>
        </div>
        <div class="item" style="height: 249px;">
          <img
            src="https://www.starbucks.com.cn/assets/images/featured/2019summer/peach-shrub-fizz.jpg"
          >
          <p>醋意桃桃</p>
        </div>
      </div>
    </section>

    <div class="frap">
      <button
        id="featured-campaign-search"
        class="button primary trigger"
        rel="menu-search-overlay"
      >搜索菜单</button>
    </div>

    <div id="app-notification">
      <div data-reactroot></div>
    </div>
  </section>
</template>

<script>
export default {
    name:'summer'
}
</script>