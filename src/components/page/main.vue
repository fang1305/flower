<template>
    <div class="main">
        <slot name="tab1"></slot>
        <div @click="ccs">这是底部的内容{{number}}</div>
        <slot name="tab2"></slot>
    </div>
</template>
<script>
    export default{
        props:{"number":[Number]},
        data(){
            return {
                data:"我是新数据"
            }
        },
        methods:{
            ccs(){
                this.$emit("tab-change",this.data);
            }
        }
    }
</script>
<style scoped>
.main{
    width: 100%;
    line-height: 30px;
    height: 90px;
    text-align: center;
    background: red;
}
</style>

