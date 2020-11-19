<template>
  <div>
    <swiper
      class="swiperItem"
      :indicator-dots="true"
      indicator-color="rgba(0,0,0,.3)"
      indicator-active-color="#000000"
      autoplay="true"
      :interval="5000"
      :duration="1000"
      circular="true"
    >
      <swiper-item v-for="(img, index) of list" :key="index">
        <image :src="img.src" class="swiperItem"></image>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "page-1",
  data() {
    return {
      list: [
        { src: "/static/swiper/1.png" },
        { src: "/static/swiper/2.png" },
        { src: "/static/swiper/3.png" },
        { src: "/static/swiper/4.png" },
        { src: "/static/swiper/5.png" },
        { src: "/static/swiper/6.png" },
      ],
    };
  },
};
</script>

<style scoped>
.swiperItem {
  width: 100%;
  height: 100%;
}
</style>

