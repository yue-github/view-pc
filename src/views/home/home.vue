<template>
  <div class="main">
     <div uk-spinner></div>
  </div>
</template>

<script>
// 状态管理映射
import { mapMutations, mapActions } from "vuex"; 
import Test from '@@@/test/test';
export default {
  data() {
    return {
      data: "hello world!",
    };
  },
  components: {
    Test
  },
  methods: {
    // 状态管理mutation映射
    ...mapMutations([]),
    // 状态管理actions映射
    ...mapActions(["TEST"])
  },
  mounted() {
    this.TEST();
  }
};
</script>

<style scoped="scoped">
</style>
