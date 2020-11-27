<template>
  <div class="content">
    <div class="main">
      <div class="nav_tit">
        <div v-for="(nav, i) of nav_tit" :key="i">
          <span :class="nav_tit_index == i ? 'active' : ''">{{ nav }}</span>
        </div>
      </div>
      <div class="banner">
        <ol>
          <li>星期一</li>
          <li>星期二</li>
          <li>星期三</li>
          <li>星期四</li>
          <li>星期五</li>
          <li>星期六</li>
          <li>星期日</li>
        </ol>
        <ul>
          <li
            v-for="(date, i) of dateList"
            :key="i"
            :class="date.m != '' ? 'date' : ''"
          >
            <span v-show="date.m != ''">{{ date.m }}月{{ date.d }}日</span>
            <br />
            {{ date.t }}
          </li>
        </ul>
        <div>
          <div>
            <div>上午</div>
            <div>下午</div>
            <div>当日</div>
          </div>
          <div>
            <div>旅行社购买</div>
            <div>快速购买</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav_tit: ["主题免费票", "普通门票", "年票"],
      nav_tit_index: 1,
      dateList: [],
    };
  },
  methods: {
    getDateList() {
      /**@type {Date[]} */
      let dates = [];
      dates[0] = new Date();
      for (let i = 1; i < 7; i++) {
        dates[i] = new Date(dates[i - 1].getTime() + 86400000);
      }

      let dateList = [];
      for (let i = 0, j = 0; i < 14; i++) {
        if (i < dates[0].getDay() - 1 || j >= dates.length) {
          dateList[i] = {
            m: "",
            d: "",
            t: "",
            className: "",
          };
        } else {
          dateList[i] = {
            m: dates[j].getMonth() + 1 + "",
            d: dates[j].getDate() + "",
            t:
              j == 0
                ? "已售罄"
                : dates[j].getDay() == 1
                ? "闭馆"
                : `余${parseInt(Math.random() * 10000)}人`,
            className: "date",
          };
          j++;
        }
      }
      console.log(dateList);
      return dateList;
    },
  },
  mounted() {
    this.dateList = this.getDateList();
  },
};
</script>

<style scroped>
.main {
  max-width: 1200px;
  width: 100%;
}
.nav_tit {
  width: 100%;
  display: inline-flex;
  background-color: #f8f9e8;
  font-family: "楷体";
  font-size: 16px;
  font-weight: 800;
}
.nav_tit div {
  margin: 0 auto;
  line-height: 200%;
}
.nav_tit span.active {
  background-color: #c5974b;
  border-radius: 50%;
  padding: 5px;
}
.banner {
  margin: 0 auto;
  width: 700px;
}
.banner ol {
  display: inline-flex;
  width: 100%;
}
.banner ul {
  display: inline-block;
  width: 100%;
}
.banner ol li {
  margin: 0 auto;
  line-height: 300%;
}
.banner ul li {
  line-height: 300%;
  width: 100px;
  height: 80px;
  float: left;
  text-align: center;
}
.date:hover,
li.active {
  border-radius: 10px;
  border: 1px solid red;
}
.closed {
  color: #999;
}
</style>