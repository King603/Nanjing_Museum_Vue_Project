<template>
  <div>
    <div class="logo_hd">
      <div class="logo wh">
        <div class="logo_l fl">
          <h1 style="display: none">故宫博物院</h1>
          <a href="javascript:;" class="logo_bd"> </a>
        </div>
        <div class="logo_r fr">
          <p>
            <a href="https://palacemuseum.tmall.com/" target="_blank"
              ><s class="btnl"></s><b>故宫文创旗舰店<i>▲</i></b
              ><s class="btnr"></s
            ></a>
          </p>
          <p>
            <a href="javascript:;" onclick="v_home.goFree(1);"
              ><s class="btnl"></s><b>主题免费票<i>▲</i></b
              ><s class="btnr"></s
            ></a>
          </p>
          <p class="hover">
            <s class="hover"></s
            ><b class="hover">普通门票<i class="hover">▲</i></b
            ><s class="hover"></s><i></i>
          </p>
          <p>
            <a href="javascript:;" onclick="v_home.goYear(1);"
              ><s class="btnl"></s><b>年票<i>▲</i></b
              ><s class="btnr"></s
            ></a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scroped>
.logo_hd {
  height: 76px;
  background: #f8f9e8;
  border-bottom: 2px solid #c5974b;
}
.logo {
  height: 76px;
}
.wh {
  width: 1200px;
  margin: auto;
}
.fl {
  float: left;
}
.logo_r {
  margin-top: 26px;
  margin-right: 55px;
}
.fr {
  float: right;
}
.logo_r p {
  width: 102px;
  height: 42px;
  display: inline-block;
  text-align: center;
  cursor: pointer;
  line-height: 42px;
  color: #a57a34;
  font-size: 14px;
  font-weight: bold;
  float: left;
}
.logo_r > p:nth-child(1),
.logo_r > p:nth-child(2) {
  margin-right: 10px;
}
</style>