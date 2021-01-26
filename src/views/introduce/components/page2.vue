<template>
  <div class="content">
    <div class="info" v-if="!isShow">
      <h3 class="til_lf01">
        <span>博物馆大事记</span>
      </h3>
      <div class="box_event02">
        <ul class="box_event02-ul">
          <li
            v-for="(news, i) of list"
            :key="i"
            @click="show(news.year, news.date)"
          >
            <img :src="list_style_image" alt="" />
            <span>{{ news.year }}年博物馆大事记</span>
            <span>{{ news.date }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="info" v-else>
      <div class="goBack" @click="goBack">返回列表页</div>
      <h2 class="title">{{ year }}年博物馆大事记</h2>
      <div class="author">{{ date }}</div>
      <div class="article_t">
        <p v-for="(data, i) of result" :key="i">
          <strong>{{ data.date }}：&nbsp;</strong>
          <span>{{ data.info }}</span>
        </p>
        <br />
        <br />
        <br />
        <div>
          <p>博物馆全年接待参观{{ visitNum }}人次。</p>
          <p>微信公众号关注人数{{ readNum }}人，累计阅读量4.5万余人次。</p>
          <p>（{{ name }}）</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "page-2",
  data() {
    return {
      list: [],
      isShow: false,
      year: "",
      date: "",
      result: [],
      list_style_image: "/static/icon.jpg",
      visitNum: 0,
      readNum: 0,
      name: "",
    };
  },
  methods: {
    show(year, date) {
      // 获取年份带入获取信息
      this.year = year;
      this.date = date;

      axios({
        method: "GET",
        url: "list.json",
        data: { year, date },
      })
        .then((res) => {
          if (res.status == 200) {
            this.result = res.data.list;
            this.name = res.data.name;
            this.visitNum = parseInt(Math.random() * 20000);
            this.readNum = parseInt(Math.random() * 9999);
            this.isShow = true;
          }
        })
        .catch((res) => console.log(res));
    },
    goBack() {
      this.isShow = false;
    },
  },
  mounted() {
    axios({
      method: "GET",
      url: "eventList.json",
    })
      .then((res) => (this.list = res.data))
      .catch((res) => console.log(res));
  },
};
</script>

<style scroped>
.til_lf01 {
  border-bottom: 2px solid #cecfc8;
}
.til_lf01 > span {
  border-bottom: 2px solid #819319;
}
h3.til_lf01 {
  font-size: 16px;
  color: #819319;
}
.box_event02-ul {
  padding: 0;
}
.box_event02-ul li {
  line-height: 22px;
  padding: 5px 0;
  font-size: 14px;
  padding-left: 16px;
  border-bottom: 1px solid #fff;
}
.box_event02-ul li,
.goBack {
  cursor: pointer;
}
.box_event02-ul li span:last-child {
  float: right;
}

.info {
  padding: 30px 80px;
  width: 100%;
}
h2.title {
  font-size: 20px;
  line-height: 30px;
  padding: 20px 10px 15px;
  color: #819319;
  text-align: center;
  letter-spacing: 1px;
  overflow: hidden;
}
.author {
  width: 100%;
  line-height: 30px;
  background: #fff;
  color: #666;
  text-align: center;
}
.article_t {
  width: 98%;
  margin: 0 auto;
  padding-top: 15px;
  padding-bottom: 40px;
  overflow: hidden;
  font-size: 14px;
  line-height: 30px;
}
.article_t p {
  text-indent: 2em;
}
.article_t > p + p {
  border-top: 0.1px solid #666;
}
.article_t > div > p:last-child {
  text-align: right;
}
.goBack {
  padding: 10px;
  background-color: #fff;
}
</style>