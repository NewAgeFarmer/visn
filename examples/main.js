import Vue from 'vue'
import App from './App.vue'
// import './assets/style/iconfont.css'
// require('./assets/style/iconfont.css')

Vue.config.productionTip = false

// import './assets/iconfont/iconfont.css'
// import VsTabbar from '../packages/vs-tabbar'
// VsTabbar.install(Vue)

// 导入组件库
import visn from '../packages'
// 注册组件库
Vue.use(visn)

new Vue({
  render: h => h(App),
}).$mount('#app')