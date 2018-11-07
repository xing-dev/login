<template>
  <div id="login">
    <p>
      <span> > </span>
      <span> 登录 </span>
      <span> X</span>
    </p>
    <div class="phone">
      <a class="tip">手机号</a>
      <a class="tip1">+86</a>
      <input placeholder="请输入手机号" maxlength="11" v-model="phone" type="text"/>
    </div>
    <div class="code">
      <input placeholder="请输入验证码" maxlength="4" v-model="code" type="text"/>
      <button class="btn" @click="getCode" :class="{'sended':sended}" :disabled="sended">{{sended?('重发验证码'+time+'s'):'点击获取验证码'}}</button>
    </div>
    <div class="password">
      <input placeholder="密码(不少于6位)" v-model="password" type="password"/>
    </div>
    <button class="login" @click="login">{{txt}}</button>
  </div>
</template>

<script>
  import _public from 'assets@/js/public'
  export default {
    name: "login",
    mixins:[_public],
    props:{
      txt:{
        type: String,
        default: ''
      },
    },
    data() {
      return {
        phone: '',
        code: '',
        password: '',
        sended:false,//是否已经发送验证码，否认 没有
        time:60,//倒计时
      }
    },
    methods: {
      getCode() {//获取验证码
        var vm = this;
        if(vm.check('phone',vm.phone)){
          vm.$axios.get('/mock/5b2385e3debe3c5977248a16/wscn/captcha?phone='+vm.phone).then(function (res) {
            if(res.code==200){
              vm.code=res.data.captcha;
              vm.sended=true;
              var timer=setInterval(function () {
                vm.time-=1;
                if(vm.time==0){
                  vm.sended=false;
                  vm.time=60;
                  clearInterval(timer);
                }
              },1000)
            }
          }).catch(function () {

          })
        }else{
          alert('填写正确的手机号')
        }
      },
      login() {//登录
        var vm = this;
        if(vm.check('phone',vm.phone)&&vm.code&&vm.check('pwd',vm.password)){
          vm.$axios({
            method:'post',
            url:'/mock/5b2385e3debe3c5977248a16/wscn/submit',
            data:{
              phone:vm.phone,
              captcha:vm.code,
              // password:vm.password
            }
          }).then(function (res) {
            vm.$emit("message",res.data.messgae);
          })
        }else{
          alert('请确保表单填写完成')
        }
      }
    }
  }
</script>

<style scoped>
  @import '../../assets/css/reset.less';
</style>
