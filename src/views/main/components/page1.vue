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
import { url } from "../../../config";

export default {
  name: "page-1",
  data() {
    return {
      list: [
        // { src: url+"/swiper/1.png" },
        { src: url + "/swiper/2.png" },
        { src: url + "/swiper/3.png" },
        { src: url + "/swiper/4.png" },
        { src: url + "/swiper/5.png" },
        { src: url + "/swiper/6.png" },
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
}
.home img {
  width: 100%;
}
</style>

