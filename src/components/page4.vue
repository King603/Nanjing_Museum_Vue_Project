<template>
  <div class="content">
    <div class="info" v-if="!isShow">
      <h3 class="til_lf01">
        <span>博物馆大事记</span>
      </h3>
      <div class="box_event02">
        <ul>
          <li v-for="(news, i) of list" :key="i">
            <span @click="show(news.year, news.date)"
              >{{ news.year }}年博物馆大事记</span
            >
            <span>{{ news.date }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="info" v-else>
      <div class="goBack" @click="goBack">返回列表页</div>
      <h2 class="title">{{ year }}年博物馆大事记</h2>
      <div class="author">{{ data }}</div>
      <div class="article_t">
        <p v-for="(data, i) of result" :key="i">
          <strong>{{ data.date }}：&nbsp;</strong>
          <span>{{ data.info }}</span>
        </p>
        <br />
        <br />
        <br />
        <div>
          <p>博物馆全年接待参观{{ parseInt(Math.random() * 20000) }}人次。</p>
          <p>
            微信公众号关注人数{{
              parseInt(Math.random() * 9999)
            }}人，累计阅读量4.5万余人次。
          </p>
          <p>（中医药博物馆）</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { date: "2020/01/06", year: "2019" },
        { date: "2019/01/18", year: "2018" },
        { date: "2018/01/12", year: "2017" },
        { date: "2017/09/01", year: "2016" },
        { date: "2016/01/06", year: "2015" },
        { date: "2015/03/23", year: "2014" },
        { date: "2014/01/07", year: "2013" },
        { date: "2012/12/27", year: "2012" },
        { date: "2012/02/24", year: "2011" },
        { date: "2011/03/30", year: "2010" },
        { date: "2010/03/04", year: "2009" },
        { date: "2009/08/17", year: "2008" },
        { date: "2009/07/07", year: "2007" },
        { date: "2009/06/17", year: "2006" },
        { date: "2009/06/17", year: "2005" },
        { date: "2009/06/17", year: "2004" },
        { date: "2009/06/17", year: "2003" },
        { date: "2009/06/17", year: "2002" },
        { date: "2009/06/17", year: "2001" },
        { date: "2009/06/17", year: "2000" },
      ],
      isShow: false,
      year: "",
      data: "",
      /**@type {{
    		date: string;
    		info: string;
			}[]} */
      result: {},
    };
  },
  methods: {
    show(year, data) {
      uni.showToast({ title: "数据加载中，请稍后……", icon: "none" });
      // 获取年份带入获取信息
      this.year = year;
      this.data = data;
      setTimeout(() => {
        this.result = [
          {
            date: "3月11日",
            info:
              "“东盟十国 花语时光”北京中医药大学第二届“本草博物杯”讲解大赛在良乡校区报告厅举行。",
          },
          {
            date: "4月18日",
            info:
              "中医药博物馆AR（增强现实）与VR（虚拟现实）正式上线，描展品AR识别图，即可实现与展品的互动。这是博物馆自主开发的首款软件，在北京市科学技术协会主办的北京科普新媒体创意大赛中获得科普交互类铜奖。",
          },
          {
            date: "4月",
            info:
              "原《中医杂志》社名誉主编、中国中医研究院广安门医院院长、首都国医名师费开扬教授将其珍藏的民国时期中医师考试证书、中华国医学会证书及刊登了中医考试榜单的《中医药情报》报纸赠予徐安龙校长，徐校长将其捐赠给博物馆。",
          },
          {
            date: "5月15日、29日",
            info:
              "由中医药博物馆主办，河南鼎信生物塑化技术有限公司冠名赞助的北京中医药大学“鼎信杯”第十届中药辨识大赛的预赛和决赛在良乡校区和和平街校区举办。",
          },
          {
            date: "6月",
            info:
              "北京京诚生物科技有限公司技术经理马传贵向博物馆捐赠了多件不同品种和产地的紫芝、赤芝、金边灵芝、桑黄等灵芝标本和灵芝工艺品。",
          },
          {
            date: "6月15日",
            info:
              "由北京科普发展中心、北京科学教育馆协会主办，北京科普志愿服务总队、北京科普资源联盟、北京中医药大学中医药博物馆承办的“我是小神农——中药尝五味”中医药亲子活动在博物馆成功举办，“走近岐黄”北京科普志愿总队科普志愿服务活动启动。",
          },
          {
            date: "7月15日",
            info:
              "国家级非物质文化遗产项目“鹤年堂中医药养生文化”代表性传承人王国宝先生将其珍藏的《西鹤年堂丸散药目》一册、清末铜杵臼一个、20世纪50年代中期的梅花鹿鹿角标本一对捐赠给博物馆。",
          },
          {
            date: "7月1日-15日、10月21日-11月4日",
            info:
              "博物馆更换了智能新展柜，并改造了药用动物橱窗，改善了展出效果，同时也提高了安全性。",
          },
          {
            date: "7月20日-23日",
            info:
              "博物馆的6名老师和8名学生志愿者赴武汉开展 “探访江城红色足迹，传播当代岐黄文化”中医药博物馆暑期实践项目。",
          },
          {
            date: "9月14日",
            info:
              "作为北京市朝阳区科学教育馆联盟首批成员单位，博物馆组织3名老师和6名学生志愿者参加了在红领巾公园举办的全国科普日朝阳区主场区 “礼赞共和国·智慧新生活”新时代文明实践推动日活动，开展体质检测、耳针体验、推拿按摩体验活动。",
          },
          {
            date: "9月17日-20日",
            info:
              "北京中医药大学第九届博物馆文化周在良乡校区和和平街校区举办。本届文化周是北京科普教育馆协会全国科普日“首都科普”联合行动的一部分，除传统项目外，还增加了VR/AR体验和博物馆志愿者现场讲解两项活动内容。",
          },
          {
            date: "9月21日",
            info:
              "由中国民族医药学会主办、中国民族医药学会科普分会承办的第三届健康科普论坛在湖北武汉举办，成立了“中国中医药博物馆文化联盟”，我校博物馆馆长卢颖担任副主席，韩玉担任副秘书长。",
          },
          {
            date: "10月18日",
            info:
              "教育部党组书记、部长陈宝生到我校调研指导工作，并参观了中医药博物馆。",
          },
          {
            date: "10月25日",
            info:
              "以“新时代、新实践：高校博物馆文化艺术科技衍生品”为主题的北京高校博物馆文创论坛暨优秀文化创意案例展示会在中央民族大学民族博物馆召开，我校博物馆卢颖馆长和韩玉老师、冯林敏老师出席论坛并进行主题发言，我馆与学生志愿者自主设计的文创产品参展。",
          },
          {
            date: "11月6日",
            info:
              "山东威高集团医用高分子制品股份有限公司向北京中医药大学中医药博物馆捐赠赛加羚羊和降真香的捐赠仪式在博物馆举行，北京中医药大学党委书记谷晓红、威高集团总裁王毅出席仪式。",
          },
          {
            date: "12月5日",
            info:
              "北京中医药大学中医药博物馆分队组织的“我是小神农——中药尝五味”走进岐黄志愿科普服务活动荣获2019年北京优秀科普志愿服务活动:",
          },
          {
            date: "12月5日-9日",
            info:
              "以“高校博物馆的专业化运营与未来发展”为主题的第十六届中国高校博物馆学术研讨会在山西大学召开，我校中医药博物馆卢颖馆长和医史部主任韩晓雯老师参加了会议。",
          },
        ];
        this.isShow = true;
        uni.hideToast();
      }, 2000); // 服务器暂未设置，先用此方式运行
    },
    goBack() {
      this.isShow = false;
    },
  },
};
</script>

<style>
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
.box_event02 ul {
  list-style-image: url("../static/icon.jpg");
  list-style-position: inside;
  padding: 0;
}
.box_event02 ul li {
  line-height: 0.22rem;
  padding: 0.05rem 0;
  font-size: 0.14rem;
  padding-left: 0.16rem;
  border-bottom: 1px solid #fff;
}
.box_event02 ul li span:first-child,
.goBack {
  cursor: pointer;
}
.box_event02 ul li span:last-child {
  float: right;
}

.info {
  width: 100%;
}
h2.title {
  font-size: 0.2rem;
  line-height: 0.3rem;
  padding: 0.2rem 0.1rem 0.15rem;
  color: #819319;
  text-align: center;
  letter-spacing: 1px;
  overflow: hidden;
}
.author {
  width: 100%;
  line-height: 0.3rem;
  background: #fff;
  color: #666;
  text-align: center;
}
.article_t {
  width: 98%;
  margin: 0 auto;
  padding-top: 0.15rem;
  padding-bottom: 0.4rem;
  overflow: hidden;
  font-size: 0.14rem;
  line-height: 0.3rem;
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
  padding: 0.1rem;
  background-color: #fff;
}
</style>