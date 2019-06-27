// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import en from 'iview/dist/locale/en-US';
import zh from 'iview/dist/locale/zh-CN';
import store from './store'
import App from './App'
import router from './router'
Vue.config.productionTip = false;

Vue.prototype.FormatDate = function (date, fmt) {
  var o = {
    "M+": date.getMonth() + 1, //月份 
    "d+": date.getDate(), //日 
    "h+": date.getHours(), //小时 
    "m+": date.getMinutes(), //分 
    "s+": date.getSeconds(), //秒 
    "q+": Math.floor((date.getMonth() + 3) / 3), //季度 
    "S": date.getMilliseconds() //毫秒 
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}

// Vue.prototype.DataAddress = "192.168.65.34:10006";//大鹏
//Vue.prototype.DataAddress = "192.168.1.223:10706";//公司
// Vue.prototype.DataAddress = "vpn.superng.cn:9188";//公司VPN

Vue.use(iView, {
  locale: zh
});
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
