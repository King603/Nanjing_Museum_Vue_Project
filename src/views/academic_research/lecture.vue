<template>
  <div class="academic_research-page">
    <top-nav ind="6" />
    <div class="academic_research-main">
      <ar-research />
      <div class="main_r">
        <div class="position">
          <div style="float: left; margin-top: 15px; margin-left: 20px">
            当前位置：<router-link to="" title="">首页</router-link>&gt;
            <router-link to="" title="学术研究">学术研究</router-link>&gt;
            <router-link to="" title="新文化讲堂">新文化讲堂</router-link>
          </div>
          <ar-search />
        </div>
        <div class="main_content">
          <div class="content_zjk">
            <a
              :href="url"
              v-for="({ url, src, title }, i) of lectureList"
              :key="i"
            >
              <dl>
                <dt>
                  <img :src="src" width="180" height="201" />
                </dt>
                <dd>{{ title }}</dd>
              </dl>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  components: {
    topNav: () => import("../../components/top-nav"),
    arResearch: () => import("./components/research"),
    arSearch: () => import("./components/search"),
  },
  data() {
    return {
      lectureList: [],
    };
  },
  mounted() {
    axios({ method: "GET", url: "academic-lecture.json" })
      .then((res) => (this.lectureList = res.data))
      .catch((err) => console.log(err));
  },
};
</script>

<style>
.academic_research-page {
  font-family: Arial, "微软雅黑";
  color: #333333;
  font-size: 12px;
  background: url(http://www.luxunmuseum.com.cn/template/default/images/bg_y.jpg)
    repeat-y top center;
  background-color: #eddcbd;
}
.academic_research-main {
  width: 1000px;
  margin: auto;
  padding-top: 20px;
  overflow: hidden;
}
.academic_research-main input {
  -webkit-writing-mode: horizontal-tb !important;
  text-rendering: auto;
  color: -internal-light-dark(black, white);
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  appearance: textfield;
  background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
  -webkit-rtl-ordering: logical;
  cursor: text;
  margin: 0em;
  font: 400 13.3333px Arial;
  padding: 1px 2px;
  border-width: 2px;
  border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
  border-image: initial;
}
.academic_research-main input[type="hidden" i] {
  display: none;
  appearance: initial;
  background-color: initial;
  cursor: default;
  padding: initial;
  border: initial;
}

li {
  display: list-item;
  text-align: -webkit-match-parent;
}

.position {
  height: 50px;
  text-align: right;
  padding-right: 20px;
  background: url(http://www.luxunmuseum.com.cn/template/default/images/bg_centent.jpg)
    no-repeat right bottom;
  font-size: 13px;
}
.main_r {
  width: 715px;
}
.main_r,
.more {
  float: right;
}
.content_zjk {
  padding-top: 40px;
  overflow: hidden;
}
.content_zjk dl {
  display: block;
  float: left;
  text-align: center;
  font-size: 14px;
  margin-left: 35px;
  margin-bottom: 30px;
}
.content_zjk dt {
  margin-bottom: 10px;
}
.content_zjk dd:hover {
  color: #ce0202;
}
</style>