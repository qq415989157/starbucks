<template>
  <div id="app-view-wrapper">
    <nav id="nav">
      <div class="container">
        <div class="body">
          <nav class="container middle secondary">
            <router-link to="/menu/" class="back">
              <img src="https://www.starbucks.com.cn/assets/icons/icon-chevron-left.svg">
              菜单
            </router-link>

            <div class="display-1">饮料</div>
            <div class="tabs-wrapper">
              <ul class="subcategories">
                <li>
                  <router-link id="side_menu_all" to="/menu/beverages/" active-class="active" class="active" exact>全部</router-link>
                </li>

                <li>
                  <router-link id="side_menu_modern_mixology" to="/menu/beverages/modern-mixology/">星巴克玩味冰调™</router-link>
                </li>

                <li>
                  <router-link id="side_menu_espresso" to="/menu/beverages/espresso/">手工调制浓缩咖啡</router-link>
                </li>

                <li>
                  <router-link
                    id="side_menu_frappuccino_blended_beverage"
                    to="/menu/beverages/frappuccino-blended-beverage/"
                  >星冰乐®</router-link>
                </li>

                <li>
                  <router-link id="side_menu_teavana" to="/menu/beverages/teavana/">茶瓦纳™</router-link>
                </li>

                <li>
                  <router-link
                    id="side_menu_signature_chocolate_beverage"
                    to="/menu/beverages/signature-chocolate-beverage/"
                  >经典巧克力饮品</router-link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>
