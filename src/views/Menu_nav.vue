<template>
  <nav id="nav">
    <div class="container">
      <div class="body">
        <nav class="container middle secondary">
          <div class="display-1">菜单</div>
          <div class="tabs-wrapper">
            <ul class="subcategories">
              <li>
                <router-link id="side_menu_default" to="/menu" class="active" exact>季度精选</router-link>
              </li>

              <li>
                <router-link id="side_menu_beverages" to="/menu/beverages" @click="location(beverages)">饮料</router-link>
              </li>

              <li>
                <router-link id="side_menu_food" to="/menu/beverages">美食</router-link>
              </li>

              <li>
                <router-link id="side_menu_coffee" to="/menu/coffee">咖啡产品</router-link>
              </li>

              <li>
                <router-link id="side_menu_merchandise" to="/menu/merchandise/">商品</router-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
    name:'Menu_nav',
    // mounted() {
    //   function location(a) {
    //     $(this).location
    //   }
    // },
}
</script>