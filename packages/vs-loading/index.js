// 导入组件，组件必须声明 name
import VsLoading from './src'

// 为组件提供 install 安装方法，供按需引入
VsLoading.install = function (Vue) {
  Vue.component(VsLoading.name, VsLoading)
}

// 导出组件
export default VsLoading
 