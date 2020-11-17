<template>
  <div class="content" style="background-color: rgb(246, 239, 229)">
    <top-nav :ind="3"></top-nav>
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
    </div>
  </div>
</template>

<script>
export default {
  components: {
    topNav: () => import("../../components/top-nav"),
  },
  data() {
    return {
      navList: [
        { title: "交通线路" },
        { title: "开放时间" },
        { title: "安全须知" },
        { title: "注意事项" },
        { title: "场馆地图" },
        { title: "周边信息" },
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
}
.list {
  line-height: 0.3rem;
  width: 100%;
  background-image: linear-gradient(to right, #b19da9, #723c5e);
  text-align: center;
}
.list:hover,
.active {
  color: white;
}
.active {
  border-bottom: 1px solid;
  border-top: 1px solid;
}
</style>