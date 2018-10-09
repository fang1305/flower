<template>
    <div class="headMain" @click="getMsg" id="app">
       <!-- <div v-if="msg.length>0"> {{ msg }}</div>
        <input id="one" type="checkbox" value='1' v-model="msg">
        <label for="one">one</label>
        <input id="two" type="checkbox" value='2' v-model="msg">
        <label for="two">two</label>
        <input type="checkbox" id="three" value='3' v-model="msg">
        <label for="three">three</label> -->
        <div class="mainContent">
            <div class="imgBox">
                <img src="/static/img/logo.png" alt="">
            </div>
            <div class="lineList">
                <ul>
                    <li v-for="(item,index) in list" @click="change(index)">
                        <router-link :to=item.url exact>{{item.value}}{{number}}</router-link>
                    </li>  
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

    export default{
        props:{
            "number":[Number]
        },
        data(){
            return {
                msg:[],
                count:0,
                
                listIndex:0,
                list:[
                    {url:"/index",value:"爱尚你"},
                    {url:"/love",value:"心唯你"},
                    {url:"/happy",value:"心悦你"},
                    {url:"/animate",value:"心由你"},
                    {url:"/",value:"后台管理"}
                ]
            }
        },methods:{
            getMsg(){
                this.count = this.count+1;
            },
            change(index){
                this.listIndex = index;
            }
        }
    }
</script>
<style>
.mainContent{
    width: 80%;
    margin: 0 auto;
    height: 100%;
}
.imgBox{
    width: 30%;
    height: 60px;
    margin-top: 10px;
    float: left;
}
.imgBox img{
    height: 50px;
    margin-top: 5px;
}
.lineList{
    float: right;
}
.lineList ul li{
    list-style-type: none;
    line-height: 76px;
    display: inline-block;
}
.lineList ul li a{
    display: block;
    padding: 0 18px;
    height: 100%;
    color: #333;
    font-size: 18px;
    font-weight: 400;
}
.lineList ul li.active a{
    /* background: #F0F0F0; */
    /* color: #3699FF; */
    border-bottom: 4px solid #3699FF;
}
.router-link-active{
    border-bottom: 4px solid red;
    opacity: 1;
}
.nav-bar .active .item{
    background: #f0f0f0;
    opacity: 1;
}
</style>
