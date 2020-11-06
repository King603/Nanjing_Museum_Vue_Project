<template>
  <top-nav class="top-nav"></top-nav>
</template>

<script>
import topNav from "./components/top-nav";

export default {
  name: "App",
  components: {
    topNav,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.top-nav {
  width: 100%;
  height: 4rem;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.33);
}
</style>
