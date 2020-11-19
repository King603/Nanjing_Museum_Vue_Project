<template>
  <div class="content">
    <div class="title">{{ title }}</div>
    <img :src="responsive" alt="" class="responsive-img" />
    <div class="info">
      <p>{{ info.name }}</p>
      <p>{{ info.position }}</p>
    </div>
    <p v-for="(text, i) of texts" :key="i" class="wenben">
      <span>{{ text }}</span>
    </p>
    <img :src="signature" alt="" class="newsInfo" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "馆长致辞",
      responsive: "../static/cesi/name.jpg",
      info: {
        name: "黄德宽",
        position: "中国文字博物馆馆长",
      },
      matter:
        "中华文明历史悠久，博大精深。汉字在中华历史文化的传承发展中扮演着极为重要的角色。汉字的历史至少可以追溯到夏代，120年前安阳殷墟甲骨文的发现，再现了殷商时期语言文字的基本面貌。在历史的长河中，汉字系统以其稳定性和传承性，使得中华历史文化能够持续发展并保存着完好的形态，中华文化精神才得以一以贯之，连绵不绝，至今熠熠生辉。\n中国文字博物馆，是我国唯一的以文字为主题的国家级博物馆。安阳是中国文字的圣地，殷墟是殷商晚期的都城所在地，出自殷墟的十几万片甲骨，记录和保存了殷商晚期二百多年的历史，是殷商时代语言文字的珍贵样本。殷墟被联合国科教文组织列入世界文化遗产名录，甲骨文被列入世界记忆名录，国家在安阳市建立这样一座举世无双的文字博物馆，正是由于安阳厚重的历史文化积淀和甲骨文这一伟大发现。\n中国文字博物馆2009年开馆以来，在国家有关部委、河南省政府以及安阳市的关怀下，在国内各有关文博部门和单位的大力支持下，馆党委与冯其庸、李学勤两任馆长带领全馆同志，以汉字文化的传承弘扬为己任，开拓创新，不懈努力，通过各种专题陈展和丰富多彩的活动，逐步形成了博物馆自身的品牌，在国内外产生了广泛的影响，较好地体现了中国文字博物馆的功能定位和建馆宗旨，在继承、传播和弘扬中华优秀传统文化尤其是汉字文化方面发挥了独特的作用，取得了突出的成就。\n党的十八大以来，习近平总书记对弘扬中华优秀传统文化发表过多次重要讲话。2016年5月在全国哲学社会科学工作座谈会上，习近平总书记指出，要重视发展具有重要文化价值和传承意义的“绝学”、冷门学科。这些学科看上去同现实距离较远，但养兵千日、用兵一时，需要时也要拿得出来、用得上。还有一些学科事关文化传承的问题，如甲骨文等古文字研究等，要重视这些学科，确保有人做、有传承。总书记的讲话，为中国文字博物馆的工作指明了方向。为落实总书记的讲话精神，中国文字博物馆面向社会征集甲骨文考释优秀成果，参与进行大数据、云平台技术背景下甲骨文字考释工作等，这些工作极大地提升了中国文字博物馆的学术品格，扩大了博物馆的社会影响力。\n中国文字博物馆开馆以来，虽然做了很多开创性的工作，创造了不少经验，取得了较为突出的成绩，但中华优秀传统文化的传承弘扬是一项长期的历史任务，汉字文化的传播道路仍然还很漫长，还有许多工作需要我们去做。在国家经济社会大发展和文化大繁荣的背景下，中国文字博物馆更应以高度的文化自觉担负起自身的使命，我愿与博物馆同仁和社会各界一道，把握机遇，迎接挑战，在过去工作的基础上，努力创造中国文字博物馆新的辉煌，为促进当代文化建设作出我们新的更大的贡献。",
      texts: [],
      signature: "../static/cesi/aaa.png",
    };
  },
  mounted() {
    this.texts = this.matter.split("\n");
  },
};
</script>

<style>
.content {
  position: relative;
  padding-bottom: 1rem;
}
.title {
  font-size: 0.32rem;
  color: #819319;
  font-weight: bold;
  margin: 0.1rem 0;
}
img.newsInfo,
img.responsive-img {
  max-width: 100%;
  height: auto;
}
.info {
  line-height: 0.3rem;
  font-size: 0.18rem;
  font-weight: bold;
  text-align: center !important;
}
.wenben {
  text-indent: 0.32rem;
  line-height: 175%;
  font-size: 0.16rem;
  text-align: justify;
  margin-top: 0.15rem;
}
img.newsInfo {
  position: absolute;
  right: 0.5rem;
  bottom: 0;
}
</style>