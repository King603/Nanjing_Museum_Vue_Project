<template>
  <div class="main" @onmousewheel="onmousewheel">
    <!-- 导航栏 -->
    <top-nav class="top-nav"></top-nav>
    <!-- 首页轮播 -->
    <Page1 class="slideshow"></Page1>
    <!-- 新闻公告 -->
    <Page2 class="news"></Page2>
    <!-- 在线质询 -->
    
  </div>
</template>

<script>
import topNav from "./components/top-nav";
import Page1 from "./components/page1";
import Page2 from "./components/page2";

export default {
  name: "App",
  components: {
    topNav,
    Page1,
    Page2,
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
@import url(../public/css/style.css);
/* 隐藏滚动条样式，但可以实现上下滚动 */
/* chrome 和Safari  */
body::-webkit-scrollbar {
  display: none;
}
body {
  /* IE 10+ */
  -ms-overflow-style: none;
}
/* Firefox  暂时没有   坑啊 */

*,
::after,
::before {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.main {
  width: 100%;
  height: 100%;
  position: absolute;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.top-nav {
  width: 100%;
  height: 4rem;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.33);
  z-index: 99;
}
.slideshow,
.news {
  width: 100%;
}
.news {
  padding-top: 4rem;
}
</style>
