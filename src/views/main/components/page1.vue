<template>
  <div class="home">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(img, index) of list" :key="index">
        <img :src="img.src" alt="" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "page-1",
  data() {
    return {
      list: [
        // { src: "./static/swiper/1.png" },
        { src: "./static/swiper/2.png" },
        { src: "./static/swiper/3.png" },
        { src: "./static/swiper/4.png" },
        { src: "./static/swiper/5.png" },
        { src: "./static/swiper/6.png" },
      ],
      swiperOption: {
        //swiper3
        autoplay: 3000,
        speed: 1000,
        loop: true,
      },
    };
  },
  components: {
    swiper,
    swiperSlide,
  },
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
}
.home img {
  width: 100%;
}
</style>

