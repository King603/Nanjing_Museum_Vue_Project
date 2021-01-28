<template name="ar-search">
  <div class="search-main">
    <form method="get">
      <input
        class="search-input"
        name="k"
        type="text"
        placeholder="在这里搜索..."
        onfocus="if(this.value=='在这里搜索...'){this.value='';}"
        onblur="if(this.value==''){this.value='在这里搜索...';}"
      />
      <button class="search-button">搜 索</button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style>
.search-main {
  float: right;
  margin-top: 10px;
  margin-left: 50px;
}
.search-input {
  width: 200px;
  height: 20px;
  border: solid #ffd672 1px;
}
.search-button {
  width: 50px;
  height: 22px;
  background-color: #e8be58;
  color: #ffffff;
  border: 0;
}
</style>