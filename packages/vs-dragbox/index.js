// 导入组件，组件必须声明 name
import VsDragbox from './src'

// 为组件提供 install 安装方法，供按需引入
VsDragbox.install = function (Vue) {
  Vue.component(VsDragbox.name, VsDragbox)
}

// 导出组件
export default VsDragbox
 