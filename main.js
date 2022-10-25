"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! font/major-mono/major-mono.ttf */ "./src/font/major-mono/major-mono.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! font/sublima/sublima-light.otf */ "./src/font/sublima/sublima-light.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! font/sublima/sublima-extra-bold.otf */ "./src/font/sublima/sublima-extra-bold.otf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n:root {\n    --rvv: calc(1rem + 1vh + 1vw);\n\n\t--blue: #2E5169;\n    --blue-gray: #5E686D;\n    --brown: #6F5746;\n    --brown-muted: #63584C;\n    --brown-tan: #A58F85;\n    --forest-green: #4D663E;\n    --green-brown: #5F563F;\n    --gray-tan: #C9BBA3;\n    --tan-gray: #D1C9BA;\n    --off-white: #E4D9C5;\n    --orange-yellow: #E1B270;\n    --orange-tan: #CDA885;\n    --red: #AC3A3E;\n    --special-red: #824E4A;\n    --tan: #D2BC9B;\n\n\t--title-footer-color: #ba8e5ede;\n\t--nav-bg: #e4d9c574;\n\t--now-button: #749c5d;\n\t--later-button: #b56c67;\n\t--all-button: #e0a85bc2;\n\t--button-outline: #f0991fd5;\n\t--input-focus-outline: #e5982d;\n\t--input-valid-outline:#4D663E;\n\t--main-bg: #e1cfae97;\n\t--item-bg: #2086ca92;\n\t--now-item-bg: #629c407c;\n\t--later-item-bg: #da8680c1;\n\t--description-bg: #d8f2ff95;\n\t--add-item-button: #ba8d5e85;\n\t--add-form-bg: #f0d7a9de;\n\t--edit-form-bg: #f0d7a9;\n\t--priority-button-default: #c8b5a285;\n\t--form-button: #ba8d5e85;\n\t--form-input-bg: #F3EEE5;\n\t--submit-button-bg: #87b6d5b4;\n\t--close-button: #986f4471;\n\t--display-icon: calc(var(--rvv));\n\n\t--dark-text: #ddd2bf;\n\t--dark-border: #272420;\n\t--dark-title-footer-color: #201c19de;\n\t--dark-nav-bg: #23201cc3;\n\t--dark-now-button: #384a2dda;\n\t--dark-later-button: #8e5652;\n\t--dark-all-button: #d49f539c;\n\t--dark-button-outline: #ee9f32ca;\n\t--dark-input-focus-outline: #ee9f32ca;\n\t--dark-input-valid-outline:#4D663E;\n\t--dark-main-bg: #24211da1;\n\t--dark-item-bg: #123c5892;\n\t--dark-now-item-bg: rgba(46, 80, 28, 0.527);\n\t--dark-later-item-bg: #754743b2;\n\t--dark-add-item-button: #815e3670;\n\t--dark-add-form-bg: #3c3935de;\n\t--dark-priority-button-default: #8b776285;\n\t--dark-form-button: #ba8d5e85;\n\t--dark-form-input-bg: #aba69a;\n\t--dark-submit-button-bg: #668da8b4;\n\t--dark-close-button: #96857385;\n}\n\n@font-face {\n\tfont-family: 'Major Mono';\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n\tfont-family: 'Sublima';\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n@font-face {\n\tfont-family: 'Sublima Bold';\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n\nhtml,\nbody {\n    box-sizing: border-box;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n}\n\nheader {\n\theight: 15vh;\n\tmin-height: calc(3*var(--rvv));\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.title {\n\tmin-height: calc(0.8*var(--rvv));\n\tflex: 1;\n\toverflow-x: hidden;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: calc(0.6*var(--rvv));\n\tbackground-color: var(--title-footer-color);\n\tborder-bottom: 1px solid black;\n}\n\n.title-text {\n\ttext-align: center;\n\tfont-family: 'Sublima';\n\tfont-size: calc(0.45*var(--rvv));\n\tletter-spacing: calc(0.1*var(--rvv));\n\ttext-indent: calc(0.1*var(--rvv));\n}\n\n.light-mode,\n.dark-mode {\n\tcursor: pointer;\n\theight: var(--display-icon);\n\twidth: var(--display-icon);\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.light-mode.dark,\n.dark-mode.dark {\n\tfilter: invert(80%);\n}\n\n.light-mode img,\n.dark-mode img {\n\theight: 80%;\n\twidth: 80%;\n}\n\n.selected-display.light-mode,\n.selected-display.dark-mode {\n\ttransition: 0.25s linear;\n}\n\n.selected-display.light-mode img {\n\tfilter: drop-shadow(0 0 5px var(--red));\n\ttransform: scale(1.2);\n}\n\n.selected-display.dark-mode img {\n\tfilter: drop-shadow(0 0 5px black);\n\ttransform: scale(1.2);\n}\n\n.nav {\n\tflex: 2;\n\tdisplay: flex;\n\tjustify-content: space-around;\n\talign-items: center;\n\tfont-family: 'Major Mono';\n\tbackground-color: var(--nav-bg);\n\tborder-bottom: 1px solid black;\n}\n\n.nav div {\n\tfont-size: calc(0.6*var(--rvv));\n\tcursor: pointer;\n\twidth: calc(3*var(--rvv));\n\theight: calc(var(--rvv));\n\tborder: 1px solid black;\n\tborder-radius: 15%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n}\n\n.now {\n\tbackground-color: var(--now-button);\n}\n\n.now,\n.all {\n\tletter-spacing: calc(0.3*var(--rvv));\n\ttext-indent: calc(0.3*var(--rvv));\n}\n\n.later {\n\tbackground-color: var(--later-button);\n\tletter-spacing: calc(0.1*var(--rvv));\n\ttext-indent: calc(0.1*var(--rvv));\n}\n\n.all {\n\tbackground-color: var(--all-button);\n}\n\n.selected {\n\tbox-shadow: 0 0 0 3px var(--button-outline);\n}\n\n.main {\n\tposition: relative;\n\tflex: auto;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tpadding: calc(0.5*var(--rvv)) 0;\n\tgap: calc(0.6*var(--rvv));\n\tbackground-color: var(--main-bg);\n}\n\n.displayed-item {\n\twidth: 90vw;\n\tmax-width: calc(15*var(--rvv));\n\tposition: relative;\n\tfont-family: 'Sublima';\n\tfont-size: calc(0.6*var(--rvv));\n\tpadding: calc(0.1*var(--rvv)) calc(0.3*var(--rvv));\n\tborder: 1px solid black;\n\tborder-radius: calc(0.8*var(--rvv));\n\tmargin: 0 calc(0.7*var(--rvv));\n\tdisplay: grid;\n\tgrid-template-columns: calc(1.4*var(--rvv)) 1fr calc(var(--rvv)) calc(var(--rvv));\n\tgrid-template-rows: 1fr;\n\tgrid-template-areas: \"checkbox title edit expand\";\n\tbackground-color: var(--item-bg);\n}\n\n.displayed-item.now-item {\n\tbackground-color: var(--now-item-bg);\n}\n\n.displayed-item.later-item {\n\tbackground-color: var(--later-item-bg);\n}\n\n.expanded-item {\n\tdisplay: grid;\n\tgrid-template-columns: calc(1.4*var(--rvv)) 1fr calc(var(--rvv)) calc(var(--rvv));\n\tgrid-template-rows: calc(1.2*var(--rvv)) 1fr;\n\tgrid-template-areas: \n\t\t\"checkbox title edit expand\"\n\t\t\". description . delete\";\n}\n\n.expanded-item .item-description {\n\tmargin-right: calc(0.3*var(--rvv));\n\tmargin-bottom: calc(0.3*var(--rvv));\n}\n\n.expanded-item .item-title {\n\tcursor: auto;\n}\n\n.completed-item {\n\tfilter: grayscale(70%);\n}\n\n.completed-item .item-title {\n\tfont-style: italic;\n\ttext-decoration: underline calc(0.04*var(--rvv)) black;\n\ttext-decoration-skip-ink: none;\n\ttext-underline-offset: calc(-0.2*var(--rvv));\n}\n\n.completed-item .item-description {\n\tfont-style: italic;\n}\n\n.displayed-item.add-item-button {\n\tpadding: 0;\n\tmargin: 0;\n\tcursor: pointer;\n\tbackground-color: var(--add-item-button);\n\theight: calc(1.5*var(--rvv));\n\twidth: calc(1.5*var(--rvv));\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.add-item-button img {\n\tmax-height: 100%;\n\tmax-width: 100%;\n}\n\n.displayed-item.add-form {\n\tdisplay: block;\n\tbackground-color: var(--add-form-bg);\n}\n\n.add-form-itself,\n.edit-form-itself {\n\tdisplay: grid;\n\tgrid-template-rows: calc(1.7*var(--rvv)) calc(var(--rvv)) calc(4*var(--rvv)) calc(var(--rvv)) calc(2.2*var(--rvv));\n\trow-gap: calc(0.25*var(--rvv));\n\tgrid-template-areas:\n\t\t\"form-title\"\n\t\t\"title-section\"\n\t\t\"description-section\"\n\t\t\"priority-section\"\n\t\t\"submit-button\";\n}\n\n.edit-backdrop {\n\tz-index: 2;\n\tposition: fixed;\n\twidth: 100vw;\n\theight: 100vh;\n\tbackdrop-filter: blur(5px);\n}\n\n.edit-form-itself {\n\tposition: fixed;\n\tz-index: 3;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n\tbackground-color: var(--edit-form-bg);\n\twidth: 90vw;\n\tmax-width: calc(15*var(--rvv));\n\tposition: relative;\n\tfont-family: 'Sublima';\n\tfont-size: calc(0.6*var(--rvv));\n\tpadding: calc(0.1*var(--rvv)) calc(0.3*var(--rvv));\n\tborder: 1px solid black;\n\tborder-radius: calc(0.8*var(--rvv));\n}\n\n.form-title {\n\tmargin: 0 1%;\n\tmax-width: 90vw;\n\tgrid-area: form-title;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.form-title-text {\n\tfont-size: calc(0.8*var(--rvv));\n}\n\n.form-title-text:hover {\n\tfont-style: italic;\n}\n\n.close-button {\n\tcursor: pointer;\n\tbackground-color: var(--close-button);\n\tmargin-left: auto;\n\tborder: 1px solid black;\n\theight: calc(0.9*var(--rvv));\n\twidth: calc(0.9*var(--rvv));\n\tborder-radius: calc(var(--rvv));\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.close-button img {\n\theight: 100%;\n}\n\n.title-section {\n\tgrid-area: title-section;\n\tdisplay: grid;\n\tgrid-template-columns: calc(3.5*var(--rvv)) 1fr;\n}\n\n.title-section label {\n\tfont-size: calc(0.5*var(--rvv));\n}\n\n.title-section input,\n.description-section textarea {\n\twidth: 93%;\n\tbackground-color: var(--form-input-bg);\n\tborder: 1px solid black;\n\tborder-radius: calc(var(--rvv));\n\tpadding-left: 10px;\n\tfont-family: 'Sublima';\n\tfont-size: calc(0.45*var(--rvv));\n}\n\n.description-section textarea {\n\tborder-radius: calc(0.5*var(--rvv));\n\tresize: none;\n}\n\ninput:focus,\ntextarea:focus {\n\tappearance: none;\n\toutline: none;\n\tbox-shadow: 0 0 0 3px var(--input-focus-outline);\n}\n\ninput:not(:focus),\ntextarea:not(:focus) {\n\tcursor: pointer;\n}\n\n.description-section {\n\tgrid-area: description-section;\n\tdisplay: grid;\n\tgrid-template-columns: calc(3.5*var(--rvv)) 1fr;\n}\n\n.description-section label {\n\tfont-size: calc(0.5*var(--rvv));\n}\n\n.priority-section {\n\tmargin-top: 2px;\n\tgrid-area: priority-section;\n\tdisplay: grid;\n\tgrid-template-columns: calc(3.5*var(--rvv)) 1fr 1fr;\n}\n\n.priority-label {\n\tfont-size: calc(0.5*var(--rvv));\n}\n\n.radio-option {\n\tcursor: pointer;\n\tfont-family: 'Major Mono';\n\twidth: calc(3*var(--rvv));\n\theight: calc(var(--rvv));\n\tborder: 1px solid black;\n\tborder-radius: 15%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n\tbackground-color: var(--priority-button-default);\n}\n\n.radio-option label {\n\tcursor: pointer;\n}\n\n.now-option {\n\tjustify-self: center;\n\tletter-spacing: calc(0.3*var(--rvv));\n\ttext-indent: calc(0.3*var(--rvv));\n}\n\n.now-option.selected-priority {\n\tbackground-color: var(--now-button);\n\tbox-shadow: 0 0 0 3px var(--button-outline);\n}\n\n.later-option {\n\tjustify-self: center;\n\tletter-spacing: calc(0.1*var(--rvv));\n\ttext-indent: calc(0.1*var(--rvv));\n}\n\n.later-option.selected-priority {\n\tbackground-color: var(--later-button);\n\tbox-shadow: 0 0 0 3px var(--button-outline);\n}\n\n.radio-input {\n\tdisplay: none;\n\tpadding: 0;\n\tmargin: 0;\n\tappearance: none;\n}\n\n.submit-button {\n\tcursor: pointer;\n\tgrid-area: submit-button;\n\tfont-family: 'Sublima';\n\tbackground-color: var(--submit-button-bg);\n\talign-self: center;\n\tjustify-self: center;\n\tborder: 1px solid black;\n\theight: calc(1.5*var(--rvv));\n\twidth: 95%;\n\tborder-radius: calc(var(--rvv));\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.submit-button img {\n\theight: 100%;\n}\n\n.displayed-item img {\n\tcursor: pointer;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.checkbox img,\n.expand img {\n\twidth: calc(var(--rvv));\n}\n\n.edit img {\n\twidth: calc(0.8*var(--rvv));\n}\n\n.checkbox {\n\tgrid-area: checkbox;\n\tmargin-left: calc(0.2*var(--rvv));\n}\n\n.item-title {\n\tposition: relative;\n\tbottom: 2px;\n\tgrid-area: title;\n\tjustify-self: start;\n}\n\n.expandable-title {\n\tcursor: pointer;\n}\n\n.edit {\n\tgrid-area: edit;\n}\n\n.expand {\n\tgrid-area: expand;\n}\n\n.shrink {\n\tgrid-area: expand;\n\taspect-ratio: 1 / 1;\n}\n\n.shrink img {\n\theight: calc(var(--rvv));\n}\n\n.item-description {\n\tborder-radius: 3px;\n\tfont-style: italic;\n\tgrid-area: description;\n\talign-self: flex-start;\n\tjustify-self: flex-start;\n\tfont-size: 80%;\n}\n\n.expanded-item .delete {\n\tgrid-area: delete;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: flex-end;\n\tmargin-bottom: calc(0.3*var(--rvv));\n}\n\n.delete img {\n\theight: calc(var(--rvv));\n}\n\nfooter {\n\theight: 5vh;\n\tmin-height: calc(0.8*var(--rvv));\n\tbackground-color: var(--title-footer-color);\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-size: calc(0.5*var(--rvv));\n\tborder-top: 1px solid black;\n\tfont-family: 'Sublima';\n\tfont-size: calc(0.4*var(--rvv));\n\tletter-spacing: calc(0.1*var(--rvv));\n\ttext-indent: calc(0.1*var(--rvv));\n}\n\n/* dark mode styling: */\n\nbody.dark {\n\tcolor: var(--dark-text);\n}\n\n.title.dark {\n\tbackground-color: var(--dark-title-footer-color);\n\tborder-bottom: 1px solid var(--dark-border);\n}\n\n.nav.dark {\n\tbackground-color: var(--dark-nav-bg);\n\tborder-bottom: 1px solid var(--dark-border);\n}\n\n.nav.dark div {\n\tborder: 1px solid var(--dark-border);\n}\n\n.now.dark {\n\tbackground-color: var(--dark-now-button);\n}\n\n.later.dark {\n\tbackground-color: var(--dark-later-button);\n}\n\n.all.dark {\n\tbackground-color: var(--dark-all-button);\n}\n\n.selected.dark {\n\tbox-shadow: 0 0 0 3px var(--dark-button-outline);\n}\n\n.main.dark {\n\tbackground-color: var(--dark-main-bg);\n}\n\n.displayed-item.dark {\n\tborder: 1px solid var(--dark-border);\n\tbackground-color: var(--dark-item-bg);\n}\n\n.displayed-item.now-item.dark {\n\tbackground-color: var(--dark-now-item-bg);\n}\n\n.displayed-item.later-item.dark {\n\tbackground-color: var(--dark-later-item-bg);\n}\n\n.completed-item .item-title.dark {\n\tfilter: brightness(80%);\n\ttext-decoration: underline calc(0.04*var(--rvv)) var(--dark-text);\n\ttext-decoration-skip-ink: none;\n}\n\n.displayed-item.add-form.dark {\n\tbackground-color: var(--dark-add-form-bg);\n}\n\n.edit-form-itself.dark {\n\tbackground-color: var(--dark-add-form-bg);\n}\n\n.close-button.dark {\n\tbackground-color: var(--dark-close-button);\n\tborder: 1px solid var(--dark-border);\n}\n\n.title-section.dark input,\n.description-section.dark textarea {\n\tbackground-color: var(--dark-form-input-bg);\n\tborder: 1px solid var(--dark-border);\n}\n\ninput.dark:focus,\ntextarea.dark:focus {\n\tbox-shadow: 0 0 0 3px var(--dark-input-focus-outline);\n}\n\n.radio-option.dark {\n\tborder: 1px solid var(--dark-border);\n\tbackground-color: var(--dark-priority-button-default);\n}\n\n.now-option.selected-priority.dark {\n\tbackground-color: var(--dark-now-button);\n\tbox-shadow: 0 0 0 3px var(--dark-button-outline);\n}\n\n.later-option.selected-priority.dark {\n\tbackground-color: var(--dark-later-button);\n\tbox-shadow: 0 0 0 3px var(--dark-button-outline);\n}\n\n.displayed-item.add-item-button.dark {\n\tbackground-color: var(--dark-add-item-button);\n}\n\n.submit-button.dark {\n\tbackground-color: var(--dark-submit-button-bg);\n\tborder: 1px solid var(--dark-border);\n}\n\nfooter.dark {\n\tbackground-color: var(--dark-title-footer-color);\n\tborder-top: 1px solid var(--dark-border);\n}\n\n/* desktop version: */\n@media only screen and (min-width: 750px) {\n\n\t.nav div {\n\t\ttransition: 0.075s linear;\n\t}\n\n\t.nav div:hover {\n\t\ttransform: scale(1.05);\n\t}\n\n\t.checkbox,\n\t.edit,\n\t.expand,\n\t.shrink,\n\t.delete,\n\t.add-item-button,\n\t.radio-option,\n\t.submit-button,\n\t.close-button {\n\t\ttransition: 0.075s linear;\n\t}\n\n\t.checkbox:hover {\n\t\ttransform: scale(1.075);\n\t}\n\n\t.edit:hover {\n\t\ttransform: scale(1.1);\n\t}\n\n\t.expand:hover {\n\t\ttransform: scale(1.25);\n\t}\n\n\t.shrink:hover {\n\t\ttransform: scale(1.1);\n\t}\n\n\t.delete:hover {\n\t\ttransform: scale(1.075);\n\t}\n\n\t.add-item-button:hover {\n\t\ttransform: scale(1.05);\n\t}\n\n\t.radio-option:hover {\n\t\ttransform: scale(1.05);\n\t}\n\n\t.submit-button:hover {\n\t\ttransform: scale(1.01);\n\t}\n\n\t.close-button:hover {\n\t\ttransform: scale(1.1);\n\t}\n\n}\n\n@media only screen and (max-width: 750px) {\n\t.completed-item .item-title {\n\t\tfont-style: italic;\n\t\ttext-decoration: line-through;\n\t\ttext-decoration-skip-ink: none;\n\t\ttext-underline-offset: 0;\n\t}\n}\n\n@media screen and (orientation: landscape) {\n\tbody {\n\t\tmin-height: 100vh;\n\t\tmin-width: 100vw;\n\t}\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;;AAEA;IACI,6BAA6B;;CAEhC,eAAe;IACZ,oBAAoB;IACpB,gBAAgB;IAChB,sBAAsB;IACtB,oBAAoB;IACpB,uBAAuB;IACvB,sBAAsB;IACtB,mBAAmB;IACnB,mBAAmB;IACnB,oBAAoB;IACpB,wBAAwB;IACxB,qBAAqB;IACrB,cAAc;IACd,sBAAsB;IACtB,cAAc;;CAEjB,+BAA+B;CAC/B,mBAAmB;CACnB,qBAAqB;CACrB,uBAAuB;CACvB,uBAAuB;CACvB,2BAA2B;CAC3B,8BAA8B;CAC9B,6BAA6B;CAC7B,oBAAoB;CACpB,oBAAoB;CACpB,wBAAwB;CACxB,0BAA0B;CAC1B,2BAA2B;CAC3B,4BAA4B;CAC5B,wBAAwB;CACxB,uBAAuB;CACvB,oCAAoC;CACpC,wBAAwB;CACxB,wBAAwB;CACxB,6BAA6B;CAC7B,yBAAyB;CACzB,gCAAgC;;CAEhC,oBAAoB;CACpB,sBAAsB;CACtB,oCAAoC;CACpC,wBAAwB;CACxB,4BAA4B;CAC5B,4BAA4B;CAC5B,4BAA4B;CAC5B,gCAAgC;CAChC,qCAAqC;CACrC,kCAAkC;CAClC,yBAAyB;CACzB,yBAAyB;CACzB,2CAA2C;CAC3C,+BAA+B;CAC/B,iCAAiC;CACjC,6BAA6B;CAC7B,yCAAyC;CACzC,6BAA6B;CAC7B,6BAA6B;CAC7B,kCAAkC;CAClC,8BAA8B;AAC/B;;AAEA;CACC,yBAAyB;CACzB,4CAA0C;AAC3C;;AAEA;CACC,sBAAsB;CACtB,4CAA0C;AAC3C;;AAEA;CACC,2BAA2B;CAC3B,4CAA+C;AAChD;;;AAGA;;IAEI,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;CACC,YAAY;CACZ,8BAA8B;CAC9B,aAAa;CACb,sBAAsB;AACvB;;AAEA;CACC,gCAAgC;CAChC,OAAO;CACP,kBAAkB;CAClB,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,yBAAyB;CACzB,2CAA2C;CAC3C,8BAA8B;AAC/B;;AAEA;CACC,kBAAkB;CAClB,sBAAsB;CACtB,gCAAgC;CAChC,oCAAoC;CACpC,iCAAiC;AAClC;;AAEA;;CAEC,eAAe;CACf,2BAA2B;CAC3B,0BAA0B;CAC1B,aAAa;CACb,uBAAuB;CACvB,mBAAmB;AACpB;;AAEA;;CAEC,mBAAmB;AACpB;;AAEA;;CAEC,WAAW;CACX,UAAU;AACX;;AAEA;;CAEC,wBAAwB;AACzB;;AAEA;CACC,uCAAuC;CACvC,qBAAqB;AACtB;;AAEA;CACC,kCAAkC;CAClC,qBAAqB;AACtB;;AAEA;CACC,OAAO;CACP,aAAa;CACb,6BAA6B;CAC7B,mBAAmB;CACnB,yBAAyB;CACzB,+BAA+B;CAC/B,8BAA8B;AAC/B;;AAEA;CACC,+BAA+B;CAC/B,eAAe;CACf,yBAAyB;CACzB,wBAAwB;CACxB,uBAAuB;CACvB,kBAAkB;CAClB,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,kBAAkB;AACnB;;AAEA;CACC,mCAAmC;AACpC;;AAEA;;CAEC,oCAAoC;CACpC,iCAAiC;AAClC;;AAEA;CACC,qCAAqC;CACrC,oCAAoC;CACpC,iCAAiC;AAClC;;AAEA;CACC,mCAAmC;AACpC;;AAEA;CACC,2CAA2C;AAC5C;;AAEA;CACC,kBAAkB;CAClB,UAAU;CACV,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB,+BAA+B;CAC/B,yBAAyB;CACzB,gCAAgC;AACjC;;AAEA;CACC,WAAW;CACX,8BAA8B;CAC9B,kBAAkB;CAClB,sBAAsB;CACtB,+BAA+B;CAC/B,kDAAkD;CAClD,uBAAuB;CACvB,mCAAmC;CACnC,8BAA8B;CAC9B,aAAa;CACb,iFAAiF;CACjF,uBAAuB;CACvB,iDAAiD;CACjD,gCAAgC;AACjC;;AAEA;CACC,oCAAoC;AACrC;;AAEA;CACC,sCAAsC;AACvC;;AAEA;CACC,aAAa;CACb,iFAAiF;CACjF,4CAA4C;CAC5C;;0BAEyB;AAC1B;;AAEA;CACC,kCAAkC;CAClC,mCAAmC;AACpC;;AAEA;CACC,YAAY;AACb;;AAEA;CACC,sBAAsB;AACvB;;AAEA;CACC,kBAAkB;CAClB,sDAAsD;CACtD,8BAA8B;CAC9B,4CAA4C;AAC7C;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,UAAU;CACV,SAAS;CACT,eAAe;CACf,wCAAwC;CACxC,4BAA4B;CAC5B,2BAA2B;CAC3B,aAAa;CACb,uBAAuB;CACvB,mBAAmB;AACpB;;AAEA;CACC,gBAAgB;CAChB,eAAe;AAChB;;AAEA;CACC,cAAc;CACd,oCAAoC;AACrC;;AAEA;;CAEC,aAAa;CACb,kHAAkH;CAClH,8BAA8B;CAC9B;;;;;iBAKgB;AACjB;;AAEA;CACC,UAAU;CACV,eAAe;CACf,YAAY;CACZ,aAAa;CACb,0BAA0B;AAC3B;;AAEA;CACC,eAAe;CACf,UAAU;IACP,QAAQ;IACR,SAAS;IACT,gCAAgC;CACnC,qCAAqC;CACrC,WAAW;CACX,8BAA8B;CAC9B,kBAAkB;CAClB,sBAAsB;CACtB,+BAA+B;CAC/B,kDAAkD;CAClD,uBAAuB;CACvB,mCAAmC;AACpC;;AAEA;CACC,YAAY;CACZ,eAAe;CACf,qBAAqB;CACrB,aAAa;CACb,uBAAuB;CACvB,mBAAmB;AACpB;;AAEA;CACC,+BAA+B;AAChC;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,eAAe;CACf,qCAAqC;CACrC,iBAAiB;CACjB,uBAAuB;CACvB,4BAA4B;CAC5B,2BAA2B;CAC3B,+BAA+B;CAC/B,aAAa;CACb,uBAAuB;CACvB,mBAAmB;AACpB;;AAEA;CACC,YAAY;AACb;;AAEA;CACC,wBAAwB;CACxB,aAAa;CACb,+CAA+C;AAChD;;AAEA;CACC,+BAA+B;AAChC;;AAEA;;CAEC,UAAU;CACV,sCAAsC;CACtC,uBAAuB;CACvB,+BAA+B;CAC/B,kBAAkB;CAClB,sBAAsB;CACtB,gCAAgC;AACjC;;AAEA;CACC,mCAAmC;CACnC,YAAY;AACb;;AAEA;;CAEC,gBAAgB;CAChB,aAAa;CACb,gDAAgD;AACjD;;AAEA;;CAEC,eAAe;AAChB;;AAEA;CACC,8BAA8B;CAC9B,aAAa;CACb,+CAA+C;AAChD;;AAEA;CACC,+BAA+B;AAChC;;AAEA;CACC,eAAe;CACf,2BAA2B;CAC3B,aAAa;CACb,mDAAmD;AACpD;;AAEA;CACC,+BAA+B;AAChC;;AAEA;CACC,eAAe;CACf,yBAAyB;CACzB,yBAAyB;CACzB,wBAAwB;CACxB,uBAAuB;CACvB,kBAAkB;CAClB,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,kBAAkB;CAClB,gDAAgD;AACjD;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,oBAAoB;CACpB,oCAAoC;CACpC,iCAAiC;AAClC;;AAEA;CACC,mCAAmC;CACnC,2CAA2C;AAC5C;;AAEA;CACC,oBAAoB;CACpB,oCAAoC;CACpC,iCAAiC;AAClC;;AAEA;CACC,qCAAqC;CACrC,2CAA2C;AAC5C;;AAEA;CACC,aAAa;CACb,UAAU;CACV,SAAS;CACT,gBAAgB;AACjB;;AAEA;CACC,eAAe;CACf,wBAAwB;CACxB,sBAAsB;CACtB,yCAAyC;CACzC,kBAAkB;CAClB,oBAAoB;CACpB,uBAAuB;CACvB,4BAA4B;CAC5B,UAAU;CACV,+BAA+B;CAC/B,aAAa;CACb,uBAAuB;CACvB,mBAAmB;AACpB;;AAEA;CACC,YAAY;AACb;;AAEA;CACC,eAAe;CACf,aAAa;CACb,uBAAuB;CACvB,mBAAmB;AACpB;;AAEA;;CAEC,uBAAuB;AACxB;;AAEA;CACC,2BAA2B;AAC5B;;AAEA;CACC,mBAAmB;CACnB,iCAAiC;AAClC;;AAEA;CACC,kBAAkB;CAClB,WAAW;CACX,gBAAgB;CAChB,mBAAmB;AACpB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,iBAAiB;AAClB;;AAEA;CACC,iBAAiB;CACjB,mBAAmB;AACpB;;AAEA;CACC,wBAAwB;AACzB;;AAEA;CACC,kBAAkB;CAClB,kBAAkB;CAClB,sBAAsB;CACtB,sBAAsB;CACtB,wBAAwB;CACxB,cAAc;AACf;;AAEA;CACC,iBAAiB;CACjB,aAAa;CACb,sBAAsB;CACtB,yBAAyB;CACzB,mCAAmC;AACpC;;AAEA;CACC,wBAAwB;AACzB;;AAEA;CACC,WAAW;CACX,gCAAgC;CAChC,2CAA2C;CAC3C,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,+BAA+B;CAC/B,2BAA2B;CAC3B,sBAAsB;CACtB,+BAA+B;CAC/B,oCAAoC;CACpC,iCAAiC;AAClC;;AAEA,uBAAuB;;AAEvB;CACC,uBAAuB;AACxB;;AAEA;CACC,gDAAgD;CAChD,2CAA2C;AAC5C;;AAEA;CACC,oCAAoC;CACpC,2CAA2C;AAC5C;;AAEA;CACC,oCAAoC;AACrC;;AAEA;CACC,wCAAwC;AACzC;;AAEA;CACC,0CAA0C;AAC3C;;AAEA;CACC,wCAAwC;AACzC;;AAEA;CACC,gDAAgD;AACjD;;AAEA;CACC,qCAAqC;AACtC;;AAEA;CACC,oCAAoC;CACpC,qCAAqC;AACtC;;AAEA;CACC,yCAAyC;AAC1C;;AAEA;CACC,2CAA2C;AAC5C;;AAEA;CACC,uBAAuB;CACvB,iEAAiE;CACjE,8BAA8B;AAC/B;;AAEA;CACC,yCAAyC;AAC1C;;AAEA;CACC,yCAAyC;AAC1C;;AAEA;CACC,0CAA0C;CAC1C,oCAAoC;AACrC;;AAEA;;CAEC,2CAA2C;CAC3C,oCAAoC;AACrC;;AAEA;;CAEC,qDAAqD;AACtD;;AAEA;CACC,oCAAoC;CACpC,qDAAqD;AACtD;;AAEA;CACC,wCAAwC;CACxC,gDAAgD;AACjD;;AAEA;CACC,0CAA0C;CAC1C,gDAAgD;AACjD;;AAEA;CACC,6CAA6C;AAC9C;;AAEA;CACC,8CAA8C;CAC9C,oCAAoC;AACrC;;AAEA;CACC,gDAAgD;CAChD,wCAAwC;AACzC;;AAEA,qBAAqB;AACrB;;CAEC;EACC,yBAAyB;CAC1B;;CAEA;EACC,sBAAsB;CACvB;;CAEA;;;;;;;;;EASC,yBAAyB;CAC1B;;CAEA;EACC,uBAAuB;CACxB;;CAEA;EACC,qBAAqB;CACtB;;CAEA;EACC,sBAAsB;CACvB;;CAEA;EACC,qBAAqB;CACtB;;CAEA;EACC,uBAAuB;CACxB;;CAEA;EACC,sBAAsB;CACvB;;CAEA;EACC,sBAAsB;CACvB;;CAEA;EACC,sBAAsB;CACvB;;CAEA;EACC,qBAAqB;CACtB;;AAED;;AAEA;CACC;EACC,kBAAkB;EAClB,6BAA6B;EAC7B,8BAA8B;EAC9B,wBAAwB;CACzB;AACD;;AAEA;CACC;EACC,iBAAiB;EACjB,gBAAgB;CACjB;AACD","sourcesContent":["html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n:root {\n    --rvv: calc(1rem + 1vh + 1vw);\n\n\t--blue: #2E5169;\n    --blue-gray: #5E686D;\n    --brown: #6F5746;\n    --brown-muted: #63584C;\n    --brown-tan: #A58F85;\n    --forest-green: #4D663E;\n    --green-brown: #5F563F;\n    --gray-tan: #C9BBA3;\n    --tan-gray: #D1C9BA;\n    --off-white: #E4D9C5;\n    --orange-yellow: #E1B270;\n    --orange-tan: #CDA885;\n    --red: #AC3A3E;\n    --special-red: #824E4A;\n    --tan: #D2BC9B;\n\n\t--title-footer-color: #ba8e5ede;\n\t--nav-bg: #e4d9c574;\n\t--now-button: #749c5d;\n\t--later-button: #b56c67;\n\t--all-button: #e0a85bc2;\n\t--button-outline: #f0991fd5;\n\t--input-focus-outline: #e5982d;\n\t--input-valid-outline:#4D663E;\n\t--main-bg: #e1cfae97;\n\t--item-bg: #2086ca92;\n\t--now-item-bg: #629c407c;\n\t--later-item-bg: #da8680c1;\n\t--description-bg: #d8f2ff95;\n\t--add-item-button: #ba8d5e85;\n\t--add-form-bg: #f0d7a9de;\n\t--edit-form-bg: #f0d7a9;\n\t--priority-button-default: #c8b5a285;\n\t--form-button: #ba8d5e85;\n\t--form-input-bg: #F3EEE5;\n\t--submit-button-bg: #87b6d5b4;\n\t--close-button: #986f4471;\n\t--display-icon: calc(var(--rvv));\n\n\t--dark-text: #ddd2bf;\n\t--dark-border: #272420;\n\t--dark-title-footer-color: #201c19de;\n\t--dark-nav-bg: #23201cc3;\n\t--dark-now-button: #384a2dda;\n\t--dark-later-button: #8e5652;\n\t--dark-all-button: #d49f539c;\n\t--dark-button-outline: #ee9f32ca;\n\t--dark-input-focus-outline: #ee9f32ca;\n\t--dark-input-valid-outline:#4D663E;\n\t--dark-main-bg: #24211da1;\n\t--dark-item-bg: #123c5892;\n\t--dark-now-item-bg: rgba(46, 80, 28, 0.527);\n\t--dark-later-item-bg: #754743b2;\n\t--dark-add-item-button: #815e3670;\n\t--dark-add-form-bg: #3c3935de;\n\t--dark-priority-button-default: #8b776285;\n\t--dark-form-button: #ba8d5e85;\n\t--dark-form-input-bg: #aba69a;\n\t--dark-submit-button-bg: #668da8b4;\n\t--dark-close-button: #96857385;\n}\n\n@font-face {\n\tfont-family: 'Major Mono';\n\tsrc: url('font/major-mono/major-mono.ttf');\n}\n\n@font-face {\n\tfont-family: 'Sublima';\n\tsrc: url('font/sublima/sublima-light.otf');\n}\n\n@font-face {\n\tfont-family: 'Sublima Bold';\n\tsrc: url('font/sublima/sublima-extra-bold.otf');\n}\n\n\nhtml,\nbody {\n    box-sizing: border-box;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n}\n\nheader {\n\theight: 15vh;\n\tmin-height: calc(3*var(--rvv));\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.title {\n\tmin-height: calc(0.8*var(--rvv));\n\tflex: 1;\n\toverflow-x: hidden;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: calc(0.6*var(--rvv));\n\tbackground-color: var(--title-footer-color);\n\tborder-bottom: 1px solid black;\n}\n\n.title-text {\n\ttext-align: center;\n\tfont-family: 'Sublima';\n\tfont-size: calc(0.45*var(--rvv));\n\tletter-spacing: calc(0.1*var(--rvv));\n\ttext-indent: calc(0.1*var(--rvv));\n}\n\n.light-mode,\n.dark-mode {\n\tcursor: pointer;\n\theight: var(--display-icon);\n\twidth: var(--display-icon);\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.light-mode.dark,\n.dark-mode.dark {\n\tfilter: invert(80%);\n}\n\n.light-mode img,\n.dark-mode img {\n\theight: 80%;\n\twidth: 80%;\n}\n\n.selected-display.light-mode,\n.selected-display.dark-mode {\n\ttransition: 0.25s linear;\n}\n\n.selected-display.light-mode img {\n\tfilter: drop-shadow(0 0 5px var(--red));\n\ttransform: scale(1.2);\n}\n\n.selected-display.dark-mode img {\n\tfilter: drop-shadow(0 0 5px black);\n\ttransform: scale(1.2);\n}\n\n.nav {\n\tflex: 2;\n\tdisplay: flex;\n\tjustify-content: space-around;\n\talign-items: center;\n\tfont-family: 'Major Mono';\n\tbackground-color: var(--nav-bg);\n\tborder-bottom: 1px solid black;\n}\n\n.nav div {\n\tfont-size: calc(0.6*var(--rvv));\n\tcursor: pointer;\n\twidth: calc(3*var(--rvv));\n\theight: calc(var(--rvv));\n\tborder: 1px solid black;\n\tborder-radius: 15%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n}\n\n.now {\n\tbackground-color: var(--now-button);\n}\n\n.now,\n.all {\n\tletter-spacing: calc(0.3*var(--rvv));\n\ttext-indent: calc(0.3*var(--rvv));\n}\n\n.later {\n\tbackground-color: var(--later-button);\n\tletter-spacing: calc(0.1*var(--rvv));\n\ttext-indent: calc(0.1*var(--rvv));\n}\n\n.all {\n\tbackground-color: var(--all-button);\n}\n\n.selected {\n\tbox-shadow: 0 0 0 3px var(--button-outline);\n}\n\n.main {\n\tposition: relative;\n\tflex: auto;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tpadding: calc(0.5*var(--rvv)) 0;\n\tgap: calc(0.6*var(--rvv));\n\tbackground-color: var(--main-bg);\n}\n\n.displayed-item {\n\twidth: 90vw;\n\tmax-width: calc(15*var(--rvv));\n\tposition: relative;\n\tfont-family: 'Sublima';\n\tfont-size: calc(0.6*var(--rvv));\n\tpadding: calc(0.1*var(--rvv)) calc(0.3*var(--rvv));\n\tborder: 1px solid black;\n\tborder-radius: calc(0.8*var(--rvv));\n\tmargin: 0 calc(0.7*var(--rvv));\n\tdisplay: grid;\n\tgrid-template-columns: calc(1.4*var(--rvv)) 1fr calc(var(--rvv)) calc(var(--rvv));\n\tgrid-template-rows: 1fr;\n\tgrid-template-areas: \"checkbox title edit expand\";\n\tbackground-color: var(--item-bg);\n}\n\n.displayed-item.now-item {\n\tbackground-color: var(--now-item-bg);\n}\n\n.displayed-item.later-item {\n\tbackground-color: var(--later-item-bg);\n}\n\n.expanded-item {\n\tdisplay: grid;\n\tgrid-template-columns: calc(1.4*var(--rvv)) 1fr calc(var(--rvv)) calc(var(--rvv));\n\tgrid-template-rows: calc(1.2*var(--rvv)) 1fr;\n\tgrid-template-areas: \n\t\t\"checkbox title edit expand\"\n\t\t\". description . delete\";\n}\n\n.expanded-item .item-description {\n\tmargin-right: calc(0.3*var(--rvv));\n\tmargin-bottom: calc(0.3*var(--rvv));\n}\n\n.expanded-item .item-title {\n\tcursor: auto;\n}\n\n.completed-item {\n\tfilter: grayscale(70%);\n}\n\n.completed-item .item-title {\n\tfont-style: italic;\n\ttext-decoration: underline calc(0.04*var(--rvv)) black;\n\ttext-decoration-skip-ink: none;\n\ttext-underline-offset: calc(-0.2*var(--rvv));\n}\n\n.completed-item .item-description {\n\tfont-style: italic;\n}\n\n.displayed-item.add-item-button {\n\tpadding: 0;\n\tmargin: 0;\n\tcursor: pointer;\n\tbackground-color: var(--add-item-button);\n\theight: calc(1.5*var(--rvv));\n\twidth: calc(1.5*var(--rvv));\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.add-item-button img {\n\tmax-height: 100%;\n\tmax-width: 100%;\n}\n\n.displayed-item.add-form {\n\tdisplay: block;\n\tbackground-color: var(--add-form-bg);\n}\n\n.add-form-itself,\n.edit-form-itself {\n\tdisplay: grid;\n\tgrid-template-rows: calc(1.7*var(--rvv)) calc(var(--rvv)) calc(4*var(--rvv)) calc(var(--rvv)) calc(2.2*var(--rvv));\n\trow-gap: calc(0.25*var(--rvv));\n\tgrid-template-areas:\n\t\t\"form-title\"\n\t\t\"title-section\"\n\t\t\"description-section\"\n\t\t\"priority-section\"\n\t\t\"submit-button\";\n}\n\n.edit-backdrop {\n\tz-index: 2;\n\tposition: fixed;\n\twidth: 100vw;\n\theight: 100vh;\n\tbackdrop-filter: blur(5px);\n}\n\n.edit-form-itself {\n\tposition: fixed;\n\tz-index: 3;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n\tbackground-color: var(--edit-form-bg);\n\twidth: 90vw;\n\tmax-width: calc(15*var(--rvv));\n\tposition: relative;\n\tfont-family: 'Sublima';\n\tfont-size: calc(0.6*var(--rvv));\n\tpadding: calc(0.1*var(--rvv)) calc(0.3*var(--rvv));\n\tborder: 1px solid black;\n\tborder-radius: calc(0.8*var(--rvv));\n}\n\n.form-title {\n\tmargin: 0 1%;\n\tmax-width: 90vw;\n\tgrid-area: form-title;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.form-title-text {\n\tfont-size: calc(0.8*var(--rvv));\n}\n\n.form-title-text:hover {\n\tfont-style: italic;\n}\n\n.close-button {\n\tcursor: pointer;\n\tbackground-color: var(--close-button);\n\tmargin-left: auto;\n\tborder: 1px solid black;\n\theight: calc(0.9*var(--rvv));\n\twidth: calc(0.9*var(--rvv));\n\tborder-radius: calc(var(--rvv));\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.close-button img {\n\theight: 100%;\n}\n\n.title-section {\n\tgrid-area: title-section;\n\tdisplay: grid;\n\tgrid-template-columns: calc(3.5*var(--rvv)) 1fr;\n}\n\n.title-section label {\n\tfont-size: calc(0.5*var(--rvv));\n}\n\n.title-section input,\n.description-section textarea {\n\twidth: 93%;\n\tbackground-color: var(--form-input-bg);\n\tborder: 1px solid black;\n\tborder-radius: calc(var(--rvv));\n\tpadding-left: 10px;\n\tfont-family: 'Sublima';\n\tfont-size: calc(0.45*var(--rvv));\n}\n\n.description-section textarea {\n\tborder-radius: calc(0.5*var(--rvv));\n\tresize: none;\n}\n\ninput:focus,\ntextarea:focus {\n\tappearance: none;\n\toutline: none;\n\tbox-shadow: 0 0 0 3px var(--input-focus-outline);\n}\n\ninput:not(:focus),\ntextarea:not(:focus) {\n\tcursor: pointer;\n}\n\n.description-section {\n\tgrid-area: description-section;\n\tdisplay: grid;\n\tgrid-template-columns: calc(3.5*var(--rvv)) 1fr;\n}\n\n.description-section label {\n\tfont-size: calc(0.5*var(--rvv));\n}\n\n.priority-section {\n\tmargin-top: 2px;\n\tgrid-area: priority-section;\n\tdisplay: grid;\n\tgrid-template-columns: calc(3.5*var(--rvv)) 1fr 1fr;\n}\n\n.priority-label {\n\tfont-size: calc(0.5*var(--rvv));\n}\n\n.radio-option {\n\tcursor: pointer;\n\tfont-family: 'Major Mono';\n\twidth: calc(3*var(--rvv));\n\theight: calc(var(--rvv));\n\tborder: 1px solid black;\n\tborder-radius: 15%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n\tbackground-color: var(--priority-button-default);\n}\n\n.radio-option label {\n\tcursor: pointer;\n}\n\n.now-option {\n\tjustify-self: center;\n\tletter-spacing: calc(0.3*var(--rvv));\n\ttext-indent: calc(0.3*var(--rvv));\n}\n\n.now-option.selected-priority {\n\tbackground-color: var(--now-button);\n\tbox-shadow: 0 0 0 3px var(--button-outline);\n}\n\n.later-option {\n\tjustify-self: center;\n\tletter-spacing: calc(0.1*var(--rvv));\n\ttext-indent: calc(0.1*var(--rvv));\n}\n\n.later-option.selected-priority {\n\tbackground-color: var(--later-button);\n\tbox-shadow: 0 0 0 3px var(--button-outline);\n}\n\n.radio-input {\n\tdisplay: none;\n\tpadding: 0;\n\tmargin: 0;\n\tappearance: none;\n}\n\n.submit-button {\n\tcursor: pointer;\n\tgrid-area: submit-button;\n\tfont-family: 'Sublima';\n\tbackground-color: var(--submit-button-bg);\n\talign-self: center;\n\tjustify-self: center;\n\tborder: 1px solid black;\n\theight: calc(1.5*var(--rvv));\n\twidth: 95%;\n\tborder-radius: calc(var(--rvv));\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.submit-button img {\n\theight: 100%;\n}\n\n.displayed-item img {\n\tcursor: pointer;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.checkbox img,\n.expand img {\n\twidth: calc(var(--rvv));\n}\n\n.edit img {\n\twidth: calc(0.8*var(--rvv));\n}\n\n.checkbox {\n\tgrid-area: checkbox;\n\tmargin-left: calc(0.2*var(--rvv));\n}\n\n.item-title {\n\tposition: relative;\n\tbottom: 2px;\n\tgrid-area: title;\n\tjustify-self: start;\n}\n\n.expandable-title {\n\tcursor: pointer;\n}\n\n.edit {\n\tgrid-area: edit;\n}\n\n.expand {\n\tgrid-area: expand;\n}\n\n.shrink {\n\tgrid-area: expand;\n\taspect-ratio: 1 / 1;\n}\n\n.shrink img {\n\theight: calc(var(--rvv));\n}\n\n.item-description {\n\tborder-radius: 3px;\n\tfont-style: italic;\n\tgrid-area: description;\n\talign-self: flex-start;\n\tjustify-self: flex-start;\n\tfont-size: 80%;\n}\n\n.expanded-item .delete {\n\tgrid-area: delete;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: flex-end;\n\tmargin-bottom: calc(0.3*var(--rvv));\n}\n\n.delete img {\n\theight: calc(var(--rvv));\n}\n\nfooter {\n\theight: 5vh;\n\tmin-height: calc(0.8*var(--rvv));\n\tbackground-color: var(--title-footer-color);\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-size: calc(0.5*var(--rvv));\n\tborder-top: 1px solid black;\n\tfont-family: 'Sublima';\n\tfont-size: calc(0.4*var(--rvv));\n\tletter-spacing: calc(0.1*var(--rvv));\n\ttext-indent: calc(0.1*var(--rvv));\n}\n\n/* dark mode styling: */\n\nbody.dark {\n\tcolor: var(--dark-text);\n}\n\n.title.dark {\n\tbackground-color: var(--dark-title-footer-color);\n\tborder-bottom: 1px solid var(--dark-border);\n}\n\n.nav.dark {\n\tbackground-color: var(--dark-nav-bg);\n\tborder-bottom: 1px solid var(--dark-border);\n}\n\n.nav.dark div {\n\tborder: 1px solid var(--dark-border);\n}\n\n.now.dark {\n\tbackground-color: var(--dark-now-button);\n}\n\n.later.dark {\n\tbackground-color: var(--dark-later-button);\n}\n\n.all.dark {\n\tbackground-color: var(--dark-all-button);\n}\n\n.selected.dark {\n\tbox-shadow: 0 0 0 3px var(--dark-button-outline);\n}\n\n.main.dark {\n\tbackground-color: var(--dark-main-bg);\n}\n\n.displayed-item.dark {\n\tborder: 1px solid var(--dark-border);\n\tbackground-color: var(--dark-item-bg);\n}\n\n.displayed-item.now-item.dark {\n\tbackground-color: var(--dark-now-item-bg);\n}\n\n.displayed-item.later-item.dark {\n\tbackground-color: var(--dark-later-item-bg);\n}\n\n.completed-item .item-title.dark {\n\tfilter: brightness(80%);\n\ttext-decoration: underline calc(0.04*var(--rvv)) var(--dark-text);\n\ttext-decoration-skip-ink: none;\n}\n\n.displayed-item.add-form.dark {\n\tbackground-color: var(--dark-add-form-bg);\n}\n\n.edit-form-itself.dark {\n\tbackground-color: var(--dark-add-form-bg);\n}\n\n.close-button.dark {\n\tbackground-color: var(--dark-close-button);\n\tborder: 1px solid var(--dark-border);\n}\n\n.title-section.dark input,\n.description-section.dark textarea {\n\tbackground-color: var(--dark-form-input-bg);\n\tborder: 1px solid var(--dark-border);\n}\n\ninput.dark:focus,\ntextarea.dark:focus {\n\tbox-shadow: 0 0 0 3px var(--dark-input-focus-outline);\n}\n\n.radio-option.dark {\n\tborder: 1px solid var(--dark-border);\n\tbackground-color: var(--dark-priority-button-default);\n}\n\n.now-option.selected-priority.dark {\n\tbackground-color: var(--dark-now-button);\n\tbox-shadow: 0 0 0 3px var(--dark-button-outline);\n}\n\n.later-option.selected-priority.dark {\n\tbackground-color: var(--dark-later-button);\n\tbox-shadow: 0 0 0 3px var(--dark-button-outline);\n}\n\n.displayed-item.add-item-button.dark {\n\tbackground-color: var(--dark-add-item-button);\n}\n\n.submit-button.dark {\n\tbackground-color: var(--dark-submit-button-bg);\n\tborder: 1px solid var(--dark-border);\n}\n\nfooter.dark {\n\tbackground-color: var(--dark-title-footer-color);\n\tborder-top: 1px solid var(--dark-border);\n}\n\n/* desktop version: */\n@media only screen and (min-width: 750px) {\n\n\t.nav div {\n\t\ttransition: 0.075s linear;\n\t}\n\n\t.nav div:hover {\n\t\ttransform: scale(1.05);\n\t}\n\n\t.checkbox,\n\t.edit,\n\t.expand,\n\t.shrink,\n\t.delete,\n\t.add-item-button,\n\t.radio-option,\n\t.submit-button,\n\t.close-button {\n\t\ttransition: 0.075s linear;\n\t}\n\n\t.checkbox:hover {\n\t\ttransform: scale(1.075);\n\t}\n\n\t.edit:hover {\n\t\ttransform: scale(1.1);\n\t}\n\n\t.expand:hover {\n\t\ttransform: scale(1.25);\n\t}\n\n\t.shrink:hover {\n\t\ttransform: scale(1.1);\n\t}\n\n\t.delete:hover {\n\t\ttransform: scale(1.075);\n\t}\n\n\t.add-item-button:hover {\n\t\ttransform: scale(1.05);\n\t}\n\n\t.radio-option:hover {\n\t\ttransform: scale(1.05);\n\t}\n\n\t.submit-button:hover {\n\t\ttransform: scale(1.01);\n\t}\n\n\t.close-button:hover {\n\t\ttransform: scale(1.1);\n\t}\n\n}\n\n@media only screen and (max-width: 750px) {\n\t.completed-item .item-title {\n\t\tfont-style: italic;\n\t\ttext-decoration: line-through;\n\t\ttext-decoration-skip-ink: none;\n\t\ttext-underline-offset: 0;\n\t}\n}\n\n@media screen and (orientation: landscape) {\n\tbody {\n\t\tmin-height: 100vh;\n\t\tmin-width: 100vw;\n\t}\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/body.js":
/*!************************!*\
  !*** ./src/js/body.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkForLandscape": () => (/* binding */ checkForLandscape),
/* harmony export */   "setBody": () => (/* binding */ setBody),
/* harmony export */   "setBodyHeight": () => (/* binding */ setBodyHeight),
/* harmony export */   "setBodyWidth": () => (/* binding */ setBodyWidth)
/* harmony export */ });
// set body height to exactly the inner height of the browser on narrow (likely mobile) screens:
const setBodyHeight = () => {
    if (window.innerWidth < 751) {
        document.body.style.minHeight = window.innerHeight + "px";
    } else {
        document.body.style.minHeight = '100vh';
    }
};

// set body width to exactly the inner width of the browser:
const setBodyWidth = () => {
    document.body.style.maxWidth = window.innerWidth + "px";
};

// workaround to check for safari landscape orientation:
const checkForLandscape = () => {
    if (window.innerWidth > window.innerHeight) {
        setBody();
    }
}

const setBody = () => {
    setBodyHeight();
    setBodyWidth();
};



/***/ }),

/***/ "./src/js/edit.js":
/*!************************!*\
  !*** ./src/js/edit.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderEditForm": () => (/* binding */ renderEditForm)
/* harmony export */ });
/* harmony import */ var _img_save_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/save.svg */ "./src/img/save.svg");
/* harmony import */ var _img_close_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/close.svg */ "./src/img/close.svg");
/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list.js */ "./src/js/list.js");
/* harmony import */ var _page_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page.js */ "./src/js/page.js");
/* harmony import */ var _listen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listen */ "./src/js/listen.js");






const renderEditForm = (index) => {

    const list = (0,_list_js__WEBPACK_IMPORTED_MODULE_2__.getAll)();
    const item = list[index];

    // create overlay for blur backdrop filter:
    const editBackdrop = document.createElement('div');
    editBackdrop.classList.add('edit-backdrop');
    document.body.appendChild(editBackdrop);

    // create edit form container:
    const editForm = document.createElement('div');
    editForm.classList.add('edit-form');

    // add edit form to the DOM:
    const main = document.querySelector('.main');
    main.appendChild(editForm);

        // create the form itself:
        const formItself = document.createElement('form');
        formItself.classList.add('edit-form-itself');
        formItself.dataset.id = index;
        formItself.setAttribute('method', '');
        editForm.appendChild(formItself);

            // create the form title:
            const formTitle = document.createElement('div');
            formTitle.classList.add('form-title');
            formItself.appendChild(formTitle);
            const formTitleText = document.createElement('span');
            formTitleText.classList.add('form-title-text', 'edit-form-title-text');
            formTitleText.textContent = `editing '${item.title}'`;
            formTitle.appendChild(formTitleText);

            // create an 'X' button to close out of the form:
            const closeButton = document.createElement('div');
            closeButton.classList.add('close-button', 'edit-close-button');
            formTitle.appendChild(closeButton);
            const closeIcon = document.createElement('img');
            closeIcon.setAttribute('src', _img_close_svg__WEBPACK_IMPORTED_MODULE_1__);
            closeButton.appendChild(closeIcon);

            // create the form elements:

                // title section:
                const titleSection = document.createElement('div');
                titleSection.classList.add('form-element', 'title-section', 'edit-title-section');
                formItself.appendChild(titleSection);

                    // title label:
                    const titleLabel = document.createElement('label');
                    titleLabel.setAttribute('for', 'title');
                    titleLabel.textContent = 'title:';
                    titleSection.appendChild(titleLabel);

                    // title input:
                    const titleInput = document.createElement('input');
                    titleInput.setAttribute('type', 'text');
                    titleInput.classList.add('title-input', 'edit-title-input');
                    titleInput.setAttribute('name', 'title');
                    titleInput.setAttribute('id', 'title');
                    titleInput.value = item.title;
                    titleInput.setAttribute('required', true);
                    titleSection.appendChild(titleInput);


                // description section:
                const descriptionSection = document.createElement('div');
                descriptionSection.classList.add('form-element', 'description-section', 'edit-description-section');
                formItself.appendChild(descriptionSection);

                    // description label:
                    const descriptionLabel = document.createElement('label');
                    descriptionLabel.setAttribute('for', 'description');
                    descriptionLabel.textContent = 'description (optional):';
                    descriptionSection.appendChild(descriptionLabel);

                    // description input:
                    const descriptionInput = document.createElement('textarea');
                    descriptionInput.classList.add('description-input', 'edit-description-input');
                    descriptionInput.setAttribute('name', 'description');
                    descriptionInput.setAttribute('id', 'description');
                    descriptionInput.value = item.description;
                    descriptionSection.appendChild(descriptionInput);


                // priority fieldset:
                const fieldset = document.createElement('fieldset');
                fieldset.classList.add('priority-section', 'edit-priority-section');
                formItself.appendChild(fieldset);

                    // priority label:
                    const priorityLabel = document.createElement('div');
                    priorityLabel.classList.add('priority-label', 'edit-priority-label');
                    priorityLabel.textContent = 'priority:';
                    fieldset.appendChild(priorityLabel);

                    // 'NOW' priority radio option:
                    const nowOption = document.createElement('div');
                    nowOption.classList.add('radio-option', 'now-option', 'edit-now-option');
                    fieldset.appendChild(nowOption);

                        // NOW input & label:
                        const nowInput = document.createElement('input');
                        nowInput.classList.add('radio-input', 'edit-radio-input');
                        if (item.priority === 'now') {
                            nowOption.classList.add('selected-priority');
                        }
                        nowInput.setAttribute('type', 'radio');
                        nowInput.setAttribute('id', 'now');
                        nowInput.setAttribute('name', 'priority');
                        nowInput.setAttribute('value', 'now');
                        nowOption.appendChild(nowInput);

                        const nowLabel = document.createElement('label');
                        nowLabel.setAttribute('for', 'now');
                        nowLabel.textContent = 'now';
                        nowOption.appendChild(nowLabel);

                    // 'LATER' priority radio option:
                    const laterOption = document.createElement('div');
                    laterOption.classList.add('radio-option', 'later-option', 'edit-later-option');
                    fieldset.appendChild(laterOption);
                    
                        // LATER input & label:
                        const laterInput = document.createElement('input');
                        laterInput.classList.add('radio-input', 'edit-radio-input');
                        if (item.priority === 'later') {
                            laterOption.classList.add('selected-priority');
                        }
                        laterInput.setAttribute('type', 'radio');
                        laterInput.setAttribute('id', 'later');
                        laterInput.setAttribute('name', 'priority');
                        laterInput.setAttribute('value', 'later');
                        laterOption.appendChild(laterInput);

                        const laterLabel = document.createElement('label');
                        laterLabel.setAttribute('for', 'later');
                        laterLabel.textContent = 'later';
                        laterOption.appendChild(laterLabel);

            // create a new 'add' button at the bottom of the form:
            const formButton = document.createElement('button');
            formButton.classList.add('submit-button', 'edit-submit-button');
            formButton.setAttribute('type', 'submit');
            formItself.appendChild(formButton);
            const formButtonIcon = document.createElement('img');
            formButtonIcon.setAttribute('src', _img_save_svg__WEBPACK_IMPORTED_MODULE_0__);
            formButton.appendChild(formButtonIcon);
    
    // render the edit form in dark mode if it's turned on:
    if (_page_js__WEBPACK_IMPORTED_MODULE_3__.displayMode === 'dark') {
        switchToDark();
    }

    (0,_listen__WEBPACK_IMPORTED_MODULE_4__.addEditFormListeners)();

}



/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");
/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.js */ "./src/js/list.js");
/* harmony import */ var _page_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page.js */ "./src/js/page.js");
/* harmony import */ var _listen_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listen.js */ "./src/js/listen.js");








(0,_page_js__WEBPACK_IMPORTED_MODULE_2__.renderHeaderFooter)();

(0,_listen_js__WEBPACK_IMPORTED_MODULE_3__.addInitialListeners)();

(0,_list_js__WEBPACK_IMPORTED_MODULE_1__.retrieveStoredList)();

(0,_page_js__WEBPACK_IMPORTED_MODULE_2__.renderNow)();

// set light mode as default:
(0,_page_js__WEBPACK_IMPORTED_MODULE_2__.switchToLight)();
(0,_page_js__WEBPACK_IMPORTED_MODULE_2__.styleLightIcon)();

/***/ }),

/***/ "./src/js/list.js":
/*!************************!*\
  !*** ./src/js/list.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTodo": () => (/* binding */ createTodo),
/* harmony export */   "deleteTodo": () => (/* binding */ deleteTodo),
/* harmony export */   "editTodo": () => (/* binding */ editTodo),
/* harmony export */   "getAll": () => (/* binding */ getAll),
/* harmony export */   "getCompleted": () => (/* binding */ getCompleted),
/* harmony export */   "getDescription": () => (/* binding */ getDescription),
/* harmony export */   "getLater": () => (/* binding */ getLater),
/* harmony export */   "getNow": () => (/* binding */ getNow),
/* harmony export */   "retrieveStoredList": () => (/* binding */ retrieveStoredList),
/* harmony export */   "saveToStorage": () => (/* binding */ saveToStorage)
/* harmony export */ });
// create empty todoList array:
let todoList = [];

// retrieve the todoList array from localStorage:
const retrieveStoredList = () => {

    // first, check if to-do array is stored in localStorage:
    const storedTodoList = localStorage.getItem('todoList');
    // if there is a storedTodoList, get it and save it to retrievedList:
    if (storedTodoList) {
        const retrievedList = JSON.parse(localStorage.getItem('todoList'));
        
        // set the local todoList array to the list retrieved from storage:
        todoList = retrievedList;
    }
}

// save the list to localStorage:
const saveToStorage = () => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
}

// Todo object constructor:
function Todo(title, description, priority, completed) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.completed = completed;
};

// method to create a new Todo object and add it to the todoList array:
const createTodo = (title, description, priority, completed) => {
    const newTodo = new Todo(title, description, priority, completed);
    todoList.push(newTodo);
    saveToStorage();
};

// get the complete current list:
const getAll = () => {
    return todoList;
};

// get the items with 'now' priority:
const getNow = () => {
    const nowItems = todoList.filter(item => {
        if (item.priority === 'now') {
            return item;
        }
    });
    return nowItems;
};

// get the items with 'later' priority:
const getLater = () => {
    const laterItems = todoList.filter(item => {
        if (item.priority === 'later') {
            return item;
        }
    });
    return laterItems;
};

const getDescription = (id) => {
    return todoList[id].description;
};

const getCompleted = (id) => {
    return todoList[id].completed;
}

// remove a Todo object from the todoList array by using its DOM id as its array index:
const deleteTodo = (id) => {
    todoList.splice(id, 1);
    saveToStorage();
}

// edit a property of a Todo object:
const editTodo = (id, property, newValue) => {
    todoList[id][property] = newValue;
    saveToStorage();
};



/***/ }),

/***/ "./src/js/listen.js":
/*!**************************!*\
  !*** ./src/js/listen.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addAddListener": () => (/* binding */ addAddListener),
/* harmony export */   "addCheckboxListener": () => (/* binding */ addCheckboxListener),
/* harmony export */   "addDeleteListenerToItemWithoutDescription": () => (/* binding */ addDeleteListenerToItemWithoutDescription),
/* harmony export */   "addEditFormListeners": () => (/* binding */ addEditFormListeners),
/* harmony export */   "addEditIconListener": () => (/* binding */ addEditIconListener),
/* harmony export */   "addExpandListeners": () => (/* binding */ addExpandListeners),
/* harmony export */   "addFormListeners": () => (/* binding */ addFormListeners),
/* harmony export */   "addInitialListeners": () => (/* binding */ addInitialListeners),
/* harmony export */   "addListenersToExpandedItem": () => (/* binding */ addListenersToExpandedItem),
/* harmony export */   "removeListenersFromExpandedItem": () => (/* binding */ removeListenersFromExpandedItem),
/* harmony export */   "replaceExpandListener": () => (/* binding */ replaceExpandListener)
/* harmony export */ });
/* harmony import */ var _body_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./body.js */ "./src/js/body.js");
/* harmony import */ var _page_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page.js */ "./src/js/page.js");
/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list.js */ "./src/js/list.js");




// event listeners to add when the page first loads:
const addInitialListeners = () => {

    // set initial body height & width..
    (0,_body_js__WEBPACK_IMPORTED_MODULE_0__.setBody)();

    // then adjust body height & width if needed whenever the window is resized, or when the screen orientation changes:
    window.addEventListener('resize', _body_js__WEBPACK_IMPORTED_MODULE_0__.setBody);
    window.addEventListener('resize', _body_js__WEBPACK_IMPORTED_MODULE_0__.checkForLandscape);
    // if browser is not safari:
    if (!(navigator.userAgent.indexOf("Safari") != -1 )) {
        screen.orientation.addEventListener('change', _body_js__WEBPACK_IMPORTED_MODULE_0__.setBody);
        screen.orientation.addEventListener('change', _body_js__WEBPACK_IMPORTED_MODULE_0__.checkForLandscape);
    }
    
    // add click listeners to nav buttons to trigger render functions:
    const now = document.querySelector('.now');
    now.addEventListener('click', _page_js__WEBPACK_IMPORTED_MODULE_1__.renderNow);

    const later = document.querySelector('.later');
    later.addEventListener('click', _page_js__WEBPACK_IMPORTED_MODULE_1__.renderLater);

    const all = document.querySelector('.all');
    all.addEventListener('click', _page_js__WEBPACK_IMPORTED_MODULE_1__.renderAll);

    // add listeners to light/dark mode display icons:
    const lightIcon = document.querySelector('.light-mode');
    lightIcon.addEventListener('click', _page_js__WEBPACK_IMPORTED_MODULE_1__.switchToLight);
    lightIcon.addEventListener('click', _page_js__WEBPACK_IMPORTED_MODULE_1__.styleLightIcon);

    const darkIcon = document.querySelector('.dark-mode');
    darkIcon.addEventListener('click', _page_js__WEBPACK_IMPORTED_MODULE_1__.switchToDark);
    darkIcon.addEventListener('click', _page_js__WEBPACK_IMPORTED_MODULE_1__.styleDarkIcon);

}

const addAddListener = () => {
    const addButton = document.querySelector('.add-item-button');
    addButton.addEventListener('click', _page_js__WEBPACK_IMPORTED_MODULE_1__.renderAddForm);
}

const addFormListeners = () => {

    // add close button listener:
    const closeButton = document.querySelector('.close-button');
    closeButton.addEventListener('click', _page_js__WEBPACK_IMPORTED_MODULE_1__.removeForm);

    // add radio input listeners:
    const radioInputs = document.querySelectorAll('.radio-input');
    radioInputs.forEach(input => {
        input.addEventListener('change', (e) => {
            (0,_page_js__WEBPACK_IMPORTED_MODULE_1__.styleRadioOption)(e);
        });
    });

    // add submit listener:
    const form = document.querySelector('.add-form-itself');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        (0,_page_js__WEBPACK_IMPORTED_MODULE_1__.submitForm)();
    });
}

const addEditFormListeners = () => {

    // add close button listener:
    const closeButton = document.querySelector('.edit-close-button');
    closeButton.addEventListener('click', _page_js__WEBPACK_IMPORTED_MODULE_1__.removeEditForm);

    // add radio input listeners:
    const radioInputs = document.querySelectorAll('.radio-input');
    radioInputs.forEach(input => {
        input.addEventListener('change', (e) => {
            (0,_page_js__WEBPACK_IMPORTED_MODULE_1__.styleRadioOption)(e);
        });
    });

    // add submit listener:
    const form = document.querySelector('.edit-form-itself');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        (0,_page_js__WEBPACK_IMPORTED_MODULE_1__.submitEditForm)(e);
    });
}

// event listeners to open expanded view of items:
const addExpandListeners = () => {

    // add listeners to all item title text:
    const itemTitles = document.querySelectorAll('.expandable-title');
    itemTitles.forEach(title => {
        title.addEventListener('click', _page_js__WEBPACK_IMPORTED_MODULE_1__.expandItem);
    });

    // add listeners to all expand icons:
    const expandIcons = document.querySelectorAll('div.expand');
    expandIcons.forEach(icon => {
        icon.addEventListener('click', _page_js__WEBPACK_IMPORTED_MODULE_1__.expandItem);
    });
}

// checkbox listener to add to each item as it is rendered:
const addCheckboxListener = (id) => {

    const parentItem = document.querySelector(`[data-id='${id}'`);
    const itemCheckbox = parentItem.firstChild;
    itemCheckbox.addEventListener('click', () => {

        // if todo is not completed, mark it as completed:
        const completedStatus = (0,_list_js__WEBPACK_IMPORTED_MODULE_2__.getCompleted)(id);
        if (completedStatus === false) {
            (0,_list_js__WEBPACK_IMPORTED_MODULE_2__.editTodo)(id, 'completed', true);
            // then change the DOM element's class & styling so the view doesn't have to be re-rendered:
            parentItem.classList.remove('incomplete-item');
            parentItem.classList.add('completed-item');
            // and check the box:
            (0,_page_js__WEBPACK_IMPORTED_MODULE_1__.checkCheckbox)(itemCheckbox);

        // if todo is completed, mark it as incomplete:
        } else if (completedStatus === true) {
            (0,_list_js__WEBPACK_IMPORTED_MODULE_2__.editTodo)(id, 'completed', false);
            parentItem.classList.remove('completed-item');
            parentItem.classList.add('incomplete-item');
            // and uncheck the box:
            (0,_page_js__WEBPACK_IMPORTED_MODULE_1__.uncheckCheckbox)(itemCheckbox);
        }
    });
}

// edit icon listener to add to each item as it is rendered:
const addEditIconListener = (id) => {
    const itemToEdit = document.querySelector(`[data-id='${id}'`);
    const editIcon = itemToEdit.children[2].firstChild;
    editIcon.addEventListener('click', _page_js__WEBPACK_IMPORTED_MODULE_1__.showEditPopup);
}

const addDeleteListenerToItemWithoutDescription = (deleteIcon, id) => {
    deleteIcon.addEventListener('click', () => {
        // delete item:
        ;(0,_list_js__WEBPACK_IMPORTED_MODULE_2__.deleteTodo)(id);
        // then check the user's current page before re-rendering:
        const currentView = (0,_page_js__WEBPACK_IMPORTED_MODULE_1__.getCurrentView)();
        if (currentView === 'now') {
            (0,_page_js__WEBPACK_IMPORTED_MODULE_1__.renderNow)();
        } else if (currentView === 'later') {
            (0,_page_js__WEBPACK_IMPORTED_MODULE_1__.renderLater)();
        } else if (currentView === 'all') {
            (0,_page_js__WEBPACK_IMPORTED_MODULE_1__.renderAll)();
        }
    });
}

// event listeners (for delete and shrink actions) to add to an item when it is expanded:
const addListenersToExpandedItem = (id) => {

    // add listener to delete icon:
    const parentItem = document.querySelector(`[data-id='${id}'`);
    const deleteIcon = parentItem.lastChild;
    deleteIcon.addEventListener('click', () => {
        // delete item:
        (0,_list_js__WEBPACK_IMPORTED_MODULE_2__.deleteTodo)(id);
        // then check the user's current page before re-rendering:
        const currentView = (0,_page_js__WEBPACK_IMPORTED_MODULE_1__.getCurrentView)();
        if (currentView === 'now') {
            (0,_page_js__WEBPACK_IMPORTED_MODULE_1__.renderNow)();
        } else if (currentView === 'later') {
            (0,_page_js__WEBPACK_IMPORTED_MODULE_1__.renderLater)();
        } else if (currentView === 'all') {
            (0,_page_js__WEBPACK_IMPORTED_MODULE_1__.renderAll)();
        }
    });

    // add listener to shrink icon:
    const icon = parentItem.children[3];
    icon.addEventListener('click', (e) => {
        (0,_page_js__WEBPACK_IMPORTED_MODULE_1__.shrinkItem)(e);
    });
}

// remove click listeners from an expanded item as they are no longer necessary:
const removeListenersFromExpandedItem = (id) => {
    const item = document.querySelector(`[data-id='${id}'`);
    const itemTitle = item.children[1];
    itemTitle.removeEventListener('click', _page_js__WEBPACK_IMPORTED_MODULE_1__.expandItem);
    const itemIcon = item.children[2];
    itemIcon.removeEventListener('click', _page_js__WEBPACK_IMPORTED_MODULE_1__.expandItem);
}

// function to attach new expand click listener on item elements -- this is necessary because the listeners are removed when the item expands.
const replaceExpandListener = (element) => {
    element.addEventListener('click', _page_js__WEBPACK_IMPORTED_MODULE_1__.expandItem);
}



/***/ }),

/***/ "./src/js/page.js":
/*!************************!*\
  !*** ./src/js/page.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkCheckbox": () => (/* binding */ checkCheckbox),
/* harmony export */   "displayMode": () => (/* binding */ displayMode),
/* harmony export */   "expandItem": () => (/* binding */ expandItem),
/* harmony export */   "getCurrentView": () => (/* binding */ getCurrentView),
/* harmony export */   "removeEditForm": () => (/* binding */ removeEditForm),
/* harmony export */   "removeForm": () => (/* binding */ removeForm),
/* harmony export */   "renderAddForm": () => (/* binding */ renderAddForm),
/* harmony export */   "renderAll": () => (/* binding */ renderAll),
/* harmony export */   "renderHeaderFooter": () => (/* binding */ renderHeaderFooter),
/* harmony export */   "renderLater": () => (/* binding */ renderLater),
/* harmony export */   "renderNow": () => (/* binding */ renderNow),
/* harmony export */   "showEditPopup": () => (/* binding */ showEditPopup),
/* harmony export */   "shrinkItem": () => (/* binding */ shrinkItem),
/* harmony export */   "styleDarkIcon": () => (/* binding */ styleDarkIcon),
/* harmony export */   "styleLightIcon": () => (/* binding */ styleLightIcon),
/* harmony export */   "styleRadioOption": () => (/* binding */ styleRadioOption),
/* harmony export */   "submitEditForm": () => (/* binding */ submitEditForm),
/* harmony export */   "submitForm": () => (/* binding */ submitForm),
/* harmony export */   "switchToDark": () => (/* binding */ switchToDark),
/* harmony export */   "switchToLight": () => (/* binding */ switchToLight),
/* harmony export */   "uncheckCheckbox": () => (/* binding */ uncheckCheckbox),
/* harmony export */   "updateCurrentView": () => (/* binding */ updateCurrentView)
/* harmony export */ });
/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.js */ "./src/js/list.js");
/* harmony import */ var _listen_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listen.js */ "./src/js/listen.js");
/* harmony import */ var _edit_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit.js */ "./src/js/edit.js");
/* harmony import */ var _img_checked_checkbox_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/checked-checkbox.svg */ "./src/img/checked-checkbox.svg");
/* harmony import */ var _img_empty_checkbox_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/empty-checkbox.svg */ "./src/img/empty-checkbox.svg");
/* harmony import */ var _img_expand_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/expand.svg */ "./src/img/expand.svg");
/* harmony import */ var _img_shrink_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/shrink.svg */ "./src/img/shrink.svg");
/* harmony import */ var _img_delete_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/delete.svg */ "./src/img/delete.svg");
/* harmony import */ var _img_add_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/add.svg */ "./src/img/add.svg");
/* harmony import */ var _img_close_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/close.svg */ "./src/img/close.svg");
/* harmony import */ var _img_favicon_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/favicon.png */ "./src/img/favicon.png");
/* harmony import */ var _img_dark_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/dark.svg */ "./src/img/dark.svg");
/* harmony import */ var _img_light_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../img/light.svg */ "./src/img/light.svg");
/* harmony import */ var _img_edit_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../img/edit.svg */ "./src/img/edit.svg");


















// create currentView variable to track the current page display:
let currentView;

const updateCurrentView = (page) => {
    currentView = page;
}

const getCurrentView = () => {
    return currentView;
}

// create displayMode variable to track light/dark mode:
let displayMode;

// generate base page structure:
const renderHeaderFooter = () => {
    // // add favicon:
    const head = document.querySelector('head');
    const favIcon = document.createElement('link');
    favIcon.setAttribute('rel', 'icon');
    favIcon.setAttribute('href', _img_favicon_png__WEBPACK_IMPORTED_MODULE_10__);
    head.appendChild(favIcon);

    // create header:
    const header = document.createElement('header');
    document.body.appendChild(header);

        // create title bar:
        const title = document.createElement('div');
        title.classList.add('title');
        header.appendChild(title);

            // create light mode icon:
            const lightMode = document.createElement('div');
            lightMode.classList.add('light-mode');
            title.appendChild(lightMode);
            const lightIcon = document.createElement('img');
            lightIcon.setAttribute('src', _img_light_svg__WEBPACK_IMPORTED_MODULE_12__);
            lightMode.appendChild(lightIcon);

            // create title text:
            const titleText = document.createElement('div');
            titleText.classList.add('title-text');
            titleText.textContent = 'NOW // LATER :: a simple to-do list';
            title.appendChild(titleText);

            // create dark mode icon:
            const darkMode = document.createElement('div');
            darkMode.classList.add('dark-mode');
            title.appendChild(darkMode);
            const darkIcon = document.createElement('img');
            darkIcon.setAttribute('src', _img_dark_svg__WEBPACK_IMPORTED_MODULE_11__);
            darkMode.appendChild(darkIcon);


        // create nav bar:
        const nav = document.createElement('div');
        nav.classList.add('nav');
        header.appendChild(nav); 

            // create nav buttons:
            const now = document.createElement('div');
            now.classList.add('now');
            now.classList.add('nav-button');
            now.textContent = 'now';
            nav.appendChild(now);

            const later = document.createElement('div');
            later.classList.add('later');
            later.classList.add('nav-button');
            later.textContent = 'later';
            nav.appendChild(later);

            const all = document.createElement('div');
            all.classList.add('all');
            all.classList.add('nav-button');
            all.textContent = 'all';
            nav.appendChild(all);

    // create main to-do list display section:
    const main = document.createElement('div');
    main.classList.add('main');
    document.body.appendChild(main);

    // create footer:
    const footer = document.createElement('footer');
    document.body.appendChild(footer);
    footer.textContent = 'copyright © 2022 | sean stephen brian';
}

// renders 'add' button within the main content section:
const renderAddButton = () => {
    const main = document.querySelector('.main');
    const addItem = document.createElement('div');
    addItem.classList.add('displayed-item','add-item-button');
    const addIcon = document.createElement('img');
    addIcon.setAttribute('src', _img_add_svg__WEBPACK_IMPORTED_MODULE_8__);
    addItem.appendChild(addIcon);
    main.appendChild(addItem);

    // add click listener to add button:
    (0,_listen_js__WEBPACK_IMPORTED_MODULE_1__.addAddListener)();
}

const renderAddForm = () => {

    // create add form container:
    const addForm = document.createElement('div');
    addForm.classList.add('displayed-item', 'add-form');

    // insert add form before add button:
    const main = document.querySelector('.main');
    const addButton = document.querySelector('.add-item-button');
    main.insertBefore(addForm, addButton);

    // remove add button:
    addButton.remove();

        // create the form itself:
        const formItself = document.createElement('form');
        formItself.classList.add('add-form-itself');
        formItself.setAttribute('method', '');
        addForm.appendChild(formItself);

            // create the form title:
            const formTitle = document.createElement('div');
            formTitle.classList.add('form-title');
            formItself.appendChild(formTitle);
            const formTitleText = document.createElement('span');
            formTitleText.classList.add('form-title-text');
            formTitleText.textContent = 'add a new task';
            formTitle.appendChild(formTitleText);

            // create an 'X' button to close out of the form:
            const closeButton = document.createElement('div');
            closeButton.classList.add('close-button');
            formTitle.appendChild(closeButton);
            const closeIcon = document.createElement('img');
            closeIcon.setAttribute('src', _img_close_svg__WEBPACK_IMPORTED_MODULE_9__);
            closeButton.appendChild(closeIcon);

            // create the form elements:

                // title section:
                const titleSection = document.createElement('div');
                titleSection.classList.add('form-element', 'title-section');
                formItself.appendChild(titleSection);

                    // title label:
                    const titleLabel = document.createElement('label');
                    titleLabel.setAttribute('for', 'title');
                    titleLabel.textContent = 'title:';
                    titleSection.appendChild(titleLabel);

                    // title input:
                    const titleInput = document.createElement('input');
                    titleInput.setAttribute('type', 'text');
                    titleInput.setAttribute('class', 'title-input');
                    titleInput.setAttribute('name', 'title');
                    titleInput.setAttribute('id', 'title');
                    titleInput.setAttribute('placeholder', 'example: feed the dog');
                    titleInput.setAttribute('required', true);
                    titleSection.appendChild(titleInput);


                // description section:
                const descriptionSection = document.createElement('div');
                descriptionSection.classList.add('form-element', 'description-section');
                formItself.appendChild(descriptionSection);

                    // description label:
                    const descriptionLabel = document.createElement('label');
                    descriptionLabel.setAttribute('for', 'description');
                    descriptionLabel.textContent = 'description (optional):';
                    descriptionSection.appendChild(descriptionLabel);

                    // description input:
                    const descriptionInput = document.createElement('textarea');
                    descriptionInput.setAttribute('class', 'description-input');
                    descriptionInput.setAttribute('name', 'description');
                    descriptionInput.setAttribute('id', 'description');
                    descriptionSection.appendChild(descriptionInput);


                // priority fieldset:
                const fieldset = document.createElement('fieldset');
                fieldset.classList.add('priority-section');
                formItself.appendChild(fieldset);

                    // priority label:
                    const priorityLabel = document.createElement('div');
                    priorityLabel.classList.add('priority-label');
                    priorityLabel.textContent = 'priority:';
                    fieldset.appendChild(priorityLabel);

                    // 'NOW' priority radio option:
                    const nowOption = document.createElement('div');
                    nowOption.classList.add('radio-option', 'now-option');
                    fieldset.appendChild(nowOption);

                        // NOW input & label:
                        const nowInput = document.createElement('input');
                        nowInput.classList.add('radio-input');
                        nowInput.setAttribute('type', 'radio');
                        nowInput.setAttribute('id', 'now');
                        nowInput.setAttribute('name', 'priority');
                        nowInput.setAttribute('value', 'now');
                        nowOption.appendChild(nowInput);

                        const nowLabel = document.createElement('label');
                        nowLabel.setAttribute('for', 'now');
                        nowLabel.textContent = 'now';
                        nowOption.appendChild(nowLabel);

                    // 'LATER' priority radio option:
                    const laterOption = document.createElement('div');
                    laterOption.classList.add('radio-option', 'later-option');
                    fieldset.appendChild(laterOption);
                    
                        // LATER input & label:
                        const laterInput = document.createElement('input');
                        laterInput.classList.add('radio-input');
                        laterInput.setAttribute('type', 'radio');
                        laterInput.setAttribute('id', 'later');
                        laterInput.setAttribute('name', 'priority');
                        laterInput.setAttribute('value', 'later');
                        laterOption.appendChild(laterInput);

                        const laterLabel = document.createElement('label');
                        laterLabel.setAttribute('for', 'later');
                        laterLabel.textContent = 'later';
                        laterOption.appendChild(laterLabel);

            // create a new 'add' button at the bottom of the form:
            const formButton = document.createElement('button');
            formButton.classList.add('submit-button');
            formButton.setAttribute('type', 'submit');
            formItself.appendChild(formButton);
            const formButtonIcon = document.createElement('img');
            formButtonIcon.setAttribute('src', _img_add_svg__WEBPACK_IMPORTED_MODULE_8__);
            formButton.appendChild(formButtonIcon);
    
    // render the add form in dark mode if it's turned on:
    if (displayMode === 'dark') {
        switchToDark();
    }

    (0,_listen_js__WEBPACK_IMPORTED_MODULE_1__.addFormListeners)();

}

const submitForm = () => {

    // get form values:
    const title = document.querySelector('.title-input');
    const description = document.querySelector('.description-input');
    let priority;
    if (document.getElementById('now').checked) {
        priority = 'now';
    } else if (document.getElementById('later').checked) {
        priority = 'later';
    }

    // add a to-do object to the array using the form values:
    (0,_list_js__WEBPACK_IMPORTED_MODULE_0__.createTodo)(title.value, description.value, priority, false);

    // re-render the current page view:
    if (currentView = 'now') {
        renderNow();
    } else if (currentView = 'later') {
        renderLater();
    } else if (currentView = 'all') {
        renderAll();
    }
    // and set it to the correct display mode:
    if (displayMode === 'dark') {
        switchToDark();
    }

};


const submitEditForm = (e) => {

    const index = e.target.dataset.id;
    console.log(index);

    // get form values:
    const title = document.querySelector('.edit-title-input');
    const description = document.querySelector('.edit-description-input');
    let priority;
    if (document.getElementById('now').checked) {
        priority = 'now';
    } else if (document.getElementById('later').checked) {
        priority = 'later';
    }

    (0,_list_js__WEBPACK_IMPORTED_MODULE_0__.editTodo)(index, 'title', title.value);
    (0,_list_js__WEBPACK_IMPORTED_MODULE_0__.editTodo)(index, 'description', description.value);
    (0,_list_js__WEBPACK_IMPORTED_MODULE_0__.editTodo)(index, 'priority', priority);

    removeEditBackdrop();

    // re-render the current page view:
    if (currentView = 'now') {
        renderNow();
    } else if (currentView = 'later') {
        renderLater();
    } else if (currentView = 'all') {
        renderAll();
    }

    // and set it to the correct display mode:
    if (displayMode === 'dark') {
        switchToDark();
    }

}

// changes background color and outline for radio options depending on selection:
const styleRadioOption = (e) => {
    // select the priority button we want to style:
    const selectedInput = e.target;
    const buttonToSelect = selectedInput.parentElement;
    // clear out existing priority button selection styling:
    const priorityButtons = document.querySelectorAll('.radio-option');
    priorityButtons.forEach(button => {
        if (button.classList.contains('selected-priority')) {
            button.classList.remove('selected-priority');
        }
    });
    // add 'selected' class to the button we want to style:
    buttonToSelect.classList.add('selected-priority');
}

// removes the 'add a new task' form from DOM:
const removeForm = () => {
    const form = document.querySelector('.add-form');
    form.remove();
    // replace the '+' button which was previously deleted:
    renderAddButton();
    if (displayMode === 'dark') {
        switchToDark();
    }
}

const removeEditForm = () => {
    const form = document.querySelector('.edit-form');
    form.remove();
    removeEditBackdrop();
}

const removeEditBackdrop = () => {
    const editBackdrop = document.querySelector('.edit-backdrop');
    editBackdrop.remove();
}

// apply an outline style to the selected display's nav button:
const outlineNavButton = (page) => {

    // create reference to all three nav buttons:
    const navButtons = document.querySelectorAll('.nav-button');
    // remove 'selected' class from any button that has it:
    navButtons.forEach(button => {
        if (button.classList.contains('selected')) {
            button.classList.remove('selected');
        }
    });
    // then add the 'selected' class to only the chosen page:
    const clickedButton = document.querySelector(`.${page}`);
    clickedButton.classList.add('selected');
    const allButton = document.querySelector('.all');
    if (clickedButton === allButton) {
        clickedButton.classList.add('selected-all');
    }
}

const renderNow = () => {
    // outline the 'now' button:
    outlineNavButton('now');

    // create array of only items with a 'now' priority:
    const nowItems = (0,_list_js__WEBPACK_IMPORTED_MODULE_0__.getNow)();

    renderItems(nowItems);

    updateCurrentView('now');
}

const renderLater = () => {
    
    // outline the 'later' button:
    outlineNavButton('later');

    // create array of only items with a 'later' priority:
    const laterItems = (0,_list_js__WEBPACK_IMPORTED_MODULE_0__.getLater)();

    renderItems(laterItems);

    updateCurrentView('later');
}

const renderAll = () => {

    // outline the 'all' button:
    outlineNavButton('all');

    // create an array of all current items:
    const allItems = (0,_list_js__WEBPACK_IMPORTED_MODULE_0__.getAll)();
 
    renderItems(allItems);

    updateCurrentView('all');
}

const renderItems = (selectedItems) => {

    // create reference to main content section and current complete to-do list:
    const main = document.querySelector('.main');
    const allItems = (0,_list_js__WEBPACK_IMPORTED_MODULE_0__.getAll)();

    // empty out main content section:
    main.innerHTML = '';

    // create new <div> for each item:
    selectedItems.forEach(item => {
        const displayedItem = document.createElement('div');
        displayedItem.classList.add('displayed-item');

        // add class for item priority:
        if (item.priority === 'now') {
            displayedItem.classList.add('now-item');
        } else if (item.priority === 'later') {
            displayedItem.classList.add('later-item')
        }

        // set dataset.id to item's index in the main array:
        displayedItem.dataset.id = allItems.indexOf(item);

            // create <div>s for checkbox icons:
            const checkbox = document.createElement('div');
            checkbox.classList.add('checkbox');

                // check if item is completed to determine whether to insert an empty or checked checkbox svg:
                if (item.completed === true) {
                    const checkedCheckbox = document.createElement('img');
                    checkedCheckbox.setAttribute('src', _img_checked_checkbox_svg__WEBPACK_IMPORTED_MODULE_3__);
                    checkbox.appendChild(checkedCheckbox);
                    displayedItem.classList.add('completed-item');
                } else if (item.completed === false) {
                    const emptyCheckbox = document.createElement('img');
                    emptyCheckbox.setAttribute('src', _img_empty_checkbox_svg__WEBPACK_IMPORTED_MODULE_4__);
                    checkbox.appendChild(emptyCheckbox);
                    displayedItem.classList.add('incomplete-item');
                }

            displayedItem.appendChild(checkbox);

            // create <div>s for item title text:
            const title = document.createElement('div');
            title.textContent = item.title;
            // if the item has a description, make the title expandable:
            if (item.description) {
                title.classList.add('item-title', 'expandable-title');
            } else if (!item.description) {
                title.classList.add('item-title');
            }
            displayedItem.appendChild(title);

            // create edit icons:
            const edit = document.createElement('div');
            edit.classList.add('edit');
            const editIcon = document.createElement('img');
            editIcon.setAttribute('src', _img_edit_svg__WEBPACK_IMPORTED_MODULE_13__);
            edit.appendChild(editIcon);
            displayedItem.appendChild(edit);

            // if there is a description, create expand icons:
            if (item.description) {
                const expand = document.createElement('div');
                expand.classList.add('expand');
                const expandIcon = document.createElement('img');
                expandIcon.setAttribute('src', _img_expand_svg__WEBPACK_IMPORTED_MODULE_5__);
                expand.appendChild(expandIcon);
                displayedItem.appendChild(expand);
            // if there's no item description, add the delete icon instead of the expand icon:
            } else if (!item.description) {
                const deleteIcon = document.createElement('div');
                deleteIcon.classList.add('delete');
                const deleteIconSvg = document.createElement('img');
                deleteIconSvg.setAttribute('src', _img_delete_svg__WEBPACK_IMPORTED_MODULE_7__);
                deleteIcon.appendChild(deleteIconSvg);
                displayedItem.appendChild(deleteIcon);
                (0,_listen_js__WEBPACK_IMPORTED_MODULE_1__.addDeleteListenerToItemWithoutDescription)(deleteIcon, displayedItem.dataset.id);
            }
            

        // add item <div> to the main content section:
        main.appendChild(displayedItem);

        // add click listener to checkbox of new item using its id:
        (0,_listen_js__WEBPACK_IMPORTED_MODULE_1__.addCheckboxListener)(displayedItem.dataset.id);

        // add click listener toe dit icon of new item using its id:
        (0,_listen_js__WEBPACK_IMPORTED_MODULE_1__.addEditIconListener)(displayedItem.dataset.id);
    });

    // render 'add' button at the bottom of the content section:
    renderAddButton();

    // check if display mode is set to dark and switch the page style if necessary:
    if (displayMode === 'dark') {
        switchToDark();
    }

    // add click listeners on title text & expand icons of all rendered items:
    (0,_listen_js__WEBPACK_IMPORTED_MODULE_1__.addExpandListeners)();

}

const checkCheckbox = (checkboxDiv) => {
    const checkboxIcon = checkboxDiv.firstChild;
    checkboxIcon.setAttribute('src', _img_checked_checkbox_svg__WEBPACK_IMPORTED_MODULE_3__);
}

const uncheckCheckbox = (checkboxDiv) => {
    const checkboxIcon = checkboxDiv.firstChild;
    checkboxIcon.setAttribute('src', _img_empty_checkbox_svg__WEBPACK_IMPORTED_MODULE_4__);
}

const showEditPopup = (e) => {
    const itemToEdit = e.target.parentElement.parentElement;
    const index = itemToEdit.dataset.id;
    (0,_edit_js__WEBPACK_IMPORTED_MODULE_2__.renderEditForm)(index);
    
}

const expandItem = (e) => {

    // first, create reference to clicked element to help us determine the item to expand:
    const clickedElement = e.target;
    let itemToExpand;
    // if the title text was clicked, this is true and the parent <div> is the item we want to expand:
    if (clickedElement.parentNode.classList.contains('displayed-item')) {
        itemToExpand = e.target.parentNode;
    // otherwise, the expand icon svg was clicked and we need to ascend another layer in the DOM to get the <div> of the item we want to expand:
    } else {
        itemToExpand = e.target.parentNode.parentNode;
    }
    itemToExpand.classList.add('expanded-item');

    // save reference to itemToExpand's data-id:
    const itemId = itemToExpand.dataset.id;

    // get reference to expand icon, add a new shrink icon before it, and delete the expand icon:
    const expand = itemToExpand.children[3];
    const shrink = document.createElement('div');
    shrink.classList.add('shrink');
    const shrinkIcon = document.createElement('img');
    shrinkIcon.setAttribute('src', _img_shrink_svg__WEBPACK_IMPORTED_MODULE_6__);
    shrink.appendChild(shrinkIcon);
    itemToExpand.insertBefore(shrink, expand);
    expand.remove();

    // create new <div> for item description and get text from todoList array:
    const itemDescription = document.createElement('div');
    itemDescription.classList.add('item-description');
    itemDescription.classList.add(`${itemId}-description`);
    itemDescription.textContent = (0,_list_js__WEBPACK_IMPORTED_MODULE_0__.getDescription)(itemId);
    itemToExpand.appendChild(itemDescription);
    
    // create new <div> for delete icon and add delete svg as a child <img>:
    const deleteIcon = document.createElement('div');
    deleteIcon.classList.add('delete');
    const deleteIconSvg = document.createElement('img');
    deleteIconSvg.setAttribute('src', _img_delete_svg__WEBPACK_IMPORTED_MODULE_7__);
    deleteIcon.appendChild(deleteIconSvg);
    itemToExpand.appendChild(deleteIcon);

    (0,_listen_js__WEBPACK_IMPORTED_MODULE_1__.removeListenersFromExpandedItem)(itemId);

    (0,_listen_js__WEBPACK_IMPORTED_MODULE_1__.addListenersToExpandedItem)(itemId);
}

const shrinkItem = (e) => {

    // same protocol as expandItem():
    const clickedElement = e.target;
    let itemToShrink = clickedElement.parentNode.parentNode;
    itemToShrink.classList.remove('expanded-item');

    // get reference to shrink icon, add a new expand icon before it, then delete the shrink icon:
    const shrink = itemToShrink.children[3];
    const expand = document.createElement('div');
    expand.classList.add('expand');
    const expandIcon = document.createElement('img');
    expandIcon.setAttribute('src', _img_expand_svg__WEBPACK_IMPORTED_MODULE_5__);
    expand.appendChild(expandIcon);
    itemToShrink.insertBefore(expand, shrink);
    shrink.remove();

    // select expanded item description, then delete it:
    const itemDescription = itemToShrink.children[4];
    itemDescription.remove();

    // select delete icon <div>, then delete it:
    const deleteIcon = itemToShrink.children[4];
    deleteIcon.remove();

    const itemTitle = itemToShrink.children[1];
    (0,_listen_js__WEBPACK_IMPORTED_MODULE_1__.replaceExpandListener)(itemTitle);

    (0,_listen_js__WEBPACK_IMPORTED_MODULE_1__.replaceExpandListener)(expand);

}

const switchToDark = () => {
    const everything = document.querySelectorAll('*');
    everything.forEach(element => {
        element.classList.add('dark');
    });
    displayMode = 'dark';
}

const styleDarkIcon = () => {
    // check that dark mode is selected:
    if (displayMode === 'dark') {
        // remove selection from light mode icon:
        const lightIcon = document.querySelector('.light-mode');
        lightIcon.classList.remove('selected-display');
        // mark dark mode icon as selected:
        const darkIcon = document.querySelector('.dark-mode');
        darkIcon.classList.add('selected-display');
    }
}

const switchToLight = () => {
    const everything = document.querySelectorAll('*');
    everything.forEach(element => {
        element.classList.remove('dark');
    });
    displayMode = 'light';
}

const styleLightIcon = () => {
    // check that light mode is selected:
    if (displayMode === 'light') {
        // remove selection from dark mode icon:
        const darkIcon = document.querySelector('.dark-mode');
        darkIcon.classList.remove('selected-display');
        // mark light mode icon as selected:
        const lightIcon = document.querySelector('.light-mode');
        lightIcon.classList.add('selected-display');
    }
}



/***/ }),

/***/ "./src/font/major-mono/major-mono.ttf":
/*!********************************************!*\
  !*** ./src/font/major-mono/major-mono.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "53cbaab9359b8392025a.ttf";

/***/ }),

/***/ "./src/font/sublima/sublima-extra-bold.otf":
/*!*************************************************!*\
  !*** ./src/font/sublima/sublima-extra-bold.otf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "28394e8fa38f3679e920.otf";

/***/ }),

/***/ "./src/font/sublima/sublima-light.otf":
/*!********************************************!*\
  !*** ./src/font/sublima/sublima-light.otf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6e1c550b330cf7b40c5e.otf";

/***/ }),

/***/ "./src/img/add.svg":
/*!*************************!*\
  !*** ./src/img/add.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2226ed366226c7fb6aa0.svg";

/***/ }),

/***/ "./src/img/checked-checkbox.svg":
/*!**************************************!*\
  !*** ./src/img/checked-checkbox.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "21d0e1f2d2d173c88039.svg";

/***/ }),

/***/ "./src/img/close.svg":
/*!***************************!*\
  !*** ./src/img/close.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "11c4958d7685d9b518ad.svg";

/***/ }),

/***/ "./src/img/dark.svg":
/*!**************************!*\
  !*** ./src/img/dark.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dc2ce708896305ab9aca.svg";

/***/ }),

/***/ "./src/img/delete.svg":
/*!****************************!*\
  !*** ./src/img/delete.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4391759f9972a81228e0.svg";

/***/ }),

/***/ "./src/img/edit.svg":
/*!**************************!*\
  !*** ./src/img/edit.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "42227cb58b9aa30a1cd6.svg";

/***/ }),

/***/ "./src/img/empty-checkbox.svg":
/*!************************************!*\
  !*** ./src/img/empty-checkbox.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a3b08526a862704e9d19.svg";

/***/ }),

/***/ "./src/img/expand.svg":
/*!****************************!*\
  !*** ./src/img/expand.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5e2c62a700b392d3b520.svg";

/***/ }),

/***/ "./src/img/favicon.png":
/*!*****************************!*\
  !*** ./src/img/favicon.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "05c58129cdd45f265aec.png";

/***/ }),

/***/ "./src/img/light.svg":
/*!***************************!*\
  !*** ./src/img/light.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9f7b56e75c03ca4125a9.svg";

/***/ }),

/***/ "./src/img/save.svg":
/*!**************************!*\
  !*** ./src/img/save.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2121119fd702ad05535e.svg";

/***/ }),

/***/ "./src/img/shrink.svg":
/*!****************************!*\
  !*** ./src/img/shrink.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d79e518b3acefbee85c9.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsUUFBUSxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLE9BQU8sT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxVQUFVLE9BQU8sT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLGFBQWEsTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsWUFB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RUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSx3REFBYztBQUNsQjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsNENBQVU7QUFDN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDLGtDQUFrQyx3REFBYztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsNENBQVU7QUFDaEQ7QUFDQTs7QUFFQSxJQUFJLDJFQUErQjs7QUFFbkMsSUFBSSxzRUFBMEI7QUFDOUI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyw0Q0FBVTtBQUM3QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksaUVBQXFCOztBQUV6QixJQUFJLGlFQUFxQjs7QUFFekI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9ib2R5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9lZGl0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvbGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvbGlzdGVuLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9wYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJmb250L21ham9yLW1vbm8vbWFqb3ItbW9uby50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCJmb250L3N1YmxpbWEvc3VibGltYS1saWdodC5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCJmb250L3N1YmxpbWEvc3VibGltYS1leHRyYS1ib2xkLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tcnZ2OiBjYWxjKDFyZW0gKyAxdmggKyAxdncpO1xcblxcblxcdC0tYmx1ZTogIzJFNTE2OTtcXG4gICAgLS1ibHVlLWdyYXk6ICM1RTY4NkQ7XFxuICAgIC0tYnJvd246ICM2RjU3NDY7XFxuICAgIC0tYnJvd24tbXV0ZWQ6ICM2MzU4NEM7XFxuICAgIC0tYnJvd24tdGFuOiAjQTU4Rjg1O1xcbiAgICAtLWZvcmVzdC1ncmVlbjogIzRENjYzRTtcXG4gICAgLS1ncmVlbi1icm93bjogIzVGNTYzRjtcXG4gICAgLS1ncmF5LXRhbjogI0M5QkJBMztcXG4gICAgLS10YW4tZ3JheTogI0QxQzlCQTtcXG4gICAgLS1vZmYtd2hpdGU6ICNFNEQ5QzU7XFxuICAgIC0tb3JhbmdlLXllbGxvdzogI0UxQjI3MDtcXG4gICAgLS1vcmFuZ2UtdGFuOiAjQ0RBODg1O1xcbiAgICAtLXJlZDogI0FDM0EzRTtcXG4gICAgLS1zcGVjaWFsLXJlZDogIzgyNEU0QTtcXG4gICAgLS10YW46ICNEMkJDOUI7XFxuXFxuXFx0LS10aXRsZS1mb290ZXItY29sb3I6ICNiYThlNWVkZTtcXG5cXHQtLW5hdi1iZzogI2U0ZDljNTc0O1xcblxcdC0tbm93LWJ1dHRvbjogIzc0OWM1ZDtcXG5cXHQtLWxhdGVyLWJ1dHRvbjogI2I1NmM2NztcXG5cXHQtLWFsbC1idXR0b246ICNlMGE4NWJjMjtcXG5cXHQtLWJ1dHRvbi1vdXRsaW5lOiAjZjA5OTFmZDU7XFxuXFx0LS1pbnB1dC1mb2N1cy1vdXRsaW5lOiAjZTU5ODJkO1xcblxcdC0taW5wdXQtdmFsaWQtb3V0bGluZTojNEQ2NjNFO1xcblxcdC0tbWFpbi1iZzogI2UxY2ZhZTk3O1xcblxcdC0taXRlbS1iZzogIzIwODZjYTkyO1xcblxcdC0tbm93LWl0ZW0tYmc6ICM2MjljNDA3YztcXG5cXHQtLWxhdGVyLWl0ZW0tYmc6ICNkYTg2ODBjMTtcXG5cXHQtLWRlc2NyaXB0aW9uLWJnOiAjZDhmMmZmOTU7XFxuXFx0LS1hZGQtaXRlbS1idXR0b246ICNiYThkNWU4NTtcXG5cXHQtLWFkZC1mb3JtLWJnOiAjZjBkN2E5ZGU7XFxuXFx0LS1lZGl0LWZvcm0tYmc6ICNmMGQ3YTk7XFxuXFx0LS1wcmlvcml0eS1idXR0b24tZGVmYXVsdDogI2M4YjVhMjg1O1xcblxcdC0tZm9ybS1idXR0b246ICNiYThkNWU4NTtcXG5cXHQtLWZvcm0taW5wdXQtYmc6ICNGM0VFRTU7XFxuXFx0LS1zdWJtaXQtYnV0dG9uLWJnOiAjODdiNmQ1YjQ7XFxuXFx0LS1jbG9zZS1idXR0b246ICM5ODZmNDQ3MTtcXG5cXHQtLWRpc3BsYXktaWNvbjogY2FsYyh2YXIoLS1ydnYpKTtcXG5cXG5cXHQtLWRhcmstdGV4dDogI2RkZDJiZjtcXG5cXHQtLWRhcmstYm9yZGVyOiAjMjcyNDIwO1xcblxcdC0tZGFyay10aXRsZS1mb290ZXItY29sb3I6ICMyMDFjMTlkZTtcXG5cXHQtLWRhcmstbmF2LWJnOiAjMjMyMDFjYzM7XFxuXFx0LS1kYXJrLW5vdy1idXR0b246ICMzODRhMmRkYTtcXG5cXHQtLWRhcmstbGF0ZXItYnV0dG9uOiAjOGU1NjUyO1xcblxcdC0tZGFyay1hbGwtYnV0dG9uOiAjZDQ5ZjUzOWM7XFxuXFx0LS1kYXJrLWJ1dHRvbi1vdXRsaW5lOiAjZWU5ZjMyY2E7XFxuXFx0LS1kYXJrLWlucHV0LWZvY3VzLW91dGxpbmU6ICNlZTlmMzJjYTtcXG5cXHQtLWRhcmstaW5wdXQtdmFsaWQtb3V0bGluZTojNEQ2NjNFO1xcblxcdC0tZGFyay1tYWluLWJnOiAjMjQyMTFkYTE7XFxuXFx0LS1kYXJrLWl0ZW0tYmc6ICMxMjNjNTg5MjtcXG5cXHQtLWRhcmstbm93LWl0ZW0tYmc6IHJnYmEoNDYsIDgwLCAyOCwgMC41MjcpO1xcblxcdC0tZGFyay1sYXRlci1pdGVtLWJnOiAjNzU0NzQzYjI7XFxuXFx0LS1kYXJrLWFkZC1pdGVtLWJ1dHRvbjogIzgxNWUzNjcwO1xcblxcdC0tZGFyay1hZGQtZm9ybS1iZzogIzNjMzkzNWRlO1xcblxcdC0tZGFyay1wcmlvcml0eS1idXR0b24tZGVmYXVsdDogIzhiNzc2Mjg1O1xcblxcdC0tZGFyay1mb3JtLWJ1dHRvbjogI2JhOGQ1ZTg1O1xcblxcdC0tZGFyay1mb3JtLWlucHV0LWJnOiAjYWJhNjlhO1xcblxcdC0tZGFyay1zdWJtaXQtYnV0dG9uLWJnOiAjNjY4ZGE4YjQ7XFxuXFx0LS1kYXJrLWNsb3NlLWJ1dHRvbjogIzk2ODU3Mzg1O1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogJ01ham9yIE1vbm8nO1xcblxcdHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6ICdTdWJsaW1hJztcXG5cXHRzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcblxcdGZvbnQtZmFtaWx5OiAnU3VibGltYSBCb2xkJztcXG5cXHRzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxufVxcblxcblxcbmh0bWwsXFxuYm9keSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5oZWFkZXIge1xcblxcdGhlaWdodDogMTV2aDtcXG5cXHRtaW4taGVpZ2h0OiBjYWxjKDMqdmFyKC0tcnZ2KSk7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udGl0bGUge1xcblxcdG1pbi1oZWlnaHQ6IGNhbGMoMC44KnZhcigtLXJ2dikpO1xcblxcdGZsZXg6IDE7XFxuXFx0b3ZlcmZsb3cteDogaGlkZGVuO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IGNhbGMoMC42KnZhcigtLXJ2dikpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpdGxlLWZvb3Rlci1jb2xvcik7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4udGl0bGUtdGV4dCB7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGZvbnQtZmFtaWx5OiAnU3VibGltYSc7XFxuXFx0Zm9udC1zaXplOiBjYWxjKDAuNDUqdmFyKC0tcnZ2KSk7XFxuXFx0bGV0dGVyLXNwYWNpbmc6IGNhbGMoMC4xKnZhcigtLXJ2dikpO1xcblxcdHRleHQtaW5kZW50OiBjYWxjKDAuMSp2YXIoLS1ydnYpKTtcXG59XFxuXFxuLmxpZ2h0LW1vZGUsXFxuLmRhcmstbW9kZSB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGhlaWdodDogdmFyKC0tZGlzcGxheS1pY29uKTtcXG5cXHR3aWR0aDogdmFyKC0tZGlzcGxheS1pY29uKTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5saWdodC1tb2RlLmRhcmssXFxuLmRhcmstbW9kZS5kYXJrIHtcXG5cXHRmaWx0ZXI6IGludmVydCg4MCUpO1xcbn1cXG5cXG4ubGlnaHQtbW9kZSBpbWcsXFxuLmRhcmstbW9kZSBpbWcge1xcblxcdGhlaWdodDogODAlO1xcblxcdHdpZHRoOiA4MCU7XFxufVxcblxcbi5zZWxlY3RlZC1kaXNwbGF5LmxpZ2h0LW1vZGUsXFxuLnNlbGVjdGVkLWRpc3BsYXkuZGFyay1tb2RlIHtcXG5cXHR0cmFuc2l0aW9uOiAwLjI1cyBsaW5lYXI7XFxufVxcblxcbi5zZWxlY3RlZC1kaXNwbGF5LmxpZ2h0LW1vZGUgaW1nIHtcXG5cXHRmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCA1cHggdmFyKC0tcmVkKSk7XFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG5cXG4uc2VsZWN0ZWQtZGlzcGxheS5kYXJrLW1vZGUgaW1nIHtcXG5cXHRmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCA1cHggYmxhY2spO1xcblxcdHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuXFxuLm5hdiB7XFxuXFx0ZmxleDogMjtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Zm9udC1mYW1pbHk6ICdNYWpvciBNb25vJztcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYmcpO1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLm5hdiBkaXYge1xcblxcdGZvbnQtc2l6ZTogY2FsYygwLjYqdmFyKC0tcnZ2KSk7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdHdpZHRoOiBjYWxjKDMqdmFyKC0tcnZ2KSk7XFxuXFx0aGVpZ2h0OiBjYWxjKHZhcigtLXJ2dikpO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcblxcdGJvcmRlci1yYWRpdXM6IDE1JTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubm93IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ub3ctYnV0dG9uKTtcXG59XFxuXFxuLm5vdyxcXG4uYWxsIHtcXG5cXHRsZXR0ZXItc3BhY2luZzogY2FsYygwLjMqdmFyKC0tcnZ2KSk7XFxuXFx0dGV4dC1pbmRlbnQ6IGNhbGMoMC4zKnZhcigtLXJ2dikpO1xcbn1cXG5cXG4ubGF0ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxhdGVyLWJ1dHRvbik7XFxuXFx0bGV0dGVyLXNwYWNpbmc6IGNhbGMoMC4xKnZhcigtLXJ2dikpO1xcblxcdHRleHQtaW5kZW50OiBjYWxjKDAuMSp2YXIoLS1ydnYpKTtcXG59XFxuXFxuLmFsbCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWxsLWJ1dHRvbik7XFxufVxcblxcbi5zZWxlY3RlZCB7XFxuXFx0Ym94LXNoYWRvdzogMCAwIDAgM3B4IHZhcigtLWJ1dHRvbi1vdXRsaW5lKTtcXG59XFxuXFxuLm1haW4ge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRmbGV4OiBhdXRvO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHBhZGRpbmc6IGNhbGMoMC41KnZhcigtLXJ2dikpIDA7XFxuXFx0Z2FwOiBjYWxjKDAuNip2YXIoLS1ydnYpKTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnKTtcXG59XFxuXFxuLmRpc3BsYXllZC1pdGVtIHtcXG5cXHR3aWR0aDogOTB2dztcXG5cXHRtYXgtd2lkdGg6IGNhbGMoMTUqdmFyKC0tcnZ2KSk7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGZvbnQtZmFtaWx5OiAnU3VibGltYSc7XFxuXFx0Zm9udC1zaXplOiBjYWxjKDAuNip2YXIoLS1ydnYpKTtcXG5cXHRwYWRkaW5nOiBjYWxjKDAuMSp2YXIoLS1ydnYpKSBjYWxjKDAuMyp2YXIoLS1ydnYpKTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG5cXHRib3JkZXItcmFkaXVzOiBjYWxjKDAuOCp2YXIoLS1ydnYpKTtcXG5cXHRtYXJnaW46IDAgY2FsYygwLjcqdmFyKC0tcnZ2KSk7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGNhbGMoMS40KnZhcigtLXJ2dikpIDFmciBjYWxjKHZhcigtLXJ2dikpIGNhbGModmFyKC0tcnZ2KSk7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImNoZWNrYm94IHRpdGxlIGVkaXQgZXhwYW5kXFxcIjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pdGVtLWJnKTtcXG59XFxuXFxuLmRpc3BsYXllZC1pdGVtLm5vdy1pdGVtIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ub3ctaXRlbS1iZyk7XFxufVxcblxcbi5kaXNwbGF5ZWQtaXRlbS5sYXRlci1pdGVtIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sYXRlci1pdGVtLWJnKTtcXG59XFxuXFxuLmV4cGFuZGVkLWl0ZW0ge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBjYWxjKDEuNCp2YXIoLS1ydnYpKSAxZnIgY2FsYyh2YXIoLS1ydnYpKSBjYWxjKHZhcigtLXJ2dikpO1xcblxcdGdyaWQtdGVtcGxhdGUtcm93czogY2FsYygxLjIqdmFyKC0tcnZ2KSkgMWZyO1xcblxcdGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcblxcdFxcdFxcXCJjaGVja2JveCB0aXRsZSBlZGl0IGV4cGFuZFxcXCJcXG5cXHRcXHRcXFwiLiBkZXNjcmlwdGlvbiAuIGRlbGV0ZVxcXCI7XFxufVxcblxcbi5leHBhbmRlZC1pdGVtIC5pdGVtLWRlc2NyaXB0aW9uIHtcXG5cXHRtYXJnaW4tcmlnaHQ6IGNhbGMoMC4zKnZhcigtLXJ2dikpO1xcblxcdG1hcmdpbi1ib3R0b206IGNhbGMoMC4zKnZhcigtLXJ2dikpO1xcbn1cXG5cXG4uZXhwYW5kZWQtaXRlbSAuaXRlbS10aXRsZSB7XFxuXFx0Y3Vyc29yOiBhdXRvO1xcbn1cXG5cXG4uY29tcGxldGVkLWl0ZW0ge1xcblxcdGZpbHRlcjogZ3JheXNjYWxlKDcwJSk7XFxufVxcblxcbi5jb21wbGV0ZWQtaXRlbSAuaXRlbS10aXRsZSB7XFxuXFx0Zm9udC1zdHlsZTogaXRhbGljO1xcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGNhbGMoMC4wNCp2YXIoLS1ydnYpKSBibGFjaztcXG5cXHR0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IG5vbmU7XFxuXFx0dGV4dC11bmRlcmxpbmUtb2Zmc2V0OiBjYWxjKC0wLjIqdmFyKC0tcnZ2KSk7XFxufVxcblxcbi5jb21wbGV0ZWQtaXRlbSAuaXRlbS1kZXNjcmlwdGlvbiB7XFxuXFx0Zm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4uZGlzcGxheWVkLWl0ZW0uYWRkLWl0ZW0tYnV0dG9uIHtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdG1hcmdpbjogMDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWRkLWl0ZW0tYnV0dG9uKTtcXG5cXHRoZWlnaHQ6IGNhbGMoMS41KnZhcigtLXJ2dikpO1xcblxcdHdpZHRoOiBjYWxjKDEuNSp2YXIoLS1ydnYpKTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hZGQtaXRlbS1idXR0b24gaW1nIHtcXG5cXHRtYXgtaGVpZ2h0OiAxMDAlO1xcblxcdG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLmRpc3BsYXllZC1pdGVtLmFkZC1mb3JtIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hZGQtZm9ybS1iZyk7XFxufVxcblxcbi5hZGQtZm9ybS1pdHNlbGYsXFxuLmVkaXQtZm9ybS1pdHNlbGYge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiBjYWxjKDEuNyp2YXIoLS1ydnYpKSBjYWxjKHZhcigtLXJ2dikpIGNhbGMoNCp2YXIoLS1ydnYpKSBjYWxjKHZhcigtLXJ2dikpIGNhbGMoMi4yKnZhcigtLXJ2dikpO1xcblxcdHJvdy1nYXA6IGNhbGMoMC4yNSp2YXIoLS1ydnYpKTtcXG5cXHRncmlkLXRlbXBsYXRlLWFyZWFzOlxcblxcdFxcdFxcXCJmb3JtLXRpdGxlXFxcIlxcblxcdFxcdFxcXCJ0aXRsZS1zZWN0aW9uXFxcIlxcblxcdFxcdFxcXCJkZXNjcmlwdGlvbi1zZWN0aW9uXFxcIlxcblxcdFxcdFxcXCJwcmlvcml0eS1zZWN0aW9uXFxcIlxcblxcdFxcdFxcXCJzdWJtaXQtYnV0dG9uXFxcIjtcXG59XFxuXFxuLmVkaXQtYmFja2Ryb3Age1xcblxcdHotaW5kZXg6IDI7XFxuXFx0cG9zaXRpb246IGZpeGVkO1xcblxcdHdpZHRoOiAxMDB2dztcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcdGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcbn1cXG5cXG4uZWRpdC1mb3JtLWl0c2VsZiB7XFxuXFx0cG9zaXRpb246IGZpeGVkO1xcblxcdHotaW5kZXg6IDM7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWVkaXQtZm9ybS1iZyk7XFxuXFx0d2lkdGg6IDkwdnc7XFxuXFx0bWF4LXdpZHRoOiBjYWxjKDE1KnZhcigtLXJ2dikpO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRmb250LWZhbWlseTogJ1N1YmxpbWEnO1xcblxcdGZvbnQtc2l6ZTogY2FsYygwLjYqdmFyKC0tcnZ2KSk7XFxuXFx0cGFkZGluZzogY2FsYygwLjEqdmFyKC0tcnZ2KSkgY2FsYygwLjMqdmFyKC0tcnZ2KSk7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuXFx0Ym9yZGVyLXJhZGl1czogY2FsYygwLjgqdmFyKC0tcnZ2KSk7XFxufVxcblxcbi5mb3JtLXRpdGxlIHtcXG5cXHRtYXJnaW46IDAgMSU7XFxuXFx0bWF4LXdpZHRoOiA5MHZ3O1xcblxcdGdyaWQtYXJlYTogZm9ybS10aXRsZTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb3JtLXRpdGxlLXRleHQge1xcblxcdGZvbnQtc2l6ZTogY2FsYygwLjgqdmFyKC0tcnZ2KSk7XFxufVxcblxcbi5mb3JtLXRpdGxlLXRleHQ6aG92ZXIge1xcblxcdGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmNsb3NlLWJ1dHRvbiB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsb3NlLWJ1dHRvbik7XFxuXFx0bWFyZ2luLWxlZnQ6IGF1dG87XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuXFx0aGVpZ2h0OiBjYWxjKDAuOSp2YXIoLS1ydnYpKTtcXG5cXHR3aWR0aDogY2FsYygwLjkqdmFyKC0tcnZ2KSk7XFxuXFx0Ym9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1ydnYpKTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jbG9zZS1idXR0b24gaW1nIHtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi50aXRsZS1zZWN0aW9uIHtcXG5cXHRncmlkLWFyZWE6IHRpdGxlLXNlY3Rpb247XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGNhbGMoMy41KnZhcigtLXJ2dikpIDFmcjtcXG59XFxuXFxuLnRpdGxlLXNlY3Rpb24gbGFiZWwge1xcblxcdGZvbnQtc2l6ZTogY2FsYygwLjUqdmFyKC0tcnZ2KSk7XFxufVxcblxcbi50aXRsZS1zZWN0aW9uIGlucHV0LFxcbi5kZXNjcmlwdGlvbi1zZWN0aW9uIHRleHRhcmVhIHtcXG5cXHR3aWR0aDogOTMlO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvcm0taW5wdXQtYmcpO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcblxcdGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0tcnZ2KSk7XFxuXFx0cGFkZGluZy1sZWZ0OiAxMHB4O1xcblxcdGZvbnQtZmFtaWx5OiAnU3VibGltYSc7XFxuXFx0Zm9udC1zaXplOiBjYWxjKDAuNDUqdmFyKC0tcnZ2KSk7XFxufVxcblxcbi5kZXNjcmlwdGlvbi1zZWN0aW9uIHRleHRhcmVhIHtcXG5cXHRib3JkZXItcmFkaXVzOiBjYWxjKDAuNSp2YXIoLS1ydnYpKTtcXG5cXHRyZXNpemU6IG5vbmU7XFxufVxcblxcbmlucHV0OmZvY3VzLFxcbnRleHRhcmVhOmZvY3VzIHtcXG5cXHRhcHBlYXJhbmNlOiBub25lO1xcblxcdG91dGxpbmU6IG5vbmU7XFxuXFx0Ym94LXNoYWRvdzogMCAwIDAgM3B4IHZhcigtLWlucHV0LWZvY3VzLW91dGxpbmUpO1xcbn1cXG5cXG5pbnB1dDpub3QoOmZvY3VzKSxcXG50ZXh0YXJlYTpub3QoOmZvY3VzKSB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24tc2VjdGlvbiB7XFxuXFx0Z3JpZC1hcmVhOiBkZXNjcmlwdGlvbi1zZWN0aW9uO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBjYWxjKDMuNSp2YXIoLS1ydnYpKSAxZnI7XFxufVxcblxcbi5kZXNjcmlwdGlvbi1zZWN0aW9uIGxhYmVsIHtcXG5cXHRmb250LXNpemU6IGNhbGMoMC41KnZhcigtLXJ2dikpO1xcbn1cXG5cXG4ucHJpb3JpdHktc2VjdGlvbiB7XFxuXFx0bWFyZ2luLXRvcDogMnB4O1xcblxcdGdyaWQtYXJlYTogcHJpb3JpdHktc2VjdGlvbjtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogY2FsYygzLjUqdmFyKC0tcnZ2KSkgMWZyIDFmcjtcXG59XFxuXFxuLnByaW9yaXR5LWxhYmVsIHtcXG5cXHRmb250LXNpemU6IGNhbGMoMC41KnZhcigtLXJ2dikpO1xcbn1cXG5cXG4ucmFkaW8tb3B0aW9uIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0Zm9udC1mYW1pbHk6ICdNYWpvciBNb25vJztcXG5cXHR3aWR0aDogY2FsYygzKnZhcigtLXJ2dikpO1xcblxcdGhlaWdodDogY2FsYyh2YXIoLS1ydnYpKTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG5cXHRib3JkZXItcmFkaXVzOiAxNSU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmlvcml0eS1idXR0b24tZGVmYXVsdCk7XFxufVxcblxcbi5yYWRpby1vcHRpb24gbGFiZWwge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5vdy1vcHRpb24ge1xcblxcdGp1c3RpZnktc2VsZjogY2VudGVyO1xcblxcdGxldHRlci1zcGFjaW5nOiBjYWxjKDAuMyp2YXIoLS1ydnYpKTtcXG5cXHR0ZXh0LWluZGVudDogY2FsYygwLjMqdmFyKC0tcnZ2KSk7XFxufVxcblxcbi5ub3ctb3B0aW9uLnNlbGVjdGVkLXByaW9yaXR5IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ub3ctYnV0dG9uKTtcXG5cXHRib3gtc2hhZG93OiAwIDAgMCAzcHggdmFyKC0tYnV0dG9uLW91dGxpbmUpO1xcbn1cXG5cXG4ubGF0ZXItb3B0aW9uIHtcXG5cXHRqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG5cXHRsZXR0ZXItc3BhY2luZzogY2FsYygwLjEqdmFyKC0tcnZ2KSk7XFxuXFx0dGV4dC1pbmRlbnQ6IGNhbGMoMC4xKnZhcigtLXJ2dikpO1xcbn1cXG5cXG4ubGF0ZXItb3B0aW9uLnNlbGVjdGVkLXByaW9yaXR5IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sYXRlci1idXR0b24pO1xcblxcdGJveC1zaGFkb3c6IDAgMCAwIDNweCB2YXIoLS1idXR0b24tb3V0bGluZSk7XFxufVxcblxcbi5yYWRpby1pbnB1dCB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdG1hcmdpbjogMDtcXG5cXHRhcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4uc3VibWl0LWJ1dHRvbiB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGdyaWQtYXJlYTogc3VibWl0LWJ1dHRvbjtcXG5cXHRmb250LWZhbWlseTogJ1N1YmxpbWEnO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1Ym1pdC1idXR0b24tYmcpO1xcblxcdGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG5cXHRoZWlnaHQ6IGNhbGMoMS41KnZhcigtLXJ2dikpO1xcblxcdHdpZHRoOiA5NSU7XFxuXFx0Ym9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1ydnYpKTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zdWJtaXQtYnV0dG9uIGltZyB7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uZGlzcGxheWVkLWl0ZW0gaW1nIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2hlY2tib3ggaW1nLFxcbi5leHBhbmQgaW1nIHtcXG5cXHR3aWR0aDogY2FsYyh2YXIoLS1ydnYpKTtcXG59XFxuXFxuLmVkaXQgaW1nIHtcXG5cXHR3aWR0aDogY2FsYygwLjgqdmFyKC0tcnZ2KSk7XFxufVxcblxcbi5jaGVja2JveCB7XFxuXFx0Z3JpZC1hcmVhOiBjaGVja2JveDtcXG5cXHRtYXJnaW4tbGVmdDogY2FsYygwLjIqdmFyKC0tcnZ2KSk7XFxufVxcblxcbi5pdGVtLXRpdGxlIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0Ym90dG9tOiAycHg7XFxuXFx0Z3JpZC1hcmVhOiB0aXRsZTtcXG5cXHRqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbn1cXG5cXG4uZXhwYW5kYWJsZS10aXRsZSB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZWRpdCB7XFxuXFx0Z3JpZC1hcmVhOiBlZGl0O1xcbn1cXG5cXG4uZXhwYW5kIHtcXG5cXHRncmlkLWFyZWE6IGV4cGFuZDtcXG59XFxuXFxuLnNocmluayB7XFxuXFx0Z3JpZC1hcmVhOiBleHBhbmQ7XFxuXFx0YXNwZWN0LXJhdGlvOiAxIC8gMTtcXG59XFxuXFxuLnNocmluayBpbWcge1xcblxcdGhlaWdodDogY2FsYyh2YXIoLS1ydnYpKTtcXG59XFxuXFxuLml0ZW0tZGVzY3JpcHRpb24ge1xcblxcdGJvcmRlci1yYWRpdXM6IDNweDtcXG5cXHRmb250LXN0eWxlOiBpdGFsaWM7XFxuXFx0Z3JpZC1hcmVhOiBkZXNjcmlwdGlvbjtcXG5cXHRhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcblxcdGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcXG5cXHRmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLmV4cGFuZGVkLWl0ZW0gLmRlbGV0ZSB7XFxuXFx0Z3JpZC1hcmVhOiBkZWxldGU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuXFx0bWFyZ2luLWJvdHRvbTogY2FsYygwLjMqdmFyKC0tcnZ2KSk7XFxufVxcblxcbi5kZWxldGUgaW1nIHtcXG5cXHRoZWlnaHQ6IGNhbGModmFyKC0tcnZ2KSk7XFxufVxcblxcbmZvb3RlciB7XFxuXFx0aGVpZ2h0OiA1dmg7XFxuXFx0bWluLWhlaWdodDogY2FsYygwLjgqdmFyKC0tcnZ2KSk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGl0bGUtZm9vdGVyLWNvbG9yKTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Zm9udC1zaXplOiBjYWxjKDAuNSp2YXIoLS1ydnYpKTtcXG5cXHRib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XFxuXFx0Zm9udC1mYW1pbHk6ICdTdWJsaW1hJztcXG5cXHRmb250LXNpemU6IGNhbGMoMC40KnZhcigtLXJ2dikpO1xcblxcdGxldHRlci1zcGFjaW5nOiBjYWxjKDAuMSp2YXIoLS1ydnYpKTtcXG5cXHR0ZXh0LWluZGVudDogY2FsYygwLjEqdmFyKC0tcnZ2KSk7XFxufVxcblxcbi8qIGRhcmsgbW9kZSBzdHlsaW5nOiAqL1xcblxcbmJvZHkuZGFyayB7XFxuXFx0Y29sb3I6IHZhcigtLWRhcmstdGV4dCk7XFxufVxcblxcbi50aXRsZS5kYXJrIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLXRpdGxlLWZvb3Rlci1jb2xvcik7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWRhcmstYm9yZGVyKTtcXG59XFxuXFxuLm5hdi5kYXJrIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLW5hdi1iZyk7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWRhcmstYm9yZGVyKTtcXG59XFxuXFxuLm5hdi5kYXJrIGRpdiB7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1ib3JkZXIpO1xcbn1cXG5cXG4ubm93LmRhcmsge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstbm93LWJ1dHRvbik7XFxufVxcblxcbi5sYXRlci5kYXJrIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWxhdGVyLWJ1dHRvbik7XFxufVxcblxcbi5hbGwuZGFyayB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1hbGwtYnV0dG9uKTtcXG59XFxuXFxuLnNlbGVjdGVkLmRhcmsge1xcblxcdGJveC1zaGFkb3c6IDAgMCAwIDNweCB2YXIoLS1kYXJrLWJ1dHRvbi1vdXRsaW5lKTtcXG59XFxuXFxuLm1haW4uZGFyayB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1tYWluLWJnKTtcXG59XFxuXFxuLmRpc3BsYXllZC1pdGVtLmRhcmsge1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstYm9yZGVyKTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWl0ZW0tYmcpO1xcbn1cXG5cXG4uZGlzcGxheWVkLWl0ZW0ubm93LWl0ZW0uZGFyayB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ub3ctaXRlbS1iZyk7XFxufVxcblxcbi5kaXNwbGF5ZWQtaXRlbS5sYXRlci1pdGVtLmRhcmsge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstbGF0ZXItaXRlbS1iZyk7XFxufVxcblxcbi5jb21wbGV0ZWQtaXRlbSAuaXRlbS10aXRsZS5kYXJrIHtcXG5cXHRmaWx0ZXI6IGJyaWdodG5lc3MoODAlKTtcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBjYWxjKDAuMDQqdmFyKC0tcnZ2KSkgdmFyKC0tZGFyay10ZXh0KTtcXG5cXHR0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IG5vbmU7XFxufVxcblxcbi5kaXNwbGF5ZWQtaXRlbS5hZGQtZm9ybS5kYXJrIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWFkZC1mb3JtLWJnKTtcXG59XFxuXFxuLmVkaXQtZm9ybS1pdHNlbGYuZGFyayB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1hZGQtZm9ybS1iZyk7XFxufVxcblxcbi5jbG9zZS1idXR0b24uZGFyayB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jbG9zZS1idXR0b24pO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstYm9yZGVyKTtcXG59XFxuXFxuLnRpdGxlLXNlY3Rpb24uZGFyayBpbnB1dCxcXG4uZGVzY3JpcHRpb24tc2VjdGlvbi5kYXJrIHRleHRhcmVhIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWZvcm0taW5wdXQtYmcpO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstYm9yZGVyKTtcXG59XFxuXFxuaW5wdXQuZGFyazpmb2N1cyxcXG50ZXh0YXJlYS5kYXJrOmZvY3VzIHtcXG5cXHRib3gtc2hhZG93OiAwIDAgMCAzcHggdmFyKC0tZGFyay1pbnB1dC1mb2N1cy1vdXRsaW5lKTtcXG59XFxuXFxuLnJhZGlvLW9wdGlvbi5kYXJrIHtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWJvcmRlcik7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1wcmlvcml0eS1idXR0b24tZGVmYXVsdCk7XFxufVxcblxcbi5ub3ctb3B0aW9uLnNlbGVjdGVkLXByaW9yaXR5LmRhcmsge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstbm93LWJ1dHRvbik7XFxuXFx0Ym94LXNoYWRvdzogMCAwIDAgM3B4IHZhcigtLWRhcmstYnV0dG9uLW91dGxpbmUpO1xcbn1cXG5cXG4ubGF0ZXItb3B0aW9uLnNlbGVjdGVkLXByaW9yaXR5LmRhcmsge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstbGF0ZXItYnV0dG9uKTtcXG5cXHRib3gtc2hhZG93OiAwIDAgMCAzcHggdmFyKC0tZGFyay1idXR0b24tb3V0bGluZSk7XFxufVxcblxcbi5kaXNwbGF5ZWQtaXRlbS5hZGQtaXRlbS1idXR0b24uZGFyayB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1hZGQtaXRlbS1idXR0b24pO1xcbn1cXG5cXG4uc3VibWl0LWJ1dHRvbi5kYXJrIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLXN1Ym1pdC1idXR0b24tYmcpO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstYm9yZGVyKTtcXG59XFxuXFxuZm9vdGVyLmRhcmsge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstdGl0bGUtZm9vdGVyLWNvbG9yKTtcXG5cXHRib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tZGFyay1ib3JkZXIpO1xcbn1cXG5cXG4vKiBkZXNrdG9wIHZlcnNpb246ICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NTBweCkge1xcblxcblxcdC5uYXYgZGl2IHtcXG5cXHRcXHR0cmFuc2l0aW9uOiAwLjA3NXMgbGluZWFyO1xcblxcdH1cXG5cXG5cXHQubmF2IGRpdjpob3ZlciB7XFxuXFx0XFx0dHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG5cXHR9XFxuXFxuXFx0LmNoZWNrYm94LFxcblxcdC5lZGl0LFxcblxcdC5leHBhbmQsXFxuXFx0LnNocmluayxcXG5cXHQuZGVsZXRlLFxcblxcdC5hZGQtaXRlbS1idXR0b24sXFxuXFx0LnJhZGlvLW9wdGlvbixcXG5cXHQuc3VibWl0LWJ1dHRvbixcXG5cXHQuY2xvc2UtYnV0dG9uIHtcXG5cXHRcXHR0cmFuc2l0aW9uOiAwLjA3NXMgbGluZWFyO1xcblxcdH1cXG5cXG5cXHQuY2hlY2tib3g6aG92ZXIge1xcblxcdFxcdHRyYW5zZm9ybTogc2NhbGUoMS4wNzUpO1xcblxcdH1cXG5cXG5cXHQuZWRpdDpob3ZlciB7XFxuXFx0XFx0dHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcblxcdH1cXG5cXG5cXHQuZXhwYW5kOmhvdmVyIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHNjYWxlKDEuMjUpO1xcblxcdH1cXG5cXG5cXHQuc2hyaW5rOmhvdmVyIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuXFx0fVxcblxcblxcdC5kZWxldGU6aG92ZXIge1xcblxcdFxcdHRyYW5zZm9ybTogc2NhbGUoMS4wNzUpO1xcblxcdH1cXG5cXG5cXHQuYWRkLWl0ZW0tYnV0dG9uOmhvdmVyIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcblxcdH1cXG5cXG5cXHQucmFkaW8tb3B0aW9uOmhvdmVyIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcblxcdH1cXG5cXG5cXHQuc3VibWl0LWJ1dHRvbjpob3ZlciB7XFxuXFx0XFx0dHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcXG5cXHR9XFxuXFxuXFx0LmNsb3NlLWJ1dHRvbjpob3ZlciB7XFxuXFx0XFx0dHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcblxcdH1cXG5cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xcblxcdC5jb21wbGV0ZWQtaXRlbSAuaXRlbS10aXRsZSB7XFxuXFx0XFx0Zm9udC1zdHlsZTogaXRhbGljO1xcblxcdFxcdHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcblxcdFxcdHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogbm9uZTtcXG5cXHRcXHR0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDA7XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xcblxcdGJvZHkge1xcblxcdFxcdG1pbi1oZWlnaHQ6IDEwMHZoO1xcblxcdFxcdG1pbi13aWR0aDogMTAwdnc7XFxuXFx0fVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7QUFDekI7O0FBRUE7SUFDSSw2QkFBNkI7O0NBRWhDLGVBQWU7SUFDWixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLHNCQUFz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Q0FDMUMsZ0RBQWdEO0FBQ2pEOztBQUVBO0NBQ0MsNkNBQTZDO0FBQzlDOztBQUVBO0NBQ0MsOENBQThDO0NBQzlDLG9DQUFvQztBQUNyQzs7QUFFQTtDQUNDLGdEQUFnRDtDQUNoRCx3Q0FBd0M7QUFDekM7O0FBRUEscUJBQXFCO0FBQ3JCOztDQUVDO0VBQ0MseUJBQXlCO0NBQzFCOztDQUVBO0VBQ0Msc0JBQXNCO0NBQ3ZCOztDQUVBOzs7Ozs7Ozs7RUFTQyx5QkFBeUI7Q0FDMUI7O0NBRUE7RUFDQyx1QkFBdUI7Q0FDeEI7O0NBRUE7RUFDQyxxQkFBcUI7Q0FDdEI7O0NBRUE7RUFDQyxzQkFBc0I7Q0FDdkI7O0NBRUE7RUFDQyxxQkFBcUI7Q0FDdEI7O0NBRUE7RUFDQyx1QkFBdUI7Q0FDeEI7O0NBRUE7RUFDQyxzQkFBc0I7Q0FDdkI7O0NBRUE7RUFDQyxzQkFBc0I7Q0FDdkI7O0NBRUE7RUFDQyxzQkFBc0I7Q0FDdkI7O0NBRUE7RUFDQyxxQkFBcUI7Q0FDdEI7O0FBRUQ7O0FBRUE7Q0FDQztFQUNDLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsOEJBQThCO0VBQzlCLHdCQUF3QjtDQUN6QjtBQUNEOztBQUVBO0NBQ0M7RUFDQyxpQkFBaUI7RUFDakIsZ0JBQWdCO0NBQ2pCO0FBQ0RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tcnZ2OiBjYWxjKDFyZW0gKyAxdmggKyAxdncpO1xcblxcblxcdC0tYmx1ZTogIzJFNTE2OTtcXG4gICAgLS1ibHVlLWdyYXk6ICM1RTY4NkQ7XFxuICAgIC0tYnJvd246ICM2RjU3NDY7XFxuICAgIC0tYnJvd24tbXV0ZWQ6ICM2MzU4NEM7XFxuICAgIC0tYnJvd24tdGFuOiAjQTU4Rjg1O1xcbiAgICAtLWZvcmVzdC1ncmVlbjogIzRENjYzRTtcXG4gICAgLS1ncmVlbi1icm93bjogIzVGNTYzRjtcXG4gICAgLS1ncmF5LXRhbjogI0M5QkJBMztcXG4gICAgLS10YW4tZ3JheTogI0QxQzlCQTtcXG4gICAgLS1vZmYtd2hpdGU6ICNFNEQ5QzU7XFxuICAgIC0tb3JhbmdlLXllbGxvdzogI0UxQjI3MDtcXG4gICAgLS1vcmFuZ2UtdGFuOiAjQ0RBODg1O1xcbiAgICAtLXJlZDogI0FDM0EzRTtcXG4gICAgLS1zcGVjaWFsLXJlZDogIzgyNEU0QTtcXG4gICAgLS10YW46ICNEMkJDOUI7XFxuXFxuXFx0LS10aXRsZS1mb290ZXItY29sb3I6ICNiYThlNWVkZTtcXG5cXHQtLW5hdi1iZzogI2U0ZDljNTc0O1xcblxcdC0tbm93LWJ1dHRvbjogIzc0OWM1ZDtcXG5cXHQtLWxhdGVyLWJ1dHRvbjogI2I1NmM2NztcXG5cXHQtLWFsbC1idXR0b246ICNlMGE4NWJjMjtcXG5cXHQtLWJ1dHRvbi1vdXRsaW5lOiAjZjA5OTFmZDU7XFxuXFx0LS1pbnB1dC1mb2N1cy1vdXRsaW5lOiAjZTU5ODJkO1xcblxcdC0taW5wdXQtdmFsaWQtb3V0bGluZTojNEQ2NjNFO1xcblxcdC0tbWFpbi1iZzogI2UxY2ZhZTk3O1xcblxcdC0taXRlbS1iZzogIzIwODZjYTkyO1xcblxcdC0tbm93LWl0ZW0tYmc6ICM2MjljNDA3YztcXG5cXHQtLWxhdGVyLWl0ZW0tYmc6ICNkYTg2ODBjMTtcXG5cXHQtLWRlc2NyaXB0aW9uLWJnOiAjZDhmMmZmOTU7XFxuXFx0LS1hZGQtaXRlbS1idXR0b246ICNiYThkNWU4NTtcXG5cXHQtLWFkZC1mb3JtLWJnOiAjZjBkN2E5ZGU7XFxuXFx0LS1lZGl0LWZvcm0tYmc6ICNmMGQ3YTk7XFxuXFx0LS1wcmlvcml0eS1idXR0b24tZGVmYXVsdDogI2M4YjVhMjg1O1xcblxcdC0tZm9ybS1idXR0b246ICNiYThkNWU4NTtcXG5cXHQtLWZvcm0taW5wdXQtYmc6ICNGM0VFRTU7XFxuXFx0LS1zdWJtaXQtYnV0dG9uLWJnOiAjODdiNmQ1YjQ7XFxuXFx0LS1jbG9zZS1idXR0b246ICM5ODZmNDQ3MTtcXG5cXHQtLWRpc3BsYXktaWNvbjogY2FsYyh2YXIoLS1ydnYpKTtcXG5cXG5cXHQtLWRhcmstdGV4dDogI2RkZDJiZjtcXG5cXHQtLWRhcmstYm9yZGVyOiAjMjcyNDIwO1xcblxcdC0tZGFyay10aXRsZS1mb290ZXItY29sb3I6ICMyMDFjMTlkZTtcXG5cXHQtLWRhcmstbmF2LWJnOiAjMjMyMDFjYzM7XFxuXFx0LS1kYXJrLW5vdy1idXR0b246ICMzODRhMmRkYTtcXG5cXHQtLWRhcmstbGF0ZXItYnV0dG9uOiAjOGU1NjUyO1xcblxcdC0tZGFyay1hbGwtYnV0dG9uOiAjZDQ5ZjUzOWM7XFxuXFx0LS1kYXJrLWJ1dHRvbi1vdXRsaW5lOiAjZWU5ZjMyY2E7XFxuXFx0LS1kYXJrLWlucHV0LWZvY3VzLW91dGxpbmU6ICNlZTlmMzJjYTtcXG5cXHQtLWRhcmstaW5wdXQtdmFsaWQtb3V0bGluZTojNEQ2NjNFO1xcblxcdC0tZGFyay1tYWluLWJnOiAjMjQyMTFkYTE7XFxuXFx0LS1kYXJrLWl0ZW0tYmc6ICMxMjNjNTg5MjtcXG5cXHQtLWRhcmstbm93LWl0ZW0tYmc6IHJnYmEoNDYsIDgwLCAyOCwgMC41MjcpO1xcblxcdC0tZGFyay1sYXRlci1pdGVtLWJnOiAjNzU0NzQzYjI7XFxuXFx0LS1kYXJrLWFkZC1pdGVtLWJ1dHRvbjogIzgxNWUzNjcwO1xcblxcdC0tZGFyay1hZGQtZm9ybS1iZzogIzNjMzkzNWRlO1xcblxcdC0tZGFyay1wcmlvcml0eS1idXR0b24tZGVmYXVsdDogIzhiNzc2Mjg1O1xcblxcdC0tZGFyay1mb3JtLWJ1dHRvbjogI2JhOGQ1ZTg1O1xcblxcdC0tZGFyay1mb3JtLWlucHV0LWJnOiAjYWJhNjlhO1xcblxcdC0tZGFyay1zdWJtaXQtYnV0dG9uLWJnOiAjNjY4ZGE4YjQ7XFxuXFx0LS1kYXJrLWNsb3NlLWJ1dHRvbjogIzk2ODU3Mzg1O1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogJ01ham9yIE1vbm8nO1xcblxcdHNyYzogdXJsKCdmb250L21ham9yLW1vbm8vbWFqb3ItbW9uby50dGYnKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6ICdTdWJsaW1hJztcXG5cXHRzcmM6IHVybCgnZm9udC9zdWJsaW1hL3N1YmxpbWEtbGlnaHQub3RmJyk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcblxcdGZvbnQtZmFtaWx5OiAnU3VibGltYSBCb2xkJztcXG5cXHRzcmM6IHVybCgnZm9udC9zdWJsaW1hL3N1YmxpbWEtZXh0cmEtYm9sZC5vdGYnKTtcXG59XFxuXFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmhlYWRlciB7XFxuXFx0aGVpZ2h0OiAxNXZoO1xcblxcdG1pbi1oZWlnaHQ6IGNhbGMoMyp2YXIoLS1ydnYpKTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50aXRsZSB7XFxuXFx0bWluLWhlaWdodDogY2FsYygwLjgqdmFyKC0tcnZ2KSk7XFxuXFx0ZmxleDogMTtcXG5cXHRvdmVyZmxvdy14OiBoaWRkZW47XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogY2FsYygwLjYqdmFyKC0tcnZ2KSk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGl0bGUtZm9vdGVyLWNvbG9yKTtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi50aXRsZS10ZXh0IHtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0Zm9udC1mYW1pbHk6ICdTdWJsaW1hJztcXG5cXHRmb250LXNpemU6IGNhbGMoMC40NSp2YXIoLS1ydnYpKTtcXG5cXHRsZXR0ZXItc3BhY2luZzogY2FsYygwLjEqdmFyKC0tcnZ2KSk7XFxuXFx0dGV4dC1pbmRlbnQ6IGNhbGMoMC4xKnZhcigtLXJ2dikpO1xcbn1cXG5cXG4ubGlnaHQtbW9kZSxcXG4uZGFyay1tb2RlIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0aGVpZ2h0OiB2YXIoLS1kaXNwbGF5LWljb24pO1xcblxcdHdpZHRoOiB2YXIoLS1kaXNwbGF5LWljb24pO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxpZ2h0LW1vZGUuZGFyayxcXG4uZGFyay1tb2RlLmRhcmsge1xcblxcdGZpbHRlcjogaW52ZXJ0KDgwJSk7XFxufVxcblxcbi5saWdodC1tb2RlIGltZyxcXG4uZGFyay1tb2RlIGltZyB7XFxuXFx0aGVpZ2h0OiA4MCU7XFxuXFx0d2lkdGg6IDgwJTtcXG59XFxuXFxuLnNlbGVjdGVkLWRpc3BsYXkubGlnaHQtbW9kZSxcXG4uc2VsZWN0ZWQtZGlzcGxheS5kYXJrLW1vZGUge1xcblxcdHRyYW5zaXRpb246IDAuMjVzIGxpbmVhcjtcXG59XFxuXFxuLnNlbGVjdGVkLWRpc3BsYXkubGlnaHQtbW9kZSBpbWcge1xcblxcdGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDVweCB2YXIoLS1yZWQpKTtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbi5zZWxlY3RlZC1kaXNwbGF5LmRhcmstbW9kZSBpbWcge1xcblxcdGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDVweCBibGFjayk7XFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG5cXG4ubmF2IHtcXG5cXHRmbGV4OiAyO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRmb250LWZhbWlseTogJ01ham9yIE1vbm8nO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1iZyk7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4ubmF2IGRpdiB7XFxuXFx0Zm9udC1zaXplOiBjYWxjKDAuNip2YXIoLS1ydnYpKTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0d2lkdGg6IGNhbGMoMyp2YXIoLS1ydnYpKTtcXG5cXHRoZWlnaHQ6IGNhbGModmFyKC0tcnZ2KSk7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTUlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5ub3cge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vdy1idXR0b24pO1xcbn1cXG5cXG4ubm93LFxcbi5hbGwge1xcblxcdGxldHRlci1zcGFjaW5nOiBjYWxjKDAuMyp2YXIoLS1ydnYpKTtcXG5cXHR0ZXh0LWluZGVudDogY2FsYygwLjMqdmFyKC0tcnZ2KSk7XFxufVxcblxcbi5sYXRlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGF0ZXItYnV0dG9uKTtcXG5cXHRsZXR0ZXItc3BhY2luZzogY2FsYygwLjEqdmFyKC0tcnZ2KSk7XFxuXFx0dGV4dC1pbmRlbnQ6IGNhbGMoMC4xKnZhcigtLXJ2dikpO1xcbn1cXG5cXG4uYWxsIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbGwtYnV0dG9uKTtcXG59XFxuXFxuLnNlbGVjdGVkIHtcXG5cXHRib3gtc2hhZG93OiAwIDAgMCAzcHggdmFyKC0tYnV0dG9uLW91dGxpbmUpO1xcbn1cXG5cXG4ubWFpbiB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGZsZXg6IGF1dG87XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0cGFkZGluZzogY2FsYygwLjUqdmFyKC0tcnZ2KSkgMDtcXG5cXHRnYXA6IGNhbGMoMC42KnZhcigtLXJ2dikpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmcpO1xcbn1cXG5cXG4uZGlzcGxheWVkLWl0ZW0ge1xcblxcdHdpZHRoOiA5MHZ3O1xcblxcdG1heC13aWR0aDogY2FsYygxNSp2YXIoLS1ydnYpKTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0Zm9udC1mYW1pbHk6ICdTdWJsaW1hJztcXG5cXHRmb250LXNpemU6IGNhbGMoMC42KnZhcigtLXJ2dikpO1xcblxcdHBhZGRpbmc6IGNhbGMoMC4xKnZhcigtLXJ2dikpIGNhbGMoMC4zKnZhcigtLXJ2dikpO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcblxcdGJvcmRlci1yYWRpdXM6IGNhbGMoMC44KnZhcigtLXJ2dikpO1xcblxcdG1hcmdpbjogMCBjYWxjKDAuNyp2YXIoLS1ydnYpKTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogY2FsYygxLjQqdmFyKC0tcnZ2KSkgMWZyIGNhbGModmFyKC0tcnZ2KSkgY2FsYyh2YXIoLS1ydnYpKTtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG5cXHRncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiY2hlY2tib3ggdGl0bGUgZWRpdCBleHBhbmRcXFwiO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWl0ZW0tYmcpO1xcbn1cXG5cXG4uZGlzcGxheWVkLWl0ZW0ubm93LWl0ZW0ge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vdy1pdGVtLWJnKTtcXG59XFxuXFxuLmRpc3BsYXllZC1pdGVtLmxhdGVyLWl0ZW0ge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxhdGVyLWl0ZW0tYmcpO1xcbn1cXG5cXG4uZXhwYW5kZWQtaXRlbSB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGNhbGMoMS40KnZhcigtLXJ2dikpIDFmciBjYWxjKHZhcigtLXJ2dikpIGNhbGModmFyKC0tcnZ2KSk7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiBjYWxjKDEuMip2YXIoLS1ydnYpKSAxZnI7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuXFx0XFx0XFxcImNoZWNrYm94IHRpdGxlIGVkaXQgZXhwYW5kXFxcIlxcblxcdFxcdFxcXCIuIGRlc2NyaXB0aW9uIC4gZGVsZXRlXFxcIjtcXG59XFxuXFxuLmV4cGFuZGVkLWl0ZW0gLml0ZW0tZGVzY3JpcHRpb24ge1xcblxcdG1hcmdpbi1yaWdodDogY2FsYygwLjMqdmFyKC0tcnZ2KSk7XFxuXFx0bWFyZ2luLWJvdHRvbTogY2FsYygwLjMqdmFyKC0tcnZ2KSk7XFxufVxcblxcbi5leHBhbmRlZC1pdGVtIC5pdGVtLXRpdGxlIHtcXG5cXHRjdXJzb3I6IGF1dG87XFxufVxcblxcbi5jb21wbGV0ZWQtaXRlbSB7XFxuXFx0ZmlsdGVyOiBncmF5c2NhbGUoNzAlKTtcXG59XFxuXFxuLmNvbXBsZXRlZC1pdGVtIC5pdGVtLXRpdGxlIHtcXG5cXHRmb250LXN0eWxlOiBpdGFsaWM7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgY2FsYygwLjA0KnZhcigtLXJ2dikpIGJsYWNrO1xcblxcdHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogbm9uZTtcXG5cXHR0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IGNhbGMoLTAuMip2YXIoLS1ydnYpKTtcXG59XFxuXFxuLmNvbXBsZXRlZC1pdGVtIC5pdGVtLWRlc2NyaXB0aW9uIHtcXG5cXHRmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5kaXNwbGF5ZWQtaXRlbS5hZGQtaXRlbS1idXR0b24ge1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0bWFyZ2luOiAwO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hZGQtaXRlbS1idXR0b24pO1xcblxcdGhlaWdodDogY2FsYygxLjUqdmFyKC0tcnZ2KSk7XFxuXFx0d2lkdGg6IGNhbGMoMS41KnZhcigtLXJ2dikpO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFkZC1pdGVtLWJ1dHRvbiBpbWcge1xcblxcdG1heC1oZWlnaHQ6IDEwMCU7XFxuXFx0bWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZGlzcGxheWVkLWl0ZW0uYWRkLWZvcm0ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFkZC1mb3JtLWJnKTtcXG59XFxuXFxuLmFkZC1mb3JtLWl0c2VsZixcXG4uZWRpdC1mb3JtLWl0c2VsZiB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IGNhbGMoMS43KnZhcigtLXJ2dikpIGNhbGModmFyKC0tcnZ2KSkgY2FsYyg0KnZhcigtLXJ2dikpIGNhbGModmFyKC0tcnZ2KSkgY2FsYygyLjIqdmFyKC0tcnZ2KSk7XFxuXFx0cm93LWdhcDogY2FsYygwLjI1KnZhcigtLXJ2dikpO1xcblxcdGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuXFx0XFx0XFxcImZvcm0tdGl0bGVcXFwiXFxuXFx0XFx0XFxcInRpdGxlLXNlY3Rpb25cXFwiXFxuXFx0XFx0XFxcImRlc2NyaXB0aW9uLXNlY3Rpb25cXFwiXFxuXFx0XFx0XFxcInByaW9yaXR5LXNlY3Rpb25cXFwiXFxuXFx0XFx0XFxcInN1Ym1pdC1idXR0b25cXFwiO1xcbn1cXG5cXG4uZWRpdC1iYWNrZHJvcCB7XFxuXFx0ei1pbmRleDogMjtcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0d2lkdGg6IDEwMHZ3O1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0YmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxufVxcblxcbi5lZGl0LWZvcm0taXRzZWxmIHtcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0ei1pbmRleDogMztcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZWRpdC1mb3JtLWJnKTtcXG5cXHR3aWR0aDogOTB2dztcXG5cXHRtYXgtd2lkdGg6IGNhbGMoMTUqdmFyKC0tcnZ2KSk7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGZvbnQtZmFtaWx5OiAnU3VibGltYSc7XFxuXFx0Zm9udC1zaXplOiBjYWxjKDAuNip2YXIoLS1ydnYpKTtcXG5cXHRwYWRkaW5nOiBjYWxjKDAuMSp2YXIoLS1ydnYpKSBjYWxjKDAuMyp2YXIoLS1ydnYpKTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG5cXHRib3JkZXItcmFkaXVzOiBjYWxjKDAuOCp2YXIoLS1ydnYpKTtcXG59XFxuXFxuLmZvcm0tdGl0bGUge1xcblxcdG1hcmdpbjogMCAxJTtcXG5cXHRtYXgtd2lkdGg6IDkwdnc7XFxuXFx0Z3JpZC1hcmVhOiBmb3JtLXRpdGxlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvcm0tdGl0bGUtdGV4dCB7XFxuXFx0Zm9udC1zaXplOiBjYWxjKDAuOCp2YXIoLS1ydnYpKTtcXG59XFxuXFxuLmZvcm0tdGl0bGUtdGV4dDpob3ZlciB7XFxuXFx0Zm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4uY2xvc2UtYnV0dG9uIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xvc2UtYnV0dG9uKTtcXG5cXHRtYXJnaW4tbGVmdDogYXV0bztcXG5cXHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG5cXHRoZWlnaHQ6IGNhbGMoMC45KnZhcigtLXJ2dikpO1xcblxcdHdpZHRoOiBjYWxjKDAuOSp2YXIoLS1ydnYpKTtcXG5cXHRib3JkZXItcmFkaXVzOiBjYWxjKHZhcigtLXJ2dikpO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNsb3NlLWJ1dHRvbiBpbWcge1xcblxcdGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnRpdGxlLXNlY3Rpb24ge1xcblxcdGdyaWQtYXJlYTogdGl0bGUtc2VjdGlvbjtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogY2FsYygzLjUqdmFyKC0tcnZ2KSkgMWZyO1xcbn1cXG5cXG4udGl0bGUtc2VjdGlvbiBsYWJlbCB7XFxuXFx0Zm9udC1zaXplOiBjYWxjKDAuNSp2YXIoLS1ydnYpKTtcXG59XFxuXFxuLnRpdGxlLXNlY3Rpb24gaW5wdXQsXFxuLmRlc2NyaXB0aW9uLXNlY3Rpb24gdGV4dGFyZWEge1xcblxcdHdpZHRoOiA5MyU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9ybS1pbnB1dC1iZyk7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuXFx0Ym9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1ydnYpKTtcXG5cXHRwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuXFx0Zm9udC1mYW1pbHk6ICdTdWJsaW1hJztcXG5cXHRmb250LXNpemU6IGNhbGMoMC40NSp2YXIoLS1ydnYpKTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uLXNlY3Rpb24gdGV4dGFyZWEge1xcblxcdGJvcmRlci1yYWRpdXM6IGNhbGMoMC41KnZhcigtLXJ2dikpO1xcblxcdHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMsXFxudGV4dGFyZWE6Zm9jdXMge1xcblxcdGFwcGVhcmFuY2U6IG5vbmU7XFxuXFx0b3V0bGluZTogbm9uZTtcXG5cXHRib3gtc2hhZG93OiAwIDAgMCAzcHggdmFyKC0taW5wdXQtZm9jdXMtb3V0bGluZSk7XFxufVxcblxcbmlucHV0Om5vdCg6Zm9jdXMpLFxcbnRleHRhcmVhOm5vdCg6Zm9jdXMpIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kZXNjcmlwdGlvbi1zZWN0aW9uIHtcXG5cXHRncmlkLWFyZWE6IGRlc2NyaXB0aW9uLXNlY3Rpb247XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGNhbGMoMy41KnZhcigtLXJ2dikpIDFmcjtcXG59XFxuXFxuLmRlc2NyaXB0aW9uLXNlY3Rpb24gbGFiZWwge1xcblxcdGZvbnQtc2l6ZTogY2FsYygwLjUqdmFyKC0tcnZ2KSk7XFxufVxcblxcbi5wcmlvcml0eS1zZWN0aW9uIHtcXG5cXHRtYXJnaW4tdG9wOiAycHg7XFxuXFx0Z3JpZC1hcmVhOiBwcmlvcml0eS1zZWN0aW9uO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBjYWxjKDMuNSp2YXIoLS1ydnYpKSAxZnIgMWZyO1xcbn1cXG5cXG4ucHJpb3JpdHktbGFiZWwge1xcblxcdGZvbnQtc2l6ZTogY2FsYygwLjUqdmFyKC0tcnZ2KSk7XFxufVxcblxcbi5yYWRpby1vcHRpb24ge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRmb250LWZhbWlseTogJ01ham9yIE1vbm8nO1xcblxcdHdpZHRoOiBjYWxjKDMqdmFyKC0tcnZ2KSk7XFxuXFx0aGVpZ2h0OiBjYWxjKHZhcigtLXJ2dikpO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcblxcdGJvcmRlci1yYWRpdXM6IDE1JTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW9yaXR5LWJ1dHRvbi1kZWZhdWx0KTtcXG59XFxuXFxuLnJhZGlvLW9wdGlvbiBsYWJlbCB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubm93LW9wdGlvbiB7XFxuXFx0anVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuXFx0bGV0dGVyLXNwYWNpbmc6IGNhbGMoMC4zKnZhcigtLXJ2dikpO1xcblxcdHRleHQtaW5kZW50OiBjYWxjKDAuMyp2YXIoLS1ydnYpKTtcXG59XFxuXFxuLm5vdy1vcHRpb24uc2VsZWN0ZWQtcHJpb3JpdHkge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vdy1idXR0b24pO1xcblxcdGJveC1zaGFkb3c6IDAgMCAwIDNweCB2YXIoLS1idXR0b24tb3V0bGluZSk7XFxufVxcblxcbi5sYXRlci1vcHRpb24ge1xcblxcdGp1c3RpZnktc2VsZjogY2VudGVyO1xcblxcdGxldHRlci1zcGFjaW5nOiBjYWxjKDAuMSp2YXIoLS1ydnYpKTtcXG5cXHR0ZXh0LWluZGVudDogY2FsYygwLjEqdmFyKC0tcnZ2KSk7XFxufVxcblxcbi5sYXRlci1vcHRpb24uc2VsZWN0ZWQtcHJpb3JpdHkge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxhdGVyLWJ1dHRvbik7XFxuXFx0Ym94LXNoYWRvdzogMCAwIDAgM3B4IHZhcigtLWJ1dHRvbi1vdXRsaW5lKTtcXG59XFxuXFxuLnJhZGlvLWlucHV0IHtcXG5cXHRkaXNwbGF5OiBub25lO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0bWFyZ2luOiAwO1xcblxcdGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi5zdWJtaXQtYnV0dG9uIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0Z3JpZC1hcmVhOiBzdWJtaXQtYnV0dG9uO1xcblxcdGZvbnQtZmFtaWx5OiAnU3VibGltYSc7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VibWl0LWJ1dHRvbi1iZyk7XFxuXFx0YWxpZ24tc2VsZjogY2VudGVyO1xcblxcdGp1c3RpZnktc2VsZjogY2VudGVyO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcblxcdGhlaWdodDogY2FsYygxLjUqdmFyKC0tcnZ2KSk7XFxuXFx0d2lkdGg6IDk1JTtcXG5cXHRib3JkZXItcmFkaXVzOiBjYWxjKHZhcigtLXJ2dikpO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnN1Ym1pdC1idXR0b24gaW1nIHtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5kaXNwbGF5ZWQtaXRlbSBpbWcge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jaGVja2JveCBpbWcsXFxuLmV4cGFuZCBpbWcge1xcblxcdHdpZHRoOiBjYWxjKHZhcigtLXJ2dikpO1xcbn1cXG5cXG4uZWRpdCBpbWcge1xcblxcdHdpZHRoOiBjYWxjKDAuOCp2YXIoLS1ydnYpKTtcXG59XFxuXFxuLmNoZWNrYm94IHtcXG5cXHRncmlkLWFyZWE6IGNoZWNrYm94O1xcblxcdG1hcmdpbi1sZWZ0OiBjYWxjKDAuMip2YXIoLS1ydnYpKTtcXG59XFxuXFxuLml0ZW0tdGl0bGUge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRib3R0b206IDJweDtcXG5cXHRncmlkLWFyZWE6IHRpdGxlO1xcblxcdGp1c3RpZnktc2VsZjogc3RhcnQ7XFxufVxcblxcbi5leHBhbmRhYmxlLXRpdGxlIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5lZGl0IHtcXG5cXHRncmlkLWFyZWE6IGVkaXQ7XFxufVxcblxcbi5leHBhbmQge1xcblxcdGdyaWQtYXJlYTogZXhwYW5kO1xcbn1cXG5cXG4uc2hyaW5rIHtcXG5cXHRncmlkLWFyZWE6IGV4cGFuZDtcXG5cXHRhc3BlY3QtcmF0aW86IDEgLyAxO1xcbn1cXG5cXG4uc2hyaW5rIGltZyB7XFxuXFx0aGVpZ2h0OiBjYWxjKHZhcigtLXJ2dikpO1xcbn1cXG5cXG4uaXRlbS1kZXNjcmlwdGlvbiB7XFxuXFx0Ym9yZGVyLXJhZGl1czogM3B4O1xcblxcdGZvbnQtc3R5bGU6IGl0YWxpYztcXG5cXHRncmlkLWFyZWE6IGRlc2NyaXB0aW9uO1xcblxcdGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuXFx0anVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xcblxcdGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4uZXhwYW5kZWQtaXRlbSAuZGVsZXRlIHtcXG5cXHRncmlkLWFyZWE6IGRlbGV0ZTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG5cXHRtYXJnaW4tYm90dG9tOiBjYWxjKDAuMyp2YXIoLS1ydnYpKTtcXG59XFxuXFxuLmRlbGV0ZSBpbWcge1xcblxcdGhlaWdodDogY2FsYyh2YXIoLS1ydnYpKTtcXG59XFxuXFxuZm9vdGVyIHtcXG5cXHRoZWlnaHQ6IDV2aDtcXG5cXHRtaW4taGVpZ2h0OiBjYWxjKDAuOCp2YXIoLS1ydnYpKTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aXRsZS1mb290ZXItY29sb3IpO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRmb250LXNpemU6IGNhbGMoMC41KnZhcigtLXJ2dikpO1xcblxcdGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXG5cXHRmb250LWZhbWlseTogJ1N1YmxpbWEnO1xcblxcdGZvbnQtc2l6ZTogY2FsYygwLjQqdmFyKC0tcnZ2KSk7XFxuXFx0bGV0dGVyLXNwYWNpbmc6IGNhbGMoMC4xKnZhcigtLXJ2dikpO1xcblxcdHRleHQtaW5kZW50OiBjYWxjKDAuMSp2YXIoLS1ydnYpKTtcXG59XFxuXFxuLyogZGFyayBtb2RlIHN0eWxpbmc6ICovXFxuXFxuYm9keS5kYXJrIHtcXG5cXHRjb2xvcjogdmFyKC0tZGFyay10ZXh0KTtcXG59XFxuXFxuLnRpdGxlLmRhcmsge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstdGl0bGUtZm9vdGVyLWNvbG9yKTtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZGFyay1ib3JkZXIpO1xcbn1cXG5cXG4ubmF2LmRhcmsge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstbmF2LWJnKTtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZGFyay1ib3JkZXIpO1xcbn1cXG5cXG4ubmF2LmRhcmsgZGl2IHtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWJvcmRlcik7XFxufVxcblxcbi5ub3cuZGFyayB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ub3ctYnV0dG9uKTtcXG59XFxuXFxuLmxhdGVyLmRhcmsge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstbGF0ZXItYnV0dG9uKTtcXG59XFxuXFxuLmFsbC5kYXJrIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWFsbC1idXR0b24pO1xcbn1cXG5cXG4uc2VsZWN0ZWQuZGFyayB7XFxuXFx0Ym94LXNoYWRvdzogMCAwIDAgM3B4IHZhcigtLWRhcmstYnV0dG9uLW91dGxpbmUpO1xcbn1cXG5cXG4ubWFpbi5kYXJrIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLW1haW4tYmcpO1xcbn1cXG5cXG4uZGlzcGxheWVkLWl0ZW0uZGFyayB7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1ib3JkZXIpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstaXRlbS1iZyk7XFxufVxcblxcbi5kaXNwbGF5ZWQtaXRlbS5ub3ctaXRlbS5kYXJrIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLW5vdy1pdGVtLWJnKTtcXG59XFxuXFxuLmRpc3BsYXllZC1pdGVtLmxhdGVyLWl0ZW0uZGFyayB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1sYXRlci1pdGVtLWJnKTtcXG59XFxuXFxuLmNvbXBsZXRlZC1pdGVtIC5pdGVtLXRpdGxlLmRhcmsge1xcblxcdGZpbHRlcjogYnJpZ2h0bmVzcyg4MCUpO1xcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGNhbGMoMC4wNCp2YXIoLS1ydnYpKSB2YXIoLS1kYXJrLXRleHQpO1xcblxcdHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogbm9uZTtcXG59XFxuXFxuLmRpc3BsYXllZC1pdGVtLmFkZC1mb3JtLmRhcmsge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYWRkLWZvcm0tYmcpO1xcbn1cXG5cXG4uZWRpdC1mb3JtLWl0c2VsZi5kYXJrIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWFkZC1mb3JtLWJnKTtcXG59XFxuXFxuLmNsb3NlLWJ1dHRvbi5kYXJrIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNsb3NlLWJ1dHRvbik7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1ib3JkZXIpO1xcbn1cXG5cXG4udGl0bGUtc2VjdGlvbi5kYXJrIGlucHV0LFxcbi5kZXNjcmlwdGlvbi1zZWN0aW9uLmRhcmsgdGV4dGFyZWEge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZm9ybS1pbnB1dC1iZyk7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1ib3JkZXIpO1xcbn1cXG5cXG5pbnB1dC5kYXJrOmZvY3VzLFxcbnRleHRhcmVhLmRhcms6Zm9jdXMge1xcblxcdGJveC1zaGFkb3c6IDAgMCAwIDNweCB2YXIoLS1kYXJrLWlucHV0LWZvY3VzLW91dGxpbmUpO1xcbn1cXG5cXG4ucmFkaW8tb3B0aW9uLmRhcmsge1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstYm9yZGVyKTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLXByaW9yaXR5LWJ1dHRvbi1kZWZhdWx0KTtcXG59XFxuXFxuLm5vdy1vcHRpb24uc2VsZWN0ZWQtcHJpb3JpdHkuZGFyayB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ub3ctYnV0dG9uKTtcXG5cXHRib3gtc2hhZG93OiAwIDAgMCAzcHggdmFyKC0tZGFyay1idXR0b24tb3V0bGluZSk7XFxufVxcblxcbi5sYXRlci1vcHRpb24uc2VsZWN0ZWQtcHJpb3JpdHkuZGFyayB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1sYXRlci1idXR0b24pO1xcblxcdGJveC1zaGFkb3c6IDAgMCAwIDNweCB2YXIoLS1kYXJrLWJ1dHRvbi1vdXRsaW5lKTtcXG59XFxuXFxuLmRpc3BsYXllZC1pdGVtLmFkZC1pdGVtLWJ1dHRvbi5kYXJrIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWFkZC1pdGVtLWJ1dHRvbik7XFxufVxcblxcbi5zdWJtaXQtYnV0dG9uLmRhcmsge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstc3VibWl0LWJ1dHRvbi1iZyk7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1ib3JkZXIpO1xcbn1cXG5cXG5mb290ZXIuZGFyayB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay10aXRsZS1mb290ZXItY29sb3IpO1xcblxcdGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWJvcmRlcik7XFxufVxcblxcbi8qIGRlc2t0b3AgdmVyc2lvbjogKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc1MHB4KSB7XFxuXFxuXFx0Lm5hdiBkaXYge1xcblxcdFxcdHRyYW5zaXRpb246IDAuMDc1cyBsaW5lYXI7XFxuXFx0fVxcblxcblxcdC5uYXYgZGl2OmhvdmVyIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcblxcdH1cXG5cXG5cXHQuY2hlY2tib3gsXFxuXFx0LmVkaXQsXFxuXFx0LmV4cGFuZCxcXG5cXHQuc2hyaW5rLFxcblxcdC5kZWxldGUsXFxuXFx0LmFkZC1pdGVtLWJ1dHRvbixcXG5cXHQucmFkaW8tb3B0aW9uLFxcblxcdC5zdWJtaXQtYnV0dG9uLFxcblxcdC5jbG9zZS1idXR0b24ge1xcblxcdFxcdHRyYW5zaXRpb246IDAuMDc1cyBsaW5lYXI7XFxuXFx0fVxcblxcblxcdC5jaGVja2JveDpob3ZlciB7XFxuXFx0XFx0dHJhbnNmb3JtOiBzY2FsZSgxLjA3NSk7XFxuXFx0fVxcblxcblxcdC5lZGl0OmhvdmVyIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuXFx0fVxcblxcblxcdC5leHBhbmQ6aG92ZXIge1xcblxcdFxcdHRyYW5zZm9ybTogc2NhbGUoMS4yNSk7XFxuXFx0fVxcblxcblxcdC5zaHJpbms6aG92ZXIge1xcblxcdFxcdHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG5cXHR9XFxuXFxuXFx0LmRlbGV0ZTpob3ZlciB7XFxuXFx0XFx0dHJhbnNmb3JtOiBzY2FsZSgxLjA3NSk7XFxuXFx0fVxcblxcblxcdC5hZGQtaXRlbS1idXR0b246aG92ZXIge1xcblxcdFxcdHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuXFx0fVxcblxcblxcdC5yYWRpby1vcHRpb246aG92ZXIge1xcblxcdFxcdHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuXFx0fVxcblxcblxcdC5zdWJtaXQtYnV0dG9uOmhvdmVyIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xcblxcdH1cXG5cXG5cXHQuY2xvc2UtYnV0dG9uOmhvdmVyIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuXFx0fVxcblxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XFxuXFx0LmNvbXBsZXRlZC1pdGVtIC5pdGVtLXRpdGxlIHtcXG5cXHRcXHRmb250LXN0eWxlOiBpdGFsaWM7XFxuXFx0XFx0dGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuXFx0XFx0dGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBub25lO1xcblxcdFxcdHRleHQtdW5kZXJsaW5lLW9mZnNldDogMDtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XFxuXFx0Ym9keSB7XFxuXFx0XFx0bWluLWhlaWdodDogMTAwdmg7XFxuXFx0XFx0bWluLXdpZHRoOiAxMDB2dztcXG5cXHR9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBzZXQgYm9keSBoZWlnaHQgdG8gZXhhY3RseSB0aGUgaW5uZXIgaGVpZ2h0IG9mIHRoZSBicm93c2VyIG9uIG5hcnJvdyAobGlrZWx5IG1vYmlsZSkgc2NyZWVuczpcbmNvbnN0IHNldEJvZHlIZWlnaHQgPSAoKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNzUxKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUubWluSGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ICsgXCJweFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUubWluSGVpZ2h0ID0gJzEwMHZoJztcbiAgICB9XG59O1xuXG4vLyBzZXQgYm9keSB3aWR0aCB0byBleGFjdGx5IHRoZSBpbm5lciB3aWR0aCBvZiB0aGUgYnJvd3NlcjpcbmNvbnN0IHNldEJvZHlXaWR0aCA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm1heFdpZHRoID0gd2luZG93LmlubmVyV2lkdGggKyBcInB4XCI7XG59O1xuXG4vLyB3b3JrYXJvdW5kIHRvIGNoZWNrIGZvciBzYWZhcmkgbGFuZHNjYXBlIG9yaWVudGF0aW9uOlxuY29uc3QgY2hlY2tGb3JMYW5kc2NhcGUgPSAoKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gd2luZG93LmlubmVySGVpZ2h0KSB7XG4gICAgICAgIHNldEJvZHkoKTtcbiAgICB9XG59XG5cbmNvbnN0IHNldEJvZHkgPSAoKSA9PiB7XG4gICAgc2V0Qm9keUhlaWdodCgpO1xuICAgIHNldEJvZHlXaWR0aCgpO1xufTtcblxuZXhwb3J0IHsgc2V0Qm9keUhlaWdodCwgc2V0Qm9keVdpZHRoLCBzZXRCb2R5LCBjaGVja0ZvckxhbmRzY2FwZSB9OyIsImltcG9ydCBTYXZlSWNvbiBmcm9tICcuLi9pbWcvc2F2ZS5zdmcnO1xuaW1wb3J0IENsb3NlSWNvbiBmcm9tICcuLi9pbWcvY2xvc2Uuc3ZnJztcbmltcG9ydCB7IGdldEFsbCB9IGZyb20gJy4vbGlzdC5qcyc7XG5pbXBvcnQgeyBkaXNwbGF5TW9kZSB9IGZyb20gJy4vcGFnZS5qcyc7XG5pbXBvcnQgeyBhZGRFZGl0Rm9ybUxpc3RlbmVycyB9IGZyb20gJy4vbGlzdGVuJztcblxuY29uc3QgcmVuZGVyRWRpdEZvcm0gPSAoaW5kZXgpID0+IHtcblxuICAgIGNvbnN0IGxpc3QgPSBnZXRBbGwoKTtcbiAgICBjb25zdCBpdGVtID0gbGlzdFtpbmRleF07XG5cbiAgICAvLyBjcmVhdGUgb3ZlcmxheSBmb3IgYmx1ciBiYWNrZHJvcCBmaWx0ZXI6XG4gICAgY29uc3QgZWRpdEJhY2tkcm9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWRpdEJhY2tkcm9wLmNsYXNzTGlzdC5hZGQoJ2VkaXQtYmFja2Ryb3AnKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVkaXRCYWNrZHJvcCk7XG5cbiAgICAvLyBjcmVhdGUgZWRpdCBmb3JtIGNvbnRhaW5lcjpcbiAgICBjb25zdCBlZGl0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVkaXRGb3JtLmNsYXNzTGlzdC5hZGQoJ2VkaXQtZm9ybScpO1xuXG4gICAgLy8gYWRkIGVkaXQgZm9ybSB0byB0aGUgRE9NOlxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoZWRpdEZvcm0pO1xuXG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgZm9ybSBpdHNlbGY6XG4gICAgICAgIGNvbnN0IGZvcm1JdHNlbGYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIGZvcm1JdHNlbGYuY2xhc3NMaXN0LmFkZCgnZWRpdC1mb3JtLWl0c2VsZicpO1xuICAgICAgICBmb3JtSXRzZWxmLmRhdGFzZXQuaWQgPSBpbmRleDtcbiAgICAgICAgZm9ybUl0c2VsZi5zZXRBdHRyaWJ1dGUoJ21ldGhvZCcsICcnKTtcbiAgICAgICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQoZm9ybUl0c2VsZik7XG5cbiAgICAgICAgICAgIC8vIGNyZWF0ZSB0aGUgZm9ybSB0aXRsZTpcbiAgICAgICAgICAgIGNvbnN0IGZvcm1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZm9ybVRpdGxlLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tdGl0bGUnKTtcbiAgICAgICAgICAgIGZvcm1JdHNlbGYuYXBwZW5kQ2hpbGQoZm9ybVRpdGxlKTtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1UaXRsZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICBmb3JtVGl0bGVUZXh0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tdGl0bGUtdGV4dCcsICdlZGl0LWZvcm0tdGl0bGUtdGV4dCcpO1xuICAgICAgICAgICAgZm9ybVRpdGxlVGV4dC50ZXh0Q29udGVudCA9IGBlZGl0aW5nICcke2l0ZW0udGl0bGV9J2A7XG4gICAgICAgICAgICBmb3JtVGl0bGUuYXBwZW5kQ2hpbGQoZm9ybVRpdGxlVGV4dCk7XG5cbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhbiAnWCcgYnV0dG9uIHRvIGNsb3NlIG91dCBvZiB0aGUgZm9ybTpcbiAgICAgICAgICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjbG9zZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjbG9zZS1idXR0b24nLCAnZWRpdC1jbG9zZS1idXR0b24nKTtcbiAgICAgICAgICAgIGZvcm1UaXRsZS5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG4gICAgICAgICAgICBjb25zdCBjbG9zZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIGNsb3NlSWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsIENsb3NlSWNvbik7XG4gICAgICAgICAgICBjbG9zZUJ1dHRvbi5hcHBlbmRDaGlsZChjbG9zZUljb24pO1xuXG4gICAgICAgICAgICAvLyBjcmVhdGUgdGhlIGZvcm0gZWxlbWVudHM6XG5cbiAgICAgICAgICAgICAgICAvLyB0aXRsZSBzZWN0aW9uOlxuICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHRpdGxlU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdmb3JtLWVsZW1lbnQnLCAndGl0bGUtc2VjdGlvbicsICdlZGl0LXRpdGxlLXNlY3Rpb24nKTtcbiAgICAgICAgICAgICAgICBmb3JtSXRzZWxmLmFwcGVuZENoaWxkKHRpdGxlU2VjdGlvbik7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gdGl0bGUgbGFiZWw6XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgICAgICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RpdGxlJyk7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSAndGl0bGU6JztcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVTZWN0aW9uLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHRpdGxlIGlucHV0OlxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICAgICAgICAgICAgICB0aXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoJ3RpdGxlLWlucHV0JywgJ2VkaXQtdGl0bGUtaW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGl0bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RpdGxlJyk7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlSW5wdXQudmFsdWUgPSBpdGVtLnRpdGxlO1xuICAgICAgICAgICAgICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVTZWN0aW9uLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuXG5cbiAgICAgICAgICAgICAgICAvLyBkZXNjcmlwdGlvbiBzZWN0aW9uOlxuICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdmb3JtLWVsZW1lbnQnLCAnZGVzY3JpcHRpb24tc2VjdGlvbicsICdlZGl0LWRlc2NyaXB0aW9uLXNlY3Rpb24nKTtcbiAgICAgICAgICAgICAgICBmb3JtSXRzZWxmLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uU2VjdGlvbik7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gZGVzY3JpcHRpb24gbGFiZWw6XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSAnZGVzY3JpcHRpb24gKG9wdGlvbmFsKTonO1xuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblNlY3Rpb24uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gZGVzY3JpcHRpb24gaW5wdXQ6XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbklucHV0LmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uLWlucHV0JywgJ2VkaXQtZGVzY3JpcHRpb24taW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZGVzY3JpcHRpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSBpdGVtLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblNlY3Rpb24uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XG5cblxuICAgICAgICAgICAgICAgIC8vIHByaW9yaXR5IGZpZWxkc2V0OlxuICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKTtcbiAgICAgICAgICAgICAgICBmaWVsZHNldC5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1zZWN0aW9uJywgJ2VkaXQtcHJpb3JpdHktc2VjdGlvbicpO1xuICAgICAgICAgICAgICAgIGZvcm1JdHNlbGYuYXBwZW5kQ2hpbGQoZmllbGRzZXQpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHByaW9yaXR5IGxhYmVsOlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5TGFiZWwuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktbGFiZWwnLCAnZWRpdC1wcmlvcml0eS1sYWJlbCcpO1xuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ3ByaW9yaXR5Oic7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vICdOT1cnIHByaW9yaXR5IHJhZGlvIG9wdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm93T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIG5vd09wdGlvbi5jbGFzc0xpc3QuYWRkKCdyYWRpby1vcHRpb24nLCAnbm93LW9wdGlvbicsICdlZGl0LW5vdy1vcHRpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobm93T3B0aW9uKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTk9XIGlucHV0ICYgbGFiZWw6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBub3dJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3dJbnB1dC5jbGFzc0xpc3QuYWRkKCdyYWRpby1pbnB1dCcsICdlZGl0LXJhZGlvLWlucHV0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5wcmlvcml0eSA9PT0gJ25vdycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3dPcHRpb24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQtcHJpb3JpdHknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG5vd0lucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm93SW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdub3cnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vd0lucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcmlvcml0eScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm93SW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdub3cnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vd09wdGlvbi5hcHBlbmRDaGlsZChub3dJbnB1dCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vd0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vd0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ25vdycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm93TGFiZWwudGV4dENvbnRlbnQgPSAnbm93JztcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vd09wdGlvbi5hcHBlbmRDaGlsZChub3dMYWJlbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gJ0xBVEVSJyBwcmlvcml0eSByYWRpbyBvcHRpb246XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhdGVyT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGxhdGVyT3B0aW9uLmNsYXNzTGlzdC5hZGQoJ3JhZGlvLW9wdGlvbicsICdsYXRlci1vcHRpb24nLCAnZWRpdC1sYXRlci1vcHRpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobGF0ZXJPcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIExBVEVSIGlucHV0ICYgbGFiZWw6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXRlcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhdGVySW5wdXQuY2xhc3NMaXN0LmFkZCgncmFkaW8taW5wdXQnLCAnZWRpdC1yYWRpby1pbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0ucHJpb3JpdHkgPT09ICdsYXRlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXRlck9wdGlvbi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZC1wcmlvcml0eScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGF0ZXJJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhdGVySW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdsYXRlcicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF0ZXJJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJpb3JpdHknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhdGVySW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdsYXRlcicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF0ZXJPcHRpb24uYXBwZW5kQ2hpbGQobGF0ZXJJbnB1dCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhdGVyTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF0ZXJMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdsYXRlcicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF0ZXJMYWJlbC50ZXh0Q29udGVudCA9ICdsYXRlcic7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXRlck9wdGlvbi5hcHBlbmRDaGlsZChsYXRlckxhYmVsKTtcblxuICAgICAgICAgICAgLy8gY3JlYXRlIGEgbmV3ICdhZGQnIGJ1dHRvbiBhdCB0aGUgYm90dG9tIG9mIHRoZSBmb3JtOlxuICAgICAgICAgICAgY29uc3QgZm9ybUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgZm9ybUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzdWJtaXQtYnV0dG9uJywgJ2VkaXQtc3VibWl0LWJ1dHRvbicpO1xuICAgICAgICAgICAgZm9ybUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gICAgICAgICAgICBmb3JtSXRzZWxmLmFwcGVuZENoaWxkKGZvcm1CdXR0b24pO1xuICAgICAgICAgICAgY29uc3QgZm9ybUJ1dHRvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIGZvcm1CdXR0b25JY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgU2F2ZUljb24pO1xuICAgICAgICAgICAgZm9ybUJ1dHRvbi5hcHBlbmRDaGlsZChmb3JtQnV0dG9uSWNvbik7XG4gICAgXG4gICAgLy8gcmVuZGVyIHRoZSBlZGl0IGZvcm0gaW4gZGFyayBtb2RlIGlmIGl0J3MgdHVybmVkIG9uOlxuICAgIGlmIChkaXNwbGF5TW9kZSA9PT0gJ2RhcmsnKSB7XG4gICAgICAgIHN3aXRjaFRvRGFyaygpO1xuICAgIH1cblxuICAgIGFkZEVkaXRGb3JtTGlzdGVuZXJzKCk7XG5cbn1cblxuZXhwb3J0IHsgcmVuZGVyRWRpdEZvcm0gfSIsImltcG9ydCAnLi4vc3R5bGUuY3NzJztcblxuaW1wb3J0IHsgcmV0cmlldmVTdG9yZWRMaXN0IH0gZnJvbSAnLi9saXN0LmpzJztcblxuaW1wb3J0IHsgcmVuZGVySGVhZGVyRm9vdGVyLCByZW5kZXJOb3csIHN0eWxlTGlnaHRJY29uLCBzd2l0Y2hUb0xpZ2h0IH0gZnJvbSAnLi9wYWdlLmpzJztcblxuaW1wb3J0IHsgYWRkSW5pdGlhbExpc3RlbmVycyB9IGZyb20gJy4vbGlzdGVuLmpzJztcblxucmVuZGVySGVhZGVyRm9vdGVyKCk7XG5cbmFkZEluaXRpYWxMaXN0ZW5lcnMoKTtcblxucmV0cmlldmVTdG9yZWRMaXN0KCk7XG5cbnJlbmRlck5vdygpO1xuXG4vLyBzZXQgbGlnaHQgbW9kZSBhcyBkZWZhdWx0Olxuc3dpdGNoVG9MaWdodCgpO1xuc3R5bGVMaWdodEljb24oKTsiLCIvLyBjcmVhdGUgZW1wdHkgdG9kb0xpc3QgYXJyYXk6XG5sZXQgdG9kb0xpc3QgPSBbXTtcblxuLy8gcmV0cmlldmUgdGhlIHRvZG9MaXN0IGFycmF5IGZyb20gbG9jYWxTdG9yYWdlOlxuY29uc3QgcmV0cmlldmVTdG9yZWRMaXN0ID0gKCkgPT4ge1xuXG4gICAgLy8gZmlyc3QsIGNoZWNrIGlmIHRvLWRvIGFycmF5IGlzIHN0b3JlZCBpbiBsb2NhbFN0b3JhZ2U6XG4gICAgY29uc3Qgc3RvcmVkVG9kb0xpc3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb0xpc3QnKTtcbiAgICAvLyBpZiB0aGVyZSBpcyBhIHN0b3JlZFRvZG9MaXN0LCBnZXQgaXQgYW5kIHNhdmUgaXQgdG8gcmV0cmlldmVkTGlzdDpcbiAgICBpZiAoc3RvcmVkVG9kb0xpc3QpIHtcbiAgICAgICAgY29uc3QgcmV0cmlldmVkTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9MaXN0JykpO1xuICAgICAgICBcbiAgICAgICAgLy8gc2V0IHRoZSBsb2NhbCB0b2RvTGlzdCBhcnJheSB0byB0aGUgbGlzdCByZXRyaWV2ZWQgZnJvbSBzdG9yYWdlOlxuICAgICAgICB0b2RvTGlzdCA9IHJldHJpZXZlZExpc3Q7XG4gICAgfVxufVxuXG4vLyBzYXZlIHRoZSBsaXN0IHRvIGxvY2FsU3RvcmFnZTpcbmNvbnN0IHNhdmVUb1N0b3JhZ2UgPSAoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9MaXN0JywgSlNPTi5zdHJpbmdpZnkodG9kb0xpc3QpKTtcbn1cblxuLy8gVG9kbyBvYmplY3QgY29uc3RydWN0b3I6XG5mdW5jdGlvbiBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGNvbXBsZXRlZCkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xufTtcblxuLy8gbWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyBUb2RvIG9iamVjdCBhbmQgYWRkIGl0IHRvIHRoZSB0b2RvTGlzdCBhcnJheTpcbmNvbnN0IGNyZWF0ZVRvZG8gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgY29tcGxldGVkKSA9PiB7XG4gICAgY29uc3QgbmV3VG9kbyA9IG5ldyBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGNvbXBsZXRlZCk7XG4gICAgdG9kb0xpc3QucHVzaChuZXdUb2RvKTtcbiAgICBzYXZlVG9TdG9yYWdlKCk7XG59O1xuXG4vLyBnZXQgdGhlIGNvbXBsZXRlIGN1cnJlbnQgbGlzdDpcbmNvbnN0IGdldEFsbCA9ICgpID0+IHtcbiAgICByZXR1cm4gdG9kb0xpc3Q7XG59O1xuXG4vLyBnZXQgdGhlIGl0ZW1zIHdpdGggJ25vdycgcHJpb3JpdHk6XG5jb25zdCBnZXROb3cgPSAoKSA9PiB7XG4gICAgY29uc3Qgbm93SXRlbXMgPSB0b2RvTGlzdC5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAgIGlmIChpdGVtLnByaW9yaXR5ID09PSAnbm93Jykge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbm93SXRlbXM7XG59O1xuXG4vLyBnZXQgdGhlIGl0ZW1zIHdpdGggJ2xhdGVyJyBwcmlvcml0eTpcbmNvbnN0IGdldExhdGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGxhdGVySXRlbXMgPSB0b2RvTGlzdC5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAgIGlmIChpdGVtLnByaW9yaXR5ID09PSAnbGF0ZXInKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBsYXRlckl0ZW1zO1xufTtcblxuY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoaWQpID0+IHtcbiAgICByZXR1cm4gdG9kb0xpc3RbaWRdLmRlc2NyaXB0aW9uO1xufTtcblxuY29uc3QgZ2V0Q29tcGxldGVkID0gKGlkKSA9PiB7XG4gICAgcmV0dXJuIHRvZG9MaXN0W2lkXS5jb21wbGV0ZWQ7XG59XG5cbi8vIHJlbW92ZSBhIFRvZG8gb2JqZWN0IGZyb20gdGhlIHRvZG9MaXN0IGFycmF5IGJ5IHVzaW5nIGl0cyBET00gaWQgYXMgaXRzIGFycmF5IGluZGV4OlxuY29uc3QgZGVsZXRlVG9kbyA9IChpZCkgPT4ge1xuICAgIHRvZG9MaXN0LnNwbGljZShpZCwgMSk7XG4gICAgc2F2ZVRvU3RvcmFnZSgpO1xufVxuXG4vLyBlZGl0IGEgcHJvcGVydHkgb2YgYSBUb2RvIG9iamVjdDpcbmNvbnN0IGVkaXRUb2RvID0gKGlkLCBwcm9wZXJ0eSwgbmV3VmFsdWUpID0+IHtcbiAgICB0b2RvTGlzdFtpZF1bcHJvcGVydHldID0gbmV3VmFsdWU7XG4gICAgc2F2ZVRvU3RvcmFnZSgpO1xufTtcblxuZXhwb3J0IHsgXG4gICAgY3JlYXRlVG9kbywgXG4gICAgZ2V0QWxsLCBcbiAgICBnZXROb3csIFxuICAgIGdldExhdGVyLCBcbiAgICBnZXREZXNjcmlwdGlvbiwgXG4gICAgZ2V0Q29tcGxldGVkLCBcbiAgICBkZWxldGVUb2RvLCBcbiAgICBlZGl0VG9kbyxcbiAgICByZXRyaWV2ZVN0b3JlZExpc3QsXG4gICAgc2F2ZVRvU3RvcmFnZVxufSIsImltcG9ydCB7IGNoZWNrRm9yTGFuZHNjYXBlLCBzZXRCb2R5IH0gZnJvbSAnLi9ib2R5LmpzJztcbmltcG9ydCB7IFxuICAgIHJlbmRlck5vdywgXG4gICAgcmVuZGVyTGF0ZXIsIFxuICAgIHJlbmRlckFsbCwgXG4gICAgZXhwYW5kSXRlbSxcbiAgICBzaHJpbmtJdGVtLCBcbiAgICBnZXRDdXJyZW50VmlldyxcbiAgICBjaGVja0NoZWNrYm94LFxuICAgIHVuY2hlY2tDaGVja2JveCxcbiAgICByZW5kZXJBZGRGb3JtLFxuICAgIHN0eWxlUmFkaW9PcHRpb24sXG4gICAgc3VibWl0Rm9ybSxcbiAgICByZW1vdmVGb3JtLCBcbiAgICBzd2l0Y2hUb0xpZ2h0LFxuICAgIHN3aXRjaFRvRGFyayxcbiAgICBzdHlsZUxpZ2h0SWNvbixcbiAgICBzdHlsZURhcmtJY29uLFxuICAgIHNob3dFZGl0UG9wdXAsXG4gICAgc3VibWl0RWRpdEZvcm0sXG4gICAgcmVtb3ZlRWRpdEZvcm0gfSBmcm9tICcuL3BhZ2UuanMnO1xuaW1wb3J0IHsgZGVsZXRlVG9kbywgZWRpdFRvZG8sIGdldENvbXBsZXRlZCB9IGZyb20gJy4vbGlzdC5qcyc7XG5cbi8vIGV2ZW50IGxpc3RlbmVycyB0byBhZGQgd2hlbiB0aGUgcGFnZSBmaXJzdCBsb2FkczpcbmNvbnN0IGFkZEluaXRpYWxMaXN0ZW5lcnMgPSAoKSA9PiB7XG5cbiAgICAvLyBzZXQgaW5pdGlhbCBib2R5IGhlaWdodCAmIHdpZHRoLi5cbiAgICBzZXRCb2R5KCk7XG5cbiAgICAvLyB0aGVuIGFkanVzdCBib2R5IGhlaWdodCAmIHdpZHRoIGlmIG5lZWRlZCB3aGVuZXZlciB0aGUgd2luZG93IGlzIHJlc2l6ZWQsIG9yIHdoZW4gdGhlIHNjcmVlbiBvcmllbnRhdGlvbiBjaGFuZ2VzOlxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBzZXRCb2R5KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgY2hlY2tGb3JMYW5kc2NhcGUpO1xuICAgIC8vIGlmIGJyb3dzZXIgaXMgbm90IHNhZmFyaTpcbiAgICBpZiAoIShuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJTYWZhcmlcIikgIT0gLTEgKSkge1xuICAgICAgICBzY3JlZW4ub3JpZW50YXRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgc2V0Qm9keSk7XG4gICAgICAgIHNjcmVlbi5vcmllbnRhdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjaGVja0ZvckxhbmRzY2FwZSk7XG4gICAgfVxuICAgIFxuICAgIC8vIGFkZCBjbGljayBsaXN0ZW5lcnMgdG8gbmF2IGJ1dHRvbnMgdG8gdHJpZ2dlciByZW5kZXIgZnVuY3Rpb25zOlxuICAgIGNvbnN0IG5vdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3cnKTtcbiAgICBub3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXJOb3cpO1xuXG4gICAgY29uc3QgbGF0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGF0ZXInKTtcbiAgICBsYXRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlckxhdGVyKTtcblxuICAgIGNvbnN0IGFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwnKTtcbiAgICBhbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXJBbGwpO1xuXG4gICAgLy8gYWRkIGxpc3RlbmVycyB0byBsaWdodC9kYXJrIG1vZGUgZGlzcGxheSBpY29uczpcbiAgICBjb25zdCBsaWdodEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlnaHQtbW9kZScpO1xuICAgIGxpZ2h0SWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN3aXRjaFRvTGlnaHQpO1xuICAgIGxpZ2h0SWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0eWxlTGlnaHRJY29uKTtcblxuICAgIGNvbnN0IGRhcmtJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhcmstbW9kZScpO1xuICAgIGRhcmtJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3dpdGNoVG9EYXJrKTtcbiAgICBkYXJrSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0eWxlRGFya0ljb24pO1xuXG59XG5cbmNvbnN0IGFkZEFkZExpc3RlbmVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtaXRlbS1idXR0b24nKTtcbiAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXJBZGRGb3JtKTtcbn1cblxuY29uc3QgYWRkRm9ybUxpc3RlbmVycyA9ICgpID0+IHtcblxuICAgIC8vIGFkZCBjbG9zZSBidXR0b24gbGlzdGVuZXI6XG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtYnV0dG9uJyk7XG4gICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVGb3JtKTtcblxuICAgIC8vIGFkZCByYWRpbyBpbnB1dCBsaXN0ZW5lcnM6XG4gICAgY29uc3QgcmFkaW9JbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmFkaW8taW5wdXQnKTtcbiAgICByYWRpb0lucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgICAgICAgIHN0eWxlUmFkaW9PcHRpb24oZSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gYWRkIHN1Ym1pdCBsaXN0ZW5lcjpcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1mb3JtLWl0c2VsZicpO1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzdWJtaXRGb3JtKCk7XG4gICAgfSk7XG59XG5cbmNvbnN0IGFkZEVkaXRGb3JtTGlzdGVuZXJzID0gKCkgPT4ge1xuXG4gICAgLy8gYWRkIGNsb3NlIGJ1dHRvbiBsaXN0ZW5lcjpcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWNsb3NlLWJ1dHRvbicpO1xuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlRWRpdEZvcm0pO1xuXG4gICAgLy8gYWRkIHJhZGlvIGlucHV0IGxpc3RlbmVyczpcbiAgICBjb25zdCByYWRpb0lucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yYWRpby1pbnB1dCcpO1xuICAgIHJhZGlvSW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgICAgICAgc3R5bGVSYWRpb09wdGlvbihlKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBhZGQgc3VibWl0IGxpc3RlbmVyOlxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1mb3JtLWl0c2VsZicpO1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzdWJtaXRFZGl0Rm9ybShlKTtcbiAgICB9KTtcbn1cblxuLy8gZXZlbnQgbGlzdGVuZXJzIHRvIG9wZW4gZXhwYW5kZWQgdmlldyBvZiBpdGVtczpcbmNvbnN0IGFkZEV4cGFuZExpc3RlbmVycyA9ICgpID0+IHtcblxuICAgIC8vIGFkZCBsaXN0ZW5lcnMgdG8gYWxsIGl0ZW0gdGl0bGUgdGV4dDpcbiAgICBjb25zdCBpdGVtVGl0bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmV4cGFuZGFibGUtdGl0bGUnKTtcbiAgICBpdGVtVGl0bGVzLmZvckVhY2godGl0bGUgPT4ge1xuICAgICAgICB0aXRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV4cGFuZEl0ZW0pO1xuICAgIH0pO1xuXG4gICAgLy8gYWRkIGxpc3RlbmVycyB0byBhbGwgZXhwYW5kIGljb25zOlxuICAgIGNvbnN0IGV4cGFuZEljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2LmV4cGFuZCcpO1xuICAgIGV4cGFuZEljb25zLmZvckVhY2goaWNvbiA9PiB7XG4gICAgICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBleHBhbmRJdGVtKTtcbiAgICB9KTtcbn1cblxuLy8gY2hlY2tib3ggbGlzdGVuZXIgdG8gYWRkIHRvIGVhY2ggaXRlbSBhcyBpdCBpcyByZW5kZXJlZDpcbmNvbnN0IGFkZENoZWNrYm94TGlzdGVuZXIgPSAoaWQpID0+IHtcblxuICAgIGNvbnN0IHBhcmVudEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD0nJHtpZH0nYCk7XG4gICAgY29uc3QgaXRlbUNoZWNrYm94ID0gcGFyZW50SXRlbS5maXJzdENoaWxkO1xuICAgIGl0ZW1DaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuICAgICAgICAvLyBpZiB0b2RvIGlzIG5vdCBjb21wbGV0ZWQsIG1hcmsgaXQgYXMgY29tcGxldGVkOlxuICAgICAgICBjb25zdCBjb21wbGV0ZWRTdGF0dXMgPSBnZXRDb21wbGV0ZWQoaWQpO1xuICAgICAgICBpZiAoY29tcGxldGVkU3RhdHVzID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZWRpdFRvZG8oaWQsICdjb21wbGV0ZWQnLCB0cnVlKTtcbiAgICAgICAgICAgIC8vIHRoZW4gY2hhbmdlIHRoZSBET00gZWxlbWVudCdzIGNsYXNzICYgc3R5bGluZyBzbyB0aGUgdmlldyBkb2Vzbid0IGhhdmUgdG8gYmUgcmUtcmVuZGVyZWQ6XG4gICAgICAgICAgICBwYXJlbnRJdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2luY29tcGxldGUtaXRlbScpO1xuICAgICAgICAgICAgcGFyZW50SXRlbS5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQtaXRlbScpO1xuICAgICAgICAgICAgLy8gYW5kIGNoZWNrIHRoZSBib3g6XG4gICAgICAgICAgICBjaGVja0NoZWNrYm94KGl0ZW1DaGVja2JveCk7XG5cbiAgICAgICAgLy8gaWYgdG9kbyBpcyBjb21wbGV0ZWQsIG1hcmsgaXQgYXMgaW5jb21wbGV0ZTpcbiAgICAgICAgfSBlbHNlIGlmIChjb21wbGV0ZWRTdGF0dXMgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGVkaXRUb2RvKGlkLCAnY29tcGxldGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgcGFyZW50SXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZWQtaXRlbScpO1xuICAgICAgICAgICAgcGFyZW50SXRlbS5jbGFzc0xpc3QuYWRkKCdpbmNvbXBsZXRlLWl0ZW0nKTtcbiAgICAgICAgICAgIC8vIGFuZCB1bmNoZWNrIHRoZSBib3g6XG4gICAgICAgICAgICB1bmNoZWNrQ2hlY2tib3goaXRlbUNoZWNrYm94KTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG4vLyBlZGl0IGljb24gbGlzdGVuZXIgdG8gYWRkIHRvIGVhY2ggaXRlbSBhcyBpdCBpcyByZW5kZXJlZDpcbmNvbnN0IGFkZEVkaXRJY29uTGlzdGVuZXIgPSAoaWQpID0+IHtcbiAgICBjb25zdCBpdGVtVG9FZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9JyR7aWR9J2ApO1xuICAgIGNvbnN0IGVkaXRJY29uID0gaXRlbVRvRWRpdC5jaGlsZHJlblsyXS5maXJzdENoaWxkO1xuICAgIGVkaXRJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0VkaXRQb3B1cCk7XG59XG5cbmNvbnN0IGFkZERlbGV0ZUxpc3RlbmVyVG9JdGVtV2l0aG91dERlc2NyaXB0aW9uID0gKGRlbGV0ZUljb24sIGlkKSA9PiB7XG4gICAgZGVsZXRlSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgLy8gZGVsZXRlIGl0ZW06XG4gICAgICAgIGRlbGV0ZVRvZG8oaWQpO1xuICAgICAgICAvLyB0aGVuIGNoZWNrIHRoZSB1c2VyJ3MgY3VycmVudCBwYWdlIGJlZm9yZSByZS1yZW5kZXJpbmc6XG4gICAgICAgIGNvbnN0IGN1cnJlbnRWaWV3ID0gZ2V0Q3VycmVudFZpZXcoKTtcbiAgICAgICAgaWYgKGN1cnJlbnRWaWV3ID09PSAnbm93Jykge1xuICAgICAgICAgICAgcmVuZGVyTm93KCk7XG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFZpZXcgPT09ICdsYXRlcicpIHtcbiAgICAgICAgICAgIHJlbmRlckxhdGVyKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFZpZXcgPT09ICdhbGwnKSB7XG4gICAgICAgICAgICByZW5kZXJBbGwoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG4vLyBldmVudCBsaXN0ZW5lcnMgKGZvciBkZWxldGUgYW5kIHNocmluayBhY3Rpb25zKSB0byBhZGQgdG8gYW4gaXRlbSB3aGVuIGl0IGlzIGV4cGFuZGVkOlxuY29uc3QgYWRkTGlzdGVuZXJzVG9FeHBhbmRlZEl0ZW0gPSAoaWQpID0+IHtcblxuICAgIC8vIGFkZCBsaXN0ZW5lciB0byBkZWxldGUgaWNvbjpcbiAgICBjb25zdCBwYXJlbnRJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9JyR7aWR9J2ApO1xuICAgIGNvbnN0IGRlbGV0ZUljb24gPSBwYXJlbnRJdGVtLmxhc3RDaGlsZDtcbiAgICBkZWxldGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAvLyBkZWxldGUgaXRlbTpcbiAgICAgICAgZGVsZXRlVG9kbyhpZCk7XG4gICAgICAgIC8vIHRoZW4gY2hlY2sgdGhlIHVzZXIncyBjdXJyZW50IHBhZ2UgYmVmb3JlIHJlLXJlbmRlcmluZzpcbiAgICAgICAgY29uc3QgY3VycmVudFZpZXcgPSBnZXRDdXJyZW50VmlldygpO1xuICAgICAgICBpZiAoY3VycmVudFZpZXcgPT09ICdub3cnKSB7XG4gICAgICAgICAgICByZW5kZXJOb3coKTtcbiAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50VmlldyA9PT0gJ2xhdGVyJykge1xuICAgICAgICAgICAgcmVuZGVyTGF0ZXIoKTtcbiAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50VmlldyA9PT0gJ2FsbCcpIHtcbiAgICAgICAgICAgIHJlbmRlckFsbCgpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBhZGQgbGlzdGVuZXIgdG8gc2hyaW5rIGljb246XG4gICAgY29uc3QgaWNvbiA9IHBhcmVudEl0ZW0uY2hpbGRyZW5bM107XG4gICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIHNocmlua0l0ZW0oZSk7XG4gICAgfSk7XG59XG5cbi8vIHJlbW92ZSBjbGljayBsaXN0ZW5lcnMgZnJvbSBhbiBleHBhbmRlZCBpdGVtIGFzIHRoZXkgYXJlIG5vIGxvbmdlciBuZWNlc3Nhcnk6XG5jb25zdCByZW1vdmVMaXN0ZW5lcnNGcm9tRXhwYW5kZWRJdGVtID0gKGlkKSA9PiB7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPScke2lkfSdgKTtcbiAgICBjb25zdCBpdGVtVGl0bGUgPSBpdGVtLmNoaWxkcmVuWzFdO1xuICAgIGl0ZW1UaXRsZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGV4cGFuZEl0ZW0pO1xuICAgIGNvbnN0IGl0ZW1JY29uID0gaXRlbS5jaGlsZHJlblsyXTtcbiAgICBpdGVtSWNvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGV4cGFuZEl0ZW0pO1xufVxuXG4vLyBmdW5jdGlvbiB0byBhdHRhY2ggbmV3IGV4cGFuZCBjbGljayBsaXN0ZW5lciBvbiBpdGVtIGVsZW1lbnRzIC0tIHRoaXMgaXMgbmVjZXNzYXJ5IGJlY2F1c2UgdGhlIGxpc3RlbmVycyBhcmUgcmVtb3ZlZCB3aGVuIHRoZSBpdGVtIGV4cGFuZHMuXG5jb25zdCByZXBsYWNlRXhwYW5kTGlzdGVuZXIgPSAoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBleHBhbmRJdGVtKTtcbn1cblxuZXhwb3J0IHsgXG4gICAgYWRkSW5pdGlhbExpc3RlbmVycywgXG4gICAgYWRkRXhwYW5kTGlzdGVuZXJzLCBcbiAgICBhZGRMaXN0ZW5lcnNUb0V4cGFuZGVkSXRlbSxcbiAgICByZW1vdmVMaXN0ZW5lcnNGcm9tRXhwYW5kZWRJdGVtLFxuICAgIGFkZENoZWNrYm94TGlzdGVuZXIsXG4gICAgcmVwbGFjZUV4cGFuZExpc3RlbmVyLFxuICAgIGFkZEFkZExpc3RlbmVyLFxuICAgIGFkZEVkaXRGb3JtTGlzdGVuZXJzLFxuICAgIGFkZEZvcm1MaXN0ZW5lcnMsXG4gICAgYWRkRGVsZXRlTGlzdGVuZXJUb0l0ZW1XaXRob3V0RGVzY3JpcHRpb24sXG4gICAgYWRkRWRpdEljb25MaXN0ZW5lclxufSIsImltcG9ydCB7IFxuICAgIGdldEFsbCwgXG4gICAgZ2V0Tm93LCBcbiAgICBnZXRMYXRlciwgXG4gICAgZ2V0RGVzY3JpcHRpb24sXG4gICAgY3JlYXRlVG9kbywgXG4gICAgZWRpdFRvZG99IGZyb20gJy4vbGlzdC5qcyc7XG5cbmltcG9ydCB7IFxuICAgIGFkZEV4cGFuZExpc3RlbmVycywgXG4gICAgYWRkTGlzdGVuZXJzVG9FeHBhbmRlZEl0ZW0sXG4gICAgcmVtb3ZlTGlzdGVuZXJzRnJvbUV4cGFuZGVkSXRlbSwgXG4gICAgYWRkQ2hlY2tib3hMaXN0ZW5lcixcbiAgICByZXBsYWNlRXhwYW5kTGlzdGVuZXIsXG4gICAgYWRkQWRkTGlzdGVuZXIsXG4gICAgYWRkRm9ybUxpc3RlbmVycywgXG4gICAgYWRkRGVsZXRlTGlzdGVuZXJUb0l0ZW1XaXRob3V0RGVzY3JpcHRpb24sXG4gICAgYWRkRWRpdEljb25MaXN0ZW5lcn0gZnJvbSAnLi9saXN0ZW4uanMnO1xuXG5pbXBvcnQgeyByZW5kZXJFZGl0Rm9ybSB9IGZyb20gJy4vZWRpdC5qcyc7XG5cbmltcG9ydCBDaGVja2VkQ2hlY2tib3hJY29uIGZyb20gJy4uL2ltZy9jaGVja2VkLWNoZWNrYm94LnN2Zyc7XG5pbXBvcnQgRW1wdHlDaGVja2JveEljb24gZnJvbSAnLi4vaW1nL2VtcHR5LWNoZWNrYm94LnN2Zyc7XG5pbXBvcnQgRXhwYW5kSWNvbiBmcm9tICcuLi9pbWcvZXhwYW5kLnN2Zyc7XG5pbXBvcnQgU2hyaW5rSWNvbiBmcm9tICcuLi9pbWcvc2hyaW5rLnN2Zyc7XG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICcuLi9pbWcvZGVsZXRlLnN2Zyc7XG5pbXBvcnQgQWRkSWNvbiBmcm9tICcuLi9pbWcvYWRkLnN2Zyc7XG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gJy4uL2ltZy9jbG9zZS5zdmcnO1xuaW1wb3J0IEZhdkljb24gZnJvbSAnLi4vaW1nL2Zhdmljb24ucG5nJztcbmltcG9ydCBEYXJrSWNvbiBmcm9tICcuLi9pbWcvZGFyay5zdmcnO1xuaW1wb3J0IExpZ2h0SWNvbiBmcm9tICcuLi9pbWcvbGlnaHQuc3ZnJztcbmltcG9ydCBFZGl0SWNvbiBmcm9tICcuLi9pbWcvZWRpdC5zdmcnO1xuXG4vLyBjcmVhdGUgY3VycmVudFZpZXcgdmFyaWFibGUgdG8gdHJhY2sgdGhlIGN1cnJlbnQgcGFnZSBkaXNwbGF5OlxubGV0IGN1cnJlbnRWaWV3O1xuXG5jb25zdCB1cGRhdGVDdXJyZW50VmlldyA9IChwYWdlKSA9PiB7XG4gICAgY3VycmVudFZpZXcgPSBwYWdlO1xufVxuXG5jb25zdCBnZXRDdXJyZW50VmlldyA9ICgpID0+IHtcbiAgICByZXR1cm4gY3VycmVudFZpZXc7XG59XG5cbi8vIGNyZWF0ZSBkaXNwbGF5TW9kZSB2YXJpYWJsZSB0byB0cmFjayBsaWdodC9kYXJrIG1vZGU6XG5sZXQgZGlzcGxheU1vZGU7XG5cbi8vIGdlbmVyYXRlIGJhc2UgcGFnZSBzdHJ1Y3R1cmU6XG5jb25zdCByZW5kZXJIZWFkZXJGb290ZXIgPSAoKSA9PiB7XG4gICAgLy8gLy8gYWRkIGZhdmljb246XG4gICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWQnKTtcbiAgICBjb25zdCBmYXZJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgIGZhdkljb24uc2V0QXR0cmlidXRlKCdyZWwnLCAnaWNvbicpO1xuICAgIGZhdkljb24uc2V0QXR0cmlidXRlKCdocmVmJywgRmF2SWNvbik7XG4gICAgaGVhZC5hcHBlbmRDaGlsZChmYXZJY29uKTtcblxuICAgIC8vIGNyZWF0ZSBoZWFkZXI6XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgICAgIC8vIGNyZWF0ZSB0aXRsZSBiYXI6XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICAgICAgICAgIC8vIGNyZWF0ZSBsaWdodCBtb2RlIGljb246XG4gICAgICAgICAgICBjb25zdCBsaWdodE1vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGxpZ2h0TW9kZS5jbGFzc0xpc3QuYWRkKCdsaWdodC1tb2RlJyk7XG4gICAgICAgICAgICB0aXRsZS5hcHBlbmRDaGlsZChsaWdodE1vZGUpO1xuICAgICAgICAgICAgY29uc3QgbGlnaHRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBsaWdodEljb24uc2V0QXR0cmlidXRlKCdzcmMnLCBMaWdodEljb24pO1xuICAgICAgICAgICAgbGlnaHRNb2RlLmFwcGVuZENoaWxkKGxpZ2h0SWNvbik7XG5cbiAgICAgICAgICAgIC8vIGNyZWF0ZSB0aXRsZSB0ZXh0OlxuICAgICAgICAgICAgY29uc3QgdGl0bGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0aXRsZVRleHQuY2xhc3NMaXN0LmFkZCgndGl0bGUtdGV4dCcpO1xuICAgICAgICAgICAgdGl0bGVUZXh0LnRleHRDb250ZW50ID0gJ05PVyAvLyBMQVRFUiA6OiBhIHNpbXBsZSB0by1kbyBsaXN0JztcbiAgICAgICAgICAgIHRpdGxlLmFwcGVuZENoaWxkKHRpdGxlVGV4dCk7XG5cbiAgICAgICAgICAgIC8vIGNyZWF0ZSBkYXJrIG1vZGUgaWNvbjpcbiAgICAgICAgICAgIGNvbnN0IGRhcmtNb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkYXJrTW9kZS5jbGFzc0xpc3QuYWRkKCdkYXJrLW1vZGUnKTtcbiAgICAgICAgICAgIHRpdGxlLmFwcGVuZENoaWxkKGRhcmtNb2RlKTtcbiAgICAgICAgICAgIGNvbnN0IGRhcmtJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBkYXJrSWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsIERhcmtJY29uKTtcbiAgICAgICAgICAgIGRhcmtNb2RlLmFwcGVuZENoaWxkKGRhcmtJY29uKTtcblxuXG4gICAgICAgIC8vIGNyZWF0ZSBuYXYgYmFyOlxuICAgICAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbmF2LmNsYXNzTGlzdC5hZGQoJ25hdicpO1xuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KTsgXG5cbiAgICAgICAgICAgIC8vIGNyZWF0ZSBuYXYgYnV0dG9uczpcbiAgICAgICAgICAgIGNvbnN0IG5vdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbm93LmNsYXNzTGlzdC5hZGQoJ25vdycpO1xuICAgICAgICAgICAgbm93LmNsYXNzTGlzdC5hZGQoJ25hdi1idXR0b24nKTtcbiAgICAgICAgICAgIG5vdy50ZXh0Q29udGVudCA9ICdub3cnO1xuICAgICAgICAgICAgbmF2LmFwcGVuZENoaWxkKG5vdyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGxhdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBsYXRlci5jbGFzc0xpc3QuYWRkKCdsYXRlcicpO1xuICAgICAgICAgICAgbGF0ZXIuY2xhc3NMaXN0LmFkZCgnbmF2LWJ1dHRvbicpO1xuICAgICAgICAgICAgbGF0ZXIudGV4dENvbnRlbnQgPSAnbGF0ZXInO1xuICAgICAgICAgICAgbmF2LmFwcGVuZENoaWxkKGxhdGVyKTtcblxuICAgICAgICAgICAgY29uc3QgYWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBhbGwuY2xhc3NMaXN0LmFkZCgnYWxsJyk7XG4gICAgICAgICAgICBhbGwuY2xhc3NMaXN0LmFkZCgnbmF2LWJ1dHRvbicpO1xuICAgICAgICAgICAgYWxsLnRleHRDb250ZW50ID0gJ2FsbCc7XG4gICAgICAgICAgICBuYXYuYXBwZW5kQ2hpbGQoYWxsKTtcblxuICAgIC8vIGNyZWF0ZSBtYWluIHRvLWRvIGxpc3QgZGlzcGxheSBzZWN0aW9uOlxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW4pO1xuXG4gICAgLy8gY3JlYXRlIGZvb3RlcjpcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG4gICAgZm9vdGVyLnRleHRDb250ZW50ID0gJ2NvcHlyaWdodCDCqSAyMDIyIHwgc2VhbiBzdGVwaGVuIGJyaWFuJztcbn1cblxuLy8gcmVuZGVycyAnYWRkJyBidXR0b24gd2l0aGluIHRoZSBtYWluIGNvbnRlbnQgc2VjdGlvbjpcbmNvbnN0IHJlbmRlckFkZEJ1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgICBjb25zdCBhZGRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkSXRlbS5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5ZWQtaXRlbScsJ2FkZC1pdGVtLWJ1dHRvbicpO1xuICAgIGNvbnN0IGFkZEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBhZGRJY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgQWRkSWNvbik7XG4gICAgYWRkSXRlbS5hcHBlbmRDaGlsZChhZGRJY29uKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGFkZEl0ZW0pO1xuXG4gICAgLy8gYWRkIGNsaWNrIGxpc3RlbmVyIHRvIGFkZCBidXR0b246XG4gICAgYWRkQWRkTGlzdGVuZXIoKTtcbn1cblxuY29uc3QgcmVuZGVyQWRkRm9ybSA9ICgpID0+IHtcblxuICAgIC8vIGNyZWF0ZSBhZGQgZm9ybSBjb250YWluZXI6XG4gICAgY29uc3QgYWRkRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZEZvcm0uY2xhc3NMaXN0LmFkZCgnZGlzcGxheWVkLWl0ZW0nLCAnYWRkLWZvcm0nKTtcblxuICAgIC8vIGluc2VydCBhZGQgZm9ybSBiZWZvcmUgYWRkIGJ1dHRvbjpcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWl0ZW0tYnV0dG9uJyk7XG4gICAgbWFpbi5pbnNlcnRCZWZvcmUoYWRkRm9ybSwgYWRkQnV0dG9uKTtcblxuICAgIC8vIHJlbW92ZSBhZGQgYnV0dG9uOlxuICAgIGFkZEJ1dHRvbi5yZW1vdmUoKTtcblxuICAgICAgICAvLyBjcmVhdGUgdGhlIGZvcm0gaXRzZWxmOlxuICAgICAgICBjb25zdCBmb3JtSXRzZWxmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICBmb3JtSXRzZWxmLmNsYXNzTGlzdC5hZGQoJ2FkZC1mb3JtLWl0c2VsZicpO1xuICAgICAgICBmb3JtSXRzZWxmLnNldEF0dHJpYnV0ZSgnbWV0aG9kJywgJycpO1xuICAgICAgICBhZGRGb3JtLmFwcGVuZENoaWxkKGZvcm1JdHNlbGYpO1xuXG4gICAgICAgICAgICAvLyBjcmVhdGUgdGhlIGZvcm0gdGl0bGU6XG4gICAgICAgICAgICBjb25zdCBmb3JtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGZvcm1UaXRsZS5jbGFzc0xpc3QuYWRkKCdmb3JtLXRpdGxlJyk7XG4gICAgICAgICAgICBmb3JtSXRzZWxmLmFwcGVuZENoaWxkKGZvcm1UaXRsZSk7XG4gICAgICAgICAgICBjb25zdCBmb3JtVGl0bGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgZm9ybVRpdGxlVGV4dC5jbGFzc0xpc3QuYWRkKCdmb3JtLXRpdGxlLXRleHQnKTtcbiAgICAgICAgICAgIGZvcm1UaXRsZVRleHQudGV4dENvbnRlbnQgPSAnYWRkIGEgbmV3IHRhc2snO1xuICAgICAgICAgICAgZm9ybVRpdGxlLmFwcGVuZENoaWxkKGZvcm1UaXRsZVRleHQpO1xuXG4gICAgICAgICAgICAvLyBjcmVhdGUgYW4gJ1gnIGJ1dHRvbiB0byBjbG9zZSBvdXQgb2YgdGhlIGZvcm06XG4gICAgICAgICAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY2xvc2VCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2xvc2UtYnV0dG9uJyk7XG4gICAgICAgICAgICBmb3JtVGl0bGUuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xuICAgICAgICAgICAgY29uc3QgY2xvc2VJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBjbG9zZUljb24uc2V0QXR0cmlidXRlKCdzcmMnLCBDbG9zZUljb24pO1xuICAgICAgICAgICAgY2xvc2VCdXR0b24uYXBwZW5kQ2hpbGQoY2xvc2VJY29uKTtcblxuICAgICAgICAgICAgLy8gY3JlYXRlIHRoZSBmb3JtIGVsZW1lbnRzOlxuXG4gICAgICAgICAgICAgICAgLy8gdGl0bGUgc2VjdGlvbjpcbiAgICAgICAgICAgICAgICBjb25zdCB0aXRsZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICB0aXRsZVNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnZm9ybS1lbGVtZW50JywgJ3RpdGxlLXNlY3Rpb24nKTtcbiAgICAgICAgICAgICAgICBmb3JtSXRzZWxmLmFwcGVuZENoaWxkKHRpdGxlU2VjdGlvbik7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gdGl0bGUgbGFiZWw6XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgICAgICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RpdGxlJyk7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSAndGl0bGU6JztcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVTZWN0aW9uLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHRpdGxlIGlucHV0OlxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICAgICAgICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGl0bGUtaW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGl0bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RpdGxlJyk7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdleGFtcGxlOiBmZWVkIHRoZSBkb2cnKTtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlU2VjdGlvbi5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcblxuXG4gICAgICAgICAgICAgICAgLy8gZGVzY3JpcHRpb24gc2VjdGlvbjpcbiAgICAgICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvblNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnZm9ybS1lbGVtZW50JywgJ2Rlc2NyaXB0aW9uLXNlY3Rpb24nKTtcbiAgICAgICAgICAgICAgICBmb3JtSXRzZWxmLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uU2VjdGlvbik7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gZGVzY3JpcHRpb24gbGFiZWw6XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSAnZGVzY3JpcHRpb24gKG9wdGlvbmFsKTonO1xuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblNlY3Rpb24uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gZGVzY3JpcHRpb24gaW5wdXQ6XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGVzY3JpcHRpb24taW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZGVzY3JpcHRpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uU2VjdGlvbi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcblxuXG4gICAgICAgICAgICAgICAgLy8gcHJpb3JpdHkgZmllbGRzZXQ6XG4gICAgICAgICAgICAgICAgY29uc3QgZmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpO1xuICAgICAgICAgICAgICAgIGZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LXNlY3Rpb24nKTtcbiAgICAgICAgICAgICAgICBmb3JtSXRzZWxmLmFwcGVuZENoaWxkKGZpZWxkc2V0KTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBwcmlvcml0eSBsYWJlbDpcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eUxhYmVsLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWxhYmVsJyk7XG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAncHJpb3JpdHk6JztcbiAgICAgICAgICAgICAgICAgICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gJ05PVycgcHJpb3JpdHkgcmFkaW8gb3B0aW9uOlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBub3dPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgbm93T3B0aW9uLmNsYXNzTGlzdC5hZGQoJ3JhZGlvLW9wdGlvbicsICdub3ctb3B0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKG5vd09wdGlvbik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5PVyBpbnB1dCAmIGxhYmVsOlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm93SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm93SW5wdXQuY2xhc3NMaXN0LmFkZCgncmFkaW8taW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vd0lucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm93SW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdub3cnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vd0lucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcmlvcml0eScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm93SW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdub3cnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vd09wdGlvbi5hcHBlbmRDaGlsZChub3dJbnB1dCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vd0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vd0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ25vdycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm93TGFiZWwudGV4dENvbnRlbnQgPSAnbm93JztcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vd09wdGlvbi5hcHBlbmRDaGlsZChub3dMYWJlbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gJ0xBVEVSJyBwcmlvcml0eSByYWRpbyBvcHRpb246XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhdGVyT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGxhdGVyT3B0aW9uLmNsYXNzTGlzdC5hZGQoJ3JhZGlvLW9wdGlvbicsICdsYXRlci1vcHRpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobGF0ZXJPcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIExBVEVSIGlucHV0ICYgbGFiZWw6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXRlcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhdGVySW5wdXQuY2xhc3NMaXN0LmFkZCgncmFkaW8taW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhdGVySW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXRlcklucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbGF0ZXInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhdGVySW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3ByaW9yaXR5Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXRlcklucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnbGF0ZXInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhdGVyT3B0aW9uLmFwcGVuZENoaWxkKGxhdGVySW5wdXQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXRlckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhdGVyTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbGF0ZXInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhdGVyTGFiZWwudGV4dENvbnRlbnQgPSAnbGF0ZXInO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF0ZXJPcHRpb24uYXBwZW5kQ2hpbGQobGF0ZXJMYWJlbCk7XG5cbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhIG5ldyAnYWRkJyBidXR0b24gYXQgdGhlIGJvdHRvbSBvZiB0aGUgZm9ybTpcbiAgICAgICAgICAgIGNvbnN0IGZvcm1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGZvcm1CdXR0b24uY2xhc3NMaXN0LmFkZCgnc3VibWl0LWJ1dHRvbicpO1xuICAgICAgICAgICAgZm9ybUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gICAgICAgICAgICBmb3JtSXRzZWxmLmFwcGVuZENoaWxkKGZvcm1CdXR0b24pO1xuICAgICAgICAgICAgY29uc3QgZm9ybUJ1dHRvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIGZvcm1CdXR0b25JY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgQWRkSWNvbik7XG4gICAgICAgICAgICBmb3JtQnV0dG9uLmFwcGVuZENoaWxkKGZvcm1CdXR0b25JY29uKTtcbiAgICBcbiAgICAvLyByZW5kZXIgdGhlIGFkZCBmb3JtIGluIGRhcmsgbW9kZSBpZiBpdCdzIHR1cm5lZCBvbjpcbiAgICBpZiAoZGlzcGxheU1vZGUgPT09ICdkYXJrJykge1xuICAgICAgICBzd2l0Y2hUb0RhcmsoKTtcbiAgICB9XG5cbiAgICBhZGRGb3JtTGlzdGVuZXJzKCk7XG5cbn1cblxuY29uc3Qgc3VibWl0Rm9ybSA9ICgpID0+IHtcblxuICAgIC8vIGdldCBmb3JtIHZhbHVlczpcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZS1pbnB1dCcpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uLWlucHV0Jyk7XG4gICAgbGV0IHByaW9yaXR5O1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm93JykuY2hlY2tlZCkge1xuICAgICAgICBwcmlvcml0eSA9ICdub3cnO1xuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xhdGVyJykuY2hlY2tlZCkge1xuICAgICAgICBwcmlvcml0eSA9ICdsYXRlcic7XG4gICAgfVxuXG4gICAgLy8gYWRkIGEgdG8tZG8gb2JqZWN0IHRvIHRoZSBhcnJheSB1c2luZyB0aGUgZm9ybSB2YWx1ZXM6XG4gICAgY3JlYXRlVG9kbyh0aXRsZS52YWx1ZSwgZGVzY3JpcHRpb24udmFsdWUsIHByaW9yaXR5LCBmYWxzZSk7XG5cbiAgICAvLyByZS1yZW5kZXIgdGhlIGN1cnJlbnQgcGFnZSB2aWV3OlxuICAgIGlmIChjdXJyZW50VmlldyA9ICdub3cnKSB7XG4gICAgICAgIHJlbmRlck5vdygpO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudFZpZXcgPSAnbGF0ZXInKSB7XG4gICAgICAgIHJlbmRlckxhdGVyKCk7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50VmlldyA9ICdhbGwnKSB7XG4gICAgICAgIHJlbmRlckFsbCgpO1xuICAgIH1cbiAgICAvLyBhbmQgc2V0IGl0IHRvIHRoZSBjb3JyZWN0IGRpc3BsYXkgbW9kZTpcbiAgICBpZiAoZGlzcGxheU1vZGUgPT09ICdkYXJrJykge1xuICAgICAgICBzd2l0Y2hUb0RhcmsoKTtcbiAgICB9XG5cbn07XG5cblxuY29uc3Qgc3VibWl0RWRpdEZvcm0gPSAoZSkgPT4ge1xuXG4gICAgY29uc3QgaW5kZXggPSBlLnRhcmdldC5kYXRhc2V0LmlkO1xuICAgIGNvbnNvbGUubG9nKGluZGV4KTtcblxuICAgIC8vIGdldCBmb3JtIHZhbHVlczpcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRpdGxlLWlucHV0Jyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1kZXNjcmlwdGlvbi1pbnB1dCcpO1xuICAgIGxldCBwcmlvcml0eTtcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdycpLmNoZWNrZWQpIHtcbiAgICAgICAgcHJpb3JpdHkgPSAnbm93JztcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYXRlcicpLmNoZWNrZWQpIHtcbiAgICAgICAgcHJpb3JpdHkgPSAnbGF0ZXInO1xuICAgIH1cblxuICAgIGVkaXRUb2RvKGluZGV4LCAndGl0bGUnLCB0aXRsZS52YWx1ZSk7XG4gICAgZWRpdFRvZG8oaW5kZXgsICdkZXNjcmlwdGlvbicsIGRlc2NyaXB0aW9uLnZhbHVlKTtcbiAgICBlZGl0VG9kbyhpbmRleCwgJ3ByaW9yaXR5JywgcHJpb3JpdHkpO1xuXG4gICAgcmVtb3ZlRWRpdEJhY2tkcm9wKCk7XG5cbiAgICAvLyByZS1yZW5kZXIgdGhlIGN1cnJlbnQgcGFnZSB2aWV3OlxuICAgIGlmIChjdXJyZW50VmlldyA9ICdub3cnKSB7XG4gICAgICAgIHJlbmRlck5vdygpO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudFZpZXcgPSAnbGF0ZXInKSB7XG4gICAgICAgIHJlbmRlckxhdGVyKCk7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50VmlldyA9ICdhbGwnKSB7XG4gICAgICAgIHJlbmRlckFsbCgpO1xuICAgIH1cblxuICAgIC8vIGFuZCBzZXQgaXQgdG8gdGhlIGNvcnJlY3QgZGlzcGxheSBtb2RlOlxuICAgIGlmIChkaXNwbGF5TW9kZSA9PT0gJ2RhcmsnKSB7XG4gICAgICAgIHN3aXRjaFRvRGFyaygpO1xuICAgIH1cblxufVxuXG4vLyBjaGFuZ2VzIGJhY2tncm91bmQgY29sb3IgYW5kIG91dGxpbmUgZm9yIHJhZGlvIG9wdGlvbnMgZGVwZW5kaW5nIG9uIHNlbGVjdGlvbjpcbmNvbnN0IHN0eWxlUmFkaW9PcHRpb24gPSAoZSkgPT4ge1xuICAgIC8vIHNlbGVjdCB0aGUgcHJpb3JpdHkgYnV0dG9uIHdlIHdhbnQgdG8gc3R5bGU6XG4gICAgY29uc3Qgc2VsZWN0ZWRJbnB1dCA9IGUudGFyZ2V0O1xuICAgIGNvbnN0IGJ1dHRvblRvU2VsZWN0ID0gc2VsZWN0ZWRJbnB1dC5wYXJlbnRFbGVtZW50O1xuICAgIC8vIGNsZWFyIG91dCBleGlzdGluZyBwcmlvcml0eSBidXR0b24gc2VsZWN0aW9uIHN0eWxpbmc6XG4gICAgY29uc3QgcHJpb3JpdHlCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJhZGlvLW9wdGlvbicpO1xuICAgIHByaW9yaXR5QnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgIGlmIChidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RlZC1wcmlvcml0eScpKSB7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQtcHJpb3JpdHknKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vIGFkZCAnc2VsZWN0ZWQnIGNsYXNzIHRvIHRoZSBidXR0b24gd2Ugd2FudCB0byBzdHlsZTpcbiAgICBidXR0b25Ub1NlbGVjdC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZC1wcmlvcml0eScpO1xufVxuXG4vLyByZW1vdmVzIHRoZSAnYWRkIGEgbmV3IHRhc2snIGZvcm0gZnJvbSBET006XG5jb25zdCByZW1vdmVGb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWZvcm0nKTtcbiAgICBmb3JtLnJlbW92ZSgpO1xuICAgIC8vIHJlcGxhY2UgdGhlICcrJyBidXR0b24gd2hpY2ggd2FzIHByZXZpb3VzbHkgZGVsZXRlZDpcbiAgICByZW5kZXJBZGRCdXR0b24oKTtcbiAgICBpZiAoZGlzcGxheU1vZGUgPT09ICdkYXJrJykge1xuICAgICAgICBzd2l0Y2hUb0RhcmsoKTtcbiAgICB9XG59XG5cbmNvbnN0IHJlbW92ZUVkaXRGb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1mb3JtJyk7XG4gICAgZm9ybS5yZW1vdmUoKTtcbiAgICByZW1vdmVFZGl0QmFja2Ryb3AoKTtcbn1cblxuY29uc3QgcmVtb3ZlRWRpdEJhY2tkcm9wID0gKCkgPT4ge1xuICAgIGNvbnN0IGVkaXRCYWNrZHJvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWJhY2tkcm9wJyk7XG4gICAgZWRpdEJhY2tkcm9wLnJlbW92ZSgpO1xufVxuXG4vLyBhcHBseSBhbiBvdXRsaW5lIHN0eWxlIHRvIHRoZSBzZWxlY3RlZCBkaXNwbGF5J3MgbmF2IGJ1dHRvbjpcbmNvbnN0IG91dGxpbmVOYXZCdXR0b24gPSAocGFnZSkgPT4ge1xuXG4gICAgLy8gY3JlYXRlIHJlZmVyZW5jZSB0byBhbGwgdGhyZWUgbmF2IGJ1dHRvbnM6XG4gICAgY29uc3QgbmF2QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtYnV0dG9uJyk7XG4gICAgLy8gcmVtb3ZlICdzZWxlY3RlZCcgY2xhc3MgZnJvbSBhbnkgYnV0dG9uIHRoYXQgaGFzIGl0OlxuICAgIG5hdkJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICBpZiAoYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSkge1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyB0aGVuIGFkZCB0aGUgJ3NlbGVjdGVkJyBjbGFzcyB0byBvbmx5IHRoZSBjaG9zZW4gcGFnZTpcbiAgICBjb25zdCBjbGlja2VkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7cGFnZX1gKTtcbiAgICBjbGlja2VkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgY29uc3QgYWxsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbCcpO1xuICAgIGlmIChjbGlja2VkQnV0dG9uID09PSBhbGxCdXR0b24pIHtcbiAgICAgICAgY2xpY2tlZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZC1hbGwnKTtcbiAgICB9XG59XG5cbmNvbnN0IHJlbmRlck5vdyA9ICgpID0+IHtcbiAgICAvLyBvdXRsaW5lIHRoZSAnbm93JyBidXR0b246XG4gICAgb3V0bGluZU5hdkJ1dHRvbignbm93Jyk7XG5cbiAgICAvLyBjcmVhdGUgYXJyYXkgb2Ygb25seSBpdGVtcyB3aXRoIGEgJ25vdycgcHJpb3JpdHk6XG4gICAgY29uc3Qgbm93SXRlbXMgPSBnZXROb3coKTtcblxuICAgIHJlbmRlckl0ZW1zKG5vd0l0ZW1zKTtcblxuICAgIHVwZGF0ZUN1cnJlbnRWaWV3KCdub3cnKTtcbn1cblxuY29uc3QgcmVuZGVyTGF0ZXIgPSAoKSA9PiB7XG4gICAgXG4gICAgLy8gb3V0bGluZSB0aGUgJ2xhdGVyJyBidXR0b246XG4gICAgb3V0bGluZU5hdkJ1dHRvbignbGF0ZXInKTtcblxuICAgIC8vIGNyZWF0ZSBhcnJheSBvZiBvbmx5IGl0ZW1zIHdpdGggYSAnbGF0ZXInIHByaW9yaXR5OlxuICAgIGNvbnN0IGxhdGVySXRlbXMgPSBnZXRMYXRlcigpO1xuXG4gICAgcmVuZGVySXRlbXMobGF0ZXJJdGVtcyk7XG5cbiAgICB1cGRhdGVDdXJyZW50VmlldygnbGF0ZXInKTtcbn1cblxuY29uc3QgcmVuZGVyQWxsID0gKCkgPT4ge1xuXG4gICAgLy8gb3V0bGluZSB0aGUgJ2FsbCcgYnV0dG9uOlxuICAgIG91dGxpbmVOYXZCdXR0b24oJ2FsbCcpO1xuXG4gICAgLy8gY3JlYXRlIGFuIGFycmF5IG9mIGFsbCBjdXJyZW50IGl0ZW1zOlxuICAgIGNvbnN0IGFsbEl0ZW1zID0gZ2V0QWxsKCk7XG4gXG4gICAgcmVuZGVySXRlbXMoYWxsSXRlbXMpO1xuXG4gICAgdXBkYXRlQ3VycmVudFZpZXcoJ2FsbCcpO1xufVxuXG5jb25zdCByZW5kZXJJdGVtcyA9IChzZWxlY3RlZEl0ZW1zKSA9PiB7XG5cbiAgICAvLyBjcmVhdGUgcmVmZXJlbmNlIHRvIG1haW4gY29udGVudCBzZWN0aW9uIGFuZCBjdXJyZW50IGNvbXBsZXRlIHRvLWRvIGxpc3Q6XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gICAgY29uc3QgYWxsSXRlbXMgPSBnZXRBbGwoKTtcblxuICAgIC8vIGVtcHR5IG91dCBtYWluIGNvbnRlbnQgc2VjdGlvbjpcbiAgICBtYWluLmlubmVySFRNTCA9ICcnO1xuXG4gICAgLy8gY3JlYXRlIG5ldyA8ZGl2PiBmb3IgZWFjaCBpdGVtOlxuICAgIHNlbGVjdGVkSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgY29uc3QgZGlzcGxheWVkSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXNwbGF5ZWRJdGVtLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXllZC1pdGVtJyk7XG5cbiAgICAgICAgLy8gYWRkIGNsYXNzIGZvciBpdGVtIHByaW9yaXR5OlxuICAgICAgICBpZiAoaXRlbS5wcmlvcml0eSA9PT0gJ25vdycpIHtcbiAgICAgICAgICAgIGRpc3BsYXllZEl0ZW0uY2xhc3NMaXN0LmFkZCgnbm93LWl0ZW0nKTtcbiAgICAgICAgfSBlbHNlIGlmIChpdGVtLnByaW9yaXR5ID09PSAnbGF0ZXInKSB7XG4gICAgICAgICAgICBkaXNwbGF5ZWRJdGVtLmNsYXNzTGlzdC5hZGQoJ2xhdGVyLWl0ZW0nKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2V0IGRhdGFzZXQuaWQgdG8gaXRlbSdzIGluZGV4IGluIHRoZSBtYWluIGFycmF5OlxuICAgICAgICBkaXNwbGF5ZWRJdGVtLmRhdGFzZXQuaWQgPSBhbGxJdGVtcy5pbmRleE9mKGl0ZW0pO1xuXG4gICAgICAgICAgICAvLyBjcmVhdGUgPGRpdj5zIGZvciBjaGVja2JveCBpY29uczpcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcpO1xuXG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgaXRlbSBpcyBjb21wbGV0ZWQgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdG8gaW5zZXJ0IGFuIGVtcHR5IG9yIGNoZWNrZWQgY2hlY2tib3ggc3ZnOlxuICAgICAgICAgICAgICAgIGlmIChpdGVtLmNvbXBsZXRlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGVja2VkQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZENoZWNrYm94LnNldEF0dHJpYnV0ZSgnc3JjJywgQ2hlY2tlZENoZWNrYm94SWNvbik7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrYm94LmFwcGVuZENoaWxkKGNoZWNrZWRDaGVja2JveCk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXllZEl0ZW0uY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkLWl0ZW0nKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0uY29tcGxldGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbXB0eUNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICAgICAgICAgIGVtcHR5Q2hlY2tib3guc2V0QXR0cmlidXRlKCdzcmMnLCBFbXB0eUNoZWNrYm94SWNvbik7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrYm94LmFwcGVuZENoaWxkKGVtcHR5Q2hlY2tib3gpO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5ZWRJdGVtLmNsYXNzTGlzdC5hZGQoJ2luY29tcGxldGUtaXRlbScpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGlzcGxheWVkSXRlbS5hcHBlbmRDaGlsZChjaGVja2JveCk7XG5cbiAgICAgICAgICAgIC8vIGNyZWF0ZSA8ZGl2PnMgZm9yIGl0ZW0gdGl0bGUgdGV4dDpcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGl0ZW0udGl0bGU7XG4gICAgICAgICAgICAvLyBpZiB0aGUgaXRlbSBoYXMgYSBkZXNjcmlwdGlvbiwgbWFrZSB0aGUgdGl0bGUgZXhwYW5kYWJsZTpcbiAgICAgICAgICAgIGlmIChpdGVtLmRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnaXRlbS10aXRsZScsICdleHBhbmRhYmxlLXRpdGxlJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFpdGVtLmRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnaXRlbS10aXRsZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGlzcGxheWVkSXRlbS5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICAgICAgICAgIC8vIGNyZWF0ZSBlZGl0IGljb25zOlxuICAgICAgICAgICAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZWRpdC5jbGFzc0xpc3QuYWRkKCdlZGl0Jyk7XG4gICAgICAgICAgICBjb25zdCBlZGl0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgZWRpdEljb24uc2V0QXR0cmlidXRlKCdzcmMnLCBFZGl0SWNvbik7XG4gICAgICAgICAgICBlZGl0LmFwcGVuZENoaWxkKGVkaXRJY29uKTtcbiAgICAgICAgICAgIGRpc3BsYXllZEl0ZW0uYXBwZW5kQ2hpbGQoZWRpdCk7XG5cbiAgICAgICAgICAgIC8vIGlmIHRoZXJlIGlzIGEgZGVzY3JpcHRpb24sIGNyZWF0ZSBleHBhbmQgaWNvbnM6XG4gICAgICAgICAgICBpZiAoaXRlbS5kZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV4cGFuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGV4cGFuZC5jbGFzc0xpc3QuYWRkKCdleHBhbmQnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBleHBhbmRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICAgICAgZXhwYW5kSWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsIEV4cGFuZEljb24pO1xuICAgICAgICAgICAgICAgIGV4cGFuZC5hcHBlbmRDaGlsZChleHBhbmRJY29uKTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5ZWRJdGVtLmFwcGVuZENoaWxkKGV4cGFuZCk7XG4gICAgICAgICAgICAvLyBpZiB0aGVyZSdzIG5vIGl0ZW0gZGVzY3JpcHRpb24sIGFkZCB0aGUgZGVsZXRlIGljb24gaW5zdGVhZCBvZiB0aGUgZXhwYW5kIGljb246XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFpdGVtLmRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZUljb24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVsZXRlSWNvblN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZUljb25Tdmcuc2V0QXR0cmlidXRlKCdzcmMnLCBEZWxldGVJY29uKTtcbiAgICAgICAgICAgICAgICBkZWxldGVJY29uLmFwcGVuZENoaWxkKGRlbGV0ZUljb25TdmcpO1xuICAgICAgICAgICAgICAgIGRpc3BsYXllZEl0ZW0uYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbik7XG4gICAgICAgICAgICAgICAgYWRkRGVsZXRlTGlzdGVuZXJUb0l0ZW1XaXRob3V0RGVzY3JpcHRpb24oZGVsZXRlSWNvbiwgZGlzcGxheWVkSXRlbS5kYXRhc2V0LmlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuXG4gICAgICAgIC8vIGFkZCBpdGVtIDxkaXY+IHRvIHRoZSBtYWluIGNvbnRlbnQgc2VjdGlvbjpcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChkaXNwbGF5ZWRJdGVtKTtcblxuICAgICAgICAvLyBhZGQgY2xpY2sgbGlzdGVuZXIgdG8gY2hlY2tib3ggb2YgbmV3IGl0ZW0gdXNpbmcgaXRzIGlkOlxuICAgICAgICBhZGRDaGVja2JveExpc3RlbmVyKGRpc3BsYXllZEl0ZW0uZGF0YXNldC5pZCk7XG5cbiAgICAgICAgLy8gYWRkIGNsaWNrIGxpc3RlbmVyIHRvZSBkaXQgaWNvbiBvZiBuZXcgaXRlbSB1c2luZyBpdHMgaWQ6XG4gICAgICAgIGFkZEVkaXRJY29uTGlzdGVuZXIoZGlzcGxheWVkSXRlbS5kYXRhc2V0LmlkKTtcbiAgICB9KTtcblxuICAgIC8vIHJlbmRlciAnYWRkJyBidXR0b24gYXQgdGhlIGJvdHRvbSBvZiB0aGUgY29udGVudCBzZWN0aW9uOlxuICAgIHJlbmRlckFkZEJ1dHRvbigpO1xuXG4gICAgLy8gY2hlY2sgaWYgZGlzcGxheSBtb2RlIGlzIHNldCB0byBkYXJrIGFuZCBzd2l0Y2ggdGhlIHBhZ2Ugc3R5bGUgaWYgbmVjZXNzYXJ5OlxuICAgIGlmIChkaXNwbGF5TW9kZSA9PT0gJ2RhcmsnKSB7XG4gICAgICAgIHN3aXRjaFRvRGFyaygpO1xuICAgIH1cblxuICAgIC8vIGFkZCBjbGljayBsaXN0ZW5lcnMgb24gdGl0bGUgdGV4dCAmIGV4cGFuZCBpY29ucyBvZiBhbGwgcmVuZGVyZWQgaXRlbXM6XG4gICAgYWRkRXhwYW5kTGlzdGVuZXJzKCk7XG5cbn1cblxuY29uc3QgY2hlY2tDaGVja2JveCA9IChjaGVja2JveERpdikgPT4ge1xuICAgIGNvbnN0IGNoZWNrYm94SWNvbiA9IGNoZWNrYm94RGl2LmZpcnN0Q2hpbGQ7XG4gICAgY2hlY2tib3hJY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgQ2hlY2tlZENoZWNrYm94SWNvbik7XG59XG5cbmNvbnN0IHVuY2hlY2tDaGVja2JveCA9IChjaGVja2JveERpdikgPT4ge1xuICAgIGNvbnN0IGNoZWNrYm94SWNvbiA9IGNoZWNrYm94RGl2LmZpcnN0Q2hpbGQ7XG4gICAgY2hlY2tib3hJY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgRW1wdHlDaGVja2JveEljb24pO1xufVxuXG5jb25zdCBzaG93RWRpdFBvcHVwID0gKGUpID0+IHtcbiAgICBjb25zdCBpdGVtVG9FZGl0ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgIGNvbnN0IGluZGV4ID0gaXRlbVRvRWRpdC5kYXRhc2V0LmlkO1xuICAgIHJlbmRlckVkaXRGb3JtKGluZGV4KTtcbiAgICBcbn1cblxuY29uc3QgZXhwYW5kSXRlbSA9IChlKSA9PiB7XG5cbiAgICAvLyBmaXJzdCwgY3JlYXRlIHJlZmVyZW5jZSB0byBjbGlja2VkIGVsZW1lbnQgdG8gaGVscCB1cyBkZXRlcm1pbmUgdGhlIGl0ZW0gdG8gZXhwYW5kOlxuICAgIGNvbnN0IGNsaWNrZWRFbGVtZW50ID0gZS50YXJnZXQ7XG4gICAgbGV0IGl0ZW1Ub0V4cGFuZDtcbiAgICAvLyBpZiB0aGUgdGl0bGUgdGV4dCB3YXMgY2xpY2tlZCwgdGhpcyBpcyB0cnVlIGFuZCB0aGUgcGFyZW50IDxkaXY+IGlzIHRoZSBpdGVtIHdlIHdhbnQgdG8gZXhwYW5kOlxuICAgIGlmIChjbGlja2VkRWxlbWVudC5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnZGlzcGxheWVkLWl0ZW0nKSkge1xuICAgICAgICBpdGVtVG9FeHBhbmQgPSBlLnRhcmdldC5wYXJlbnROb2RlO1xuICAgIC8vIG90aGVyd2lzZSwgdGhlIGV4cGFuZCBpY29uIHN2ZyB3YXMgY2xpY2tlZCBhbmQgd2UgbmVlZCB0byBhc2NlbmQgYW5vdGhlciBsYXllciBpbiB0aGUgRE9NIHRvIGdldCB0aGUgPGRpdj4gb2YgdGhlIGl0ZW0gd2Ugd2FudCB0byBleHBhbmQ6XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaXRlbVRvRXhwYW5kID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIH1cbiAgICBpdGVtVG9FeHBhbmQuY2xhc3NMaXN0LmFkZCgnZXhwYW5kZWQtaXRlbScpO1xuXG4gICAgLy8gc2F2ZSByZWZlcmVuY2UgdG8gaXRlbVRvRXhwYW5kJ3MgZGF0YS1pZDpcbiAgICBjb25zdCBpdGVtSWQgPSBpdGVtVG9FeHBhbmQuZGF0YXNldC5pZDtcblxuICAgIC8vIGdldCByZWZlcmVuY2UgdG8gZXhwYW5kIGljb24sIGFkZCBhIG5ldyBzaHJpbmsgaWNvbiBiZWZvcmUgaXQsIGFuZCBkZWxldGUgdGhlIGV4cGFuZCBpY29uOlxuICAgIGNvbnN0IGV4cGFuZCA9IGl0ZW1Ub0V4cGFuZC5jaGlsZHJlblszXTtcbiAgICBjb25zdCBzaHJpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaHJpbmsuY2xhc3NMaXN0LmFkZCgnc2hyaW5rJyk7XG4gICAgY29uc3Qgc2hyaW5rSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHNocmlua0ljb24uc2V0QXR0cmlidXRlKCdzcmMnLCBTaHJpbmtJY29uKTtcbiAgICBzaHJpbmsuYXBwZW5kQ2hpbGQoc2hyaW5rSWNvbik7XG4gICAgaXRlbVRvRXhwYW5kLmluc2VydEJlZm9yZShzaHJpbmssIGV4cGFuZCk7XG4gICAgZXhwYW5kLnJlbW92ZSgpO1xuXG4gICAgLy8gY3JlYXRlIG5ldyA8ZGl2PiBmb3IgaXRlbSBkZXNjcmlwdGlvbiBhbmQgZ2V0IHRleHQgZnJvbSB0b2RvTGlzdCBhcnJheTpcbiAgICBjb25zdCBpdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnaXRlbS1kZXNjcmlwdGlvbicpO1xuICAgIGl0ZW1EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKGAke2l0ZW1JZH0tZGVzY3JpcHRpb25gKTtcbiAgICBpdGVtRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBnZXREZXNjcmlwdGlvbihpdGVtSWQpO1xuICAgIGl0ZW1Ub0V4cGFuZC5hcHBlbmRDaGlsZChpdGVtRGVzY3JpcHRpb24pO1xuICAgIFxuICAgIC8vIGNyZWF0ZSBuZXcgPGRpdj4gZm9yIGRlbGV0ZSBpY29uIGFuZCBhZGQgZGVsZXRlIHN2ZyBhcyBhIGNoaWxkIDxpbWc+OlxuICAgIGNvbnN0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZWxldGVJY29uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZScpO1xuICAgIGNvbnN0IGRlbGV0ZUljb25TdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBkZWxldGVJY29uU3ZnLnNldEF0dHJpYnV0ZSgnc3JjJywgRGVsZXRlSWNvbik7XG4gICAgZGVsZXRlSWNvbi5hcHBlbmRDaGlsZChkZWxldGVJY29uU3ZnKTtcbiAgICBpdGVtVG9FeHBhbmQuYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbik7XG5cbiAgICByZW1vdmVMaXN0ZW5lcnNGcm9tRXhwYW5kZWRJdGVtKGl0ZW1JZCk7XG5cbiAgICBhZGRMaXN0ZW5lcnNUb0V4cGFuZGVkSXRlbShpdGVtSWQpO1xufVxuXG5jb25zdCBzaHJpbmtJdGVtID0gKGUpID0+IHtcblxuICAgIC8vIHNhbWUgcHJvdG9jb2wgYXMgZXhwYW5kSXRlbSgpOlxuICAgIGNvbnN0IGNsaWNrZWRFbGVtZW50ID0gZS50YXJnZXQ7XG4gICAgbGV0IGl0ZW1Ub1NocmluayA9IGNsaWNrZWRFbGVtZW50LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICBpdGVtVG9TaHJpbmsuY2xhc3NMaXN0LnJlbW92ZSgnZXhwYW5kZWQtaXRlbScpO1xuXG4gICAgLy8gZ2V0IHJlZmVyZW5jZSB0byBzaHJpbmsgaWNvbiwgYWRkIGEgbmV3IGV4cGFuZCBpY29uIGJlZm9yZSBpdCwgdGhlbiBkZWxldGUgdGhlIHNocmluayBpY29uOlxuICAgIGNvbnN0IHNocmluayA9IGl0ZW1Ub1Nocmluay5jaGlsZHJlblszXTtcbiAgICBjb25zdCBleHBhbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBleHBhbmQuY2xhc3NMaXN0LmFkZCgnZXhwYW5kJyk7XG4gICAgY29uc3QgZXhwYW5kSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGV4cGFuZEljb24uc2V0QXR0cmlidXRlKCdzcmMnLCBFeHBhbmRJY29uKTtcbiAgICBleHBhbmQuYXBwZW5kQ2hpbGQoZXhwYW5kSWNvbik7XG4gICAgaXRlbVRvU2hyaW5rLmluc2VydEJlZm9yZShleHBhbmQsIHNocmluayk7XG4gICAgc2hyaW5rLnJlbW92ZSgpO1xuXG4gICAgLy8gc2VsZWN0IGV4cGFuZGVkIGl0ZW0gZGVzY3JpcHRpb24sIHRoZW4gZGVsZXRlIGl0OlxuICAgIGNvbnN0IGl0ZW1EZXNjcmlwdGlvbiA9IGl0ZW1Ub1Nocmluay5jaGlsZHJlbls0XTtcbiAgICBpdGVtRGVzY3JpcHRpb24ucmVtb3ZlKCk7XG5cbiAgICAvLyBzZWxlY3QgZGVsZXRlIGljb24gPGRpdj4sIHRoZW4gZGVsZXRlIGl0OlxuICAgIGNvbnN0IGRlbGV0ZUljb24gPSBpdGVtVG9TaHJpbmsuY2hpbGRyZW5bNF07XG4gICAgZGVsZXRlSWNvbi5yZW1vdmUoKTtcblxuICAgIGNvbnN0IGl0ZW1UaXRsZSA9IGl0ZW1Ub1Nocmluay5jaGlsZHJlblsxXTtcbiAgICByZXBsYWNlRXhwYW5kTGlzdGVuZXIoaXRlbVRpdGxlKTtcblxuICAgIHJlcGxhY2VFeHBhbmRMaXN0ZW5lcihleHBhbmQpO1xuXG59XG5cbmNvbnN0IHN3aXRjaFRvRGFyayA9ICgpID0+IHtcbiAgICBjb25zdCBldmVyeXRoaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKicpO1xuICAgIGV2ZXJ5dGhpbmcuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkYXJrJyk7XG4gICAgfSk7XG4gICAgZGlzcGxheU1vZGUgPSAnZGFyayc7XG59XG5cbmNvbnN0IHN0eWxlRGFya0ljb24gPSAoKSA9PiB7XG4gICAgLy8gY2hlY2sgdGhhdCBkYXJrIG1vZGUgaXMgc2VsZWN0ZWQ6XG4gICAgaWYgKGRpc3BsYXlNb2RlID09PSAnZGFyaycpIHtcbiAgICAgICAgLy8gcmVtb3ZlIHNlbGVjdGlvbiBmcm9tIGxpZ2h0IG1vZGUgaWNvbjpcbiAgICAgICAgY29uc3QgbGlnaHRJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpZ2h0LW1vZGUnKTtcbiAgICAgICAgbGlnaHRJY29uLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkLWRpc3BsYXknKTtcbiAgICAgICAgLy8gbWFyayBkYXJrIG1vZGUgaWNvbiBhcyBzZWxlY3RlZDpcbiAgICAgICAgY29uc3QgZGFya0ljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGFyay1tb2RlJyk7XG4gICAgICAgIGRhcmtJY29uLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkLWRpc3BsYXknKTtcbiAgICB9XG59XG5cbmNvbnN0IHN3aXRjaFRvTGlnaHQgPSAoKSA9PiB7XG4gICAgY29uc3QgZXZlcnl0aGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyonKTtcbiAgICBldmVyeXRoaW5nLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZGFyaycpO1xuICAgIH0pO1xuICAgIGRpc3BsYXlNb2RlID0gJ2xpZ2h0Jztcbn1cblxuY29uc3Qgc3R5bGVMaWdodEljb24gPSAoKSA9PiB7XG4gICAgLy8gY2hlY2sgdGhhdCBsaWdodCBtb2RlIGlzIHNlbGVjdGVkOlxuICAgIGlmIChkaXNwbGF5TW9kZSA9PT0gJ2xpZ2h0Jykge1xuICAgICAgICAvLyByZW1vdmUgc2VsZWN0aW9uIGZyb20gZGFyayBtb2RlIGljb246XG4gICAgICAgIGNvbnN0IGRhcmtJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhcmstbW9kZScpO1xuICAgICAgICBkYXJrSWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZC1kaXNwbGF5Jyk7XG4gICAgICAgIC8vIG1hcmsgbGlnaHQgbW9kZSBpY29uIGFzIHNlbGVjdGVkOlxuICAgICAgICBjb25zdCBsaWdodEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlnaHQtbW9kZScpO1xuICAgICAgICBsaWdodEljb24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQtZGlzcGxheScpO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgXG4gICAgcmVuZGVySGVhZGVyRm9vdGVyLCBcbiAgICByZW5kZXJOb3csIFxuICAgIHJlbmRlckxhdGVyLCBcbiAgICByZW5kZXJBbGwsIFxuICAgIGV4cGFuZEl0ZW0sXG4gICAgc2hyaW5rSXRlbSwgXG4gICAgdXBkYXRlQ3VycmVudFZpZXcsIFxuICAgIGdldEN1cnJlbnRWaWV3LFxuICAgIGNoZWNrQ2hlY2tib3gsXG4gICAgdW5jaGVja0NoZWNrYm94LFxuICAgIHJlbmRlckFkZEZvcm0sXG4gICAgc3R5bGVSYWRpb09wdGlvbixcbiAgICBzdWJtaXRGb3JtLFxuICAgIHN1Ym1pdEVkaXRGb3JtLFxuICAgIHJlbW92ZUZvcm0sXG4gICAgcmVtb3ZlRWRpdEZvcm0sXG4gICAgc3dpdGNoVG9EYXJrLFxuICAgIHN3aXRjaFRvTGlnaHQsXG4gICAgc3R5bGVEYXJrSWNvbixcbiAgICBzdHlsZUxpZ2h0SWNvbixcbiAgICBzaG93RWRpdFBvcHVwLFxuICAgIGRpc3BsYXlNb2RlXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9