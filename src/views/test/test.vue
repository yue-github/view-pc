<template>
  <div class="main">
    {{data}}
  </div>
</template>

<script>
export default {
  data(){
  	return {
  		data:'hello world!'
  	}
  },
  components: {
  },
  methods:{
  },
  mounted(){
  }
}
</script>

<style scoped="scoped" lang="scss">
$test:red;
  .main{
    color:$test;
  }
</style>
