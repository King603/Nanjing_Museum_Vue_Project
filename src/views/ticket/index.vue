<template>
  <div class="content">
    <top-nav ind="5" />
    <div class="main">
      <div class="nav_tit">
        <div v-for="(nav, i) of nav_tit" :key="i">
          <span :class="nav_tit_index == i ? 'active' : ''">{{ nav }}</span>
        </div>
      </div>
      <!-- 购票提示 -->
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
            :class="date.className"
            @click="set_date(date)"
          >
            <span v-show="date.m != ''">{{ date.m }}月{{ date.d }}日</span>
            <br />
            {{ date.t }}
          </li>
        </ul>
        <div>
          <div>
            <div
              v-for="(set, i) of ['上午', '下午', '当日']"
              :key="i"
              @click="set_am_pm(i)"
              :class="time_index == i ? 'active' : ''"
            >
              {{ set }}
            </div>
          </div>
          <div>
            <div>旅行社购买</div>
            <div>快速购买</div>
          </div>
          <div class="clear"></div>
        </div>
      </div>
      <!-- 公告栏 -->
      <tabel>
        <tr class="clear">
          <td class="newsList">
            <h1 class="title">最新公告</h1>
            <br />
            <div v-for="(news, i) of newsList" :key="i">
              <p>
                <span>{{ i }}</span
                ><span>{{ news.title }}</span
                ><span>{{ news.year }}/{{ news.month }}/{{ news.date }}</span>
              </p>
              <br />
            </div>
            <div class="button">更多&gt;&gt;</div>
          </td>
          <td class="problem">
            <h1 class="title">常见问题</h1>
            <br />
            <div class="problem-text">
              <p>
                截止预约参观当日下午20:00之前可申请退票，超过时限则无法退款。
              </p>
              <br />
              <p class="red">
                注：请各位观众根据当前故宫的参观时间提前规划好浏览时间，以避免由于参观时间结束导致门票无法使用，并且无法退款的情况发生
              </p>
            </div>
          </td>
        </tr>
      </tabel>
      <!-- 购票说明 -->
      <div>
        <h1>购票说明</h1>
        <ol class="ordered_list">
          <li
            v-for="ticket of res.ticket_list"
            :key="ticket"
            v-html="ticket"
          ></li>
        </ol>
      </div>
      <!-- 退票说明 -->
      <div>
        <h1>退票说明</h1>
        <ol class="ordered_list">
          <li
            v-for="ticket of res.refund_list"
            :key="ticket"
            v-html="ticket"
          ></li>
        </ol>
      </div>
      <!-- 验票说明 -->
      <div>
        <h1>验票说明</h1>
        <ol class="ordered_list">
          <li
            v-for="ticket of res.checking_list"
            :key="ticket"
            v-html="ticket"
          ></li>
        </ol>
      </div>
      <!-- 参观时间 -->
      <div>
        <h1>参观时间</h1>
        <span>除法定节假日，故宫博物院全年实行周一闭馆。</span>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>开始售票</th>
              <th>停止售票</th>
              <th>停止进入</th>
              <th>景区关闭</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(time, i) of res.Visit_time" :key="i">
              <th>
                {{ i == 0 ? "旺季" : "淡季" }}（每年{{ time.start }}至{{
                  time.end
                }}）
              </th>
              <td>{{ time.Start_selling_tickets }}</td>
              <td>{{ time.Stop_selling_tickets }}</td>
              <td>{{ time.Stop_to_enter }}</td>
              <td>{{ time.Scenic_area_closed }}</td>
            </tr>
          </tbody>
        </table>
        <span>注：以上时间规定均包含大门、珍宝馆和钟表馆。</span>
      </div>
      <!-- 参观路线 -->
      <div>
        <h1>参观路线</h1>
        <ul>
          <li v-for="l of res.line" :key="l" v-html="l"></li>
        </ul>
      </div>
      <!-- 票务政策 -->
      <div>
        <h1>票务政策</h1>
        <ol class="ordered_list">
          <li v-for="p of res.policy" :key="p">
            <h1>{{ p.title }}</h1>
            <ol class="ordered_list">
              <li></li>
            </ol>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  components: {
    topNav: () => import("../../components/top-nav"),
  },
  data() {
    return {
      nav_tit: ["主题免费票", "普通门票", "年票"],
      nav_tit_index: 1,
      dateList: [],
      time_index: -1,
      news_num: 4,
      days: 10,
      res: {},
      newsList: [],
    };
  },
  methods: {
    getDateList() {
      /**@type {Date[]} */
      let dates = [];
      dates[0] = new Date();
      for (let i = 1; i < this.days + 1; i++)
        dates[i] = new Date(dates[i - 1].getTime() + 86400000);

      let dateList = [];
      for (let i = 0, j = 0; i < 21; i++) {
        let isOut = i < dates[0].getDay() - 1 || j >= dates.length;
        dateList[i] = {
          m: isOut ? "" : (dates[j].getMonth() + 1).toString(),
          d: isOut ? "" : dates[j].getDate().toString(),
          t: isOut
            ? ""
            : dates[j++].getDay() == 1
            ? "闭馆"
            : j - 1 == 0
            ? "已售罄"
            : `余${parseInt(Math.random() * 10000)}人`,
          className: isOut
            ? ""
            : j - 1 == 0 || dates[j - 1].getDay() == 1
            ? "closed"
            : "date",
        };
      }
      console.log(dateList);
      return dateList;
    },
    set_am_pm(i) {
      this.time_index = i;
    },
    set_date(date) {},
  },
  mounted() {
    this.dateList = this.getDateList();
    axios({
      method: "GET",
      url: "ticket.json",
    }).then((res) => {
      this.res = res.data;
      for (let i = 0; i < this.news_num && i < this.res.dataList.length; i++) {
        this.newsList[i] = this.res.dataList[i];
      }
    });
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
  cursor: pointer;
  color: #a15949;
}
.date:hover,
li.active {
  border-radius: 10px;
  border: 1px solid red;
}
.closed {
  color: #999 !important;
  cursor: default !important;
}
.banner > div:last-child {
  /* border: 1px solid red; */
  background: #e0cba0;
  padding: 15px;
}
.banner > div:last-child > div {
  display: flex;
  width: 30%;
}
.banner > div:last-child > div:nth-child(1) {
  float: left;
}
.banner > div:last-child > div:nth-child(1) > div:hover,
.banner > div:last-child > div:nth-child(1) > div.active {
  border: 1px solid #bd2a2d;
}
.banner > div:last-child > div:nth-child(2) {
  float: right;
}
.clear {
  clear: both;
}
.banner > div:last-child > div > div {
  margin: 0 auto;
  cursor: pointer;
  background: #fff;
  border: 1px solid #fff;
  padding: 5px;
  border-radius: 50%;
}

.newsList {
  /* width: 50%; */
  box-sizing: border-box;
  padding: 15px 10px;
  position: relative;
  padding-bottom: 25px;
  font-family: "楷体";
  font-size: 14px;
}
.newsList > div span:first-child {
  cursor: pointer;
}
.newsList > div span:first-child:hover,
.button {
  color: #a15949;
}
.newsList > div span:last-child {
  float: right;
}
.button {
  bottom: 0;
  right: 0;
  position: absolute;
  cursor: pointer;
  padding: 10px;
  font-size: 16px;
  font-weight: bolder;
}

.newsList + .problem {
  border-left: 1px solid #e0cba0;
}

.problem {
  width: 50%;
  font-family: "楷体";
  padding: 15px;
}
table td {
  height: 100%;
}
h1.title {
  color: #b56e03 !important;
  font-size: 17px;
}
.problem-text {
  margin-left: 20px;
  margin-right: 40px;
}
.red {
  color: #f00;
}
.ordered_list {
  margin-right: 10px;
}
.ordered_list > li {
  list-style: inside decimal;
}
</style>