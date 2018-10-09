<template>
  <div class="hello" id= 'hello'>
    <v-header  :number="5" class="header"></v-header>
    <div class="content">
        <router-view></router-view>
    </div>
    <div :is="tab" @tab-change="change" :number = "10" >
        <p slot="tab1">有没有感觉我特别可怜,没错,我就是插槽被插进来的,呜呜呜</p>
        <p slot="tab2">有没有感觉我特别可怜,没错,我就是插槽被插进来的</p>
    </div>
    <!-- <v-content></v-content> -->

    <v-slider title="标题1" class="slider"></v-slider>
    <v-slider title="标题2" class="slider"></v-slider>
    <v-slider title="标题3" class="slider"></v-slider>
    <h1>{{ msg }}</h1>
    
    <input type="text" :value="msg" @input="msg = $event.target.value">
    
    <v-input v-model="searchText"></v-input>{{ searchText }}

    <alert-box>Something wrong</alert-box>
  </div>
</template>

<script>
import vHeader from "./page/header";
import vContent from "./page/main";
export default {
    name:'helloWord',
    data(){
        return {
            msg : 'hello word',
            site : "http://",
            content:"<div><h3>测试内容</h3></div>",
            searchText:'0',
            tab : "vContent"
        }
    },
    components:{
        vHeader,vContent,
        "v-slider":{
            data:function () {
                return {
                    count:0
                }
            },
            props:["title"],
            template:`<button @click='count++'>你再打一次试试!!!!{{count}}{{title}}</button>`
        },"v-input":{
            props:['value'],
            data(){
                return {
                    // searchText:0
                }
            },
            template:`<input v-bind:value='value' v-on:input="$emit('input',$event.target.value)">`
        },"alert-box":{
            template:`<div class="demo-alert-box">
                <strong>Error!</strong>
                <slot></slot>
            </div>`
        }
    },
    methods:{
        change(value){
            console.log('像子组件传递信息=='+value)
        },
        setDetail(){
           console.log(this.site)
            // this.detail = this.site+'sdsjdsdnakjs';
        }
    },
    computed:{
        //计算属性
        detail(){
            return this.site+'='+this.msg
        },
        get(){
            console.log(this.site)
        },
        set(){
            this.site = "2990"
        }
    },
    updated() {
    },
    created() {

    },
    watch:{
        //侦听属性
        msg(params) {
            this.site = '请稍后度假胜地'
        }
    }
}
// var vm = new Vue({
//     el:'#hello',
//     data:{
//         msg : '欢迎来到这里',
//         site : "http:localhost:8080",
//         detail : '简单介绍信息'
//     },methods:{
       
//     }
// }) 
</script>

<style scoped>

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.header,.slider{
    width: 100%;
    height: 80px;
    background: #ffffff;
}
.slider{
    height: 100%;
    background: #f0f0f0;
    width: 20%;
}
.content{
    width: 100%;
    min-height: 1000px;
    background: #f0f0f0;
}
</style>
