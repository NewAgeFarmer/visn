// 导入组件，组件必须声明 name
import VsIcon from './src'

// 为组件提供 install 安装方法，供按需引入
VsIcon.install = function (Vue) {
  Vue.component(VsIcon.name, VsIcon)
}

// 导出组件
export default VsIcon
 