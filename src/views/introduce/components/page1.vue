<template>
  <div class="page1content content">
    <div>
      <h6 class="introduce-title">{{ title }}</h6>
    </div>
    <div v-for="text of texts" :key="text" class="text">
      {{ text }}
    </div>
    <div v-for="(introduce, i) of introduces" :key="i" class="vsbcontent_img">
      <img
        :src="img.src"
        alt=""
        v-for="(img, index) of introduce.imgs"
        :key="index"
        :class="img.small ? 'small_img' : ''"
      />
      <p v-if="introduce.title">{{ introduce.title }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "page-1",
  data() {
    return {
      title: "",
      texts: [],
      introduces: [],
    };
  },
  mounted() {
    axios({
      method: "GET",
      url: "introduces.json",
    })
      .then((res) => {
        if (res.status == 200) {
          this.introduces = res.data.introduces;
          this.title = res.data.title;
          this.texts = res.data.text.split("\n");
        }
      })
      .catch((res) => console.log(res));
  },
};
</script>

<style scroped>
.page1content {
  padding: 0 50px;color: #737373;
}
.introduce-title {
  font-size: 32px;
  line-height: 150%;
  margin: 10px 0;
}
.text {
  line-height: 150%;
  text-indent: 2em;
  font-size: 18px;
  margin-bottom: 20px;
}
.vsbcontent_img {
  width: 100%;
  text-align: center;
  box-sizing: border-box;
  padding: 0 100px;
}
.vsbcontent_img img {
  border: #ccc 1px solid;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
}
.small_img {
  height: 700px;
  width: 40% !important;
}
.small_img + .small_img {
  margin-left: 10%;
}
.vsbcontent_img p {
  line-height: 150%;
  font-size: 14px;
  margin-bottom: 17px;
}
</style>