<template>
  <div id="app">
    <div id="primary">
      <div class="primary-mobile">
        <ul class="flex justify-around logging-in-element">
          <li class="home" id="home-mobile">
            <router-link to="/" active-class="active" exact>
              <span class="icons">
                <img src="https://www.starbucks.com.cn/assets/icons/icon-home.svg">
                <img
                  src="https://www.starbucks.com.cn/assets/icons/icon-home-active.svg"
                  class="active"
                >
              </span>
              <div id="home-mobile">主页</div>
            </router-link>
          </li>

          <li class="stores" id="stores-mobile">
            <router-link to="/stores" active-class="active">
              <span class="icons">
                <img src="https://www.starbucks.com.cn/assets/icons/icon-stores.svg">
                <img
                  src="https://www.starbucks.com.cn/assets/icons/icon-stores-active.svg"
                  class="active"
                >
              </span>
              <div id="stores-mobile">门店</div>
            </router-link>
          </li>

          <li class="account" id="account-mobile">
            <router-link to="/account" active-class="active">
              <span class="icons">
                <img src="https://www.starbucks.com.cn/assets/icons/icon-account.svg">
                <img
                  src="https://www.starbucks.com.cn/assets/icons/icon-account-active.svg"
                  class="active"
                >
              </span>
              <div id="account-mobile">
                <span data-reactroot class>我的帐户</span>
              </div>
            </router-link>
          </li>

          <li class="menu" id="menu-mobile">
            <router-link to="/menu" active-class="active">
              <span class="icons">
                <img src="https://www.starbucks.com.cn/assets/icons/icon-menu.svg">
                <img
                  src="https://www.starbucks.com.cn/assets/icons/icon-menu-active.svg"
                  class="active"
                >
              </span>
              <div id="menu-mobile">菜单</div>
            </router-link>
          </li>

          <li class="more" id="more-mobile">
            <router-link class="icon trigger" rel="nav-overlay" to="/more" active-class="active">
              <span class="icons">
                <img src="https://www.starbucks.com.cn/assets/icons/icon-more.svg">
                <img
                  src="https://www.starbucks.com.cn/assets/icons/icon-more-active.svg"
                  class="active"
                >
              </span>
              <div>更多</div>
            </router-link>
          </li>
        </ul>
      </div>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>-->
    </div>
    <router-view/>
  </div>
</template>
