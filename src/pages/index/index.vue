<template>
  <view class="content">
    <top-nav></top-nav>
    <page-1 class="slideshow"></page-1>
    <page-2 class="news"></page-2>
    <bot-foo></bot-foo>
  </view>
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
</style>
