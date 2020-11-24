<template>
  <div class="home">
    <swiper>
      <swiper-slider v-for="(img, index) of list" :key="index"
        ><img :src="img.src" alt=""
      /></swiper-slider>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "page-1",
  data() {
    return {
      list: [
        // { src: "/static/swiper/1.png" },
        { src: "/static/swiper/2.png" },
        { src: "/static/swiper/3.png" },
        { src: "/static/swiper/4.png" },
        { src: "/static/swiper/5.png" },
        { src: "/static/swiper/6.png" },
      ],
    };
  },
  components: {
    Swiper:()=>import("@/components/swiper"),
    SwiperSlider:()=>import("@/components/swiper-slide"),
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

