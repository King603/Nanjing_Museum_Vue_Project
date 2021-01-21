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
import { url } from "../../../config";
export default {
  name: "page-1",
  data() {
    return {
      titles: ["交通信息", "酒店住宿", "餐饮服务", "文化休闲"],
      index: 0,
      page1_info: {
        img: url + "/cesi/首都博物馆.jpg",
        span:
          "<span><p><strong>一、地铁线路：<br /></strong>1号线木樨地站向东500米。</p><p><strong>二、公交线路：<br /></strong><span>1、21、65、68、78、308（西行），85、94、特18（东行）木樨地西站下；<br /></span><span>99（西行）、52木樨地东站下；</span><span>1、99路（南行）工会大楼站下；<br /></span><span>10、15、1、52、843、937、99（西行）南礼士路站下；<br /></span><span>114、26、308、45、80、843、937、特19（北行）白云路站下。</span></p></span>",
      },
      page2_info: [
        {
          name: "北京国宏宾馆有限公司",
          address: "北京市西城区木樨地北里甲11号",
          postcode: "100038",
          phone: "63908866 63907199",
          url: "www.guohonghotel.com.cn",
          local:
            "http://www.capitalmuseum.org.cn/zjsb/content/2011-03/03/jd/1.jpg",
          src:
            "http://www.capitalmuseum.org.cn/zjsb/content/images/attachement/jpg/site2/20110304/0013d3c04a320eda8b4d08.jpg",
        },
        {
          name: "北京燕京饭店有限责任公司暨北京唐拉雅秀酒店",
          address: "北京市西长安街复兴门外大街19号",
          postcode: "100045",
          phone: "86-10-58576688",
          url: "www.tanglahotels.com",
          local:
            "http://www.capitalmuseum.org.cn/zjsb/content/2011-03/03/jd/2.jpg",
          src:
            "http://www.capitalmuseum.org.cn/zjsb/content/images/attachement/jpg/site2/20110304/0013d3c04a320eda8b870d.jpg",
        },
        {
          name: "北京凯德信酒店管理有限公司（如家快捷酒店首都博物馆旁）",
          address: "北京市西城区白云路西里甲2号",
          postcode: "100045",
          phone: "010-63371166",
          url: "www.homeinns.com/resv/hotel_info.aspx?hotelCd=010069",
          local:
            "http://www.capitalmuseum.org.cn/zjsb/content/2011-03/03/jd/3.jpg",
          src:
            "http://www.capitalmuseum.org.cn/zjsb/content/images/attachement/jpg/site2/20110304/0013d3c04a320eda8b910f.jpg",
        },
      ],
      page3_info: [
        {
          name: "北京高丽屋餐饮有限责任公司",
          address: "北京市西城区白云路甲2号",
          postcode: "100045",
          phone: "68053755",
          local:
            "http://www.capitalmuseum.org.cn/zjsb/content/2011-03/04/cy/1.jpg",
          src:
            "http://www.capitalmuseum.org.cn/zjsb/content/images/attachement/jpg/site2/20110304/0013d3c04a320eda8d6b17.jpg",
        },
        {
          name: "北京太婆天府山珍酒楼有限公司",
          address: "北京市西城区二七剧场路19号楼首层（长安商场东侧后）",
          postcode: "100045",
          phone: "68019641",
          local:
            "http://www.capitalmuseum.org.cn/zjsb/content/2011-03/04/cy/2.jpg",
          src:
            "http://www.capitalmuseum.org.cn/zjsb/content/images/attachement/jpg/site2/20110304/0013d3c04a320eda8d7118.jpg",
        },
        {
          name: "北京首奇火锅店",
          address: "北京市西城区白云路1号楼南侧",
          postcode: "100045",
          phone: "63458977 13810563869",
          local:
            "http://www.capitalmuseum.org.cn/zjsb/content/2011-03/04/cy/3.jpg",
          src:
            "http://www.capitalmuseum.org.cn/zjsb/content/images/attachement/jpg/site2/20110304/0013d3c04a320eda8d7c19.jpg",
        },
        {
          name: "北京天赐庄园东方饮食有限公司",
          address: "北京市西城区白云路1号白云大厦首层",
          postcode: "100045",
          phone: "63366088",
          local:
            "http://www.capitalmuseum.org.cn/zjsb/content/2011-03/04/cy/4.jpg",
          src:
            "http://www.capitalmuseum.org.cn/zjsb/content/images/attachement/jpg/site2/20110304/0013d3c04a320eda8d861a.jpg",
        },
        {
          name: "北京港佳好邻居连锁便利店",
          address: "北京市西城区复兴门外大街甲22号 / 西城区木樨地25号",
          postcode: "100038",
          phone: "82029988/63367369/68520277",
          local:
            "http://www.capitalmuseum.org.cn/zjsb/content/2011-03/04/cy/5.jpg",
          src:
            "http://www.capitalmuseum.org.cn/zjsb/content/images/attachement/jpg/site2/20110304/0013d3c04a320eda8d8d1b.jpg",
        },
      ],
      page4_info: [
        {
          name: "国家大剧院",
          address: "北京市西城区西长安街2号",
          postcode: "100031",
          phone: "66550000",
          url: "www.chncpa.org",
          local:
            "http://www.capitalmuseum.org.cn/zjsb/content/2011-03/03/wh/1.jpg",
          src:
            "http://www.capitalmuseum.org.cn/zjsb/content/images/attachement/jpg/site2/20120507/0013d3c04a321111c7b603.jpg",
        },
        {
          name: "梅兰芳大剧院暨北京国艺升平文化发展有限公司",
          address: "北京市西城区平安里西大街32号",
          postcode: "100034",
          phone: "58331217",
          url: "www.mlfdjy.com",
          local:
            "http://www.capitalmuseum.org.cn/zjsb/content/2011-03/03/wh/2.jpg",
          src:
            "http://www.capitalmuseum.org.cn/zjsb/content/images/attachement/jpg/site2/20110304/0013d3c04a320eda8be615.jpg",
        },
        {
          name: "北京长安大戏院有限公司",
          address: "北京市东城区建国门内大街7号长安大戏院",
          postcode: "100005",
          phone: "65101310",
          url: "www.changandaxiyuan.com",
          local:
            "http://www.capitalmuseum.org.cn/zjsb/content/2011-03/03/wh/3.jpg",
          src:
            "http://www.capitalmuseum.org.cn/zjsb/content/images/attachement/jpg/site2/20110304/0013d3c04a320eda8bed16.jpg",
        },
      ],
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