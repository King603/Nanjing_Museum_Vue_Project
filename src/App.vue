<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
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
/* ::-webkit-scrollbar {
  display: none;
  width: 0 !important;
  height: 0 !important;
  -webkit-appearance: none;
  background: transparent;
} */
/* 隐藏滚动条样式，但可以实现上下滚动 */
/* chrome 和Safari  */
/* *::-webkit-scrollbar {
  display: none;
} */
/* IE 10+ */
/* * {
  -ms-overflow-style: none;
} */
/* Firefox  暂时没有   坑啊 */

body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
code,
form,
fieldset,
legend,
input,
button,
textarea,
p,
blockquote,
th,
td {
  margin: 0;
  padding: 0;
}

body {
  background: #fff;
  color: #555;
  font-size: 14px;
  font-family: Verdana, Arial, Helvetica, sans-serif;
}

td,
th,
caption {
  font-size: 14px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
  font-size: 100%;
}

address,
caption,
cite,
code,
dfn,
em,
strong,
th,
i,
b,
strong {
  font-style: normal;
  font-weight: normal;
}

a {
  color: #555;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
  text-decoration: none;
}

img {
  border: none;
  vertical-align: middle;
}

ol,
ul,
li {
  list-style: none;
}

input,
textarea,
select,
button {
  font: 14px Verdana, Helvetica, Arial, sans-serif;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

html {
  overflow-y: scroll;
}

.clearfix:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}

.clearfix {
  zoom: 1;
}

</style>
