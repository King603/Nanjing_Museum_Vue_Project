<template>
  <div>
    <table width="100%" border="0" cellpadding="0" cellspacing="0">
      <tr v-for="(img, i) of goods_img" :key="i">
        <td class="goods">
          <img :src="img.src" width="100%" :height="img.height" />
          <div v-for="(g, j) of img.goods" :key="j">
            <img :src="g.src" alt="" />
            <div>
              <span>{{ g.name }}</span>
              <span>RMB:{{ g.price }}</span
              ><span>点击购买</span>
            </div>
          </div>
        </td>
      </tr>
    </table>
    <page-2 :good="good" v-if="isIn"></page-2>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    name: String,
  },
  data() {
    return {
      goods_img: null,
      good: null,
      isIn: false,
    };
  },
  components: {
    Page2: () => import("./page2"),
  },
  mounted() {
    axios({
      method: "GET",
      url: "wen_gen_products.json",
      data: { name: this.name },
    })
      .then((res) => (this.goods_img = res.data))
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped>
</style>