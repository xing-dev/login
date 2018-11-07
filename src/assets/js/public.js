const modals = {
  methods: {
    check: function (type,str) {//正则检验，根据参数做检验类型
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
