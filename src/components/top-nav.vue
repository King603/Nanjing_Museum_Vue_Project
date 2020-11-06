<template>
  <div>
    <div class="nav">
      <div class="h1">
        <a href="/"
          ><img class="logo" v-if="top == 0" :src="frist_img" alt="" /><img
            class="logo"
            v-else
            :src="next_img"
            alt=""
        /></a>
      </div>
      <div class="nav_list">
        <div
          v-for="(nav, i) of navigations"
          :key="i"
          @mousemove="moveIn(i)"
          @mouseout="moveOut(i)"
        >
          <div class="center">
            <a :href="nav.to">{{ nav.title }}</a>
          </div>
          <div v-if="nav.isMoveIn" class="bottom"></div>
        </div>
      </div>
    </div>
  </div>
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
          to: "",
        },
        {
          title: "走进博物馆",
          isMoveIn: false,
          to: "",
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
      frist_img: "./img/frist_img.png",
      next_img: "./img/next_img.png",
      top: 0,
    };
  },
  methods: {
    moveIn(i) {
      this.navigations[i].isMoveIn = true;
    },
    moveOut(i) {
      this.navigations[i].isMoveIn = false;
    },
  },
};
</script>

<style scoped>
.h1 {
  margin: 0;
  height: 100%;
}
.nav {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
}
.logo {
  height: 4rem;
}
.none {
  display: none;
}
.nav_list {
  color: #fff;
}
.nav_list > div {
  display: inline-block;
  margin: 0 1rem;
  height: 100%;
}
.center {
  height: 100%;
  /* 文本居中显示 */
  /* 盒子模型 */
  display: flex;
  /* 横向 */
  flex-direction: row;
  /* 主轴居中 */
  justify-content: space-around;
  /* 纵轴居中 */
  align-items: center;
}
.bottom {
  width: 100%;
  height: 2px;
  background-color: cornflowerblue;
}
</style>