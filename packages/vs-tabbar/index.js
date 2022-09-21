// 导入组件，组件必须声明 name
import VsTabbar from './src'

// 为组件提供 install 安装方法，供按需引入
VsTabbar.install = function (Vue) {
  Vue.component(VsTabbar.name, VsTabbar)
}

// 导出组件
export default VsTabbar
 