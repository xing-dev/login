const modals = {
  methods: {
    check: function (type,str) {//检测手机号是否正确
      var reg='';//正则
      if(type=='phone'){
        reg=/^0?(1{1}[0-9][0-9])[0-9]{8}$/;
      }else if(type=='pwd'){
        reg=/^[^ ]{6,}$/;
      }
      return new RegExp(reg).test(str)
    },
  }
};
export default modals
