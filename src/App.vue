<script>
export default {
  onLaunch: function () {
    console.log("App Launch");
  },
  onShow: function () {
    console.log("App Show");
  },
  onHide: function () {
    console.log("App Hide");
  },
};
</script>

<style>
/*每个页面公共css */
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}
::-webkit-scrollbar {
  display: none;
  width: 0 !important;
  height: 0 !important;
  -webkit-appearance: none;
  background: transparent;
}
/* 隐藏滚动条样式，但可以实现上下滚动 */
/* chrome 和Safari  */
*::-webkit-scrollbar {
  display: none;
}
* {
  /* IE 10+ */
  -ms-overflow-style: none;
}
/* Firefox  暂时没有   坑啊 */

*,
::after,
::before {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
</style>
