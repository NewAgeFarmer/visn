// 导入组件，组件必须声明 name
import VsDropdownItem from './src'

// 为组件提供 install 安装方法，供按需引入
VsDropdownItem.install = function (Vue) {
  Vue.component(VsDropdownItem.name, VsDropdownItem)
}

// 导出组件
export default VsDropdownItem
 