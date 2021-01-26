<template>
  <div class="self">
    <div class="title">
      <strong>首都博物馆各层参观导览图（请点击放大观看）</strong>
    </div>
    <p v-for="(img, i) of img_navs" :key="i" class="img">
      <a :href="img.href" target="_blank">
        <img :src="img.src" alt="楼层地图" />
      </a>
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "page-3",
  data() {
    return {
      img_navs: null,
    };
  },
  mounted() {
    axios({
      method: "GET",
      url: "guide-nav.json",
    })
      .then((res) => (this.img_navs = res.data))
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped>
.img {
  margin: 0 100px;
}
.img:last-child {
  margin-bottom: 25px;
}
.img img {
  width: 100%;
  margin: 0 auto;
}
.title {
  margin: 25px auto;
  width: 80%;
}
</style>