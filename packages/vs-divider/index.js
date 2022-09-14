// 导入组件，组件必须声明 name
import VsDivider from './src'

// 为组件提供 install 安装方法，供按需引入
VsDivider.install = function (Vue) {
  Vue.component(VsDivider.name, VsDivider)
}

// 导出组件
export default VsDivider
 