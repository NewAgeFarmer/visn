// 导入组件，组件必须声明 name
import VsDropdownMenu from './src'

// 为组件提供 install 安装方法，供按需引入
VsDropdownMenu.install = function (Vue) {
  Vue.component(VsDropdownMenu.name, VsDropdownMenu)
}

// 导出组件
export default VsDropdownMenu
 