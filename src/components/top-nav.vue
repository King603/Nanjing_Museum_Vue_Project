<template>
  <header class="top-nav">
    <div class="nav">
      <div class="logo">
        <router-link :to="{ path: '/' }">
          <img :src="top == 0 ? frist_img : next_img" alt="" />
        </router-link>
      </div>
      <div>
        <div class="nav_list" v-for="(nav, i) of navigations" :key="i + ''">
          <router-link
            :to="{ path: nav.to }"
            :class="i == ind ? 'active' : ''"
            >{{ nav.title }}</router-link
          >
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "top-nav",
  data() {
    return {
      navigations: [
        {
          title: "首页",
          isMoveIn: false,
          to: "/",
        },
        {
          title: "走进博物馆",
          isMoveIn: false,
          to: "/introduce",
        },
        {
          title: "陈列展览",
          isMoveIn: false,
          to: "/exhibition",
        },
        {
          title: "参观指南",
          isMoveIn: false,
          to: "/guide",
        },
        {
          title: "文创产品",
          isMoveIn: false,
          to: "/wen_gen_products",
        },
        {
          title: "网络购票",
          isMoveIn: false,
          to: "/ticket",
        },
        {
          title: "学术研究/出版物",
          isMoveIn: false,
          to: "",
        },
        {
          title: "社会活动",
          isMoveIn: false,
          to: "",
        },
        {
          title: "当地文化",
          isMoveIn: false,
          to: "",
        },
      ],
      frist_img: "./static/frist_img.png",
      next_img: "./static/next_img.png",
      top: 0,
    };
  },
  methods: {},
  props: {
    ind: {
      type: String,
      default: "0",
    },
  },
};
</script>

<style>
.top-nav {
  width: 100%;
  height: 64px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.33);
  z-index: 99;
  font-size: 16px;
}
.top-nav a {
  z-index: 1000;
}
.nav {
  display: flex;
  margin: 0 auto;
  max-width: 1200px;
}
.logo {
  height: 64px;
}
.logo img {
  height: 100%;
}
.nav_list a {
  height: 64px;
  line-height: 64px;
  width: 100%;
  color: #fff;
}
.nav_list:hover {
  border-bottom: 2px solid #da251c;
}
.nav_list {
  display: inline-block;
  margin: 0 auto;
  margin-left: 40px;
}
.active {
  color: #da251c !important;
}
</style>