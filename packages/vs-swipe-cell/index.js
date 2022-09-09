// 导入组件，组件必须声明 name
import VsSwipeCell from './src'

// 为组件提供 install 安装方法，供按需引入
VsSwipeCell.install = function (Vue) {
  Vue.component(VsSwipeCell.name, VsSwipeCell)
}

// 导出组件
export default VsSwipeCell
 