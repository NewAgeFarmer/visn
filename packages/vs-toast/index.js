// 导入组件，组件必须声明 name
import VsToast from './src'

// 为组件提供 install 安装方法，供按需引入
VsToast.install = function (Vue) {
  Vue.component(VsToast.name, VsToast)
}

// 导出组件
export default VsToast
 