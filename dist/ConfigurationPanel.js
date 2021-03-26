(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ConfigurationPanel"],{

/***/ "./node_modules/@kazupon/vue-i18n-loader/lib/index.js!./src/components/ConfigurationPanel/ConfigurationPanel.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=D%3A%5Cxampp%5Chtdocs%5Cprojects-html5%5CHTML-Simple-Classifier%5Csrc%5Ccomponents%5CConfigurationPanel%5CConfigurationPanel.vue&lang=yaml":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@kazupon/vue-i18n-loader/lib!./src/components/ConfigurationPanel/ConfigurationPanel.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=D%3A%5Cxampp%5Chtdocs%5Cprojects-html5%5CHTML-Simple-Classifier%5Csrc%5Ccomponents%5CConfigurationPanel%5CConfigurationPanel.vue&lang=yaml ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (Component) {
  Component.options.__i18n = Component.options.__i18n || []
  Component.options.__i18n.push('{"en":{"TEST_MESSAGE":"Test Message"},"zh-TW":{"TEST_MESSAGE":"測試訊息"}}')
  delete Component.options._Ctor
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/ConfigurationPanel/ConfigurationPanel.less?vue&type=style&index=0&id=00331f62&lang=less&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js??ref--1-2!./src/components/ConfigurationPanel/ConfigurationPanel.less?vue&type=style&index=0&id=00331f62&lang=less&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".ConfigurationPanel[data-v-00331f62] {\n  padding: 1rem;\n}\n", "",{"version":3,"sources":["D:/xampp/htdocs/projects-html5/HTML-Simple-Classifier/src/components/ConfigurationPanel/ConfigurationPanel.less?vue&type=style&index=0&id=00331f62&lang=less&scoped=true&","ConfigurationPanel.less"],"names":[],"mappings":"AAAA;EACE,aAAA;ACCF","file":"ConfigurationPanel.less","sourcesContent":[".ConfigurationPanel {\n  padding: 1rem;\n}",".ConfigurationPanel {\n  padding: 1rem;\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./src/components/ConfigurationPanel/ConfigurationPanel.html?vue&type=template&id=00331f62&scoped=true&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./src/components/ConfigurationPanel/ConfigurationPanel.html?vue&type=template&id=00331f62&scoped=true& ***!
  \******************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "ui form ConfigurationPanel" },
    [
      _c("div", { staticClass: "ui field" }, [
        _c("label", { attrs: { for: "ClassFieldName" } }, [
          _vm._v("\n      " + _vm._s(_vm.$t("Class")) + "\n    ")
        ]),
        _vm._v(" "),
        _c(
          "select",
          {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.localConfig.classFieldName,
                expression: "localConfig.classFieldName"
              }
            ],
            attrs: { id: "ClassFieldName" },
            on: {
              change: function($event) {
                var $$selectedVal = Array.prototype.filter
                  .call($event.target.options, function(o) {
                    return o.selected
                  })
                  .map(function(o) {
                    var val = "_value" in o ? o._value : o.value
                    return val
                  })
                _vm.$set(
                  _vm.localConfig,
                  "classFieldName",
                  $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                )
              }
            }
          },
          _vm._l(_vm.headers, function(header) {
            return _c("option", { domProps: { value: header } }, [
              _vm._v("\n        " + _vm._s(header) + "\n      ")
            ])
          }),
          0
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "ui field" }, [
        _c("label", { attrs: { for: "Classifier" } }, [
          _vm._v("\n      " + _vm._s(_vm.$t("Classifier")) + "\n    ")
        ]),
        _vm._v(" "),
        _c(
          "select",
          {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.classifier,
                expression: "classifier"
              }
            ],
            attrs: { id: "Classifier" },
            on: {
              change: function($event) {
                var $$selectedVal = Array.prototype.filter
                  .call($event.target.options, function(o) {
                    return o.selected
                  })
                  .map(function(o) {
                    var val = "_value" in o ? o._value : o.value
                    return val
                  })
                _vm.classifier = $event.target.multiple
                  ? $$selectedVal
                  : $$selectedVal[0]
              }
            }
          },
          _vm._l(_vm.classifierList, function(c) {
            return _c("option", { domProps: { value: c } }, [
              _vm._v("\n        " + _vm._s(c) + "\n      ")
            ])
          }),
          0
        )
      ]),
      _vm._v(" "),
      _vm.classifier === "DecisionTree"
        ? _c("DecisionTree", {
            ref: "DecisionTree",
            attrs: {
              config: _vm.config,
              localConfig: _vm.localConfig,
              utils: _vm.utils
            }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/ConfigurationPanel/ConfigurationPanel.less?vue&type=style&index=0&id=00331f62&lang=less&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js??ref--1-2!./src/components/ConfigurationPanel/ConfigurationPanel.less?vue&type=style&index=0&id=00331f62&lang=less&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js?sourceMap!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/less-loader/dist/cjs.js??ref--1-2!./ConfigurationPanel.less?vue&type=style&index=0&id=00331f62&lang=less&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/ConfigurationPanel/ConfigurationPanel.less?vue&type=style&index=0&id=00331f62&lang=less&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("97b52e4e", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/components/ConfigurationPanel/ConfigurationPanel.html?vue&type=template&id=00331f62&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./src/components/ConfigurationPanel/ConfigurationPanel.html?vue&type=template&id=00331f62&scoped=true& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_ConfigurationPanel_html_vue_type_template_id_00331f62_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./ConfigurationPanel.html?vue&type=template&id=00331f62&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./src/components/ConfigurationPanel/ConfigurationPanel.html?vue&type=template&id=00331f62&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_ConfigurationPanel_html_vue_type_template_id_00331f62_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_ConfigurationPanel_html_vue_type_template_id_00331f62_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/ConfigurationPanel/ConfigurationPanel.js?vue&type=script&lang=js&?253d":
/*!******************************************************************************************!*\
  !*** ./src/components/ConfigurationPanel/ConfigurationPanel.js?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ConfigurationPanelMethodsData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConfigurationPanelMethodsData.js */ "./src/components/ConfigurationPanel/ConfigurationPanelMethodsData.js");
let ConfigurationPanel = {
  props: ['config', 'localConfig', 'utils'],
  data () {    
    this.$i18n.locale = this.localConfig.locale
    return {
      classifier: 'DecisionTree',
      classifierList: ['DecisionTree']
    }
  },
  components: {
    DecisionTree: () => __webpack_require__.e(/*! import() | classifiers/DecisionTree */ "classifiers/DecisionTree").then(__webpack_require__.bind(null, /*! ./DecisionTree/DecisionTree.vue */ "./src/components/ConfigurationPanel/DecisionTree/DecisionTree.vue")),
  },
  watch: {
    'localConfig.locale'() {
      this.$i18n.locale = this.localConfig.locale;
    },
    'localConfig.classFieldName' () {
      this.localConfig.modelJSON = null
    }
  },
  computed: {
    headers () {
      return this.localConfig.headers.filter(header => header !== 'predict')
    },
    isModelBuilded () {
      return (this.localConfig.modelJSON !== null && this.localConfig.modelJSON !== '{}')
    }
  },
  mounted() {
    
  },
  methods: {}
}


Object(_ConfigurationPanelMethodsData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ConfigurationPanel)

/* harmony default export */ __webpack_exports__["default"] = (ConfigurationPanel);

/***/ }),

/***/ "./src/components/ConfigurationPanel/ConfigurationPanel.js?vue&type=script&lang=js&?c953":
/*!******************************************************************************************!*\
  !*** ./src/components/ConfigurationPanel/ConfigurationPanel.js?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ConfigurationPanel_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./ConfigurationPanel.js?vue&type=script&lang=js& */ "./src/components/ConfigurationPanel/ConfigurationPanel.js?vue&type=script&lang=js&?253d");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_ConfigurationPanel_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/ConfigurationPanel/ConfigurationPanel.less?vue&type=style&index=0&id=00331f62&lang=less&scoped=true&":
/*!*****************************************************************************************************************************!*\
  !*** ./src/components/ConfigurationPanel/ConfigurationPanel.less?vue&type=style&index=0&id=00331f62&lang=less&scoped=true& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_ConfigurationPanel_less_vue_type_style_index_0_id_00331f62_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader/dist/cjs.js?sourceMap!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/less-loader/dist/cjs.js??ref--1-2!./ConfigurationPanel.less?vue&type=style&index=0&id=00331f62&lang=less&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/ConfigurationPanel/ConfigurationPanel.less?vue&type=style&index=0&id=00331f62&lang=less&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_ConfigurationPanel_less_vue_type_style_index_0_id_00331f62_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_ConfigurationPanel_less_vue_type_style_index_0_id_00331f62_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_ConfigurationPanel_less_vue_type_style_index_0_id_00331f62_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_ConfigurationPanel_less_vue_type_style_index_0_id_00331f62_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/ConfigurationPanel/ConfigurationPanel.vue":
/*!******************************************************************!*\
  !*** ./src/components/ConfigurationPanel/ConfigurationPanel.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ConfigurationPanel_html_vue_type_template_id_00331f62_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConfigurationPanel.html?vue&type=template&id=00331f62&scoped=true& */ "./src/components/ConfigurationPanel/ConfigurationPanel.html?vue&type=template&id=00331f62&scoped=true&");
/* harmony import */ var _ConfigurationPanel_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConfigurationPanel.js?vue&type=script&lang=js& */ "./src/components/ConfigurationPanel/ConfigurationPanel.js?vue&type=script&lang=js&?c953");
/* empty/unused harmony star reexport *//* harmony import */ var _ConfigurationPanel_less_vue_type_style_index_0_id_00331f62_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConfigurationPanel.less?vue&type=style&index=0&id=00331f62&lang=less&scoped=true& */ "./src/components/ConfigurationPanel/ConfigurationPanel.less?vue&type=style&index=0&id=00331f62&lang=less&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _ConfigurationPanel_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_D_3A_5Cxampp_5Chtdocs_5Cprojects_html5_5CHTML_Simple_Classifier_5Csrc_5Ccomponents_5CConfigurationPanel_5CConfigurationPanel_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ConfigurationPanel.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=D%3A%5Cxampp%5Chtdocs%5Cprojects-html5%5CHTML-Simple-Classifier%5Csrc%5Ccomponents%5CConfigurationPanel%5CConfigurationPanel.vue&lang=yaml */ "./src/components/ConfigurationPanel/ConfigurationPanel.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=D%3A%5Cxampp%5Chtdocs%5Cprojects-html5%5CHTML-Simple-Classifier%5Csrc%5Ccomponents%5CConfigurationPanel%5CConfigurationPanel.vue&lang=yaml");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ConfigurationPanel_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ConfigurationPanel_html_vue_type_template_id_00331f62_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ConfigurationPanel_html_vue_type_template_id_00331f62_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "00331f62",
  null
  
)

/* custom blocks */

if (typeof _ConfigurationPanel_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_D_3A_5Cxampp_5Chtdocs_5Cprojects_html5_5CHTML_Simple_Classifier_5Csrc_5Ccomponents_5CConfigurationPanel_5CConfigurationPanel_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_4__["default"] === 'function') Object(_ConfigurationPanel_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_D_3A_5Cxampp_5Chtdocs_5Cprojects_html5_5CHTML_Simple_Classifier_5Csrc_5Ccomponents_5CConfigurationPanel_5CConfigurationPanel_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_4__["default"])(component)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/ConfigurationPanel/ConfigurationPanel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/ConfigurationPanel/ConfigurationPanel.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=D%3A%5Cxampp%5Chtdocs%5Cprojects-html5%5CHTML-Simple-Classifier%5Csrc%5Ccomponents%5CConfigurationPanel%5CConfigurationPanel.vue&lang=yaml":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./src/components/ConfigurationPanel/ConfigurationPanel.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=D%3A%5Cxampp%5Chtdocs%5Cprojects-html5%5CHTML-Simple-Classifier%5Csrc%5Ccomponents%5CConfigurationPanel%5CConfigurationPanel.vue&lang=yaml ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_kazupon_vue_i18n_loader_lib_index_js_ConfigurationPanel_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_D_3A_5Cxampp_5Chtdocs_5Cprojects_html5_5CHTML_Simple_Classifier_5Csrc_5Ccomponents_5CConfigurationPanel_5CConfigurationPanel_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@kazupon/vue-i18n-loader/lib!./ConfigurationPanel.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=D%3A%5Cxampp%5Chtdocs%5Cprojects-html5%5CHTML-Simple-Classifier%5Csrc%5Ccomponents%5CConfigurationPanel%5CConfigurationPanel.vue&lang=yaml */ "./node_modules/@kazupon/vue-i18n-loader/lib/index.js!./src/components/ConfigurationPanel/ConfigurationPanel.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=D%3A%5Cxampp%5Chtdocs%5Cprojects-html5%5CHTML-Simple-Classifier%5Csrc%5Ccomponents%5CConfigurationPanel%5CConfigurationPanel.vue&lang=yaml");
/* harmony import */ var _node_modules_kazupon_vue_i18n_loader_lib_index_js_ConfigurationPanel_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_D_3A_5Cxampp_5Chtdocs_5Cprojects_html5_5CHTML_Simple_Classifier_5Csrc_5Ccomponents_5CConfigurationPanel_5CConfigurationPanel_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_kazupon_vue_i18n_loader_lib_index_js_ConfigurationPanel_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_D_3A_5Cxampp_5Chtdocs_5Cprojects_html5_5CHTML_Simple_Classifier_5Csrc_5Ccomponents_5CConfigurationPanel_5CConfigurationPanel_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_kazupon_vue_i18n_loader_lib_index_js_ConfigurationPanel_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_D_3A_5Cxampp_5Chtdocs_5Cprojects_html5_5CHTML_Simple_Classifier_5Csrc_5Ccomponents_5CConfigurationPanel_5CConfigurationPanel_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_kazupon_vue_i18n_loader_lib_index_js_ConfigurationPanel_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_D_3A_5Cxampp_5Chtdocs_5Cprojects_html5_5CHTML_Simple_Classifier_5Csrc_5Ccomponents_5CConfigurationPanel_5CConfigurationPanel_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_kazupon_vue_i18n_loader_lib_index_js_ConfigurationPanel_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_D_3A_5Cxampp_5Chtdocs_5Cprojects_html5_5CHTML_Simple_Classifier_5Csrc_5Ccomponents_5CConfigurationPanel_5CConfigurationPanel_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/ConfigurationPanel/ConfigurationPanelMethodsData.js":
/*!****************************************************************************!*\
  !*** ./src/components/ConfigurationPanel/ConfigurationPanelMethodsData.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (ConfigurationPanel) {
  ConfigurationPanel.methods.getJSONData = async function () {
    let headers = this.localConfig.headers
    let trainSet = []
    let testSet = []
    let testSetRowIndexes = []
    
    for (let len = this.localConfig.data.length - 1, i = len; i > 0; i--) {
      let rowIndex = (len - i)
      let row = this.localConfig.data[rowIndex]
//      if (row.filter(cell => cell !== null).length === 0
//              || row.filter(cell => cell !== undefined).length === 0) {
//        continue
//      }
      
      let trainJSON = {}
      let testJSON = {}
      
      let isTrainingSet = true
      
      // 先確認是否有已經預測的資料，如果已經有了，那就略過預測
      if (this.isModelBuilded === false || this.utils.DataUtils.isMissingData(row[1])) {

        headers.forEach((header, i) => {
          if (header === 'predict') {
            return false
          }

          if (i === 0 && this.utils.DataUtils.isMissingData(row[i])) {
            isTrainingSet = false
            trainJSON[header] = row[i]
            return false
          }
          else if (i > 1 && 
                  (this.utils.DataUtils.isMissingData(row[i]))) {
            // 缺失值
            return false
          }

          trainJSON[header] = row[i]
          if (header !== this.localConfig.classFieldName) {
            testJSON[header] = row[i]
          }

        })
      }
      else {
        // 如果已經有預測資料
        isTrainingSet = this.utils.DataUtils.isMissingData(row[0])
        trainJSON['predict'] = row[1]
        testJSON['predict'] = row[1]
      }
      
      if (isTrainingSet) {
        trainSet.push(trainJSON)
        testSet.push(testJSON)
      }
      else {
        testSet.push(testJSON)
        testSetRowIndexes.push(rowIndex)
      }
      
      if (i % 10 === 5) {
        await this.utils.AsyncUtils.sleep(0)
      }
    }
    
    return {
      trainSet,
      testSet,
      testSetRowIndexes
    }
  }
  
  ConfigurationPanel.methods.setPredictResults = async function (predictResults) {
    let data = this.localConfig.data
    for (let len = data.length - 1, i = len; i > 0; i--) {
      let index = (len - i)
      //let row = data[index]
      data[index][1] = predictResults[index]
      if (i % 10 === 5) {
        await this.utils.AsyncUtils.sleep(0)
      }
    }
    this.localConfig.data = this.localConfig.data.splice(0,0).concat(data)
    //console.log(data)
  }
});

/***/ })

}]);
//# sourceMappingURL=ConfigurationPanel.js.map