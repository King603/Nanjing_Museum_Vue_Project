<template>
  <div class="academic_research-page">
    <top-nav ind="6" />
    <div class="academic_research-main">
      <ar-research />
      <div class="main_r">
        <div class="position">
          <div style="float: left; margin-top: 15px; margin-left: 20px">
            当前位置：
            <router-link to="" title="">首页</router-link>&gt;
            <router-link to="" title="学术研究">学术研究</router-link> &gt;
            <router-link to="" title="研究课题">研究课题</router-link>
          </div>
          <ar-search />
        </div>
        <div class="main_content">
          <h1 class="h1">{{ h1 }}</h1>
          <table
            align="center"
            border="1px"
            width="700px"
            bordercolor="#5c5c5c"
          >
            <thead>
              <tr valign="middle">
                <th>主题</th>
                <th>研究型血型课题</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="({ theme, titles }, i) of list" :key="i">
                <td class="theme">{{ theme }}</td>
                <td class="title">
                  <ol>
                    <li v-for="({ title, url }, i) of titles" :key="i">
                      <router-link :to="url">
                        {{ i + 1 }}、{{ title }}
                      </router-link>
                    </li>
                  </ol>
                </td>
              </tr>
            </tbody>
          </table>
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
      h1: "研究课题表",
      list: [],
    };
  },
  mounted() {
    axios({ method: "GET", url: "academic-research_topic.json" })
      .then((res) => (this.list = res.data))
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
.h1 {
  font-size: xx-large;
  font-weight: bolder;
  text-align: center;
}
.theme {
  text-align: center;
}
.title {
  font-size: x-small;
  padding: 10px 15px;
}
.title li + li {
  margin-top: 5px;
}
a:hover {
  color: #ce0202;
}
</style>