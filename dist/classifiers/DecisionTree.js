(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["classifiers/DecisionTree"],{

/***/ "./node_modules/@kazupon/vue-i18n-loader/lib/index.js!./src/components/ConfigurationPanel/DecisionTree/DecisionTree.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=D%3A%5Cxampp%5Chtdocs%5Cprojects-html5%5CHTML-Simple-Classifier%5Csrc%5Ccomponents%5CConfigurationPanel%5CDecisionTree%5CDecisionTree.vue&lang=yaml":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@kazupon/vue-i18n-loader/lib!./src/components/ConfigurationPanel/DecisionTree/DecisionTree.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=D%3A%5Cxampp%5Chtdocs%5Cprojects-html5%5CHTML-Simple-Classifier%5Csrc%5Ccomponents%5CConfigurationPanel%5CDecisionTree%5CDecisionTree.vue&lang=yaml ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (Component) {
  Component.options.__i18n = Component.options.__i18n || []
  Component.options.__i18n.push('{"en":{"TEST_MESSAGE":"Test Message"},"zh-TW":{"TEST_MESSAGE":"測試訊息"}}')
  delete Component.options._Ctor
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/less-loader/dist/cjs.js?!./src/components/ConfigurationPanel/DecisionTree/vendors/decision-tree/style.less":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/less-loader/dist/cjs.js??ref--1-2!./src/components/ConfigurationPanel/DecisionTree/vendors/decision-tree/style.less ***!
  \******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/*\n Transforming nested lists to pretty tree\n \n <div class=\"tree\">\n    <ul>\n        <li>\n            <ul>\n            ...\n            </ul>\n        </li>\n        ...\n    </ul>\n </div>\n \nSource: http://thecodeplayer.com/walkthrough/css3-family-tree\n\nSome other advices about displaying trees: http://stackoverflow.com/questions/1695115/how-do-i-draw-the-lines-of-a-family-tree-using-html-css\n*/\n.decision-tree-container {\n  /*We will use ::before and ::after to draw the connectors*/\n  /*We need to remove left-right connectors from elements without\n   any siblings*/\n  /*Remove space from the top of single children*/\n  /*Remove left connector from first child and\n   right connector from last child*/\n  /*Adding back the vertical connector to the last nodes*/\n  /*Time to add downward connectors from parents*/\n  /*Time for some hover effects*/\n  /*We will apply the hover effect the the lineage of the element also*/\n  /*Connector styles on hover*/\n  /*Thats all. I hope you enjoyed it.\n   Thanks :)*/\n}\n.decision-tree-container * {\n  margin: 0;\n  padding: 0;\n}\n.decision-tree-container .tree ul {\n  padding-top: 20px;\n  position: relative;\n  transition: all 0.5s;\n  -webkit-transition: all 0.5s;\n  -moz-transition: all 0.5s;\n}\n.decision-tree-container .tree li {\n  white-space: nowrap;\n  float: left;\n  text-align: center;\n  list-style-type: none;\n  position: relative;\n  padding: 20px 5px 0 5px;\n  transition: all 0.5s;\n  -webkit-transition: all 0.5s;\n  -moz-transition: all 0.5s;\n}\n.decision-tree-container .tree li::before,\n.decision-tree-container .tree li::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  right: 50%;\n  border-top: 1px solid #ccc;\n  width: 50%;\n  height: 20px;\n}\n.decision-tree-container .tree li::after {\n  right: auto;\n  left: 50%;\n  border-left: 1px solid #ccc;\n}\n.decision-tree-container .tree li:only-child::after,\n.decision-tree-container .tree li:only-child::before {\n  display: none;\n}\n.decision-tree-container .tree li:only-child {\n  padding-top: 0;\n}\n.decision-tree-container .tree li:first-child::before,\n.decision-tree-container .tree li:last-child::after {\n  border: 0 none;\n}\n.decision-tree-container .tree li:last-child::before {\n  border-right: 1px solid #ccc;\n  border-radius: 0 5px 0 0;\n  -webkit-border-radius: 0 5px 0 0;\n  -moz-border-radius: 0 5px 0 0;\n}\n.decision-tree-container .tree li:first-child::after {\n  border-radius: 5px 0 0 0;\n  -webkit-border-radius: 5px 0 0 0;\n  -moz-border-radius: 5px 0 0 0;\n}\n.decision-tree-container .tree ul ul::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 50%;\n  border-left: 1px solid #ccc;\n  width: 0;\n  height: 20px;\n}\n.decision-tree-container .tree li a {\n  border: 1px solid #ccc;\n  padding: 5px 10px;\n  text-decoration: none;\n  color: #666;\n  font-family: arial, verdana, tahoma;\n  font-size: 11px;\n  display: inline-block;\n  border-radius: 5px;\n  -webkit-border-radius: 5px;\n  -moz-border-radius: 5px;\n  transition: all 0.5s;\n  -webkit-transition: all 0.5s;\n  -moz-transition: all 0.5s;\n}\n.decision-tree-container .tree li a:hover,\n.decision-tree-container .tree li a:hover + ul li a {\n  background: #c8e4f8;\n  color: #000;\n  border: 1px solid #94a0b4;\n}\n.decision-tree-container .tree li a:hover + ul li::after,\n.decision-tree-container .tree li a:hover + ul li::before,\n.decision-tree-container .tree li a:hover + ul::before,\n.decision-tree-container .tree li a:hover + ul ul::before {\n  border-color: #94a0b4;\n}\n", "",{"version":3,"sources":["style.less","D:/xampp/htdocs/projects-html5/HTML-Simple-Classifier/src/components/ConfigurationPanel/DecisionTree/vendors/decision-tree/style.less"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;CAiBC;ACED;EDAE,0DAA0D;EAC1D;gBACc;EACd,+CAA+C;EAC/C;mCACiC;EACjC,uDAAuD;EACvD,+CAA+C;EAC/C,8BAA8B;EAC9B,qEAAqE;EACrE,4BAA4B;EAC5B;aACW;AACb;ACbA;EAGM,SAAA;EACA,UAAA;ADaN;ACjBA;EAQI,iBAAA;EACE,kBAAA;EAEF,oBAAA;EACA,4BAAA;EACA,yBAAA;ADWJ;ACxBA;EAiBM,mBAAA;EACF,WAAA;EACE,kBAAA;EACF,qBAAA;EACA,kBAAA;EACA,uBAAA;EAEA,oBAAA;EACA,4BAAA;EACA,yBAAA;ADSJ;ACnCA;;EAgCI,WAAA;EACA,kBAAA;EACE,MAAA;EACA,UAAA;EACF,0BAAA;EACA,UAAA;EACE,YAAA;ADON;AC7CA;EAyCI,WAAA;EACE,SAAA;EACF,2BAAA;ADOJ;AClDA;;EAiDI,aAAA;ADKJ;ACtDA;EAsDM,cAAA;ADGN;ACzDA;;EA4DI,cAAA;ADCJ;AC7DA;EAgEI,4BAAA;EACA,wBAAA;EACA,gCAAA;EACA,6BAAA;ADAJ;ACnEA;EAsEI,wBAAA;EACA,gCAAA;EACA,6BAAA;ADAJ;ACxEA;EA6EI,WAAA;EACA,kBAAA;EACE,MAAA;EACA,SAAA;EACF,2BAAA;EACA,QAAA;EACE,YAAA;ADFN;ACjFA;EAuFI,sBAAA;EACA,iBAAA;EACA,qBAAA;EACA,WAAA;EACA,mCAAA;EACA,eAAA;EACA,qBAAA;EAEA,kBAAA;EACA,0BAAA;EACA,uBAAA;EAEA,oBAAA;EACA,4BAAA;EACA,yBAAA;ADLJ;AChGA;;EA2GI,mBAAA;EACE,WAAA;EACA,yBAAA;ADPN;ACtGA;;;;EAoHI,qBAAA;ADRJ","file":"style.less","sourcesContent":["/*\n Transforming nested lists to pretty tree\n \n <div class=\"tree\">\n    <ul>\n        <li>\n            <ul>\n            ...\n            </ul>\n        </li>\n        ...\n    </ul>\n </div>\n \nSource: http://thecodeplayer.com/walkthrough/css3-family-tree\n\nSome other advices about displaying trees: http://stackoverflow.com/questions/1695115/how-do-i-draw-the-lines-of-a-family-tree-using-html-css\n*/\n.decision-tree-container {\n  /*We will use ::before and ::after to draw the connectors*/\n  /*We need to remove left-right connectors from elements without\n   any siblings*/\n  /*Remove space from the top of single children*/\n  /*Remove left connector from first child and\n   right connector from last child*/\n  /*Adding back the vertical connector to the last nodes*/\n  /*Time to add downward connectors from parents*/\n  /*Time for some hover effects*/\n  /*We will apply the hover effect the the lineage of the element also*/\n  /*Connector styles on hover*/\n  /*Thats all. I hope you enjoyed it.\n   Thanks :)*/\n}\n.decision-tree-container * {\n  margin: 0;\n  padding: 0;\n}\n.decision-tree-container .tree ul {\n  padding-top: 20px;\n  position: relative;\n  transition: all 0.5s;\n  -webkit-transition: all 0.5s;\n  -moz-transition: all 0.5s;\n}\n.decision-tree-container .tree li {\n  white-space: nowrap;\n  float: left;\n  text-align: center;\n  list-style-type: none;\n  position: relative;\n  padding: 20px 5px 0 5px;\n  transition: all 0.5s;\n  -webkit-transition: all 0.5s;\n  -moz-transition: all 0.5s;\n}\n.decision-tree-container .tree li::before,\n.decision-tree-container .tree li::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  right: 50%;\n  border-top: 1px solid #ccc;\n  width: 50%;\n  height: 20px;\n}\n.decision-tree-container .tree li::after {\n  right: auto;\n  left: 50%;\n  border-left: 1px solid #ccc;\n}\n.decision-tree-container .tree li:only-child::after,\n.decision-tree-container .tree li:only-child::before {\n  display: none;\n}\n.decision-tree-container .tree li:only-child {\n  padding-top: 0;\n}\n.decision-tree-container .tree li:first-child::before,\n.decision-tree-container .tree li:last-child::after {\n  border: 0 none;\n}\n.decision-tree-container .tree li:last-child::before {\n  border-right: 1px solid #ccc;\n  border-radius: 0 5px 0 0;\n  -webkit-border-radius: 0 5px 0 0;\n  -moz-border-radius: 0 5px 0 0;\n}\n.decision-tree-container .tree li:first-child::after {\n  border-radius: 5px 0 0 0;\n  -webkit-border-radius: 5px 0 0 0;\n  -moz-border-radius: 5px 0 0 0;\n}\n.decision-tree-container .tree ul ul::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 50%;\n  border-left: 1px solid #ccc;\n  width: 0;\n  height: 20px;\n}\n.decision-tree-container .tree li a {\n  border: 1px solid #ccc;\n  padding: 5px 10px;\n  text-decoration: none;\n  color: #666;\n  font-family: arial, verdana, tahoma;\n  font-size: 11px;\n  display: inline-block;\n  border-radius: 5px;\n  -webkit-border-radius: 5px;\n  -moz-border-radius: 5px;\n  transition: all 0.5s;\n  -webkit-transition: all 0.5s;\n  -moz-transition: all 0.5s;\n}\n.decision-tree-container .tree li a:hover,\n.decision-tree-container .tree li a:hover + ul li a {\n  background: #c8e4f8;\n  color: #000;\n  border: 1px solid #94a0b4;\n}\n.decision-tree-container .tree li a:hover + ul li::after,\n.decision-tree-container .tree li a:hover + ul li::before,\n.decision-tree-container .tree li a:hover + ul::before,\n.decision-tree-container .tree li a:hover + ul ul::before {\n  border-color: #94a0b4;\n}\n","/*\n Transforming nested lists to pretty tree\n \n <div class=\"tree\">\n    <ul>\n        <li>\n            <ul>\n            ...\n            </ul>\n        </li>\n        ...\n    </ul>\n </div>\n \nSource: http://thecodeplayer.com/walkthrough/css3-family-tree\n\nSome other advices about displaying trees: http://stackoverflow.com/questions/1695115/how-do-i-draw-the-lines-of-a-family-tree-using-html-css\n*/\n\n.decision-tree-container {\n  \n  * {\n      margin: 0;\n      padding: 0;\n  }\n\n  .tree ul {\n    padding-top: 20px;\n      position: relative;\n\n    transition: all 0.5s;\n    -webkit-transition: all 0.5s;\n    -moz-transition: all 0.5s;\n  }\n\n  .tree li {\n      white-space: nowrap;\n    float: left;\n      text-align: center;\n    list-style-type: none;\n    position: relative;\n    padding: 20px 5px 0 5px;\n\n    transition: all 0.5s;\n    -webkit-transition: all 0.5s;\n    -moz-transition: all 0.5s;\n  }\n\n  /*We will use ::before and ::after to draw the connectors*/\n\n  .tree li::before, .tree li::after{\n    content: '';\n    position: absolute;\n      top: 0;\n      right: 50%;\n    border-top: 1px solid #ccc;\n    width: 50%;\n      height: 20px;\n  }\n  .tree li::after{\n    right: auto;\n      left: 50%;\n    border-left: 1px solid #ccc;\n  }\n\n  /*We need to remove left-right connectors from elements without\n   any siblings*/\n  .tree li:only-child::after, .tree li:only-child::before {\n    display: none;\n  }\n\n  /*Remove space from the top of single children*/\n  .tree li:only-child{\n      padding-top: 0;\n  }\n\n  /*Remove left connector from first child and\n   right connector from last child*/\n  .tree li:first-child::before, .tree li:last-child::after{\n    border: 0 none;\n  }\n  /*Adding back the vertical connector to the last nodes*/\n  .tree li:last-child::before{\n    border-right: 1px solid #ccc;\n    border-radius: 0 5px 0 0;\n    -webkit-border-radius: 0 5px 0 0;\n    -moz-border-radius: 0 5px 0 0;\n  }\n  .tree li:first-child::after{\n    border-radius: 5px 0 0 0;\n    -webkit-border-radius: 5px 0 0 0;\n    -moz-border-radius: 5px 0 0 0;\n  }\n\n  /*Time to add downward connectors from parents*/\n  .tree ul ul::before{\n    content: '';\n    position: absolute;\n      top: 0;\n      left: 50%;\n    border-left: 1px solid #ccc;\n    width: 0;\n      height: 20px;\n  }\n\n  .tree li a{\n    border: 1px solid #ccc;\n    padding: 5px 10px;\n    text-decoration: none;\n    color: #666;\n    font-family: arial, verdana, tahoma;\n    font-size: 11px;\n    display: inline-block;\n\n    border-radius: 5px;\n    -webkit-border-radius: 5px;\n    -moz-border-radius: 5px;\n\n    transition: all 0.5s;\n    -webkit-transition: all 0.5s;\n    -moz-transition: all 0.5s;\n  }\n\n  /*Time for some hover effects*/\n  /*We will apply the hover effect the the lineage of the element also*/\n  .tree li a:hover, .tree li a:hover+ul li a {\n    background: #c8e4f8;\n      color: #000;\n      border: 1px solid #94a0b4;\n  }\n  /*Connector styles on hover*/\n  .tree li a:hover+ul li::after,\n  .tree li a:hover+ul li::before,\n  .tree li a:hover+ul::before,\n  .tree li a:hover+ul ul::before{\n    border-color:  #94a0b4;\n  }\n\n  /*Thats all. I hope you enjoyed it.\n   Thanks :)*/\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/ConfigurationPanel/DecisionTree/DecisionTree.less?vue&type=style&index=0&id=6c7ee0fe&lang=less&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js??ref--1-2!./src/components/ConfigurationPanel/DecisionTree/DecisionTree.less?vue&type=style&index=0&id=6c7ee0fe&lang=less&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "", "",{"version":3,"sources":[],"names":[],"mappings":"","file":"DecisionTree.less"}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./src/components/ConfigurationPanel/DecisionTree/DecisionTree.html?vue&type=template&id=6c7ee0fe&scoped=true&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./src/components/ConfigurationPanel/DecisionTree/DecisionTree.html?vue&type=template&id=6c7ee0fe&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************/
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
    _c(
      "button",
      {
        staticClass: "ui primary fluid button",
        class: { disabled: !_vm.$parent.isNeedPredict },
        attrs: { type: "button" },
        on: { click: _vm.start }
      },
      [
        !_vm.isModelBuilded
          ? [
              _vm._v(
                "\n      " +
                  _vm._s(_vm.$t("Build Model and Predict")) +
                  "\n    "
              )
            ]
          : _vm._e(),
        _vm._v(" "),
        _vm.isModelBuilded
          ? [_vm._v("\n      " + _vm._s(_vm.$t("Predict")) + "\n    ")]
          : _vm._e()
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/ConfigurationPanel/DecisionTree/DecisionTree.less?vue&type=style&index=0&id=6c7ee0fe&lang=less&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js??ref--1-2!./src/components/ConfigurationPanel/DecisionTree/DecisionTree.less?vue&type=style&index=0&id=6c7ee0fe&lang=less&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js?sourceMap!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/less-loader/dist/cjs.js??ref--1-2!./DecisionTree.less?vue&type=style&index=0&id=6c7ee0fe&lang=less&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/ConfigurationPanel/DecisionTree/DecisionTree.less?vue&type=style&index=0&id=6c7ee0fe&lang=less&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("5e0e0496", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/components/ConfigurationPanel/DecisionTree/DecisionTree.html?vue&type=template&id=6c7ee0fe&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./src/components/ConfigurationPanel/DecisionTree/DecisionTree.html?vue&type=template&id=6c7ee0fe&scoped=true& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_DecisionTree_html_vue_type_template_id_6c7ee0fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./DecisionTree.html?vue&type=template&id=6c7ee0fe&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./src/components/ConfigurationPanel/DecisionTree/DecisionTree.html?vue&type=template&id=6c7ee0fe&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_DecisionTree_html_vue_type_template_id_6c7ee0fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_DecisionTree_html_vue_type_template_id_6c7ee0fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/ConfigurationPanel/DecisionTree/DecisionTree.js?vue&type=script&lang=js&?16e8":
/*!*************************************************************************************************!*\
  !*** ./src/components/ConfigurationPanel/DecisionTree/DecisionTree.js?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DecisionTreeMethods_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DecisionTreeMethods.js */ "./src/components/ConfigurationPanel/DecisionTree/DecisionTreeMethods.js");
let DecisionTree = {
  props: ['config', 'localConfig', 'utils'],
  data () {    
    this.$i18n.locale = this.localConfig.locale
    return {
    }
  },
  watch: {
    'localConfig.locale'() {
      this.$i18n.locale = this.localConfig.locale;
    },
  },
  computed: {
    isModelBuilded () {
      return (this.localConfig.modelJSON !== null && this.localConfig.modelJSON !== '{}')
    }
  },
  mounted() {
    setTimeout(() => {
      this.start()
    }, 1000)
  },
  methods: {}
}


Object(_DecisionTreeMethods_js__WEBPACK_IMPORTED_MODULE_0__["default"])(DecisionTree)

/* harmony default export */ __webpack_exports__["default"] = (DecisionTree);

/***/ }),

/***/ "./src/components/ConfigurationPanel/DecisionTree/DecisionTree.js?vue&type=script&lang=js&?b956":
/*!*************************************************************************************************!*\
  !*** ./src/components/ConfigurationPanel/DecisionTree/DecisionTree.js?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DecisionTree_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./DecisionTree.js?vue&type=script&lang=js& */ "./src/components/ConfigurationPanel/DecisionTree/DecisionTree.js?vue&type=script&lang=js&?16e8");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_DecisionTree_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/ConfigurationPanel/DecisionTree/DecisionTree.less?vue&type=style&index=0&id=6c7ee0fe&lang=less&scoped=true&":
/*!************************************************************************************************************************************!*\
  !*** ./src/components/ConfigurationPanel/DecisionTree/DecisionTree.less?vue&type=style&index=0&id=6c7ee0fe&lang=less&scoped=true& ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_DecisionTree_less_vue_type_style_index_0_id_6c7ee0fe_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader/dist/cjs.js?sourceMap!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/less-loader/dist/cjs.js??ref--1-2!./DecisionTree.less?vue&type=style&index=0&id=6c7ee0fe&lang=less&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js?!./src/components/ConfigurationPanel/DecisionTree/DecisionTree.less?vue&type=style&index=0&id=6c7ee0fe&lang=less&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_DecisionTree_less_vue_type_style_index_0_id_6c7ee0fe_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_DecisionTree_less_vue_type_style_index_0_id_6c7ee0fe_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_DecisionTree_less_vue_type_style_index_0_id_6c7ee0fe_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_ref_1_2_DecisionTree_less_vue_type_style_index_0_id_6c7ee0fe_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/ConfigurationPanel/DecisionTree/DecisionTree.vue":
/*!*************************************************************************!*\
  !*** ./src/components/ConfigurationPanel/DecisionTree/DecisionTree.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DecisionTree_html_vue_type_template_id_6c7ee0fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DecisionTree.html?vue&type=template&id=6c7ee0fe&scoped=true& */ "./src/components/ConfigurationPanel/DecisionTree/DecisionTree.html?vue&type=template&id=6c7ee0fe&scoped=true&");
/* harmony import */ var _DecisionTree_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DecisionTree.js?vue&type=script&lang=js& */ "./src/components/ConfigurationPanel/DecisionTree/DecisionTree.js?vue&type=script&lang=js&?b956");
/* empty/unused harmony star reexport *//* harmony import */ var _DecisionTree_less_vue_type_style_index_0_id_6c7ee0fe_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DecisionTree.less?vue&type=style&index=0&id=6c7ee0fe&lang=less&scoped=true& */ "./src/components/ConfigurationPanel/DecisionTree/DecisionTree.less?vue&type=style&index=0&id=6c7ee0fe&lang=less&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _DecisionTree_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_D_3A_5Cxampp_5Chtdocs_5Cprojects_html5_5CHTML_Simple_Classifier_5Csrc_5Ccomponents_5CConfigurationPanel_5CDecisionTree_5CDecisionTree_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DecisionTree.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=D%3A%5Cxampp%5Chtdocs%5Cprojects-html5%5CHTML-Simple-Classifier%5Csrc%5Ccomponents%5CConfigurationPanel%5CDecisionTree%5CDecisionTree.vue&lang=yaml */ "./src/components/ConfigurationPanel/DecisionTree/DecisionTree.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=D%3A%5Cxampp%5Chtdocs%5Cprojects-html5%5CHTML-Simple-Classifier%5Csrc%5Ccomponents%5CConfigurationPanel%5CDecisionTree%5CDecisionTree.vue&lang=yaml");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DecisionTree_js_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DecisionTree_html_vue_type_template_id_6c7ee0fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DecisionTree_html_vue_type_template_id_6c7ee0fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6c7ee0fe",
  null
  
)

/* custom blocks */

if (typeof _DecisionTree_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_D_3A_5Cxampp_5Chtdocs_5Cprojects_html5_5CHTML_Simple_Classifier_5Csrc_5Ccomponents_5CConfigurationPanel_5CDecisionTree_5CDecisionTree_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_4__["default"] === 'function') Object(_DecisionTree_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_D_3A_5Cxampp_5Chtdocs_5Cprojects_html5_5CHTML_Simple_Classifier_5Csrc_5Ccomponents_5CConfigurationPanel_5CDecisionTree_5CDecisionTree_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_4__["default"])(component)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/ConfigurationPanel/DecisionTree/DecisionTree.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/ConfigurationPanel/DecisionTree/DecisionTree.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=D%3A%5Cxampp%5Chtdocs%5Cprojects-html5%5CHTML-Simple-Classifier%5Csrc%5Ccomponents%5CConfigurationPanel%5CDecisionTree%5CDecisionTree.vue&lang=yaml":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./src/components/ConfigurationPanel/DecisionTree/DecisionTree.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=D%3A%5Cxampp%5Chtdocs%5Cprojects-html5%5CHTML-Simple-Classifier%5Csrc%5Ccomponents%5CConfigurationPanel%5CDecisionTree%5CDecisionTree.vue&lang=yaml ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_kazupon_vue_i18n_loader_lib_index_js_DecisionTree_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_D_3A_5Cxampp_5Chtdocs_5Cprojects_html5_5CHTML_Simple_Classifier_5Csrc_5Ccomponents_5CConfigurationPanel_5CDecisionTree_5CDecisionTree_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/@kazupon/vue-i18n-loader/lib!./DecisionTree.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=D%3A%5Cxampp%5Chtdocs%5Cprojects-html5%5CHTML-Simple-Classifier%5Csrc%5Ccomponents%5CConfigurationPanel%5CDecisionTree%5CDecisionTree.vue&lang=yaml */ "./node_modules/@kazupon/vue-i18n-loader/lib/index.js!./src/components/ConfigurationPanel/DecisionTree/DecisionTree.yaml?vue&type=custom&index=0&blockType=i18n&issuerPath=D%3A%5Cxampp%5Chtdocs%5Cprojects-html5%5CHTML-Simple-Classifier%5Csrc%5Ccomponents%5CConfigurationPanel%5CDecisionTree%5CDecisionTree.vue&lang=yaml");
/* harmony import */ var _node_modules_kazupon_vue_i18n_loader_lib_index_js_DecisionTree_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_D_3A_5Cxampp_5Chtdocs_5Cprojects_html5_5CHTML_Simple_Classifier_5Csrc_5Ccomponents_5CConfigurationPanel_5CDecisionTree_5CDecisionTree_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_kazupon_vue_i18n_loader_lib_index_js_DecisionTree_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_D_3A_5Cxampp_5Chtdocs_5Cprojects_html5_5CHTML_Simple_Classifier_5Csrc_5Ccomponents_5CConfigurationPanel_5CDecisionTree_5CDecisionTree_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_kazupon_vue_i18n_loader_lib_index_js_DecisionTree_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_D_3A_5Cxampp_5Chtdocs_5Cprojects_html5_5CHTML_Simple_Classifier_5Csrc_5Ccomponents_5CConfigurationPanel_5CDecisionTree_5CDecisionTree_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_kazupon_vue_i18n_loader_lib_index_js_DecisionTree_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_D_3A_5Cxampp_5Chtdocs_5Cprojects_html5_5CHTML_Simple_Classifier_5Csrc_5Ccomponents_5CConfigurationPanel_5CDecisionTree_5CDecisionTree_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_kazupon_vue_i18n_loader_lib_index_js_DecisionTree_yaml_vue_type_custom_index_0_blockType_i18n_issuerPath_D_3A_5Cxampp_5Chtdocs_5Cprojects_html5_5CHTML_Simple_Classifier_5Csrc_5Ccomponents_5CConfigurationPanel_5CDecisionTree_5CDecisionTree_vue_lang_yaml__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/ConfigurationPanel/DecisionTree/DecisionTreeMethods.js":
/*!*******************************************************************************!*\
  !*** ./src/components/ConfigurationPanel/DecisionTree/DecisionTreeMethods.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendors_decision_tree_decision_tree_webpack_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendors/decision-tree/decision-tree.webpack.js */ "./src/components/ConfigurationPanel/DecisionTree/vendors/decision-tree/decision-tree.webpack.js");


/* harmony default export */ __webpack_exports__["default"] = (function (DecisionTree) {
  DecisionTree.methods.start = async function () {
    //this.localConfig.modelJSON = null
    
    let data = await this.$parent.getJSONData()
    //console.log(data.trainSet)
    let model
    
    if (this.isModelBuilded === false) {
      model = this.buildModel(data.trainSet)
      await model.waitReady()
      //console.log(model.root)
      this.localConfig.modelJSON = JSON.stringify(model.root)
      //console.log(JSON.parse(this.localConfig.modelJSON))
    }
    else {
      model = this.buildModel([])
      await model.waitReady()
      model.category = this.localConfig.classFieldName
      model.root = JSON.parse(this.localConfig.modelJSON)
      //console.log(model.root, this.localConfig.modelJSON)
    }
    //console.error('需要只Predict test case')
    
    //console.log(data.testSet)
    let predictResults = await this.getPredictResults(model, data.testSet)
    
    if (this.$parent.hasModelEvaluated === false) {
      let getTrainSetPredicts = await this.$parent.getTrainSetPredicts(predictResults, data.testSetRowIndexes)
      //console.log(data.trainSetClasses)
      //console.log(getTrainSetPredicts)
      
      this.$parent.resetModelEvaluation()
      
      let accuracy = await this.$parent.calcAccuracy(data.trainSetClasses, getTrainSetPredicts)
      //console.log(accuracy)
      this.localConfig.modelEvaluations.push({
        name: 'accuracy',
        type: 'percent',
        value: accuracy
      })
    }
    
    //console.log(predictResults)
    this.$parent.setPredictResults(predictResults)
  }
  
  DecisionTree.methods.buildModel = function (trainSet) {
    
    // Configuration
    var config = {
      trainingSet: trainSet, 
      categoryAttr: this.localConfig.classFieldName, 
      //ignoredAttributes: ['person']
    };
    
    // Building Decision Tree
    return new _vendors_decision_tree_decision_tree_webpack_js__WEBPACK_IMPORTED_MODULE_0__["default"].DecisionTree(config);
  }
  
  DecisionTree.methods.getPredictResults = async function (model, testSet) {
    let results = []
    //console.log(model.root)
    for (let len = testSet.length, i = len; i > 0; i--) {
      let testCase = testSet[(len - i)]
      
      let result
      if (this.utils.DataUtils.isMissingData(testCase['predict']) === false) {
        result = testCase['predict']
      }
      else {
        //console.log(testCase)
        //console.log(model.root)
        result = await model.predict(testCase)
        //console.log(result)
      }
        
      results.push(result)
      
      if (i % 10 === 5) {
        await this.utils.AsyncUtils.sleep(0)
      }
    }
    
    return results
  }
  
  DecisionTree.methods.getEvaluationResults = async function (model, testSet, testSetRowIndexes) {
    
  }
});

/***/ }),

/***/ "./src/components/ConfigurationPanel/DecisionTree/vendors/decision-tree/decision-tree.js":
/*!***********************************************************************************************!*\
  !*** ./src/components/ConfigurationPanel/DecisionTree/vendors/decision-tree/decision-tree.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var dt = (function () {
          
    /**
     * Creates an instance of DecisionTree
     *
     * @constructor
     * @param builder - contains training set and
     *                  some configuration parameters
     */
    function DecisionTree(builder) {
      (async () => {
        this.inited = false
        //console.log('準備')
        this.root = await buildDecisionTree({
            trainingSet: builder.trainingSet,
            ignoredAttributes: arrayToHashSet(builder.ignoredAttributes),
            categoryAttr: builder.categoryAttr || 'category',
            minItemsCount: builder.minItemsCount || 1,
            entropyThrehold: builder.entropyThrehold || 0.01,
            maxTreeDepth: builder.maxTreeDepth || 70
        })
        //console.log('完成')
        this.inited = true
      })()
    }
    
    DecisionTree.prototype.waitReady = async function () {
      //console.log(item)
      while (this.inited === false) {
        await sleep(50)
      }
      return true
    }
          
    DecisionTree.prototype.predict = async function (item) {
      //console.log(item)
      await this.waitReady()
      //console.log(item)
      return predict(this.root, item);
    }

    /**
     * Creates an instance of RandomForest
     * with specific number of trees
     *
     * @constructor
     * @param builder - contains training set and some
     *                  configuration parameters for
     *                  building decision trees
     */
    function RandomForest(builder, treesNumber) {
        this.trees = buildRandomForest(builder, treesNumber);
    }
          
    RandomForest.prototype.predict = function (item) {
        return predictRandomForest(this.trees, item);
    }
    
    /**
     * Transforming array to object with such attributes 
     * as elements of array (afterwards it can be used as HashSet)
     */
    function arrayToHashSet(array) {
        var hashSet = {};
        if (array) {
            for(var i in array) {
                var attr = array[i];
                hashSet[attr] = true;
            }
        }
        return hashSet;
    }
    
    /**
     * Calculating how many objects have the same 
     * values of specific attribute.
     *
     * @param items - array of objects
     *
     * @param attr  - variable with name of attribute, 
     *                which embedded in each object
     */
    function countUniqueValues(items, attr) {
        var counter = {};

        // detecting different values of attribute
        for (var i = items.length - 1; i >= 0; i--) {
            // items[i][attr] - value of attribute
            counter[items[i][attr]] = 0;
        }
          
        // counting number of occurrences of each of values
        // of attribute
        for (var i = items.length - 1; i >= 0; i--) {
            counter[items[i][attr]] += 1;
        }

        return counter;
    }
    
    /**
     * Calculating entropy of array of objects 
     * by specific attribute.
     *
     * @param items - array of objects
     *
     * @param attr  - variable with name of attribute, 
     *                which embedded in each object
     */
    function entropy(items, attr) {
        // counting number of occurrences of each of values
        // of attribute
        var counter = countUniqueValues(items, attr);

        var entropy = 0;
        var p;
        for (var i in counter) {
            p = counter[i] / items.length;
            entropy += -p * Math.log(p);
        }

        return entropy;
    }
          
    /**
     * Splitting array of objects by value of specific attribute, 
     * using specific predicate and pivot.
     *
     * Items which matched by predicate will be copied to 
     * the new array called 'match', and the rest of the items 
     * will be copied to array with name 'notMatch'
     *
     * @param items - array of objects
     *
     * @param attr  - variable with name of attribute,
     *                which embedded in each object
     *
     * @param predicate - function(x, y) 
     *                    which returns 'true' or 'false'
     *
     * @param pivot - used as the second argument when 
     *                calling predicate function:
     *                e.g. predicate(item[attr], pivot)
     */
    function split(items, attr, predicate, pivot) {
        var match = [];
        var notMatch = [];

        var item,
            attrValue;
          
        for (var i = items.length - 1; i >= 0; i--) {
            item = items[i];
            attrValue = item[attr];

            if (predicate(attrValue, pivot)) {
                match.push(item);
            } else {
                notMatch.push(item);
            }
        };

        return {
            match: match,
            notMatch: notMatch
        };
    }

    /**
     * Finding value of specific attribute which is most frequent
     * in given array of objects.
     *
     * @param items - array of objects
     *
     * @param attr  - variable with name of attribute, 
     *                which embedded in each object
     */
    function mostFrequentValue(items, attr) {
        // counting number of occurrences of each of values
        // of attribute
        var counter = countUniqueValues(items, attr);

        var mostFrequentCount = 0;
        var mostFrequentValue;

        for (var value in counter) {
            if (counter[value] > mostFrequentCount) {
                mostFrequentCount = counter[value];
                mostFrequentValue = value;
            }
        };

        return mostFrequentValue;
    }
          
    var predicates = {
        '==': function (a, b) { return a == b },
        '>=': function (a, b) { return a >= b }
    };
    
    function sleep (ms = 500) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    /**
     * Function for building decision tree
     */
    async function buildDecisionTree(builder) {

        var trainingSet = builder.trainingSet;
        var minItemsCount = builder.minItemsCount;
        var categoryAttr = builder.categoryAttr;
        var entropyThrehold = builder.entropyThrehold;
        var maxTreeDepth = builder.maxTreeDepth;
        var ignoredAttributes = builder.ignoredAttributes;

        if ((maxTreeDepth === 0) || (trainingSet.length <= minItemsCount)) {
            // restriction by maximal depth of tree
            // or size of training set is to small
            // so we have to terminate process of building tree
            return {
                category: mostFrequentValue(trainingSet, categoryAttr)
            };
        }

        var initialEntropy = entropy(trainingSet, categoryAttr);

        if (initialEntropy <= entropyThrehold) {
            // entropy of training set too small
            // (it means that training set is almost homogeneous),
            // so we have to terminate process of building tree
            return {
                category: mostFrequentValue(trainingSet, categoryAttr)
            };
        }

        // used as hash-set for avoiding the checking of split by rules
        // with the same 'attribute-predicate-pivot' more than once
        var alreadyChecked = {};
          
        // this variable expected to contain rule, which splits training set
        // into subsets with smaller values of entropy (produces informational gain)
        var bestSplit = {gain: 0};

        for (var i = trainingSet.length - 1; i >= 0; i--) {
            var item = trainingSet[i];

            // iterating over all attributes of item
            for (var attr in item) {
                if ((attr === categoryAttr) || ignoredAttributes[attr]) {
                    continue;
                }

                // let the value of current attribute be the pivot
                var pivot = item[attr];

                // pick the predicate
                // depending on the type of the attribute value
                var predicateName;
                if (typeof pivot === 'number') {
                    predicateName = '>=';
                } else {
                    // there is no sense to compare non-numeric attributes
                    // so we will check only equality of such attributes
                    predicateName = '==';
                }

                var attrPredPivot = attr + predicateName + pivot;
                if (alreadyChecked[attrPredPivot]) {
                    // skip such pairs of 'attribute-predicate-pivot',
                    // which been already checked
                    continue;
                }
                alreadyChecked[attrPredPivot] = true;

                var predicate = predicates[predicateName];
          
                // splitting training set by given 'attribute-predicate-value'
                var currSplit = split(trainingSet, attr, predicate, pivot);

                // calculating entropy of subsets
                var matchEntropy = entropy(currSplit.match, categoryAttr);
                var notMatchEntropy = entropy(currSplit.notMatch, categoryAttr);

                // calculating informational gain
                var newEntropy = 0;
                newEntropy += matchEntropy * currSplit.match.length;
                newEntropy += notMatchEntropy * currSplit.notMatch.length;
                newEntropy /= trainingSet.length;
                var currGain = initialEntropy - newEntropy;

                if (currGain > bestSplit.gain) {
                    // remember pairs 'attribute-predicate-value'
                    // which provides informational gain
                    bestSplit = currSplit;
                    bestSplit.predicateName = predicateName;
                    bestSplit.predicate = predicate;
                    bestSplit.attribute = attr;
                    bestSplit.pivot = pivot;
                    bestSplit.gain = currGain;
                }
            }
          
          if (i % 10 === 5) {
            await sleep(0)
          }
            
        } // for (var i = trainingSet.length - 1; i >= 0; i--) {
        
        

        if (!bestSplit.gain) {
            // can't find optimal split
            return { category: mostFrequentValue(trainingSet, categoryAttr) };
        }

        // building subtrees
          
        builder.maxTreeDepth = maxTreeDepth - 1;

        builder.trainingSet = bestSplit.match;
        var matchSubTree = await buildDecisionTree(builder);

        builder.trainingSet = bestSplit.notMatch;
        var notMatchSubTree = await buildDecisionTree(builder);

        return {
            attribute: bestSplit.attribute,
            predicate: bestSplit.predicate,
            predicateName: bestSplit.predicateName,
            pivot: bestSplit.pivot,
            match: matchSubTree,
            notMatch: notMatchSubTree,
            matchedCount: bestSplit.match.length,
            notMatchedCount: bestSplit.notMatch.length
        };
    }

    /**
     * Classifying item, using decision tree
     */
    function predict(tree, item) {
        var attr,
            value,
            predicate,
            pivot;
        
        
        if (!tree) {
          return undefined
        }
        
        // Traversing tree from the root to leaf
        while(true) {
          
            if (tree.category) {
                // only leafs contains predicted category
                return tree.category;
            }

            attr = tree.attribute;
            value = item[attr];

            predicate = tree.predicate;
            if (!predicate) {
              //return undefined
              predicate = predicates[tree.predicateName]
            }
            pivot = tree.pivot;

            // move to one of subtrees
            if (predicate(value, pivot)) {
                tree = tree.match;
            } else {
                tree = tree.notMatch;
            }
        }
    }

    /**
     * Building array of decision trees
     */
    function buildRandomForest(builder, treesNumber) {
        var items = builder.trainingSet;
          
        // creating training sets for each tree
        var trainingSets = [];
        for (var t = 0; t < treesNumber; t++) {
            trainingSets[t] = [];
        }
        for (var i = items.length - 1; i >= 0 ; i--) {
          // assigning items to training sets of each tree
          // using 'round-robin' strategy
          var correspondingTree = i % treesNumber;
          trainingSets[correspondingTree].push(items[i]);
        }

        // building decision trees
        var forest = [];
        for (var t = 0; t < treesNumber; t++) {
            builder.trainingSet = trainingSets[t];

            var tree = new DecisionTree(builder);
            forest.push(tree);
        }
        return forest;
    }

    /**
     * Each of decision tree classifying item
     * ('voting' that item corresponds to some class).
     *
     * This function returns hash, which contains 
     * all classifying results, and number of votes 
     * which were given for each of classifying results
     */
    function predictRandomForest(forest, item) {
        var result = {};
        for (var i in forest) {
            var tree = forest[i];
            var prediction = tree.predict(item);
            result[prediction] = result[prediction] ? result[prediction] + 1 : 1;
        }
        return result;
    }

    var exports = {};
    exports.DecisionTree = DecisionTree;
    exports.RandomForest = RandomForest;
    return exports;
})();

/* harmony default export */ __webpack_exports__["default"] = (dt);

/***/ }),

/***/ "./src/components/ConfigurationPanel/DecisionTree/vendors/decision-tree/decision-tree.webpack.js":
/*!*******************************************************************************************************!*\
  !*** ./src/components/ConfigurationPanel/DecisionTree/vendors/decision-tree/decision-tree.webpack.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _decision_tree_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decision-tree.js */ "./src/components/ConfigurationPanel/DecisionTree/vendors/decision-tree/decision-tree.js");
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.less */ "./src/components/ConfigurationPanel/DecisionTree/vendors/decision-tree/style.less");
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_less__WEBPACK_IMPORTED_MODULE_1__);



/* harmony default export */ __webpack_exports__["default"] = (_decision_tree_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/ConfigurationPanel/DecisionTree/vendors/decision-tree/style.less":
/*!*****************************************************************************************!*\
  !*** ./src/components/ConfigurationPanel/DecisionTree/vendors/decision-tree/style.less ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js?sourceMap!../../../../../../node_modules/less-loader/dist/cjs.js??ref--1-2!./style.less */ "./node_modules/css-loader/dist/cjs.js?sourceMap!./node_modules/less-loader/dist/cjs.js?!./src/components/ConfigurationPanel/DecisionTree/vendors/decision-tree/style.less");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("bfdcd938", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);
//# sourceMappingURL=DecisionTree.js.map