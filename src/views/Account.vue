<template>
  <div id="app-view-wrapper">
    <nav id="nav">
      <div class="container">
        <div class="body">
          <div id="react-account-navigation-bar" class="body">
            <nav data-reactroot class="container middle secondary">
              <div class="display-1">
                <span>登录或创建一个新帐户 🌟</span>
              </div>
              <div class="tabs-wrapper">
                <ul class="subcategories">
                  <li>
                    <router-link active-class="active" to="/account/login" exact>
                      <span>登录</span>
                    </router-link>
                  </li>
                  <li>
                    <router-link active-class="active" to="/account/register">
                      <span>注册</span>
                    </router-link>
                  </li>
                  <li>
                    <router-link active-class="active" to="/account/rewards">
                      <span>关于星享俱乐部</span>
                    </router-link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "account"
};
</script>
