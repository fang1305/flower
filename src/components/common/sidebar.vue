<template>
    <div class="main">
        <el-menu 
            :default-active="onRoutes"
            @select="selectEvent"
        >
            <div v-for="(item,index) in  items">
                <template v-if = "item.children">
                    <el-submenu :index="index">
                        <template slot="title"><i :class="item.icon"></i>{{ item.name }}</template>
                        <el-menu-item-group>
                            <el-menu-item v-for = "(sub,i) in item.children" :index = "sub.url">{{ sub.name }}</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="index">
                        <template slot="title"><i :class="item.icon"></i>{{ item.name }}</template>
                    </el-menu-item>
                </template>
            </div>
        </el-menu>
    </div>
</template>
<script>
    export default{
        name:'sidebar',
        data(){
            return {
                radio : '1',
                items:[{
                    name:"导航一",
                    icon:"el-icon-message",
                    url:"###",
                    children:[
                        {
                            name:"选项1",
                            url:"###"
                        },{
                            name:"选项2",
                            url:"/love"
                        },{
                            name:"选项3",
                            url:"/happy"
                        }
                    ]
                },{
                    name:"导航二",
                    icon:"el-icon-date",
                    url:"###"
                }
                ]
            };
        },methods:{
            selectEvent(data){
                console.log(data)
                this.$route.path = data
            }
        },computed:{
            onRoutes() {
                let path = this.$route.path.split('/');
                return '/'+path[1]
            }
        }
    }
</script>
<style scoped>
.main{
    padding-top: 20px;
}
</style>
