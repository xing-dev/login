import axios from 'axios'
import Qs from 'qs'
axios.defaults.baseURL ='https://easy-mock.com';
axios.defaults.headers['Content-Type'] ='application/json; charset=utf-8';
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  var data=response.data;
  return data;
}, function (error) {
  alert('网络出错');
});
axios.interceptors.request.use(config => {
  return config;
});
export default axios
