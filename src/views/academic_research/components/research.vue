<template name="ar-research">
  <div class="fnav_xs l">
    <ul>
      <li v-for="({ title, src }, i) of navList" :key="i">
        <router-link :to="src">{{ title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        { title: "研究成果", src: "/academic_research/research_results" },
        { title: "学术讲座", src: "/academic_research/lecture" },
        { title: "研究课题", src: "/academic_research/research_topic" },
        { title: "出版物防伪溯源信息查询、举报", src: "" },
      ],
    };
  },
};
</script>

<style scoped>
.l {
  float: left;
}

.fnav_xs {
  width: 260px;
  height: 480px;
  padding-top: 110px;
  padding-left: 10px;
  background: url(http://www.luxunmuseum.com.cn/template/default/images/bg_fnav_xs.jpg)
    no-repeat;
}
.fnav_xs li {
  padding-top: 20px;
  padding-bottom: 20px;
}
.fnav_xs li a {
  font-size: 15px;
  color: #322f29;
  text-decoration: none;
  background: url(http://www.luxunmuseum.com.cn/template/default/images/icon01.jpg)
    no-repeat left center;
  display: block;
  padding-left: 28px;
}
.fnav_xs li a:hover {
  color: #ce0202;
}
</style>