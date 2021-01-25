<template>
  <div class="content">
    <div class="title">{{ title }}</div>
    <img :src="responsive" alt="" class="responsive-img" />
    <div class="info">
      <p>{{ info.name }}</p>
      <p>{{ info.position }}</p>
    </div>
    <p v-for="(text, i) of texts" :key="i" class="wenben">
      <span>{{ text }}</span>
    </p>
    <img :src="signature" alt="" class="newsInfo" />
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      title: "",
      responsive: "",
      info: {},
      texts: [],
      signature: "",
    };
  },
  mounted() {
    axios({
      method: "GET",
      url: "info.json",
    })
      .then((res) => {
        ({
          title: this.title,
          responsive: this.responsive,
          info: this.info,
          signature: this.signature,
        } = res.data);
        this.texts = res.data.matter.split("\n");
      })
      .catch((res) => console.log(res));
  },
};
</script>

<style scoped>
.content {
  position: relative;
  padding-bottom: 100px;
}
.title {
  font-size: 32px;
  color: #819319;
  font-weight: bold;
  margin: 10px 0;
}
img.newsInfo,
img.responsive-img {
  max-width: 100%;
  height: auto;
}
.info {
  line-height: 30px;
  font-size: 18px;
  font-weight: bold;
  text-align: center !important;
}
.wenben {
  text-indent: 32px;
  line-height: 175%;
  font-size: 16px;
  text-align: justify;
  margin: 0 45px;
  margin-top: 15px;
}
img.newsInfo {
  position: absolute;
  right: 5px;
  bottom: 0;
}
</style>