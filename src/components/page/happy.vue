<template>
    <div id="app">
        happy
        <p style="color:red">
            {{ status ? "success" : "fail" }}
        </p>
        <input type="text" v-model="watchText">
        <ul>
            <li v-for="item in list">{{ item.name }}:{{ item.price }}</li>
            <li v-for="item in list" v-text='item.name+" : "+item.price' ></li>
            <li v-for="(item,index) in list" v-text='index+" - "+item.name+" : "+item.price' ></li>
            <li v-for="(item,index) in list" :class="{ 'active' : index==2 }">属性绑定--{{ item.name }}:{{ item.price }}</li>
        </ul>
        <p>对象渲染</p>
        <ul>
            <li v-for="(value,key) in objList">{{ key }} : {{ value }}</li>
        </ul>
        <p>组件渲染</p>
        <love v-for="(value,key) in objList" :key="key"></love>
    </div>
</template>
<script>
  import  love from './animate'
  export default{
      components:{ 
          love
      },
      data(){
          return {
              status:true,
              list:[
                  {name:'列表渲染1',price:'10'},
                  {name:'列表渲染2',price:'20'},
                  {name:'列表渲染3',price:'30'},
                  {name:'列表渲染4',price:'40'}
              ],
              objList:{
                  name:'对象渲染',
                  price:'1000',
                  color:'red'
              },
              watchText:''
          }
      },watch:{
          watchText (val,oldVal){
              console.log(val+'='+oldVal)
          }
      }
  } 

</script>