<template>
  <div class="main">
    <h1 class="news_title">新闻动态</h1>
    <navigator v-for="(news, i) of list" :key="i" :href="news.to">
      <div class="newsList">
        <img :src="news.img.src" :title="news.img.title" />
        <div class="info">
          <h3>{{ news.title }}</h3>
          <p>{{ news.text }}</p>
        </div>
        <div class="date">
          <h2>{{ news.month }}/{{ news.date }}</h2>
          <p>{{ news.year }}</p>
        </div>
      </div>
    </navigator>
    <div class="digg">
      <ul class="pages">
        <li :class="n == 1 ? 'disabled' : ''" @click="showList(1)">
          <span>首页</span>
        </li>
        <li :class="n == 1 ? 'disabled' : ''" @click="add(-1)">
          <span>上一页</span>
        </li>
        <li
          class="num"
          v-for="num of page"
          :key="num"
          :class="num == n ? 'active' : ''"
          @click="showList(num)"
        >
          <span>{{ num }}</span>
        </li>
        <li :class="n == page ? 'disabled' : ''" @click="add(1)">
          <span>下一页</span>
        </li>
        <li :class="n == page ? 'disabled' : ''" @click="showList(page)">
          <span>尾页</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "page-2",
  data() {
    return {
      newsList: [
        {
          img: {
            src:
              "http://file.guilinmuseum.org.cn/GLBWG/WaterMark/文章富文本文件/EditorImage/20201106/6374025524300585198469378.png",
            title: "微信图片_20201030100049.png",
          },
          title: "桂林博物馆开展2020年度消防安全演练",
          text:
            "桂林博物馆作为公共场所，安全始终是重中之重的一项工作，本着“安全第一，预防为主”的工作方针，时刻牢记安全工作警钟长鸣，防患于未然。为了普及消防安全知识，强化消防意识，进一步提高工作人员的防范自救能力，针对秋、冬消防工作的关键时期，10月23日下午，桂林博物馆组织全馆安保、物业人员以及新入职人员开展第四季度消防演练。演练活动分三个过程，首先由副馆长孙明光做演练动员，并就如何正确使用灭火器、灭火流程等进行了详细讲解与示范；其次，参与演练活动的工作人员依次进行了现场模拟火情的灭火实战演练；最后，保卫科科长胡桂明进行现场点评，并对灭火实战中存在的问题和可能发生的状况提出解决办法。此次消防安全实战演练，让参与人员学习到了在面对火警火灾时，如何采取基本、快速、有效的自救措施，强化了对消防“四个能力”的认识和理解，将有效提高本馆的消防应急反应能力。",
          year: "2020",
          month: "10",
          date: "30",
          to: "",
        },
        {
          img: {
            src:
              "http://file.guilinmuseum.org.cn/GLBWG/WaterMark/文章富文本文件/EditorImage/20201106/6374025524300585198469378.png",
            title: "微信图片_20201030100049.png",
          },
          title: "桂林博物馆开展2020年度消防安全演练",
          text:
            "桂林博物馆作为公共场所，安全始终是重中之重的一项工作，本着“安全第一，预防为主”的工作方针，时刻牢记安全工作警钟长鸣，防患于未然。为了普及消防安全知识，强化消防意识，进一步提高工作人员的防范自救能力，针对秋、冬消防工作的关键时期，10月23日下午，桂林博物馆组织全馆安保、物业人员以及新入职人员开展第四季度消防演练。演练活动分三个过程，首先由副馆长孙明光做演练动员，并就如何正确使用灭火器、灭火流程等进行了详细讲解与示范；其次，参与演练活动的工作人员依次进行了现场模拟火情的灭火实战演练；最后，保卫科科长胡桂明进行现场点评，并对灭火实战中存在的问题和可能发生的状况提出解决办法。此次消防安全实战演练，让参与人员学习到了在面对火警火灾时，如何采取基本、快速、有效的自救措施，强化了对消防“四个能力”的认识和理解，将有效提高本馆的消防应急反应能力。",
          year: "2020",
          month: "10",
          date: "30",
          to: "",
        },
        {
          img: {
            src:
              "http://file.guilinmuseum.org.cn/GLBWG/WaterMark/文章富文本文件/EditorImage/20201106/6374025524300585198469378.png",
            title: "微信图片_20201030100049.png",
          },
          title: "桂林博物馆开展2020年度消防安全演练",
          text:
            "桂林博物馆作为公共场所，安全始终是重中之重的一项工作，本着“安全第一，预防为主”的工作方针，时刻牢记安全工作警钟长鸣，防患于未然。为了普及消防安全知识，强化消防意识，进一步提高工作人员的防范自救能力，针对秋、冬消防工作的关键时期，10月23日下午，桂林博物馆组织全馆安保、物业人员以及新入职人员开展第四季度消防演练。演练活动分三个过程，首先由副馆长孙明光做演练动员，并就如何正确使用灭火器、灭火流程等进行了详细讲解与示范；其次，参与演练活动的工作人员依次进行了现场模拟火情的灭火实战演练；最后，保卫科科长胡桂明进行现场点评，并对灭火实战中存在的问题和可能发生的状况提出解决办法。此次消防安全实战演练，让参与人员学习到了在面对火警火灾时，如何采取基本、快速、有效的自救措施，强化了对消防“四个能力”的认识和理解，将有效提高本馆的消防应急反应能力。",
          year: "2020",
          month: "10",
          date: "30",
          to: "",
        },
        {
          img: {
            src:
              "http://file.guilinmuseum.org.cn/GLBWG/WaterMark/文章富文本文件/EditorImage/20201106/6374025524300585198469378.png",
            title: "微信图片_20201030100049.png",
          },
          title: "桂林博物馆开展2020年度消防安全演练",
          text:
            "桂林博物馆作为公共场所，安全始终是重中之重的一项工作，本着“安全第一，预防为主”的工作方针，时刻牢记安全工作警钟长鸣，防患于未然。为了普及消防安全知识，强化消防意识，进一步提高工作人员的防范自救能力，针对秋、冬消防工作的关键时期，10月23日下午，桂林博物馆组织全馆安保、物业人员以及新入职人员开展第四季度消防演练。演练活动分三个过程，首先由副馆长孙明光做演练动员，并就如何正确使用灭火器、灭火流程等进行了详细讲解与示范；其次，参与演练活动的工作人员依次进行了现场模拟火情的灭火实战演练；最后，保卫科科长胡桂明进行现场点评，并对灭火实战中存在的问题和可能发生的状况提出解决办法。此次消防安全实战演练，让参与人员学习到了在面对火警火灾时，如何采取基本、快速、有效的自救措施，强化了对消防“四个能力”的认识和理解，将有效提高本馆的消防应急反应能力。",
          year: "2020",
          month: "10",
          date: "30",
          to: "",
        },
        {
          img: {
            src:
              "http://file.guilinmuseum.org.cn/GLBWG/WaterMark/文章富文本文件/EditorImage/20201106/6374025524300585198469378.png",
            title: "微信图片_20201030100049.png",
          },
          title: "桂林博物馆开展2020年度消防安全演练",
          text:
            "桂林博物馆作为公共场所，安全始终是重中之重的一项工作，本着“安全第一，预防为主”的工作方针，时刻牢记安全工作警钟长鸣，防患于未然。为了普及消防安全知识，强化消防意识，进一步提高工作人员的防范自救能力，针对秋、冬消防工作的关键时期，10月23日下午，桂林博物馆组织全馆安保、物业人员以及新入职人员开展第四季度消防演练。演练活动分三个过程，首先由副馆长孙明光做演练动员，并就如何正确使用灭火器、灭火流程等进行了详细讲解与示范；其次，参与演练活动的工作人员依次进行了现场模拟火情的灭火实战演练；最后，保卫科科长胡桂明进行现场点评，并对灭火实战中存在的问题和可能发生的状况提出解决办法。此次消防安全实战演练，让参与人员学习到了在面对火警火灾时，如何采取基本、快速、有效的自救措施，强化了对消防“四个能力”的认识和理解，将有效提高本馆的消防应急反应能力。",
          year: "2020",
          month: "10",
          date: "30",
          to: "",
        },
        {
          img: {
            src:
              "http://file.guilinmuseum.org.cn/GLBWG/WaterMark/文章富文本文件/EditorImage/20201106/6374025524300585198469378.png",
            title: "微信图片_20201030100049.png",
          },
          title: "桂林博物馆开展2020年度消防安全演练",
          text:
            "桂林博物馆作为公共场所，安全始终是重中之重的一项工作，本着“安全第一，预防为主”的工作方针，时刻牢记安全工作警钟长鸣，防患于未然。为了普及消防安全知识，强化消防意识，进一步提高工作人员的防范自救能力，针对秋、冬消防工作的关键时期，10月23日下午，桂林博物馆组织全馆安保、物业人员以及新入职人员开展第四季度消防演练。演练活动分三个过程，首先由副馆长孙明光做演练动员，并就如何正确使用灭火器、灭火流程等进行了详细讲解与示范；其次，参与演练活动的工作人员依次进行了现场模拟火情的灭火实战演练；最后，保卫科科长胡桂明进行现场点评，并对灭火实战中存在的问题和可能发生的状况提出解决办法。此次消防安全实战演练，让参与人员学习到了在面对火警火灾时，如何采取基本、快速、有效的自救措施，强化了对消防“四个能力”的认识和理解，将有效提高本馆的消防应急反应能力。",
          year: "2020",
          month: "10",
          date: "30",
          to: "",
        },
        {
          img: {
            src:
              "http://file.guilinmuseum.org.cn/GLBWG/WaterMark/文章富文本文件/EditorImage/20201106/6374025524300585198469378.png",
            title: "微信图片_20201030100049.png",
          },
          title: "桂林博物馆开展2020年度消防安全演练",
          text:
            "桂林博物馆作为公共场所，安全始终是重中之重的一项工作，本着“安全第一，预防为主”的工作方针，时刻牢记安全工作警钟长鸣，防患于未然。为了普及消防安全知识，强化消防意识，进一步提高工作人员的防范自救能力，针对秋、冬消防工作的关键时期，10月23日下午，桂林博物馆组织全馆安保、物业人员以及新入职人员开展第四季度消防演练。演练活动分三个过程，首先由副馆长孙明光做演练动员，并就如何正确使用灭火器、灭火流程等进行了详细讲解与示范；其次，参与演练活动的工作人员依次进行了现场模拟火情的灭火实战演练；最后，保卫科科长胡桂明进行现场点评，并对灭火实战中存在的问题和可能发生的状况提出解决办法。此次消防安全实战演练，让参与人员学习到了在面对火警火灾时，如何采取基本、快速、有效的自救措施，强化了对消防“四个能力”的认识和理解，将有效提高本馆的消防应急反应能力。",
          year: "2020",
          month: "10",
          date: "30",
          to: "",
        },
        {
          img: {
            src:
              "http://file.guilinmuseum.org.cn/GLBWG/WaterMark/文章富文本文件/EditorImage/20201106/6374025524300585198469378.png",
            title: "微信图片_20201030100049.png",
          },
          title: "桂林博物馆开展2020年度消防安全演练",
          text:
            "桂林博物馆作为公共场所，安全始终是重中之重的一项工作，本着“安全第一，预防为主”的工作方针，时刻牢记安全工作警钟长鸣，防患于未然。为了普及消防安全知识，强化消防意识，进一步提高工作人员的防范自救能力，针对秋、冬消防工作的关键时期，10月23日下午，桂林博物馆组织全馆安保、物业人员以及新入职人员开展第四季度消防演练。演练活动分三个过程，首先由副馆长孙明光做演练动员，并就如何正确使用灭火器、灭火流程等进行了详细讲解与示范；其次，参与演练活动的工作人员依次进行了现场模拟火情的灭火实战演练；最后，保卫科科长胡桂明进行现场点评，并对灭火实战中存在的问题和可能发生的状况提出解决办法。此次消防安全实战演练，让参与人员学习到了在面对火警火灾时，如何采取基本、快速、有效的自救措施，强化了对消防“四个能力”的认识和理解，将有效提高本馆的消防应急反应能力。",
          year: "2020",
          month: "10",
          date: "30",
          to: "",
        },
        {
          img: {
            src:
              "http://file.guilinmuseum.org.cn/GLBWG/WaterMark/文章富文本文件/EditorImage/20201106/6374025524300585198469378.png",
            title: "微信图片_20201030100049.png",
          },
          title: "桂林博物馆开展2020年度消防安全演练",
          text:
            "桂林博物馆作为公共场所，安全始终是重中之重的一项工作，本着“安全第一，预防为主”的工作方针，时刻牢记安全工作警钟长鸣，防患于未然。为了普及消防安全知识，强化消防意识，进一步提高工作人员的防范自救能力，针对秋、冬消防工作的关键时期，10月23日下午，桂林博物馆组织全馆安保、物业人员以及新入职人员开展第四季度消防演练。演练活动分三个过程，首先由副馆长孙明光做演练动员，并就如何正确使用灭火器、灭火流程等进行了详细讲解与示范；其次，参与演练活动的工作人员依次进行了现场模拟火情的灭火实战演练；最后，保卫科科长胡桂明进行现场点评，并对灭火实战中存在的问题和可能发生的状况提出解决办法。此次消防安全实战演练，让参与人员学习到了在面对火警火灾时，如何采取基本、快速、有效的自救措施，强化了对消防“四个能力”的认识和理解，将有效提高本馆的消防应急反应能力。",
          year: "2020",
          month: "10",
          date: "30",
          to: "",
        },
        {
          img: {
            src:
              "http://file.guilinmuseum.org.cn/GLBWG/WaterMark/文章富文本文件/EditorImage/20201106/6374025524300585198469378.png",
            title: "微信图片_20201030100049.png",
          },
          title: "桂林博物馆开展2020年度消防安全演练",
          text:
            "桂林博物馆作为公共场所，安全始终是重中之重的一项工作，本着“安全第一，预防为主”的工作方针，时刻牢记安全工作警钟长鸣，防患于未然。为了普及消防安全知识，强化消防意识，进一步提高工作人员的防范自救能力，针对秋、冬消防工作的关键时期，10月23日下午，桂林博物馆组织全馆安保、物业人员以及新入职人员开展第四季度消防演练。演练活动分三个过程，首先由副馆长孙明光做演练动员，并就如何正确使用灭火器、灭火流程等进行了详细讲解与示范；其次，参与演练活动的工作人员依次进行了现场模拟火情的灭火实战演练；最后，保卫科科长胡桂明进行现场点评，并对灭火实战中存在的问题和可能发生的状况提出解决办法。此次消防安全实战演练，让参与人员学习到了在面对火警火灾时，如何采取基本、快速、有效的自救措施，强化了对消防“四个能力”的认识和理解，将有效提高本馆的消防应急反应能力。",
          year: "2020",
          month: "10",
          date: "30",
          to: "",
        },
      ],
      list: [],
      size: 3,
      page: 0,
      n: 0,
    };
  },
  methods: {
    /**
     * 显示当前页内容
     * @param {number} n 页码
     */
    showList(n) {
      // 记录当前页
      this.n = n;
      // 初始化显示列表为空
      this.list = [];
      // 循环遍历每一页且不超过 this.newsList 的个数
      for (
        let i = 0;
        i < this.size && (this.n - 1) * this.size + i < this.newsList.length;
        i++
      ) {
        this.list[i] = this.newsList[(this.n - 1) * this.size + i];
      }
    },
    add(i) {
      let { n } = this;
      n += i;
      if (n < 1) return;
      if (n > this.page) return;
      this.showList(n);
    },
    isDisabled(bool) {
      return bool ? "disabled" : "";
    },
  },
  mounted() {
    // 显示第一页内容
    this.showList(1);
  },
  created() {
    // 计算页数
    this.page = Math.ceil(this.newsList.length / this.size);
  },
};
</script>

<style scoped>
@import url("../../../../static/font/iconfont.css");
.main {
  width: 100%;
  height: 100%;
  position: relative;
}
.newsList {
  background: #f4f3f3;
  margin: 20px 16px;
  padding: 16px 12px;
  position: relative;
  transition: all ease-out 0.3s;
  border: 1px solid #d6d6d6;
  cursor: pointer;
}
.newsList:hover {
  box-shadow: 0 8px 16px #dedede;
  transform: translateY(-3px);
}
.newsList img {
  float: left;
  width: 205px;
  height: 140px;
  position: relative;
  overflow: hidden;
  margin-right: 32px;
}
.newsList .info {
  color: #6e6e6e;
  padding-left: 16px;
  text-align: left;
}
.newsList .info h3 {
  font-size: 16px;
  margin: 16px 176px 12px 0;
  color: #2c2c2c;
}
.newsList:hover .info h3 {
  color: #869fc8;
}
.newsList .info p {
  font-size: 12px;
  margin-right: 170px;
  line-height: 28px;
  height: 86px;
  text-indent: 32px;
  /* 3行显示，多余隐藏 */
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.newsList .date {
  position: absolute;
  top: 55px;
  right: 35px;
}
.newsList .date::before {
  content: "";
  width: 1px;
  height: 6px;
  background: #dcdcdc;
  position: absolute;
  left: -40px;
  top: 5px;
}
.newsList .date h2 {
  font-size: 20px;
  font-weight: bold;
  color: #8994a0;
}
.newsList .date p {
  font-size: 16px;
  text-align: center;
  margin-top: 5px;
  color: #a5aeb7;
}
.digg {
  position: absolute;
  bottom: 16px;
  right: 0;
}
.digg ul.pages {
  text-align: right;
}
.digg ul.pages li {
  display: inline-block;
  margin-right: 8px;
}
.digg ul.pages li.disabled span {
  cursor: default;
  color: #ccc8bf;
  background: #eee;
}
.digg ul.pages li.num span {
  cursor: default;
  color: #2c2c2c;
  background: #eee;
}
.digg ul.pages li span {
  padding: 4px 16px;
  display: inline-block;
  color: #2a2a2a;
  background: #e4e4e4;
  transition: 0.3s;
  font-size: 16px;
  border-radius: 3px;
}
.digg ul.pages li.active span {
  color: #fff;
  background-color: #869fc8;
}
.news_title {
  font-size: 16px;
}
.news_title::before,
.news_title::after {
  font-family: "iconfont" !important;
  content: "\eba6";
  color: #869fc8;
}
</style>