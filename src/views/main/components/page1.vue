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
import axios from "axios";

export default {
  name: "page-1",
  data() {
    return {
      list: [],
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
  mounted() {
    axios({
      method: "GET",
      url: "swiper.json",
    })
      .then((res) =>
        res.data.forEach((img) => {
          if (res.status == 200) this.list.push({ src: img });
        })
      )
      .catch((res) => console.log(res));
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

