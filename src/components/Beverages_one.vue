<template>
  <section id="content">
    <div class="tag_ad">广告</div>

    <div class="wrapper fluid margin page-menu-list">
      <h3 class="caption">咖啡融合冰淇淋</h3>
      <ul class="grid padded-3 product">
        <li v-for="(value, key ,index) in filterIcecream" :key="index">
          <a :id="value.id" :href="value.url" class="thumbnail">
            <div
              class="preview circle"
              :style="'background-image: url(&quot;'+value.preview+'&quot;)'"
            ></div>
            <strong>{{value.title}}</strong>
          </a>
        </li>
        <!-- 
        <li>
          <a
            id="menu-product-related-cold-brew-malt"
            href="/menu/beverages/coffee-plus-ice-cream/"
            class="thumbnail"
          >
            <div
              class="preview circle"
              style="background-image: url(&quot;/images/products/cold-brew-malt.jpg&quot;)"
            ></div>
            <strong>麦芽雪冷萃™</strong>
          </a>
        </li>

        <li>
          <a
            id="menu-product-related-cold-brew-float"
            href="/menu/beverages/coffee-plus-ice-cream/"
            class="thumbnail"
          >
            <div
              class="preview circle"
              style="background-image: url(&quot;/images/products/cold-brew-float.jpg&quot;)"
            ></div>
            <strong>冷萃浮乐朵™</strong>
          </a>
        </li>

        <li>
          <a
            id="menu-product-related-nitro-cold-brew-float"
            href="/menu/beverages/coffee-plus-ice-cream/"
            class="thumbnail"
          >
            <div
              class="preview circle"
              style="background-image: url(&quot;/images/products/instore-nitro-cold-brew-float.jpg&quot;)"
            ></div>
            <strong>气致™冷萃浮乐朵™</strong>
          </a>
        </li>-->
      </ul>

      <hr>

      <h3 class="caption">星巴克冷萃咖啡系列</h3>
      <ul class="grid padded-3 product">
        <li v-for="(value, key ,index) in filterColdbrew" :key="index">
          <a :id="value.id" :href="value.url" class="thumbnail">
            <div
              class="preview circle"
              :style="'background-image: url(&quot;'+value.preview+'&quot;)'"
            ></div>
            <strong>{{value.title}}</strong>
          </a>
        </li>
      </ul>

      <hr>

      <h3 class="caption">手工调制浓缩咖啡</h3>
      <ul class="grid padded-3 product">
        <li v-for="(value, key ,index) in filterEspresso" :key="index">
          <a :id="value.id" :href="value.url" class="thumbnail">
            <div
              class="preview circle"
              :style="'background-image: url(&quot;'+value.preview+'&quot;)'"
            ></div>
            <strong>{{value.title}}</strong>
          </a>
        </li>
      </ul>

      <hr>

      <h3 class="caption">星冰乐®</h3>
      <ul class="grid padded-3 product">
        <li v-for="(value, key ,index) in filterFrappuc" :key="index">
          <a :id="value.id" :href="value.url" class="thumbnail">
            <div
              class="preview circle"
              :style="'background-image: url(&quot;'+value.preview+'&quot;)'"
            ></div>
            <strong>{{value.title}}</strong>
          </a>
        </li>
      </ul>

      <hr>

      <h3 class="caption">星巴克玩味冰调™</h3>
      <ul class="grid padded-3 product">
        <li v-for="(value, key ,index) in filterModern" :key="index">
          <a :id="value.id" :href="value.url" class="thumbnail">
            <div
              class="preview circle"
              :style="'background-image: url(&quot;'+value.preview+'&quot;)'"
            ></div>
            <strong>{{value.title}}</strong>
          </a>
        </li>
      </ul>

      <hr>
    </div>

    <div class="frap">
      <button
        id="featured-campaign-search"
        class="button primary trigger"
        rel="menu-search-overlay"
      >搜索菜单</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "beverages_one",
  data() {
    return {
      yinliao: {},
      result: {},
      abc: [],
      filterIcecream_id: {},
      filterColdbrew_id: {},
      filterEspresso_id: {},
      filterFrappuc_id: {},
      filterModern_id: {},

      filterIcecream: [],
      filterColdbrew: [],
      filterEspresso: [],
      filterFrappuc: [],
      filterModern: []
    };
  },
  created() {
    this.$ajax
      .get(
        "https://www.easy-mock.com/mock/5d02f1a4ba24655dd590e65d/example/menu-source-zh.json"
      )
      .then(response => {
        this.yinliao = response.data.data;
        var arr = Object.keys(this.yinliao).sort();
        arr.map(m => {
          this.result[m] = this.yinliao[m];
        });

        for (let i in this.result) {
          let o = {};
          o[i] = this.result[i];
          this.abc.push(o);
        }
        // console.log(this.result);
        // console.log(Object.values(this.abc[0]))

        this.filterIcecream_id = Object.keys(this.result).filter(function(
          item
        ) {
          return item.match("/coffee-plus-ice-cream/");
        });
        this.filterColdbrew_id = Object.keys(this.result).filter(function(
          item
        ) {
          return item.match("/menu/beverages/cold-brew/");
        });
        this.filterEspresso_id = Object.keys(this.result).filter(function(
          item
        ) {
          return item.match("/menu/beverages/espresso/");
        });
        this.filterFrappuc_id = Object.keys(this.result).filter(function(item) {
          return item.match("frappuccino-blended-beverage");
        });
        this.filterModern_id = Object.keys(this.result).filter(function(item) {
          return item.match("modern-mixology");
        });
        // console.log(this.abc);

        for (let i = 0; i < this.abc.length; i++) {
          let ai = this.abc[i];
          let bi = this.filterIcecream_id;
          // var bi = (Object.keys(ai))[i]
          // console.log(ai[Object.keys(ai)[0]]);
          for (let j = 0; j < bi.length; j++) {
            // console.log(bi[j]);
            if (ai[Object.keys(ai)[0]].id == bi[j]) {
              this.filterIcecream.push({
                body: ai[Object.keys(ai)[0]].body,
                id: ai[Object.keys(ai)[0]].id,
                popular: ai[Object.keys(ai)[0]].popular,
                preview: ai[Object.keys(ai)[0]].preview,
                title: ai[Object.keys(ai)[0]].title,
                url: ai[Object.keys(ai)[0]].url
              });
            }
          }
        }

        for (let i = 0; i < this.abc.length; i++) {
          let ai = this.abc[i];
          let bi = this.filterColdbrew_id;
          // var bi = (Object.keys(ai))[i]
          // console.log(ai[Object.keys(ai)[0]]);
          for (let j = 0; j < bi.length; j++) {
            // console.log(bi[j]);
            if (ai[Object.keys(ai)[0]].id == bi[j]) {
              this.filterColdbrew.push({
                body: ai[Object.keys(ai)[0]].body,
                id: ai[Object.keys(ai)[0]].id,
                popular: ai[Object.keys(ai)[0]].popular,
                preview: ai[Object.keys(ai)[0]].preview,
                title: ai[Object.keys(ai)[0]].title,
                url: ai[Object.keys(ai)[0]].url
              });
            }
          }
        }

        for (let i = 0; i < this.abc.length; i++) {
          let ai = this.abc[i];
          let bi = this.filterEspresso_id;
          // var bi = (Object.keys(ai))[i]
          // console.log(ai[Object.keys(ai)[0]]);
          for (let j = 0; j < bi.length; j++) {
            // console.log(bi[j]);
            if (ai[Object.keys(ai)[0]].id == bi[j]) {
              this.filterEspresso.push({
                body: ai[Object.keys(ai)[0]].body,
                id: ai[Object.keys(ai)[0]].id,
                popular: ai[Object.keys(ai)[0]].popular,
                preview: ai[Object.keys(ai)[0]].preview,
                title: ai[Object.keys(ai)[0]].title,
                url: ai[Object.keys(ai)[0]].url
              });
            }
          }
        }

        for (let i = 0; i < this.abc.length; i++) {
          let ai = this.abc[i];
          let bi = this.filterFrappuc_id;
          // var bi = (Object.keys(ai))[i]
          // console.log(ai[Object.keys(ai)[0]]);
          for (let j = 0; j < bi.length; j++) {
            // console.log(bi[j]);
            if (ai[Object.keys(ai)[0]].id == bi[j]) {
              this.filterFrappuc.push({
                body: ai[Object.keys(ai)[0]].body,
                id: ai[Object.keys(ai)[0]].id,
                popular: ai[Object.keys(ai)[0]].popular,
                preview: ai[Object.keys(ai)[0]].preview,
                title: ai[Object.keys(ai)[0]].title,
                url: ai[Object.keys(ai)[0]].url
              });
            }
          }
        }

        for (let i = 0; i < this.abc.length; i++) {
          let ai = this.abc[i];
          let bi = this.filterModern_id;
          // var bi = (Object.keys(ai))[i]
          // console.log(ai[Object.keys(ai)[0]]);
          for (let j = 0; j < bi.length; j++) {
            // console.log(bi[j]);
            if (ai[Object.keys(ai)[0]].id == bi[j]) {
              this.filterModern.push({
                body: ai[Object.keys(ai)[0]].body,
                id: ai[Object.keys(ai)[0]].id,
                popular: ai[Object.keys(ai)[0]].popular,
                preview: ai[Object.keys(ai)[0]].preview,
                title: ai[Object.keys(ai)[0]].title,
                url: ai[Object.keys(ai)[0]].url
              });
            }
          }
        }

        // console.log(this.filterIcecream);
        // console.log(this.filterColdbrew);
        // console.log(this.filterEspresso);
        // console.log(this.filterFrappuc);
        // console.log(this.filterModern);
      });
    // .catch(err => {
    //   console.log(err);
    // });
  }
  // computed: {

  // filterColdbrew : function(){
  //   return this.yinliao.filter(function(item){
  //     return item.match("/menu/beverages/cold-brew/");
  //   })
  // },
  // filterEspresso : function(){
  //   return this.yinliao.filter(function(item){
  //     return item.match("/menu/beverages/espresso/");
  //   })
  // },
  // filterFrappuc : function(){
  //   return this.yinliao.filter(function(item){
  //     return item.match("frappuccino-blended-beverage");
  //   })
  // },
  // filterModern : function(){
  //   return this.yinliao.filter(function(item){
  //     return item.match("modern-mixology");
  //   })
  // },

  // },
};
</script>
