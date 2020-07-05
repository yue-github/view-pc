<template>
  <div class="main">
      <div class="container">
         <button>cancel</button>
      </div>
  </div>
</template>

<script>
export default {
  name:'HelloWorld',
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

<style scoped="scoped">
  .container{
    width:200px;
    height:400px;
    box-shadow:2px 4px 6px #ccc; 
    display:flex;
    justify-content:center;
    align-items:center;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-100px,-200px);
  }
</style>
