<template>
  <div id="index">
    <Login></Login>
    <p>{{msg}}</p>
    <router-view/>
  </div>
</template>

<script>
  import Login from 'comp@/include/login'
  export default {
    name: 'index',
    data() {
      return {
        msg:'1111'
      }
    },
    mounted(){
    },
    components:{
      Login
    }
  }
</script>
<style lang="less">
  @import "../assets/css/index";
</style>
