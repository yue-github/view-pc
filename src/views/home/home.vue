<template>
  <div class="main">
     <div uk-spinner></div>
     <div @click="toggle">请单击</div>
     <transition name="fade">
        <span v-show="show">hello the world!</span>
     </transition>
     <Test/>
  </div>
</template>

<script>
// 状态管理映射
import { mapMutations, mapActions } from "vuex"; 
import Test from '@@@/test/test';
import { messageBox } from '@/components/JS/MessageBox';
export default {
  data() {
    return {
      data: "hello world!",
      show:true
    };
  },
  components: {
    Test
  },
  methods: {
    // 状态管理mutation映射
    ...mapMutations([]),
    // 状态管理actions映射
    ...mapActions(["TEST"]),
    toggle(){
      this.show = !this.show;
    }
  },
  mounted() {
    this.TEST();
    messageBox({
      title : '标题',
      content : 'this is a content111',
      showHide:true,
      handleCancel:() => {
         
      },
      handleOk(){

      }
    });
  }
};
</script>

<style scoped="scoped">
.fade-enter-active,.fade-leave-active{
  transition:opacity .5s;
  color:blue;
}
.fade-enter,.fade-leave-to{
  opacity:0;
  color:red;
}
 .close{
   display:none;
 }
</style>
