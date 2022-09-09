// 导入组件，组件必须声明 name
import VsCheckboxGroup from './src'

// 为组件提供 install 安装方法，供按需引入
VsCheckboxGroup.install = function (Vue) {
  Vue.component(VsCheckboxGroup.name, VsCheckboxGroup)
}

// 导出组件
export default VsCheckboxGroup
 