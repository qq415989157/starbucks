<template>
  <div id="app-view-wrapper">
    <section id="content">
      <div id="react-account-app">
        <div>
          <div class="account_app">
            <div class="dashboard">
              <section class="join-form submit-box">
                <div class="wrapper wrapper-mobile">
                  <div class="login-form">
                    <div class="form-field">
                      <input type="hidden" value="version">
                      <div class="field floating">
                        <div class="ok">
                          <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="用户名或者电子邮箱"
                            value
                            autocomplete="new-password"
                          >
                          <label>用户名或者电子邮箱</label>
                        </div>
                      </div>
                      <div class="password-group-field">
                        <div class="field floating">
                          <div class="ok">
                            <input
                              type="password"
                              name="password"
                              placeholder="密码"
                              value
                              autocomplete="new-password"
                            >
                            <label>密码</label>
                          </div>
                        </div>
                        <div class="toggle-password hide"></div>
                      </div>
                    </div>
                    <div class="field checkbox">
                      <input type="checkbox" id="login-remember" value="on">
                      <label for="login-remember">
                        <span>下次自动登录</span>
                      </label>
                    </div>
                    <p>
                      <a id="sign-in-forgot-password" href="/account/forgot-password" class="link">
                        <span>忘记密码？</span>
                      </a>
                    </p>
                    <div class="field captcha">
                      <div class="item captchaWrapper">
                        <!-- react-empty: 65 -->
                        <div
                          style="width: 300px; height: 160px; margin: 0px auto; position: relative; z-index: 0;"
                        >
                          <iframe
                            frameborder="0"
                            border="0"
                            marginheight="0"
                            marginwidth="0"
                            scrolling="no"
                            style="width: 300px; height: 152px; border: 0px; position: relative; left: 0px; top: 0px; z-index: 2000000002;"
                            src="https://captcha.guard.qcloud.com/cap_union_new_show?aid=1253432169&amp;asig=WjOhf2QmtgFC5hH3flTPfizqYqKLYzfVmp76cchrCnoqdSoT0oidCQZSmM0GuUE0vCX3LnFk136QmXyqzNPnN66hdvVxIDX6&amp;captype=&amp;protocol=https&amp;clientype=2&amp;disturblevel=&amp;apptype=&amp;curenv=open&amp;ua=TW96aWxsYS81LjAgKGlQaG9uZTsgQ1BVIGlQaG9uZSBPUyAxMV8wIGxpa2UgTWFjIE9TIFgpIEFwcGxlV2ViS2l0LzYwNC4xLjM4IChLSFRNTCwgbGlrZSBHZWNrbykgVmVyc2lvbi8xMS4wIE1vYmlsZS8xNUEzNzIgU2FmYXJpLzYwNC4x&amp;sess=JKICKCbGOaE9vobRceUFOPD-UWFixm9DBlu0DRWlo3qpjoOqRqVNVr8qekYMbSaH6GsLb7YgLf49Ty5EQdkKxheWiJkWZgrUUHm51AQOZ7XMYshZNJHjkJ93V2JkWLoNnElYd0kMYdTPaPva9FTgr3C4j9BeTS9Wwasnwn03bpux1ceTpDYVZzwAaOPEfTB-hWSFGpqtVuA*&amp;theme=&amp;sid=6701828594641347013&amp;noBorder=noborder&amp;fb=1&amp;forcestyle=undefined&amp;subsid=2&amp;color=00A862&amp;showtype=embed&amp;uid=&amp;cap_cd=&amp;lang=2052&amp;rnd=59633&amp;TCapIframeLoadTime=280&amp;prehandleLoadTime=36&amp;createIframeStart=1560391064901"
                          ></iframe>
                        </div>
                      </div>
                    </div>
                    <div class="actions">
                      <button class="button large" disabled>
                        <span>登录</span>
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: "login",
  beforeCreate: function() {
    document.getElementsByTagName("body")[0].className =
      "lang-zh page-account non-logged-in";
  }
};
</script>