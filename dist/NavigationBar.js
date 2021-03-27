(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["NavigationBar"],{

/***/ "./assets/favicon/favicon.svg":
/*!************************************!*\
  !*** ./assets/favicon/favicon.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "./dist/asset/favicon.svg";

/***/ }),

/***/ "./node_modules/@kazupon/vue-i18n-loader/lib/index.js!./src/components/NavigationBar/NavigationBar.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=D%3A%5Cxampp%5Chtdocs%5Cprojects-html5%5CHTML-Simple-Classifier%5Csrc%5Ccomponents%5CNavigationBar%5CNavigationBar.vue&lang=yaml":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@kazupon/vue-i18n-loader/lib!./src/components/NavigationBar/NavigationBar.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=D%3A%5Cxampp%5Chtdocs%5Cprojects-html5%5CHTML-Simple-Classifier%5Csrc%5Ccomponents%5CNavigationBar%5CNavigationBar.vue&lang=yaml ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (Component) {
  Component.options.__i18n = Component.options.__i18n || []
  Component.options.__i18n.push('{"en":{"TEST_MESSAGE":"Test Message"},"zh-TW":{"TEST_MESSAGE":"測試訊息"}}')
  delete Component.options._Ctor
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/NavigationBar/NavigationBar.less?vue&type=style&index=0&id=1d5bd9e2&lang=less&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js??ref--1-2!./src/components/NavigationBar/NavigationBar.less?vue&type=style&index=0&id=1d5bd9e2&lang=less&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "img[data-v-1d5bd9e2] {\n  width: 1.5rem !important;\n  height: auto;\n}\n.menu[data-v-1d5bd9e2] {\n  z-index: 99999 !important;\n}\n", "",{"version":3,"sources":["D:/xampp/htdocs/projects-html5/HTML-Simple-Classifier/src/components/NavigationBar/NavigationBar.less?vue&type=style&index=0&id=1d5bd9e2&lang=less&scoped=true&","NavigationBar.less"],"names":[],"mappings":"AAAA;EACE,wBAAA;EACA,YAAA;ACCF;ADEA;EACE,yBAAA;ACAF","file":"NavigationBar.less","sourcesContent":["img {\n  width: 1.5rem !important;\n  height: auto;\n}\n\n.menu {\n  z-index: 99999 !important;\n}","img {\n  width: 1.5rem !important;\n  height: auto;\n}\n.menu {\n  z-index: 99999 !important;\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./src/components/NavigationBar/NavigationBar.html?vue&type=template&id=1d5bd9e2&scoped=true&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./src/components/NavigationBar/NavigationBar.html?vue&type=template&id=1d5bd9e2&scoped=true& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "ui top fixed inverted menu" }, [
      _c("div", { staticClass: "item" }, [
        _c("img", { attrs: { src: _vm.logoPath } })
      ]),
      _vm._v(" "),
      _c("a", { ref: "LoadDemoDropdown", staticClass: "ui dropdown item" }, [
        _vm._v("\n      " + _vm._s(_vm.$t("LOAD DEMO")) + "\n      "),
        _c("i", { staticClass: "dropdown icon" }),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "menu" },
          _vm._l(_vm.config.demoDataList, function(file) {
            return _c(
              "div",
              {
                staticClass: "item",
                on: {
                  click: function($event) {
                    return _vm.loadDemo(file)
                  }
                }
              },
              [_vm._v("\n          " + _vm._s(_vm.$t(file)) + "\n        ")]
            )
          }),
          0
        )
      ]),
      _vm._v(" "),
      _c("a", { staticClass: "item", on: { click: _vm.openFile } }, [
        _vm._v("\n      " + _vm._s(_vm.$t("OPEN FILE")) + "\n    ")
      ]),
      _vm._v(" "),
      _c("a", { staticClass: "item", on: { click: _vm.saveFile } }, [
        _vm._v("\n      " + _vm._s(_vm.$t("SAVE FILE")) + "\n    ")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "right menu" }, [
        _c(
          "div",
          { staticClass: "ui right mini aligned category search item" },
          [
            _c(
              "form",
              {
                staticClass: "ui icon input",
                on: {
                  submit: function($event) {
                    $event.stopPropagation()
                    $event.preventDefault()
                    return _vm.onSearch($event)
                  }
                }
              },
              [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.localConfig.searchKeyword,
                      expression: "localConfig.searchKeyword"
                    }
                  ],
                  staticClass: "prompt",
                  attrs: { type: "text", placeholder: _vm.$t("Search...") },
                  domProps: { value: _vm.localConfig.searchKeyword },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.localConfig,
                        "searchKeyword",
                        $event.target.value
                      )
                    }
                  }
                }),
                _vm._v(" "),
                _c("i", { staticClass: "search link icon" })
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "results" })
          ]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "icon item",
            on: {
              click: function($event) {
                _vm.localConfig.displayConfigurationPanel = !_vm.localConfig
                  .displayConfigurationPanel
              }
            }
          },
          [
            !_vm.localConfig.displayConfigurationPanel
              ? _c("i", { staticClass: "bars icon" })
              : _vm._e(),
            _vm._v(" "),
            _vm.localConfig.displayConfigurationPanel
              ? _c("i", { staticClass: "chevron circle up icon" })
              : _vm._e()
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/NavigationBar/NavigationBar.less?vue&type=style&index=0&id=1d5bd9e2&lang=less&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js??ref--1-2!./src/components/NavigationBar/NavigationBar.less?vue&type=style&index=0&id=1d5bd9e2&lang=less&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js?sourceMap!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/less-loader/dist/cjs.js??ref--1-2!./NavigationBar.less?vue&type=style&index=0&id=1d5bd9e2&lang=less&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/NavigationBar/NavigationBar.less?vue&type=style&index=0&id=1d5bd9e2&lang=less&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("3a2dc9eb", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/components/NavigationBar/NavigationBar.html?vue&type=template&id=1d5bd9e2&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./src/components/NavigationBar/NavigationBar.html?vue&type=template&id=1d5bd9e2&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_NavigationBar_html_vue_type_template_id_1d5bd9e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./NavigationBar.html?vue&type=template&id=1d5bd9e2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./src/components/NavigationBar/NavigationBar.html?vue&type=template&id=1d5bd9e2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_NavigationBar_html_vue_type_template_id_1d5bd9e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_NavigationBar_html_vue_type_template_id_1d5bd9e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/NavigationBar/NavigationBar.js?vue&type=script&lang=js&?73f3":
/*!********************************************************************************!*\
  !*** ./src/components/NavigationBar/NavigationBar.js?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavigationBar_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./NavigationBar.js?vue&type=script&lang=js& */ "./src/components/NavigationBar/NavigationBar.js?vue&type=script&lang=js&?b81b");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_NavigationBar_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/NavigationBar/NavigationBar.js?vue&type=script&lang=js&?b81b":
/*!********************************************************************************!*\
  !*** ./src/components/NavigationBar/NavigationBar.js?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_favicon_favicon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../assets/favicon/favicon.svg */ "./assets/favicon/favicon.svg");
/* harmony import */ var _assets_favicon_favicon_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_favicon_favicon_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavigationBarMethodsData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavigationBarMethodsData.js */ "./src/components/NavigationBar/NavigationBarMethodsData.js");
/* harmony import */ var _NavigationBarMethodsDataLoader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavigationBarMethodsDataLoader.js */ "./src/components/NavigationBar/NavigationBarMethodsDataLoader.js");
/* harmony import */ var _NavigationBarMethodsView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavigationBarMethodsView.js */ "./src/components/NavigationBar/NavigationBarMethodsView.js");


let NavigationBar = {
  props: ['config', 'localConfig', 'utils'],
  data () {    
    this.$i18n.locale = this.localConfig.locale
    return {
      logoPath: (_assets_favicon_favicon_svg__WEBPACK_IMPORTED_MODULE_0___default())
    }
  },
  watch: {
    'localConfig.locale'() {
      this.$i18n.locale = this.localConfig.locale;
    },
  },
  computed: {
    
  },
  mounted: async function () {
    await this.initData()
    this.initDropdown()
  },
  methods: {}
}


Object(_NavigationBarMethodsData_js__WEBPACK_IMPORTED_MODULE_1__["default"])(NavigationBar)


Object(_NavigationBarMethodsDataLoader_js__WEBPACK_IMPORTED_MODULE_2__["default"])(NavigationBar)


Object(_NavigationBarMethodsView_js__WEBPACK_IMPORTED_MODULE_3__["default"])(NavigationBar)

/* harmony default export */ __webpack_exports__["default"] = (NavigationBar);

/***/ }),

/***/ "./src/components/NavigationBar/NavigationBar.less?vue&type=style&index=0&id=1d5bd9e2&lang=less&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./src/components/NavigationBar/NavigationBar.less?vue&type=style&index=0&id=1d5bd9e2&lang=less&scoped=true& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_NavigationBar_less_vue_type_style_index_0_id_1d5bd9e2_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader/dist/cjs.js?sourceMap!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/less-loader/dist/cjs.js??ref--1-2!./NavigationBar.less?vue&type=style&index=0&id=1d5bd9e2&lang=less&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/NavigationBar/NavigationBar.less?vue&type=style&index=0&id=1d5bd9e2&lang=less&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_NavigationBar_less_vue_type_style_index_0_id_1d5bd9e2_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_NavigationBar_less_vue_type_style_index_0_id_1d5bd9e2_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_NavigationBar_less_vue_type_style_index_0_id_1d5bd9e2_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_NavigationBar_less_vue_type_style_index_0_id_1d5bd9e2_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/NavigationBar/NavigationBar.vue":
/*!********************************************************!*\
  !*** ./src/components/NavigationBar/NavigationBar.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavigationBar_html_vue_type_template_id_1d5bd9e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavigationBar.html?vue&type=template&id=1d5bd9e2&scoped=true& */ "./src/components/NavigationBar/NavigationBar.html?vue&type=template&id=1d5bd9e2&scoped=true&");
/* harmony import */ var _NavigationBar_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavigationBar.js?vue&type=script&lang=js& */ "./src/components/NavigationBar/NavigationBar.js?vue&type=script&lang=js&?73f3");
/* empty/unused harmony star reexport *//* harmony import */ var _NavigationBar_less_vue_type_style_index_0_id_1d5bd9e2_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavigationBar.less?vue&type=style&index=0&id=1d5bd9e2&lang=less&scoped=true& */ "./src/components/NavigationBar/NavigationBar.less?vue&type=style&index=0&id=1d5bd9e2&lang=less&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _NavigationBar_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_D_3A_5Cxampp_5Chtdocs_5Cprojects_html5_5CHTML_Simple_Classifier_5Csrc_5Ccomponents_5CNavigationBar_5CNavigationBar_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavigationBar.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=D%3A%5Cxampp%5Chtdocs%5Cprojects-html5%5CHTML-Simple-Classifier%5Csrc%5Ccomponents%5CNavigationBar%5CNavigationBar.vue&lang=yaml */ "./src/components/NavigationBar/NavigationBar.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=D%3A%5Cxampp%5Chtdocs%5Cprojects-html5%5CHTML-Simple-Classifier%5Csrc%5Ccomponents%5CNavigationBar%5CNavigationBar.vue&lang=yaml");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _NavigationBar_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NavigationBar_html_vue_type_template_id_1d5bd9e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NavigationBar_html_vue_type_template_id_1d5bd9e2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1d5bd9e2",
  null
  
)

/* custom blocks */

if (typeof _NavigationBar_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_D_3A_5Cxampp_5Chtdocs_5Cprojects_html5_5CHTML_Simple_Classifier_5Csrc_5Ccomponents_5CNavigationBar_5CNavigationBar_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_4__["default"] === 'function') Object(_NavigationBar_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_D_3A_5Cxampp_5Chtdocs_5Cprojects_html5_5CHTML_Simple_Classifier_5Csrc_5Ccomponents_5CNavigationBar_5CNavigationBar_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_4__["default"])(component)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/NavigationBar/NavigationBar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/NavigationBar/NavigationBar.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=D%3A%5Cxampp%5Chtdocs%5Cprojects-html5%5CHTML-Simple-Classifier%5Csrc%5Ccomponents%5CNavigationBar%5CNavigationBar.vue&lang=yaml":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./src/components/NavigationBar/NavigationBar.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=D%3A%5Cxampp%5Chtdocs%5Cprojects-html5%5CHTML-Simple-Classifier%5Csrc%5Ccomponents%5CNavigationBar%5CNavigationBar.vue&lang=yaml ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_kazupon_vue_i18n_loader_lib_index_js_NavigationBar_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_D_3A_5Cxampp_5Chtdocs_5Cprojects_html5_5CHTML_Simple_Classifier_5Csrc_5Ccomponents_5CNavigationBar_5CNavigationBar_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@kazupon/vue-i18n-loader/lib!./NavigationBar.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=D%3A%5Cxampp%5Chtdocs%5Cprojects-html5%5CHTML-Simple-Classifier%5Csrc%5Ccomponents%5CNavigationBar%5CNavigationBar.vue&lang=yaml */ "./node_modules/@kazupon/vue-i18n-loader/lib/index.js!./src/components/NavigationBar/NavigationBar.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=D%3A%5Cxampp%5Chtdocs%5Cprojects-html5%5CHTML-Simple-Classifier%5Csrc%5Ccomponents%5CNavigationBar%5CNavigationBar.vue&lang=yaml");
/* harmony import */ var _node_modules_kazupon_vue_i18n_loader_lib_index_js_NavigationBar_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_D_3A_5Cxampp_5Chtdocs_5Cprojects_html5_5CHTML_Simple_Classifier_5Csrc_5Ccomponents_5CNavigationBar_5CNavigationBar_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_kazupon_vue_i18n_loader_lib_index_js_NavigationBar_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_D_3A_5Cxampp_5Chtdocs_5Cprojects_html5_5CHTML_Simple_Classifier_5Csrc_5Ccomponents_5CNavigationBar_5CNavigationBar_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_kazupon_vue_i18n_loader_lib_index_js_NavigationBar_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_D_3A_5Cxampp_5Chtdocs_5Cprojects_html5_5CHTML_Simple_Classifier_5Csrc_5Ccomponents_5CNavigationBar_5CNavigationBar_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_kazupon_vue_i18n_loader_lib_index_js_NavigationBar_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_D_3A_5Cxampp_5Chtdocs_5Cprojects_html5_5CHTML_Simple_Classifier_5Csrc_5Ccomponents_5CNavigationBar_5CNavigationBar_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_kazupon_vue_i18n_loader_lib_index_js_NavigationBar_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_D_3A_5Cxampp_5Chtdocs_5Cprojects_html5_5CHTML_Simple_Classifier_5Csrc_5Ccomponents_5CNavigationBar_5CNavigationBar_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/NavigationBar/NavigationBarMethodsData.js":
/*!******************************************************************!*\
  !*** ./src/components/NavigationBar/NavigationBarMethodsData.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

/* harmony default export */ __webpack_exports__["default"] = (function (NavigationBar) {
  NavigationBar.methods.initData = async function () {
    if (this.localConfig.data.length > 2
            && Array.isArray(this.localConfig.data[0])
            && this.localConfig.data[0].length > 3) {
      return false
    }
    
    this.loadDemo()
  }
  
  NavigationBar.methods.loadDemo = async function (file) {
    this.config.isDataProcessing = true
    
    if (!file) {
      file = this.config.demoDataList[0]
    }
    
    this.localConfig.classFieldName = null
    
    this.config.loadingProgress = 0
    let rawData = await this.loadDemoData(file)
    
    this.config.loadingProgress = 0.5
    let detectResult = this.detectClassField(rawData)
    //console.log(detectResult)
    let orderedData = await this.orderColumns(rawData, detectResult.classFieldIndex)
    this.config.loadingProgress = 0.75
    
    this.localConfig.classFieldName = detectResult.classFieldName    
    
    this.localConfig.headers = orderedData[0]
    
    let data = orderedData.splice(1)
    //console.log(data)
    //this.localConfig.data = this.localConfig.data.splice(0, 0).concat(data)
    await this.$parent.$refs.DataTable.loadData(data)
    
    //let data = orderedData.splice(1)
    //this.localConfig.data = this.localConfig.data.splice(0, 0).concat(data)
    
    
    this.config.loadingProgress = 1
    //console.log(this.localConfig.data.length)
    
    this.config.isDataProcessing = false
  }
  
  NavigationBar.methods.loadDemoData = async function (file) {
    let path = "./assets/data/" + file
    //console.log(path)
    if (path.endsWith('.csv')) {
      return await this.loadURLCSV(path)
    }
    else {
      return await this.loadURLODS(path)
    }
  }
  
  NavigationBar.methods.detectClassField = function (data) {
    let headers = data[0]
    
    if (headers[1] === 'predict') {
      // 已經被調整好了，不用再整理
      return {
        classFieldName: headers[0],
        classFieldIndex: 0
      }
    }
    
    // ---------------------------
    // 偵測
    
    let classFieldNameCandidates = ['class', 'label', 'target', 'score', 'dv']
    let classFieldIndex = -1
    let classFieldName
    
    for (let len = classFieldNameCandidates.length, i = len; i > 0; i--) {
      let name = classFieldNameCandidates[(len - i)]
      let index = headers.indexOf(name)
      if (index > -1) {
        classFieldIndex = index
        classFieldName = name
        break
      }
    }
    //console.log(classFieldName, classFieldIndex)
    
    if (classFieldIndex === -1) {
      classFieldIndex = headers.length - 1
      classFieldName = headers[classFieldIndex]
    }
    
    return {
      classFieldName,
      classFieldIndex
    }
  }
  
  NavigationBar.methods.orderColumns = async function (data, classFieldIndex) {
    // ---------------------------
    // 開始大遷移
    for (let rowLen = data.length, r = rowLen; r > 0; r--) {
      let row = data[(rowLen - r)]
      
      let classField = row.splice(classFieldIndex ,1)
      // putting the 'role' string back in the array:
      
      if (r === rowLen) {
        row.unshift('predict')
        row.unshift(classField[0])
      }
      else {
        row.unshift(null)
        row.unshift(classField[0])
      }
      
      if (r % 10 === 1) {
        this.utils.AsyncUtils.sleep(0)
      }
    }
    
    return data
  }
  
});

/***/ }),

/***/ "./src/components/NavigationBar/NavigationBarMethodsDataLoader.js":
/*!************************************************************************!*\
  !*** ./src/components/NavigationBar/NavigationBarMethodsDataLoader.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! papaparse */ "./node_modules/papaparse/papaparse.min.js");
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(papaparse__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_1__);



/* harmony default export */ __webpack_exports__["default"] = (function (NavigationBar) {
  
  NavigationBar.methods.loadURLCSV = function (url) {
//    if (url.startsWith('./')) {
//      let currentURL = location.href
//      url = currentURL.slice(0, currentURL.lastIndexOf('/') + 1) + url.slice(2)
//    }
    
    //console.log(url)
    
    return new Promise((resolve) => {
      let data = []
      papaparse__WEBPACK_IMPORTED_MODULE_0___default.a.parse(url, {
        download: true,
        step: function(row) {
          data.push(row.data)
        },
        complete: async () => {
          //console.log(data)
          data = await this.utils.DataUtils.parseNumber(data)
  
          resolve(data)
        }
      });
    })
  }
  
  
  NavigationBar.methods.loadURLODS = function (url) {
//    if (url.startsWith('./')) {
//      let currentURL = location.href
//      url = currentURL.slice(0, currentURL.lastIndexOf('/') + 1) + url.slice(2)
//    }
    
    //console.log(url)
    
    return new Promise((resolve) => {
      /* set up async GET request */
      var req = new XMLHttpRequest();
      req.open("GET", url, true);
      req.responseType = "arraybuffer";

      req.onload = async (e) => {
        var data = new Uint8Array(req.response);
        var workbook = xlsx__WEBPACK_IMPORTED_MODULE_1___default.a.read(data, {type:"array"});

        var sheet_name_list = workbook.SheetNames;

        //console.log(url)
        //console.log(sheet_name_list)
        var xlData = xlsx__WEBPACK_IMPORTED_MODULE_1___default.a.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

        let headers
        xlData = xlData.map((row) => {
          if (!headers) {
            headers = Object.keys(row)
          }
          return headers.map(header => {
            return row[header]
          })
        })
        xlData.unshift(headers)

        xlData = await this.utils.DataUtils.parseNumber(xlData)

        resolve(xlData)
      }

      req.send();
      
    })
  }
});

/***/ }),

/***/ "./src/components/NavigationBar/NavigationBarMethodsView.js":
/*!******************************************************************!*\
  !*** ./src/components/NavigationBar/NavigationBarMethodsView.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["default"] = (function (NavigationBar) {
  NavigationBar.methods.initDropdown = async function () {
    while (!this.$refs.LoadDemoDropdown || !jquery__WEBPACK_IMPORTED_MODULE_0___default.a.isSemanticNIWSFReady) {
      await this.utils.AsyncUtils.sleep()
    }
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.$refs.LoadDemoDropdown).dropdown()
  }
    
  NavigationBar.methods.onSearch = function (event) {
    window.alert('TODO: Search ' + this.localConfig.searchKeyword)
    //console.log(event)
    return false
  }
  
  NavigationBar.methods.saveFile = function () {
    window.alert('TODO')
  }
  
  NavigationBar.methods.openFile = function () {
    window.alert('TODO')
  }
});

/***/ }),

/***/ 0:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=NavigationBar.js.map