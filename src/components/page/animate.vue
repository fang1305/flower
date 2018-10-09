<template>
    <div class="animate" id="app">
        <div>
            <button @click="showTab=!showTab">toggle</button>
            <transition name="my-trans">
                <p v-if="showTab">切换效果</p>        
            </transition>
        </div>
        <div class="list">
            <h3>动画效果</h3>
        </div>
        <div class="animateType">
            <div class="radio-group">
                <span v-for="(tab,index) in tabs" :class="{cur:tabIndex==index}" @click="tabIndex=index,tabChange(index)">{{tab.name}}</span>
            </div>
            <div class="tabBox">
                <keep-alive>
                <component :is="tabView">
                    
                </component>
                </keep-alive>
            </div>
            
        </div>
    </div>
</template>
<script>
    export default{
        name:'app',
        components:{
            select0:{
                data(){
                    return{
                        show:true
                    }
                },
                template:`<div><button @click="show = !show">show toggle</button>
                            <transition name="fade">
                                <p v-if="show">hello</p>
                            </transition>
                            <transition name="slider-fade">
                                <p v-if="show">slider hello</p>
                            </transition>
                            <transition name="bounce">
                                <p v-if="show">bounce hello</p>
                            </transition>
                            <transition name="line">
                                <div v-if="show" class="lineTest"></div>
                            </transition>
                </div>`
            },select1:{
                template:`<p>第2个</p>`
            },select2:{
                template:`<p>第3个</p>`
            }
        },
        data(){
            return{
                tabView:"select0",
                tabs:[{name:"基础动画"},{name:"划线效果"},{name:"抖动效果"}],
                tabIndex:0,
                showTab:true
            }
        },methods:{
            tabChange(index){
                this.tabView = "select"+index;
            }
        },
        activated() {
            
        }
    }
</script>


<style scoped>
.my-trans-enter-active,.my-trans-leave-active{
    transition: all .5s ease-out
}
.my-trans-enter{
    transform: 13(-500px);
    opacity: 0;
}
.my-trans-leave-active{
    transform: translateY(500px);
    opacity: 0;
}

    .radio-group{font-size:0;height: 26px;line-height:26px;}
    .radio-group>span{cursor:pointer;display:inline-block;font-size:16px;text-align:center;width:100px;}
    .cur{color:#fff;background-color: #20a0ff;}


.animate{
    padding: 20px 0;
    height: 100%;
    text-align: left;
}
.list{
    width: 80%;
    margin: 0px auto;
    background: #ffffff;
    /* height: 100%; */
    text-align: center;
    padding: 20px;
}
.animateType .tabBox{
    height: 100px;
    overflow: auto;
    width: 30%;
    margin-left: 35%;
    background: #fff;
}
</style>

<style>
.fade-leave-active,.fade-enter-active{
    transition: opacity 1s;  
    color: red;  
}
.fade-enter,.fade-leave-to{
    opacity: 0;
}

.slider-fade-enter-active{
    transition: all .3s ease;
}
.slider-fade-leave-active{
    transition: all .8s cubic-bezier(1.0,0.5,0.8,1.0);
}
.slider-fade-enter,.slider-fade-leave-to{
    transform: translateX(100px);
    opacity: 0;
}

.line-enter-active .lineTest{
    transition: width 3s ease;
}
.line-leave-active .lineTest{
    transition: width 8s ease;
}
.line-enter .lineTest,.line-leave-to .lineTest{
    width: 0px;
}
.lineTest{
 width:80px;
 height: 3px;  
 background:#000; 
}

.bounce-enter-active{
    animation: bounce-in .5s;
}
.bounce-leave-active{
    animation: bounce-in .5s reverse;
}
@keyframes bounce-in{
    0%{
        transform:scale(0);
    }50%{
        transform:scale(1.5)
    }100%{
        transform:scale(1)
    }
}

</style>