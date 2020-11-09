<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(img, i) of list" :key="i">
        <img :src="img" alt="" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from "swiper";

export default {
  name: "Page1",
  data() {
    return {
      list: [
        "./img/swiper/1.png",
        "./img/swiper/2.png",
        "./img/swiper/3.png",
        "./img/swiper/4.png",
        "./img/swiper/5.png",
        "./img/swiper/6.png",
      ],
    };
  },
  mounted() {
    /**初始化轮播图 */
    new Swiper(".swiper-container", {
      loop: true, // 循环模式选项
      speed: 500, // 切换时长
      grabCursor: true, // 设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状。
      autoplay: {
        delay: 3000, // 自动切换延时
        stopOnLastSlide: false, // 如果设置为true，当切换到最后一个slide时停止自动切换。（loop模式下无效）。
        disableOnInteraction: false, // 用户操作swiper之后，是否禁止autoplay。默认为true：停止。
      },
      keyboard: true, // 键盘切换

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
        clickable: true, // 此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
      },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  },
};
</script>

<style>
@import url(../until/swiper/swiper-bundle.css);
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide>img{
	width: 100%;
	height: 100%;
}
</style>

