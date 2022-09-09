// 导入组件
import VsButton from './vs-button'
import VsSwitch from './vs-switch'
import VsLoading from './vs-loading'
import VsToast from './vs-toast'
import VsNav from './vs-nav'
import VsStepper from './vs-stepper'
import VsSearch from './vs-search'
import VsSwipeCell from './vs-swipe-cell'

import VsCheckbox from './vs-checkbox'
import VsCheckboxGroup from './vs-checkbox-group'

import VsDropdownMenu from './vs-dropdown-menu'
import VsDropdownItem from './vs-dropdown-item'

// 组件列表
const components = [
    VsButton,
    VsSwitch,
    VsLoading,
    VsToast,
    VsNav,
    VsStepper,
    VsSearch,
    VsSwipeCell,

    VsCheckbox,
    VsCheckboxGroup,

    VsDropdownMenu,
    VsDropdownItem,
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，那么所有的组件都会被注册
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  VsButton,
  VsSwitch,
  VsLoading,
  VsToast,
  VsNav,
  VsStepper,
  VsSearch,
  VsSwipeCell,

  VsCheckbox,
  VsCheckboxGroup,

  VsDropdownMenu,
  VsDropdownItem,
}
