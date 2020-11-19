<template>
  <div
    class="content"
    :style="{
      background: `url(${bgImgUrl}) center top no-repeat #f3efd3 fixed`,
    }"
  >
    <!-- 头部导航 -->
    <top-nav ind="2"></top-nav>
    <div class="main">
      <img class="logo" :src="logoImg" alt="" />
      <div>
        <div>
          <ul>
            <li class="menu1" @click="show(menu1)">
              <span>{{ menu1.title }}</span>
              <img :src="getImg(menu1.isShow)" alt="" class="img" />
            </li>
            <li
              class="menu2"
              :title="menu.title"
              v-show="menu1.isShow"
              v-for="(menu, i) of menu1.menu1_1"
              :key="i"
            >
              <span>{{ getText(menu.title) }}</span>
            </li>
            <li class="menu1" @click="show(menu2)">
              <span>{{ menu2.title }}</span>
              <img :src="getImg(menu2.isShow)" alt="" class="img" />
            </li>
            <li
              class="menu2"
              @click="show(menu2.menu2_1[0])"
              v-show="menu2.isShow"
            >
              <span>{{ menu2.menu2_1[0].title }}</span
              ><img :src="getImg(menu2.menu2_1[0].isShow)" alt="" class="img" />
            </li>
            <li
              class="menu3"
              v-show="menu2.menu2_1[0].isShow"
              v-for="(menu, i) of menu2.menu2_1[0].menu2_2"
              :key="i"
            >
              <span>{{ menu.title }}</span>
            </li>
            <li
              class="menu2"
              @click="show(menu2.menu2_1[1])"
              v-show="menu2.isShow"
            >
              <span>{{ menu2.menu2_1[1].title }}</span>
              <img :src="getImg(menu2.menu2_1[1].isShow)" alt="" class="img" />
            </li>
            <li
              class="menu3"
              v-show="menu2.menu2_1[1].isShow"
              v-for="(menu, i) of menu2.menu2_1[0].menu2_2"
              :key="i"
            >
              <span>{{ menu.title }}</span>
            </li>
            <li class="menu1" @click="show(menu3)">
              <span>{{ menu3.title }}</span>
              <img :src="getImg(menu3.isShow)" alt="" class="img" />
            </li>
            <li
              class="menu2"
              :title="menu.title"
              v-show="menu3.isShow"
              v-for="(menu, i) of menu3.menu3_1"
              :key="i"
            >
              <span>{{ getText(menu.title) }}</span>
            </li>
          </ul>
        </div>
        <div>
          <p v-for="(text, i) of texts" :key="i">{{ text }}<br /><br /></p>
        </div>
      </div>
    </div>
    <to-top></to-top>
  </div>
</template>

<script>
export default {
  components: {
    topNav: () => import("../../components/top-nav"),
    toTop: () => import("../../components/pageTop"),
  },
  data() {
    return {
      bgImgUrl: "../../static/bg/exhibition_bg.jpg",
      logoImg: "../../static/陈列展览.jpg",
      index_text: "",
      texts: [],
      menu1: {
        title: "临时特展",
        isShow: false,
        menu1_1: [
          { title: "文·物—中华传统文化教育展" },
          { title: "天半人半—纪念陈半丁逝世五十周年特展" },
          { title: "艺术·生活—辽宁省博物馆研发文创作品展" },
        ],
      },
      menu2: {
        title: "常规展览",
        isShow: false,
        menu2_1: [
          {
            title: "古代辽宁",
            isShow: false,
            menu2_2: [
              { title: "史前时期" },
              { title: "夏商周时期" },
              { title: "战国至隋唐时期" },
              { title: "辽金时期" },
              { title: "元明清时期" },
            ],
          },
          {
            title: "专题陈列",
            isShow: false,
            menu2_2: [
              { title: "满族民俗展" },
              { title: "中国古代铜镜展" },
              { title: "中国古代佛教造像展" },
              { title: "中国古代货币展" },
              { title: "中国古代玺印展" },
              { title: "辽代陶瓷展" },
              { title: "明清瓷器展" },
              { title: "明清玉器展" },
              { title: "中国古代碑志展" },
            ],
          },
        ],
      },
      menu3: {
        title: "展览回顾",
        isShow: false,
        menu3_1: [
          { title: "文物系荆楚祝福颂" },
          { title: "又见红山—精品文物展" },
          { title: "“又见大唐”书画文物展" },
        ],
      },
      imgSrc: "",
    };
  },
  onLoad() {
    this.index_text =
      "专题展内容更加丰富  形式设计标新立异\n“中国古代碑志展”、“明清瓷器展”、“明清玉器展”是新馆试开馆一期推出的馆藏文物专题展。也许很多观众在市府老馆欣赏过这三个展览，但是新馆的展出把这三个展览再次推向一个精益求精的新高度。 展览内容不仅更加丰富，体系更加完善，而且增加了更多辽博自主开发的互动项目，观众可以通过现代化的多媒体技术充分感受科技与文化的完美结合。在形式设计方面增加了直观生动的布景箱，突破了原有的单一文字和图片说明，让观众更加形象地理解其中晦涩难懂的知识，有助于观众对展览的理解和对知识的掌握。\n临时特展角度新颖  妙趣横生\n新馆试开馆一期推出的临时特展“指点江山——‘毛泽东诗词’名家书画展”、“梦里家山——旅美辽宁籍画家侯北人捐赠作品展”、“怀袖丹青——中国明清扇面绘画展”、“情满辽河——辽宁民间绣品展”为我馆馆藏展览，“一个意大利记者镜头中的中国”为我馆引进展览。其中，“指点江山——‘毛泽东诗词’名家书画展”从馆藏书画作品中遴选出120件名家力作进行展出，全面展现毛泽东诗词永恒的艺术魅力和名家书画璀璨的艺术风采；“梦里家山——旅美辽宁籍画家侯北人捐赠作品展”将在“侯北人张韵琴绘画馆”展出，该展览汇集了侯北人先生六十多年来不同时期的作品150件，完整展示了侯先生艺术发展历程，并向世人展现其在绘画艺术上对东西文化的高度融合，对中国画的发展大有裨益；“怀袖丹青——中国明清扇面绘画展”展现了文人墨客山水寄情、花鸟娱心、诗文咏志的别样情怀，突显了扇面艺术作为中国画艺术的一种表现形式，对于继承展示书画发展所产生的重要意义；“情满辽河——辽宁民间绣品展” 展品种类齐全、花样繁多，格调鲜明，展现了刺绣作为高档手工艺品散发的浓郁地域特色，彰显了满足儿女淳厚、直白、简略的艺术风格。";
    this.texts = this.index_text.split("\n");
  },
  methods: {
    getImg(bool) {
      return bool ? "../../static/arrow-u.png" : "../../static/arrow-d.png";
    },
    show(menu) {
      if (menu.isShow) {
        menu.isShow = false;
      } else {
        switch (menu) {
          case this.menu1:
          case this.menu2:
          case this.menu3:
            this.menu1.isShow && (this.menu1.isShow = false);
            this.menu2.isShow && (this.menu2.isShow = false);
            this.menu3.isShow && (this.menu3.isShow = false);
            for (let i = 0; i < this.menu2.menu2_1.length; i++) {
              this.menu2.menu2_1[i].isShow = false;
            }
            menu.isShow = true;
            break;
          default:
            for (let i = 0; i < this.menu2.menu2_1.length; i++) {
              this.menu2.menu2_1[i].isShow = false;
            }
            menu.isShow = true;
        }
      }
    },
    getText(str) {
      return str.substring(0, 8);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}
.logo {
  width: 100%;
}
.main {
  max-width: 12rem;
  width: 100%;
}
.main p:nth-child(2n-1) {
  font-size: 16px;
  font-weight: bold;
}
.main p:nth-child(2n) {
  font-size: 14px;
  text-indent: 28px;
  line-height: 150%;
}
.main > div {
  display: flex;
}
.main > div > div:first-child {
  width: 20%;
}
.main > div > div:last-child {
  width: 80%;
}
.img {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(0, -50%);
}
.menu1::before,
.menu2::before,
.menu3::before {
  content: "> ";
  color: red;
}
.menu1:hover,
.menu2:hover,
.menu3:hover {
  color: #0ff;
}
.menu1,
.menu2,
.menu3 {
  position: relative;
  background-color: #f3efd2;
  border-bottom: 1px solid #9c8f7e;
  line-height: 200%;
  cursor: pointer;
}
.menu2 {
  padding-left: 0.24rem;
}
.menu3 {
  padding-left: 0.48rem;
}
</style>