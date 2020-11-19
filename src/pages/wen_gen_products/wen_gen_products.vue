<template>
  <div class="content">
    <top-nav ind="4"></top-nav>
    <div class="main">
      <div class="title">
        <ul class="leftlist">
          <li
            v-for="(tit, i) of titles"
            :key="i"
            @click="show(i)"
            :class="getclass(i)"
          >
            {{ tit }}
          </li>
        </ul>
      </div>
      <!-- 产品明细 -->
      <div v-show="index == -1">
        <span>当前页为：</span><span>{{ titles[0] }}</span
        >--><span>{{ artgoods[artgoods_page - 1] }}</span>
        <div>
          <span :title="artgoods_page !== 1 ? artgoods[0] : ''">首页</span>
          <span :title="artgoods_page !== 1 ? artgoods[artgoods_page - 2] : ''"
            >上一页</span
          >
          <span
            v-for="(goods, i) of artgoods"
            :key="i"
            :title="artgoods_page - 1 !== i ? '该页为' + goods : ''"
            >{{ i + 1 }}</span
          >
          <span
            :title="
              artgoods_page !== artgoods.length ? artgoods[artgoods_page] : ''
            "
            >下一页</span
          >
          <span
            :title="
              artgoods_page !== artgoods.length
                ? artgoods[artgoods.length - 1]
                : ''
            "
            >尾页</span
          >
        </div>
      </div>
      <!-- 产品图文介绍 -->
      <div v-show="index == 0">
        <swiper
          class="swiper"
          :indicator-dots="false"
          :autoplay="true"
          :interval="5000"
          :duration="1000"
          :circular="true"
        >
          <swiper-item v-for="(img, index) of swiperImg" :key="index">
            <img :src="img" class="swiperItem" />
          </swiper-item>
        </swiper>
        <div
          class="artgoods-allsort"
          :style="{ background: `url(${artgoods_allsort}) no-repeat` }"
        >
          <ul>
            <li v-for="i of artgoods.length" :key="i" @click="to(i)"></li>
          </ul>
        </div>
        <div class="artgoods-img">
          <img
            :src="`../../static/wen_gen/artgoods-${i}.jpg`"
            v-for="i of artgoods.length"
            :key="i"
            @click="to(i)"
          />
        </div>
      </div>
      <!-- 产品购买 -->
      <!-- 产品防伪溯源信息查询、举报 -->
    </div>
    <to-top></to-top>
  </div>
</template>

<script>
export default {
  components: {
    topNav: () => import("../../components/top-nav"),
    toTop: () => import("../../components/pageTop"),
  },
  data() {
    return {
      titles: ["产品图文介绍", "产品购买", "产品防伪溯源信息查询、举报"],
      index: 0,
      products: [
        { img: "", tit: "", price: "", num: 0 },
        { img: "", tit: "", price: "", num: 0 },
        { img: "", tit: "", price: "", num: 0 },
        { img: "", tit: "", price: "", num: 0 },
      ],
      swiperImg: [
        "https://file.szmuseum.com/WaterMark/%E6%96%87%E5%88%9B%E4%BA%A7%E5%93%81%E7%AE%A1%E7%90%86%E5%9B%BE%E7%89%87/20170418184334eaVs0y.jpg",
        "https://file.szmuseum.com/WaterMark/%E6%96%87%E5%88%9B%E4%BA%A7%E5%93%81%E7%AE%A1%E7%90%86%E5%9B%BE%E7%89%87/20170418184509srW1TB.jpg",
        "https://file.szmuseum.com/WaterMark/%E6%96%87%E5%88%9B%E4%BA%A7%E5%93%81%E7%AE%A1%E7%90%86%E5%9B%BE%E7%89%87/20170418192053BGv7Qc.jpg",
      ],
      artgoods_allsort: "../../static/wen_gen/4-1.png",
      artgoods: ["鎮館之寶", "吳門四家", "蘇博建築", "煙雲過眼"],
      artgoods_page: -1,
    };
  },
  methods: {
    show(i) {
      this.index = i;
    },
    getclass(i) {
      return this.index == i && "active";
    },
    to(i) {
      console.log(i);
      this.artgoods_page = i;
      this.index = -1;
      console.log("跳轉成功，當前頁是" + this.artgoods[i - 1]);
    },
  },
};
</script>

<style>
.main {
  margin-top: 0.64rem;
  max-width: 12rem;
  width: 100%;
}
.title {
  width: 100%;
  background-color: #f3f3f3;
  border-bottom: 2px solid #e2e2e2;
}
.leftlist {
  text-align: center;
}
.leftlist li {
  height: 68px;
  line-height: 70px;
  font-size: 15px;
  margin: 0 17px;
  float: none;
  display: inline-block;
}
.leftlist li:hover,
.active {
  color: #da251c;
  border-bottom: 2px solid #da251c;
}
.swiper {
  height: 3rem;
}
.swiperItem {
  width: 100%;
  height: 100%;
}
.artgoods-allsort {
  margin-top: 30px;
  height: 624px;
  position: relative;
}
.artgoods-allsort ul {
  position: absolute;
  width: 94%;
  left: 3%;
  top: 90px;
}
.artgoods-allsort ul li {
  width: 25%;
  height: 310px;
  float: left;
  cursor: pointer;
}
.artgoods-img {
  margin-bottom: 20px;
  cursor: pointer;
}
</style>