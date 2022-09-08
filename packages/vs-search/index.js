// 导入组件，组件必须声明 name
import VsSearch from './src'

// 为组件提供 install 安装方法，供按需引入
VsSearch.install = function (Vue) {
  Vue.component(VsSearch.name, VsSearch)
}

// 导出组件
export default VsSearch