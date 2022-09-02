// 导入组件，组件必须声明 name
import VsSwitch from './src'

// 为组件提供 install 安装方法，供按需引入
VsSwitch.install = function (Vue) {
  Vue.component(VsSwitch.name, VsSwitch)
}

// 导出组件
export default VsSwitch
 