// 导入组件，组件必须声明 name
import VsNav from './src'

// 为组件提供 install 安装方法，供按需引入
VsNav.install = function (Vue) {
  Vue.component(VsNav.name, VsNav)
}

// 导出组件
export default VsNav
 