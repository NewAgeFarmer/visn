import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 导入组件库
import visn from '../packages'
// 注册组件库
Vue.use(visn)

new Vue({
  render: h => h(App),
}).$mount('#app')