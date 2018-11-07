<template>
  <div id="index">
    <Login :txt="txt"  @message="handleMessage"></Login>
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
        msg:'',
        txt:'登录'
      }
    },
    methods: {
      handleMessage(data) {
        var vm=this;
        vm.msg=data;
      }
    },
    components:{
      Login
    }
  }
</script>
<style lang="less">
  @import "../assets/css/index";
</style>
