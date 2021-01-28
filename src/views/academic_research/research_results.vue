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
            <router-link to="" title="学术成果">学术成果</router-link>
          </div>
          <ar-search />
        </div>
        <div class="main_content">
          <div class="content_czyd">
            <div
              class="list_list"
              v-for="({ name, src, time, abstract }, i) of list"
              :key="i"
            >
              <router-link :to="src">
                <div class="list_l">
                  <dt>
                    {{ name }}
                    <span class="time">{{ time }}</span>
                  </dt>
                  <dd>
                    {{ abstract }}
                  </dd>
                </div>
                <div class="more"></div>
              </router-link>
            </div>
          </div>
          <div class="fenye">
            <li :class="page != 1 ? 'page' : 'page1'" @click="toFrist">首页</li>
            <li class="shangye" v-if="page != 1" @click="shangyiye"></li>
            <li>
              <select style="width: 71px" v-model="page">
                <option :value="i" v-for="i of pageNum" :key="i">
                  第{{ i }}页
                </option>
              </select>
            </li>
            <li class="xiaye" v-if="page != pageNum" @click="xiayiye"></li>
            <li :class="page != pageNum ? 'page' : 'page1'" @click="toEnd">
              末页
            </li>
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
  created() {
    axios({ method: "GET", url: "academic_research_results.json" }).then(
      (res) => {
        this.info = res.data;
        this.pageNum = Math.ceil(this.info.length / this.size);
        console.log(this.pageNum);
        for (
          let i = 0;
          i < this.size &&
          i < this.info.length &&
          (this.list[i] = this.info[i]);
          i++
        );
      }
    );
  },
  mounted() {},
  data() {
    return {
      pageNum: 0,
      size: 10,
      page: 1,
      info: [],
      /**@type {[]} */
      list: [],
    };
  },
  methods: {
    switchPage(n) {
      this.page += n;
    },
    shangyiye() {
      if (this.page == 1) return;
      this.switchPage(-1);
    },
    xiayiye() {
      if (this.page == this.pageNum) return;
      this.switchPage(1);
    },
    toFrist() {
      this.page = 1;
    },
    toEnd() {
      this.page = this.pageNum;
    },
    setList(i) {
      this.page = i;
    },
  },
  watch: {
    page(val) {
      console.log(val);
      for (
        let i = 0;
        i < this.size &&
        i + (val - 1) * this.size < this.info.length &&
        (this.list[i] = this.info[i + (val - 1) * this.size]);
        i++
      );
      console.log(this.list);
    },
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

.l {
  float: left;
}
.position {
  height: 50px;
  text-align: right;
  padding-right: 20px;
  background: url(http://www.luxunmuseum.com.cn/template/default/images/bg_centent.jpg)
    no-repeat right bottom;
  font-size: 13px;
}
.content_czyd {
  font-size: 14px;
  padding: 40px 0px 0px 40px;
  overflow: hidden;
}
.list_list {
  overflow: hidden;
  margin-bottom: 20px;
  border-bottom: #666 1px dotted;
}
.list_list .more {
  float: right;
}
.list_list a .more {
  display: block;
  width: 76px;
  height: 30px;
  background: url(http://www.luxunmuseum.com.cn/template/default/images/more01.jpg)
    no-repeat;
}
.list_list a:hover .more {
  background: url(http://www.luxunmuseum.com.cn/template/default/images/more02.jpg)
    no-repeat;
}
.list_l {
  width: 540px;
  display: block;
  float: left;
}
.list_l dd {
  font-size: 12px;
  padding: 24px 0px 20px 30px;
}
.list_l dt {
  position: relative;
  font-weight: bold;
}
.time {
  position: relative;
  font-size: 12px;
  color: #666666;
  float: right;
  right: 0px;
  font-weight: normal;
}
a {
  text-decoration: none;
  color: #333333;
  outline: none;
}
a:hover {
  color: #ce0202;
  outline: none;
}
a:focus {
  outline: none;
}
.fenye {
  overflow: hidden;
  text-align: center;
  margin-left: 80px;
  padding-top: 56px;
  clear: both;
}
.fenye li {
  float: left;
  margin-left: 5px;
  font-size: 18px;
}
.fenye p a {
  width: 87px;
  height: 40px;
  display: block;
  background: none;
}
.fenye select {
  border: #333333 solid 1px;
  height: 40px;
  background: url(http://www.luxunmuseum.com.cn/template/default/images/icont.jpg)
    no-repeat center;
  line-height: 40px;
  text-align: center;
  font-size: 14px;
  margin-left: 8px;
}
.page {
  display: block;
  float: left;
  width: 41px;
  height: 40px;
  background: url(http://www.luxunmuseum.com.cn/template/default/images/icon02.jpg)
    no-repeat;
  line-height: 40px;
  text-align: center;
  font-size: 14px;
  margin-left: 8px;
}
.page1 {
  display: block;
  float: left;
  width: 41px;
  height: 40px;
  background: url(http://www.luxunmuseum.com.cn/template/default/images/icon03.jpg)
    no-repeat;
  line-height: 40px;
  text-align: center;
  font-size: 14px;
  margin-left: 8px;
  color: #fff;
}

.xiaye {
  background: url(http://www.luxunmuseum.com.cn/template/default/images/xiaye.jpg)
    no-repeat;
  width: 87px;
  height: 40px;
  float: left;
  margin-left: 8px;
}
.xiaye:hover {
  background: url(http://www.luxunmuseum.com.cn/template/default/images/xiaye01.jpg)
    no-repeat;
}
.shangye {
  background: url(http://www.luxunmuseum.com.cn/template/default/images/shangye.jpg)
    no-repeat;
  width: 87px;
  height: 40px;
  float: left;
  margin-left: 5px;
}
.shangye:hover {
  background: url(http://www.luxunmuseum.com.cn/template/default/images/shangye01.jpg)
    no-repeat;
}

.main_r {
  width: 715px;
}
.main_r,
.more {
  float: right;
}
.shangye,
.xiaye,
.page,
.page1 {
  cursor: pointer;
}
</style>