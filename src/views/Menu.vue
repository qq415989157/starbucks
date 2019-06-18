<template>
  <div id="app-view-wrapper">
    <app-nav/>
    <app-summer/>
  </div>
</template>

<script>
import Mnav from "../views/Menu_nav.vue";
import Summer from "../components/Summer.vue";

export default {
  components: {
    Mnav,
    Summer,
    "app-nav": Mnav,
    "app-summer": Summer
  },
  beforeCreate: function() {
    document.getElementsByTagName("body")[0].className =
      "lang-zh page-menu non-logged-in";
  },
  mounted() {
    // console.log(1);
    var collapsibles = document.querySelectorAll(".featured-collapsible");
    for (var i = 0; i < collapsibles.length; i++) {
      var collapsible = collapsibles[i];
      collapsible.addEventListener("click", function(event) {
        if (!this.classList.contains("featured-collapsible")) {
          return;
        }
        this.classList.toggle("collapsed");
        this.classList.toggle("expanded");
      });
    }
    function countLines(index) {
      var dom = collapsibles[index].querySelector(".body p");
      var divHeight = dom.offsetHeight;
      var lineHeight = 25;
      var lineCount = Math.round(divHeight / lineHeight);
      return lineCount;
    }
    // If a text has only two lines, remove the toggle icon
    function toggleCollapsible() {
      for (var i = 0; i < collapsibles.length; i++) {
        var collapsible = collapsibles[i];
        var classList = collapsible.classList;
        var lineCount = countLines(i);
        if (lineCount > 2) {
          if (!classList.contains("featured-collapsible")) {
            classList.add("featured-collapsible");
          }
        } else {
          classList.remove("featured-collapsible");
        }
      }
    }
    toggleCollapsible();
    window.addEventListener("resize", toggleCollapsible);

    function resizeLtoItems() {
      // So that the old style won't effect the re-calc, which is needed when
      // 1. New content such as images are loaded
      // 2. Window resize
      cleanLtoItemsStyle();
      var ltoItems = document.querySelectorAll(".lto-items .item");
      // There are some lot items invisable due to the mobile/desktop styling
      var visibleLtoItems = [];
      for (var i = 0; i < ltoItems.length; i++) {
        if (ltoItems[i].offsetHeight) {
          visibleLtoItems.push(ltoItems[i]);
        }
      }
      if (visibleLtoItems.length === 0) return;
      var itemsPerRow = 1;
      while (
        visibleLtoItems[itemsPerRow] &&
        visibleLtoItems[itemsPerRow - 1] &&
        visibleLtoItems[itemsPerRow].offsetTop ==
          visibleLtoItems[itemsPerRow - 1].offsetTop
      ) {
        itemsPerRow++;
      }
      var rows = [];
      // This while transform visibleLtoItems to rows
      while (visibleLtoItems.length) {
        var counter = itemsPerRow;
        var tempArr = [];
        while (counter--) {
          if (visibleLtoItems[0]) {
            tempArr.push(visibleLtoItems.shift());
          }
        }
        rows.push(tempArr);
      }
      // This for walk through every row and assign the height
      for (var i = 0; i < rows.length; i++) {
        // ClientHeight is element height which doesn't count margin
        var heightMax = rows[i][0].clientHeight;
        for (var j = 1; j < rows[i].length; j++) {
          if (rows[i][j].clientHeight > heightMax)
            heightMax = rows[i][j].clientHeight;
        }
        for (var j = 0; j < rows[i].length; j++) {
          rows[i][j].style.height = heightMax + "px";
        }
      }
      requestAnimationFrame(resizeLtoItems);
    }
    requestAnimationFrame(resizeLtoItems);

    function cleanLtoItemsStyle() {
      var ltoItems = document.querySelectorAll(".lto-items .item");
      for (var i = 0; i < ltoItems.length; i++) {
        ltoItems[i].style.height = "auto";
      }
    }
  }
};
</script>