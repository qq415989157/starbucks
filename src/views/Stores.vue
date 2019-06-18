<template>
  <div class="stores">
    <h1>
      <img src="../assets/images/www.starbucks.com.cn_stores_(iPhone 6_7_8 Plus).png" alt="">
    </h1>
  </div>
</template>

<script>
export default {
  name:'stores',
   beforeCreate: function() {
    document.getElementsByTagName("body")[0].className =
      "page-stores non-logged-in";
  },
}
</script>
