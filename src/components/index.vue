<template>
  <div id="index">
    <Login></Login>
    <router-view/>
  </div>
</template>

<script>
  import Login from 'comp@/include/login'
  export default {
    name: 'index',
    data() {
      return {
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
  @import "../assets/css/login";
</style>
