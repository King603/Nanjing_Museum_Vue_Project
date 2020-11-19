<template>
  <div @click="gotoTop" class="toTop">
    <span>回到顶部 ↑</span>
  </div>
</template>

<script>
export default {
  methods: {
    gotoTop() {
      uni.pageScrollTo({
        scrollTop: 0,
        duration: 200,
      });
    },
  },
  name: "to-top",
};
</script>

<style scoped>
.toTop {
  position: fixed;
  bottom: 0.25rem;
  right: 0.25rem;
  color: yellow;
  background: blue;
  /* font-weight: bold; */
  font-size: 0.24rem;
  border: 3px solid yellowgreen;
  width: 2rem;
  text-align: center;
  border-radius: 50%;
}
</style>