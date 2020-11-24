<template>
  <table cellspacing="0" cellpadding="0" width="100%" class="text">
    <tr v-for="(info, i) of Info" :key="i">
      <td>
        <div>
          <p>
            <strong>名称：{{ info.name }}</strong
            ><br />
            地址：{{ info.address }}<br />
            邮编：{{ info.postcode }}<br />
            联系电话：{{ info.phone }}<br />
            <span v-if="info.url"
              >官方网址：<a :href="info.url" target="_blank"
                >{{ info.url }}<br /></a></span
            >（点击地图查看详细位置）&nbsp;
          </p>
        </div>
      </td>
      <td>
        <a :href="info.local" target="_blank"><img :src="info.src" /></a>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "page-0",
  props: {
    Info: Array,
  },
};
</script>

<style scoped>
p {
  display: block;
  margin: 10px 0 0 50px;
  padding-bottom: 10px;
}
a {
  color: #666;
  text-decoration: none;
}
</style>