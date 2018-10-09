<template>
    <div>
        love center<br>
      
         <button @click="toggle()">展示</button>
        <transition name="fade" mode="out-in"        >
            <img v-if="show" src="/static/img/banner0.png" alt="">
            <img v-if="show1" src="/static/img/banner1.png" alt="">
            
        </transition>
    </div>

</template>
<script>
    export default{
        name:'love',
        data(){
            return {
                show:true,
                show1:false,
                listIndex:1
            }
        },methods:{
            toggle(){
                this.show = !this.show;
                this.show1 = !this.show1;
            }
        }
    }
</script>
<style scoped>
.selectBox ul,.selectBox li{
    list-style-type: none;
}
.listBox,.checkBox{
    position: absolute;
    top: 50px;
    width: 100%;
    background: #ffffff;
    text-align: left;
    padding: 0 20px;
}
.checkBox{
    display: none;
    left: 100%;
    border: 1px solid #f0f0f0;
}
.listBox label,.checkBox label{
    height: 45px;
    width: 100%;
    line-height: 45px;
    display: block;
}
.selectBox{
    width: 30%;
    position: relative;
    background: red;
    left: 35%;
    top: 20px;
    height: 45px;
    border-radius: 4px;
}

.active{
    color: red;
}
.leave{
    color: #3699FF;
}
.bounce-enter-active{
    animation: bounce-in .5s;
}
.bounce-leave-active{
    animation: bounce-in .5s reverse;
}
@keyframes bounce-in{
    0%{
        transform: scale(0)
    }
    50%{
        transform: scale(1.5)
    }
    100%{
        transform: scale(1)
    }
}

</style>
