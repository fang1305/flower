<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- dasjk -->
    <my-header class="header"></my-header>
    <keep-alive>
        <p>keepAlive进行缓存</p>
        <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import "./../static/css/common.css";
/* @import "https://unpkg.com/element-ui/lib/theme-chalk/index.css"; */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
}
</style>
<style scoped>
    .header{
        width:100%;
        background:#000000;
        color:#fff;
        padding:10px 0;
    }
</style>



