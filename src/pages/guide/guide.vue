<template>
  <div class="content" style="background-color: rgb(246, 239, 229)">
    <top-nav ind="3" />
    <div class="main">
      <div class="nav">
        <ul>
          <li
            v-for="(nav, i) of navList"
            :key="i"
            @click="show(i)"
            class="list"
            :class="getclass(i)"
          >
            {{ nav.title }}
          </li>
        </ul>
      </div>
      <page-1 v-show="index == 0" class="page" />
      <page-2 v-show="index == 1" class="page" />
      <page-3 v-show="index == 2" class="page" />
    </div>
    <to-top></to-top>
  </div>
</template>

<script>
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
      navList: [
        { title: "交通与周边信息" },
        { title: "参观须知" },
        { title: "场馆地图" },
      ],
      index: 0,
    };
  },
  methods: {
    show(i) {
      this.index = i;
    },
    getclass(i) {
      return this.index == i && "active";
    },
  },
};
</script>

<style scoped>
.main {
  max-width: 12rem;
  width: 100%;
  margin-top: 0.64rem;
  display: flex;
}
.nav {
  border: 1px solid #fff;
  width: 15%;
  background-image: url(http://www.capitalmuseum.org.cn/zjsb/images/1670.files/jxzltwo_02.jpg);
}
.list {
  line-height: 0.3rem;
  width: 100%;
  text-align: center;
}
.list:hover,
.active {
  color: #8a8888;
}
.active {
  border-bottom: 1px solid;
  border-top: 1px solid;
}
.page {
  width: 85%;
  background-image: url(http://www.capitalmuseum.org.cn/zjsb/images/1730.files/ps2.jpg);
}
</style>