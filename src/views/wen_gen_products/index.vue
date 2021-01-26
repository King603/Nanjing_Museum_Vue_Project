<template>
  <div class="content">
    <top-nav ind="4" />
    <div class="products-main">
      <div class="products-title">
        <ul class="products-leftlist">
          <li
            class="titList"
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
      <div v-if="index == -1" class="products-good_list">
        <div class="products-good_title">
          <span>当前页为：</span><span @click="goback(0)">{{ titles[0] }}</span
          >--><span>{{ artgoods_title[artgoods_page - 1].tit }}</span>
        </div>
        <page-1 :name="artgoods_title[artgoods_page - 1].tit"></page-1>
        <div>
          <span
            :title="artgoods_page !== 1 ? artgoods_title[0].tit : ''"
            @click="artgoods_page = 1"
            >首页</span
          >
          <span
            :title="
              artgoods_page !== 1 ? artgoods_title[artgoods_page - 2].tit : ''
            "
            @click="artgoods_page == 1 ? null : switchPage(-1)"
            >上一页</span
          >
          <span
            v-for="(goods, i) of artgoods_title"
            :key="i"
            :title="artgoods_page - 1 !== i ? '该页为' + goods.tit : ''"
            >{{ i + 1 }}</span
          >
          <span
            :title="
              artgoods_page !== artgoods_title.length
                ? artgoods_title[artgoods_page].tit
                : ''
            "
            @click="
              artgoods_page == artgoods_title.length ? null : switchPage(1)
            "
            >下一页</span
          >
          <span
            :title="
              artgoods_page !== artgoods_title.length
                ? artgoods_title[artgoods_title.length - 1].tit
                : ''
            "
            @click="artgoods_page = artgoods_title[artgoods_title.length - 1]"
            >尾页</span
          >
        </div>
      </div>
      <!-- 产品图文介绍 -->
      <div v-if="index == 0">
        <div class="products-home">
          <swiper :options="swiperOption">
            <swiper-slide v-for="(img, index) of swiperImg" :key="index">
              <img :src="img.src" alt="" class="products-swiperItem" />
            </swiper-slide>
          </swiper>
        </div>

        <div
          class="products-artgoods-allsort"
          :style="{ background: `url(${artgoods_allsort}) no-repeat` }"
        >
          <ul>
            <li v-for="i of artgoods_title.length" :key="i" @click="to(i)"></li>
          </ul>
        </div>
        <div class="products-artgoods-img">
          <img
            :src="title.src"
            v-for="(title, i) of artgoods_title"
            :key="i"
            @click="to(i + 1)"
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
import { swiper, swiperSlide } from "vue-awesome-swiper";
import axios from "axios";

export default {
  components: {
    topNav: () => import("../../components/top-nav"),
    toTop: () => import("../../components/pageTop"),
    swiper,
    swiperSlide,
    Page1: () => import("./components/page1.vue"),
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
      swiperImg: [],
      artgoods_allsort: "",
      artgoods_title: [],
      artgoods_page: -1,
      swiperOption: {
        //swiper3
        autoplay: 3000,
        speed: 1000,
        loop: true,
      },
      allsort_index: 0,
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
      console.log("跳轉成功，當前頁是" + this.artgoods_title[i - 1].tit);
    },
    goback(n) {
      this.index = n;
    },
    switchPage(n) {
      this.artgoods_page += n;
      console.log(
        "跳轉成功，當前頁是" + this.artgoods_title[this.artgoods_page - 1].tit
      );
    },
  },
  mounted() {
    axios({
      method: "GET",
      url: "artgoods.json",
    }).then((res) => {
      this.artgoods_allsort = res.data.allsorts[this.allsort_index];
      this.artgoods_title = res.data.title;
      this.swiperImg = res.data.swiperImg;
    });
  },
};
</script>

<style scoped>
.products-main {
  max-width: 1200px;
  width: 100%;
}
.products-title {
  width: 100%;
  background-color: #f3f3f3;
  border-bottom: 2px solid #e2e2e2;
}
.products-leftlist {
  text-align: center;
}
.products-leftlist li {
  height: 68px;
  line-height: 70px;
  font-size: 15px;
  margin: 0 17px;
  float: none;
  display: inline-block;
}
.products-leftlist .titList:hover,
.active {
  color: #da251c;
  border-bottom: 2px solid #da251c;
}
.titList.active {
  border: none !important;
  border-bottom: 2px solid #da251c;
}
.products-artgoods-allsort {
  margin-top: 30px;
  height: 624px;
  position: relative;
}
.products-artgoods-allsort ul {
  position: absolute;
  width: 94%;
  left: 3%;
  top: 90px;
}
.products-artgoods-allsort ul li {
  width: 25%;
  height: 310px;
  float: left;
  cursor: pointer;
}
.products-artgoods-img {
  margin-bottom: 20px;
  cursor: pointer;
}
.products-good_list {
  position: relative;
}
.products-good_title {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
.products-home {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.products-home img {
  width: 100%;
}
</style>