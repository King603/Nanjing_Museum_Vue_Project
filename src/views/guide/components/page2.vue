<template>
  <div class="info">
    <h6>开放时间</h6>
    <p v-html="info.text1"></p>
    <h6>安全须知</h6>
    <p v-html="info.text2"></p>
    <h6>注意事项</h6>
    <p v-html="info.text3"></p>
    <p>
      <strong
        ><a :href="info.yuyue.wangzh" target="_blank" class="wangzhan top"
          >网站预约请点击此处</a
        ></strong
      >
    </p>
    <p>
      <strong
        ><a :href="info.yuyue.weixin" target="_blank" class="weixin top"
          >微信预约请点击此处</a
        ></strong
      ><strong><br /></strong>
    </p>
    <div class="date">{{ info.date }}</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "page-2",
  data() {
    return {
      info: {},
    };
  },
  mounted() {
    axios({
      method: "GET",
      url: "guide-info.json",
    })
      .then((res) =>
        res.status == 200 ? (this.info = res.data) : console.log(res.statusText)
      )
      .catch((err) => console.log(err));
  },
};
</script>

<style scpped>
.info {
  padding: 30px 80px;
  color: blue !important;
}
.wangzhan {
  color: purple;
}
.weixin {
  color: #36f;
}
.date {
  text-align: right;
}
.top {
  line-height: 500%;
}
h6 {
  font-size: 18px;
  line-height: 200%;
}
</style>