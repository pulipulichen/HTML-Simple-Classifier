(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["classifiers/KNearestNeighbors"],{

/***/ "./node_modules/@kazupon/vue-i18n-loader/lib/index.js!./src/components/ConfigurationPanel/KNearestNeighbors/KNearestNeighbors.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=%2Fvar%2Fhost%2Fmedia%2Fremovable%2FMicroSD%2FNetBeansProjects%2F%5Bhtml-api%5D%2FHTML-Simple-Classifier%2Fsrc%2Fcomponents%2FConfigurationPanel%2FKNearestNeighbors%2FKNearestNeighbors.vue&lang=yaml":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@kazupon/vue-i18n-loader/lib!./src/components/ConfigurationPanel/KNearestNeighbors/KNearestNeighbors.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=%2Fvar%2Fhost%2Fmedia%2Fremovable%2FMicroSD%2FNetBeansProjects%2F%5Bhtml-api%5D%2FHTML-Simple-Classifier%2Fsrc%2Fcomponents%2FConfigurationPanel%2FKNearestNeighbors%2FKNearestNeighbors.vue&lang=yaml ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (Component) {
  Component.options.__i18n = Component.options.__i18n || []
  Component.options.__i18n.push('{"en":{"TEST_MESSAGE":"Test Message"},"zh-TW":{"TEST_MESSAGE":"測試訊息"}}')
  delete Component.options._Ctor
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/ConfigurationPanel/KNearestNeighbors/KNearestNeighbors.less?vue&type=style&index=0&id=1295245c&lang=less&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js??ref--1-2!./src/components/ConfigurationPanel/KNearestNeighbors/KNearestNeighbors.less?vue&type=style&index=0&id=1295245c&lang=less&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "", "",{"version":3,"sources":[],"names":[],"mappings":"","file":"KNearestNeighbors.less"}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./src/components/ConfigurationPanel/KNearestNeighbors/KNearestNeighbors.html?vue&type=template&id=1295245c&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./src/components/ConfigurationPanel/KNearestNeighbors/KNearestNeighbors.html?vue&type=template&id=1295245c&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "DecisionTree" }, [
    _c("div", { staticClass: "ui field" }, [
      _c(
        "button",
        {
          staticClass: "ui primary fluid button",
          attrs: { type: "button" },
          on: { click: _vm.start }
        },
        [
          !_vm.isModelBuilded
            ? [
                _vm._v(
                  "\n        " +
                    _vm._s(_vm.$t("Build Model and Predict")) +
                    "\n      "
                )
              ]
            : _vm._e(),
          _vm._v(" "),
          _vm.isModelBuilded
            ? [_vm._v("\n        " + _vm._s(_vm.$t("Predict")) + "\n      ")]
            : _vm._e()
        ],
        2
      )
    ]),
    _vm._v(" "),
    _vm.isModelBuilded
      ? _c("div", { staticClass: "ui field" }, [
          _c(
            "button",
            {
              staticClass: "ui primary fluid button",
              attrs: { type: "button" },
              on: { click: _vm.showModel }
            },
            [_vm._v("\n      " + _vm._s(_vm.$t("Show Model")) + "\n    ")]
          )
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/ConfigurationPanel/KNearestNeighbors/KNearestNeighbors.less?vue&type=style&index=0&id=1295245c&lang=less&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js??ref--1-2!./src/components/ConfigurationPanel/KNearestNeighbors/KNearestNeighbors.less?vue&type=style&index=0&id=1295245c&lang=less&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js?sourceMap!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/less-loader/dist/cjs.js??ref--1-2!./KNearestNeighbors.less?vue&type=style&index=0&id=1295245c&lang=less&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/ConfigurationPanel/KNearestNeighbors/KNearestNeighbors.less?vue&type=style&index=0&id=1295245c&lang=less&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("220033e5", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/components/ConfigurationPanel/KNearestNeighbors/KNearestNeighbors.html?vue&type=template&id=1295245c&scoped=true&":
/*!*******************************************************************************************************************************!*\
  !*** ./src/components/ConfigurationPanel/KNearestNeighbors/KNearestNeighbors.html?vue&type=template&id=1295245c&scoped=true& ***!
  \*******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_KNearestNeighbors_html_vue_type_template_id_1295245c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./KNearestNeighbors.html?vue&type=template&id=1295245c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./src/components/ConfigurationPanel/KNearestNeighbors/KNearestNeighbors.html?vue&type=template&id=1295245c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_KNearestNeighbors_html_vue_type_template_id_1295245c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_KNearestNeighbors_html_vue_type_template_id_1295245c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/ConfigurationPanel/KNearestNeighbors/KNearestNeighbors.js?vue&type=script&lang=js&?decd":
/*!***********************************************************************************************************!*\
  !*** ./src/components/ConfigurationPanel/KNearestNeighbors/KNearestNeighbors.js?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _KNearestNeighborsMethodsBuild_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KNearestNeighborsMethodsBuild.js */ "./src/components/ConfigurationPanel/KNearestNeighbors/KNearestNeighborsMethodsBuild.js");
/* harmony import */ var _KNearestNeighborsMethodsShow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KNearestNeighborsMethodsShow.js */ "./src/components/ConfigurationPanel/KNearestNeighbors/KNearestNeighborsMethodsShow.js");
/* harmony import */ var _KNearestNeighborsMethodsTest_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./KNearestNeighborsMethodsTest.js */ "./src/components/ConfigurationPanel/KNearestNeighbors/KNearestNeighborsMethodsTest.js");
let KNearestNeighbors = {
  props: ['config', 'localConfig', 'utils'],
  data () {    
    this.$i18n.locale = this.localConfig.locale
    return {
      model: null,
      dataToShow: null,
      unknownsPrediction: []
    }
  },
  watch: {
    'localConfig.locale'() {
      this.$i18n.locale = this.localConfig.locale;
    },
  },
  computed: {
    isModelBuilded () {
      return (this.model !== null)
    },
  },
  mounted() {
//    setTimeout(() => {
//      this.start()
//    }, 1000)

    //this.testKNN()
  },
  methods: {}
}


Object(_KNearestNeighborsMethodsBuild_js__WEBPACK_IMPORTED_MODULE_0__["default"])(KNearestNeighbors)


Object(_KNearestNeighborsMethodsShow_js__WEBPACK_IMPORTED_MODULE_1__["default"])(KNearestNeighbors)


Object(_KNearestNeighborsMethodsTest_js__WEBPACK_IMPORTED_MODULE_2__["default"])(KNearestNeighbors)

/* harmony default export */ __webpack_exports__["default"] = (KNearestNeighbors);

/***/ }),

/***/ "./src/components/ConfigurationPanel/KNearestNeighbors/KNearestNeighbors.js?vue&type=script&lang=js&?fa1d":
/*!***********************************************************************************************************!*\
  !*** ./src/components/ConfigurationPanel/KNearestNeighbors/KNearestNeighbors.js?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _KNearestNeighbors_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./KNearestNeighbors.js?vue&type=script&lang=js& */ "./src/components/ConfigurationPanel/KNearestNeighbors/KNearestNeighbors.js?vue&type=script&lang=js&?decd");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_KNearestNeighbors_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/ConfigurationPanel/KNearestNeighbors/KNearestNeighbors.less?vue&type=style&index=0&id=1295245c&lang=less&scoped=true&":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/components/ConfigurationPanel/KNearestNeighbors/KNearestNeighbors.less?vue&type=style&index=0&id=1295245c&lang=less&scoped=true& ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_KNearestNeighbors_less_vue_type_style_index_0_id_1295245c_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader/dist/cjs.js?sourceMap!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/less-loader/dist/cjs.js??ref--1-2!./KNearestNeighbors.less?vue&type=style&index=0&id=1295245c&lang=less&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/ConfigurationPanel/KNearestNeighbors/KNearestNeighbors.less?vue&type=style&index=0&id=1295245c&lang=less&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_KNearestNeighbors_less_vue_type_style_index_0_id_1295245c_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_KNearestNeighbors_less_vue_type_style_index_0_id_1295245c_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_KNearestNeighbors_less_vue_type_style_index_0_id_1295245c_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_KNearestNeighbors_less_vue_type_style_index_0_id_1295245c_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/ConfigurationPanel/KNearestNeighbors/KNearestNeighbors.vue":
/*!***********************************************************************************!*\
  !*** ./src/components/ConfigurationPanel/KNearestNeighbors/KNearestNeighbors.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _KNearestNeighbors_html_vue_type_template_id_1295245c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KNearestNeighbors.html?vue&type=template&id=1295245c&scoped=true& */ "./src/components/ConfigurationPanel/KNearestNeighbors/KNearestNeighbors.html?vue&type=template&id=1295245c&scoped=true&");
/* harmony import */ var _KNearestNeighbors_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KNearestNeighbors.js?vue&type=script&lang=js& */ "./src/components/ConfigurationPanel/KNearestNeighbors/KNearestNeighbors.js?vue&type=script&lang=js&?fa1d");
/* empty/unused harmony star reexport *//* harmony import */ var _KNearestNeighbors_less_vue_type_style_index_0_id_1295245c_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./KNearestNeighbors.less?vue&type=style&index=0&id=1295245c&lang=less&scoped=true& */ "./src/components/ConfigurationPanel/KNearestNeighbors/KNearestNeighbors.less?vue&type=style&index=0&id=1295245c&lang=less&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _KNearestNeighbors_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_2Fvar_2Fhost_2Fmedia_2Fremovable_2FMicroSD_2FNetBeansProjects_2F_5Bhtml_api_5D_2FHTML_Simple_Classifier_2Fsrc_2Fcomponents_2FConfigurationPanel_2FKNearestNeighbors_2FKNearestNeighbors_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./KNearestNeighbors.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=%2Fvar%2Fhost%2Fmedia%2Fremovable%2FMicroSD%2FNetBeansProjects%2F%5Bhtml-api%5D%2FHTML-Simple-Classifier%2Fsrc%2Fcomponents%2FConfigurationPanel%2FKNearestNeighbors%2FKNearestNeighbors.vue&lang=yaml */ "./src/components/ConfigurationPanel/KNearestNeighbors/KNearestNeighbors.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=%2Fvar%2Fhost%2Fmedia%2Fremovable%2FMicroSD%2FNetBeansProjects%2F%5Bhtml-api%5D%2FHTML-Simple-Classifier%2Fsrc%2Fcomponents%2FConfigurationPanel%2FKNearestNeighbors%2FKNearestNeighbors.vue&lang=yaml");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _KNearestNeighbors_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _KNearestNeighbors_html_vue_type_template_id_1295245c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _KNearestNeighbors_html_vue_type_template_id_1295245c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1295245c",
  null
  
)

/* custom blocks */

if (typeof _KNearestNeighbors_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_2Fvar_2Fhost_2Fmedia_2Fremovable_2FMicroSD_2FNetBeansProjects_2F_5Bhtml_api_5D_2FHTML_Simple_Classifier_2Fsrc_2Fcomponents_2FConfigurationPanel_2FKNearestNeighbors_2FKNearestNeighbors_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_4__["default"] === 'function') Object(_KNearestNeighbors_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_2Fvar_2Fhost_2Fmedia_2Fremovable_2FMicroSD_2FNetBeansProjects_2F_5Bhtml_api_5D_2FHTML_Simple_Classifier_2Fsrc_2Fcomponents_2FConfigurationPanel_2FKNearestNeighbors_2FKNearestNeighbors_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_4__["default"])(component)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/ConfigurationPanel/KNearestNeighbors/KNearestNeighbors.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/ConfigurationPanel/KNearestNeighbors/KNearestNeighbors.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=%2Fvar%2Fhost%2Fmedia%2Fremovable%2FMicroSD%2FNetBeansProjects%2F%5Bhtml-api%5D%2FHTML-Simple-Classifier%2Fsrc%2Fcomponents%2FConfigurationPanel%2FKNearestNeighbors%2FKNearestNeighbors.vue&lang=yaml":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./src/components/ConfigurationPanel/KNearestNeighbors/KNearestNeighbors.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=%2Fvar%2Fhost%2Fmedia%2Fremovable%2FMicroSD%2FNetBeansProjects%2F%5Bhtml-api%5D%2FHTML-Simple-Classifier%2Fsrc%2Fcomponents%2FConfigurationPanel%2FKNearestNeighbors%2FKNearestNeighbors.vue&lang=yaml ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_kazupon_vue_i18n_loader_lib_index_js_KNearestNeighbors_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_2Fvar_2Fhost_2Fmedia_2Fremovable_2FMicroSD_2FNetBeansProjects_2F_5Bhtml_api_5D_2FHTML_Simple_Classifier_2Fsrc_2Fcomponents_2FConfigurationPanel_2FKNearestNeighbors_2FKNearestNeighbors_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/@kazupon/vue-i18n-loader/lib!./KNearestNeighbors.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=%2Fvar%2Fhost%2Fmedia%2Fremovable%2FMicroSD%2FNetBeansProjects%2F%5Bhtml-api%5D%2FHTML-Simple-Classifier%2Fsrc%2Fcomponents%2FConfigurationPanel%2FKNearestNeighbors%2FKNearestNeighbors.vue&lang=yaml */ "./node_modules/@kazupon/vue-i18n-loader/lib/index.js!./src/components/ConfigurationPanel/KNearestNeighbors/KNearestNeighbors.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=%2Fvar%2Fhost%2Fmedia%2Fremovable%2FMicroSD%2FNetBeansProjects%2F%5Bhtml-api%5D%2FHTML-Simple-Classifier%2Fsrc%2Fcomponents%2FConfigurationPanel%2FKNearestNeighbors%2FKNearestNeighbors.vue&lang=yaml");
/* harmony import */ var _node_modules_kazupon_vue_i18n_loader_lib_index_js_KNearestNeighbors_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_2Fvar_2Fhost_2Fmedia_2Fremovable_2FMicroSD_2FNetBeansProjects_2F_5Bhtml_api_5D_2FHTML_Simple_Classifier_2Fsrc_2Fcomponents_2FConfigurationPanel_2FKNearestNeighbors_2FKNearestNeighbors_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_kazupon_vue_i18n_loader_lib_index_js_KNearestNeighbors_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_2Fvar_2Fhost_2Fmedia_2Fremovable_2FMicroSD_2FNetBeansProjects_2F_5Bhtml_api_5D_2FHTML_Simple_Classifier_2Fsrc_2Fcomponents_2FConfigurationPanel_2FKNearestNeighbors_2FKNearestNeighbors_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_kazupon_vue_i18n_loader_lib_index_js_KNearestNeighbors_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_2Fvar_2Fhost_2Fmedia_2Fremovable_2FMicroSD_2FNetBeansProjects_2F_5Bhtml_api_5D_2FHTML_Simple_Classifier_2Fsrc_2Fcomponents_2FConfigurationPanel_2FKNearestNeighbors_2FKNearestNeighbors_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_kazupon_vue_i18n_loader_lib_index_js_KNearestNeighbors_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_2Fvar_2Fhost_2Fmedia_2Fremovable_2FMicroSD_2FNetBeansProjects_2F_5Bhtml_api_5D_2FHTML_Simple_Classifier_2Fsrc_2Fcomponents_2FConfigurationPanel_2FKNearestNeighbors_2FKNearestNeighbors_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_kazupon_vue_i18n_loader_lib_index_js_KNearestNeighbors_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_2Fvar_2Fhost_2Fmedia_2Fremovable_2FMicroSD_2FNetBeansProjects_2F_5Bhtml_api_5D_2FHTML_Simple_Classifier_2Fsrc_2Fcomponents_2FConfigurationPanel_2FKNearestNeighbors_2FKNearestNeighbors_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/ConfigurationPanel/KNearestNeighbors/KNearestNeighborsMethodsBuild.js":
/*!**********************************************************************************************!*\
  !*** ./src/components/ConfigurationPanel/KNearestNeighbors/KNearestNeighborsMethodsBuild.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ml_knn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ml-knn */ "./node_modules/ml-knn/src/index.js");


/* harmony default export */ __webpack_exports__["default"] = (function (KNearestNeighbors) {
  KNearestNeighbors.methods.startPredict = async function () {
    return await this.start()
  }
    
  KNearestNeighbors.methods.start = async function () {
    //this.localConfig.modelJSON = null
    this.config.loadingProgress = 0
    console.log('start', 1)
    
    this.localConfig.modelJSON = null
    this.localConfig.modelEvaluations = []
    let data = await this.$parent.getVectorData()
    
    this.dataToShow = data
    
    if (data.trainSetClasses.length === 0) {
      console.error('No trainSetClasses')
      throw Error('No trainSetClasses')
    }
    
    console.log(data)
    //return false
    this.config.loadingProgress = 0.25
    
    console.log('start', 2)
    //console.log(data.trainSet[0])
    
    console.log('start', 3)
    if (!this.localConfig.modelJSON) {
      this.model = this.buildModel(data)
      this.localConfig.modelJSON = this.model
    }
    else {
      this.model = ml_knn__WEBPACK_IMPORTED_MODULE_0__["default"].load(this.localConfig.modelJSON)
    }

    //console.log(this.model.toJSON())

    //console.log(this.model)
    console.log('start', 5)

    this.config.loadingProgress = 0.5
    
    console.log('start', 9)
    //console.log(data.testSet)
    let predictVector = await this.getPredictResultsVector(this.model, data)
    let predictResults = await this.getPredictResultsValue(data, predictVector)
    console.log(predictVector)
    if (predictResults[0] === 'undefined') {
      this.config.loadingProgress = 1
      console.error('predict is undefined')
      return false
    }
    
    console.log('start', 10)
    this.config.loadingProgress = 0.75
    
    if (this.$parent.hasModelEvaluated === false) {
      let testSetRowIndexes = data.testSetRowIndexes
      this.unknownsPrediction = []
      let predictVectorToEvalute = predictVector.filter((value, i) => {
        let notMatch = (testSetRowIndexes.indexOf(i) === -1)
        
        if (notMatch === false) {
          this.unknownsPrediction.push(value)
        }
        
        return notMatch
      })
      this.evaluationResults(data.trainSetClasses, predictVectorToEvalute)
    }
    
    //console.log(predictResults)
    this.$parent.setPredictResults(predictResults)
    
    this.config.loadingProgress = 0.9
    
    if (this.$parent.isModelWindowOpened) {
      this.showModel()
    }
    
    this.config.loadingProgress = 1
  }
  
  KNearestNeighbors.methods.buildModel = function (data){
    let testSetRowIndexes = data.testSetRowIndexes
    let dataset = data.testSet.filter((row, i) => {
      return (testSetRowIndexes.indexOf(i) === -1)
    })
    console.log(dataset)
    let predictions = data.trainSetClasses
    
    if (dataset.length !== predictions.length) {
      console.error('length is not match')
    }
    
    return new ml_knn__WEBPACK_IMPORTED_MODULE_0__["default"](dataset, predictions)
  }
  
  KNearestNeighbors.methods.getPredictResultsVector = async function (model, data) {
    let testSet = data.testSet
    let resultVector = model.predict(testSet);
    return resultVector
  }
  
  KNearestNeighbors.methods.getPredictResultsValue = async function (data, resultVector) {
    let trainSetClassesDict = data.trainSetClassesDict
    //console.log(trainSetClassesDict)
    return resultVector.map(index => {
      return trainSetClassesDict[index]
    })
  }
  
  KNearestNeighbors.methods.evaluationResults = async function (train, predict) {
    
    this.$parent.resetModelEvaluation()
    console.log(train)
    console.log(predict)
    //console.log(data.trainSetClasses.length, getTrainSetPredicts.length, data.testSetRowIndexes.length)

    let accuracy = await this.$parent.calcAccuracy(train, predict)
    //console.log(accuracy)
    let accuracyInfo = {
      name: 'accuracy',
      type: 'percent',
      value: accuracy
    }
    
    //console.log(accuracyInfo)
    this.localConfig.modelEvaluations.push(accuracyInfo)
  }
});

/***/ }),

/***/ "./src/components/ConfigurationPanel/KNearestNeighbors/KNearestNeighborsMethodsShow.js":
/*!*********************************************************************************************!*\
  !*** ./src/components/ConfigurationPanel/KNearestNeighbors/KNearestNeighborsMethodsShow.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ml_distance_euclidean__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ml-distance-euclidean */ "./node_modules/ml-distance-euclidean/lib-es6/euclidean.js");

//const euclidean = MLDistanceEuclidean.euclidean

/* harmony default export */ __webpack_exports__["default"] = (function (KNearestNeighbors) {
  KNearestNeighbors.methods.showModel = async function () {
    if (!this.model) {
      await this.start()
      //console.error('no this.model')
      //return false
    }
    
    // --------------------------
    //console.log(this.dataToShow)
    let unknownSetRowIndex = this.dataToShow.testSetRowIndexes
    
    let neighbors = []
    let unknowns = []
    //console.log(unknownSetRowIndex)
    
    this.dataToShow.testSet.forEach((set, i) => {
      if (unknownSetRowIndex.indexOf(i) === -1) {
        neighbors.push(set)
      }
      else {
        unknowns.push(set)
      }
    })
    
    if (neighbors.length === 0) {
      neighbors = unknowns
    }
    
    //console.log(neighbors)
    //console.log(unknowns)
    // --------------------------
    let distanceMatrix = unknowns.map(unknownFeature => {
      let maxDistance = null
      let distances = neighbors.map(neighbor => {
        let distance = Object(ml_distance_euclidean__WEBPACK_IMPORTED_MODULE_0__["euclidean"])(unknownFeature, neighbor)
        if (maxDistance === null || distance > maxDistance) {
          maxDistance = distance
        }
        
        return distance
      })
      
      distances = distances.map(d => {
        return ((maxDistance - d) / maxDistance)
      })
      
      return distances
    })
    
    //console.log(distanceMatrix)
    
    let colorMatrix = distanceMatrix.map(unknown => {
      return unknown.map(d => {
        return heatMapColorforValue(d)
      })
    })
    
    //console.log(colorMatrix)
    
    // --------------------------
    
    let tableHeader = `<thead>
  <tr>
    <th rowspan="2" colspan="2" valign="bottom">${this.$t('Unknowns')}</th>
    <th colspan="${colorMatrix[0].length}">${this.$t('Neighbors')}</th>
  </tr>
  <tr>${colorMatrix[0].map((value, i) => `<th>${i+1}</th>`).join('')}</tr>
</thead>`
    
    let trainSetClassesDict = this.dataToShow.trainSetClassesDict
    
    let tableBody = `<tbody>
${colorMatrix.map((row, i) => {
  return `<tr>
  <th>${unknownSetRowIndex[i]}</th>
  <th>${trainSetClassesDict[this.unknownsPrediction[i]]}</th>
  ${row.map((color, j) => {
    let d = distanceMatrix[i][j]
    let dText = d
    dText = Math.round(dText * 100) + '%'
    
    if (d > 0.5) {
      return `<td style="text-align:center;background-color: ${color}; color: white">${dText}</td>`
    }
    else {
      return `<td style="text-align:center;background-color: ${color}">${dText}</td>`
    }
  }).join('')}
</tr>`
}).join('\n')}
</tbody>`
    
    // --------------------------
    
    let bodyHTML = `<table border="1" align="center">
    ${tableHeader}
    ${tableBody}
</table>`
    bodyHTML = `<div class="tree">${bodyHTML}</div>`
    //console.error('[TODO]')
    //console.log()
    let title = this.$t('KNN') + ` (` + (new Date()).mmddhhmm() + ')'
    
    if (this.$parent.isModelWindowOpened === false) {
      this.$parent.modelWindow = this.utils.PopupUtils.open({
        windowName: 'KNNModelShow',
        cssURL: this.modelCSSURL,
        bodyHTML,
        size: 'right',
        title
      })
    }
    else {
      this.$parent.modelWindow.setHTML(bodyHTML)
      this.$parent.modelWindow.setTitle(title)
    }
    
    this.$parent.modelWindow.scrollToTop()
    this.$parent.modelWindow.scrollToCenter()
  }
  
  /**
   * https://stackoverflow.com/a/27263918/6645399
   */
  function heatMapColorforValue(value){
    //var h = (1.0 - value) * 240
    //return "hsl(" + h + ", 100%, 50%)";
    return `rgba(22, 160, 133, ${value})`
    // rgb(22, 160, 133)
  }
});

/***/ }),

/***/ "./src/components/ConfigurationPanel/KNearestNeighbors/KNearestNeighborsMethodsTest.js":
/*!*********************************************************************************************!*\
  !*** ./src/components/ConfigurationPanel/KNearestNeighbors/KNearestNeighborsMethodsTest.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ml_knn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ml-knn */ "./node_modules/ml-knn/src/index.js");

// https://www.npmjs.com/package/ml-knn

/* harmony default export */ __webpack_exports__["default"] = (function (KNearestNeighbors) {
  KNearestNeighbors.methods.testKNN = async function () {
    var dataset = [
      [0, 0, 0],
      [0, 1, 1],
      [1, 1, 0],
      [2, 2, 2],
      [1, 2, 2],
      [2, 1, 2]
    ];
    var predictions = [0, 0, 0, 1, 1, 1];
    var knn = new ml_knn__WEBPACK_IMPORTED_MODULE_0__["default"](dataset, predictions);
    
    var dataset = [[0, 0, 0], [2, 2, 2]];
 
    var ans = knn.predict(dataset);
    
    console.log(ans)
  }
});

/***/ })

}]);
//# sourceMappingURL=KNearestNeighbors.js.map