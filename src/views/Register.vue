<template>
  <div id="app-view-wrapper">
    <section id="content">
      <div id="account-register">
        <div data-reactroot>
          <section class="join-form register-form submit-box">
            <div class="wrapper-app">
              <div class="app-register-desc">
                <h2>
                  <span>使用星巴克App进行注册</span>
                </h2>
                <p>
                  <span>现在就下载</span>
                  <a href="/apps/" class="link ga-view-app-page">
                    <span>星巴克App</span>
                  </a>
                  <span>便可直接用手机进行注册、支付、查看消费记录及管理卡片。</span>
                </p>
                <div class="app-download-buttons-cn">
                  <a
                    target="_blank"
                    class="mobile-download mobile-button ga-download-app"
                    href="https://itunes.apple.com/cn/app/xing-ba-ke-zhong-guo/id499819758?ls=1&amp;mt=8"
                  >
                    <img src="https://www.starbucks.com.cn/images/udp-starbucks-cn.png">
                  </a>
                </div>
              </div>
              <div>
                <img
                  width="193"
                  height="409"
                  src="https://www.starbucks.com.cn/assets/images/account/register-download-app-image-cn.png"
                >
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "register",
  beforeCreate: function() {
    document.getElementsByTagName("body")[0].className =
      "lang-zh page-account-register non-logged-in";
  }
};
</script>
