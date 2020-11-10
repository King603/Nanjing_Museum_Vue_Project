<template>
  <div class="content">
    <!-- 头部导航 -->
    <top-nav></top-nav>
    <!-- 热点轮播 -->
    <page-1 class="slideshow"></page-1>
    <!-- 新闻公告 -->
    <page-2 class="news"></page-2>
    <!-- 在线咨询 -->
    <bot-foo class="footer"></bot-foo>
  </div>
</template>

<script>
export default {
  components: {
    topNav: () => import("../../components/top-nav"),
    page1: () => import("../../components/page1"),
    page2: () => import("../../components/page2"),
    botFoo: () => import("../../components/bot-foo"),
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

<style>
.content {
  width: 100%;
  height: 200%;
  position: absolute;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.slideshow,
.news {
  width: 100%;
  height: 100%;
}
.news {
  padding-top: 1rem;
}
.footer {
  width: 100%;
  position: absolute;
  bottom: 0;
}
</style>
