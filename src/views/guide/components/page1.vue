<template>
  <div>
    <table cellpadding="0" cellspacing="0" width="100%">
      <tr style="display: flex">
        <td
          v-for="(tit, i) of titles"
          :key="i"
          class="tit"
          @click="show(i)"
          :class="getclass(i)"
          :style="{ width: 100 / titles.length + '%' }"
        >
          <button>{{ tit }}</button>
        </td>
      </tr>
      <tr v-show="index == 0">
        <td>
          <div class="text">
            <div class="map">
              <img :src="page1_info.img" alt="" />
            </div>
            <p v-html="page1_info.span"></p>
          </div>
        </td>
      </tr>
      <tr v-show="index == 1">
        <page-0 :Info="page2_info"></page-0>
      </tr>
      <tr v-show="index == 2">
        <page-0 :Info="page3_info"></page-0>
      </tr>
      <tr v-show="index == 3">
        <page-0 :Info="page4_info"></page-0>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "page-1",
  data() {
    return {
      titles: ["交通信息", "酒店住宿", "餐饮服务", "文化休闲"],
      index: 0,
      page1_info: null,
      page2_info: null,
      page3_info: null,
      page4_info: null,
    };
  },
  methods: {
    show(i) {
      console.log(i);
      this.index = i;
    },
    getclass(i) {
      return this.index == i && "active";
    },
  },
  components: {
    page0: () => import("./page0"),
  },
  mounted() {
    axios({
      method: "GET",
      url: "guide-list-info.json",
    })
      .then((res) => {
        if (res.status == 200) {
          this.page1_info = res.data[0].info;
          this.page2_info = res.data[1].info;
          this.page3_info = res.data[2].info;
          this.page4_info = res.data[3].info;
        } else console.log(res.statusText);
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped>
.tit {
  text-align: center;
  cursor: pointer;
  background-color: #6c3658;
}
.tit > button {
  color: #ffffff;
  font-size: 12px;
  line-height: 30px;
  width: 80px;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  outline: 0;
}
.tit.active > button {
  background-color: #ad3b80;
  border-radius: 50%;
}
.map {
  margin: 0 auto;
  width: 80%;
}
.map > img {
  width: 100%;
  padding-top: 10px;
}
p {
  display: block;
  margin: 10px 0 0 50px;
  padding-bottom: 10px;
}
.text {
  border-collapse: separate;
  border-spacing: 0px 15px;
}
</style>