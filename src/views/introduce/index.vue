<template>
  <div class="content" :style="{ 'background-image': `url(${bgImgUrl})` }">
    <top-nav ind="1"/>
    <div class="main">
      <div class="logobg" :style="{ 'background-image': `url(${logoBgUrl})` }">
        <img :src="logo" alt="" class="logo" />
        <div class="title">
          <div
            class="title_bg"
            :class="i == index ? 'designate' : ''"
            v-for="(name, i) of buttonList"
            :key="i"
            @click="show(i)"
          >
            {{ name }}
          </div>
        </div>
      </div>
      <!-- 博物馆简介 -->
      <page-1 v-show="index == 0"></page-1>
      <!-- 大事记 -->
      <page-2 v-show="index == 1"></page-2>
      <!-- 名人致辞 -->
      <page-3 v-show="index == 2"></page-3>
      <to-top></to-top>
    </div>
  </div>
</template>

<script>
import { url } from "../../config";
export default {
  components: {
    topNav: () => import("../../components/top-nav"),
    Page1: () => import("./components/page1"),
    Page2: () => import("./components/page2"),
    Page3: () => import("./components/page3"),
    toTop: () => import("../../components/pageTop"),
  },
  data() {
    return {
      bgImgUrl: url + "/bg/2bg.jpg",
      logoBgUrl: url + "/bg/indextop.jpg",
      logo: url + "/logo/logo.png",
      index: 0,
      buttonList: ["博物馆简介", "大事记", "名人致辞"],
    };
  },
  methods: {
    show(n) {
      this.index = n;
    },
  },
};
</script>

<style scoped>
.content {
  background-color: #f5f6ef;
}
.main {
  max-width: 1200px;
  width: 100%;
}
.logobg {
  background-size: 100% 100%;
  position: relative;
  width: 100%;
  height: 300px;
}
.logo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.title {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  width: 100%;
  font-size: 13px;
  text-align: center;
}
.title > div {
  width: 100%;
  line-height: 44px;
  font-size: 13px;
  margin: 0 1px;
  border: 1px solid #fff;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.title_bg {
  color: #fff;
  text-shadow: 1px 1px 0 #11182c;
  background-image: radial-gradient(
    50px at center center,
    #acaf7a 0%,
    #a1a568 100%
  );
  background-image: -webkit-repeating-radial-gradient(
    50px at center center,
    #acaf7a 0%,
    #a1a568 100%
  );
  background-image: -moz-repeating-radial-gradient(
    50px at center center,
    #acaf7a 0%,
    #a1a568 100%
  );
  background-image: -o-repeating-radial-gradient(
    50px at center center,
    #acaf7a 0%,
    #a1a568 100%
  );
  background-image: -ms-repeating-radial-gradient(
    50px at center center,
    #acaf7a 0%,
    #a1a568 100%
  );
}
.title_bg:hover,
.designate {
  color: #000;
  text-shadow: 1px 1px 0 #f1b955;
  background-image: radial-gradient(
    50px at center center,
    #eda119 0%,
    #ea7107 100%
  );
  background-image: -webkit-repeating-radial-gradient(
    50px at center center,
    #eda119 0%,
    #ea7107 100%
  );
  background-image: -moz-repeating-radial-gradient(
    50px at center center,
    #eda119 0%,
    #ea7107 100%
  );
  background-image: -o-repeating-radial-gradient(
    50px at center center,
    #eda119 0%,
    #ea7107 100%
  );
  background-image: -ms-repeating-radial-gradient(
    50px at center center,
    #eda119 0%,
    #ea7107 100%
  );
}
</style>