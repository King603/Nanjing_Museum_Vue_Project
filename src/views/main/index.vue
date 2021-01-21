<template>
  <div class="main-content">
    <!-- 头部导航 -->
    <top-nav ind="0"></top-nav>
    <!-- 热点轮播 -->
    <page-1 class="main-slideshow"></page-1>
    <!-- 新闻公告 -->
    <page-2 class="main-news"></page-2>
    <!-- 在线咨询 -->
    <bot-foo class="main-footer"></bot-foo>
    <to-top></to-top>
  </div>
</template>

<script>
export default {
  components: {
    topNav: () => import("../../components/top-nav"),
    Page1: () => import("./components/page1"),
    Page2: () => import("./components/page2"),
    botFoo: () => import("../../components/bot-foo"),
    toTop: () => import("../../components/pageTop"),
  },
  data() {
    return {
      setheight: Function,
    };
  },
  methods: {
    /**
     * 鼠标滚轴事件
     * @param {MouseEvent} event
     */
    onmousewheel(event) {
      let delta = 0;
      if (event.wheelDelta) {
        // IE、chrome浏览器使用的是wheelDelta，并且值为“正负120”
        delta = event.wheelDelta / 120;
        if (window.opera) delta = -delta; // 因为IE、chrome等向下滚动是负值，FF是正值，为了处理一致性，在此取反处理
      } else if (event.detail) {
        // FF浏览器使用的是detail,其值为“正负3”
        delta = -event.detail / 3;
      }
      if (delta) this.handle(delta);
    },
    /**
     * 上下滚动时的具体处理函数
     * @param {number} delta
     */
    handle(delta) {
      if (delta < 0) {
        // 向下滚动
      } else {
        // 向上滚动
      }
    },
    getheight() {
      console.log(document.body.clientHeight);
      var h =
        document.documentElement.clientHeight || document.body.clientHeight;
      console.log(h);
    },
  },
  watch: {
    /**鼠标滚轴事件 */
    onmousewheel(event) {
      let delta = 0;
      if (event.wheelDelta) {
        // IE、chrome浏览器使用的是wheelDelta，并且值为“正负120”
        delta = event.wheelDelta / 120;
        if (window.opera) delta = -delta; // 因为IE、chrome等向下滚动是负值，FF是正值，为了处理一致性，在此取反处理
      } else if (event.detail) {
        // FF浏览器使用的是detail,其值为“正负3”
        delta = -event.detail / 3;
      }
      if (delta) this.handle(delta);
    },
  },
};
</script>

<style scoped>
.main-content {
  width: 100%;
  height: 200%;
  position: absolute;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main-slideshow,
.main-news {
  width: 100%;
}
.main-news {
  padding-top: 100px;
}
.main-footer {
  width: 100%;
}
</style>
