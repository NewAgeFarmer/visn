(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["visn"] = factory();
	else
		root["visn"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "3d6c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5636afd5_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c45d");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5636afd5_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5636afd5_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "4388":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7af3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e040a410_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("bfd6");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e040a410_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e040a410_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "aa4b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b3eb":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b761":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_78c4dba0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b3eb");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_78c4dba0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_78c4dba0_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "bfd6":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c45d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d4dc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_08b3a74d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("aa4b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_08b3a74d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_08b3a74d_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "d8e6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0a63702c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4388");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0a63702c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0a63702c_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2ec9a3be-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/vs-button/src/index.vue?vue&type=template&id=78c4dba0&scoped=true&
var render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{ref:"root",staticClass:"root"},[_c('div',{staticClass:"btn"},[_vm._t("default",function(){return [_vm._v("A button.")]})],2)])
}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/vs-button/src/index.vue?vue&type=template&id=78c4dba0&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/vs-button/src/index.vue?vue&type=script&lang=js&

/* harmony default export */ var srcvue_type_script_lang_js_ = ({
    name: 'VsButton',
    props: ['width', 'height', 'fontSize', 'bgColor', 'hoverColor'],
    mounted() {
        if(this.width) this.$refs.root.style.setProperty('--width', this.width)
        if(this.height) this.$refs.root.style.setProperty('--height', this.height)
        if(this.fontSize) this.$refs.root.style.setProperty('--fontSize', this.fontSize)    
        if(this.bgColor) this.$refs.root.style.setProperty('--bgColor', this.bgColor)
        if(this.hoverColor) this.$refs.root.style.setProperty('--hoverColor', this.hoverColor)
    },
    methods: {
    },
});

// CONCATENATED MODULE: ./packages/vs-button/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var vs_button_srcvue_type_script_lang_js_ = (srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/vs-button/src/index.vue?vue&type=style&index=0&id=78c4dba0&prod&scoped=true&lang=css&
var srcvue_type_style_index_0_id_78c4dba0_prod_scoped_true_lang_css_ = __webpack_require__("b761");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/vs-button/src/index.vue






/* normalize component */

var component = normalizeComponent(
  vs_button_srcvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "78c4dba0",
  null
  
)

/* harmony default export */ var vs_button_src = (component.exports);
// CONCATENATED MODULE: ./packages/vs-button/index.js
// 导入组件，组件必须声明 name


// 为组件提供 install 安装方法，供按需引入
vs_button_src.install = function (Vue) {
  Vue.component(vs_button_src.name, vs_button_src)
}

// 导出组件
/* harmony default export */ var vs_button = (vs_button_src);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2ec9a3be-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/vs-switch/src/index.vue?vue&type=template&id=08b3a74d&scoped=true&
var srcvue_type_template_id_08b3a74d_scoped_true_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{ref:"groove",staticClass:"root"},[_c('button',{on:{"click":_vm.SwitchThemes}},[_c('div',{ref:"btn"},[_vm._t("default")],2)])])
}
var srcvue_type_template_id_08b3a74d_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/vs-switch/src/index.vue?vue&type=template&id=08b3a74d&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/vs-switch/src/index.vue?vue&type=script&lang=js&

/* harmony default export */ var vs_switch_srcvue_type_script_lang_js_ = ({
    name: 'VsSwitch',
//   props: {
//     type: String,
//   },
    props: ['leftColor', 'rightColor', 'width', 'radius', 'bgopacity'],
    data() {
        return {
            flag: false,
        }
    },
    methods: {
        SwitchThemes(ev) {
            this.flag = !this.flag
            if(this.flag) {
                ev.currentTarget.style.backgroundColor = 'var(--right-color)'
                this.$refs.btn.style.right = 0
            } else {
                ev.currentTarget.style.backgroundColor = 'var(--left-color)'
                this.$refs.btn.style.right = `calc(100% - var(--radius))`
            }
            this.$emit('getflag', this.flag)
        }
    },
    mounted() {
        // 修改一个 Dom 节点上的 CSS 变量
        if(this.leftColor) {
            this.$refs.groove.style.setProperty("--left-color", this.leftColor)
        }
        if(this.rightColor) {
            this.$refs.groove.style.setProperty("--right-color", this.rightColor)
        }
        if(this.width) {
            this.$refs.groove.style.setProperty("--width", this.width)
            this.$refs.groove.style.setProperty("--width", this.width)
        }
        if(this.radius) {
            this.$refs.groove.style.setProperty("--radius", this.radius)
        }
    },
});

// CONCATENATED MODULE: ./packages/vs-switch/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_vs_switch_srcvue_type_script_lang_js_ = (vs_switch_srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/vs-switch/src/index.vue?vue&type=style&index=0&id=08b3a74d&prod&scoped=true&lang=css&
var srcvue_type_style_index_0_id_08b3a74d_prod_scoped_true_lang_css_ = __webpack_require__("d4dc");

// CONCATENATED MODULE: ./packages/vs-switch/src/index.vue






/* normalize component */

var src_component = normalizeComponent(
  packages_vs_switch_srcvue_type_script_lang_js_,
  srcvue_type_template_id_08b3a74d_scoped_true_render,
  srcvue_type_template_id_08b3a74d_scoped_true_staticRenderFns,
  false,
  null,
  "08b3a74d",
  null
  
)

/* harmony default export */ var vs_switch_src = (src_component.exports);
// CONCATENATED MODULE: ./packages/vs-switch/index.js
// 导入组件，组件必须声明 name


// 为组件提供 install 安装方法，供按需引入
vs_switch_src.install = function (Vue) {
  Vue.component(vs_switch_src.name, vs_switch_src)
}

// 导出组件
/* harmony default export */ var vs_switch = (vs_switch_src);
 
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2ec9a3be-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/vs-loading/src/index.vue?vue&type=template&id=0a63702c&scoped=true&
var srcvue_type_template_id_0a63702c_scoped_true_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{ref:"root",staticClass:"root"},[_c('div',{staticClass:"loading"})])
}
var srcvue_type_template_id_0a63702c_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/vs-loading/src/index.vue?vue&type=template&id=0a63702c&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/vs-loading/src/index.vue?vue&type=script&lang=js&


/* harmony default export */ var vs_loading_srcvue_type_script_lang_js_ = ({
    name: 'VsLoading',
    data() {
        return {
            radius: '',
            linecolor: '',
        }
    },
    props: ['size', 'color', 'cycle'],
    methods: {
    },
    mounted() {
        this.linecolor = this.color ? this.color : 'skyblue'
        this.radius = this.size ? this.size : '16px'
        let time = this.cycle ? this.cycle : '0.5s'

        this.$refs.root.style.setProperty('--color', this.linecolor)
        this.$refs.root.style.setProperty('--size', this.radius)
        document.querySelector('.loading').style.animationDuration = time
    },
});

// CONCATENATED MODULE: ./packages/vs-loading/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_vs_loading_srcvue_type_script_lang_js_ = (vs_loading_srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/vs-loading/src/index.vue?vue&type=style&index=0&id=0a63702c&prod&scoped=true&lang=css&
var srcvue_type_style_index_0_id_0a63702c_prod_scoped_true_lang_css_ = __webpack_require__("d8e6");

// CONCATENATED MODULE: ./packages/vs-loading/src/index.vue






/* normalize component */

var vs_loading_src_component = normalizeComponent(
  packages_vs_loading_srcvue_type_script_lang_js_,
  srcvue_type_template_id_0a63702c_scoped_true_render,
  srcvue_type_template_id_0a63702c_scoped_true_staticRenderFns,
  false,
  null,
  "0a63702c",
  null
  
)

/* harmony default export */ var vs_loading_src = (vs_loading_src_component.exports);
// CONCATENATED MODULE: ./packages/vs-loading/index.js
// 导入组件，组件必须声明 name


// 为组件提供 install 安装方法，供按需引入
vs_loading_src.install = function (Vue) {
  Vue.component(vs_loading_src.name, vs_loading_src)
}

// 导出组件
/* harmony default export */ var vs_loading = (vs_loading_src);
 
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2ec9a3be-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/vs-toast/src/index.vue?vue&type=template&id=5636afd5&scoped=true&
var srcvue_type_template_id_5636afd5_scoped_true_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{ref:"root",staticClass:"root"},[_c('div',{ref:"toast",staticClass:"toast"},[_vm._t("default",function(){return [_vm._v("This is a toast component.")]})],2)])
}
var srcvue_type_template_id_5636afd5_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/vs-toast/src/index.vue?vue&type=template&id=5636afd5&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/vs-toast/src/index.vue?vue&type=script&lang=js&

/* harmony default export */ var vs_toast_srcvue_type_script_lang_js_ = ({
    name: 'VsToast',
    props: ['width', 'height', 'bgColor', 'color', 'time', 'pos', 'fontSize'],
    data() {
        return {}
    },
    mounted() {
        let root = this.$refs.root
        if(this.width) root.style.setProperty('--width', this.width)
        if(this.height) root.style.setProperty('--height', this.height)
        if(this.bgColor) root.style.setProperty('--bg-color', this.bgColor)
        if(this.color) root.style.setProperty('--color', this.color)
        if(this.fontSize) root.style.setProperty('--font-size', this.fontSize)
        if(this.time) root.style.setProperty('--time', this.time)
        
        let flashPos = this.pos ? this.pos : ['mid']
        let toast = this.$refs.toast
        if(!flashPos[0] || flashPos[0]==='mid') {
            toast.style.top = '0'
            toast.setAttribute('class', 'toast flashMid');
        } else if (flashPos[0]==='top') {
            toast.style.top = '0'
            root.style.setProperty('--top', flashPos[1])
            toast.setAttribute('class', 'toast flashTop');
        } else if (flashPos[0]==='bottom') {
            toast.style.bottom = '0'
            root.style.setProperty('--bottom', flashPos[1])
            toast.setAttribute('class', 'toast flashBottom');
        }
        root.style.setProperty('--pos', this.width)
        toast.addEventListener('animationend', ()=>{
            toast.style.display = 'none'
        })
    },
});

// CONCATENATED MODULE: ./packages/vs-toast/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_vs_toast_srcvue_type_script_lang_js_ = (vs_toast_srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/vs-toast/src/index.vue?vue&type=style&index=0&id=5636afd5&prod&scoped=true&lang=css&
var srcvue_type_style_index_0_id_5636afd5_prod_scoped_true_lang_css_ = __webpack_require__("3d6c");

// CONCATENATED MODULE: ./packages/vs-toast/src/index.vue






/* normalize component */

var vs_toast_src_component = normalizeComponent(
  packages_vs_toast_srcvue_type_script_lang_js_,
  srcvue_type_template_id_5636afd5_scoped_true_render,
  srcvue_type_template_id_5636afd5_scoped_true_staticRenderFns,
  false,
  null,
  "5636afd5",
  null
  
)

/* harmony default export */ var vs_toast_src = (vs_toast_src_component.exports);
// CONCATENATED MODULE: ./packages/vs-toast/index.js
// 导入组件，组件必须声明 name


// 为组件提供 install 安装方法，供按需引入
vs_toast_src.install = function (Vue) {
  Vue.component(vs_toast_src.name, vs_toast_src)
}

// 导出组件
/* harmony default export */ var vs_toast = (vs_toast_src);
 
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2ec9a3be-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/vs-nav/src/index.vue?vue&type=template&id=e040a410&scoped=true&
var srcvue_type_template_id_e040a410_scoped_true_render = function render(){var _vm=this,_c=_vm._self._c;return _c('footer',{ref:"nav",staticClass:"bottomnav"},[_c('ul',_vm._l((_vm.navlist),function(item){return _c('li',{key:item.index,class:{itemActive: _vm.nowindex==item.index},on:{"click":function($event){return _vm.now(item.index)}}},[_vm._v(" "+_vm._s(item.title)+" ")])}),0)])
}
var srcvue_type_template_id_e040a410_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/vs-nav/src/index.vue?vue&type=template&id=e040a410&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/vs-nav/src/index.vue?vue&type=script&lang=js&

/* harmony default export */ var vs_nav_srcvue_type_script_lang_js_ = ({
    name: 'VsNav',
    props: ['list', 'height', 'normal', 'active',], 
    data() {
        return {
            navlist: [
                {title:'首页', index: 0}, {title:'设置', index: 1},
            ],
            navheight: '18vh',
            nowindex: 0,
            act: {
                color: 'white',
                bgcolor: 'gray',
            },
            nor: {
                color: 'white',
                bgcolor: '#bdbdbd',
            },
            // activeStyle: {
            //     itemActive: nowindex===1,
            // }
        }
    },
    methods: {
        now(index) {
            this.nowindex = index
        }
    },
    mounted() {
        this.navlist = this.list || this.navlist
        this.navheight = this.height || this.navheight
        this.act = this.active ||  this.act
        this.nor = this.normal || this.nor

        if(this.navlist.length > 5) {
            this.navlist = this.navlist.slice(0, 5)
        }

        this.$refs.nav.style.setProperty('--height', this.navheight)
        this.$refs.nav.style.setProperty('--color', this.nor.color)
        this.$refs.nav.style.setProperty('--bg-color', this.nor.bgcolor)
        this.$refs.nav.style.setProperty('--act-color', this.act.color)
        this.$refs.nav.style.setProperty('--act-bg-color', this.act.bgcolor)
        
        for(let key in this.navlist) {
            this.navlist[key].index = key
        }

        this.now(0)
        this.nowindex = 0
    }
});

// CONCATENATED MODULE: ./packages/vs-nav/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_vs_nav_srcvue_type_script_lang_js_ = (vs_nav_srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/vs-nav/src/index.vue?vue&type=style&index=0&id=e040a410&prod&scoped=true&lang=css&
var srcvue_type_style_index_0_id_e040a410_prod_scoped_true_lang_css_ = __webpack_require__("7af3");

// CONCATENATED MODULE: ./packages/vs-nav/src/index.vue






/* normalize component */

var vs_nav_src_component = normalizeComponent(
  packages_vs_nav_srcvue_type_script_lang_js_,
  srcvue_type_template_id_e040a410_scoped_true_render,
  srcvue_type_template_id_e040a410_scoped_true_staticRenderFns,
  false,
  null,
  "e040a410",
  null
  
)

/* harmony default export */ var vs_nav_src = (vs_nav_src_component.exports);
// CONCATENATED MODULE: ./packages/vs-nav/index.js
// 导入组件，组件必须声明 name


// 为组件提供 install 安装方法，供按需引入
vs_nav_src.install = function (Vue) {
  Vue.component(vs_nav_src.name, vs_nav_src)
}

// 导出组件
/* harmony default export */ var vs_nav = (vs_nav_src);
 
// CONCATENATED MODULE: ./packages/index.js
// 导入组件






// 组件列表
const components = [
    vs_button,
    vs_switch,
    vs_loading,
    vs_toast,
    vs_nav,
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

/* harmony default export */ var packages_0 = ({
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  VsButton: vs_button,
  VsSwitch: vs_switch,
  VsLoading: vs_loading,
  VsToast: vs_toast,
  VsNav: vs_nav,
});

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
});
//# sourceMappingURL=visn.umd.js.map