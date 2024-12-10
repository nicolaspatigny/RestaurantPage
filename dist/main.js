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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Poppins:wght@300;400;600&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* src/styles.css */\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --primary-color: #2c3e50;\n  --accent-color: #e74c3c;\n  --text-color: #333;\n  --light-bg: #f9f9f9;\n  --shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n}\n\nbody {\n  font-family: \"Poppins\", sans-serif;\n  line-height: 1.6;\n  color: var(--text-color);\n  background-color: var(--light-bg);\n}\n\nh1,\nh2 {\n  font-family: \"Playfair Display\", serif;\n  color: var(--primary-color);\n}\n\n#content {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\n/* Navigation Styles */\n.nav-bar {\n  background-color: white;\n  padding: 1.5rem;\n  display: flex;\n  justify-content: center;\n  gap: 3rem;\n  box-shadow: var(--shadow);\n  position: sticky;\n  top: 0;\n  z-index: 100;\n}\n\n.nav-button {\n  background: none;\n  border: none;\n  color: var(--primary-color);\n  cursor: pointer;\n  font-size: 1.1rem;\n  font-weight: 600;\n  padding: 0.5rem 1.5rem;\n  transition: all 0.3s ease;\n  position: relative;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.nav-button::after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 0;\n  height: 2px;\n  background-color: var(--accent-color);\n  transition: width 0.3s ease;\n}\n\n.nav-button:hover::after {\n  width: 80%;\n}\n\n.nav-button.active::after {\n  width: 80%;\n}\n\n.page-content {\n  flex: 1;\n  padding: 3rem;\n  max-width: 1200px;\n  margin: 0 auto;\n  width: 100%;\n}\n\n/* Home Page Styles */\n.home {\n  text-align: center;\n  padding: 2rem;\n}\n\n.home h1 {\n  font-size: 3rem;\n  margin-bottom: 1.5rem;\n  color: var(--primary-color);\n}\n\n.home p {\n  font-size: 1.2rem;\n  max-width: 800px;\n  margin: 0 auto 2rem;\n  color: #666;\n}\n\n.hours {\n  background: white;\n  padding: 2rem;\n  border-radius: 8px;\n  box-shadow: var(--shadow);\n  margin-top: 3rem;\n  max-width: 500px;\n  margin: 0 auto;\n}\n\n.hours h2 {\n  color: var(--accent-color);\n  margin-bottom: 1rem;\n}\n\n.hours p {\n  font-size: 1.1rem;\n  margin: 0.5rem 0;\n}\n\n/* Menu Page Styles */\n.menu {\n  text-align: center;\n}\n\n.menu h1 {\n  font-size: 3rem;\n  margin-bottom: 3rem;\n}\n\n.menu-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 2rem;\n  padding: 1rem;\n}\n\n.menu-item {\n  background: white;\n  padding: 2rem;\n  border-radius: 8px;\n  box-shadow: var(--shadow);\n  transition: transform 0.3s ease;\n}\n\n.menu-item:hover {\n  transform: translateY(-5px);\n}\n\n.menu-item h2 {\n  color: var(--primary-color);\n  margin-bottom: 1rem;\n}\n\n.menu-item .price {\n  color: var(--accent-color);\n  font-size: 1.2rem;\n  font-weight: 600;\n  margin: 0.5rem 0;\n}\n\n.menu-item .description {\n  color: #666;\n  font-size: 0.95rem;\n}\n\n/* Contact Page Styles */\n.contact {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 2rem;\n}\n\n.contact h1 {\n  text-align: center;\n  margin-bottom: 2rem;\n  font-size: 3rem;\n}\n\n.contact-info {\n  background: white;\n  padding: 2rem;\n  border-radius: 8px;\n  box-shadow: var(--shadow);\n  margin-bottom: 2rem;\n}\n\n.contact p {\n  margin: 1rem 0;\n  font-size: 1.1rem;\n}\n\nform {\n  background: white;\n  padding: 2rem;\n  border-radius: 8px;\n  box-shadow: var(--shadow);\n}\n\nform h2 {\n  color: var(--accent-color);\n  margin-bottom: 1.5rem;\n}\n\n.form-group {\n  margin-bottom: 1.5rem;\n}\n\nlabel {\n  display: block;\n  margin-bottom: 0.5rem;\n  color: var(--primary-color);\n  font-weight: 600;\n}\n\ninput,\ntextarea {\n  width: 100%;\n  padding: 0.8rem;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  font-size: 1rem;\n  font-family: \"Poppins\", sans-serif;\n}\n\ntextarea {\n  min-height: 150px;\n  resize: vertical;\n}\n\nbutton[type=\"submit\"] {\n  background-color: var(--accent-color);\n  color: white;\n  padding: 1rem 2rem;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 1.1rem;\n  font-weight: 600;\n  transition: background-color 0.3s ease;\n  width: 100%;\n}\n\nbutton[type=\"submit\"]:hover {\n  background-color: #c0392b;\n}\n\n/* Responsive Design */\n@media (max-width: 768px) {\n  .nav-bar {\n    padding: 1rem;\n    gap: 1rem;\n  }\n\n  .nav-button {\n    padding: 0.5rem 1rem;\n    font-size: 1rem;\n  }\n\n  .page-content {\n    padding: 1rem;\n  }\n\n  .home h1,\n  .menu h1,\n  .contact h1 {\n    font-size: 2.5rem;\n  }\n\n  .menu-grid {\n    grid-template-columns: 1fr;\n  }\n}\n\n/* Add these to your styles.css */\n\n/* Hero Section */\n.hero-section {\n  position: relative;\n  height: 70vh;\n  overflow: hidden;\n  margin: -3rem -3rem 3rem -3rem;\n}\n\n.hero-section img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  filter: brightness(0.7);\n}\n\n.hero-text {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  color: white;\n  z-index: 1;\n}\n\n.hero-text h1 {\n  font-size: 4rem;\n  margin-bottom: 1rem;\n  color: white;\n}\n\n.hero-text p {\n  font-size: 1.5rem;\n  color: white;\n}\n\n/* About Section */\n.about-section {\n  padding: 4rem 0;\n}\n\n.about-content {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 3rem;\n  align-items: center;\n}\n\n.about-image img {\n  width: 100%;\n  height: 400px;\n  object-fit: cover;\n  border-radius: 8px;\n  box-shadow: var(--shadow);\n}\n\n/* Menu Items */\n.menu-item {\n  overflow: hidden;\n}\n\n.menu-item-image {\n  height: 250px;\n  overflow: hidden;\n  margin: -2rem -2rem 1rem -2rem;\n}\n\n.menu-item-image img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.3s ease;\n}\n\n.menu-item:hover .menu-item-image img {\n  transform: scale(1.05);\n}\n\n/* Contact Page */\n.contact-header {\n  position: relative;\n  height: 300px;\n  margin: -3rem -3rem 3rem -3rem;\n  overflow: hidden;\n}\n\n.contact-header img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  filter: brightness(0.6);\n}\n\n.contact-overlay {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  color: white;\n}\n\n.contact-overlay h1 {\n  color: white;\n  font-size: 3.5rem;\n}\n\n/* Responsive Design */\n@media (max-width: 768px) {\n  .hero-text h1 {\n    font-size: 2.5rem;\n  }\n\n  .about-content {\n    grid-template-columns: 1fr;\n  }\n\n  .about-image img {\n    height: 300px;\n  }\n\n  .menu-item-image {\n    height: 200px;\n  }\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/home */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/contact */ \"./src/modules/contact.js\");\n\n\n\n\n\nfunction createHeader() {\n  const nav = document.createElement(\"nav\");\n  nav.classList.add(\"nav-bar\");\n\n  const homeBtn = document.createElement(\"button\");\n  const menuBtn = document.createElement(\"button\");\n  const contactBtn = document.createElement(\"button\");\n\n  homeBtn.classList.add(\"nav-button\");\n  menuBtn.classList.add(\"nav-button\");\n  contactBtn.classList.add(\"nav-button\");\n\n  homeBtn.textContent = \"Home\";\n  menuBtn.textContent = \"Menu\";\n  contactBtn.textContent = \"Contact\";\n\n  nav.appendChild(homeBtn);\n  nav.appendChild(menuBtn);\n  nav.appendChild(contactBtn);\n\n  return { nav, homeBtn, menuBtn, contactBtn };\n}\n\nfunction initializeWebsite() {\n  const content = document.getElementById(\"content\");\n  const { nav, homeBtn, menuBtn, contactBtn } = createHeader();\n  const main = document.createElement(\"main\");\n  main.classList.add(\"page-content\");\n\n  content.appendChild(nav);\n  content.appendChild(main);\n\n  // Set default page\n  main.appendChild((0,_modules_home__WEBPACK_IMPORTED_MODULE_1__.createHome)());\n  homeBtn.classList.add(\"active\");\n\n  // Add event listeners\n  homeBtn.addEventListener(\"click\", () => {\n    main.innerHTML = \"\";\n    main.appendChild((0,_modules_home__WEBPACK_IMPORTED_MODULE_1__.createHome)());\n    setActiveButton(homeBtn);\n  });\n\n  menuBtn.addEventListener(\"click\", () => {\n    main.innerHTML = \"\";\n    main.appendChild((0,_modules_menu__WEBPACK_IMPORTED_MODULE_2__.createMenu)());\n    setActiveButton(menuBtn);\n  });\n\n  contactBtn.addEventListener(\"click\", () => {\n    main.innerHTML = \"\";\n    main.appendChild((0,_modules_contact__WEBPACK_IMPORTED_MODULE_3__.createContact)());\n    setActiveButton(contactBtn);\n  });\n}\n\nfunction setActiveButton(activeButton) {\n  const buttons = document.querySelectorAll(\".nav-button\");\n  buttons.forEach((button) => button.classList.remove(\"active\"));\n  activeButton.classList.add(\"active\");\n}\n\ninitializeWebsite();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createContact: () => (/* binding */ createContact)\n/* harmony export */ });\n/* harmony import */ var _images_restaurant_interior_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/restaurant-interior.jpg */ \"./src/images/restaurant-interior.jpg\");\n\n\nfunction createContact() {\n  const contact = document.createElement(\"div\");\n  contact.classList.add(\"contact\");\n\n  const contactHeader = document.createElement(\"div\");\n  contactHeader.classList.add(\"contact-header\");\n  contactHeader.innerHTML = `\n        <img src=\"${_images_restaurant_interior_jpg__WEBPACK_IMPORTED_MODULE_0__}\" alt=\"Restaurant Interior\">\n        <div class=\"contact-overlay\">\n            <h1>Contact Us</h1>\n        </div>\n    `;\n\n  const contactContent = document.createElement(\"div\");\n  contactContent.classList.add(\"contact-content\");\n\n  const info = document.createElement(\"div\");\n  info.classList.add(\"contact-info\");\n  info.innerHTML = `\n        <h2>Visit Us</h2>\n        <p><strong>Address:</strong> 123 Gourmet Avenue, Cuisine District</p>\n        <p><strong>Phone:</strong> (555) 123-4567</p>\n        <p><strong>Email:</strong> info@lamaison.com</p>\n    `;\n\n  const form = document.createElement(\"form\");\n  form.classList.add(\"contact-form\");\n  form.innerHTML = `\n        <h2>Make a Reservation</h2>\n        <div class=\"form-group\">\n            <label for=\"name\">Name:</label>\n            <input type=\"text\" id=\"name\" required>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"email\">Email:</label>\n            <input type=\"email\" id=\"email\" required>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"date\">Date:</label>\n            <input type=\"date\" id=\"date\" required>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"time\">Time:</label>\n            <input type=\"time\" id=\"time\" required>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"guests\">Number of Guests:</label>\n            <input type=\"number\" id=\"guests\" min=\"1\" max=\"10\" required>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"message\">Special Requests:</label>\n            <textarea id=\"message\"></textarea>\n        </div>\n        <button type=\"submit\">Request Reservation</button>\n    `;\n\n  contactContent.appendChild(info);\n  contactContent.appendChild(form);\n\n  contact.appendChild(contactHeader);\n  contact.appendChild(contactContent);\n\n  return contact;\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createHome: () => (/* binding */ createHome)\n/* harmony export */ });\n/* harmony import */ var _images_restaurant_front_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/restaurant-front.jpg */ \"./src/images/restaurant-front.jpg\");\n/* harmony import */ var _images_chef_cooking_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/chef-cooking.jpg */ \"./src/images/chef-cooking.jpg\");\n\n\n\nfunction createHome() {\n  const home = document.createElement(\"div\");\n  home.classList.add(\"home\");\n\n  // Hero Section\n  const heroSection = document.createElement(\"div\");\n  heroSection.classList.add(\"hero-section\");\n\n  const heroImage = document.createElement(\"img\");\n  heroImage.src = _images_restaurant_front_jpg__WEBPACK_IMPORTED_MODULE_0__;\n  heroImage.alt = \"Restaurant Front\";\n  heroSection.appendChild(heroImage);\n\n  const heroText = document.createElement(\"div\");\n  heroText.classList.add(\"hero-text\");\n  heroText.innerHTML = `\n        <h1>Welcome to La Maison</h1>\n        <p>Experience the finest dining in town</p>\n    `;\n  heroSection.appendChild(heroText);\n\n  // About Section\n  const aboutSection = document.createElement(\"div\");\n  aboutSection.classList.add(\"about-section\");\n\n  const aboutContent = document.createElement(\"div\");\n  aboutContent.classList.add(\"about-content\");\n  aboutContent.innerHTML = `\n        <div class=\"about-text\">\n            <h2>Our Story</h2>\n            <p>Founded in 1995, La Maison brings the authentic flavors of French cuisine to your table. \n            Our award-winning chefs combine traditional techniques with modern innovation.</p>\n        </div>\n        <div class=\"about-image\">\n            <img src=\"${_images_chef_cooking_jpg__WEBPACK_IMPORTED_MODULE_1__}\" alt=\"Our Chef at Work\">\n        </div>\n    `;\n  aboutSection.appendChild(aboutContent);\n\n  // Hours Section\n  const hours = document.createElement(\"div\");\n  hours.classList.add(\"hours\");\n  hours.innerHTML = `\n        <h2>Hours of Operation</h2>\n        <div class=\"hours-grid\">\n            <div class=\"hours-item\">\n                <h3>Lunch</h3>\n                <p>Monday-Friday: 11:30am - 2:30pm</p>\n                <p>Saturday-Sunday: 12:00pm - 3:00pm</p>\n            </div>\n            <div class=\"hours-item\">\n                <h3>Dinner</h3>\n                <p>Monday-Thursday: 5:30pm - 10:00pm</p>\n                <p>Friday-Saturday: 5:30pm - 11:00pm</p>\n                <p>Sunday: 5:00pm - 9:00pm</p>\n            </div>\n        </div>\n    `;\n\n  home.appendChild(heroSection);\n  home.appendChild(aboutSection);\n  home.appendChild(hours);\n\n  return home;\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createMenu: () => (/* binding */ createMenu)\n/* harmony export */ });\n/* harmony import */ var _images_burger_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/burger.jpg */ \"./src/images/burger.jpg\");\n/* harmony import */ var _images_pizza_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/pizza.jpg */ \"./src/images/pizza.jpg\");\n/* harmony import */ var _images_pasta_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/pasta.jpg */ \"./src/images/pasta.jpg\");\n/* harmony import */ var _images_salad_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/salad.jpg */ \"./src/images/salad.jpg\");\n/* harmony import */ var _images_dessert_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/dessert.jpg */ \"./src/images/dessert.jpg\");\n\n\n\n\n\n\nfunction createMenu() {\n  const menu = document.createElement(\"div\");\n  menu.classList.add(\"menu\");\n\n  const heading = document.createElement(\"h1\");\n  heading.textContent = \"Our Menu\";\n\n  const menuItems = [\n    {\n      name: \"Classic Burger\",\n      price: \"$16\",\n      description:\n        \"Hand-crafted beef patty with aged cheddar, caramelized onions, and our secret sauce\",\n      image: _images_burger_jpg__WEBPACK_IMPORTED_MODULE_0__,\n    },\n    {\n      name: \"Artisan Pizza\",\n      price: \"$18\",\n      description:\n        \"Wood-fired pizza with fresh mozzarella, basil, and San Marzano tomatoes\",\n      image: _images_pizza_jpg__WEBPACK_IMPORTED_MODULE_1__,\n    },\n    {\n      name: \"Homemade Pasta\",\n      price: \"$22\",\n      description:\n        \"Fresh pasta with wild mushrooms and black truffle cream sauce\",\n      image: _images_pasta_jpg__WEBPACK_IMPORTED_MODULE_2__,\n    },\n    {\n      name: \"Garden Salad\",\n      price: \"$14\",\n      description:\n        \"Mixed greens with seasonal vegetables and house-made vinaigrette\",\n      image: _images_salad_jpg__WEBPACK_IMPORTED_MODULE_3__,\n    },\n    {\n      name: \"Chocolate Delight\",\n      price: \"$10\",\n      description: \"Rich chocolate mousse with fresh berries and gold leaf\",\n      image: _images_dessert_jpg__WEBPACK_IMPORTED_MODULE_4__,\n    },\n  ];\n\n  const menuGrid = document.createElement(\"div\");\n  menuGrid.classList.add(\"menu-grid\");\n\n  menuItems.forEach((item) => {\n    const menuItem = document.createElement(\"div\");\n    menuItem.classList.add(\"menu-item\");\n    menuItem.innerHTML = `\n            <div class=\"menu-item-image\">\n                <img src=\"${item.image}\" alt=\"${item.name}\">\n            </div>\n            <div class=\"menu-item-content\">\n                <h2>${item.name}</h2>\n                <p class=\"price\">${item.price}</p>\n                <p class=\"description\">${item.description}</p>\n            </div>\n        `;\n    menuGrid.appendChild(menuItem);\n  });\n\n  menu.appendChild(heading);\n  menu.appendChild(menuGrid);\n\n  return menu;\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/menu.js?");

/***/ }),

/***/ "./src/images/burger.jpg":
/*!*******************************!*\
  !*** ./src/images/burger.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/burger.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/burger.jpg?");

/***/ }),

/***/ "./src/images/chef-cooking.jpg":
/*!*************************************!*\
  !*** ./src/images/chef-cooking.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/chef-cooking.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/chef-cooking.jpg?");

/***/ }),

/***/ "./src/images/dessert.jpg":
/*!********************************!*\
  !*** ./src/images/dessert.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/dessert.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/dessert.jpg?");

/***/ }),

/***/ "./src/images/pasta.jpg":
/*!******************************!*\
  !*** ./src/images/pasta.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/pasta.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/pasta.jpg?");

/***/ }),

/***/ "./src/images/pizza.jpg":
/*!******************************!*\
  !*** ./src/images/pizza.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/pizza.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/pizza.jpg?");

/***/ }),

/***/ "./src/images/restaurant-front.jpg":
/*!*****************************************!*\
  !*** ./src/images/restaurant-front.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/restaurant-front.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/restaurant-front.jpg?");

/***/ }),

/***/ "./src/images/restaurant-interior.jpg":
/*!********************************************!*\
  !*** ./src/images/restaurant-interior.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/restaurant-interior.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/restaurant-interior.jpg?");

/***/ }),

/***/ "./src/images/salad.jpg":
/*!******************************!*\
  !*** ./src/images/salad.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/salad.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/salad.jpg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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