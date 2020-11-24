<template>
  <div class="swiper-slider">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "swiper-slider",
};
</script>

<style>
.swiper-slider {
  display: inline-block;
}
</style>