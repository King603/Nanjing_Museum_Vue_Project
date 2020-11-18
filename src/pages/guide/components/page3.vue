<template>
  <div>
    <div class="title">
      <strong>首都博物馆各层参观导览图（请点击放大观看）</strong>
    </div>
    <p v-for="(img, i) of img_navs" :key="i" class="img">
      <a :href="img.href" target="_blank">
        <img :src="img.src" alt="楼层地图" />
      </a>
    </p>
  </div>
</template>

<script>
export default {
  name: "page-3",
  data() {
    return {
      img_navs: [
        {
          href:
            "http://www.capitalmuseum.org.cn/zjsb/content/images/attachement/jpg/site2/20110106/0013d3c04a320e8f6c582a.htm",
          src:
            "http://www.capitalmuseum.org.cn/zjsb/content/images/attachement/jpg/site2/20110106/0013d3c04a320e8f6c5829.jpg",
        },
        {
          href:
            "http://www.capitalmuseum.org.cn/zjsb/content/images/attachement/jpg/site2/20110106/0013d3c04a320e8f6c6530.htm",
          src:
            "http://www.capitalmuseum.org.cn/zjsb/content/images/attachement/jpg/site2/20110106/0013d3c04a320e8f6c652f.jpg",
        },
        {
          href:
            "http://www.capitalmuseum.org.cn/zjsb/content/images/attachement/jpg/site2/20110106/0013d3c04a320e8f6c7339.htm",
          src:
            "http://www.capitalmuseum.org.cn/zjsb/content/images/attachement/jpg/site2/20110106/0013d3c04a320e8f6c7338.jpg",
        },
        {
          href:
            "http://www.capitalmuseum.org.cn/zjsb/content/images/attachement/jpg/site2/20110106/0013d3c04a320e8f6c8345.htm",
          src:
            "http://www.capitalmuseum.org.cn/zjsb/content/images/attachement/jpg/site2/20110106/0013d3c04a320e8f6c8344.jpg",
        },
      ],
    };
  },
};
</script>

<style>
.img {
  margin: 0.5rem 1rem;
}
.img img {
  width: 100%;
}
.title{

}
</style>