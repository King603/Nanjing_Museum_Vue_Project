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
export default {
  props: {
    name: String,
  },
  data() {
    return {
      goods_img: [
        {
          src: "static/goods/NO.0.png",
          height: 400,
          goods: [],
        },
        {
          src: "static/goods/NO.1.png",
          height: 300,
          goods: [],
        },
        {
          src: "static/goods/NO.2.png",
          height: 300,
          goods: [
            {
              src: "../../static/goods/2-1.png",
              price: "3280",
              num: 0,
              name: "缂丝通勤包",
            },
            {
              src: "../../static/goods/2-2.png",
              price: "2480",
              num: 0,
              name: "缂丝马蹄包",
            },
            {
              src: "../../static/goods/2-3.png",
              price: "1958",
              num: 0,
              name: "缂丝手拎包袋",
            },
            {
              src: "../../static/goods/2-4.png",
              price: "1188",
              num: 0,
              name: "缂丝拉链钱包",
            },
            {
              src: "../../static/goods/2-5.png",
              price: "1188",
              num: 0,
              name: "缂丝三折钱包",
            },
            {
              src: "../../static/goods/2-6.png",
              price: "1408",
              num: 0,
              name: "缂丝商务钱夹",
            },
            {
              src: "../../static/goods/2-7.png",
              price: "3280",
              num: 0,
              name: "沈周玉缂丝双肩包",
            },
          ],
        },
        {
          src: "static/goods/NO.3.png",
          height: 300,
          goods: [
            { src: "../../static/goods/3-1.png", price: "3280", num: 0 },
            { src: "../../static/goods/3-2.png", price: "98", num: 0 },
            { src: "../../static/goods/3-3.png", price: "45", num: 0 },
            { src: "../../static/goods/3-4.png", price: "88", num: 0 },
          ],
        },
        {
          src: "static/goods/NO.4.png",
          height: 301,
          goods: [],
        },
        {
          src: "static/goods/NO.5.png",
          height: 301,
          goods: [
            { src: "../../static/goods/5-1.png", price: "128", num: 0 },
            { src: "../../static/goods/5-2.png", price: "98", num: 0 },
            { src: "../../static/goods/5-3.png", price: "98", num: 0 },
            { src: "../../static/goods/5-4.png", price: "328", num: 0 },
            { src: "../../static/goods/5-5.png", price: "800", num: 0 },
            { src: "../../static/goods/5-6.png", price: "25", num: 0 },
          ],
        },
        {
          src: "static/goods/NO.6.png",
          height: 300,
          goods: [],
        },
        {
          src: "static/goods/NO.7.png",
          height: 300,
          goods: [
            { src: "../../static/goods/7-1.png", price: "98", num: 0 },
            { src: "../../static/goods/7-2.png", price: "12", num: 0 },
            { src: "../../static/goods/7-3.png", price: "25", num: 0 },
            { src: "../../static/goods/7-4.png", price: "58", num: 0 },
            { src: "../../static/goods/7-5.png", price: "58", num: 0 },
          ],
        },
        {
          src: "static/goods/NO.8.png",
          height: 500,
          goods: [{ src: "../../static/goods/8-1.png", price: "58", num: 0 }],
        },
      ],
      good: null,
      isIn: false,
    };
  },
  components: {
    Page2: () => import("./page2"),
  },
};
</script>

<style scoped>
</style>