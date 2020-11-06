<template>
  <div class="nav">
    <div v-for="(nav, i) of navigations" :key="i">
      <div>{{ nav }}</div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "top-nav",
  data() {
    return {
      navigations: [
        "首页",
        "走进博物馆",
        "陈列展览",
        "参观指南",
        "文创产品",
        "网络购票",
        "学术研究/出版物",
        "社会活动",
        "当地文化",
      ],
    };
  },
};
</script>

<style scoped>
.nav {
  display: flex;
}
.nav > div > div {
  width: 100%;
}
</style>