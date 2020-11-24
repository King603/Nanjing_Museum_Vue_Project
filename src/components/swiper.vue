<template>
  <div class="swiper">
    <div class="swiper-container">
      <div class="swiper-wrap" ref="swiperwrap" @transitionend="checkBorder">
        <slot></slot>
      </div>
      <div class="pagination" v-if="pagination">
        <span
          class="indicator"
          v-for="(item, index) in indCount"
          :key="index"
          :class="{ picked: currentIndex === index }"
          @click="pickItem(index)"
        ></span>
      </div>
      <div class="swiperbtn" v-if="btn">
        <div class="pre-btn" @click="preItem"></div>
        <div class="next-btn" @click="nextItem"></div>
      </div>
    </div>
    <!-- <div class="clear"></div> -->
  </div>
</template>

<script>
export default {
  name: "dsq-swiper",
  data() {
    return {
      count: 0, //轮播元素的个数
      currentIndex: 0, //当前元素的索引
      timer: null, //启动自动播放的定时器
      onceTimer: null,
      width: 0, //窗口的宽度，每一个移动内部元素的距离
      indCount: 0, //分页器中icon的个数
    };
  },
  props: {
    loop: {
      //是否循环
      type: Boolean,
      default: true,
    },
    speed: {
      //播放速度
      type: Number,
      default: 3000,
    },
    delay: {
      //动画的速度
      type: Number,
      default: 300,
    },
    pagination: {
      //是否需要分页器
      type: Boolean,
      default: true,
    },
    btn: {
      //是否需要前一页后一页按钮
      type: Boolean,
      default: true,
    },
  },
  mounted() {
    this.layout();
    this.autoPlay();
  },
  methods: {
    //获取轮播元素的数量，以及分页器元素的数量，对轮播元素进行布局
    layout() {
      let items = this.$refs.swiperwrap.children;
      this.count = items.length;
      this.indCount = items.length;

      //若需要连续播放，则需要在最后一个元素后面添加第一个元素，同时轮播元素数量加一
      if (this.loop) {
        this.count++;
        let first = items[0].cloneNode(true);
        this.$refs.swiperwrap.appendChild(first);
      }

      //内部元素的宽度与轮播元素数量有关
      this.$refs.swiperwrap.style.width = this.count * 100 + "%";

      //轮播元素的宽度与元素数量的关系
      for (let index = 0; index < this.count; index++) {
        const element = this.$refs.swiperwrap.children[index];
        element.style.width = (1 / this.count) * 100 + "%";
      }

      //获取窗口宽度
      this.width = items[0].clientWidth;
    },

    //移动内部元素
    play(dis) {
      let container = this.$refs.swiperwrap;
      container.style.transform = "translateX(-" + dis + "px)";
    },

    //添加动画
    addAnimation() {
      let container = this.$refs.swiperwrap;
      container.style.transition = "all " + this.delay / 1000 + "s ease-in-out";
    },

    //移除动画效果
    removeAnimation() {
      let container = this.$refs.swiperwrap;
      container.style.transition = "none";
    },

    //自动播放：每隔一端时间，添加动画效果，并移动内部元素
    autoPlay() {
      this.timer = setInterval(() => {
        this.currentIndex++;
        this.addAnimation();
        this.play(this.currentIndex * this.width);
      }, this.speed);
    },

    //确认是否已经移动到最后一个元素，每次transitionend事件后即检查
    checkBorder() {
      if (this.currentIndex >= this.count - 1) {
        this.currentIndex = 0;
        this.removeAnimation();
        this.play(0);
      }
    },

    //点击分页器上的按钮，显示某一个轮播元素
    pickItem(index) {
      clearInterval(this.onceTimer);
      clearInterval(this.timer);
      this.currentIndex = index;
      this.addAnimation();
      this.play(this.currentIndex * this.width);

      //一段时间后再次启动自动播放效果
      this.onceTimer = setTimeout(this.autoPlay, this.speed);
    },

    //点击选择上一个轮播元素
    preItem() {
      clearInterval(this.onceTimer);
      clearInterval(this.timer);
      this.currentIndex--;
      if (this.currentIndex < 0) {
        this.currentIndex = this.indCount - 1;
      }
      this.addAnimation();
      this.play(this.currentIndex * this.width);
      this.onceTimer = setTimeout(this.autoPlay, this.speed);
    },

    //点击选择下一个轮播元素
    nextItem() {
      clearInterval(this.onceTimer);
      clearInterval(this.timer);
      this.currentIndex++;
      if (this.currentIndex >= this.indCount) {
        this.currentIndex = 0;
      }
      this.addAnimation();
      this.play(this.currentIndex * this.width);
      this.onceTimer = setTimeout(this.autoPlay, this.speed);
    },
  },
};
</script>
