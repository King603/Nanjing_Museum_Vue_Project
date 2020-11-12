<template>
  <header class="top-nav">
    <div class="nav">
      <div class="logo">
        <navigator url="/"
          ><img :src="top == 0 ? frist_img : next_img" alt=""
        /></navigator>
      </div>
      <div>
        <div
          class="nav_list"
          v-for="(nav, i) of navigations"
          :key="i"
        >
          <div>
            <navigator :url="nav.to">{{ nav.title }}</navigator>
          </div>
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
          to: "../index/index",
        },
        {
          title: "走进博物馆",
          isMoveIn: false,
          to: "../introduce/introduce",
        },
        {
          title: "陈列展览",
          isMoveIn: false,
          to: "",
        },
        {
          title: "参观指南",
          isMoveIn: false,
          to: "",
        },
        {
          title: "文创产品",
          isMoveIn: false,
          to: "",
        },
        {
          title: "网络购票",
          isMoveIn: false,
          to: "",
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
};
</script>

<style scoped>
.top-nav {
  width: 100%;
  height: 0.64rem;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.33);
  z-index: 99;
  font-size: 0.16rem;
}
.top-nav navigator {
  z-index: 1000;
}
.nav {
  display: flex;
  margin: 0 auto;
  max-width: 12rem;
}
.logo {
  height: 0.64rem;
}
.logo img {
  height: 0.64rem;
}
.nav_list navigator {
  height: 0.64rem;
  line-height: 0.64rem;
  width: 100%;
}
.nav_list navigator:hover {
  border-bottom: 2px solid #00f;
}
.nav_list {
  display: inline-flex;
  margin: 0 auto;
}
.nav_list > div {
  width: 100%;
  margin-left: 0.4rem;
  color: #fff;
}

</style>