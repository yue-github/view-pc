<template>
    <div>
        <div class="messageBox" v-if ="showHide">
            <div class="title">
                {{title}}
            </div>
            <div class="content">
                {{content}}
            </div>
            <div class="button">
                <div class="cancel" @click="handleCancel">cancel</div>
                <div class="ok" @click="handleOk">ok</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
       name:'MB' 
    }
</script>

<style scoped>
.messageBox{
    width:200px;
    height:300px;
    box-shadow:2px 4px 6px #ccc; 
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-100px,-150px);
}
.title{
    text-align:center;
    line-height: 30px;
    box-shadow:0 1px 5px #F0F0F0;
}
.content{
    box-sizing:border-box;
    padding:10px 10px;
}
.button{
    width:100%;
    position:absolute;
    bottom:0;
    height:50px;
    border-top:1px solid #F0F0F0;
    display:flex;
    cursor: pointer;
}
.cancel{
    display:flex;
    align-items: center;
    justify-content: center;
    flex:1;
    border-right:1px solid #F0F0F0;
}
.ok{
    display:flex;
    flex:1;
    align-items: center;
    justify-content: center;
}
</style>