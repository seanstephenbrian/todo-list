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
___CSS_LOADER_EXPORT___.push([module.id, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n:root {\n    --rvv: calc(1rem + 1vh + 1vw);\n\n\t--blue: #2E5169;\n    --blue-gray: #5E686D;\n    --brown: #6F5746;\n    --brown-muted: #63584C;\n    --brown-tan: #A58F85;\n    --forest-green: #4D663E;\n    --green-brown: #5F563F;\n    --gray-tan: #C9BBA3;\n    --tan-gray: #D1C9BA;\n    --off-white: #E4D9C5;\n    --orange-yellow: #E1B270;\n    --orange-tan: #CDA885;\n    --red: #AC3A3E;\n    --special-red: #824E4A;\n    --tan: #D2BC9B;\n\n\t--title-footer-color: #ba8e5ede;\n\t--nav-bg: #e4d9c574;\n\t--now-button: #749c5d;\n\t--later-button: #b56c67;\n\t--all-button: #e0a85bc2;\n\t--button-outline: #f0991fd5;\n\t--input-focus-outline: #e5982d;\n\t--input-valid-outline:#4D663E;\n\t--main-bg: #e1cfae97;\n\t--item-bg: #2086ca92;\n\t--now-item-bg: #629c407c;\n\t--later-item-bg: #da8680c1;\n\t--description-bg: #d8f2ff95;\n\t--add-item-button: #ba8d5e85;\n\t--add-form-bg: #f0d7a9de;\n\t--edit-form-bg: #f0d7a9;\n\t--priority-button-default: #c8b5a285;\n\t--form-button: #ba8d5e85;\n\t--form-input-bg: #F3EEE5;\n\t--submit-button-bg: #87b6d5b4;\n\t--close-button: #986f4471;\n\t--display-icon: calc(var(--rvv));\n\n\t--dark-text: #ddd2bf;\n\t--dark-border: #272420;\n\t--dark-title-footer-color: #201c19de;\n\t--dark-nav-bg: #23201cc3;\n\t--dark-now-button: #384a2dda;\n\t--dark-later-button: #8e5652;\n\t--dark-all-button: #d49f539c;\n\t--dark-button-outline: #ee9f32ca;\n\t--dark-input-focus-outline: #ee9f32ca;\n\t--dark-input-valid-outline:#4D663E;\n\t--dark-main-bg: #24211da1;\n\t--dark-item-bg: #123c5892;\n\t--dark-now-item-bg: rgba(46, 80, 28, 0.527);\n\t--dark-later-item-bg: #754743b2;\n\t--dark-add-item-button: #815e3670;\n\t--dark-add-form-bg: #3c3935de;\n\t--dark-priority-button-default: #8b776285;\n\t--dark-form-button: #ba8d5e85;\n\t--dark-form-input-bg: #aba69a;\n\t--dark-submit-button-bg: #668da8b4;\n\t--dark-close-button: #96857385;\n}\n\n@font-face {\n\tfont-family: 'Major Mono';\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n\tfont-family: 'Sublima';\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n@font-face {\n\tfont-family: 'Sublima Bold';\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n\nhtml,\nbody {\n    box-sizing: border-box;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n}\n\nheader {\n\theight: 15vh;\n\tmin-height: calc(3*var(--rvv));\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.title {\n\tmin-height: calc(0.8*var(--rvv));\n\tflex: 1;\n\toverflow-x: hidden;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: calc(0.6*var(--rvv));\n\tbackground-color: var(--title-footer-color);\n\tborder-bottom: 1px solid black;\n}\n\n.title-text {\n\ttext-align: center;\n\tfont-family: 'Sublima';\n\tfont-size: calc(0.45*var(--rvv));\n\tletter-spacing: calc(0.1*var(--rvv));\n\ttext-indent: calc(0.1*var(--rvv));\n}\n\n.light-mode,\n.dark-mode {\n\tcursor: pointer;\n\theight: var(--display-icon);\n\twidth: var(--display-icon);\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.light-mode.dark,\n.dark-mode.dark {\n\tfilter: invert(80%);\n}\n\n.light-mode img,\n.dark-mode img {\n\theight: 80%;\n\twidth: 80%;\n}\n\n.selected-display.light-mode,\n.selected-display.dark-mode {\n\ttransition: 0.25s linear;\n}\n\n.selected-display.light-mode img {\n\tfilter: drop-shadow(0 0 5px var(--red));\n\ttransform: scale(1.2);\n}\n\n.selected-display.dark-mode img {\n\tfilter: drop-shadow(0 0 5px black);\n\ttransform: scale(1.2);\n}\n\n.nav {\n\tflex: 2;\n\tdisplay: flex;\n\tjustify-content: space-around;\n\talign-items: center;\n\tfont-family: 'Major Mono';\n\tbackground-color: var(--nav-bg);\n\tborder-bottom: 1px solid black;\n}\n\n.nav div {\n\tfont-size: calc(0.6*var(--rvv));\n\tcursor: pointer;\n\twidth: calc(3*var(--rvv));\n\theight: calc(var(--rvv));\n\tborder: 1px solid black;\n\tborder-radius: 15%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n}\n\n.now {\n\tbackground-color: var(--now-button);\n}\n\n.now,\n.all {\n\tletter-spacing: calc(0.3*var(--rvv));\n\ttext-indent: calc(0.3*var(--rvv));\n}\n\n.later {\n\tbackground-color: var(--later-button);\n\tletter-spacing: calc(0.1*var(--rvv));\n\ttext-indent: calc(0.1*var(--rvv));\n}\n\n.all {\n\tbackground-color: var(--all-button);\n}\n\n.selected {\n\tbox-shadow: 0 0 0 3px var(--button-outline);\n}\n\n.main {\n\tposition: relative;\n\tflex: auto;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tpadding: calc(0.5*var(--rvv)) 0;\n\tgap: calc(0.6*var(--rvv));\n\tbackground-color: var(--main-bg);\n}\n\n.displayed-item {\n\twidth: 90vw;\n\tmax-width: calc(15*var(--rvv));\n\tposition: relative;\n\tfont-family: 'Sublima';\n\tfont-size: calc(0.6*var(--rvv));\n\tpadding: calc(0.1*var(--rvv)) calc(0.3*var(--rvv));\n\tborder: 1px solid black;\n\tborder-radius: calc(0.8*var(--rvv));\n\tmargin: 0 calc(0.7*var(--rvv));\n\tdisplay: grid;\n\tgrid-template-columns: calc(1.4*var(--rvv)) 1fr calc(var(--rvv)) calc(var(--rvv));\n\tgrid-template-rows: 1fr;\n\tgrid-template-areas: \"checkbox title edit expand\";\n\tbackground-color: var(--item-bg);\n}\n\n.displayed-item.now-item {\n\tbackground-color: var(--now-item-bg);\n}\n\n.displayed-item.later-item {\n\tbackground-color: var(--later-item-bg);\n}\n\n.expanded-item {\n\tdisplay: grid;\n\tgrid-template-columns: calc(1.4*var(--rvv)) 1fr calc(var(--rvv)) calc(var(--rvv));\n\tgrid-template-rows: calc(1.2*var(--rvv)) 1fr;\n\tgrid-template-areas: \n\t\t\"checkbox title edit expand\"\n\t\t\". description . delete\";\n}\n\n.expanded-item .item-description {\n\tmargin-right: calc(0.3*var(--rvv));\n\tmargin-bottom: calc(0.3*var(--rvv));\n}\n\n.expanded-item .item-title {\n\tcursor: auto;\n}\n\n.completed-item {\n\tfilter: grayscale(70%);\n}\n\n.completed-item .item-title {\n\tfont-style: italic;\n\ttext-decoration: underline calc(0.04*var(--rvv)) black;\n\ttext-decoration-skip-ink: none;\n\ttext-underline-offset: calc(-0.2*var(--rvv));\n}\n\n.completed-item .item-description {\n\tfont-style: italic;\n}\n\n.displayed-item.add-item-button {\n\tpadding: 0;\n\tmargin: 0;\n\tcursor: pointer;\n\tbackground-color: var(--add-item-button);\n\theight: calc(1.5*var(--rvv));\n\twidth: calc(1.5*var(--rvv));\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.add-item-button img {\n\tmax-height: 100%;\n\tmax-width: 100%;\n}\n\n.displayed-item.add-form {\n\tdisplay: block;\n\tbackground-color: var(--add-form-bg);\n}\n\n.add-form-itself,\n.edit-form-itself {\n\tdisplay: grid;\n\tgrid-template-rows: calc(1.7*var(--rvv)) calc(var(--rvv)) calc(4*var(--rvv)) calc(var(--rvv)) calc(2.2*var(--rvv));\n\trow-gap: calc(0.25*var(--rvv));\n\tgrid-template-areas:\n\t\t\"form-title\"\n\t\t\"title-section\"\n\t\t\"description-section\"\n\t\t\"priority-section\"\n\t\t\"submit-button\";\n}\n\n.edit-backdrop {\n\tz-index: 2;\n\tposition: fixed;\n\twidth: 100vw;\n\theight: 100vh;\n\tbackdrop-filter: blur(5px);\n\t--webkit-backdrop-filter: blur(5px);\n}\n\n.edit-form-itself {\n\tposition: fixed;\n\tz-index: 3;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n\tbackground-color: var(--edit-form-bg);\n\twidth: 90vw;\n\tmax-width: calc(15*var(--rvv));\n\tposition: relative;\n\tfont-family: 'Sublima';\n\tfont-size: calc(0.6*var(--rvv));\n\tpadding: calc(0.1*var(--rvv)) calc(0.3*var(--rvv));\n\tborder: 1px solid black;\n\tborder-radius: calc(0.8*var(--rvv));\n}\n\n.form-title {\n\tmargin: 0 1%;\n\tmax-width: 90vw;\n\tgrid-area: form-title;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.form-title-text {\n\tfont-size: calc(0.8*var(--rvv));\n}\n\n.form-title-text:hover {\n\tfont-style: italic;\n}\n\n.close-button {\n\tcursor: pointer;\n\tbackground-color: var(--close-button);\n\tmargin-left: auto;\n\tborder: 1px solid black;\n\theight: calc(0.9*var(--rvv));\n\twidth: calc(0.9*var(--rvv));\n\tborder-radius: calc(var(--rvv));\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.close-button img {\n\theight: 100%;\n}\n\n.title-section {\n\tgrid-area: title-section;\n\tdisplay: grid;\n\tgrid-template-columns: calc(3.5*var(--rvv)) 1fr;\n}\n\n.title-section label {\n\tfont-size: calc(0.5*var(--rvv));\n}\n\n.title-section input,\n.description-section textarea {\n\twidth: 93%;\n\tbackground-color: var(--form-input-bg);\n\tborder: 1px solid black;\n\tborder-radius: calc(var(--rvv));\n\tpadding-left: 10px;\n\tfont-family: 'Sublima';\n\tfont-size: calc(0.45*var(--rvv));\n}\n\n.description-section textarea {\n\tborder-radius: calc(0.5*var(--rvv));\n\tresize: none;\n}\n\ninput:focus,\ntextarea:focus {\n\tappearance: none;\n\toutline: none;\n\tbox-shadow: 0 0 0 3px var(--input-focus-outline);\n}\n\ninput:not(:focus),\ntextarea:not(:focus) {\n\tcursor: pointer;\n}\n\n.description-section {\n\tgrid-area: description-section;\n\tdisplay: grid;\n\tgrid-template-columns: calc(3.5*var(--rvv)) 1fr;\n}\n\n.description-section label {\n\tfont-size: calc(0.5*var(--rvv));\n}\n\n.priority-section {\n\tmargin-top: 2px;\n\tgrid-area: priority-section;\n\tdisplay: grid;\n\tgrid-template-columns: calc(3.5*var(--rvv)) 1fr 1fr;\n}\n\n.priority-label {\n\tfont-size: calc(0.5*var(--rvv));\n}\n\n.radio-option {\n\tcursor: pointer;\n\tfont-family: 'Major Mono';\n\twidth: calc(3*var(--rvv));\n\theight: calc(var(--rvv));\n\tborder: 1px solid black;\n\tborder-radius: 15%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n\tbackground-color: var(--priority-button-default);\n}\n\n.radio-option label {\n\tcursor: pointer;\n}\n\n.now-option {\n\tjustify-self: center;\n\tletter-spacing: calc(0.3*var(--rvv));\n\ttext-indent: calc(0.3*var(--rvv));\n}\n\n.now-option.selected-priority {\n\tbackground-color: var(--now-button);\n\tbox-shadow: 0 0 0 3px var(--button-outline);\n}\n\n.later-option {\n\tjustify-self: center;\n\tletter-spacing: calc(0.1*var(--rvv));\n\ttext-indent: calc(0.1*var(--rvv));\n}\n\n.later-option.selected-priority {\n\tbackground-color: var(--later-button);\n\tbox-shadow: 0 0 0 3px var(--button-outline);\n}\n\n.radio-input {\n\tdisplay: none;\n\tpadding: 0;\n\tmargin: 0;\n\tappearance: none;\n}\n\n.submit-button {\n\tcursor: pointer;\n\tgrid-area: submit-button;\n\tfont-family: 'Sublima';\n\tbackground-color: var(--submit-button-bg);\n\talign-self: center;\n\tjustify-self: center;\n\tborder: 1px solid black;\n\theight: calc(1.5*var(--rvv));\n\twidth: 95%;\n\tborder-radius: calc(var(--rvv));\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.submit-button img {\n\theight: 100%;\n}\n\n.displayed-item img {\n\tcursor: pointer;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.checkbox img,\n.expand img {\n\twidth: calc(var(--rvv));\n}\n\n.edit img {\n\twidth: calc(0.8*var(--rvv));\n}\n\n.checkbox {\n\tgrid-area: checkbox;\n\tmargin-left: calc(0.2*var(--rvv));\n}\n\n.item-title {\n\tposition: relative;\n\tbottom: 2px;\n\tgrid-area: title;\n\tjustify-self: start;\n}\n\n.expandable-title {\n\tcursor: pointer;\n}\n\n.edit {\n\tgrid-area: edit;\n}\n\n.expand {\n\tgrid-area: expand;\n}\n\n.shrink {\n\tgrid-area: expand;\n\taspect-ratio: 1 / 1;\n}\n\n.shrink img {\n\theight: calc(var(--rvv));\n}\n\n.item-description {\n\tborder-radius: 3px;\n\tfont-style: italic;\n\tgrid-area: description;\n\talign-self: flex-start;\n\tjustify-self: flex-start;\n\tfont-size: 80%;\n}\n\n.expanded-item .delete {\n\tgrid-area: delete;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: flex-end;\n\tmargin-bottom: calc(0.3*var(--rvv));\n}\n\n.delete img {\n\theight: calc(var(--rvv));\n}\n\nfooter {\n\theight: 5vh;\n\tmin-height: calc(0.8*var(--rvv));\n\tbackground-color: var(--title-footer-color);\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-size: calc(0.5*var(--rvv));\n\tborder-top: 1px solid black;\n\tfont-family: 'Sublima';\n\tfont-size: calc(0.4*var(--rvv));\n\tletter-spacing: calc(0.1*var(--rvv));\n\ttext-indent: calc(0.1*var(--rvv));\n}\n\n/* dark mode styling: */\n\nbody.dark {\n\tcolor: var(--dark-text);\n}\n\n.title.dark {\n\tbackground-color: var(--dark-title-footer-color);\n\tborder-bottom: 1px solid var(--dark-border);\n}\n\n.nav.dark {\n\tbackground-color: var(--dark-nav-bg);\n\tborder-bottom: 1px solid var(--dark-border);\n}\n\n.nav.dark div {\n\tborder: 1px solid var(--dark-border);\n}\n\n.now.dark {\n\tbackground-color: var(--dark-now-button);\n}\n\n.later.dark {\n\tbackground-color: var(--dark-later-button);\n}\n\n.all.dark {\n\tbackground-color: var(--dark-all-button);\n}\n\n.selected.dark {\n\tbox-shadow: 0 0 0 3px var(--dark-button-outline);\n}\n\n.main.dark {\n\tbackground-color: var(--dark-main-bg);\n}\n\n.displayed-item.dark {\n\tborder: 1px solid var(--dark-border);\n\tbackground-color: var(--dark-item-bg);\n}\n\n.displayed-item.now-item.dark {\n\tbackground-color: var(--dark-now-item-bg);\n}\n\n.displayed-item.later-item.dark {\n\tbackground-color: var(--dark-later-item-bg);\n}\n\n.completed-item .item-title.dark {\n\tfilter: brightness(80%);\n\ttext-decoration: underline calc(0.04*var(--rvv)) var(--dark-text);\n\ttext-decoration-skip-ink: none;\n}\n\n.displayed-item.add-form.dark {\n\tbackground-color: var(--dark-add-form-bg);\n}\n\n.edit-form-itself.dark {\n\tbackground-color: var(--dark-add-form-bg);\n}\n\n.close-button.dark {\n\tbackground-color: var(--dark-close-button);\n\tborder: 1px solid var(--dark-border);\n}\n\n.title-section.dark input,\n.description-section.dark textarea {\n\tbackground-color: var(--dark-form-input-bg);\n\tborder: 1px solid var(--dark-border);\n}\n\ninput.dark:focus,\ntextarea.dark:focus {\n\tbox-shadow: 0 0 0 3px var(--dark-input-focus-outline);\n}\n\n.radio-option.dark {\n\tborder: 1px solid var(--dark-border);\n\tbackground-color: var(--dark-priority-button-default);\n}\n\n.now-option.selected-priority.dark {\n\tbackground-color: var(--dark-now-button);\n\tbox-shadow: 0 0 0 3px var(--dark-button-outline);\n}\n\n.later-option.selected-priority.dark {\n\tbackground-color: var(--dark-later-button);\n\tbox-shadow: 0 0 0 3px var(--dark-button-outline);\n}\n\n.displayed-item.add-item-button.dark {\n\tbackground-color: var(--dark-add-item-button);\n}\n\n.submit-button.dark {\n\tbackground-color: var(--dark-submit-button-bg);\n\tborder: 1px solid var(--dark-border);\n}\n\nfooter.dark {\n\tbackground-color: var(--dark-title-footer-color);\n\tborder-top: 1px solid var(--dark-border);\n}\n\n/* desktop version: */\n@media only screen and (min-width: 750px) {\n\n\t.nav div {\n\t\ttransition: 0.075s linear;\n\t}\n\n\t.nav div:hover {\n\t\ttransform: scale(1.05);\n\t}\n\n\t.checkbox,\n\t.edit,\n\t.expand,\n\t.shrink,\n\t.delete,\n\t.add-item-button,\n\t.radio-option,\n\t.submit-button,\n\t.close-button {\n\t\ttransition: 0.075s linear;\n\t}\n\n\t.checkbox:hover {\n\t\ttransform: scale(1.075);\n\t}\n\n\t.edit:hover {\n\t\ttransform: scale(1.1);\n\t}\n\n\t.expand:hover {\n\t\ttransform: scale(1.25);\n\t}\n\n\t.shrink:hover {\n\t\ttransform: scale(1.1);\n\t}\n\n\t.delete:hover {\n\t\ttransform: scale(1.075);\n\t}\n\n\t.add-item-button:hover {\n\t\ttransform: scale(1.05);\n\t}\n\n\t.radio-option:hover {\n\t\ttransform: scale(1.05);\n\t}\n\n\t.submit-button:hover {\n\t\ttransform: scale(1.01);\n\t}\n\n\t.close-button:hover {\n\t\ttransform: scale(1.1);\n\t}\n\n}\n\n@media only screen and (max-width: 750px) {\n\t.completed-item .item-title,\n\t.completed-item .item-title.dark {\n\t\tfont-style: italic;\n\t\ttext-decoration: line-through;\n\t\ttext-decoration-skip-ink: none;\n\t\ttext-underline-offset: 0;\n\t}\n}\n\n@media screen and (orientation: landscape) {\n\tbody {\n\t\tmin-height: 100vh;\n\t\tmin-width: 100vw;\n\t}\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n:root {\n    --rvv: calc(1rem + 1vh + 1vw);\n\n\t--blue: #2E5169;\n    --blue-gray: #5E686D;\n    --brown: #6F5746;\n    --brown-muted: #63584C;\n    --brown-tan: #A58F85;\n    --forest-green: #4D663E;\n    --green-brown: #5F563F;\n    --gray-tan: #C9BBA3;\n    --tan-gray: #D1C9BA;\n    --off-white: #E4D9C5;\n    --orange-yellow: #E1B270;\n    --orange-tan: #CDA885;\n    --red: #AC3A3E;\n    --special-red: #824E4A;\n    --tan: #D2BC9B;\n\n\t--title-footer-color: #ba8e5ede;\n\t--nav-bg: #e4d9c574;\n\t--now-button: #749c5d;\n\t--later-button: #b56c67;\n\t--all-button: #e0a85bc2;\n\t--button-outline: #f0991fd5;\n\t--input-focus-outline: #e5982d;\n\t--input-valid-outline:#4D663E;\n\t--main-bg: #e1cfae97;\n\t--item-bg: #2086ca92;\n\t--now-item-bg: #629c407c;\n\t--later-item-bg: #da8680c1;\n\t--description-bg: #d8f2ff95;\n\t--add-item-button: #ba8d5e85;\n\t--add-form-bg: #f0d7a9de;\n\t--edit-form-bg: #f0d7a9;\n\t--priority-button-default: #c8b5a285;\n\t--form-button: #ba8d5e85;\n\t--form-input-bg: #F3EEE5;\n\t--submit-button-bg: #87b6d5b4;\n\t--close-button: #986f4471;\n\t--display-icon: calc(var(--rvv));\n\n\t--dark-text: #ddd2bf;\n\t--dark-border: #272420;\n\t--dark-title-footer-color: #201c19de;\n\t--dark-nav-bg: #23201cc3;\n\t--dark-now-button: #384a2dda;\n\t--dark-later-button: #8e5652;\n\t--dark-all-button: #d49f539c;\n\t--dark-button-outline: #ee9f32ca;\n\t--dark-input-focus-outline: #ee9f32ca;\n\t--dark-input-valid-outline:#4D663E;\n\t--dark-main-bg: #24211da1;\n\t--dark-item-bg: #123c5892;\n\t--dark-now-item-bg: rgba(46, 80, 28, 0.527);\n\t--dark-later-item-bg: #754743b2;\n\t--dark-add-item-button: #815e3670;\n\t--dark-add-form-bg: #3c3935de;\n\t--dark-priority-button-default: #8b776285;\n\t--dark-form-button: #ba8d5e85;\n\t--dark-form-input-bg: #aba69a;\n\t--dark-submit-button-bg: #668da8b4;\n\t--dark-close-button: #96857385;\n}\n\n@font-face {\n\tfont-family: 'Major Mono';\n\tsrc: url('font/major-mono/major-mono.ttf');\n}\n\n@font-face {\n\tfont-family: 'Sublima';\n\tsrc: url('font/sublima/sublima-light.otf');\n}\n\n@font-face {\n\tfont-family: 'Sublima Bold';\n\tsrc: url('font/sublima/sublima-extra-bold.otf');\n}\n\n\nhtml,\nbody {\n    box-sizing: border-box;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n}\n\nheader {\n\theight: 15vh;\n\tmin-height: calc(3*var(--rvv));\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.title {\n\tmin-height: calc(0.8*var(--rvv));\n\tflex: 1;\n\toverflow-x: hidden;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: calc(0.6*var(--rvv));\n\tbackground-color: var(--title-footer-color);\n\tborder-bottom: 1px solid black;\n}\n\n.title-text {\n\ttext-align: center;\n\tfont-family: 'Sublima';\n\tfont-size: calc(0.45*var(--rvv));\n\tletter-spacing: calc(0.1*var(--rvv));\n\ttext-indent: calc(0.1*var(--rvv));\n}\n\n.light-mode,\n.dark-mode {\n\tcursor: pointer;\n\theight: var(--display-icon);\n\twidth: var(--display-icon);\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.light-mode.dark,\n.dark-mode.dark {\n\tfilter: invert(80%);\n}\n\n.light-mode img,\n.dark-mode img {\n\theight: 80%;\n\twidth: 80%;\n}\n\n.selected-display.light-mode,\n.selected-display.dark-mode {\n\ttransition: 0.25s linear;\n}\n\n.selected-display.light-mode img {\n\tfilter: drop-shadow(0 0 5px var(--red));\n\ttransform: scale(1.2);\n}\n\n.selected-display.dark-mode img {\n\tfilter: drop-shadow(0 0 5px black);\n\ttransform: scale(1.2);\n}\n\n.nav {\n\tflex: 2;\n\tdisplay: flex;\n\tjustify-content: space-around;\n\talign-items: center;\n\tfont-family: 'Major Mono';\n\tbackground-color: var(--nav-bg);\n\tborder-bottom: 1px solid black;\n}\n\n.nav div {\n\tfont-size: calc(0.6*var(--rvv));\n\tcursor: pointer;\n\twidth: calc(3*var(--rvv));\n\theight: calc(var(--rvv));\n\tborder: 1px solid black;\n\tborder-radius: 15%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n}\n\n.now {\n\tbackground-color: var(--now-button);\n}\n\n.now,\n.all {\n\tletter-spacing: calc(0.3*var(--rvv));\n\ttext-indent: calc(0.3*var(--rvv));\n}\n\n.later {\n\tbackground-color: var(--later-button);\n\tletter-spacing: calc(0.1*var(--rvv));\n\ttext-indent: calc(0.1*var(--rvv));\n}\n\n.all {\n\tbackground-color: var(--all-button);\n}\n\n.selected {\n\tbox-shadow: 0 0 0 3px var(--button-outline);\n}\n\n.main {\n\tposition: relative;\n\tflex: auto;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tpadding: calc(0.5*var(--rvv)) 0;\n\tgap: calc(0.6*var(--rvv));\n\tbackground-color: var(--main-bg);\n}\n\n.displayed-item {\n\twidth: 90vw;\n\tmax-width: calc(15*var(--rvv));\n\tposition: relative;\n\tfont-family: 'Sublima';\n\tfont-size: calc(0.6*var(--rvv));\n\tpadding: calc(0.1*var(--rvv)) calc(0.3*var(--rvv));\n\tborder: 1px solid black;\n\tborder-radius: calc(0.8*var(--rvv));\n\tmargin: 0 calc(0.7*var(--rvv));\n\tdisplay: grid;\n\tgrid-template-columns: calc(1.4*var(--rvv)) 1fr calc(var(--rvv)) calc(var(--rvv));\n\tgrid-template-rows: 1fr;\n\tgrid-template-areas: \"checkbox title edit expand\";\n\tbackground-color: var(--item-bg);\n}\n\n.displayed-item.now-item {\n\tbackground-color: var(--now-item-bg);\n}\n\n.displayed-item.later-item {\n\tbackground-color: var(--later-item-bg);\n}\n\n.expanded-item {\n\tdisplay: grid;\n\tgrid-template-columns: calc(1.4*var(--rvv)) 1fr calc(var(--rvv)) calc(var(--rvv));\n\tgrid-template-rows: calc(1.2*var(--rvv)) 1fr;\n\tgrid-template-areas: \n\t\t\"checkbox title edit expand\"\n\t\t\". description . delete\";\n}\n\n.expanded-item .item-description {\n\tmargin-right: calc(0.3*var(--rvv));\n\tmargin-bottom: calc(0.3*var(--rvv));\n}\n\n.expanded-item .item-title {\n\tcursor: auto;\n}\n\n.completed-item {\n\tfilter: grayscale(70%);\n}\n\n.completed-item .item-title {\n\tfont-style: italic;\n\ttext-decoration: underline calc(0.04*var(--rvv)) black;\n\ttext-decoration-skip-ink: none;\n\ttext-underline-offset: calc(-0.2*var(--rvv));\n}\n\n.completed-item .item-description {\n\tfont-style: italic;\n}\n\n.displayed-item.add-item-button {\n\tpadding: 0;\n\tmargin: 0;\n\tcursor: pointer;\n\tbackground-color: var(--add-item-button);\n\theight: calc(1.5*var(--rvv));\n\twidth: calc(1.5*var(--rvv));\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.add-item-button img {\n\tmax-height: 100%;\n\tmax-width: 100%;\n}\n\n.displayed-item.add-form {\n\tdisplay: block;\n\tbackground-color: var(--add-form-bg);\n}\n\n.add-form-itself,\n.edit-form-itself {\n\tdisplay: grid;\n\tgrid-template-rows: calc(1.7*var(--rvv)) calc(var(--rvv)) calc(4*var(--rvv)) calc(var(--rvv)) calc(2.2*var(--rvv));\n\trow-gap: calc(0.25*var(--rvv));\n\tgrid-template-areas:\n\t\t\"form-title\"\n\t\t\"title-section\"\n\t\t\"description-section\"\n\t\t\"priority-section\"\n\t\t\"submit-button\";\n}\n\n.edit-backdrop {\n\tz-index: 2;\n\tposition: fixed;\n\twidth: 100vw;\n\theight: 100vh;\n\tbackdrop-filter: blur(5px);\n\t--webkit-backdrop-filter: blur(5px);\n}\n\n.edit-form-itself {\n\tposition: fixed;\n\tz-index: 3;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n\tbackground-color: var(--edit-form-bg);\n\twidth: 90vw;\n\tmax-width: calc(15*var(--rvv));\n\tposition: relative;\n\tfont-family: 'Sublima';\n\tfont-size: calc(0.6*var(--rvv));\n\tpadding: calc(0.1*var(--rvv)) calc(0.3*var(--rvv));\n\tborder: 1px solid black;\n\tborder-radius: calc(0.8*var(--rvv));\n}\n\n.form-title {\n\tmargin: 0 1%;\n\tmax-width: 90vw;\n\tgrid-area: form-title;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.form-title-text {\n\tfont-size: calc(0.8*var(--rvv));\n}\n\n.form-title-text:hover {\n\tfont-style: italic;\n}\n\n.close-button {\n\tcursor: pointer;\n\tbackground-color: var(--close-button);\n\tmargin-left: auto;\n\tborder: 1px solid black;\n\theight: calc(0.9*var(--rvv));\n\twidth: calc(0.9*var(--rvv));\n\tborder-radius: calc(var(--rvv));\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.close-button img {\n\theight: 100%;\n}\n\n.title-section {\n\tgrid-area: title-section;\n\tdisplay: grid;\n\tgrid-template-columns: calc(3.5*var(--rvv)) 1fr;\n}\n\n.title-section label {\n\tfont-size: calc(0.5*var(--rvv));\n}\n\n.title-section input,\n.description-section textarea {\n\twidth: 93%;\n\tbackground-color: var(--form-input-bg);\n\tborder: 1px solid black;\n\tborder-radius: calc(var(--rvv));\n\tpadding-left: 10px;\n\tfont-family: 'Sublima';\n\tfont-size: calc(0.45*var(--rvv));\n}\n\n.description-section textarea {\n\tborder-radius: calc(0.5*var(--rvv));\n\tresize: none;\n}\n\ninput:focus,\ntextarea:focus {\n\tappearance: none;\n\toutline: none;\n\tbox-shadow: 0 0 0 3px var(--input-focus-outline);\n}\n\ninput:not(:focus),\ntextarea:not(:focus) {\n\tcursor: pointer;\n}\n\n.description-section {\n\tgrid-area: description-section;\n\tdisplay: grid;\n\tgrid-template-columns: calc(3.5*var(--rvv)) 1fr;\n}\n\n.description-section label {\n\tfont-size: calc(0.5*var(--rvv));\n}\n\n.priority-section {\n\tmargin-top: 2px;\n\tgrid-area: priority-section;\n\tdisplay: grid;\n\tgrid-template-columns: calc(3.5*var(--rvv)) 1fr 1fr;\n}\n\n.priority-label {\n\tfont-size: calc(0.5*var(--rvv));\n}\n\n.radio-option {\n\tcursor: pointer;\n\tfont-family: 'Major Mono';\n\twidth: calc(3*var(--rvv));\n\theight: calc(var(--rvv));\n\tborder: 1px solid black;\n\tborder-radius: 15%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n\tbackground-color: var(--priority-button-default);\n}\n\n.radio-option label {\n\tcursor: pointer;\n}\n\n.now-option {\n\tjustify-self: center;\n\tletter-spacing: calc(0.3*var(--rvv));\n\ttext-indent: calc(0.3*var(--rvv));\n}\n\n.now-option.selected-priority {\n\tbackground-color: var(--now-button);\n\tbox-shadow: 0 0 0 3px var(--button-outline);\n}\n\n.later-option {\n\tjustify-self: center;\n\tletter-spacing: calc(0.1*var(--rvv));\n\ttext-indent: calc(0.1*var(--rvv));\n}\n\n.later-option.selected-priority {\n\tbackground-color: var(--later-button);\n\tbox-shadow: 0 0 0 3px var(--button-outline);\n}\n\n.radio-input {\n\tdisplay: none;\n\tpadding: 0;\n\tmargin: 0;\n\tappearance: none;\n}\n\n.submit-button {\n\tcursor: pointer;\n\tgrid-area: submit-button;\n\tfont-family: 'Sublima';\n\tbackground-color: var(--submit-button-bg);\n\talign-self: center;\n\tjustify-self: center;\n\tborder: 1px solid black;\n\theight: calc(1.5*var(--rvv));\n\twidth: 95%;\n\tborder-radius: calc(var(--rvv));\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.submit-button img {\n\theight: 100%;\n}\n\n.displayed-item img {\n\tcursor: pointer;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.checkbox img,\n.expand img {\n\twidth: calc(var(--rvv));\n}\n\n.edit img {\n\twidth: calc(0.8*var(--rvv));\n}\n\n.checkbox {\n\tgrid-area: checkbox;\n\tmargin-left: calc(0.2*var(--rvv));\n}\n\n.item-title {\n\tposition: relative;\n\tbottom: 2px;\n\tgrid-area: title;\n\tjustify-self: start;\n}\n\n.expandable-title {\n\tcursor: pointer;\n}\n\n.edit {\n\tgrid-area: edit;\n}\n\n.expand {\n\tgrid-area: expand;\n}\n\n.shrink {\n\tgrid-area: expand;\n\taspect-ratio: 1 / 1;\n}\n\n.shrink img {\n\theight: calc(var(--rvv));\n}\n\n.item-description {\n\tborder-radius: 3px;\n\tfont-style: italic;\n\tgrid-area: description;\n\talign-self: flex-start;\n\tjustify-self: flex-start;\n\tfont-size: 80%;\n}\n\n.expanded-item .delete {\n\tgrid-area: delete;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: flex-end;\n\tmargin-bottom: calc(0.3*var(--rvv));\n}\n\n.delete img {\n\theight: calc(var(--rvv));\n}\n\nfooter {\n\theight: 5vh;\n\tmin-height: calc(0.8*var(--rvv));\n\tbackground-color: var(--title-footer-color);\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-size: calc(0.5*var(--rvv));\n\tborder-top: 1px solid black;\n\tfont-family: 'Sublima';\n\tfont-size: calc(0.4*var(--rvv));\n\tletter-spacing: calc(0.1*var(--rvv));\n\ttext-indent: calc(0.1*var(--rvv));\n}\n\n/* dark mode styling: */\n\nbody.dark {\n\tcolor: var(--dark-text);\n}\n\n.title.dark {\n\tbackground-color: var(--dark-title-footer-color);\n\tborder-bottom: 1px solid var(--dark-border);\n}\n\n.nav.dark {\n\tbackground-color: var(--dark-nav-bg);\n\tborder-bottom: 1px solid var(--dark-border);\n}\n\n.nav.dark div {\n\tborder: 1px solid var(--dark-border);\n}\n\n.now.dark {\n\tbackground-color: var(--dark-now-button);\n}\n\n.later.dark {\n\tbackground-color: var(--dark-later-button);\n}\n\n.all.dark {\n\tbackground-color: var(--dark-all-button);\n}\n\n.selected.dark {\n\tbox-shadow: 0 0 0 3px var(--dark-button-outline);\n}\n\n.main.dark {\n\tbackground-color: var(--dark-main-bg);\n}\n\n.displayed-item.dark {\n\tborder: 1px solid var(--dark-border);\n\tbackground-color: var(--dark-item-bg);\n}\n\n.displayed-item.now-item.dark {\n\tbackground-color: var(--dark-now-item-bg);\n}\n\n.displayed-item.later-item.dark {\n\tbackground-color: var(--dark-later-item-bg);\n}\n\n.completed-item .item-title.dark {\n\tfilter: brightness(80%);\n\ttext-decoration: underline calc(0.04*var(--rvv)) var(--dark-text);\n\ttext-decoration-skip-ink: none;\n}\n\n.displayed-item.add-form.dark {\n\tbackground-color: var(--dark-add-form-bg);\n}\n\n.edit-form-itself.dark {\n\tbackground-color: var(--dark-add-form-bg);\n}\n\n.close-button.dark {\n\tbackground-color: var(--dark-close-button);\n\tborder: 1px solid var(--dark-border);\n}\n\n.title-section.dark input,\n.description-section.dark textarea {\n\tbackground-color: var(--dark-form-input-bg);\n\tborder: 1px solid var(--dark-border);\n}\n\ninput.dark:focus,\ntextarea.dark:focus {\n\tbox-shadow: 0 0 0 3px var(--dark-input-focus-outline);\n}\n\n.radio-option.dark {\n\tborder: 1px solid var(--dark-border);\n\tbackground-color: var(--dark-priority-button-default);\n}\n\n.now-option.selected-priority.dark {\n\tbackground-color: var(--dark-now-button);\n\tbox-shadow: 0 0 0 3px var(--dark-button-outline);\n}\n\n.later-option.selected-priority.dark {\n\tbackground-color: var(--dark-later-button);\n\tbox-shadow: 0 0 0 3px var(--dark-button-outline);\n}\n\n.displayed-item.add-item-button.dark {\n\tbackground-color: var(--dark-add-item-button);\n}\n\n.submit-button.dark {\n\tbackground-color: var(--dark-submit-button-bg);\n\tborder: 1px solid var(--dark-border);\n}\n\nfooter.dark {\n\tbackground-color: var(--dark-title-footer-color);\n\tborder-top: 1px solid var(--dark-border);\n}\n\n/* desktop version: */\n@media only screen and (min-width: 750px) {\n\n\t.nav div {\n\t\ttransition: 0.075s linear;\n\t}\n\n\t.nav div:hover {\n\t\ttransform: scale(1.05);\n\t}\n\n\t.checkbox,\n\t.edit,\n\t.expand,\n\t.shrink,\n\t.delete,\n\t.add-item-button,\n\t.radio-option,\n\t.submit-button,\n\t.close-button {\n\t\ttransition: 0.075s linear;\n\t}\n\n\t.checkbox:hover {\n\t\ttransform: scale(1.075);\n\t}\n\n\t.edit:hover {\n\t\ttransform: scale(1.1);\n\t}\n\n\t.expand:hover {\n\t\ttransform: scale(1.25);\n\t}\n\n\t.shrink:hover {\n\t\ttransform: scale(1.1);\n\t}\n\n\t.delete:hover {\n\t\ttransform: scale(1.075);\n\t}\n\n\t.add-item-button:hover {\n\t\ttransform: scale(1.05);\n\t}\n\n\t.radio-option:hover {\n\t\ttransform: scale(1.05);\n\t}\n\n\t.submit-button:hover {\n\t\ttransform: scale(1.01);\n\t}\n\n\t.close-button:hover {\n\t\ttransform: scale(1.1);\n\t}\n\n}\n\n@media only screen and (max-width: 750px) {\n\t.completed-item .item-title,\n\t.completed-item .item-title.dark {\n\t\tfont-style: italic;\n\t\ttext-decoration: line-through;\n\t\ttext-decoration-skip-ink: none;\n\t\ttext-underline-offset: 0;\n\t}\n}\n\n@media screen and (orientation: landscape) {\n\tbody {\n\t\tmin-height: 100vh;\n\t\tmin-width: 100vw;\n\t}\n}"],"sourceRoot":""}]);
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
        (0,_page_js__WEBPACK_IMPORTED_MODULE_3__.switchToDark)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFFBQVEsTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxPQUFPLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsVUFBVSxPQUFPLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLGFBQWEsTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxP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Q0k7QUFDQTtBQUNGO0FBQ0U7QUFDRjs7QUFFdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLDhDQUFPO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLDRDQUFTO0FBQ25EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QywyQ0FBUTtBQUNqRDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyx5Q0FBTztBQUN2QztBQUNBOztBQUVBO0FBQ0EsSUFBSSwwREFBYztBQUNsQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQywyQ0FBUztBQUNuRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MseUNBQU87QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksNERBQWdCOztBQUVwQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBLElBQUksb0RBQVU7O0FBRWQ7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQSxJQUFJLGtEQUFRO0FBQ1osSUFBSSxrREFBUTtBQUNaLElBQUksa0RBQVE7O0FBRVo7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EscURBQXFELEtBQUs7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixnREFBTTs7QUFFM0I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QixrREFBUTs7QUFFL0I7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLGdEQUFNO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLGdEQUFNOztBQUUzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxzREFBbUI7QUFDM0U7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBLHNEQUFzRCxvREFBaUI7QUFDdkU7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsMkNBQVE7QUFDakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLDRDQUFVO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsNENBQVU7QUFDNUQ7QUFDQTtBQUNBLGdCQUFnQixxRkFBeUM7QUFDekQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSwrREFBbUI7O0FBRTNCO0FBQ0EsUUFBUSwrREFBbUI7QUFDM0IsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSw4REFBa0I7O0FBRXRCOztBQUVBO0FBQ0E7QUFDQSxxQ0FBcUMsc0RBQW1CO0FBQ3hEOztBQUVBO0FBQ0E7QUFDQSxxQ0FBcUMsb0RBQWlCO0FBQ3REOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksd0RBQWM7QUFDbEI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDRDQUFVO0FBQzdDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsT0FBTztBQUM1QyxrQ0FBa0Msd0RBQWM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLDRDQUFVO0FBQ2hEO0FBQ0E7O0FBRUEsSUFBSSwyRUFBK0I7O0FBRW5DLElBQUksc0VBQTBCO0FBQzlCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsNENBQVU7QUFDN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLGlFQUFxQjs7QUFFekIsSUFBSSxpRUFBcUI7O0FBRXpCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvYm9keS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvZWRpdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL2xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL2xpc3Rlbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvcGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiZm9udC9tYWpvci1tb25vL21ham9yLW1vbm8udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiZm9udC9zdWJsaW1hL3N1YmxpbWEtbGlnaHQub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiZm9udC9zdWJsaW1hL3N1YmxpbWEtZXh0cmEtYm9sZC5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLXJ2djogY2FsYygxcmVtICsgMXZoICsgMXZ3KTtcXG5cXG5cXHQtLWJsdWU6ICMyRTUxNjk7XFxuICAgIC0tYmx1ZS1ncmF5OiAjNUU2ODZEO1xcbiAgICAtLWJyb3duOiAjNkY1NzQ2O1xcbiAgICAtLWJyb3duLW11dGVkOiAjNjM1ODRDO1xcbiAgICAtLWJyb3duLXRhbjogI0E1OEY4NTtcXG4gICAgLS1mb3Jlc3QtZ3JlZW46ICM0RDY2M0U7XFxuICAgIC0tZ3JlZW4tYnJvd246ICM1RjU2M0Y7XFxuICAgIC0tZ3JheS10YW46ICNDOUJCQTM7XFxuICAgIC0tdGFuLWdyYXk6ICNEMUM5QkE7XFxuICAgIC0tb2ZmLXdoaXRlOiAjRTREOUM1O1xcbiAgICAtLW9yYW5nZS15ZWxsb3c6ICNFMUIyNzA7XFxuICAgIC0tb3JhbmdlLXRhbjogI0NEQTg4NTtcXG4gICAgLS1yZWQ6ICNBQzNBM0U7XFxuICAgIC0tc3BlY2lhbC1yZWQ6ICM4MjRFNEE7XFxuICAgIC0tdGFuOiAjRDJCQzlCO1xcblxcblxcdC0tdGl0bGUtZm9vdGVyLWNvbG9yOiAjYmE4ZTVlZGU7XFxuXFx0LS1uYXYtYmc6ICNlNGQ5YzU3NDtcXG5cXHQtLW5vdy1idXR0b246ICM3NDljNWQ7XFxuXFx0LS1sYXRlci1idXR0b246ICNiNTZjNjc7XFxuXFx0LS1hbGwtYnV0dG9uOiAjZTBhODViYzI7XFxuXFx0LS1idXR0b24tb3V0bGluZTogI2YwOTkxZmQ1O1xcblxcdC0taW5wdXQtZm9jdXMtb3V0bGluZTogI2U1OTgyZDtcXG5cXHQtLWlucHV0LXZhbGlkLW91dGxpbmU6IzRENjYzRTtcXG5cXHQtLW1haW4tYmc6ICNlMWNmYWU5NztcXG5cXHQtLWl0ZW0tYmc6ICMyMDg2Y2E5MjtcXG5cXHQtLW5vdy1pdGVtLWJnOiAjNjI5YzQwN2M7XFxuXFx0LS1sYXRlci1pdGVtLWJnOiAjZGE4NjgwYzE7XFxuXFx0LS1kZXNjcmlwdGlvbi1iZzogI2Q4ZjJmZjk1O1xcblxcdC0tYWRkLWl0ZW0tYnV0dG9uOiAjYmE4ZDVlODU7XFxuXFx0LS1hZGQtZm9ybS1iZzogI2YwZDdhOWRlO1xcblxcdC0tZWRpdC1mb3JtLWJnOiAjZjBkN2E5O1xcblxcdC0tcHJpb3JpdHktYnV0dG9uLWRlZmF1bHQ6ICNjOGI1YTI4NTtcXG5cXHQtLWZvcm0tYnV0dG9uOiAjYmE4ZDVlODU7XFxuXFx0LS1mb3JtLWlucHV0LWJnOiAjRjNFRUU1O1xcblxcdC0tc3VibWl0LWJ1dHRvbi1iZzogIzg3YjZkNWI0O1xcblxcdC0tY2xvc2UtYnV0dG9uOiAjOTg2ZjQ0NzE7XFxuXFx0LS1kaXNwbGF5LWljb246IGNhbGModmFyKC0tcnZ2KSk7XFxuXFxuXFx0LS1kYXJrLXRleHQ6ICNkZGQyYmY7XFxuXFx0LS1kYXJrLWJvcmRlcjogIzI3MjQyMDtcXG5cXHQtLWRhcmstdGl0bGUtZm9vdGVyLWNvbG9yOiAjMjAxYzE5ZGU7XFxuXFx0LS1kYXJrLW5hdi1iZzogIzIzMjAxY2MzO1xcblxcdC0tZGFyay1ub3ctYnV0dG9uOiAjMzg0YTJkZGE7XFxuXFx0LS1kYXJrLWxhdGVyLWJ1dHRvbjogIzhlNTY1MjtcXG5cXHQtLWRhcmstYWxsLWJ1dHRvbjogI2Q0OWY1MzljO1xcblxcdC0tZGFyay1idXR0b24tb3V0bGluZTogI2VlOWYzMmNhO1xcblxcdC0tZGFyay1pbnB1dC1mb2N1cy1vdXRsaW5lOiAjZWU5ZjMyY2E7XFxuXFx0LS1kYXJrLWlucHV0LXZhbGlkLW91dGxpbmU6IzRENjYzRTtcXG5cXHQtLWRhcmstbWFpbi1iZzogIzI0MjExZGExO1xcblxcdC0tZGFyay1pdGVtLWJnOiAjMTIzYzU4OTI7XFxuXFx0LS1kYXJrLW5vdy1pdGVtLWJnOiByZ2JhKDQ2LCA4MCwgMjgsIDAuNTI3KTtcXG5cXHQtLWRhcmstbGF0ZXItaXRlbS1iZzogIzc1NDc0M2IyO1xcblxcdC0tZGFyay1hZGQtaXRlbS1idXR0b246ICM4MTVlMzY3MDtcXG5cXHQtLWRhcmstYWRkLWZvcm0tYmc6ICMzYzM5MzVkZTtcXG5cXHQtLWRhcmstcHJpb3JpdHktYnV0dG9uLWRlZmF1bHQ6ICM4Yjc3NjI4NTtcXG5cXHQtLWRhcmstZm9ybS1idXR0b246ICNiYThkNWU4NTtcXG5cXHQtLWRhcmstZm9ybS1pbnB1dC1iZzogI2FiYTY5YTtcXG5cXHQtLWRhcmstc3VibWl0LWJ1dHRvbi1iZzogIzY2OGRhOGI0O1xcblxcdC0tZGFyay1jbG9zZS1idXR0b246ICM5Njg1NzM4NTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6ICdNYWpvciBNb25vJztcXG5cXHRzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcblxcdGZvbnQtZmFtaWx5OiAnU3VibGltYSc7XFxuXFx0c3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogJ1N1YmxpbWEgQm9sZCc7XFxuXFx0c3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbn1cXG5cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuaGVhZGVyIHtcXG5cXHRoZWlnaHQ6IDE1dmg7XFxuXFx0bWluLWhlaWdodDogY2FsYygzKnZhcigtLXJ2dikpO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRpdGxlIHtcXG5cXHRtaW4taGVpZ2h0OiBjYWxjKDAuOCp2YXIoLS1ydnYpKTtcXG5cXHRmbGV4OiAxO1xcblxcdG92ZXJmbG93LXg6IGhpZGRlbjtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiBjYWxjKDAuNip2YXIoLS1ydnYpKTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aXRsZS1mb290ZXItY29sb3IpO1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnRpdGxlLXRleHQge1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRmb250LWZhbWlseTogJ1N1YmxpbWEnO1xcblxcdGZvbnQtc2l6ZTogY2FsYygwLjQ1KnZhcigtLXJ2dikpO1xcblxcdGxldHRlci1zcGFjaW5nOiBjYWxjKDAuMSp2YXIoLS1ydnYpKTtcXG5cXHR0ZXh0LWluZGVudDogY2FsYygwLjEqdmFyKC0tcnZ2KSk7XFxufVxcblxcbi5saWdodC1tb2RlLFxcbi5kYXJrLW1vZGUge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRoZWlnaHQ6IHZhcigtLWRpc3BsYXktaWNvbik7XFxuXFx0d2lkdGg6IHZhcigtLWRpc3BsYXktaWNvbik7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubGlnaHQtbW9kZS5kYXJrLFxcbi5kYXJrLW1vZGUuZGFyayB7XFxuXFx0ZmlsdGVyOiBpbnZlcnQoODAlKTtcXG59XFxuXFxuLmxpZ2h0LW1vZGUgaW1nLFxcbi5kYXJrLW1vZGUgaW1nIHtcXG5cXHRoZWlnaHQ6IDgwJTtcXG5cXHR3aWR0aDogODAlO1xcbn1cXG5cXG4uc2VsZWN0ZWQtZGlzcGxheS5saWdodC1tb2RlLFxcbi5zZWxlY3RlZC1kaXNwbGF5LmRhcmstbW9kZSB7XFxuXFx0dHJhbnNpdGlvbjogMC4yNXMgbGluZWFyO1xcbn1cXG5cXG4uc2VsZWN0ZWQtZGlzcGxheS5saWdodC1tb2RlIGltZyB7XFxuXFx0ZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgNXB4IHZhcigtLXJlZCkpO1xcblxcdHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuXFxuLnNlbGVjdGVkLWRpc3BsYXkuZGFyay1tb2RlIGltZyB7XFxuXFx0ZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgNXB4IGJsYWNrKTtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbi5uYXYge1xcblxcdGZsZXg6IDI7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGZvbnQtZmFtaWx5OiAnTWFqb3IgTW9ubyc7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWJnKTtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5uYXYgZGl2IHtcXG5cXHRmb250LXNpemU6IGNhbGMoMC42KnZhcigtLXJ2dikpO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHR3aWR0aDogY2FsYygzKnZhcigtLXJ2dikpO1xcblxcdGhlaWdodDogY2FsYyh2YXIoLS1ydnYpKTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG5cXHRib3JkZXItcmFkaXVzOiAxNSU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm5vdyB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbm93LWJ1dHRvbik7XFxufVxcblxcbi5ub3csXFxuLmFsbCB7XFxuXFx0bGV0dGVyLXNwYWNpbmc6IGNhbGMoMC4zKnZhcigtLXJ2dikpO1xcblxcdHRleHQtaW5kZW50OiBjYWxjKDAuMyp2YXIoLS1ydnYpKTtcXG59XFxuXFxuLmxhdGVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sYXRlci1idXR0b24pO1xcblxcdGxldHRlci1zcGFjaW5nOiBjYWxjKDAuMSp2YXIoLS1ydnYpKTtcXG5cXHR0ZXh0LWluZGVudDogY2FsYygwLjEqdmFyKC0tcnZ2KSk7XFxufVxcblxcbi5hbGwge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFsbC1idXR0b24pO1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcblxcdGJveC1zaGFkb3c6IDAgMCAwIDNweCB2YXIoLS1idXR0b24tb3V0bGluZSk7XFxufVxcblxcbi5tYWluIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0ZmxleDogYXV0bztcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRwYWRkaW5nOiBjYWxjKDAuNSp2YXIoLS1ydnYpKSAwO1xcblxcdGdhcDogY2FsYygwLjYqdmFyKC0tcnZ2KSk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZyk7XFxufVxcblxcbi5kaXNwbGF5ZWQtaXRlbSB7XFxuXFx0d2lkdGg6IDkwdnc7XFxuXFx0bWF4LXdpZHRoOiBjYWxjKDE1KnZhcigtLXJ2dikpO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRmb250LWZhbWlseTogJ1N1YmxpbWEnO1xcblxcdGZvbnQtc2l6ZTogY2FsYygwLjYqdmFyKC0tcnZ2KSk7XFxuXFx0cGFkZGluZzogY2FsYygwLjEqdmFyKC0tcnZ2KSkgY2FsYygwLjMqdmFyKC0tcnZ2KSk7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuXFx0Ym9yZGVyLXJhZGl1czogY2FsYygwLjgqdmFyKC0tcnZ2KSk7XFxuXFx0bWFyZ2luOiAwIGNhbGMoMC43KnZhcigtLXJ2dikpO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBjYWxjKDEuNCp2YXIoLS1ydnYpKSAxZnIgY2FsYyh2YXIoLS1ydnYpKSBjYWxjKHZhcigtLXJ2dikpO1xcblxcdGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcblxcdGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJjaGVja2JveCB0aXRsZSBlZGl0IGV4cGFuZFxcXCI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0taXRlbS1iZyk7XFxufVxcblxcbi5kaXNwbGF5ZWQtaXRlbS5ub3ctaXRlbSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbm93LWl0ZW0tYmcpO1xcbn1cXG5cXG4uZGlzcGxheWVkLWl0ZW0ubGF0ZXItaXRlbSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGF0ZXItaXRlbS1iZyk7XFxufVxcblxcbi5leHBhbmRlZC1pdGVtIHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogY2FsYygxLjQqdmFyKC0tcnZ2KSkgMWZyIGNhbGModmFyKC0tcnZ2KSkgY2FsYyh2YXIoLS1ydnYpKTtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IGNhbGMoMS4yKnZhcigtLXJ2dikpIDFmcjtcXG5cXHRncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG5cXHRcXHRcXFwiY2hlY2tib3ggdGl0bGUgZWRpdCBleHBhbmRcXFwiXFxuXFx0XFx0XFxcIi4gZGVzY3JpcHRpb24gLiBkZWxldGVcXFwiO1xcbn1cXG5cXG4uZXhwYW5kZWQtaXRlbSAuaXRlbS1kZXNjcmlwdGlvbiB7XFxuXFx0bWFyZ2luLXJpZ2h0OiBjYWxjKDAuMyp2YXIoLS1ydnYpKTtcXG5cXHRtYXJnaW4tYm90dG9tOiBjYWxjKDAuMyp2YXIoLS1ydnYpKTtcXG59XFxuXFxuLmV4cGFuZGVkLWl0ZW0gLml0ZW0tdGl0bGUge1xcblxcdGN1cnNvcjogYXV0bztcXG59XFxuXFxuLmNvbXBsZXRlZC1pdGVtIHtcXG5cXHRmaWx0ZXI6IGdyYXlzY2FsZSg3MCUpO1xcbn1cXG5cXG4uY29tcGxldGVkLWl0ZW0gLml0ZW0tdGl0bGUge1xcblxcdGZvbnQtc3R5bGU6IGl0YWxpYztcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBjYWxjKDAuMDQqdmFyKC0tcnZ2KSkgYmxhY2s7XFxuXFx0dGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBub25lO1xcblxcdHRleHQtdW5kZXJsaW5lLW9mZnNldDogY2FsYygtMC4yKnZhcigtLXJ2dikpO1xcbn1cXG5cXG4uY29tcGxldGVkLWl0ZW0gLml0ZW0tZGVzY3JpcHRpb24ge1xcblxcdGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmRpc3BsYXllZC1pdGVtLmFkZC1pdGVtLWJ1dHRvbiB7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRtYXJnaW46IDA7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFkZC1pdGVtLWJ1dHRvbik7XFxuXFx0aGVpZ2h0OiBjYWxjKDEuNSp2YXIoLS1ydnYpKTtcXG5cXHR3aWR0aDogY2FsYygxLjUqdmFyKC0tcnZ2KSk7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYWRkLWl0ZW0tYnV0dG9uIGltZyB7XFxuXFx0bWF4LWhlaWdodDogMTAwJTtcXG5cXHRtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbi5kaXNwbGF5ZWQtaXRlbS5hZGQtZm9ybSB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWRkLWZvcm0tYmcpO1xcbn1cXG5cXG4uYWRkLWZvcm0taXRzZWxmLFxcbi5lZGl0LWZvcm0taXRzZWxmIHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtcm93czogY2FsYygxLjcqdmFyKC0tcnZ2KSkgY2FsYyh2YXIoLS1ydnYpKSBjYWxjKDQqdmFyKC0tcnZ2KSkgY2FsYyh2YXIoLS1ydnYpKSBjYWxjKDIuMip2YXIoLS1ydnYpKTtcXG5cXHRyb3ctZ2FwOiBjYWxjKDAuMjUqdmFyKC0tcnZ2KSk7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczpcXG5cXHRcXHRcXFwiZm9ybS10aXRsZVxcXCJcXG5cXHRcXHRcXFwidGl0bGUtc2VjdGlvblxcXCJcXG5cXHRcXHRcXFwiZGVzY3JpcHRpb24tc2VjdGlvblxcXCJcXG5cXHRcXHRcXFwicHJpb3JpdHktc2VjdGlvblxcXCJcXG5cXHRcXHRcXFwic3VibWl0LWJ1dHRvblxcXCI7XFxufVxcblxcbi5lZGl0LWJhY2tkcm9wIHtcXG5cXHR6LWluZGV4OiAyO1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHR3aWR0aDogMTAwdnc7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHRiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG5cXHQtLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG59XFxuXFxuLmVkaXQtZm9ybS1pdHNlbGYge1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHR6LWluZGV4OiAzO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1lZGl0LWZvcm0tYmcpO1xcblxcdHdpZHRoOiA5MHZ3O1xcblxcdG1heC13aWR0aDogY2FsYygxNSp2YXIoLS1ydnYpKTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0Zm9udC1mYW1pbHk6ICdTdWJsaW1hJztcXG5cXHRmb250LXNpemU6IGNhbGMoMC42KnZhcigtLXJ2dikpO1xcblxcdHBhZGRpbmc6IGNhbGMoMC4xKnZhcigtLXJ2dikpIGNhbGMoMC4zKnZhcigtLXJ2dikpO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcblxcdGJvcmRlci1yYWRpdXM6IGNhbGMoMC44KnZhcigtLXJ2dikpO1xcbn1cXG5cXG4uZm9ybS10aXRsZSB7XFxuXFx0bWFyZ2luOiAwIDElO1xcblxcdG1heC13aWR0aDogOTB2dztcXG5cXHRncmlkLWFyZWE6IGZvcm0tdGl0bGU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9ybS10aXRsZS10ZXh0IHtcXG5cXHRmb250LXNpemU6IGNhbGMoMC44KnZhcigtLXJ2dikpO1xcbn1cXG5cXG4uZm9ybS10aXRsZS10ZXh0OmhvdmVyIHtcXG5cXHRmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5jbG9zZS1idXR0b24ge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbG9zZS1idXR0b24pO1xcblxcdG1hcmdpbi1sZWZ0OiBhdXRvO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcblxcdGhlaWdodDogY2FsYygwLjkqdmFyKC0tcnZ2KSk7XFxuXFx0d2lkdGg6IGNhbGMoMC45KnZhcigtLXJ2dikpO1xcblxcdGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0tcnZ2KSk7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2xvc2UtYnV0dG9uIGltZyB7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4udGl0bGUtc2VjdGlvbiB7XFxuXFx0Z3JpZC1hcmVhOiB0aXRsZS1zZWN0aW9uO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBjYWxjKDMuNSp2YXIoLS1ydnYpKSAxZnI7XFxufVxcblxcbi50aXRsZS1zZWN0aW9uIGxhYmVsIHtcXG5cXHRmb250LXNpemU6IGNhbGMoMC41KnZhcigtLXJ2dikpO1xcbn1cXG5cXG4udGl0bGUtc2VjdGlvbiBpbnB1dCxcXG4uZGVzY3JpcHRpb24tc2VjdGlvbiB0ZXh0YXJlYSB7XFxuXFx0d2lkdGg6IDkzJTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3JtLWlucHV0LWJnKTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG5cXHRib3JkZXItcmFkaXVzOiBjYWxjKHZhcigtLXJ2dikpO1xcblxcdHBhZGRpbmctbGVmdDogMTBweDtcXG5cXHRmb250LWZhbWlseTogJ1N1YmxpbWEnO1xcblxcdGZvbnQtc2l6ZTogY2FsYygwLjQ1KnZhcigtLXJ2dikpO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24tc2VjdGlvbiB0ZXh0YXJlYSB7XFxuXFx0Ym9yZGVyLXJhZGl1czogY2FsYygwLjUqdmFyKC0tcnZ2KSk7XFxuXFx0cmVzaXplOiBub25lO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyxcXG50ZXh0YXJlYTpmb2N1cyB7XFxuXFx0YXBwZWFyYW5jZTogbm9uZTtcXG5cXHRvdXRsaW5lOiBub25lO1xcblxcdGJveC1zaGFkb3c6IDAgMCAwIDNweCB2YXIoLS1pbnB1dC1mb2N1cy1vdXRsaW5lKTtcXG59XFxuXFxuaW5wdXQ6bm90KDpmb2N1cyksXFxudGV4dGFyZWE6bm90KDpmb2N1cykge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRlc2NyaXB0aW9uLXNlY3Rpb24ge1xcblxcdGdyaWQtYXJlYTogZGVzY3JpcHRpb24tc2VjdGlvbjtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogY2FsYygzLjUqdmFyKC0tcnZ2KSkgMWZyO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24tc2VjdGlvbiBsYWJlbCB7XFxuXFx0Zm9udC1zaXplOiBjYWxjKDAuNSp2YXIoLS1ydnYpKTtcXG59XFxuXFxuLnByaW9yaXR5LXNlY3Rpb24ge1xcblxcdG1hcmdpbi10b3A6IDJweDtcXG5cXHRncmlkLWFyZWE6IHByaW9yaXR5LXNlY3Rpb247XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGNhbGMoMy41KnZhcigtLXJ2dikpIDFmciAxZnI7XFxufVxcblxcbi5wcmlvcml0eS1sYWJlbCB7XFxuXFx0Zm9udC1zaXplOiBjYWxjKDAuNSp2YXIoLS1ydnYpKTtcXG59XFxuXFxuLnJhZGlvLW9wdGlvbiB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGZvbnQtZmFtaWx5OiAnTWFqb3IgTW9ubyc7XFxuXFx0d2lkdGg6IGNhbGMoMyp2YXIoLS1ydnYpKTtcXG5cXHRoZWlnaHQ6IGNhbGModmFyKC0tcnZ2KSk7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTUlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpb3JpdHktYnV0dG9uLWRlZmF1bHQpO1xcbn1cXG5cXG4ucmFkaW8tb3B0aW9uIGxhYmVsIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5ub3ctb3B0aW9uIHtcXG5cXHRqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG5cXHRsZXR0ZXItc3BhY2luZzogY2FsYygwLjMqdmFyKC0tcnZ2KSk7XFxuXFx0dGV4dC1pbmRlbnQ6IGNhbGMoMC4zKnZhcigtLXJ2dikpO1xcbn1cXG5cXG4ubm93LW9wdGlvbi5zZWxlY3RlZC1wcmlvcml0eSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbm93LWJ1dHRvbik7XFxuXFx0Ym94LXNoYWRvdzogMCAwIDAgM3B4IHZhcigtLWJ1dHRvbi1vdXRsaW5lKTtcXG59XFxuXFxuLmxhdGVyLW9wdGlvbiB7XFxuXFx0anVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuXFx0bGV0dGVyLXNwYWNpbmc6IGNhbGMoMC4xKnZhcigtLXJ2dikpO1xcblxcdHRleHQtaW5kZW50OiBjYWxjKDAuMSp2YXIoLS1ydnYpKTtcXG59XFxuXFxuLmxhdGVyLW9wdGlvbi5zZWxlY3RlZC1wcmlvcml0eSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGF0ZXItYnV0dG9uKTtcXG5cXHRib3gtc2hhZG93OiAwIDAgMCAzcHggdmFyKC0tYnV0dG9uLW91dGxpbmUpO1xcbn1cXG5cXG4ucmFkaW8taW5wdXQge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRtYXJnaW46IDA7XFxuXFx0YXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLnN1Ym1pdC1idXR0b24ge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRncmlkLWFyZWE6IHN1Ym1pdC1idXR0b247XFxuXFx0Zm9udC1mYW1pbHk6ICdTdWJsaW1hJztcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWJtaXQtYnV0dG9uLWJnKTtcXG5cXHRhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuXFx0aGVpZ2h0OiBjYWxjKDEuNSp2YXIoLS1ydnYpKTtcXG5cXHR3aWR0aDogOTUlO1xcblxcdGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0tcnZ2KSk7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc3VibWl0LWJ1dHRvbiBpbWcge1xcblxcdGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmRpc3BsYXllZC1pdGVtIGltZyB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNoZWNrYm94IGltZyxcXG4uZXhwYW5kIGltZyB7XFxuXFx0d2lkdGg6IGNhbGModmFyKC0tcnZ2KSk7XFxufVxcblxcbi5lZGl0IGltZyB7XFxuXFx0d2lkdGg6IGNhbGMoMC44KnZhcigtLXJ2dikpO1xcbn1cXG5cXG4uY2hlY2tib3gge1xcblxcdGdyaWQtYXJlYTogY2hlY2tib3g7XFxuXFx0bWFyZ2luLWxlZnQ6IGNhbGMoMC4yKnZhcigtLXJ2dikpO1xcbn1cXG5cXG4uaXRlbS10aXRsZSB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGJvdHRvbTogMnB4O1xcblxcdGdyaWQtYXJlYTogdGl0bGU7XFxuXFx0anVzdGlmeS1zZWxmOiBzdGFydDtcXG59XFxuXFxuLmV4cGFuZGFibGUtdGl0bGUge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmVkaXQge1xcblxcdGdyaWQtYXJlYTogZWRpdDtcXG59XFxuXFxuLmV4cGFuZCB7XFxuXFx0Z3JpZC1hcmVhOiBleHBhbmQ7XFxufVxcblxcbi5zaHJpbmsge1xcblxcdGdyaWQtYXJlYTogZXhwYW5kO1xcblxcdGFzcGVjdC1yYXRpbzogMSAvIDE7XFxufVxcblxcbi5zaHJpbmsgaW1nIHtcXG5cXHRoZWlnaHQ6IGNhbGModmFyKC0tcnZ2KSk7XFxufVxcblxcbi5pdGVtLWRlc2NyaXB0aW9uIHtcXG5cXHRib3JkZXItcmFkaXVzOiAzcHg7XFxuXFx0Zm9udC1zdHlsZTogaXRhbGljO1xcblxcdGdyaWQtYXJlYTogZGVzY3JpcHRpb247XFxuXFx0YWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG5cXHRqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XFxuXFx0Zm9udC1zaXplOiA4MCU7XFxufVxcblxcbi5leHBhbmRlZC1pdGVtIC5kZWxldGUge1xcblxcdGdyaWQtYXJlYTogZGVsZXRlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcblxcdG1hcmdpbi1ib3R0b206IGNhbGMoMC4zKnZhcigtLXJ2dikpO1xcbn1cXG5cXG4uZGVsZXRlIGltZyB7XFxuXFx0aGVpZ2h0OiBjYWxjKHZhcigtLXJ2dikpO1xcbn1cXG5cXG5mb290ZXIge1xcblxcdGhlaWdodDogNXZoO1xcblxcdG1pbi1oZWlnaHQ6IGNhbGMoMC44KnZhcigtLXJ2dikpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpdGxlLWZvb3Rlci1jb2xvcik7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGZvbnQtc2l6ZTogY2FsYygwLjUqdmFyKC0tcnZ2KSk7XFxuXFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcblxcdGZvbnQtZmFtaWx5OiAnU3VibGltYSc7XFxuXFx0Zm9udC1zaXplOiBjYWxjKDAuNCp2YXIoLS1ydnYpKTtcXG5cXHRsZXR0ZXItc3BhY2luZzogY2FsYygwLjEqdmFyKC0tcnZ2KSk7XFxuXFx0dGV4dC1pbmRlbnQ6IGNhbGMoMC4xKnZhcigtLXJ2dikpO1xcbn1cXG5cXG4vKiBkYXJrIG1vZGUgc3R5bGluZzogKi9cXG5cXG5ib2R5LmRhcmsge1xcblxcdGNvbG9yOiB2YXIoLS1kYXJrLXRleHQpO1xcbn1cXG5cXG4udGl0bGUuZGFyayB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay10aXRsZS1mb290ZXItY29sb3IpO1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kYXJrLWJvcmRlcik7XFxufVxcblxcbi5uYXYuZGFyayB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1uYXYtYmcpO1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kYXJrLWJvcmRlcik7XFxufVxcblxcbi5uYXYuZGFyayBkaXYge1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstYm9yZGVyKTtcXG59XFxuXFxuLm5vdy5kYXJrIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLW5vdy1idXR0b24pO1xcbn1cXG5cXG4ubGF0ZXIuZGFyayB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1sYXRlci1idXR0b24pO1xcbn1cXG5cXG4uYWxsLmRhcmsge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYWxsLWJ1dHRvbik7XFxufVxcblxcbi5zZWxlY3RlZC5kYXJrIHtcXG5cXHRib3gtc2hhZG93OiAwIDAgMCAzcHggdmFyKC0tZGFyay1idXR0b24tb3V0bGluZSk7XFxufVxcblxcbi5tYWluLmRhcmsge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstbWFpbi1iZyk7XFxufVxcblxcbi5kaXNwbGF5ZWQtaXRlbS5kYXJrIHtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWJvcmRlcik7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1pdGVtLWJnKTtcXG59XFxuXFxuLmRpc3BsYXllZC1pdGVtLm5vdy1pdGVtLmRhcmsge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstbm93LWl0ZW0tYmcpO1xcbn1cXG5cXG4uZGlzcGxheWVkLWl0ZW0ubGF0ZXItaXRlbS5kYXJrIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWxhdGVyLWl0ZW0tYmcpO1xcbn1cXG5cXG4uY29tcGxldGVkLWl0ZW0gLml0ZW0tdGl0bGUuZGFyayB7XFxuXFx0ZmlsdGVyOiBicmlnaHRuZXNzKDgwJSk7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgY2FsYygwLjA0KnZhcigtLXJ2dikpIHZhcigtLWRhcmstdGV4dCk7XFxuXFx0dGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBub25lO1xcbn1cXG5cXG4uZGlzcGxheWVkLWl0ZW0uYWRkLWZvcm0uZGFyayB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1hZGQtZm9ybS1iZyk7XFxufVxcblxcbi5lZGl0LWZvcm0taXRzZWxmLmRhcmsge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYWRkLWZvcm0tYmcpO1xcbn1cXG5cXG4uY2xvc2UtYnV0dG9uLmRhcmsge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY2xvc2UtYnV0dG9uKTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWJvcmRlcik7XFxufVxcblxcbi50aXRsZS1zZWN0aW9uLmRhcmsgaW5wdXQsXFxuLmRlc2NyaXB0aW9uLXNlY3Rpb24uZGFyayB0ZXh0YXJlYSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1mb3JtLWlucHV0LWJnKTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWJvcmRlcik7XFxufVxcblxcbmlucHV0LmRhcms6Zm9jdXMsXFxudGV4dGFyZWEuZGFyazpmb2N1cyB7XFxuXFx0Ym94LXNoYWRvdzogMCAwIDAgM3B4IHZhcigtLWRhcmstaW5wdXQtZm9jdXMtb3V0bGluZSk7XFxufVxcblxcbi5yYWRpby1vcHRpb24uZGFyayB7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1ib3JkZXIpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstcHJpb3JpdHktYnV0dG9uLWRlZmF1bHQpO1xcbn1cXG5cXG4ubm93LW9wdGlvbi5zZWxlY3RlZC1wcmlvcml0eS5kYXJrIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLW5vdy1idXR0b24pO1xcblxcdGJveC1zaGFkb3c6IDAgMCAwIDNweCB2YXIoLS1kYXJrLWJ1dHRvbi1vdXRsaW5lKTtcXG59XFxuXFxuLmxhdGVyLW9wdGlvbi5zZWxlY3RlZC1wcmlvcml0eS5kYXJrIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWxhdGVyLWJ1dHRvbik7XFxuXFx0Ym94LXNoYWRvdzogMCAwIDAgM3B4IHZhcigtLWRhcmstYnV0dG9uLW91dGxpbmUpO1xcbn1cXG5cXG4uZGlzcGxheWVkLWl0ZW0uYWRkLWl0ZW0tYnV0dG9uLmRhcmsge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYWRkLWl0ZW0tYnV0dG9uKTtcXG59XFxuXFxuLnN1Ym1pdC1idXR0b24uZGFyayB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1zdWJtaXQtYnV0dG9uLWJnKTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWJvcmRlcik7XFxufVxcblxcbmZvb3Rlci5kYXJrIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLXRpdGxlLWZvb3Rlci1jb2xvcik7XFxuXFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWRhcmstYm9yZGVyKTtcXG59XFxuXFxuLyogZGVza3RvcCB2ZXJzaW9uOiAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzUwcHgpIHtcXG5cXG5cXHQubmF2IGRpdiB7XFxuXFx0XFx0dHJhbnNpdGlvbjogMC4wNzVzIGxpbmVhcjtcXG5cXHR9XFxuXFxuXFx0Lm5hdiBkaXY6aG92ZXIge1xcblxcdFxcdHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuXFx0fVxcblxcblxcdC5jaGVja2JveCxcXG5cXHQuZWRpdCxcXG5cXHQuZXhwYW5kLFxcblxcdC5zaHJpbmssXFxuXFx0LmRlbGV0ZSxcXG5cXHQuYWRkLWl0ZW0tYnV0dG9uLFxcblxcdC5yYWRpby1vcHRpb24sXFxuXFx0LnN1Ym1pdC1idXR0b24sXFxuXFx0LmNsb3NlLWJ1dHRvbiB7XFxuXFx0XFx0dHJhbnNpdGlvbjogMC4wNzVzIGxpbmVhcjtcXG5cXHR9XFxuXFxuXFx0LmNoZWNrYm94OmhvdmVyIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDc1KTtcXG5cXHR9XFxuXFxuXFx0LmVkaXQ6aG92ZXIge1xcblxcdFxcdHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG5cXHR9XFxuXFxuXFx0LmV4cGFuZDpob3ZlciB7XFxuXFx0XFx0dHJhbnNmb3JtOiBzY2FsZSgxLjI1KTtcXG5cXHR9XFxuXFxuXFx0LnNocmluazpob3ZlciB7XFxuXFx0XFx0dHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcblxcdH1cXG5cXG5cXHQuZGVsZXRlOmhvdmVyIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDc1KTtcXG5cXHR9XFxuXFxuXFx0LmFkZC1pdGVtLWJ1dHRvbjpob3ZlciB7XFxuXFx0XFx0dHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG5cXHR9XFxuXFxuXFx0LnJhZGlvLW9wdGlvbjpob3ZlciB7XFxuXFx0XFx0dHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG5cXHR9XFxuXFxuXFx0LnN1Ym1pdC1idXR0b246aG92ZXIge1xcblxcdFxcdHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XFxuXFx0fVxcblxcblxcdC5jbG9zZS1idXR0b246aG92ZXIge1xcblxcdFxcdHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG5cXHR9XFxuXFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcXG5cXHQuY29tcGxldGVkLWl0ZW0gLml0ZW0tdGl0bGUsXFxuXFx0LmNvbXBsZXRlZC1pdGVtIC5pdGVtLXRpdGxlLmRhcmsge1xcblxcdFxcdGZvbnQtc3R5bGU6IGl0YWxpYztcXG5cXHRcXHR0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG5cXHRcXHR0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IG5vbmU7XFxuXFx0XFx0dGV4dC11bmRlcmxpbmUtb2Zmc2V0OiAwO1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcXG5cXHRib2R5IHtcXG5cXHRcXHRtaW4taGVpZ2h0OiAxMDB2aDtcXG5cXHRcXHRtaW4td2lkdGg6IDEwMHZ3O1xcblxcdH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7Ozs7Ozs7OztDQWFDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdC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QztBQUNyQzs7QUFFQTs7Q0FFQyxxREFBcUQ7QUFDdEQ7O0FBRUE7Q0FDQyxvQ0FBb0M7Q0FDcEMscURBQXFEO0FBQ3REOztBQUVBO0NBQ0Msd0NBQXdDO0NBQ3hDLGdEQUFnRDtBQUNqRDs7QUFFQTtDQUNDLDBDQUEwQztDQUMxQyxnREFBZ0Q7QUFDakQ7O0FBRUE7Q0FDQyw2Q0FBNkM7QUFDOUM7O0FBRUE7Q0FDQyw4Q0FBOEM7Q0FDOUMsb0NBQW9DO0FBQ3JDOztBQUVBO0NBQ0MsZ0RBQWdEO0NBQ2hELHdDQUF3QztBQUN6Qzs7QUFFQSxxQkFBcUI7QUFDckI7O0NBRUM7RUFDQyx5QkFBeUI7Q0FDMUI7O0NBRUE7RUFDQyxzQkFBc0I7Q0FDdkI7O0NBRUE7Ozs7Ozs7OztFQVNDLHlCQUF5QjtDQUMxQjs7Q0FFQTtFQUNDLHVCQUF1QjtDQUN4Qjs7Q0FFQTtFQUNDLHFCQUFxQjtDQUN0Qjs7Q0FFQTtFQUNDLHNCQUFzQjtDQUN2Qjs7Q0FFQTtFQUNDLHFCQUFxQjtDQUN0Qjs7Q0FFQTtFQUNDLHVCQUF1QjtDQUN4Qjs7Q0FFQTtFQUNDLHNCQUFzQjtDQUN2Qjs7Q0FFQTtFQUNDLHNCQUFzQjtDQUN2Qjs7Q0FFQTtFQUNDLHNCQUFzQjtDQUN2Qjs7Q0FFQTtFQUNDLHFCQUFxQjtDQUN0Qjs7QUFFRDs7QUFFQTtDQUNDOztFQUVDLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsOEJBQThCO0VBQzlCLHdCQUF3QjtDQUN6QjtBQUNEOztBQUVBO0NBQ0M7RUFDQyxpQkFBaUI7RUFDakIsZ0JBQWdCO0NBQ2pCO0FBQ0RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tcnZ2OiBjYWxjKDFyZW0gKyAxdmggKyAxdncpO1xcblxcblxcdC0tYmx1ZTogIzJFNTE2OTtcXG4gICAgLS1ibHVlLWdyYXk6ICM1RTY4NkQ7XFxuICAgIC0tYnJvd246ICM2RjU3NDY7XFxuICAgIC0tYnJvd24tbXV0ZWQ6ICM2MzU4NEM7XFxuICAgIC0tYnJvd24tdGFuOiAjQTU4Rjg1O1xcbiAgICAtLWZvcmVzdC1ncmVlbjogIzRENjYzRTtcXG4gICAgLS1ncmVlbi1icm93bjogIzVGNTYzRjtcXG4gICAgLS1ncmF5LXRhbjogI0M5QkJBMztcXG4gICAgLS10YW4tZ3JheTogI0QxQzlCQTtcXG4gICAgLS1vZmYtd2hpdGU6ICNFNEQ5QzU7XFxuICAgIC0tb3JhbmdlLXllbGxvdzogI0UxQjI3MDtcXG4gICAgLS1vcmFuZ2UtdGFuOiAjQ0RBODg1O1xcbiAgICAtLXJlZDogI0FDM0EzRTtcXG4gICAgLS1zcGVjaWFsLXJlZDogIzgyNEU0QTtcXG4gICAgLS10YW46ICNEMkJDOUI7XFxuXFxuXFx0LS10aXRsZS1mb290ZXItY29sb3I6ICNiYThlNWVkZTtcXG5cXHQtLW5hdi1iZzogI2U0ZDljNTc0O1xcblxcdC0tbm93LWJ1dHRvbjogIzc0OWM1ZDtcXG5cXHQtLWxhdGVyLWJ1dHRvbjogI2I1NmM2NztcXG5cXHQtLWFsbC1idXR0b246ICNlMGE4NWJjMjtcXG5cXHQtLWJ1dHRvbi1vdXRsaW5lOiAjZjA5OTFmZDU7XFxuXFx0LS1pbnB1dC1mb2N1cy1vdXRsaW5lOiAjZTU5ODJkO1xcblxcdC0taW5wdXQtdmFsaWQtb3V0bGluZTojNEQ2NjNFO1xcblxcdC0tbWFpbi1iZzogI2UxY2ZhZTk3O1xcblxcdC0taXRlbS1iZzogIzIwODZjYTkyO1xcblxcdC0tbm93LWl0ZW0tYmc6ICM2MjljNDA3YztcXG5cXHQtLWxhdGVyLWl0ZW0tYmc6ICNkYTg2ODBjMTtcXG5cXHQtLWRlc2NyaXB0aW9uLWJnOiAjZDhmMmZmOTU7XFxuXFx0LS1hZGQtaXRlbS1idXR0b246ICNiYThkNWU4NTtcXG5cXHQtLWFkZC1mb3JtLWJnOiAjZjBkN2E5ZGU7XFxuXFx0LS1lZGl0LWZvcm0tYmc6ICNmMGQ3YTk7XFxuXFx0LS1wcmlvcml0eS1idXR0b24tZGVmYXVsdDogI2M4YjVhMjg1O1xcblxcdC0tZm9ybS1idXR0b246ICNiYThkNWU4NTtcXG5cXHQtLWZvcm0taW5wdXQtYmc6ICNGM0VFRTU7XFxuXFx0LS1zdWJtaXQtYnV0dG9uLWJnOiAjODdiNmQ1YjQ7XFxuXFx0LS1jbG9zZS1idXR0b246ICM5ODZmNDQ3MTtcXG5cXHQtLWRpc3BsYXktaWNvbjogY2FsYyh2YXIoLS1ydnYpKTtcXG5cXG5cXHQtLWRhcmstdGV4dDogI2RkZDJiZjtcXG5cXHQtLWRhcmstYm9yZGVyOiAjMjcyNDIwO1xcblxcdC0tZGFyay10aXRsZS1mb290ZXItY29sb3I6ICMyMDFjMTlkZTtcXG5cXHQtLWRhcmstbmF2LWJnOiAjMjMyMDFjYzM7XFxuXFx0LS1kYXJrLW5vdy1idXR0b246ICMzODRhMmRkYTtcXG5cXHQtLWRhcmstbGF0ZXItYnV0dG9uOiAjOGU1NjUyO1xcblxcdC0tZGFyay1hbGwtYnV0dG9uOiAjZDQ5ZjUzOWM7XFxuXFx0LS1kYXJrLWJ1dHRvbi1vdXRsaW5lOiAjZWU5ZjMyY2E7XFxuXFx0LS1kYXJrLWlucHV0LWZvY3VzLW91dGxpbmU6ICNlZTlmMzJjYTtcXG5cXHQtLWRhcmstaW5wdXQtdmFsaWQtb3V0bGluZTojNEQ2NjNFO1xcblxcdC0tZGFyay1tYWluLWJnOiAjMjQyMTFkYTE7XFxuXFx0LS1kYXJrLWl0ZW0tYmc6ICMxMjNjNTg5MjtcXG5cXHQtLWRhcmstbm93LWl0ZW0tYmc6IHJnYmEoNDYsIDgwLCAyOCwgMC41MjcpO1xcblxcdC0tZGFyay1sYXRlci1pdGVtLWJnOiAjNzU0NzQzYjI7XFxuXFx0LS1kYXJrLWFkZC1pdGVtLWJ1dHRvbjogIzgxNWUzNjcwO1xcblxcdC0tZGFyay1hZGQtZm9ybS1iZzogIzNjMzkzNWRlO1xcblxcdC0tZGFyay1wcmlvcml0eS1idXR0b24tZGVmYXVsdDogIzhiNzc2Mjg1O1xcblxcdC0tZGFyay1mb3JtLWJ1dHRvbjogI2JhOGQ1ZTg1O1xcblxcdC0tZGFyay1mb3JtLWlucHV0LWJnOiAjYWJhNjlhO1xcblxcdC0tZGFyay1zdWJtaXQtYnV0dG9uLWJnOiAjNjY4ZGE4YjQ7XFxuXFx0LS1kYXJrLWNsb3NlLWJ1dHRvbjogIzk2ODU3Mzg1O1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogJ01ham9yIE1vbm8nO1xcblxcdHNyYzogdXJsKCdmb250L21ham9yLW1vbm8vbWFqb3ItbW9uby50dGYnKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6ICdTdWJsaW1hJztcXG5cXHRzcmM6IHVybCgnZm9udC9zdWJsaW1hL3N1YmxpbWEtbGlnaHQub3RmJyk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcblxcdGZvbnQtZmFtaWx5OiAnU3VibGltYSBCb2xkJztcXG5cXHRzcmM6IHVybCgnZm9udC9zdWJsaW1hL3N1YmxpbWEtZXh0cmEtYm9sZC5vdGYnKTtcXG59XFxuXFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmhlYWRlciB7XFxuXFx0aGVpZ2h0OiAxNXZoO1xcblxcdG1pbi1oZWlnaHQ6IGNhbGMoMyp2YXIoLS1ydnYpKTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50aXRsZSB7XFxuXFx0bWluLWhlaWdodDogY2FsYygwLjgqdmFyKC0tcnZ2KSk7XFxuXFx0ZmxleDogMTtcXG5cXHRvdmVyZmxvdy14OiBoaWRkZW47XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogY2FsYygwLjYqdmFyKC0tcnZ2KSk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGl0bGUtZm9vdGVyLWNvbG9yKTtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi50aXRsZS10ZXh0IHtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0Zm9udC1mYW1pbHk6ICdTdWJsaW1hJztcXG5cXHRmb250LXNpemU6IGNhbGMoMC40NSp2YXIoLS1ydnYpKTtcXG5cXHRsZXR0ZXItc3BhY2luZzogY2FsYygwLjEqdmFyKC0tcnZ2KSk7XFxuXFx0dGV4dC1pbmRlbnQ6IGNhbGMoMC4xKnZhcigtLXJ2dikpO1xcbn1cXG5cXG4ubGlnaHQtbW9kZSxcXG4uZGFyay1tb2RlIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0aGVpZ2h0OiB2YXIoLS1kaXNwbGF5LWljb24pO1xcblxcdHdpZHRoOiB2YXIoLS1kaXNwbGF5LWljb24pO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxpZ2h0LW1vZGUuZGFyayxcXG4uZGFyay1tb2RlLmRhcmsge1xcblxcdGZpbHRlcjogaW52ZXJ0KDgwJSk7XFxufVxcblxcbi5saWdodC1tb2RlIGltZyxcXG4uZGFyay1tb2RlIGltZyB7XFxuXFx0aGVpZ2h0OiA4MCU7XFxuXFx0d2lkdGg6IDgwJTtcXG59XFxuXFxuLnNlbGVjdGVkLWRpc3BsYXkubGlnaHQtbW9kZSxcXG4uc2VsZWN0ZWQtZGlzcGxheS5kYXJrLW1vZGUge1xcblxcdHRyYW5zaXRpb246IDAuMjVzIGxpbmVhcjtcXG59XFxuXFxuLnNlbGVjdGVkLWRpc3BsYXkubGlnaHQtbW9kZSBpbWcge1xcblxcdGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDVweCB2YXIoLS1yZWQpKTtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbi5zZWxlY3RlZC1kaXNwbGF5LmRhcmstbW9kZSBpbWcge1xcblxcdGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDVweCBibGFjayk7XFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG5cXG4ubmF2IHtcXG5cXHRmbGV4OiAyO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRmb250LWZhbWlseTogJ01ham9yIE1vbm8nO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1iZyk7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4ubmF2IGRpdiB7XFxuXFx0Zm9udC1zaXplOiBjYWxjKDAuNip2YXIoLS1ydnYpKTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0d2lkdGg6IGNhbGMoMyp2YXIoLS1ydnYpKTtcXG5cXHRoZWlnaHQ6IGNhbGModmFyKC0tcnZ2KSk7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTUlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5ub3cge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vdy1idXR0b24pO1xcbn1cXG5cXG4ubm93LFxcbi5hbGwge1xcblxcdGxldHRlci1zcGFjaW5nOiBjYWxjKDAuMyp2YXIoLS1ydnYpKTtcXG5cXHR0ZXh0LWluZGVudDogY2FsYygwLjMqdmFyKC0tcnZ2KSk7XFxufVxcblxcbi5sYXRlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGF0ZXItYnV0dG9uKTtcXG5cXHRsZXR0ZXItc3BhY2luZzogY2FsYygwLjEqdmFyKC0tcnZ2KSk7XFxuXFx0dGV4dC1pbmRlbnQ6IGNhbGMoMC4xKnZhcigtLXJ2dikpO1xcbn1cXG5cXG4uYWxsIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbGwtYnV0dG9uKTtcXG59XFxuXFxuLnNlbGVjdGVkIHtcXG5cXHRib3gtc2hhZG93OiAwIDAgMCAzcHggdmFyKC0tYnV0dG9uLW91dGxpbmUpO1xcbn1cXG5cXG4ubWFpbiB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGZsZXg6IGF1dG87XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0cGFkZGluZzogY2FsYygwLjUqdmFyKC0tcnZ2KSkgMDtcXG5cXHRnYXA6IGNhbGMoMC42KnZhcigtLXJ2dikpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmcpO1xcbn1cXG5cXG4uZGlzcGxheWVkLWl0ZW0ge1xcblxcdHdpZHRoOiA5MHZ3O1xcblxcdG1heC13aWR0aDogY2FsYygxNSp2YXIoLS1ydnYpKTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0Zm9udC1mYW1pbHk6ICdTdWJsaW1hJztcXG5cXHRmb250LXNpemU6IGNhbGMoMC42KnZhcigtLXJ2dikpO1xcblxcdHBhZGRpbmc6IGNhbGMoMC4xKnZhcigtLXJ2dikpIGNhbGMoMC4zKnZhcigtLXJ2dikpO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcblxcdGJvcmRlci1yYWRpdXM6IGNhbGMoMC44KnZhcigtLXJ2dikpO1xcblxcdG1hcmdpbjogMCBjYWxjKDAuNyp2YXIoLS1ydnYpKTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogY2FsYygxLjQqdmFyKC0tcnZ2KSkgMWZyIGNhbGModmFyKC0tcnZ2KSkgY2FsYyh2YXIoLS1ydnYpKTtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG5cXHRncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiY2hlY2tib3ggdGl0bGUgZWRpdCBleHBhbmRcXFwiO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWl0ZW0tYmcpO1xcbn1cXG5cXG4uZGlzcGxheWVkLWl0ZW0ubm93LWl0ZW0ge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vdy1pdGVtLWJnKTtcXG59XFxuXFxuLmRpc3BsYXllZC1pdGVtLmxhdGVyLWl0ZW0ge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxhdGVyLWl0ZW0tYmcpO1xcbn1cXG5cXG4uZXhwYW5kZWQtaXRlbSB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGNhbGMoMS40KnZhcigtLXJ2dikpIDFmciBjYWxjKHZhcigtLXJ2dikpIGNhbGModmFyKC0tcnZ2KSk7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiBjYWxjKDEuMip2YXIoLS1ydnYpKSAxZnI7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuXFx0XFx0XFxcImNoZWNrYm94IHRpdGxlIGVkaXQgZXhwYW5kXFxcIlxcblxcdFxcdFxcXCIuIGRlc2NyaXB0aW9uIC4gZGVsZXRlXFxcIjtcXG59XFxuXFxuLmV4cGFuZGVkLWl0ZW0gLml0ZW0tZGVzY3JpcHRpb24ge1xcblxcdG1hcmdpbi1yaWdodDogY2FsYygwLjMqdmFyKC0tcnZ2KSk7XFxuXFx0bWFyZ2luLWJvdHRvbTogY2FsYygwLjMqdmFyKC0tcnZ2KSk7XFxufVxcblxcbi5leHBhbmRlZC1pdGVtIC5pdGVtLXRpdGxlIHtcXG5cXHRjdXJzb3I6IGF1dG87XFxufVxcblxcbi5jb21wbGV0ZWQtaXRlbSB7XFxuXFx0ZmlsdGVyOiBncmF5c2NhbGUoNzAlKTtcXG59XFxuXFxuLmNvbXBsZXRlZC1pdGVtIC5pdGVtLXRpdGxlIHtcXG5cXHRmb250LXN0eWxlOiBpdGFsaWM7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgY2FsYygwLjA0KnZhcigtLXJ2dikpIGJsYWNrO1xcblxcdHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogbm9uZTtcXG5cXHR0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IGNhbGMoLTAuMip2YXIoLS1ydnYpKTtcXG59XFxuXFxuLmNvbXBsZXRlZC1pdGVtIC5pdGVtLWRlc2NyaXB0aW9uIHtcXG5cXHRmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5kaXNwbGF5ZWQtaXRlbS5hZGQtaXRlbS1idXR0b24ge1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0bWFyZ2luOiAwO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hZGQtaXRlbS1idXR0b24pO1xcblxcdGhlaWdodDogY2FsYygxLjUqdmFyKC0tcnZ2KSk7XFxuXFx0d2lkdGg6IGNhbGMoMS41KnZhcigtLXJ2dikpO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFkZC1pdGVtLWJ1dHRvbiBpbWcge1xcblxcdG1heC1oZWlnaHQ6IDEwMCU7XFxuXFx0bWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZGlzcGxheWVkLWl0ZW0uYWRkLWZvcm0ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFkZC1mb3JtLWJnKTtcXG59XFxuXFxuLmFkZC1mb3JtLWl0c2VsZixcXG4uZWRpdC1mb3JtLWl0c2VsZiB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IGNhbGMoMS43KnZhcigtLXJ2dikpIGNhbGModmFyKC0tcnZ2KSkgY2FsYyg0KnZhcigtLXJ2dikpIGNhbGModmFyKC0tcnZ2KSkgY2FsYygyLjIqdmFyKC0tcnZ2KSk7XFxuXFx0cm93LWdhcDogY2FsYygwLjI1KnZhcigtLXJ2dikpO1xcblxcdGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuXFx0XFx0XFxcImZvcm0tdGl0bGVcXFwiXFxuXFx0XFx0XFxcInRpdGxlLXNlY3Rpb25cXFwiXFxuXFx0XFx0XFxcImRlc2NyaXB0aW9uLXNlY3Rpb25cXFwiXFxuXFx0XFx0XFxcInByaW9yaXR5LXNlY3Rpb25cXFwiXFxuXFx0XFx0XFxcInN1Ym1pdC1idXR0b25cXFwiO1xcbn1cXG5cXG4uZWRpdC1iYWNrZHJvcCB7XFxuXFx0ei1pbmRleDogMjtcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0d2lkdGg6IDEwMHZ3O1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0YmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxuXFx0LS13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxufVxcblxcbi5lZGl0LWZvcm0taXRzZWxmIHtcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0ei1pbmRleDogMztcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZWRpdC1mb3JtLWJnKTtcXG5cXHR3aWR0aDogOTB2dztcXG5cXHRtYXgtd2lkdGg6IGNhbGMoMTUqdmFyKC0tcnZ2KSk7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGZvbnQtZmFtaWx5OiAnU3VibGltYSc7XFxuXFx0Zm9udC1zaXplOiBjYWxjKDAuNip2YXIoLS1ydnYpKTtcXG5cXHRwYWRkaW5nOiBjYWxjKDAuMSp2YXIoLS1ydnYpKSBjYWxjKDAuMyp2YXIoLS1ydnYpKTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG5cXHRib3JkZXItcmFkaXVzOiBjYWxjKDAuOCp2YXIoLS1ydnYpKTtcXG59XFxuXFxuLmZvcm0tdGl0bGUge1xcblxcdG1hcmdpbjogMCAxJTtcXG5cXHRtYXgtd2lkdGg6IDkwdnc7XFxuXFx0Z3JpZC1hcmVhOiBmb3JtLXRpdGxlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvcm0tdGl0bGUtdGV4dCB7XFxuXFx0Zm9udC1zaXplOiBjYWxjKDAuOCp2YXIoLS1ydnYpKTtcXG59XFxuXFxuLmZvcm0tdGl0bGUtdGV4dDpob3ZlciB7XFxuXFx0Zm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4uY2xvc2UtYnV0dG9uIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xvc2UtYnV0dG9uKTtcXG5cXHRtYXJnaW4tbGVmdDogYXV0bztcXG5cXHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG5cXHRoZWlnaHQ6IGNhbGMoMC45KnZhcigtLXJ2dikpO1xcblxcdHdpZHRoOiBjYWxjKDAuOSp2YXIoLS1ydnYpKTtcXG5cXHRib3JkZXItcmFkaXVzOiBjYWxjKHZhcigtLXJ2dikpO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNsb3NlLWJ1dHRvbiBpbWcge1xcblxcdGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnRpdGxlLXNlY3Rpb24ge1xcblxcdGdyaWQtYXJlYTogdGl0bGUtc2VjdGlvbjtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogY2FsYygzLjUqdmFyKC0tcnZ2KSkgMWZyO1xcbn1cXG5cXG4udGl0bGUtc2VjdGlvbiBsYWJlbCB7XFxuXFx0Zm9udC1zaXplOiBjYWxjKDAuNSp2YXIoLS1ydnYpKTtcXG59XFxuXFxuLnRpdGxlLXNlY3Rpb24gaW5wdXQsXFxuLmRlc2NyaXB0aW9uLXNlY3Rpb24gdGV4dGFyZWEge1xcblxcdHdpZHRoOiA5MyU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9ybS1pbnB1dC1iZyk7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuXFx0Ym9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1ydnYpKTtcXG5cXHRwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuXFx0Zm9udC1mYW1pbHk6ICdTdWJsaW1hJztcXG5cXHRmb250LXNpemU6IGNhbGMoMC40NSp2YXIoLS1ydnYpKTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uLXNlY3Rpb24gdGV4dGFyZWEge1xcblxcdGJvcmRlci1yYWRpdXM6IGNhbGMoMC41KnZhcigtLXJ2dikpO1xcblxcdHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMsXFxudGV4dGFyZWE6Zm9jdXMge1xcblxcdGFwcGVhcmFuY2U6IG5vbmU7XFxuXFx0b3V0bGluZTogbm9uZTtcXG5cXHRib3gtc2hhZG93OiAwIDAgMCAzcHggdmFyKC0taW5wdXQtZm9jdXMtb3V0bGluZSk7XFxufVxcblxcbmlucHV0Om5vdCg6Zm9jdXMpLFxcbnRleHRhcmVhOm5vdCg6Zm9jdXMpIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kZXNjcmlwdGlvbi1zZWN0aW9uIHtcXG5cXHRncmlkLWFyZWE6IGRlc2NyaXB0aW9uLXNlY3Rpb247XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGNhbGMoMy41KnZhcigtLXJ2dikpIDFmcjtcXG59XFxuXFxuLmRlc2NyaXB0aW9uLXNlY3Rpb24gbGFiZWwge1xcblxcdGZvbnQtc2l6ZTogY2FsYygwLjUqdmFyKC0tcnZ2KSk7XFxufVxcblxcbi5wcmlvcml0eS1zZWN0aW9uIHtcXG5cXHRtYXJnaW4tdG9wOiAycHg7XFxuXFx0Z3JpZC1hcmVhOiBwcmlvcml0eS1zZWN0aW9uO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBjYWxjKDMuNSp2YXIoLS1ydnYpKSAxZnIgMWZyO1xcbn1cXG5cXG4ucHJpb3JpdHktbGFiZWwge1xcblxcdGZvbnQtc2l6ZTogY2FsYygwLjUqdmFyKC0tcnZ2KSk7XFxufVxcblxcbi5yYWRpby1vcHRpb24ge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRmb250LWZhbWlseTogJ01ham9yIE1vbm8nO1xcblxcdHdpZHRoOiBjYWxjKDMqdmFyKC0tcnZ2KSk7XFxuXFx0aGVpZ2h0OiBjYWxjKHZhcigtLXJ2dikpO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcblxcdGJvcmRlci1yYWRpdXM6IDE1JTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW9yaXR5LWJ1dHRvbi1kZWZhdWx0KTtcXG59XFxuXFxuLnJhZGlvLW9wdGlvbiBsYWJlbCB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubm93LW9wdGlvbiB7XFxuXFx0anVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuXFx0bGV0dGVyLXNwYWNpbmc6IGNhbGMoMC4zKnZhcigtLXJ2dikpO1xcblxcdHRleHQtaW5kZW50OiBjYWxjKDAuMyp2YXIoLS1ydnYpKTtcXG59XFxuXFxuLm5vdy1vcHRpb24uc2VsZWN0ZWQtcHJpb3JpdHkge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vdy1idXR0b24pO1xcblxcdGJveC1zaGFkb3c6IDAgMCAwIDNweCB2YXIoLS1idXR0b24tb3V0bGluZSk7XFxufVxcblxcbi5sYXRlci1vcHRpb24ge1xcblxcdGp1c3RpZnktc2VsZjogY2VudGVyO1xcblxcdGxldHRlci1zcGFjaW5nOiBjYWxjKDAuMSp2YXIoLS1ydnYpKTtcXG5cXHR0ZXh0LWluZGVudDogY2FsYygwLjEqdmFyKC0tcnZ2KSk7XFxufVxcblxcbi5sYXRlci1vcHRpb24uc2VsZWN0ZWQtcHJpb3JpdHkge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxhdGVyLWJ1dHRvbik7XFxuXFx0Ym94LXNoYWRvdzogMCAwIDAgM3B4IHZhcigtLWJ1dHRvbi1vdXRsaW5lKTtcXG59XFxuXFxuLnJhZGlvLWlucHV0IHtcXG5cXHRkaXNwbGF5OiBub25lO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0bWFyZ2luOiAwO1xcblxcdGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi5zdWJtaXQtYnV0dG9uIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0Z3JpZC1hcmVhOiBzdWJtaXQtYnV0dG9uO1xcblxcdGZvbnQtZmFtaWx5OiAnU3VibGltYSc7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VibWl0LWJ1dHRvbi1iZyk7XFxuXFx0YWxpZ24tc2VsZjogY2VudGVyO1xcblxcdGp1c3RpZnktc2VsZjogY2VudGVyO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcblxcdGhlaWdodDogY2FsYygxLjUqdmFyKC0tcnZ2KSk7XFxuXFx0d2lkdGg6IDk1JTtcXG5cXHRib3JkZXItcmFkaXVzOiBjYWxjKHZhcigtLXJ2dikpO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnN1Ym1pdC1idXR0b24gaW1nIHtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5kaXNwbGF5ZWQtaXRlbSBpbWcge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jaGVja2JveCBpbWcsXFxuLmV4cGFuZCBpbWcge1xcblxcdHdpZHRoOiBjYWxjKHZhcigtLXJ2dikpO1xcbn1cXG5cXG4uZWRpdCBpbWcge1xcblxcdHdpZHRoOiBjYWxjKDAuOCp2YXIoLS1ydnYpKTtcXG59XFxuXFxuLmNoZWNrYm94IHtcXG5cXHRncmlkLWFyZWE6IGNoZWNrYm94O1xcblxcdG1hcmdpbi1sZWZ0OiBjYWxjKDAuMip2YXIoLS1ydnYpKTtcXG59XFxuXFxuLml0ZW0tdGl0bGUge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRib3R0b206IDJweDtcXG5cXHRncmlkLWFyZWE6IHRpdGxlO1xcblxcdGp1c3RpZnktc2VsZjogc3RhcnQ7XFxufVxcblxcbi5leHBhbmRhYmxlLXRpdGxlIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5lZGl0IHtcXG5cXHRncmlkLWFyZWE6IGVkaXQ7XFxufVxcblxcbi5leHBhbmQge1xcblxcdGdyaWQtYXJlYTogZXhwYW5kO1xcbn1cXG5cXG4uc2hyaW5rIHtcXG5cXHRncmlkLWFyZWE6IGV4cGFuZDtcXG5cXHRhc3BlY3QtcmF0aW86IDEgLyAxO1xcbn1cXG5cXG4uc2hyaW5rIGltZyB7XFxuXFx0aGVpZ2h0OiBjYWxjKHZhcigtLXJ2dikpO1xcbn1cXG5cXG4uaXRlbS1kZXNjcmlwdGlvbiB7XFxuXFx0Ym9yZGVyLXJhZGl1czogM3B4O1xcblxcdGZvbnQtc3R5bGU6IGl0YWxpYztcXG5cXHRncmlkLWFyZWE6IGRlc2NyaXB0aW9uO1xcblxcdGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuXFx0anVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xcblxcdGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4uZXhwYW5kZWQtaXRlbSAuZGVsZXRlIHtcXG5cXHRncmlkLWFyZWE6IGRlbGV0ZTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG5cXHRtYXJnaW4tYm90dG9tOiBjYWxjKDAuMyp2YXIoLS1ydnYpKTtcXG59XFxuXFxuLmRlbGV0ZSBpbWcge1xcblxcdGhlaWdodDogY2FsYyh2YXIoLS1ydnYpKTtcXG59XFxuXFxuZm9vdGVyIHtcXG5cXHRoZWlnaHQ6IDV2aDtcXG5cXHRtaW4taGVpZ2h0OiBjYWxjKDAuOCp2YXIoLS1ydnYpKTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aXRsZS1mb290ZXItY29sb3IpO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRmb250LXNpemU6IGNhbGMoMC41KnZhcigtLXJ2dikpO1xcblxcdGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXG5cXHRmb250LWZhbWlseTogJ1N1YmxpbWEnO1xcblxcdGZvbnQtc2l6ZTogY2FsYygwLjQqdmFyKC0tcnZ2KSk7XFxuXFx0bGV0dGVyLXNwYWNpbmc6IGNhbGMoMC4xKnZhcigtLXJ2dikpO1xcblxcdHRleHQtaW5kZW50OiBjYWxjKDAuMSp2YXIoLS1ydnYpKTtcXG59XFxuXFxuLyogZGFyayBtb2RlIHN0eWxpbmc6ICovXFxuXFxuYm9keS5kYXJrIHtcXG5cXHRjb2xvcjogdmFyKC0tZGFyay10ZXh0KTtcXG59XFxuXFxuLnRpdGxlLmRhcmsge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstdGl0bGUtZm9vdGVyLWNvbG9yKTtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZGFyay1ib3JkZXIpO1xcbn1cXG5cXG4ubmF2LmRhcmsge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstbmF2LWJnKTtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZGFyay1ib3JkZXIpO1xcbn1cXG5cXG4ubmF2LmRhcmsgZGl2IHtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWJvcmRlcik7XFxufVxcblxcbi5ub3cuZGFyayB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ub3ctYnV0dG9uKTtcXG59XFxuXFxuLmxhdGVyLmRhcmsge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstbGF0ZXItYnV0dG9uKTtcXG59XFxuXFxuLmFsbC5kYXJrIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWFsbC1idXR0b24pO1xcbn1cXG5cXG4uc2VsZWN0ZWQuZGFyayB7XFxuXFx0Ym94LXNoYWRvdzogMCAwIDAgM3B4IHZhcigtLWRhcmstYnV0dG9uLW91dGxpbmUpO1xcbn1cXG5cXG4ubWFpbi5kYXJrIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLW1haW4tYmcpO1xcbn1cXG5cXG4uZGlzcGxheWVkLWl0ZW0uZGFyayB7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1ib3JkZXIpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstaXRlbS1iZyk7XFxufVxcblxcbi5kaXNwbGF5ZWQtaXRlbS5ub3ctaXRlbS5kYXJrIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLW5vdy1pdGVtLWJnKTtcXG59XFxuXFxuLmRpc3BsYXllZC1pdGVtLmxhdGVyLWl0ZW0uZGFyayB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1sYXRlci1pdGVtLWJnKTtcXG59XFxuXFxuLmNvbXBsZXRlZC1pdGVtIC5pdGVtLXRpdGxlLmRhcmsge1xcblxcdGZpbHRlcjogYnJpZ2h0bmVzcyg4MCUpO1xcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGNhbGMoMC4wNCp2YXIoLS1ydnYpKSB2YXIoLS1kYXJrLXRleHQpO1xcblxcdHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogbm9uZTtcXG59XFxuXFxuLmRpc3BsYXllZC1pdGVtLmFkZC1mb3JtLmRhcmsge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYWRkLWZvcm0tYmcpO1xcbn1cXG5cXG4uZWRpdC1mb3JtLWl0c2VsZi5kYXJrIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWFkZC1mb3JtLWJnKTtcXG59XFxuXFxuLmNsb3NlLWJ1dHRvbi5kYXJrIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNsb3NlLWJ1dHRvbik7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1ib3JkZXIpO1xcbn1cXG5cXG4udGl0bGUtc2VjdGlvbi5kYXJrIGlucHV0LFxcbi5kZXNjcmlwdGlvbi1zZWN0aW9uLmRhcmsgdGV4dGFyZWEge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZm9ybS1pbnB1dC1iZyk7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1ib3JkZXIpO1xcbn1cXG5cXG5pbnB1dC5kYXJrOmZvY3VzLFxcbnRleHRhcmVhLmRhcms6Zm9jdXMge1xcblxcdGJveC1zaGFkb3c6IDAgMCAwIDNweCB2YXIoLS1kYXJrLWlucHV0LWZvY3VzLW91dGxpbmUpO1xcbn1cXG5cXG4ucmFkaW8tb3B0aW9uLmRhcmsge1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstYm9yZGVyKTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLXByaW9yaXR5LWJ1dHRvbi1kZWZhdWx0KTtcXG59XFxuXFxuLm5vdy1vcHRpb24uc2VsZWN0ZWQtcHJpb3JpdHkuZGFyayB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ub3ctYnV0dG9uKTtcXG5cXHRib3gtc2hhZG93OiAwIDAgMCAzcHggdmFyKC0tZGFyay1idXR0b24tb3V0bGluZSk7XFxufVxcblxcbi5sYXRlci1vcHRpb24uc2VsZWN0ZWQtcHJpb3JpdHkuZGFyayB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1sYXRlci1idXR0b24pO1xcblxcdGJveC1zaGFkb3c6IDAgMCAwIDNweCB2YXIoLS1kYXJrLWJ1dHRvbi1vdXRsaW5lKTtcXG59XFxuXFxuLmRpc3BsYXllZC1pdGVtLmFkZC1pdGVtLWJ1dHRvbi5kYXJrIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWFkZC1pdGVtLWJ1dHRvbik7XFxufVxcblxcbi5zdWJtaXQtYnV0dG9uLmRhcmsge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstc3VibWl0LWJ1dHRvbi1iZyk7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1ib3JkZXIpO1xcbn1cXG5cXG5mb290ZXIuZGFyayB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay10aXRsZS1mb290ZXItY29sb3IpO1xcblxcdGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWJvcmRlcik7XFxufVxcblxcbi8qIGRlc2t0b3AgdmVyc2lvbjogKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc1MHB4KSB7XFxuXFxuXFx0Lm5hdiBkaXYge1xcblxcdFxcdHRyYW5zaXRpb246IDAuMDc1cyBsaW5lYXI7XFxuXFx0fVxcblxcblxcdC5uYXYgZGl2OmhvdmVyIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcblxcdH1cXG5cXG5cXHQuY2hlY2tib3gsXFxuXFx0LmVkaXQsXFxuXFx0LmV4cGFuZCxcXG5cXHQuc2hyaW5rLFxcblxcdC5kZWxldGUsXFxuXFx0LmFkZC1pdGVtLWJ1dHRvbixcXG5cXHQucmFkaW8tb3B0aW9uLFxcblxcdC5zdWJtaXQtYnV0dG9uLFxcblxcdC5jbG9zZS1idXR0b24ge1xcblxcdFxcdHRyYW5zaXRpb246IDAuMDc1cyBsaW5lYXI7XFxuXFx0fVxcblxcblxcdC5jaGVja2JveDpob3ZlciB7XFxuXFx0XFx0dHJhbnNmb3JtOiBzY2FsZSgxLjA3NSk7XFxuXFx0fVxcblxcblxcdC5lZGl0OmhvdmVyIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuXFx0fVxcblxcblxcdC5leHBhbmQ6aG92ZXIge1xcblxcdFxcdHRyYW5zZm9ybTogc2NhbGUoMS4yNSk7XFxuXFx0fVxcblxcblxcdC5zaHJpbms6aG92ZXIge1xcblxcdFxcdHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG5cXHR9XFxuXFxuXFx0LmRlbGV0ZTpob3ZlciB7XFxuXFx0XFx0dHJhbnNmb3JtOiBzY2FsZSgxLjA3NSk7XFxuXFx0fVxcblxcblxcdC5hZGQtaXRlbS1idXR0b246aG92ZXIge1xcblxcdFxcdHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuXFx0fVxcblxcblxcdC5yYWRpby1vcHRpb246aG92ZXIge1xcblxcdFxcdHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuXFx0fVxcblxcblxcdC5zdWJtaXQtYnV0dG9uOmhvdmVyIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xcblxcdH1cXG5cXG5cXHQuY2xvc2UtYnV0dG9uOmhvdmVyIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuXFx0fVxcblxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XFxuXFx0LmNvbXBsZXRlZC1pdGVtIC5pdGVtLXRpdGxlLFxcblxcdC5jb21wbGV0ZWQtaXRlbSAuaXRlbS10aXRsZS5kYXJrIHtcXG5cXHRcXHRmb250LXN0eWxlOiBpdGFsaWM7XFxuXFx0XFx0dGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuXFx0XFx0dGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBub25lO1xcblxcdFxcdHRleHQtdW5kZXJsaW5lLW9mZnNldDogMDtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XFxuXFx0Ym9keSB7XFxuXFx0XFx0bWluLWhlaWdodDogMTAwdmg7XFxuXFx0XFx0bWluLXdpZHRoOiAxMDB2dztcXG5cXHR9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBzZXQgYm9keSBoZWlnaHQgdG8gZXhhY3RseSB0aGUgaW5uZXIgaGVpZ2h0IG9mIHRoZSBicm93c2VyIG9uIG5hcnJvdyAobGlrZWx5IG1vYmlsZSkgc2NyZWVuczpcbmNvbnN0IHNldEJvZHlIZWlnaHQgPSAoKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNzUxKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUubWluSGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ICsgXCJweFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUubWluSGVpZ2h0ID0gJzEwMHZoJztcbiAgICB9XG59O1xuXG4vLyBzZXQgYm9keSB3aWR0aCB0byBleGFjdGx5IHRoZSBpbm5lciB3aWR0aCBvZiB0aGUgYnJvd3NlcjpcbmNvbnN0IHNldEJvZHlXaWR0aCA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm1heFdpZHRoID0gd2luZG93LmlubmVyV2lkdGggKyBcInB4XCI7XG59O1xuXG4vLyB3b3JrYXJvdW5kIHRvIGNoZWNrIGZvciBzYWZhcmkgbGFuZHNjYXBlIG9yaWVudGF0aW9uOlxuY29uc3QgY2hlY2tGb3JMYW5kc2NhcGUgPSAoKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gd2luZG93LmlubmVySGVpZ2h0KSB7XG4gICAgICAgIHNldEJvZHkoKTtcbiAgICB9XG59XG5cbmNvbnN0IHNldEJvZHkgPSAoKSA9PiB7XG4gICAgc2V0Qm9keUhlaWdodCgpO1xuICAgIHNldEJvZHlXaWR0aCgpO1xufTtcblxuZXhwb3J0IHsgc2V0Qm9keUhlaWdodCwgc2V0Qm9keVdpZHRoLCBzZXRCb2R5LCBjaGVja0ZvckxhbmRzY2FwZSB9OyIsImltcG9ydCBTYXZlSWNvbiBmcm9tICcuLi9pbWcvc2F2ZS5zdmcnO1xuaW1wb3J0IENsb3NlSWNvbiBmcm9tICcuLi9pbWcvY2xvc2Uuc3ZnJztcbmltcG9ydCB7IGdldEFsbCB9IGZyb20gJy4vbGlzdC5qcyc7XG5pbXBvcnQgeyBcbiAgICBkaXNwbGF5TW9kZSxcbiAgICBzd2l0Y2hUb0RhcmsgfSBmcm9tICcuL3BhZ2UuanMnO1xuaW1wb3J0IHsgYWRkRWRpdEZvcm1MaXN0ZW5lcnMgfSBmcm9tICcuL2xpc3Rlbic7XG5cbmNvbnN0IHJlbmRlckVkaXRGb3JtID0gKGluZGV4KSA9PiB7XG5cbiAgICBjb25zdCBsaXN0ID0gZ2V0QWxsKCk7XG4gICAgY29uc3QgaXRlbSA9IGxpc3RbaW5kZXhdO1xuXG4gICAgLy8gY3JlYXRlIG92ZXJsYXkgZm9yIGJsdXIgYmFja2Ryb3AgZmlsdGVyOlxuICAgIGNvbnN0IGVkaXRCYWNrZHJvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVkaXRCYWNrZHJvcC5jbGFzc0xpc3QuYWRkKCdlZGl0LWJhY2tkcm9wJyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlZGl0QmFja2Ryb3ApO1xuXG4gICAgLy8gY3JlYXRlIGVkaXQgZm9ybSBjb250YWluZXI6XG4gICAgY29uc3QgZWRpdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlZGl0Rm9ybS5jbGFzc0xpc3QuYWRkKCdlZGl0LWZvcm0nKTtcblxuICAgIC8vIGFkZCBlZGl0IGZvcm0gdG8gdGhlIERPTTpcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGVkaXRGb3JtKTtcblxuICAgICAgICAvLyBjcmVhdGUgdGhlIGZvcm0gaXRzZWxmOlxuICAgICAgICBjb25zdCBmb3JtSXRzZWxmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICBmb3JtSXRzZWxmLmNsYXNzTGlzdC5hZGQoJ2VkaXQtZm9ybS1pdHNlbGYnKTtcbiAgICAgICAgZm9ybUl0c2VsZi5kYXRhc2V0LmlkID0gaW5kZXg7XG4gICAgICAgIGZvcm1JdHNlbGYuc2V0QXR0cmlidXRlKCdtZXRob2QnLCAnJyk7XG4gICAgICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKGZvcm1JdHNlbGYpO1xuXG4gICAgICAgICAgICAvLyBjcmVhdGUgdGhlIGZvcm0gdGl0bGU6XG4gICAgICAgICAgICBjb25zdCBmb3JtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGZvcm1UaXRsZS5jbGFzc0xpc3QuYWRkKCdmb3JtLXRpdGxlJyk7XG4gICAgICAgICAgICBmb3JtSXRzZWxmLmFwcGVuZENoaWxkKGZvcm1UaXRsZSk7XG4gICAgICAgICAgICBjb25zdCBmb3JtVGl0bGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgZm9ybVRpdGxlVGV4dC5jbGFzc0xpc3QuYWRkKCdmb3JtLXRpdGxlLXRleHQnLCAnZWRpdC1mb3JtLXRpdGxlLXRleHQnKTtcbiAgICAgICAgICAgIGZvcm1UaXRsZVRleHQudGV4dENvbnRlbnQgPSBgZWRpdGluZyAnJHtpdGVtLnRpdGxlfSdgO1xuICAgICAgICAgICAgZm9ybVRpdGxlLmFwcGVuZENoaWxkKGZvcm1UaXRsZVRleHQpO1xuXG4gICAgICAgICAgICAvLyBjcmVhdGUgYW4gJ1gnIGJ1dHRvbiB0byBjbG9zZSBvdXQgb2YgdGhlIGZvcm06XG4gICAgICAgICAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY2xvc2VCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2xvc2UtYnV0dG9uJywgJ2VkaXQtY2xvc2UtYnV0dG9uJyk7XG4gICAgICAgICAgICBmb3JtVGl0bGUuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xuICAgICAgICAgICAgY29uc3QgY2xvc2VJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBjbG9zZUljb24uc2V0QXR0cmlidXRlKCdzcmMnLCBDbG9zZUljb24pO1xuICAgICAgICAgICAgY2xvc2VCdXR0b24uYXBwZW5kQ2hpbGQoY2xvc2VJY29uKTtcblxuICAgICAgICAgICAgLy8gY3JlYXRlIHRoZSBmb3JtIGVsZW1lbnRzOlxuXG4gICAgICAgICAgICAgICAgLy8gdGl0bGUgc2VjdGlvbjpcbiAgICAgICAgICAgICAgICBjb25zdCB0aXRsZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICB0aXRsZVNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnZm9ybS1lbGVtZW50JywgJ3RpdGxlLXNlY3Rpb24nLCAnZWRpdC10aXRsZS1zZWN0aW9uJyk7XG4gICAgICAgICAgICAgICAgZm9ybUl0c2VsZi5hcHBlbmRDaGlsZCh0aXRsZVNlY3Rpb24pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHRpdGxlIGxhYmVsOlxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0aXRsZScpO1xuICAgICAgICAgICAgICAgICAgICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gJ3RpdGxlOic7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlU2VjdGlvbi5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyB0aXRsZSBpbnB1dDpcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVJbnB1dC5jbGFzc0xpc3QuYWRkKCd0aXRsZS1pbnB1dCcsICdlZGl0LXRpdGxlLWlucHV0Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3RpdGxlJyk7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICd0aXRsZScpO1xuICAgICAgICAgICAgICAgICAgICB0aXRsZUlucHV0LnZhbHVlID0gaXRlbS50aXRsZTtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlU2VjdGlvbi5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcblxuXG4gICAgICAgICAgICAgICAgLy8gZGVzY3JpcHRpb24gc2VjdGlvbjpcbiAgICAgICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvblNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnZm9ybS1lbGVtZW50JywgJ2Rlc2NyaXB0aW9uLXNlY3Rpb24nLCAnZWRpdC1kZXNjcmlwdGlvbi1zZWN0aW9uJyk7XG4gICAgICAgICAgICAgICAgZm9ybUl0c2VsZi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblNlY3Rpb24pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGRlc2NyaXB0aW9uIGxhYmVsOlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbkxhYmVsLnRleHRDb250ZW50ID0gJ2Rlc2NyaXB0aW9uIChvcHRpb25hbCk6JztcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25TZWN0aW9uLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGRlc2NyaXB0aW9uIGlucHV0OlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbi1pbnB1dCcsICdlZGl0LWRlc2NyaXB0aW9uLWlucHV0Jyk7XG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdkZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbklucHV0LnZhbHVlID0gaXRlbS5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25TZWN0aW9uLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpO1xuXG5cbiAgICAgICAgICAgICAgICAvLyBwcmlvcml0eSBmaWVsZHNldDpcbiAgICAgICAgICAgICAgICBjb25zdCBmaWVsZHNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0Jyk7XG4gICAgICAgICAgICAgICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktc2VjdGlvbicsICdlZGl0LXByaW9yaXR5LXNlY3Rpb24nKTtcbiAgICAgICAgICAgICAgICBmb3JtSXRzZWxmLmFwcGVuZENoaWxkKGZpZWxkc2V0KTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBwcmlvcml0eSBsYWJlbDpcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eUxhYmVsLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWxhYmVsJywgJ2VkaXQtcHJpb3JpdHktbGFiZWwnKTtcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdwcmlvcml0eTonO1xuICAgICAgICAgICAgICAgICAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyAnTk9XJyBwcmlvcml0eSByYWRpbyBvcHRpb246XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vd09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBub3dPcHRpb24uY2xhc3NMaXN0LmFkZCgncmFkaW8tb3B0aW9uJywgJ25vdy1vcHRpb24nLCAnZWRpdC1ub3ctb3B0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKG5vd09wdGlvbik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5PVyBpbnB1dCAmIGxhYmVsOlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm93SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm93SW5wdXQuY2xhc3NMaXN0LmFkZCgncmFkaW8taW5wdXQnLCAnZWRpdC1yYWRpby1pbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0ucHJpb3JpdHkgPT09ICdub3cnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm93T3B0aW9uLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkLXByaW9yaXR5Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBub3dJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vd0lucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbm93Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3dJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJpb3JpdHknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vd0lucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnbm93Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3dPcHRpb24uYXBwZW5kQ2hpbGQobm93SW5wdXQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBub3dMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3dMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdub3cnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vd0xhYmVsLnRleHRDb250ZW50ID0gJ25vdyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3dPcHRpb24uYXBwZW5kQ2hpbGQobm93TGFiZWwpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vICdMQVRFUicgcHJpb3JpdHkgcmFkaW8gb3B0aW9uOlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXRlck9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBsYXRlck9wdGlvbi5jbGFzc0xpc3QuYWRkKCdyYWRpby1vcHRpb24nLCAnbGF0ZXItb3B0aW9uJywgJ2VkaXQtbGF0ZXItb3B0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGxhdGVyT3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBMQVRFUiBpbnB1dCAmIGxhYmVsOlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGF0ZXJJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXRlcklucHV0LmNsYXNzTGlzdC5hZGQoJ3JhZGlvLWlucHV0JywgJ2VkaXQtcmFkaW8taW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnByaW9yaXR5ID09PSAnbGF0ZXInKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF0ZXJPcHRpb24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQtcHJpb3JpdHknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxhdGVySW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXRlcklucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbGF0ZXInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhdGVySW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3ByaW9yaXR5Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXRlcklucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnbGF0ZXInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhdGVyT3B0aW9uLmFwcGVuZENoaWxkKGxhdGVySW5wdXQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXRlckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhdGVyTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbGF0ZXInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhdGVyTGFiZWwudGV4dENvbnRlbnQgPSAnbGF0ZXInO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF0ZXJPcHRpb24uYXBwZW5kQ2hpbGQobGF0ZXJMYWJlbCk7XG5cbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhIG5ldyAnYWRkJyBidXR0b24gYXQgdGhlIGJvdHRvbSBvZiB0aGUgZm9ybTpcbiAgICAgICAgICAgIGNvbnN0IGZvcm1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGZvcm1CdXR0b24uY2xhc3NMaXN0LmFkZCgnc3VibWl0LWJ1dHRvbicsICdlZGl0LXN1Ym1pdC1idXR0b24nKTtcbiAgICAgICAgICAgIGZvcm1CdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICAgICAgICAgICAgZm9ybUl0c2VsZi5hcHBlbmRDaGlsZChmb3JtQnV0dG9uKTtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1CdXR0b25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBmb3JtQnV0dG9uSWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsIFNhdmVJY29uKTtcbiAgICAgICAgICAgIGZvcm1CdXR0b24uYXBwZW5kQ2hpbGQoZm9ybUJ1dHRvbkljb24pO1xuICAgIFxuICAgIC8vIHJlbmRlciB0aGUgZWRpdCBmb3JtIGluIGRhcmsgbW9kZSBpZiBpdCdzIHR1cm5lZCBvbjpcbiAgICBpZiAoZGlzcGxheU1vZGUgPT09ICdkYXJrJykge1xuICAgICAgICBzd2l0Y2hUb0RhcmsoKTtcbiAgICB9XG5cbiAgICBhZGRFZGl0Rm9ybUxpc3RlbmVycygpO1xuXG59XG5cbmV4cG9ydCB7IHJlbmRlckVkaXRGb3JtIH0iLCJpbXBvcnQgJy4uL3N0eWxlLmNzcyc7XG5cbmltcG9ydCB7IHJldHJpZXZlU3RvcmVkTGlzdCB9IGZyb20gJy4vbGlzdC5qcyc7XG5cbmltcG9ydCB7IHJlbmRlckhlYWRlckZvb3RlciwgcmVuZGVyTm93LCBzdHlsZUxpZ2h0SWNvbiwgc3dpdGNoVG9MaWdodCB9IGZyb20gJy4vcGFnZS5qcyc7XG5cbmltcG9ydCB7IGFkZEluaXRpYWxMaXN0ZW5lcnMgfSBmcm9tICcuL2xpc3Rlbi5qcyc7XG5cbnJlbmRlckhlYWRlckZvb3RlcigpO1xuXG5hZGRJbml0aWFsTGlzdGVuZXJzKCk7XG5cbnJldHJpZXZlU3RvcmVkTGlzdCgpO1xuXG5yZW5kZXJOb3coKTtcblxuLy8gc2V0IGxpZ2h0IG1vZGUgYXMgZGVmYXVsdDpcbnN3aXRjaFRvTGlnaHQoKTtcbnN0eWxlTGlnaHRJY29uKCk7IiwiLy8gY3JlYXRlIGVtcHR5IHRvZG9MaXN0IGFycmF5OlxubGV0IHRvZG9MaXN0ID0gW107XG5cbi8vIHJldHJpZXZlIHRoZSB0b2RvTGlzdCBhcnJheSBmcm9tIGxvY2FsU3RvcmFnZTpcbmNvbnN0IHJldHJpZXZlU3RvcmVkTGlzdCA9ICgpID0+IHtcblxuICAgIC8vIGZpcnN0LCBjaGVjayBpZiB0by1kbyBhcnJheSBpcyBzdG9yZWQgaW4gbG9jYWxTdG9yYWdlOlxuICAgIGNvbnN0IHN0b3JlZFRvZG9MaXN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9MaXN0Jyk7XG4gICAgLy8gaWYgdGhlcmUgaXMgYSBzdG9yZWRUb2RvTGlzdCwgZ2V0IGl0IGFuZCBzYXZlIGl0IHRvIHJldHJpZXZlZExpc3Q6XG4gICAgaWYgKHN0b3JlZFRvZG9MaXN0KSB7XG4gICAgICAgIGNvbnN0IHJldHJpZXZlZExpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvTGlzdCcpKTtcbiAgICAgICAgXG4gICAgICAgIC8vIHNldCB0aGUgbG9jYWwgdG9kb0xpc3QgYXJyYXkgdG8gdGhlIGxpc3QgcmV0cmlldmVkIGZyb20gc3RvcmFnZTpcbiAgICAgICAgdG9kb0xpc3QgPSByZXRyaWV2ZWRMaXN0O1xuICAgIH1cbn1cblxuLy8gc2F2ZSB0aGUgbGlzdCB0byBsb2NhbFN0b3JhZ2U6XG5jb25zdCBzYXZlVG9TdG9yYWdlID0gKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvTGlzdCcsIEpTT04uc3RyaW5naWZ5KHRvZG9MaXN0KSk7XG59XG5cbi8vIFRvZG8gb2JqZWN0IGNvbnN0cnVjdG9yOlxuZnVuY3Rpb24gVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBjb21wbGV0ZWQpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcbn07XG5cbi8vIG1ldGhvZCB0byBjcmVhdGUgYSBuZXcgVG9kbyBvYmplY3QgYW5kIGFkZCBpdCB0byB0aGUgdG9kb0xpc3QgYXJyYXk6XG5jb25zdCBjcmVhdGVUb2RvID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGNvbXBsZXRlZCkgPT4ge1xuICAgIGNvbnN0IG5ld1RvZG8gPSBuZXcgVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBjb21wbGV0ZWQpO1xuICAgIHRvZG9MaXN0LnB1c2gobmV3VG9kbyk7XG4gICAgc2F2ZVRvU3RvcmFnZSgpO1xufTtcblxuLy8gZ2V0IHRoZSBjb21wbGV0ZSBjdXJyZW50IGxpc3Q6XG5jb25zdCBnZXRBbGwgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRvZG9MaXN0O1xufTtcblxuLy8gZ2V0IHRoZSBpdGVtcyB3aXRoICdub3cnIHByaW9yaXR5OlxuY29uc3QgZ2V0Tm93ID0gKCkgPT4ge1xuICAgIGNvbnN0IG5vd0l0ZW1zID0gdG9kb0xpc3QuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoaXRlbS5wcmlvcml0eSA9PT0gJ25vdycpIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG5vd0l0ZW1zO1xufTtcblxuLy8gZ2V0IHRoZSBpdGVtcyB3aXRoICdsYXRlcicgcHJpb3JpdHk6XG5jb25zdCBnZXRMYXRlciA9ICgpID0+IHtcbiAgICBjb25zdCBsYXRlckl0ZW1zID0gdG9kb0xpc3QuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoaXRlbS5wcmlvcml0eSA9PT0gJ2xhdGVyJykge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbGF0ZXJJdGVtcztcbn07XG5cbmNvbnN0IGdldERlc2NyaXB0aW9uID0gKGlkKSA9PiB7XG4gICAgcmV0dXJuIHRvZG9MaXN0W2lkXS5kZXNjcmlwdGlvbjtcbn07XG5cbmNvbnN0IGdldENvbXBsZXRlZCA9IChpZCkgPT4ge1xuICAgIHJldHVybiB0b2RvTGlzdFtpZF0uY29tcGxldGVkO1xufVxuXG4vLyByZW1vdmUgYSBUb2RvIG9iamVjdCBmcm9tIHRoZSB0b2RvTGlzdCBhcnJheSBieSB1c2luZyBpdHMgRE9NIGlkIGFzIGl0cyBhcnJheSBpbmRleDpcbmNvbnN0IGRlbGV0ZVRvZG8gPSAoaWQpID0+IHtcbiAgICB0b2RvTGlzdC5zcGxpY2UoaWQsIDEpO1xuICAgIHNhdmVUb1N0b3JhZ2UoKTtcbn1cblxuLy8gZWRpdCBhIHByb3BlcnR5IG9mIGEgVG9kbyBvYmplY3Q6XG5jb25zdCBlZGl0VG9kbyA9IChpZCwgcHJvcGVydHksIG5ld1ZhbHVlKSA9PiB7XG4gICAgdG9kb0xpc3RbaWRdW3Byb3BlcnR5XSA9IG5ld1ZhbHVlO1xuICAgIHNhdmVUb1N0b3JhZ2UoKTtcbn07XG5cbmV4cG9ydCB7IFxuICAgIGNyZWF0ZVRvZG8sIFxuICAgIGdldEFsbCwgXG4gICAgZ2V0Tm93LCBcbiAgICBnZXRMYXRlciwgXG4gICAgZ2V0RGVzY3JpcHRpb24sIFxuICAgIGdldENvbXBsZXRlZCwgXG4gICAgZGVsZXRlVG9kbywgXG4gICAgZWRpdFRvZG8sXG4gICAgcmV0cmlldmVTdG9yZWRMaXN0LFxuICAgIHNhdmVUb1N0b3JhZ2Vcbn0iLCJpbXBvcnQgeyBjaGVja0ZvckxhbmRzY2FwZSwgc2V0Qm9keSB9IGZyb20gJy4vYm9keS5qcyc7XG5pbXBvcnQgeyBcbiAgICByZW5kZXJOb3csIFxuICAgIHJlbmRlckxhdGVyLCBcbiAgICByZW5kZXJBbGwsIFxuICAgIGV4cGFuZEl0ZW0sXG4gICAgc2hyaW5rSXRlbSwgXG4gICAgZ2V0Q3VycmVudFZpZXcsXG4gICAgY2hlY2tDaGVja2JveCxcbiAgICB1bmNoZWNrQ2hlY2tib3gsXG4gICAgcmVuZGVyQWRkRm9ybSxcbiAgICBzdHlsZVJhZGlvT3B0aW9uLFxuICAgIHN1Ym1pdEZvcm0sXG4gICAgcmVtb3ZlRm9ybSwgXG4gICAgc3dpdGNoVG9MaWdodCxcbiAgICBzd2l0Y2hUb0RhcmssXG4gICAgc3R5bGVMaWdodEljb24sXG4gICAgc3R5bGVEYXJrSWNvbixcbiAgICBzaG93RWRpdFBvcHVwLFxuICAgIHN1Ym1pdEVkaXRGb3JtLFxuICAgIHJlbW92ZUVkaXRGb3JtIH0gZnJvbSAnLi9wYWdlLmpzJztcbmltcG9ydCB7IGRlbGV0ZVRvZG8sIGVkaXRUb2RvLCBnZXRDb21wbGV0ZWQgfSBmcm9tICcuL2xpc3QuanMnO1xuXG4vLyBldmVudCBsaXN0ZW5lcnMgdG8gYWRkIHdoZW4gdGhlIHBhZ2UgZmlyc3QgbG9hZHM6XG5jb25zdCBhZGRJbml0aWFsTGlzdGVuZXJzID0gKCkgPT4ge1xuXG4gICAgLy8gc2V0IGluaXRpYWwgYm9keSBoZWlnaHQgJiB3aWR0aC4uXG4gICAgc2V0Qm9keSgpO1xuXG4gICAgLy8gdGhlbiBhZGp1c3QgYm9keSBoZWlnaHQgJiB3aWR0aCBpZiBuZWVkZWQgd2hlbmV2ZXIgdGhlIHdpbmRvdyBpcyByZXNpemVkLCBvciB3aGVuIHRoZSBzY3JlZW4gb3JpZW50YXRpb24gY2hhbmdlczpcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc2V0Qm9keSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGNoZWNrRm9yTGFuZHNjYXBlKTtcbiAgICAvLyBpZiBicm93c2VyIGlzIG5vdCBzYWZhcmk6XG4gICAgaWYgKCEobmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiU2FmYXJpXCIpICE9IC0xICkpIHtcbiAgICAgICAgc2NyZWVuLm9yaWVudGF0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHNldEJvZHkpO1xuICAgICAgICBzY3JlZW4ub3JpZW50YXRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgY2hlY2tGb3JMYW5kc2NhcGUpO1xuICAgIH1cbiAgICBcbiAgICAvLyBhZGQgY2xpY2sgbGlzdGVuZXJzIHRvIG5hdiBidXR0b25zIHRvIHRyaWdnZXIgcmVuZGVyIGZ1bmN0aW9uczpcbiAgICBjb25zdCBub3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm93Jyk7XG4gICAgbm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVuZGVyTm93KTtcblxuICAgIGNvbnN0IGxhdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxhdGVyJyk7XG4gICAgbGF0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXJMYXRlcik7XG5cbiAgICBjb25zdCBhbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsJyk7XG4gICAgYWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVuZGVyQWxsKTtcblxuICAgIC8vIGFkZCBsaXN0ZW5lcnMgdG8gbGlnaHQvZGFyayBtb2RlIGRpc3BsYXkgaWNvbnM6XG4gICAgY29uc3QgbGlnaHRJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpZ2h0LW1vZGUnKTtcbiAgICBsaWdodEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzd2l0Y2hUb0xpZ2h0KTtcbiAgICBsaWdodEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdHlsZUxpZ2h0SWNvbik7XG5cbiAgICBjb25zdCBkYXJrSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXJrLW1vZGUnKTtcbiAgICBkYXJrSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN3aXRjaFRvRGFyayk7XG4gICAgZGFya0ljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdHlsZURhcmtJY29uKTtcblxufVxuXG5jb25zdCBhZGRBZGRMaXN0ZW5lciA9ICgpID0+IHtcbiAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWl0ZW0tYnV0dG9uJyk7XG4gICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVuZGVyQWRkRm9ybSk7XG59XG5cbmNvbnN0IGFkZEZvcm1MaXN0ZW5lcnMgPSAoKSA9PiB7XG5cbiAgICAvLyBhZGQgY2xvc2UgYnV0dG9uIGxpc3RlbmVyOlxuICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLWJ1dHRvbicpO1xuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlRm9ybSk7XG5cbiAgICAvLyBhZGQgcmFkaW8gaW5wdXQgbGlzdGVuZXJzOlxuICAgIGNvbnN0IHJhZGlvSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJhZGlvLWlucHV0Jyk7XG4gICAgcmFkaW9JbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICAgICAgICBzdHlsZVJhZGlvT3B0aW9uKGUpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIGFkZCBzdWJtaXQgbGlzdGVuZXI6XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtZm9ybS1pdHNlbGYnKTtcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc3VibWl0Rm9ybSgpO1xuICAgIH0pO1xufVxuXG5jb25zdCBhZGRFZGl0Rm9ybUxpc3RlbmVycyA9ICgpID0+IHtcblxuICAgIC8vIGFkZCBjbG9zZSBidXR0b24gbGlzdGVuZXI6XG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1jbG9zZS1idXR0b24nKTtcbiAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZUVkaXRGb3JtKTtcblxuICAgIC8vIGFkZCByYWRpbyBpbnB1dCBsaXN0ZW5lcnM6XG4gICAgY29uc3QgcmFkaW9JbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmFkaW8taW5wdXQnKTtcbiAgICByYWRpb0lucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgICAgICAgIHN0eWxlUmFkaW9PcHRpb24oZSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gYWRkIHN1Ym1pdCBsaXN0ZW5lcjpcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtZm9ybS1pdHNlbGYnKTtcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc3VibWl0RWRpdEZvcm0oZSk7XG4gICAgfSk7XG59XG5cbi8vIGV2ZW50IGxpc3RlbmVycyB0byBvcGVuIGV4cGFuZGVkIHZpZXcgb2YgaXRlbXM6XG5jb25zdCBhZGRFeHBhbmRMaXN0ZW5lcnMgPSAoKSA9PiB7XG5cbiAgICAvLyBhZGQgbGlzdGVuZXJzIHRvIGFsbCBpdGVtIHRpdGxlIHRleHQ6XG4gICAgY29uc3QgaXRlbVRpdGxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5leHBhbmRhYmxlLXRpdGxlJyk7XG4gICAgaXRlbVRpdGxlcy5mb3JFYWNoKHRpdGxlID0+IHtcbiAgICAgICAgdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBleHBhbmRJdGVtKTtcbiAgICB9KTtcblxuICAgIC8vIGFkZCBsaXN0ZW5lcnMgdG8gYWxsIGV4cGFuZCBpY29uczpcbiAgICBjb25zdCBleHBhbmRJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Rpdi5leHBhbmQnKTtcbiAgICBleHBhbmRJY29ucy5mb3JFYWNoKGljb24gPT4ge1xuICAgICAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXhwYW5kSXRlbSk7XG4gICAgfSk7XG59XG5cbi8vIGNoZWNrYm94IGxpc3RlbmVyIHRvIGFkZCB0byBlYWNoIGl0ZW0gYXMgaXQgaXMgcmVuZGVyZWQ6XG5jb25zdCBhZGRDaGVja2JveExpc3RlbmVyID0gKGlkKSA9PiB7XG5cbiAgICBjb25zdCBwYXJlbnRJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9JyR7aWR9J2ApO1xuICAgIGNvbnN0IGl0ZW1DaGVja2JveCA9IHBhcmVudEl0ZW0uZmlyc3RDaGlsZDtcbiAgICBpdGVtQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cbiAgICAgICAgLy8gaWYgdG9kbyBpcyBub3QgY29tcGxldGVkLCBtYXJrIGl0IGFzIGNvbXBsZXRlZDpcbiAgICAgICAgY29uc3QgY29tcGxldGVkU3RhdHVzID0gZ2V0Q29tcGxldGVkKGlkKTtcbiAgICAgICAgaWYgKGNvbXBsZXRlZFN0YXR1cyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGVkaXRUb2RvKGlkLCAnY29tcGxldGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICAvLyB0aGVuIGNoYW5nZSB0aGUgRE9NIGVsZW1lbnQncyBjbGFzcyAmIHN0eWxpbmcgc28gdGhlIHZpZXcgZG9lc24ndCBoYXZlIHRvIGJlIHJlLXJlbmRlcmVkOlxuICAgICAgICAgICAgcGFyZW50SXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdpbmNvbXBsZXRlLWl0ZW0nKTtcbiAgICAgICAgICAgIHBhcmVudEl0ZW0uY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkLWl0ZW0nKTtcbiAgICAgICAgICAgIC8vIGFuZCBjaGVjayB0aGUgYm94OlxuICAgICAgICAgICAgY2hlY2tDaGVja2JveChpdGVtQ2hlY2tib3gpO1xuXG4gICAgICAgIC8vIGlmIHRvZG8gaXMgY29tcGxldGVkLCBtYXJrIGl0IGFzIGluY29tcGxldGU6XG4gICAgICAgIH0gZWxzZSBpZiAoY29tcGxldGVkU3RhdHVzID09PSB0cnVlKSB7XG4gICAgICAgICAgICBlZGl0VG9kbyhpZCwgJ2NvbXBsZXRlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgIHBhcmVudEl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGVkLWl0ZW0nKTtcbiAgICAgICAgICAgIHBhcmVudEl0ZW0uY2xhc3NMaXN0LmFkZCgnaW5jb21wbGV0ZS1pdGVtJyk7XG4gICAgICAgICAgICAvLyBhbmQgdW5jaGVjayB0aGUgYm94OlxuICAgICAgICAgICAgdW5jaGVja0NoZWNrYm94KGl0ZW1DaGVja2JveCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuLy8gZWRpdCBpY29uIGxpc3RlbmVyIHRvIGFkZCB0byBlYWNoIGl0ZW0gYXMgaXQgaXMgcmVuZGVyZWQ6XG5jb25zdCBhZGRFZGl0SWNvbkxpc3RlbmVyID0gKGlkKSA9PiB7XG4gICAgY29uc3QgaXRlbVRvRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPScke2lkfSdgKTtcbiAgICBjb25zdCBlZGl0SWNvbiA9IGl0ZW1Ub0VkaXQuY2hpbGRyZW5bMl0uZmlyc3RDaGlsZDtcbiAgICBlZGl0SWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dFZGl0UG9wdXApO1xufVxuXG5jb25zdCBhZGREZWxldGVMaXN0ZW5lclRvSXRlbVdpdGhvdXREZXNjcmlwdGlvbiA9IChkZWxldGVJY29uLCBpZCkgPT4ge1xuICAgIGRlbGV0ZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIC8vIGRlbGV0ZSBpdGVtOlxuICAgICAgICBkZWxldGVUb2RvKGlkKTtcbiAgICAgICAgLy8gdGhlbiBjaGVjayB0aGUgdXNlcidzIGN1cnJlbnQgcGFnZSBiZWZvcmUgcmUtcmVuZGVyaW5nOlxuICAgICAgICBjb25zdCBjdXJyZW50VmlldyA9IGdldEN1cnJlbnRWaWV3KCk7XG4gICAgICAgIGlmIChjdXJyZW50VmlldyA9PT0gJ25vdycpIHtcbiAgICAgICAgICAgIHJlbmRlck5vdygpO1xuICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRWaWV3ID09PSAnbGF0ZXInKSB7XG4gICAgICAgICAgICByZW5kZXJMYXRlcigpO1xuICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRWaWV3ID09PSAnYWxsJykge1xuICAgICAgICAgICAgcmVuZGVyQWxsKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuLy8gZXZlbnQgbGlzdGVuZXJzIChmb3IgZGVsZXRlIGFuZCBzaHJpbmsgYWN0aW9ucykgdG8gYWRkIHRvIGFuIGl0ZW0gd2hlbiBpdCBpcyBleHBhbmRlZDpcbmNvbnN0IGFkZExpc3RlbmVyc1RvRXhwYW5kZWRJdGVtID0gKGlkKSA9PiB7XG5cbiAgICAvLyBhZGQgbGlzdGVuZXIgdG8gZGVsZXRlIGljb246XG4gICAgY29uc3QgcGFyZW50SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPScke2lkfSdgKTtcbiAgICBjb25zdCBkZWxldGVJY29uID0gcGFyZW50SXRlbS5sYXN0Q2hpbGQ7XG4gICAgZGVsZXRlSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgLy8gZGVsZXRlIGl0ZW06XG4gICAgICAgIGRlbGV0ZVRvZG8oaWQpO1xuICAgICAgICAvLyB0aGVuIGNoZWNrIHRoZSB1c2VyJ3MgY3VycmVudCBwYWdlIGJlZm9yZSByZS1yZW5kZXJpbmc6XG4gICAgICAgIGNvbnN0IGN1cnJlbnRWaWV3ID0gZ2V0Q3VycmVudFZpZXcoKTtcbiAgICAgICAgaWYgKGN1cnJlbnRWaWV3ID09PSAnbm93Jykge1xuICAgICAgICAgICAgcmVuZGVyTm93KCk7XG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFZpZXcgPT09ICdsYXRlcicpIHtcbiAgICAgICAgICAgIHJlbmRlckxhdGVyKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFZpZXcgPT09ICdhbGwnKSB7XG4gICAgICAgICAgICByZW5kZXJBbGwoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gYWRkIGxpc3RlbmVyIHRvIHNocmluayBpY29uOlxuICAgIGNvbnN0IGljb24gPSBwYXJlbnRJdGVtLmNoaWxkcmVuWzNdO1xuICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBzaHJpbmtJdGVtKGUpO1xuICAgIH0pO1xufVxuXG4vLyByZW1vdmUgY2xpY2sgbGlzdGVuZXJzIGZyb20gYW4gZXhwYW5kZWQgaXRlbSBhcyB0aGV5IGFyZSBubyBsb25nZXIgbmVjZXNzYXJ5OlxuY29uc3QgcmVtb3ZlTGlzdGVuZXJzRnJvbUV4cGFuZGVkSXRlbSA9IChpZCkgPT4ge1xuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD0nJHtpZH0nYCk7XG4gICAgY29uc3QgaXRlbVRpdGxlID0gaXRlbS5jaGlsZHJlblsxXTtcbiAgICBpdGVtVGl0bGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBleHBhbmRJdGVtKTtcbiAgICBjb25zdCBpdGVtSWNvbiA9IGl0ZW0uY2hpbGRyZW5bMl07XG4gICAgaXRlbUljb24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBleHBhbmRJdGVtKTtcbn1cblxuLy8gZnVuY3Rpb24gdG8gYXR0YWNoIG5ldyBleHBhbmQgY2xpY2sgbGlzdGVuZXIgb24gaXRlbSBlbGVtZW50cyAtLSB0aGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIHRoZSBsaXN0ZW5lcnMgYXJlIHJlbW92ZWQgd2hlbiB0aGUgaXRlbSBleHBhbmRzLlxuY29uc3QgcmVwbGFjZUV4cGFuZExpc3RlbmVyID0gKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXhwYW5kSXRlbSk7XG59XG5cbmV4cG9ydCB7IFxuICAgIGFkZEluaXRpYWxMaXN0ZW5lcnMsIFxuICAgIGFkZEV4cGFuZExpc3RlbmVycywgXG4gICAgYWRkTGlzdGVuZXJzVG9FeHBhbmRlZEl0ZW0sXG4gICAgcmVtb3ZlTGlzdGVuZXJzRnJvbUV4cGFuZGVkSXRlbSxcbiAgICBhZGRDaGVja2JveExpc3RlbmVyLFxuICAgIHJlcGxhY2VFeHBhbmRMaXN0ZW5lcixcbiAgICBhZGRBZGRMaXN0ZW5lcixcbiAgICBhZGRFZGl0Rm9ybUxpc3RlbmVycyxcbiAgICBhZGRGb3JtTGlzdGVuZXJzLFxuICAgIGFkZERlbGV0ZUxpc3RlbmVyVG9JdGVtV2l0aG91dERlc2NyaXB0aW9uLFxuICAgIGFkZEVkaXRJY29uTGlzdGVuZXJcbn0iLCJpbXBvcnQgeyBcbiAgICBnZXRBbGwsIFxuICAgIGdldE5vdywgXG4gICAgZ2V0TGF0ZXIsIFxuICAgIGdldERlc2NyaXB0aW9uLFxuICAgIGNyZWF0ZVRvZG8sIFxuICAgIGVkaXRUb2RvfSBmcm9tICcuL2xpc3QuanMnO1xuXG5pbXBvcnQgeyBcbiAgICBhZGRFeHBhbmRMaXN0ZW5lcnMsIFxuICAgIGFkZExpc3RlbmVyc1RvRXhwYW5kZWRJdGVtLFxuICAgIHJlbW92ZUxpc3RlbmVyc0Zyb21FeHBhbmRlZEl0ZW0sIFxuICAgIGFkZENoZWNrYm94TGlzdGVuZXIsXG4gICAgcmVwbGFjZUV4cGFuZExpc3RlbmVyLFxuICAgIGFkZEFkZExpc3RlbmVyLFxuICAgIGFkZEZvcm1MaXN0ZW5lcnMsIFxuICAgIGFkZERlbGV0ZUxpc3RlbmVyVG9JdGVtV2l0aG91dERlc2NyaXB0aW9uLFxuICAgIGFkZEVkaXRJY29uTGlzdGVuZXJ9IGZyb20gJy4vbGlzdGVuLmpzJztcblxuaW1wb3J0IHsgcmVuZGVyRWRpdEZvcm0gfSBmcm9tICcuL2VkaXQuanMnO1xuXG5pbXBvcnQgQ2hlY2tlZENoZWNrYm94SWNvbiBmcm9tICcuLi9pbWcvY2hlY2tlZC1jaGVja2JveC5zdmcnO1xuaW1wb3J0IEVtcHR5Q2hlY2tib3hJY29uIGZyb20gJy4uL2ltZy9lbXB0eS1jaGVja2JveC5zdmcnO1xuaW1wb3J0IEV4cGFuZEljb24gZnJvbSAnLi4vaW1nL2V4cGFuZC5zdmcnO1xuaW1wb3J0IFNocmlua0ljb24gZnJvbSAnLi4vaW1nL3Nocmluay5zdmcnO1xuaW1wb3J0IERlbGV0ZUljb24gZnJvbSAnLi4vaW1nL2RlbGV0ZS5zdmcnO1xuaW1wb3J0IEFkZEljb24gZnJvbSAnLi4vaW1nL2FkZC5zdmcnO1xuaW1wb3J0IENsb3NlSWNvbiBmcm9tICcuLi9pbWcvY2xvc2Uuc3ZnJztcbmltcG9ydCBGYXZJY29uIGZyb20gJy4uL2ltZy9mYXZpY29uLnBuZyc7XG5pbXBvcnQgRGFya0ljb24gZnJvbSAnLi4vaW1nL2Rhcmsuc3ZnJztcbmltcG9ydCBMaWdodEljb24gZnJvbSAnLi4vaW1nL2xpZ2h0LnN2Zyc7XG5pbXBvcnQgRWRpdEljb24gZnJvbSAnLi4vaW1nL2VkaXQuc3ZnJztcblxuLy8gY3JlYXRlIGN1cnJlbnRWaWV3IHZhcmlhYmxlIHRvIHRyYWNrIHRoZSBjdXJyZW50IHBhZ2UgZGlzcGxheTpcbmxldCBjdXJyZW50VmlldztcblxuY29uc3QgdXBkYXRlQ3VycmVudFZpZXcgPSAocGFnZSkgPT4ge1xuICAgIGN1cnJlbnRWaWV3ID0gcGFnZTtcbn1cblxuY29uc3QgZ2V0Q3VycmVudFZpZXcgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGN1cnJlbnRWaWV3O1xufVxuXG4vLyBjcmVhdGUgZGlzcGxheU1vZGUgdmFyaWFibGUgdG8gdHJhY2sgbGlnaHQvZGFyayBtb2RlOlxubGV0IGRpc3BsYXlNb2RlO1xuXG4vLyBnZW5lcmF0ZSBiYXNlIHBhZ2Ugc3RydWN0dXJlOlxuY29uc3QgcmVuZGVySGVhZGVyRm9vdGVyID0gKCkgPT4ge1xuICAgIC8vIC8vIGFkZCBmYXZpY29uOlxuICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkJyk7XG4gICAgY29uc3QgZmF2SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICBmYXZJY29uLnNldEF0dHJpYnV0ZSgncmVsJywgJ2ljb24nKTtcbiAgICBmYXZJY29uLnNldEF0dHJpYnV0ZSgnaHJlZicsIEZhdkljb24pO1xuICAgIGhlYWQuYXBwZW5kQ2hpbGQoZmF2SWNvbik7XG5cbiAgICAvLyBjcmVhdGUgaGVhZGVyOlxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgICAgICAvLyBjcmVhdGUgdGl0bGUgYmFyOlxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgICAgICAgICAvLyBjcmVhdGUgbGlnaHQgbW9kZSBpY29uOlxuICAgICAgICAgICAgY29uc3QgbGlnaHRNb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBsaWdodE1vZGUuY2xhc3NMaXN0LmFkZCgnbGlnaHQtbW9kZScpO1xuICAgICAgICAgICAgdGl0bGUuYXBwZW5kQ2hpbGQobGlnaHRNb2RlKTtcbiAgICAgICAgICAgIGNvbnN0IGxpZ2h0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgbGlnaHRJY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgTGlnaHRJY29uKTtcbiAgICAgICAgICAgIGxpZ2h0TW9kZS5hcHBlbmRDaGlsZChsaWdodEljb24pO1xuXG4gICAgICAgICAgICAvLyBjcmVhdGUgdGl0bGUgdGV4dDpcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGl0bGVUZXh0LmNsYXNzTGlzdC5hZGQoJ3RpdGxlLXRleHQnKTtcbiAgICAgICAgICAgIHRpdGxlVGV4dC50ZXh0Q29udGVudCA9ICdOT1cgLy8gTEFURVIgOjogYSBzaW1wbGUgdG8tZG8gbGlzdCc7XG4gICAgICAgICAgICB0aXRsZS5hcHBlbmRDaGlsZCh0aXRsZVRleHQpO1xuXG4gICAgICAgICAgICAvLyBjcmVhdGUgZGFyayBtb2RlIGljb246XG4gICAgICAgICAgICBjb25zdCBkYXJrTW9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGFya01vZGUuY2xhc3NMaXN0LmFkZCgnZGFyay1tb2RlJyk7XG4gICAgICAgICAgICB0aXRsZS5hcHBlbmRDaGlsZChkYXJrTW9kZSk7XG4gICAgICAgICAgICBjb25zdCBkYXJrSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgZGFya0ljb24uc2V0QXR0cmlidXRlKCdzcmMnLCBEYXJrSWNvbik7XG4gICAgICAgICAgICBkYXJrTW9kZS5hcHBlbmRDaGlsZChkYXJrSWNvbik7XG5cblxuICAgICAgICAvLyBjcmVhdGUgbmF2IGJhcjpcbiAgICAgICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5hdi5jbGFzc0xpc3QuYWRkKCduYXYnKTtcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdik7IFxuXG4gICAgICAgICAgICAvLyBjcmVhdGUgbmF2IGJ1dHRvbnM6XG4gICAgICAgICAgICBjb25zdCBub3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG5vdy5jbGFzc0xpc3QuYWRkKCdub3cnKTtcbiAgICAgICAgICAgIG5vdy5jbGFzc0xpc3QuYWRkKCduYXYtYnV0dG9uJyk7XG4gICAgICAgICAgICBub3cudGV4dENvbnRlbnQgPSAnbm93JztcbiAgICAgICAgICAgIG5hdi5hcHBlbmRDaGlsZChub3cpO1xuXG4gICAgICAgICAgICBjb25zdCBsYXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbGF0ZXIuY2xhc3NMaXN0LmFkZCgnbGF0ZXInKTtcbiAgICAgICAgICAgIGxhdGVyLmNsYXNzTGlzdC5hZGQoJ25hdi1idXR0b24nKTtcbiAgICAgICAgICAgIGxhdGVyLnRleHRDb250ZW50ID0gJ2xhdGVyJztcbiAgICAgICAgICAgIG5hdi5hcHBlbmRDaGlsZChsYXRlcik7XG5cbiAgICAgICAgICAgIGNvbnN0IGFsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgYWxsLmNsYXNzTGlzdC5hZGQoJ2FsbCcpO1xuICAgICAgICAgICAgYWxsLmNsYXNzTGlzdC5hZGQoJ25hdi1idXR0b24nKTtcbiAgICAgICAgICAgIGFsbC50ZXh0Q29udGVudCA9ICdhbGwnO1xuICAgICAgICAgICAgbmF2LmFwcGVuZENoaWxkKGFsbCk7XG5cbiAgICAvLyBjcmVhdGUgbWFpbiB0by1kbyBsaXN0IGRpc3BsYXkgc2VjdGlvbjpcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluKTtcblxuICAgIC8vIGNyZWF0ZSBmb290ZXI6XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb290ZXIpO1xuICAgIGZvb3Rlci50ZXh0Q29udGVudCA9ICdjb3B5cmlnaHQgwqkgMjAyMiB8IHNlYW4gc3RlcGhlbiBicmlhbic7XG59XG5cbi8vIHJlbmRlcnMgJ2FkZCcgYnV0dG9uIHdpdGhpbiB0aGUgbWFpbiBjb250ZW50IHNlY3Rpb246XG5jb25zdCByZW5kZXJBZGRCdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gICAgY29uc3QgYWRkSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZEl0ZW0uY2xhc3NMaXN0LmFkZCgnZGlzcGxheWVkLWl0ZW0nLCdhZGQtaXRlbS1idXR0b24nKTtcbiAgICBjb25zdCBhZGRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgYWRkSWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsIEFkZEljb24pO1xuICAgIGFkZEl0ZW0uYXBwZW5kQ2hpbGQoYWRkSWNvbik7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChhZGRJdGVtKTtcblxuICAgIC8vIGFkZCBjbGljayBsaXN0ZW5lciB0byBhZGQgYnV0dG9uOlxuICAgIGFkZEFkZExpc3RlbmVyKCk7XG59XG5cbmNvbnN0IHJlbmRlckFkZEZvcm0gPSAoKSA9PiB7XG5cbiAgICAvLyBjcmVhdGUgYWRkIGZvcm0gY29udGFpbmVyOlxuICAgIGNvbnN0IGFkZEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGRGb3JtLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXllZC1pdGVtJywgJ2FkZC1mb3JtJyk7XG5cbiAgICAvLyBpbnNlcnQgYWRkIGZvcm0gYmVmb3JlIGFkZCBidXR0b246XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1pdGVtLWJ1dHRvbicpO1xuICAgIG1haW4uaW5zZXJ0QmVmb3JlKGFkZEZvcm0sIGFkZEJ1dHRvbik7XG5cbiAgICAvLyByZW1vdmUgYWRkIGJ1dHRvbjpcbiAgICBhZGRCdXR0b24ucmVtb3ZlKCk7XG5cbiAgICAgICAgLy8gY3JlYXRlIHRoZSBmb3JtIGl0c2VsZjpcbiAgICAgICAgY29uc3QgZm9ybUl0c2VsZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgZm9ybUl0c2VsZi5jbGFzc0xpc3QuYWRkKCdhZGQtZm9ybS1pdHNlbGYnKTtcbiAgICAgICAgZm9ybUl0c2VsZi5zZXRBdHRyaWJ1dGUoJ21ldGhvZCcsICcnKTtcbiAgICAgICAgYWRkRm9ybS5hcHBlbmRDaGlsZChmb3JtSXRzZWxmKTtcblxuICAgICAgICAgICAgLy8gY3JlYXRlIHRoZSBmb3JtIHRpdGxlOlxuICAgICAgICAgICAgY29uc3QgZm9ybVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBmb3JtVGl0bGUuY2xhc3NMaXN0LmFkZCgnZm9ybS10aXRsZScpO1xuICAgICAgICAgICAgZm9ybUl0c2VsZi5hcHBlbmRDaGlsZChmb3JtVGl0bGUpO1xuICAgICAgICAgICAgY29uc3QgZm9ybVRpdGxlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIGZvcm1UaXRsZVRleHQuY2xhc3NMaXN0LmFkZCgnZm9ybS10aXRsZS10ZXh0Jyk7XG4gICAgICAgICAgICBmb3JtVGl0bGVUZXh0LnRleHRDb250ZW50ID0gJ2FkZCBhIG5ldyB0YXNrJztcbiAgICAgICAgICAgIGZvcm1UaXRsZS5hcHBlbmRDaGlsZChmb3JtVGl0bGVUZXh0KTtcblxuICAgICAgICAgICAgLy8gY3JlYXRlIGFuICdYJyBidXR0b24gdG8gY2xvc2Ugb3V0IG9mIHRoZSBmb3JtOlxuICAgICAgICAgICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNsb3NlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlLWJ1dHRvbicpO1xuICAgICAgICAgICAgZm9ybVRpdGxlLmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcbiAgICAgICAgICAgIGNvbnN0IGNsb3NlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgY2xvc2VJY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgQ2xvc2VJY29uKTtcbiAgICAgICAgICAgIGNsb3NlQnV0dG9uLmFwcGVuZENoaWxkKGNsb3NlSWNvbik7XG5cbiAgICAgICAgICAgIC8vIGNyZWF0ZSB0aGUgZm9ybSBlbGVtZW50czpcblxuICAgICAgICAgICAgICAgIC8vIHRpdGxlIHNlY3Rpb246XG4gICAgICAgICAgICAgICAgY29uc3QgdGl0bGVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgdGl0bGVTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZWxlbWVudCcsICd0aXRsZS1zZWN0aW9uJyk7XG4gICAgICAgICAgICAgICAgZm9ybUl0c2VsZi5hcHBlbmRDaGlsZCh0aXRsZVNlY3Rpb24pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHRpdGxlIGxhYmVsOlxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0aXRsZScpO1xuICAgICAgICAgICAgICAgICAgICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gJ3RpdGxlOic7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlU2VjdGlvbi5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyB0aXRsZSBpbnB1dDpcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RpdGxlLWlucHV0Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3RpdGxlJyk7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICd0aXRsZScpO1xuICAgICAgICAgICAgICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnZXhhbXBsZTogZmVlZCB0aGUgZG9nJyk7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB0aXRsZVNlY3Rpb24uYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG5cblxuICAgICAgICAgICAgICAgIC8vIGRlc2NyaXB0aW9uIHNlY3Rpb246XG4gICAgICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb25TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25TZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZWxlbWVudCcsICdkZXNjcmlwdGlvbi1zZWN0aW9uJyk7XG4gICAgICAgICAgICAgICAgZm9ybUl0c2VsZi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblNlY3Rpb24pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGRlc2NyaXB0aW9uIGxhYmVsOlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbkxhYmVsLnRleHRDb250ZW50ID0gJ2Rlc2NyaXB0aW9uIChvcHRpb25hbCk6JztcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25TZWN0aW9uLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGRlc2NyaXB0aW9uIGlucHV0OlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Rlc2NyaXB0aW9uLWlucHV0Jyk7XG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdkZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblNlY3Rpb24uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XG5cblxuICAgICAgICAgICAgICAgIC8vIHByaW9yaXR5IGZpZWxkc2V0OlxuICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKTtcbiAgICAgICAgICAgICAgICBmaWVsZHNldC5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1zZWN0aW9uJyk7XG4gICAgICAgICAgICAgICAgZm9ybUl0c2VsZi5hcHBlbmRDaGlsZChmaWVsZHNldCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gcHJpb3JpdHkgbGFiZWw6XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlMYWJlbC5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1sYWJlbCcpO1xuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ3ByaW9yaXR5Oic7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vICdOT1cnIHByaW9yaXR5IHJhZGlvIG9wdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm93T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIG5vd09wdGlvbi5jbGFzc0xpc3QuYWRkKCdyYWRpby1vcHRpb24nLCAnbm93LW9wdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChub3dPcHRpb24pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBOT1cgaW5wdXQgJiBsYWJlbDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vd0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vd0lucHV0LmNsYXNzTGlzdC5hZGQoJ3JhZGlvLWlucHV0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3dJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vd0lucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbm93Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3dJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJpb3JpdHknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vd0lucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnbm93Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3dPcHRpb24uYXBwZW5kQ2hpbGQobm93SW5wdXQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBub3dMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3dMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdub3cnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vd0xhYmVsLnRleHRDb250ZW50ID0gJ25vdyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3dPcHRpb24uYXBwZW5kQ2hpbGQobm93TGFiZWwpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vICdMQVRFUicgcHJpb3JpdHkgcmFkaW8gb3B0aW9uOlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXRlck9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBsYXRlck9wdGlvbi5jbGFzc0xpc3QuYWRkKCdyYWRpby1vcHRpb24nLCAnbGF0ZXItb3B0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGxhdGVyT3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBMQVRFUiBpbnB1dCAmIGxhYmVsOlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGF0ZXJJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXRlcklucHV0LmNsYXNzTGlzdC5hZGQoJ3JhZGlvLWlucHV0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXRlcklucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF0ZXJJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xhdGVyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXRlcklucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcmlvcml0eScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF0ZXJJbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2xhdGVyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXRlck9wdGlvbi5hcHBlbmRDaGlsZChsYXRlcklucHV0KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGF0ZXJMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXRlckxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2xhdGVyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXRlckxhYmVsLnRleHRDb250ZW50ID0gJ2xhdGVyJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhdGVyT3B0aW9uLmFwcGVuZENoaWxkKGxhdGVyTGFiZWwpO1xuXG4gICAgICAgICAgICAvLyBjcmVhdGUgYSBuZXcgJ2FkZCcgYnV0dG9uIGF0IHRoZSBib3R0b20gb2YgdGhlIGZvcm06XG4gICAgICAgICAgICBjb25zdCBmb3JtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBmb3JtQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdC1idXR0b24nKTtcbiAgICAgICAgICAgIGZvcm1CdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICAgICAgICAgICAgZm9ybUl0c2VsZi5hcHBlbmRDaGlsZChmb3JtQnV0dG9uKTtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1CdXR0b25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBmb3JtQnV0dG9uSWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsIEFkZEljb24pO1xuICAgICAgICAgICAgZm9ybUJ1dHRvbi5hcHBlbmRDaGlsZChmb3JtQnV0dG9uSWNvbik7XG4gICAgXG4gICAgLy8gcmVuZGVyIHRoZSBhZGQgZm9ybSBpbiBkYXJrIG1vZGUgaWYgaXQncyB0dXJuZWQgb246XG4gICAgaWYgKGRpc3BsYXlNb2RlID09PSAnZGFyaycpIHtcbiAgICAgICAgc3dpdGNoVG9EYXJrKCk7XG4gICAgfVxuXG4gICAgYWRkRm9ybUxpc3RlbmVycygpO1xuXG59XG5cbmNvbnN0IHN1Ym1pdEZvcm0gPSAoKSA9PiB7XG5cbiAgICAvLyBnZXQgZm9ybSB2YWx1ZXM6XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUtaW5wdXQnKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbi1pbnB1dCcpO1xuICAgIGxldCBwcmlvcml0eTtcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdycpLmNoZWNrZWQpIHtcbiAgICAgICAgcHJpb3JpdHkgPSAnbm93JztcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYXRlcicpLmNoZWNrZWQpIHtcbiAgICAgICAgcHJpb3JpdHkgPSAnbGF0ZXInO1xuICAgIH1cblxuICAgIC8vIGFkZCBhIHRvLWRvIG9iamVjdCB0byB0aGUgYXJyYXkgdXNpbmcgdGhlIGZvcm0gdmFsdWVzOlxuICAgIGNyZWF0ZVRvZG8odGl0bGUudmFsdWUsIGRlc2NyaXB0aW9uLnZhbHVlLCBwcmlvcml0eSwgZmFsc2UpO1xuXG4gICAgLy8gcmUtcmVuZGVyIHRoZSBjdXJyZW50IHBhZ2UgdmlldzpcbiAgICBpZiAoY3VycmVudFZpZXcgPSAnbm93Jykge1xuICAgICAgICByZW5kZXJOb3coKTtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRWaWV3ID0gJ2xhdGVyJykge1xuICAgICAgICByZW5kZXJMYXRlcigpO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudFZpZXcgPSAnYWxsJykge1xuICAgICAgICByZW5kZXJBbGwoKTtcbiAgICB9XG4gICAgLy8gYW5kIHNldCBpdCB0byB0aGUgY29ycmVjdCBkaXNwbGF5IG1vZGU6XG4gICAgaWYgKGRpc3BsYXlNb2RlID09PSAnZGFyaycpIHtcbiAgICAgICAgc3dpdGNoVG9EYXJrKCk7XG4gICAgfVxuXG59O1xuXG5cbmNvbnN0IHN1Ym1pdEVkaXRGb3JtID0gKGUpID0+IHtcblxuICAgIGNvbnN0IGluZGV4ID0gZS50YXJnZXQuZGF0YXNldC5pZDtcbiAgICBjb25zb2xlLmxvZyhpbmRleCk7XG5cbiAgICAvLyBnZXQgZm9ybSB2YWx1ZXM6XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC10aXRsZS1pbnB1dCcpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtZGVzY3JpcHRpb24taW5wdXQnKTtcbiAgICBsZXQgcHJpb3JpdHk7XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3cnKS5jaGVja2VkKSB7XG4gICAgICAgIHByaW9yaXR5ID0gJ25vdyc7XG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGF0ZXInKS5jaGVja2VkKSB7XG4gICAgICAgIHByaW9yaXR5ID0gJ2xhdGVyJztcbiAgICB9XG5cbiAgICBlZGl0VG9kbyhpbmRleCwgJ3RpdGxlJywgdGl0bGUudmFsdWUpO1xuICAgIGVkaXRUb2RvKGluZGV4LCAnZGVzY3JpcHRpb24nLCBkZXNjcmlwdGlvbi52YWx1ZSk7XG4gICAgZWRpdFRvZG8oaW5kZXgsICdwcmlvcml0eScsIHByaW9yaXR5KTtcblxuICAgIHJlbW92ZUVkaXRCYWNrZHJvcCgpO1xuXG4gICAgLy8gcmUtcmVuZGVyIHRoZSBjdXJyZW50IHBhZ2UgdmlldzpcbiAgICBpZiAoY3VycmVudFZpZXcgPSAnbm93Jykge1xuICAgICAgICByZW5kZXJOb3coKTtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRWaWV3ID0gJ2xhdGVyJykge1xuICAgICAgICByZW5kZXJMYXRlcigpO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudFZpZXcgPSAnYWxsJykge1xuICAgICAgICByZW5kZXJBbGwoKTtcbiAgICB9XG5cbiAgICAvLyBhbmQgc2V0IGl0IHRvIHRoZSBjb3JyZWN0IGRpc3BsYXkgbW9kZTpcbiAgICBpZiAoZGlzcGxheU1vZGUgPT09ICdkYXJrJykge1xuICAgICAgICBzd2l0Y2hUb0RhcmsoKTtcbiAgICB9XG5cbn1cblxuLy8gY2hhbmdlcyBiYWNrZ3JvdW5kIGNvbG9yIGFuZCBvdXRsaW5lIGZvciByYWRpbyBvcHRpb25zIGRlcGVuZGluZyBvbiBzZWxlY3Rpb246XG5jb25zdCBzdHlsZVJhZGlvT3B0aW9uID0gKGUpID0+IHtcbiAgICAvLyBzZWxlY3QgdGhlIHByaW9yaXR5IGJ1dHRvbiB3ZSB3YW50IHRvIHN0eWxlOlxuICAgIGNvbnN0IHNlbGVjdGVkSW5wdXQgPSBlLnRhcmdldDtcbiAgICBjb25zdCBidXR0b25Ub1NlbGVjdCA9IHNlbGVjdGVkSW5wdXQucGFyZW50RWxlbWVudDtcbiAgICAvLyBjbGVhciBvdXQgZXhpc3RpbmcgcHJpb3JpdHkgYnV0dG9uIHNlbGVjdGlvbiBzdHlsaW5nOlxuICAgIGNvbnN0IHByaW9yaXR5QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yYWRpby1vcHRpb24nKTtcbiAgICBwcmlvcml0eUJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICBpZiAoYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQtcHJpb3JpdHknKSkge1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkLXByaW9yaXR5Jyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBhZGQgJ3NlbGVjdGVkJyBjbGFzcyB0byB0aGUgYnV0dG9uIHdlIHdhbnQgdG8gc3R5bGU6XG4gICAgYnV0dG9uVG9TZWxlY3QuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQtcHJpb3JpdHknKTtcbn1cblxuLy8gcmVtb3ZlcyB0aGUgJ2FkZCBhIG5ldyB0YXNrJyBmb3JtIGZyb20gRE9NOlxuY29uc3QgcmVtb3ZlRm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1mb3JtJyk7XG4gICAgZm9ybS5yZW1vdmUoKTtcbiAgICAvLyByZXBsYWNlIHRoZSAnKycgYnV0dG9uIHdoaWNoIHdhcyBwcmV2aW91c2x5IGRlbGV0ZWQ6XG4gICAgcmVuZGVyQWRkQnV0dG9uKCk7XG4gICAgaWYgKGRpc3BsYXlNb2RlID09PSAnZGFyaycpIHtcbiAgICAgICAgc3dpdGNoVG9EYXJrKCk7XG4gICAgfVxufVxuXG5jb25zdCByZW1vdmVFZGl0Rm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtZm9ybScpO1xuICAgIGZvcm0ucmVtb3ZlKCk7XG4gICAgcmVtb3ZlRWRpdEJhY2tkcm9wKCk7XG59XG5cbmNvbnN0IHJlbW92ZUVkaXRCYWNrZHJvcCA9ICgpID0+IHtcbiAgICBjb25zdCBlZGl0QmFja2Ryb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1iYWNrZHJvcCcpO1xuICAgIGVkaXRCYWNrZHJvcC5yZW1vdmUoKTtcbn1cblxuLy8gYXBwbHkgYW4gb3V0bGluZSBzdHlsZSB0byB0aGUgc2VsZWN0ZWQgZGlzcGxheSdzIG5hdiBidXR0b246XG5jb25zdCBvdXRsaW5lTmF2QnV0dG9uID0gKHBhZ2UpID0+IHtcblxuICAgIC8vIGNyZWF0ZSByZWZlcmVuY2UgdG8gYWxsIHRocmVlIG5hdiBidXR0b25zOlxuICAgIGNvbnN0IG5hdkJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LWJ1dHRvbicpO1xuICAgIC8vIHJlbW92ZSAnc2VsZWN0ZWQnIGNsYXNzIGZyb20gYW55IGJ1dHRvbiB0aGF0IGhhcyBpdDpcbiAgICBuYXZCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgaWYgKGJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGVkJykpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy8gdGhlbiBhZGQgdGhlICdzZWxlY3RlZCcgY2xhc3MgdG8gb25seSB0aGUgY2hvc2VuIHBhZ2U6XG4gICAgY29uc3QgY2xpY2tlZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3BhZ2V9YCk7XG4gICAgY2xpY2tlZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgIGNvbnN0IGFsbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwnKTtcbiAgICBpZiAoY2xpY2tlZEJ1dHRvbiA9PT0gYWxsQnV0dG9uKSB7XG4gICAgICAgIGNsaWNrZWRCdXR0b24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQtYWxsJyk7XG4gICAgfVxufVxuXG5jb25zdCByZW5kZXJOb3cgPSAoKSA9PiB7XG4gICAgLy8gb3V0bGluZSB0aGUgJ25vdycgYnV0dG9uOlxuICAgIG91dGxpbmVOYXZCdXR0b24oJ25vdycpO1xuXG4gICAgLy8gY3JlYXRlIGFycmF5IG9mIG9ubHkgaXRlbXMgd2l0aCBhICdub3cnIHByaW9yaXR5OlxuICAgIGNvbnN0IG5vd0l0ZW1zID0gZ2V0Tm93KCk7XG5cbiAgICByZW5kZXJJdGVtcyhub3dJdGVtcyk7XG5cbiAgICB1cGRhdGVDdXJyZW50Vmlldygnbm93Jyk7XG59XG5cbmNvbnN0IHJlbmRlckxhdGVyID0gKCkgPT4ge1xuICAgIFxuICAgIC8vIG91dGxpbmUgdGhlICdsYXRlcicgYnV0dG9uOlxuICAgIG91dGxpbmVOYXZCdXR0b24oJ2xhdGVyJyk7XG5cbiAgICAvLyBjcmVhdGUgYXJyYXkgb2Ygb25seSBpdGVtcyB3aXRoIGEgJ2xhdGVyJyBwcmlvcml0eTpcbiAgICBjb25zdCBsYXRlckl0ZW1zID0gZ2V0TGF0ZXIoKTtcblxuICAgIHJlbmRlckl0ZW1zKGxhdGVySXRlbXMpO1xuXG4gICAgdXBkYXRlQ3VycmVudFZpZXcoJ2xhdGVyJyk7XG59XG5cbmNvbnN0IHJlbmRlckFsbCA9ICgpID0+IHtcblxuICAgIC8vIG91dGxpbmUgdGhlICdhbGwnIGJ1dHRvbjpcbiAgICBvdXRsaW5lTmF2QnV0dG9uKCdhbGwnKTtcblxuICAgIC8vIGNyZWF0ZSBhbiBhcnJheSBvZiBhbGwgY3VycmVudCBpdGVtczpcbiAgICBjb25zdCBhbGxJdGVtcyA9IGdldEFsbCgpO1xuIFxuICAgIHJlbmRlckl0ZW1zKGFsbEl0ZW1zKTtcblxuICAgIHVwZGF0ZUN1cnJlbnRWaWV3KCdhbGwnKTtcbn1cblxuY29uc3QgcmVuZGVySXRlbXMgPSAoc2VsZWN0ZWRJdGVtcykgPT4ge1xuXG4gICAgLy8gY3JlYXRlIHJlZmVyZW5jZSB0byBtYWluIGNvbnRlbnQgc2VjdGlvbiBhbmQgY3VycmVudCBjb21wbGV0ZSB0by1kbyBsaXN0OlxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICAgIGNvbnN0IGFsbEl0ZW1zID0gZ2V0QWxsKCk7XG5cbiAgICAvLyBlbXB0eSBvdXQgbWFpbiBjb250ZW50IHNlY3Rpb246XG4gICAgbWFpbi5pbm5lckhUTUwgPSAnJztcblxuICAgIC8vIGNyZWF0ZSBuZXcgPGRpdj4gZm9yIGVhY2ggaXRlbTpcbiAgICBzZWxlY3RlZEl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGNvbnN0IGRpc3BsYXllZEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGlzcGxheWVkSXRlbS5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5ZWQtaXRlbScpO1xuXG4gICAgICAgIC8vIGFkZCBjbGFzcyBmb3IgaXRlbSBwcmlvcml0eTpcbiAgICAgICAgaWYgKGl0ZW0ucHJpb3JpdHkgPT09ICdub3cnKSB7XG4gICAgICAgICAgICBkaXNwbGF5ZWRJdGVtLmNsYXNzTGlzdC5hZGQoJ25vdy1pdGVtJyk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXRlbS5wcmlvcml0eSA9PT0gJ2xhdGVyJykge1xuICAgICAgICAgICAgZGlzcGxheWVkSXRlbS5jbGFzc0xpc3QuYWRkKCdsYXRlci1pdGVtJylcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNldCBkYXRhc2V0LmlkIHRvIGl0ZW0ncyBpbmRleCBpbiB0aGUgbWFpbiBhcnJheTpcbiAgICAgICAgZGlzcGxheWVkSXRlbS5kYXRhc2V0LmlkID0gYWxsSXRlbXMuaW5kZXhPZihpdGVtKTtcblxuICAgICAgICAgICAgLy8gY3JlYXRlIDxkaXY+cyBmb3IgY2hlY2tib3ggaWNvbnM6XG4gICAgICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gnKTtcblxuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIGl0ZW0gaXMgY29tcGxldGVkIHRvIGRldGVybWluZSB3aGV0aGVyIHRvIGluc2VydCBhbiBlbXB0eSBvciBjaGVja2VkIGNoZWNrYm94IHN2ZzpcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5jb21wbGV0ZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hlY2tlZENoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWRDaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3NyYycsIENoZWNrZWRDaGVja2JveEljb24pO1xuICAgICAgICAgICAgICAgICAgICBjaGVja2JveC5hcHBlbmRDaGlsZChjaGVja2VkQ2hlY2tib3gpO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5ZWRJdGVtLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZC1pdGVtJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtLmNvbXBsZXRlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZW1wdHlDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgICAgICAgICBlbXB0eUNoZWNrYm94LnNldEF0dHJpYnV0ZSgnc3JjJywgRW1wdHlDaGVja2JveEljb24pO1xuICAgICAgICAgICAgICAgICAgICBjaGVja2JveC5hcHBlbmRDaGlsZChlbXB0eUNoZWNrYm94KTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheWVkSXRlbS5jbGFzc0xpc3QuYWRkKCdpbmNvbXBsZXRlLWl0ZW0nKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRpc3BsYXllZEl0ZW0uYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuXG4gICAgICAgICAgICAvLyBjcmVhdGUgPGRpdj5zIGZvciBpdGVtIHRpdGxlIHRleHQ6XG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBpdGVtLnRpdGxlO1xuICAgICAgICAgICAgLy8gaWYgdGhlIGl0ZW0gaGFzIGEgZGVzY3JpcHRpb24sIG1ha2UgdGhlIHRpdGxlIGV4cGFuZGFibGU6XG4gICAgICAgICAgICBpZiAoaXRlbS5kZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tdGl0bGUnLCAnZXhwYW5kYWJsZS10aXRsZScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghaXRlbS5kZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tdGl0bGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpc3BsYXllZEl0ZW0uYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgICAgICAgICAvLyBjcmVhdGUgZWRpdCBpY29uczpcbiAgICAgICAgICAgIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGVkaXQuY2xhc3NMaXN0LmFkZCgnZWRpdCcpO1xuICAgICAgICAgICAgY29uc3QgZWRpdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIGVkaXRJY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgRWRpdEljb24pO1xuICAgICAgICAgICAgZWRpdC5hcHBlbmRDaGlsZChlZGl0SWNvbik7XG4gICAgICAgICAgICBkaXNwbGF5ZWRJdGVtLmFwcGVuZENoaWxkKGVkaXQpO1xuXG4gICAgICAgICAgICAvLyBpZiB0aGVyZSBpcyBhIGRlc2NyaXB0aW9uLCBjcmVhdGUgZXhwYW5kIGljb25zOlxuICAgICAgICAgICAgaWYgKGl0ZW0uZGVzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBleHBhbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBleHBhbmQuY2xhc3NMaXN0LmFkZCgnZXhwYW5kJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgZXhwYW5kSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgICAgIGV4cGFuZEljb24uc2V0QXR0cmlidXRlKCdzcmMnLCBFeHBhbmRJY29uKTtcbiAgICAgICAgICAgICAgICBleHBhbmQuYXBwZW5kQ2hpbGQoZXhwYW5kSWNvbik7XG4gICAgICAgICAgICAgICAgZGlzcGxheWVkSXRlbS5hcHBlbmRDaGlsZChleHBhbmQpO1xuICAgICAgICAgICAgLy8gaWYgdGhlcmUncyBubyBpdGVtIGRlc2NyaXB0aW9uLCBhZGQgdGhlIGRlbGV0ZSBpY29uIGluc3RlYWQgb2YgdGhlIGV4cGFuZCBpY29uOlxuICAgICAgICAgICAgfSBlbHNlIGlmICghaXRlbS5kZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBkZWxldGVJY29uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUljb25TdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgICAgICBkZWxldGVJY29uU3ZnLnNldEF0dHJpYnV0ZSgnc3JjJywgRGVsZXRlSWNvbik7XG4gICAgICAgICAgICAgICAgZGVsZXRlSWNvbi5hcHBlbmRDaGlsZChkZWxldGVJY29uU3ZnKTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5ZWRJdGVtLmFwcGVuZENoaWxkKGRlbGV0ZUljb24pO1xuICAgICAgICAgICAgICAgIGFkZERlbGV0ZUxpc3RlbmVyVG9JdGVtV2l0aG91dERlc2NyaXB0aW9uKGRlbGV0ZUljb24sIGRpc3BsYXllZEl0ZW0uZGF0YXNldC5pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcblxuICAgICAgICAvLyBhZGQgaXRlbSA8ZGl2PiB0byB0aGUgbWFpbiBjb250ZW50IHNlY3Rpb246XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoZGlzcGxheWVkSXRlbSk7XG5cbiAgICAgICAgLy8gYWRkIGNsaWNrIGxpc3RlbmVyIHRvIGNoZWNrYm94IG9mIG5ldyBpdGVtIHVzaW5nIGl0cyBpZDpcbiAgICAgICAgYWRkQ2hlY2tib3hMaXN0ZW5lcihkaXNwbGF5ZWRJdGVtLmRhdGFzZXQuaWQpO1xuXG4gICAgICAgIC8vIGFkZCBjbGljayBsaXN0ZW5lciB0b2UgZGl0IGljb24gb2YgbmV3IGl0ZW0gdXNpbmcgaXRzIGlkOlxuICAgICAgICBhZGRFZGl0SWNvbkxpc3RlbmVyKGRpc3BsYXllZEl0ZW0uZGF0YXNldC5pZCk7XG4gICAgfSk7XG5cbiAgICAvLyByZW5kZXIgJ2FkZCcgYnV0dG9uIGF0IHRoZSBib3R0b20gb2YgdGhlIGNvbnRlbnQgc2VjdGlvbjpcbiAgICByZW5kZXJBZGRCdXR0b24oKTtcblxuICAgIC8vIGNoZWNrIGlmIGRpc3BsYXkgbW9kZSBpcyBzZXQgdG8gZGFyayBhbmQgc3dpdGNoIHRoZSBwYWdlIHN0eWxlIGlmIG5lY2Vzc2FyeTpcbiAgICBpZiAoZGlzcGxheU1vZGUgPT09ICdkYXJrJykge1xuICAgICAgICBzd2l0Y2hUb0RhcmsoKTtcbiAgICB9XG5cbiAgICAvLyBhZGQgY2xpY2sgbGlzdGVuZXJzIG9uIHRpdGxlIHRleHQgJiBleHBhbmQgaWNvbnMgb2YgYWxsIHJlbmRlcmVkIGl0ZW1zOlxuICAgIGFkZEV4cGFuZExpc3RlbmVycygpO1xuXG59XG5cbmNvbnN0IGNoZWNrQ2hlY2tib3ggPSAoY2hlY2tib3hEaXYpID0+IHtcbiAgICBjb25zdCBjaGVja2JveEljb24gPSBjaGVja2JveERpdi5maXJzdENoaWxkO1xuICAgIGNoZWNrYm94SWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsIENoZWNrZWRDaGVja2JveEljb24pO1xufVxuXG5jb25zdCB1bmNoZWNrQ2hlY2tib3ggPSAoY2hlY2tib3hEaXYpID0+IHtcbiAgICBjb25zdCBjaGVja2JveEljb24gPSBjaGVja2JveERpdi5maXJzdENoaWxkO1xuICAgIGNoZWNrYm94SWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsIEVtcHR5Q2hlY2tib3hJY29uKTtcbn1cblxuY29uc3Qgc2hvd0VkaXRQb3B1cCA9IChlKSA9PiB7XG4gICAgY29uc3QgaXRlbVRvRWRpdCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICBjb25zdCBpbmRleCA9IGl0ZW1Ub0VkaXQuZGF0YXNldC5pZDtcbiAgICByZW5kZXJFZGl0Rm9ybShpbmRleCk7XG4gICAgXG59XG5cbmNvbnN0IGV4cGFuZEl0ZW0gPSAoZSkgPT4ge1xuXG4gICAgLy8gZmlyc3QsIGNyZWF0ZSByZWZlcmVuY2UgdG8gY2xpY2tlZCBlbGVtZW50IHRvIGhlbHAgdXMgZGV0ZXJtaW5lIHRoZSBpdGVtIHRvIGV4cGFuZDpcbiAgICBjb25zdCBjbGlja2VkRWxlbWVudCA9IGUudGFyZ2V0O1xuICAgIGxldCBpdGVtVG9FeHBhbmQ7XG4gICAgLy8gaWYgdGhlIHRpdGxlIHRleHQgd2FzIGNsaWNrZWQsIHRoaXMgaXMgdHJ1ZSBhbmQgdGhlIHBhcmVudCA8ZGl2PiBpcyB0aGUgaXRlbSB3ZSB3YW50IHRvIGV4cGFuZDpcbiAgICBpZiAoY2xpY2tlZEVsZW1lbnQucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc3BsYXllZC1pdGVtJykpIHtcbiAgICAgICAgaXRlbVRvRXhwYW5kID0gZS50YXJnZXQucGFyZW50Tm9kZTtcbiAgICAvLyBvdGhlcndpc2UsIHRoZSBleHBhbmQgaWNvbiBzdmcgd2FzIGNsaWNrZWQgYW5kIHdlIG5lZWQgdG8gYXNjZW5kIGFub3RoZXIgbGF5ZXIgaW4gdGhlIERPTSB0byBnZXQgdGhlIDxkaXY+IG9mIHRoZSBpdGVtIHdlIHdhbnQgdG8gZXhwYW5kOlxuICAgIH0gZWxzZSB7XG4gICAgICAgIGl0ZW1Ub0V4cGFuZCA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICB9XG4gICAgaXRlbVRvRXhwYW5kLmNsYXNzTGlzdC5hZGQoJ2V4cGFuZGVkLWl0ZW0nKTtcblxuICAgIC8vIHNhdmUgcmVmZXJlbmNlIHRvIGl0ZW1Ub0V4cGFuZCdzIGRhdGEtaWQ6XG4gICAgY29uc3QgaXRlbUlkID0gaXRlbVRvRXhwYW5kLmRhdGFzZXQuaWQ7XG5cbiAgICAvLyBnZXQgcmVmZXJlbmNlIHRvIGV4cGFuZCBpY29uLCBhZGQgYSBuZXcgc2hyaW5rIGljb24gYmVmb3JlIGl0LCBhbmQgZGVsZXRlIHRoZSBleHBhbmQgaWNvbjpcbiAgICBjb25zdCBleHBhbmQgPSBpdGVtVG9FeHBhbmQuY2hpbGRyZW5bM107XG4gICAgY29uc3Qgc2hyaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2hyaW5rLmNsYXNzTGlzdC5hZGQoJ3NocmluaycpO1xuICAgIGNvbnN0IHNocmlua0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBzaHJpbmtJY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgU2hyaW5rSWNvbik7XG4gICAgc2hyaW5rLmFwcGVuZENoaWxkKHNocmlua0ljb24pO1xuICAgIGl0ZW1Ub0V4cGFuZC5pbnNlcnRCZWZvcmUoc2hyaW5rLCBleHBhbmQpO1xuICAgIGV4cGFuZC5yZW1vdmUoKTtcblxuICAgIC8vIGNyZWF0ZSBuZXcgPGRpdj4gZm9yIGl0ZW0gZGVzY3JpcHRpb24gYW5kIGdldCB0ZXh0IGZyb20gdG9kb0xpc3QgYXJyYXk6XG4gICAgY29uc3QgaXRlbURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbURlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tZGVzY3JpcHRpb24nKTtcbiAgICBpdGVtRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChgJHtpdGVtSWR9LWRlc2NyaXB0aW9uYCk7XG4gICAgaXRlbURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZ2V0RGVzY3JpcHRpb24oaXRlbUlkKTtcbiAgICBpdGVtVG9FeHBhbmQuYXBwZW5kQ2hpbGQoaXRlbURlc2NyaXB0aW9uKTtcbiAgICBcbiAgICAvLyBjcmVhdGUgbmV3IDxkaXY+IGZvciBkZWxldGUgaWNvbiBhbmQgYWRkIGRlbGV0ZSBzdmcgYXMgYSBjaGlsZCA8aW1nPjpcbiAgICBjb25zdCBkZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGUnKTtcbiAgICBjb25zdCBkZWxldGVJY29uU3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgZGVsZXRlSWNvblN2Zy5zZXRBdHRyaWJ1dGUoJ3NyYycsIERlbGV0ZUljb24pO1xuICAgIGRlbGV0ZUljb24uYXBwZW5kQ2hpbGQoZGVsZXRlSWNvblN2Zyk7XG4gICAgaXRlbVRvRXhwYW5kLmFwcGVuZENoaWxkKGRlbGV0ZUljb24pO1xuXG4gICAgcmVtb3ZlTGlzdGVuZXJzRnJvbUV4cGFuZGVkSXRlbShpdGVtSWQpO1xuXG4gICAgYWRkTGlzdGVuZXJzVG9FeHBhbmRlZEl0ZW0oaXRlbUlkKTtcbn1cblxuY29uc3Qgc2hyaW5rSXRlbSA9IChlKSA9PiB7XG5cbiAgICAvLyBzYW1lIHByb3RvY29sIGFzIGV4cGFuZEl0ZW0oKTpcbiAgICBjb25zdCBjbGlja2VkRWxlbWVudCA9IGUudGFyZ2V0O1xuICAgIGxldCBpdGVtVG9TaHJpbmsgPSBjbGlja2VkRWxlbWVudC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgaXRlbVRvU2hyaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2V4cGFuZGVkLWl0ZW0nKTtcblxuICAgIC8vIGdldCByZWZlcmVuY2UgdG8gc2hyaW5rIGljb24sIGFkZCBhIG5ldyBleHBhbmQgaWNvbiBiZWZvcmUgaXQsIHRoZW4gZGVsZXRlIHRoZSBzaHJpbmsgaWNvbjpcbiAgICBjb25zdCBzaHJpbmsgPSBpdGVtVG9TaHJpbmsuY2hpbGRyZW5bM107XG4gICAgY29uc3QgZXhwYW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZXhwYW5kLmNsYXNzTGlzdC5hZGQoJ2V4cGFuZCcpO1xuICAgIGNvbnN0IGV4cGFuZEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBleHBhbmRJY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgRXhwYW5kSWNvbik7XG4gICAgZXhwYW5kLmFwcGVuZENoaWxkKGV4cGFuZEljb24pO1xuICAgIGl0ZW1Ub1Nocmluay5pbnNlcnRCZWZvcmUoZXhwYW5kLCBzaHJpbmspO1xuICAgIHNocmluay5yZW1vdmUoKTtcblxuICAgIC8vIHNlbGVjdCBleHBhbmRlZCBpdGVtIGRlc2NyaXB0aW9uLCB0aGVuIGRlbGV0ZSBpdDpcbiAgICBjb25zdCBpdGVtRGVzY3JpcHRpb24gPSBpdGVtVG9TaHJpbmsuY2hpbGRyZW5bNF07XG4gICAgaXRlbURlc2NyaXB0aW9uLnJlbW92ZSgpO1xuXG4gICAgLy8gc2VsZWN0IGRlbGV0ZSBpY29uIDxkaXY+LCB0aGVuIGRlbGV0ZSBpdDpcbiAgICBjb25zdCBkZWxldGVJY29uID0gaXRlbVRvU2hyaW5rLmNoaWxkcmVuWzRdO1xuICAgIGRlbGV0ZUljb24ucmVtb3ZlKCk7XG5cbiAgICBjb25zdCBpdGVtVGl0bGUgPSBpdGVtVG9TaHJpbmsuY2hpbGRyZW5bMV07XG4gICAgcmVwbGFjZUV4cGFuZExpc3RlbmVyKGl0ZW1UaXRsZSk7XG5cbiAgICByZXBsYWNlRXhwYW5kTGlzdGVuZXIoZXhwYW5kKTtcblxufVxuXG5jb25zdCBzd2l0Y2hUb0RhcmsgPSAoKSA9PiB7XG4gICAgY29uc3QgZXZlcnl0aGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyonKTtcbiAgICBldmVyeXRoaW5nLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZGFyaycpO1xuICAgIH0pO1xuICAgIGRpc3BsYXlNb2RlID0gJ2RhcmsnO1xufVxuXG5jb25zdCBzdHlsZURhcmtJY29uID0gKCkgPT4ge1xuICAgIC8vIGNoZWNrIHRoYXQgZGFyayBtb2RlIGlzIHNlbGVjdGVkOlxuICAgIGlmIChkaXNwbGF5TW9kZSA9PT0gJ2RhcmsnKSB7XG4gICAgICAgIC8vIHJlbW92ZSBzZWxlY3Rpb24gZnJvbSBsaWdodCBtb2RlIGljb246XG4gICAgICAgIGNvbnN0IGxpZ2h0SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saWdodC1tb2RlJyk7XG4gICAgICAgIGxpZ2h0SWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZC1kaXNwbGF5Jyk7XG4gICAgICAgIC8vIG1hcmsgZGFyayBtb2RlIGljb24gYXMgc2VsZWN0ZWQ6XG4gICAgICAgIGNvbnN0IGRhcmtJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhcmstbW9kZScpO1xuICAgICAgICBkYXJrSWNvbi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZC1kaXNwbGF5Jyk7XG4gICAgfVxufVxuXG5jb25zdCBzd2l0Y2hUb0xpZ2h0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGV2ZXJ5dGhpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcqJyk7XG4gICAgZXZlcnl0aGluZy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmsnKTtcbiAgICB9KTtcbiAgICBkaXNwbGF5TW9kZSA9ICdsaWdodCc7XG59XG5cbmNvbnN0IHN0eWxlTGlnaHRJY29uID0gKCkgPT4ge1xuICAgIC8vIGNoZWNrIHRoYXQgbGlnaHQgbW9kZSBpcyBzZWxlY3RlZDpcbiAgICBpZiAoZGlzcGxheU1vZGUgPT09ICdsaWdodCcpIHtcbiAgICAgICAgLy8gcmVtb3ZlIHNlbGVjdGlvbiBmcm9tIGRhcmsgbW9kZSBpY29uOlxuICAgICAgICBjb25zdCBkYXJrSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXJrLW1vZGUnKTtcbiAgICAgICAgZGFya0ljb24uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQtZGlzcGxheScpO1xuICAgICAgICAvLyBtYXJrIGxpZ2h0IG1vZGUgaWNvbiBhcyBzZWxlY3RlZDpcbiAgICAgICAgY29uc3QgbGlnaHRJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpZ2h0LW1vZGUnKTtcbiAgICAgICAgbGlnaHRJY29uLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkLWRpc3BsYXknKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IFxuICAgIHJlbmRlckhlYWRlckZvb3RlciwgXG4gICAgcmVuZGVyTm93LCBcbiAgICByZW5kZXJMYXRlciwgXG4gICAgcmVuZGVyQWxsLCBcbiAgICBleHBhbmRJdGVtLFxuICAgIHNocmlua0l0ZW0sIFxuICAgIHVwZGF0ZUN1cnJlbnRWaWV3LCBcbiAgICBnZXRDdXJyZW50VmlldyxcbiAgICBjaGVja0NoZWNrYm94LFxuICAgIHVuY2hlY2tDaGVja2JveCxcbiAgICByZW5kZXJBZGRGb3JtLFxuICAgIHN0eWxlUmFkaW9PcHRpb24sXG4gICAgc3VibWl0Rm9ybSxcbiAgICBzdWJtaXRFZGl0Rm9ybSxcbiAgICByZW1vdmVGb3JtLFxuICAgIHJlbW92ZUVkaXRGb3JtLFxuICAgIHN3aXRjaFRvRGFyayxcbiAgICBzd2l0Y2hUb0xpZ2h0LFxuICAgIHN0eWxlRGFya0ljb24sXG4gICAgc3R5bGVMaWdodEljb24sXG4gICAgc2hvd0VkaXRQb3B1cCxcbiAgICBkaXNwbGF5TW9kZVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==