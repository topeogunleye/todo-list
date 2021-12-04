/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  --clr-primary: #f6f6f6;\\n  --clr-dark: #545862;\\n}\\n\\n* {\\n  box-sizing: border-box;\\n}\\n\\n/* reset */\\nbody,\\np,\\na,\\nul,\\nli {\\n  margin: 0;\\n  padding: 0;\\n  text-decoration: none;\\n  list-style: none;\\n}\\n\\n/* fonts */\\nbody {\\n  font-family: \\\"Open Sans\\\", \\\"Lucida Grande\\\", tahoma, verdana, arial, sans-serif;\\n  font-size: 14px;\\n  font-weight: 300;\\n  background-color: #f1f2f5;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  height: 100vh;\\n}\\n\\n.todo-list {\\n  max-width: 480px;\\n  margin: auto;\\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\\n  background-color: #fff;\\n}\\n\\n.todo-header {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  width: 100%;\\n  padding: 0 20px;\\n}\\n\\n.tasks-form {\\n  display: flex;\\n  justify-content: space-between;\\n}\\n.tasks-form input[type=text] {\\n  width: 100%;\\n  padding: 0 40px 0 1rem;\\n  line-height: 50px;\\n  height: 50px;\\n  border: none;\\n  font-style: italic;\\n}\\n\\n.delete-tasks {\\n  background-color: #f6f6f6;\\n}\\n.delete-tasks .clear-completed {\\n  appearance: none;\\n  outline: none;\\n  border: none;\\n  padding: 1rem 0;\\n  display: block;\\n  opacity: 0.5;\\n  cursor: pointer;\\n  width: 100%;\\n}\\n.delete-tasks .d-none {\\n  display: none;\\n}\\n\\n.tasks {\\n  display: grid;\\n  grid-template-columns: repeat(auto-fill, minmax(480px, 1fr));\\n  margin-top: 20px;\\n  background-color: #fff;\\n}\\n.tasks .task {\\n  display: flex;\\n  align-items: center;\\n  padding: 0 20px;\\n  border: 1px solid #e6e6e6;\\n}\\n.tasks .task.editing {\\n  background-color: #fffeca;\\n}\\n.tasks .task input[type=text] {\\n  width: 90%;\\n  margin: 0 5px;\\n  border: none;\\n  background: transparent;\\n  padding: 15px;\\n}\\n.tasks .task input[type=text]:focus-visible {\\n  outline: none;\\n}\\n.tasks .task .d-none {\\n  display: none;\\n}\\n.tasks .task .todo-icon {\\n  margin-left: auto;\\n  width: 20px;\\n  height: 20px;\\n  cursor: pointer;\\n}\\n\\n.icon-return {\\n  background-image: url(\\\"https://web.archive.org/web/20180728085226im_/http://www.getminimalist.com/assets/enter-b06ec7fb441bc0e40d61ba975a0291ad.png\\\");\\n  appearance: none;\\n  border: none;\\n  background-color: transparent;\\n  background-repeat: no-repeat;\\n  background-position: center;\\n  width: 40px;\\n  height: 50px;\\n  cursor: pointer;\\n}\\n\\n@media screen and (max-width: 480px) {\\n  .todo-list {\\n    width: 100%;\\n  }\\n\\n  .tasks {\\n    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Store.js":
/*!**********************!*\
  !*** ./src/Store.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Store)\n/* harmony export */ });\n/* harmony import */ var _statusUpdates_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./statusUpdates.js */ \"./src/statusUpdates.js\");\n\n\n// Store Class: Handles localStorage\nclass Store {\n  static getTasks() {\n    const tasks = localStorage.getItem('tasks');\n    if (localStorage.getItem('tasks') !== null) {\n      // if there are tasks in localStorage\n      return JSON.parse(tasks); // return tasks\n    }\n    return []; // return empty array\n  }\n\n  static addTask(task) {\n    const tasks = Store.getTasks();\n    tasks.push(task);\n    localStorage.setItem('tasks', JSON.stringify(tasks));\n  }\n\n  static changeTaskStatus(e) {\n    const TASKS = Store.getTasks();\n\n    const task = TASKS.find(\n      (t) => t.index === parseInt(e.target.id.split('-')[1], 10),\n    );\n    if (e.target.checked) {\n      _statusUpdates_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateStatus(task, 'completed');\n    } else {\n      _statusUpdates_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateStatus(task, 'uncompleted');\n    }\n\n    localStorage.setItem('tasks', JSON.stringify(TASKS));\n  }\n\n  static removeTask(id) {\n    let tasks = Store.getTasks();\n    tasks = tasks.filter((task) => task.index !== parseInt(id, 10));\n    localStorage.setItem('tasks', JSON.stringify(tasks));\n  }\n\n  static updateTasksIndex() {\n    const tasks = Store.getTasks();\n    tasks.forEach((task, index) => {\n      task.index = index + 1;\n    });\n    localStorage.setItem('tasks', JSON.stringify(tasks));\n  }\n\n  // clear all completed tasks from localStorage\n  static clearCompletedTasks() {\n    let tasks = Store.getTasks();\n    tasks = tasks.filter((task) => task.completed !== true);\n    localStorage.setItem('tasks', JSON.stringify(tasks));\n  }\n}\n\n//# sourceURL=webpack://todo-list/./src/Store.js?");

/***/ }),

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _Store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Store.js */ \"./src/Store.js\");\n\n\n// UI Class: Handle UI Class\nclass UI {\n  static displayTasks() {\n    const tasks = _Store_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTasks();\n\n    const list = document.querySelector('.tasks');\n    list.innerHTML = '';\n\n    tasks.forEach((task) => {\n      UI.addTaskToList(task);\n    });\n  }\n\n  static addTaskToList(task) {\n    const todoList = document.querySelector('.tasks');\n\n    // Create a new list item\n    const listItem = document.createElement('div');\n    // Add classname to the list item\n    listItem.classList.add('task');\n\n    // Add HTML to the list item\n    listItem.innerHTML = `\n   <input \n     type=\"checkbox\"\n      id=\"task-${task.index}\"\n   />\n   <input type=\"text\" value=\"${task.description}\" class=\"text-field\">\n   <p class=\"d-none\">${task.index}</p>\n<i class=\"fa fa-trash todo-icon deleteTask delete-task\" aria-hidden=\"true\"></i>\n\n   `;\n\n    const textField = listItem.querySelector('.text-field');\n    textField.addEventListener('keyup', (e) => {\n      // if (e.keyCode === 13) {\n      // if enter key is pressed\n      const tasks = _Store_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTasks();\n      // find the task in the array\n      const task = tasks.find(\n        (t) => t.index\n          === parseInt(e.target.previousElementSibling.id.split('-')[1], 10),\n      );\n      // update the task description\n      task.description = e.target.value;\n      localStorage.setItem('tasks', JSON.stringify(tasks));\n      // }\n    });\n    // Add the list item to the todo-list\n    todoList.appendChild(listItem);\n\n    // Add 'editing' classname to textfield on focus\n    textField.addEventListener('focusin', () => {\n      listItem.classList.add('editing');\n    });\n\n    // Remove focus from textarea\n    textField.addEventListener('focusout', () => {\n      listItem.classList.remove('editing');\n    });\n\n    // Display Number of tasks left\n    UI.renderTaskCount();\n  }\n\n  // keep completed tasks checked on page reload\n  static checkCompletedTasks() {\n    // Get tasks from localStorage\n    const tasks = _Store_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTasks();\n\n    tasks.forEach((task) => {\n      if (task.completed === true) {\n        document.getElementById(`task-${task.index}`).checked = true;\n      }\n    });\n  }\n\n  static renderTaskCount() {\n    const tasks = _Store_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTasks();\n    const uncompletedTasks = tasks.filter((task) => task.completed === false);\n    const taskCount = document.querySelector('.task-count');\n    taskCount.textContent = `${uncompletedTasks.length}`;\n  }\n\n  static deleteTask(el) {\n    if (el.classList.contains('delete-task')) {\n      el.parentElement.remove();\n    }\n  }\n\n  // clear all completed tasks from UI\n  static clearCompletedTasks() {\n    const tasks = _Store_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTasks();\n    tasks.forEach((task) => {\n      if (task.completed === true) {\n        document.getElementById(`task-${task.index}`).parentElement.remove();\n      }\n    });\n  }\n}\n\n//# sourceURL=webpack://todo-list/./src/UI.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _Store_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Store.js */ \"./src/Store.js\");\n/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI.js */ \"./src/UI.js\");\n/* eslint-disable max-classes-per-file */\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', _UI_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].displayTasks);\n\ndocument.addEventListener('DOMContentLoaded', _UI_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].checkCompletedTasks);\n\ndocument.addEventListener('DOMContentLoaded', _UI_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].renderTaskCount);\n\n// event listener for checkbox change\ndocument.querySelector('.tasks').addEventListener('change', (e) => {\n  _Store_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].changeTaskStatus(e);\n  _UI_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].renderTaskCount();\n});\n\n// Event: Add a task\ndocument.querySelector('.tasks-form').addEventListener('submit', (e) => {\n  e.preventDefault();\n  const taskDescription = document.querySelector('#task-description').value;\n\n  if (taskDescription === '') {\n    alert('Please add a task');\n  } else {\n    const task = {\n      description: taskDescription,\n      completed: false,\n      index: _Store_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getTasks().length + 1,\n    };\n\n    _Store_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addTask(task);\n    _Store_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updateTasksIndex();\n\n    _UI_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addTaskToList(task);\n    _UI_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].renderTaskCount();\n    document.querySelector('#task-description').value = '';\n  }\n});\n\n// Event: Remove a task\ndocument.querySelector('.tasks').addEventListener('click', (e) => {\n  if (e.target.classList.contains('delete-task')) {\n    _UI_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].deleteTask(e.target);\n    _Store_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].removeTask(e.target.previousElementSibling.textContent);\n    _Store_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updateTasksIndex();\n    _UI_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].displayTasks();\n    _UI_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].renderTaskCount();\n  }\n});\n\n// Event: Clear all completed\ndocument.querySelector('.clear-completed').addEventListener('click', () => {\n  _Store_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].clearCompletedTasks();\n  _Store_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updateTasksIndex();\n  _UI_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].displayTasks();\n  _UI_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].renderTaskCount();\n});\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/statusUpdates.js":
/*!******************************!*\
  !*** ./src/statusUpdates.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass statusUpdates {\n  static updateStatus(task, status) {\n    if (status === 'completed') {\n      task.completed = true;\n    } else {\n      task.completed = false;\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (statusUpdates);\n\n//# sourceURL=webpack://todo-list/./src/statusUpdates.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;