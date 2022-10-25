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
___CSS_LOADER_EXPORT___.push([module.id, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n:root {\n    --rvv: calc(1rem + 1vh + 1vw);\n\n\t--blue: #2E5169;\n    --blue-gray: #5E686D;\n    --brown: #6F5746;\n    --brown-muted: #63584C;\n    --brown-tan: #A58F85;\n    --forest-green: #4D663E;\n    --green-brown: #5F563F;\n    --gray-tan: #C9BBA3;\n    --tan-gray: #D1C9BA;\n    --off-white: #E4D9C5;\n    --orange-yellow: #E1B270;\n    --orange-tan: #CDA885;\n    --red: #AC3A3E;\n    --special-red: #824E4A;\n    --tan: #D2BC9B;\n\n\t--title-footer-color: #ba8e5ede;\n\t--nav-bg: #e4d9c574;\n\t--now-button: #749c5d;\n\t--later-button: #b56c67;\n\t--all-button: #e0a85bc2;\n\t--button-outline: #f0991fd5;\n\t--input-focus-outline: #e5982d;\n\t--input-valid-outline:#4D663E;\n\t--main-bg: #e1cfae97;\n\t--item-bg: #2086ca92;\n\t--now-item-bg: #629c407c;\n\t--later-item-bg: #da8680c1;\n\t--description-bg: #d8f2ff95;\n\t--add-item-button: #ba8d5e85;\n\t--add-form-bg: #f0d7a9de;\n\t--edit-form-bg: #f0d7a9;\n\t--priority-button-default: #c8b5a285;\n\t--form-button: #ba8d5e85;\n\t--form-input-bg: #F3EEE5;\n\t--submit-button-bg: #87b6d5b4;\n\t--close-button: #986f4471;\n\t--display-icon: calc(var(--rvv));\n\n\t--dark-text: #ddd2bf;\n\t--dark-border: #272420;\n\t--dark-title-footer-color: #201c19de;\n\t--dark-nav-bg: #23201cc3;\n\t--dark-now-button: #384a2dda;\n\t--dark-later-button: #8e5652;\n\t--dark-all-button: #d49f539c;\n\t--dark-button-outline: #ee9f32ca;\n\t--dark-input-focus-outline: #ee9f32ca;\n\t--dark-input-valid-outline:#4D663E;\n\t--dark-main-bg: #24211da1;\n\t--dark-item-bg: #123c5892;\n\t--dark-now-item-bg: rgba(46, 80, 28, 0.527);\n\t--dark-later-item-bg: #754743b2;\n\t--dark-add-item-button: #815e3670;\n\t--dark-add-form-bg: #3c3935de;\n\t--dark-priority-button-default: #8b776285;\n\t--dark-form-button: #ba8d5e85;\n\t--dark-form-input-bg: #aba69a;\n\t--dark-submit-button-bg: #668da8b4;\n\t--dark-close-button: #96857385;\n}\n\n@font-face {\n\tfont-family: 'Major Mono';\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n\tfont-family: 'Sublima';\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n@font-face {\n\tfont-family: 'Sublima Bold';\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n\nhtml,\nbody {\n    box-sizing: border-box;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n}\n\nheader {\n\theight: 15vh;\n\tmin-height: calc(3*var(--rvv));\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.title {\n\tmin-height: calc(0.8*var(--rvv));\n\tflex: 1;\n\toverflow-x: hidden;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: calc(0.6*var(--rvv));\n\tbackground-color: var(--title-footer-color);\n\tborder-bottom: 1px solid black;\n}\n\n.title-text {\n\ttext-align: center;\n\tfont-family: 'Sublima';\n\tfont-size: calc(0.45*var(--rvv));\n\tletter-spacing: calc(0.1*var(--rvv));\n\ttext-indent: calc(0.1*var(--rvv));\n}\n\n.light-mode,\n.dark-mode {\n\tcursor: pointer;\n\theight: var(--display-icon);\n\twidth: var(--display-icon);\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.light-mode.dark,\n.dark-mode.dark {\n\tfilter: invert(80%);\n}\n\n.light-mode img,\n.dark-mode img {\n\theight: 80%;\n\twidth: 80%;\n}\n\n.selected-display.light-mode,\n.selected-display.dark-mode {\n\ttransition: 0.25s linear;\n}\n\n.selected-display.light-mode img {\n\tfilter: drop-shadow(0 0 5px var(--red));\n\ttransform: scale(1.2);\n}\n\n.selected-display.dark-mode img {\n\tfilter: drop-shadow(0 0 5px black);\n\ttransform: scale(1.2);\n}\n\n.nav {\n\tflex: 2;\n\tdisplay: flex;\n\tjustify-content: space-around;\n\talign-items: center;\n\tfont-family: 'Major Mono';\n\tbackground-color: var(--nav-bg);\n\tborder-bottom: 1px solid black;\n}\n\n.nav div {\n\tfont-size: calc(0.6*var(--rvv));\n\tcursor: pointer;\n\twidth: calc(3*var(--rvv));\n\theight: calc(var(--rvv));\n\tborder: 1px solid black;\n\tborder-radius: 15%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n}\n\n.now {\n\tbackground-color: var(--now-button);\n}\n\n.now,\n.all {\n\tletter-spacing: calc(0.3*var(--rvv));\n\ttext-indent: calc(0.3*var(--rvv));\n}\n\n.later {\n\tbackground-color: var(--later-button);\n\tletter-spacing: calc(0.1*var(--rvv));\n\ttext-indent: calc(0.1*var(--rvv));\n}\n\n.all {\n\tbackground-color: var(--all-button);\n}\n\n.selected {\n\tbox-shadow: 0 0 0 3px var(--button-outline);\n}\n\n.main {\n\tposition: relative;\n\tflex: auto;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tpadding: calc(0.5*var(--rvv)) 0;\n\tgap: calc(0.6*var(--rvv));\n\tbackground-color: var(--main-bg);\n}\n\n.displayed-item {\n\twidth: 90vw;\n\tmax-width: calc(15*var(--rvv));\n\tposition: relative;\n\tfont-family: 'Sublima';\n\tfont-size: calc(0.6*var(--rvv));\n\tpadding: calc(0.1*var(--rvv)) calc(0.3*var(--rvv));\n\tborder: 1px solid black;\n\tborder-radius: calc(0.8*var(--rvv));\n\tmargin: 0 calc(0.7*var(--rvv));\n\tdisplay: grid;\n\tgrid-template-columns: calc(1.4*var(--rvv)) 1fr calc(var(--rvv)) calc(var(--rvv));\n\tgrid-template-rows: 1fr;\n\tgrid-template-areas: \"checkbox title edit expand\";\n\tbackground-color: var(--item-bg);\n}\n\n.displayed-item.now-item {\n\tbackground-color: var(--now-item-bg);\n}\n\n.displayed-item.later-item {\n\tbackground-color: var(--later-item-bg);\n}\n\n.expanded-item {\n\tdisplay: grid;\n\tgrid-template-columns: calc(1.4*var(--rvv)) 1fr calc(var(--rvv)) calc(var(--rvv));\n\tgrid-template-rows: calc(1.2*var(--rvv)) 1fr;\n\tgrid-template-areas: \n\t\t\"checkbox title edit expand\"\n\t\t\". description . delete\";\n}\n\n.expanded-item .item-description {\n\tmargin-right: calc(0.3*var(--rvv));\n\tmargin-bottom: calc(0.3*var(--rvv));\n}\n\n.expanded-item .item-title {\n\tcursor: auto;\n}\n\n.completed-item {\n\tfilter: grayscale(70%);\n}\n\n.completed-item .item-title {\n\tfont-style: italic;\n\ttext-decoration: underline calc(0.04*var(--rvv)) black;\n\ttext-decoration-skip-ink: none;\n\ttext-underline-offset: calc(-0.2*var(--rvv));\n}\n\n.completed-item .item-description {\n\tfont-style: italic;\n}\n\n.displayed-item.add-item-button {\n\tpadding: 0;\n\tmargin: 0;\n\tcursor: pointer;\n\tbackground-color: var(--add-item-button);\n\theight: calc(1.5*var(--rvv));\n\twidth: calc(1.5*var(--rvv));\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.add-item-button img {\n\tmax-height: 100%;\n\tmax-width: 100%;\n}\n\n.displayed-item.add-form {\n\tdisplay: block;\n\tbackground-color: var(--add-form-bg);\n}\n\n.add-form-itself,\n.edit-form-itself {\n\tdisplay: grid;\n\tgrid-template-rows: calc(1.7*var(--rvv)) calc(var(--rvv)) calc(4*var(--rvv)) calc(var(--rvv)) calc(2.2*var(--rvv));\n\trow-gap: calc(0.25*var(--rvv));\n\tgrid-template-areas:\n\t\t\"form-title\"\n\t\t\"title-section\"\n\t\t\"description-section\"\n\t\t\"priority-section\"\n\t\t\"submit-button\";\n}\n\n.edit-backdrop {\n\tz-index: 2;\n\tposition: fixed;\n\twidth: 100vw;\n\theight: 100vh;\n\tbackdrop-filter: blur(5px);\n\t--webkit-backdrop-filter: blur(5px);\n}\n\n.edit-form-itself {\n\tposition: fixed;\n\tz-index: 3;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n\tbackground-color: var(--edit-form-bg);\n\twidth: 90vw;\n\tmax-width: calc(15*var(--rvv));\n\tposition: relative;\n\tfont-family: 'Sublima';\n\tfont-size: calc(0.6*var(--rvv));\n\tpadding: calc(0.1*var(--rvv)) calc(0.3*var(--rvv));\n\tborder: 1px solid black;\n\tborder-radius: calc(0.8*var(--rvv));\n}\n\n.form-title {\n\tmargin: 0 1%;\n\tmax-width: 90vw;\n\tgrid-area: form-title;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.form-title-text {\n\tfont-size: calc(0.8*var(--rvv));\n}\n\n.form-title-text:hover {\n\tfont-style: italic;\n}\n\n.close-button {\n\tcursor: pointer;\n\tbackground-color: var(--close-button);\n\tmargin-left: auto;\n\tborder: 1px solid black;\n\theight: calc(0.9*var(--rvv));\n\twidth: calc(0.9*var(--rvv));\n\tborder-radius: calc(var(--rvv));\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.close-button img {\n\theight: 100%;\n}\n\n.title-section {\n\tgrid-area: title-section;\n\tdisplay: grid;\n\tgrid-template-columns: calc(3.5*var(--rvv)) 1fr;\n}\n\n.title-section label {\n\tfont-size: calc(0.5*var(--rvv));\n}\n\n.title-section input,\n.description-section textarea {\n\twidth: 93%;\n\tbackground-color: var(--form-input-bg);\n\tborder: 1px solid black;\n\tborder-radius: calc(var(--rvv));\n\tpadding-left: 10px;\n\tfont-family: 'Sublima';\n\tfont-size: calc(0.45*var(--rvv));\n}\n\n.description-section textarea {\n\tborder-radius: calc(0.5*var(--rvv));\n\tresize: none;\n}\n\ninput:focus,\ntextarea:focus {\n\tappearance: none;\n\toutline: none;\n\tbox-shadow: 0 0 0 3px var(--input-focus-outline);\n}\n\ninput:not(:focus),\ntextarea:not(:focus) {\n\tcursor: pointer;\n}\n\n.description-section {\n\tgrid-area: description-section;\n\tdisplay: grid;\n\tgrid-template-columns: calc(3.5*var(--rvv)) 1fr;\n}\n\n.description-section label {\n\tfont-size: calc(0.5*var(--rvv));\n}\n\n.priority-section {\n\tmargin-top: 2px;\n\tgrid-area: priority-section;\n\tdisplay: grid;\n\tgrid-template-columns: calc(3.5*var(--rvv)) 1fr 1fr;\n}\n\n.priority-label {\n\tfont-size: calc(0.5*var(--rvv));\n}\n\n.radio-option {\n\tcursor: pointer;\n\tfont-family: 'Major Mono';\n\twidth: calc(3*var(--rvv));\n\theight: calc(var(--rvv));\n\tborder: 1px solid black;\n\tborder-radius: 15%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n\tbackground-color: var(--priority-button-default);\n}\n\n.radio-option label {\n\tcursor: pointer;\n}\n\n.now-option {\n\tjustify-self: center;\n\tletter-spacing: calc(0.3*var(--rvv));\n\ttext-indent: calc(0.3*var(--rvv));\n}\n\n.now-option.selected-priority {\n\tbackground-color: var(--now-button);\n\tbox-shadow: 0 0 0 3px var(--button-outline);\n}\n\n.later-option {\n\tjustify-self: center;\n\tletter-spacing: calc(0.1*var(--rvv));\n\ttext-indent: calc(0.1*var(--rvv));\n}\n\n.later-option.selected-priority {\n\tbackground-color: var(--later-button);\n\tbox-shadow: 0 0 0 3px var(--button-outline);\n}\n\n.radio-input {\n\tdisplay: none;\n\tpadding: 0;\n\tmargin: 0;\n\tappearance: none;\n}\n\n.submit-button {\n\tcursor: pointer;\n\tgrid-area: submit-button;\n\tfont-family: 'Sublima';\n\tbackground-color: var(--submit-button-bg);\n\talign-self: center;\n\tjustify-self: center;\n\tborder: 1px solid black;\n\theight: calc(1.5*var(--rvv));\n\twidth: 95%;\n\tborder-radius: calc(var(--rvv));\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.submit-button img {\n\theight: 100%;\n}\n\n.displayed-item img {\n\tcursor: pointer;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.checkbox img,\n.expand img {\n\twidth: calc(var(--rvv));\n}\n\n.edit img {\n\twidth: calc(0.8*var(--rvv));\n}\n\n.checkbox {\n\tgrid-area: checkbox;\n\tmargin-left: calc(0.2*var(--rvv));\n}\n\n.item-title {\n\tposition: relative;\n\tbottom: 2px;\n\tgrid-area: title;\n\tjustify-self: start;\n}\n\n.expandable-title {\n\tcursor: pointer;\n}\n\n.edit {\n\tgrid-area: edit;\n}\n\n.expand {\n\tgrid-area: expand;\n}\n\n.shrink {\n\tgrid-area: expand;\n\taspect-ratio: 1 / 1;\n}\n\n.shrink img {\n\theight: calc(var(--rvv));\n}\n\n.item-description {\n\tborder-radius: 3px;\n\tfont-style: italic;\n\tgrid-area: description;\n\talign-self: flex-start;\n\tjustify-self: flex-start;\n\tfont-size: 80%;\n}\n\n.expanded-item .delete {\n\tgrid-area: delete;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: flex-end;\n\tmargin-bottom: calc(0.3*var(--rvv));\n}\n\n.delete img {\n\theight: calc(var(--rvv));\n}\n\nfooter {\n\theight: 5vh;\n\tmin-height: calc(0.8*var(--rvv));\n\tbackground-color: var(--title-footer-color);\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-size: calc(0.5*var(--rvv));\n\tborder-top: 1px solid black;\n\tfont-family: 'Sublima';\n\tfont-size: calc(0.4*var(--rvv));\n\tletter-spacing: calc(0.1*var(--rvv));\n\ttext-indent: calc(0.1*var(--rvv));\n}\n\n/* dark mode styling: */\n\nbody.dark {\n\tcolor: var(--dark-text);\n}\n\n.title.dark {\n\tbackground-color: var(--dark-title-footer-color);\n\tborder-bottom: 1px solid var(--dark-border);\n}\n\n.nav.dark {\n\tbackground-color: var(--dark-nav-bg);\n\tborder-bottom: 1px solid var(--dark-border);\n}\n\n.nav.dark div {\n\tborder: 1px solid var(--dark-border);\n}\n\n.now.dark {\n\tbackground-color: var(--dark-now-button);\n}\n\n.later.dark {\n\tbackground-color: var(--dark-later-button);\n}\n\n.all.dark {\n\tbackground-color: var(--dark-all-button);\n}\n\n.selected.dark {\n\tbox-shadow: 0 0 0 3px var(--dark-button-outline);\n}\n\n.main.dark {\n\tbackground-color: var(--dark-main-bg);\n}\n\n.displayed-item.dark {\n\tborder: 1px solid var(--dark-border);\n\tbackground-color: var(--dark-item-bg);\n}\n\n.displayed-item.now-item.dark {\n\tbackground-color: var(--dark-now-item-bg);\n}\n\n.displayed-item.later-item.dark {\n\tbackground-color: var(--dark-later-item-bg);\n}\n\n.completed-item .item-title.dark {\n\tfilter: brightness(80%);\n\ttext-decoration: underline calc(0.04*var(--rvv)) var(--dark-text);\n\ttext-decoration-skip-ink: none;\n}\n\n.displayed-item.add-form.dark {\n\tbackground-color: var(--dark-add-form-bg);\n}\n\n.edit-form-itself.dark {\n\tbackground-color: var(--dark-add-form-bg);\n}\n\n.close-button.dark {\n\tbackground-color: var(--dark-close-button);\n\tborder: 1px solid var(--dark-border);\n}\n\n.title-section.dark input,\n.description-section.dark textarea {\n\tbackground-color: var(--dark-form-input-bg);\n\tborder: 1px solid var(--dark-border);\n}\n\ninput.dark:focus,\ntextarea.dark:focus {\n\tbox-shadow: 0 0 0 3px var(--dark-input-focus-outline);\n}\n\n.radio-option.dark {\n\tborder: 1px solid var(--dark-border);\n\tbackground-color: var(--dark-priority-button-default);\n}\n\n.now-option.selected-priority.dark {\n\tbackground-color: var(--dark-now-button);\n\tbox-shadow: 0 0 0 3px var(--dark-button-outline);\n}\n\n.later-option.selected-priority.dark {\n\tbackground-color: var(--dark-later-button);\n\tbox-shadow: 0 0 0 3px var(--dark-button-outline);\n}\n\n.displayed-item.add-item-button.dark {\n\tbackground-color: var(--dark-add-item-button);\n}\n\n.submit-button.dark {\n\tbackground-color: var(--dark-submit-button-bg);\n\tborder: 1px solid var(--dark-border);\n}\n\nfooter.dark {\n\tbackground-color: var(--dark-title-footer-color);\n\tborder-top: 1px solid var(--dark-border);\n}\n\n/* desktop version: */\n@media only screen and (min-width: 750px) {\n\n\t.nav div {\n\t\ttransition: 0.075s linear;\n\t}\n\n\t.nav div:hover {\n\t\ttransform: scale(1.05);\n\t}\n\n\t.checkbox,\n\t.edit,\n\t.expand,\n\t.shrink,\n\t.delete,\n\t.add-item-button,\n\t.radio-option,\n\t.submit-button,\n\t.close-button {\n\t\ttransition: 0.075s linear;\n\t}\n\n\t.checkbox:hover {\n\t\ttransform: scale(1.075);\n\t}\n\n\t.edit:hover {\n\t\ttransform: scale(1.1);\n\t}\n\n\t.expand:hover {\n\t\ttransform: scale(1.25);\n\t}\n\n\t.shrink:hover {\n\t\ttransform: scale(1.1);\n\t}\n\n\t.delete:hover {\n\t\ttransform: scale(1.075);\n\t}\n\n\t.add-item-button:hover {\n\t\ttransform: scale(1.05);\n\t}\n\n\t.radio-option:hover {\n\t\ttransform: scale(1.05);\n\t}\n\n\t.submit-button:hover {\n\t\ttransform: scale(1.01);\n\t}\n\n\t.close-button:hover {\n\t\ttransform: scale(1.1);\n\t}\n\n}\n\n@media only screen and (max-width: 750px) {\n\t.completed-item .item-title {\n\t\tfont-style: italic;\n\t\ttext-decoration: line-through;\n\t\ttext-decoration-skip-ink: none;\n\t\ttext-underline-offset: 0;\n\t}\n}\n\n@media screen and (orientation: landscape) {\n\tbody {\n\t\tmin-height: 100vh;\n\t\tmin-width: 100vw;\n\t}\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;;AAEA;IACI,6BAA6B;;CAEhC,eAAe;IACZ,oBAAoB;IACpB,gBAAgB;IAChB,sBAAsB;IACtB,oBAAoB;IACpB,uBAAuB;IACvB,sBAAsB;IACtB,mBAAmB;IACnB,mBAAmB;IACnB,oBAAoB;IACpB,wBAAwB;IACxB,qBAAqB;IACrB,cAAc;IACd,sBAAsB;IACtB,cAAc;;CAEjB,+BAA+B;CAC/B,mBAAmB;CACnB,qBAAqB;CACrB,uBAAuB;CACvB,uBAAuB;CACvB,2BAA2B;CAC3B,8BAA8B;CAC9B,6BAA6B;CAC7B,oBAAoB;CACpB,oBAAoB;CACpB,wBAAwB;CACxB,0BAA0B;CAC1B,2BAA2B;CAC3B,4BAA4B;CAC5B,wBAAwB;CACxB,uBAAuB;CACvB,oCAAoC;CACpC,wBAAwB;CACxB,wBAAwB;CACxB,6BAA6B;CAC7B,yBAAyB;CACzB,gCAAgC;;CAEhC,oBAAoB;CACpB,sBAAsB;CACtB,oCAAoC;CACpC,wBAAwB;CACxB,4BAA4B;CAC5B,4BAA4B;CAC5B,4BAA4B;CAC5B,gCAAgC;CAChC,qCAAqC;CACrC,kCAAkC;CAClC,yBAAyB;CACzB,yBAAyB;CACzB,2CAA2C;CAC3C,+BAA+B;CAC/B,iCAAiC;CACjC,6BAA6B;CAC7B,yCAAyC;CACzC,6BAA6B;CAC7B,6BAA6B;CAC7B,kCAAkC;CAClC,8BAA8B;AAC/B;;AAEA;CACC,yBAAyB;CACzB,4CAA0C;AAC3C;;AAEA;CACC,sBAAsB;CACtB,4CAA0C;AAC3C;;AAEA;CACC,2BAA2B;CAC3B,4CAA+C;AAChD;;;AAGA;;IAEI,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;CACC,YAAY;CACZ,8BAA8B;CAC9B,aAAa;CACb,sBAAsB;AACvB;;AAEA;CACC,gCAAgC;CAChC,OAAO;CACP,kBAAkB;CAClB,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,yBAAyB;CACzB,2CAA2C;CAC3C,8BAA8B;AAC/B;;AAEA;CACC,kBAAkB;CAClB,sBAAsB;CACtB,gCAAgC;CAChC,oCAAoC;CACpC,iCAAiC;AAClC;;AAEA;;CAEC,eAAe;CACf,2BAA2B;CAC3B,0BAA0B;CAC1B,aAAa;CACb,uBAAuB;CACvB,mBAAmB;AACpB;;AAEA;;CAEC,mBAAmB;AACpB;;AAEA;;CAEC,WAAW;CACX,UAAU;AACX;;AAEA;;CAEC,wBAAwB;AACzB;;AAEA;CACC,uCAAuC;CACvC,qBAAqB;AACtB;;AAEA;CACC,kCAAkC;CAClC,qBAAqB;AACtB;;AAEA;CACC,OAAO;CACP,aAAa;CACb,6BAA6B;CAC7B,mBAAmB;CACnB,yBAAyB;CACzB,+BAA+B;CAC/B,8BAA8B;AAC/B;;AAEA;CACC,+BAA+B;CAC/B,eAAe;CACf,yBAAyB;CACzB,wBAAwB;CACxB,uBAAuB;CACvB,kBAAkB;CAClB,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,kBAAkB;AACnB;;AAEA;CACC,mCAAmC;AACpC;;AAEA;;CAEC,oCAAoC;CACpC,iCAAiC;AAClC;;AAEA;CACC,qCAAqC;CACrC,oCAAoC;CACpC,iCAAiC;AAClC;;AAEA;CACC,mCAAmC;AACpC;;AAEA;CACC,2CAA2C;AAC5C;;AAEA;CACC,kBAAkB;CAClB,UAAU;CACV,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB,+BAA+B;CAC/B,yBAAyB;CACzB,gCAAgC;AACjC;;AAEA;CACC,WAAW;CACX,8BAA8B;CAC9B,kBAAkB;CAClB,sBAAsB;CACtB,+BAA+B;CAC/B,kDAAkD;CAClD,uBAAuB;CACvB,mCAAmC;CACnC,8BAA8B;CAC9B,aAAa;CACb,iFAAiF;CACjF,uBAAuB;CACvB,iDAAiD;CACjD,gCAAgC;AACjC;;AAEA;CACC,oCAAoC;AACrC;;AAEA;CACC,sCAAsC;AACvC;;AAEA;CACC,aAAa;CACb,iFAAiF;CACjF,4CAA4C;CAC5C;;0BAEyB;AAC1B;;AAEA;CACC,kCAAkC;CAClC,mCAAmC;AACpC;;AAEA;CACC,YAAY;AACb;;AAEA;CACC,sBAAsB;AACvB;;AAEA;CACC,kBAAkB;CAClB,sDAAsD;CACtD,8BAA8B;CAC9B,4CAA4C;AAC7C;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,UAAU;CACV,SAAS;CACT,eAAe;CACf,wCAAwC;CACxC,4BAA4B;CAC5B,2BAA2B;CAC3B,aAAa;CACb,uBAAuB;CACvB,mBAAmB;AACpB;;AAEA;CACC,gBAAgB;CAChB,eAAe;AAChB;;AAEA;CACC,cAAc;CACd,oCAAoC;AACrC;;AAEA;;CAEC,aAAa;CACb,kHAAkH;CAClH,8BAA8B;CAC9B;;;;;iBAKgB;AACjB;;AAEA;CACC,UAAU;CACV,eAAe;CACf,YAAY;CACZ,aAAa;CACb,0BAA0B;CAC1B,mCAAmC;AACpC;;AAEA;CACC,eAAe;CACf,UAAU;IACP,QAAQ;IACR,SAAS;IACT,gCAAgC;CACnC,qCAAqC;CACrC,WAAW;CACX,8BAA8B;CAC9B,kBAAkB;CAClB,sBAAsB;CACtB,+BAA+B;CAC/B,kDAAkD;CAClD,uBAAuB;CACvB,mCAAmC;AACpC;;AAEA;CACC,YAAY;CACZ,eAAe;CACf,qBAAqB;CACrB,aAAa;CACb,uBAAuB;CACvB,mBAAmB;AACpB;;AAEA;CACC,+BAA+B;AAChC;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,eAAe;CACf,qCAAqC;CACrC,iBAAiB;CACjB,uBAAuB;CACvB,4BAA4B;CAC5B,2BAA2B;CAC3B,+BAA+B;CAC/B,aAAa;CACb,uBAAuB;CACvB,mBAAmB;AACpB;;AAEA;CACC,YAAY;AACb;;AAEA;CACC,wBAAwB;CACxB,aAAa;CACb,+CAA+C;AAChD;;AAEA;CACC,+BAA+B;AAChC;;AAEA;;CAEC,UAAU;CACV,sCAAsC;CACtC,uBAAuB;CACvB,+BAA+B;CAC/B,kBAAkB;CAClB,sBAAsB;CACtB,gCAAgC;AACjC;;AAEA;CACC,mCAAmC;CACnC,YAAY;AACb;;AAEA;;CAEC,gBAAgB;CAChB,aAAa;CACb,gDAAgD;AACjD;;AAEA;;CAEC,eAAe;AAChB;;AAEA;CACC,8BAA8B;CAC9B,aAAa;CACb,+CAA+C;AAChD;;AAEA;CACC,+BAA+B;AAChC;;AAEA;CACC,eAAe;CACf,2BAA2B;CAC3B,aAAa;CACb,mDAAmD;AACpD;;AAEA;CACC,+BAA+B;AAChC;;AAEA;CACC,eAAe;CACf,yBAAyB;CACzB,yBAAyB;CACzB,wBAAwB;CACxB,uBAAuB;CACvB,kBAAkB;CAClB,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,kBAAkB;CAClB,gDAAgD;AACjD;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,oBAAoB;CACpB,oCAAoC;CACpC,iCAAiC;AAClC;;AAEA;CACC,mCAAmC;CACnC,2CAA2C;AAC5C;;AAEA;CACC,oBAAoB;CACpB,oCAAoC;CACpC,iCAAiC;AAClC;;AAEA;CACC,qCAAqC;CACrC,2CAA2C;AAC5C;;AAEA;CACC,aAAa;CACb,UAAU;CACV,SAAS;CACT,gBAAgB;AACjB;;AAEA;CACC,eAAe;CACf,wBAAwB;CACxB,sBAAsB;CACtB,yCAAyC;CACzC,kBAAkB;CAClB,oBAAoB;CACpB,uBAAuB;CACvB,4BAA4B;CAC5B,UAAU;CACV,+BAA+B;CAC/B,aAAa;CACb,uBAAuB;CACvB,mBAAmB;AACpB;;AAEA;CACC,YAAY;AACb;;AAEA;CACC,eAAe;CACf,aAAa;CACb,uBAAuB;CACvB,mBAAmB;AACpB;;AAEA;;CAEC,uBAAuB;AACxB;;AAEA;CACC,2BAA2B;AAC5B;;AAEA;CACC,mBAAmB;CACnB,iCAAiC;AAClC;;AAEA;CACC,kBAAkB;CAClB,WAAW;CACX,gBAAgB;CAChB,mBAAmB;AACpB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,iBAAiB;AAClB;;AAEA;CACC,iBAAiB;CACjB,mBAAmB;AACpB;;AAEA;CACC,wBAAwB;AACzB;;AAEA;CACC,kBAAkB;CAClB,kBAAkB;CAClB,sBAAsB;CACtB,sBAAsB;CACtB,wBAAwB;CACxB,cAAc;AACf;;AAEA;CACC,iBAAiB;CACjB,aAAa;CACb,sBAAsB;CACtB,yBAAyB;CACzB,mCAAmC;AACpC;;AAEA;CACC,wBAAwB;AACzB;;AAEA;CACC,WAAW;CACX,gCAAgC;CAChC,2CAA2C;CAC3C,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,+BAA+B;CAC/B,2BAA2B;CAC3B,sBAAsB;CACtB,+BAA+B;CAC/B,oCAAoC;CACpC,iCAAiC;AAClC;;AAEA,uBAAuB;;AAEvB;CACC,uBAAuB;AACxB;;AAEA;CACC,gDAAgD;CAChD,2CAA2C;AAC5C;;AAEA;CACC,oCAAoC;CACpC,2CAA2C;AAC5C;;AAEA;CACC,oCAAoC;AACrC;;AAEA;CACC,wCAAwC;AACzC;;AAEA;CACC,0CAA0C;AAC3C;;AAEA;CACC,wCAAwC;AACzC;;AAEA;CACC,gDAAgD;AACjD;;AAEA;CACC,qCAAqC;AACtC;;AAEA;CACC,oCAAoC;CACpC,qCAAqC;AACtC;;AAEA;CACC,yCAAyC;AAC1C;;AAEA;CACC,2CAA2C;AAC5C;;AAEA;CACC,uBAAuB;CACvB,iEAAiE;CACjE,8BAA8B;AAC/B;;AAEA;CACC,yCAAyC;AAC1C;;AAEA;CACC,yCAAyC;AAC1C;;AAEA;CACC,0CAA0C;CAC1C,oCAAoC;AACrC;;AAEA;;CAEC,2CAA2C;CAC3C,oCAAoC;AACrC;;AAEA;;CAEC,qDAAqD;AACtD;;AAEA;CACC,oCAAoC;CACpC,qDAAqD;AACtD;;AAEA;CACC,wCAAwC;CACxC,gDAAgD;AACjD;;AAEA;CACC,0CAA0C;CAC1C,gDAAgD;AACjD;;AAEA;CACC,6CAA6C;AAC9C;;AAEA;CACC,8CAA8C;CAC9C,oCAAoC;AACrC;;AAEA;CACC,gDAAgD;CAChD,wCAAwC;AACzC;;AAEA,qBAAqB;AACrB;;CAEC;EACC,yBAAyB;CAC1B;;CAEA;EACC,sBAAsB;CACvB;;CAEA;;;;;;;;;EASC,yBAAyB;CAC1B;;CAEA;EACC,uBAAuB;CACxB;;CAEA;EACC,qBAAqB;CACtB;;CAEA;EACC,sBAAsB;CACvB;;CAEA;EACC,qBAAqB;CACtB;;CAEA;EACC,uBAAuB;CACxB;;CAEA;EACC,sBAAsB;CACvB;;CAEA;EACC,sBAAsB;CACvB;;CAEA;EACC,sBAAsB;CACvB;;CAEA;EACC,qBAAqB;CACtB;;AAED;;AAEA;CACC;EACC,kBAAkB;EAClB,6BAA6B;EAC7B,8BAA8B;EAC9B,wBAAwB;CACzB;AACD;;AAEA;CACC;EACC,iBAAiB;EACjB,gBAAgB;CACjB;AACD","sourcesContent":["html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n:root {\n    --rvv: calc(1rem + 1vh + 1vw);\n\n\t--blue: #2E5169;\n    --blue-gray: #5E686D;\n    --brown: #6F5746;\n    --brown-muted: #63584C;\n    --brown-tan: #A58F85;\n    --forest-green: #4D663E;\n    --green-brown: #5F563F;\n    --gray-tan: #C9BBA3;\n    --tan-gray: #D1C9BA;\n    --off-white: #E4D9C5;\n    --orange-yellow: #E1B270;\n    --orange-tan: #CDA885;\n    --red: #AC3A3E;\n    --special-red: #824E4A;\n    --tan: #D2BC9B;\n\n\t--title-footer-color: #ba8e5ede;\n\t--nav-bg: #e4d9c574;\n\t--now-button: #749c5d;\n\t--later-button: #b56c67;\n\t--all-button: #e0a85bc2;\n\t--button-outline: #f0991fd5;\n\t--input-focus-outline: #e5982d;\n\t--input-valid-outline:#4D663E;\n\t--main-bg: #e1cfae97;\n\t--item-bg: #2086ca92;\n\t--now-item-bg: #629c407c;\n\t--later-item-bg: #da8680c1;\n\t--description-bg: #d8f2ff95;\n\t--add-item-button: #ba8d5e85;\n\t--add-form-bg: #f0d7a9de;\n\t--edit-form-bg: #f0d7a9;\n\t--priority-button-default: #c8b5a285;\n\t--form-button: #ba8d5e85;\n\t--form-input-bg: #F3EEE5;\n\t--submit-button-bg: #87b6d5b4;\n\t--close-button: #986f4471;\n\t--display-icon: calc(var(--rvv));\n\n\t--dark-text: #ddd2bf;\n\t--dark-border: #272420;\n\t--dark-title-footer-color: #201c19de;\n\t--dark-nav-bg: #23201cc3;\n\t--dark-now-button: #384a2dda;\n\t--dark-later-button: #8e5652;\n\t--dark-all-button: #d49f539c;\n\t--dark-button-outline: #ee9f32ca;\n\t--dark-input-focus-outline: #ee9f32ca;\n\t--dark-input-valid-outline:#4D663E;\n\t--dark-main-bg: #24211da1;\n\t--dark-item-bg: #123c5892;\n\t--dark-now-item-bg: rgba(46, 80, 28, 0.527);\n\t--dark-later-item-bg: #754743b2;\n\t--dark-add-item-button: #815e3670;\n\t--dark-add-form-bg: #3c3935de;\n\t--dark-priority-button-default: #8b776285;\n\t--dark-form-button: #ba8d5e85;\n\t--dark-form-input-bg: #aba69a;\n\t--dark-submit-button-bg: #668da8b4;\n\t--dark-close-button: #96857385;\n}\n\n@font-face {\n\tfont-family: 'Major Mono';\n\tsrc: url('font/major-mono/major-mono.ttf');\n}\n\n@font-face {\n\tfont-family: 'Sublima';\n\tsrc: url('font/sublima/sublima-light.otf');\n}\n\n@font-face {\n\tfont-family: 'Sublima Bold';\n\tsrc: url('font/sublima/sublima-extra-bold.otf');\n}\n\n\nhtml,\nbody {\n    box-sizing: border-box;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n}\n\nheader {\n\theight: 15vh;\n\tmin-height: calc(3*var(--rvv));\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.title {\n\tmin-height: calc(0.8*var(--rvv));\n\tflex: 1;\n\toverflow-x: hidden;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: calc(0.6*var(--rvv));\n\tbackground-color: var(--title-footer-color);\n\tborder-bottom: 1px solid black;\n}\n\n.title-text {\n\ttext-align: center;\n\tfont-family: 'Sublima';\n\tfont-size: calc(0.45*var(--rvv));\n\tletter-spacing: calc(0.1*var(--rvv));\n\ttext-indent: calc(0.1*var(--rvv));\n}\n\n.light-mode,\n.dark-mode {\n\tcursor: pointer;\n\theight: var(--display-icon);\n\twidth: var(--display-icon);\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.light-mode.dark,\n.dark-mode.dark {\n\tfilter: invert(80%);\n}\n\n.light-mode img,\n.dark-mode img {\n\theight: 80%;\n\twidth: 80%;\n}\n\n.selected-display.light-mode,\n.selected-display.dark-mode {\n\ttransition: 0.25s linear;\n}\n\n.selected-display.light-mode img {\n\tfilter: drop-shadow(0 0 5px var(--red));\n\ttransform: scale(1.2);\n}\n\n.selected-display.dark-mode img {\n\tfilter: drop-shadow(0 0 5px black);\n\ttransform: scale(1.2);\n}\n\n.nav {\n\tflex: 2;\n\tdisplay: flex;\n\tjustify-content: space-around;\n\talign-items: center;\n\tfont-family: 'Major Mono';\n\tbackground-color: var(--nav-bg);\n\tborder-bottom: 1px solid black;\n}\n\n.nav div {\n\tfont-size: calc(0.6*var(--rvv));\n\tcursor: pointer;\n\twidth: calc(3*var(--rvv));\n\theight: calc(var(--rvv));\n\tborder: 1px solid black;\n\tborder-radius: 15%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n}\n\n.now {\n\tbackground-color: var(--now-button);\n}\n\n.now,\n.all {\n\tletter-spacing: calc(0.3*var(--rvv));\n\ttext-indent: calc(0.3*var(--rvv));\n}\n\n.later {\n\tbackground-color: var(--later-button);\n\tletter-spacing: calc(0.1*var(--rvv));\n\ttext-indent: calc(0.1*var(--rvv));\n}\n\n.all {\n\tbackground-color: var(--all-button);\n}\n\n.selected {\n\tbox-shadow: 0 0 0 3px var(--button-outline);\n}\n\n.main {\n\tposition: relative;\n\tflex: auto;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tpadding: calc(0.5*var(--rvv)) 0;\n\tgap: calc(0.6*var(--rvv));\n\tbackground-color: var(--main-bg);\n}\n\n.displayed-item {\n\twidth: 90vw;\n\tmax-width: calc(15*var(--rvv));\n\tposition: relative;\n\tfont-family: 'Sublima';\n\tfont-size: calc(0.6*var(--rvv));\n\tpadding: calc(0.1*var(--rvv)) calc(0.3*var(--rvv));\n\tborder: 1px solid black;\n\tborder-radius: calc(0.8*var(--rvv));\n\tmargin: 0 calc(0.7*var(--rvv));\n\tdisplay: grid;\n\tgrid-template-columns: calc(1.4*var(--rvv)) 1fr calc(var(--rvv)) calc(var(--rvv));\n\tgrid-template-rows: 1fr;\n\tgrid-template-areas: \"checkbox title edit expand\";\n\tbackground-color: var(--item-bg);\n}\n\n.displayed-item.now-item {\n\tbackground-color: var(--now-item-bg);\n}\n\n.displayed-item.later-item {\n\tbackground-color: var(--later-item-bg);\n}\n\n.expanded-item {\n\tdisplay: grid;\n\tgrid-template-columns: calc(1.4*var(--rvv)) 1fr calc(var(--rvv)) calc(var(--rvv));\n\tgrid-template-rows: calc(1.2*var(--rvv)) 1fr;\n\tgrid-template-areas: \n\t\t\"checkbox title edit expand\"\n\t\t\". description . delete\";\n}\n\n.expanded-item .item-description {\n\tmargin-right: calc(0.3*var(--rvv));\n\tmargin-bottom: calc(0.3*var(--rvv));\n}\n\n.expanded-item .item-title {\n\tcursor: auto;\n}\n\n.completed-item {\n\tfilter: grayscale(70%);\n}\n\n.completed-item .item-title {\n\tfont-style: italic;\n\ttext-decoration: underline calc(0.04*var(--rvv)) black;\n\ttext-decoration-skip-ink: none;\n\ttext-underline-offset: calc(-0.2*var(--rvv));\n}\n\n.completed-item .item-description {\n\tfont-style: italic;\n}\n\n.displayed-item.add-item-button {\n\tpadding: 0;\n\tmargin: 0;\n\tcursor: pointer;\n\tbackground-color: var(--add-item-button);\n\theight: calc(1.5*var(--rvv));\n\twidth: calc(1.5*var(--rvv));\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.add-item-button img {\n\tmax-height: 100%;\n\tmax-width: 100%;\n}\n\n.displayed-item.add-form {\n\tdisplay: block;\n\tbackground-color: var(--add-form-bg);\n}\n\n.add-form-itself,\n.edit-form-itself {\n\tdisplay: grid;\n\tgrid-template-rows: calc(1.7*var(--rvv)) calc(var(--rvv)) calc(4*var(--rvv)) calc(var(--rvv)) calc(2.2*var(--rvv));\n\trow-gap: calc(0.25*var(--rvv));\n\tgrid-template-areas:\n\t\t\"form-title\"\n\t\t\"title-section\"\n\t\t\"description-section\"\n\t\t\"priority-section\"\n\t\t\"submit-button\";\n}\n\n.edit-backdrop {\n\tz-index: 2;\n\tposition: fixed;\n\twidth: 100vw;\n\theight: 100vh;\n\tbackdrop-filter: blur(5px);\n\t--webkit-backdrop-filter: blur(5px);\n}\n\n.edit-form-itself {\n\tposition: fixed;\n\tz-index: 3;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n\tbackground-color: var(--edit-form-bg);\n\twidth: 90vw;\n\tmax-width: calc(15*var(--rvv));\n\tposition: relative;\n\tfont-family: 'Sublima';\n\tfont-size: calc(0.6*var(--rvv));\n\tpadding: calc(0.1*var(--rvv)) calc(0.3*var(--rvv));\n\tborder: 1px solid black;\n\tborder-radius: calc(0.8*var(--rvv));\n}\n\n.form-title {\n\tmargin: 0 1%;\n\tmax-width: 90vw;\n\tgrid-area: form-title;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.form-title-text {\n\tfont-size: calc(0.8*var(--rvv));\n}\n\n.form-title-text:hover {\n\tfont-style: italic;\n}\n\n.close-button {\n\tcursor: pointer;\n\tbackground-color: var(--close-button);\n\tmargin-left: auto;\n\tborder: 1px solid black;\n\theight: calc(0.9*var(--rvv));\n\twidth: calc(0.9*var(--rvv));\n\tborder-radius: calc(var(--rvv));\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.close-button img {\n\theight: 100%;\n}\n\n.title-section {\n\tgrid-area: title-section;\n\tdisplay: grid;\n\tgrid-template-columns: calc(3.5*var(--rvv)) 1fr;\n}\n\n.title-section label {\n\tfont-size: calc(0.5*var(--rvv));\n}\n\n.title-section input,\n.description-section textarea {\n\twidth: 93%;\n\tbackground-color: var(--form-input-bg);\n\tborder: 1px solid black;\n\tborder-radius: calc(var(--rvv));\n\tpadding-left: 10px;\n\tfont-family: 'Sublima';\n\tfont-size: calc(0.45*var(--rvv));\n}\n\n.description-section textarea {\n\tborder-radius: calc(0.5*var(--rvv));\n\tresize: none;\n}\n\ninput:focus,\ntextarea:focus {\n\tappearance: none;\n\toutline: none;\n\tbox-shadow: 0 0 0 3px var(--input-focus-outline);\n}\n\ninput:not(:focus),\ntextarea:not(:focus) {\n\tcursor: pointer;\n}\n\n.description-section {\n\tgrid-area: description-section;\n\tdisplay: grid;\n\tgrid-template-columns: calc(3.5*var(--rvv)) 1fr;\n}\n\n.description-section label {\n\tfont-size: calc(0.5*var(--rvv));\n}\n\n.priority-section {\n\tmargin-top: 2px;\n\tgrid-area: priority-section;\n\tdisplay: grid;\n\tgrid-template-columns: calc(3.5*var(--rvv)) 1fr 1fr;\n}\n\n.priority-label {\n\tfont-size: calc(0.5*var(--rvv));\n}\n\n.radio-option {\n\tcursor: pointer;\n\tfont-family: 'Major Mono';\n\twidth: calc(3*var(--rvv));\n\theight: calc(var(--rvv));\n\tborder: 1px solid black;\n\tborder-radius: 15%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n\tbackground-color: var(--priority-button-default);\n}\n\n.radio-option label {\n\tcursor: pointer;\n}\n\n.now-option {\n\tjustify-self: center;\n\tletter-spacing: calc(0.3*var(--rvv));\n\ttext-indent: calc(0.3*var(--rvv));\n}\n\n.now-option.selected-priority {\n\tbackground-color: var(--now-button);\n\tbox-shadow: 0 0 0 3px var(--button-outline);\n}\n\n.later-option {\n\tjustify-self: center;\n\tletter-spacing: calc(0.1*var(--rvv));\n\ttext-indent: calc(0.1*var(--rvv));\n}\n\n.later-option.selected-priority {\n\tbackground-color: var(--later-button);\n\tbox-shadow: 0 0 0 3px var(--button-outline);\n}\n\n.radio-input {\n\tdisplay: none;\n\tpadding: 0;\n\tmargin: 0;\n\tappearance: none;\n}\n\n.submit-button {\n\tcursor: pointer;\n\tgrid-area: submit-button;\n\tfont-family: 'Sublima';\n\tbackground-color: var(--submit-button-bg);\n\talign-self: center;\n\tjustify-self: center;\n\tborder: 1px solid black;\n\theight: calc(1.5*var(--rvv));\n\twidth: 95%;\n\tborder-radius: calc(var(--rvv));\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.submit-button img {\n\theight: 100%;\n}\n\n.displayed-item img {\n\tcursor: pointer;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.checkbox img,\n.expand img {\n\twidth: calc(var(--rvv));\n}\n\n.edit img {\n\twidth: calc(0.8*var(--rvv));\n}\n\n.checkbox {\n\tgrid-area: checkbox;\n\tmargin-left: calc(0.2*var(--rvv));\n}\n\n.item-title {\n\tposition: relative;\n\tbottom: 2px;\n\tgrid-area: title;\n\tjustify-self: start;\n}\n\n.expandable-title {\n\tcursor: pointer;\n}\n\n.edit {\n\tgrid-area: edit;\n}\n\n.expand {\n\tgrid-area: expand;\n}\n\n.shrink {\n\tgrid-area: expand;\n\taspect-ratio: 1 / 1;\n}\n\n.shrink img {\n\theight: calc(var(--rvv));\n}\n\n.item-description {\n\tborder-radius: 3px;\n\tfont-style: italic;\n\tgrid-area: description;\n\talign-self: flex-start;\n\tjustify-self: flex-start;\n\tfont-size: 80%;\n}\n\n.expanded-item .delete {\n\tgrid-area: delete;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: flex-end;\n\tmargin-bottom: calc(0.3*var(--rvv));\n}\n\n.delete img {\n\theight: calc(var(--rvv));\n}\n\nfooter {\n\theight: 5vh;\n\tmin-height: calc(0.8*var(--rvv));\n\tbackground-color: var(--title-footer-color);\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-size: calc(0.5*var(--rvv));\n\tborder-top: 1px solid black;\n\tfont-family: 'Sublima';\n\tfont-size: calc(0.4*var(--rvv));\n\tletter-spacing: calc(0.1*var(--rvv));\n\ttext-indent: calc(0.1*var(--rvv));\n}\n\n/* dark mode styling: */\n\nbody.dark {\n\tcolor: var(--dark-text);\n}\n\n.title.dark {\n\tbackground-color: var(--dark-title-footer-color);\n\tborder-bottom: 1px solid var(--dark-border);\n}\n\n.nav.dark {\n\tbackground-color: var(--dark-nav-bg);\n\tborder-bottom: 1px solid var(--dark-border);\n}\n\n.nav.dark div {\n\tborder: 1px solid var(--dark-border);\n}\n\n.now.dark {\n\tbackground-color: var(--dark-now-button);\n}\n\n.later.dark {\n\tbackground-color: var(--dark-later-button);\n}\n\n.all.dark {\n\tbackground-color: var(--dark-all-button);\n}\n\n.selected.dark {\n\tbox-shadow: 0 0 0 3px var(--dark-button-outline);\n}\n\n.main.dark {\n\tbackground-color: var(--dark-main-bg);\n}\n\n.displayed-item.dark {\n\tborder: 1px solid var(--dark-border);\n\tbackground-color: var(--dark-item-bg);\n}\n\n.displayed-item.now-item.dark {\n\tbackground-color: var(--dark-now-item-bg);\n}\n\n.displayed-item.later-item.dark {\n\tbackground-color: var(--dark-later-item-bg);\n}\n\n.completed-item .item-title.dark {\n\tfilter: brightness(80%);\n\ttext-decoration: underline calc(0.04*var(--rvv)) var(--dark-text);\n\ttext-decoration-skip-ink: none;\n}\n\n.displayed-item.add-form.dark {\n\tbackground-color: var(--dark-add-form-bg);\n}\n\n.edit-form-itself.dark {\n\tbackground-color: var(--dark-add-form-bg);\n}\n\n.close-button.dark {\n\tbackground-color: var(--dark-close-button);\n\tborder: 1px solid var(--dark-border);\n}\n\n.title-section.dark input,\n.description-section.dark textarea {\n\tbackground-color: var(--dark-form-input-bg);\n\tborder: 1px solid var(--dark-border);\n}\n\ninput.dark:focus,\ntextarea.dark:focus {\n\tbox-shadow: 0 0 0 3px var(--dark-input-focus-outline);\n}\n\n.radio-option.dark {\n\tborder: 1px solid var(--dark-border);\n\tbackground-color: var(--dark-priority-button-default);\n}\n\n.now-option.selected-priority.dark {\n\tbackground-color: var(--dark-now-button);\n\tbox-shadow: 0 0 0 3px var(--dark-button-outline);\n}\n\n.later-option.selected-priority.dark {\n\tbackground-color: var(--dark-later-button);\n\tbox-shadow: 0 0 0 3px var(--dark-button-outline);\n}\n\n.displayed-item.add-item-button.dark {\n\tbackground-color: var(--dark-add-item-button);\n}\n\n.submit-button.dark {\n\tbackground-color: var(--dark-submit-button-bg);\n\tborder: 1px solid var(--dark-border);\n}\n\nfooter.dark {\n\tbackground-color: var(--dark-title-footer-color);\n\tborder-top: 1px solid var(--dark-border);\n}\n\n/* desktop version: */\n@media only screen and (min-width: 750px) {\n\n\t.nav div {\n\t\ttransition: 0.075s linear;\n\t}\n\n\t.nav div:hover {\n\t\ttransform: scale(1.05);\n\t}\n\n\t.checkbox,\n\t.edit,\n\t.expand,\n\t.shrink,\n\t.delete,\n\t.add-item-button,\n\t.radio-option,\n\t.submit-button,\n\t.close-button {\n\t\ttransition: 0.075s linear;\n\t}\n\n\t.checkbox:hover {\n\t\ttransform: scale(1.075);\n\t}\n\n\t.edit:hover {\n\t\ttransform: scale(1.1);\n\t}\n\n\t.expand:hover {\n\t\ttransform: scale(1.25);\n\t}\n\n\t.shrink:hover {\n\t\ttransform: scale(1.1);\n\t}\n\n\t.delete:hover {\n\t\ttransform: scale(1.075);\n\t}\n\n\t.add-item-button:hover {\n\t\ttransform: scale(1.05);\n\t}\n\n\t.radio-option:hover {\n\t\ttransform: scale(1.05);\n\t}\n\n\t.submit-button:hover {\n\t\ttransform: scale(1.01);\n\t}\n\n\t.close-button:hover {\n\t\ttransform: scale(1.1);\n\t}\n\n}\n\n@media only screen and (max-width: 750px) {\n\t.completed-item .item-title {\n\t\tfont-style: italic;\n\t\ttext-decoration: line-through;\n\t\ttext-decoration-skip-ink: none;\n\t\ttext-underline-offset: 0;\n\t}\n}\n\n@media screen and (orientation: landscape) {\n\tbody {\n\t\tmin-height: 100vh;\n\t\tmin-width: 100vw;\n\t}\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFFBQVEsTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxPQUFPLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsVUFBVSxPQUFPLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLGFBQWEsTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxP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O0FBQ0U7QUFDRjs7QUFFdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLDhDQUFPO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLDRDQUFTO0FBQ25EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QywyQ0FBUTtBQUNqRDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyx5Q0FBTztBQUN2QztBQUNBOztBQUVBO0FBQ0EsSUFBSSwwREFBYztBQUNsQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQywyQ0FBUztBQUNuRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MseUNBQU87QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUksNERBQWdCOztBQUVwQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBLElBQUksb0RBQVU7O0FBRWQ7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQSxJQUFJLGtEQUFRO0FBQ1osSUFBSSxrREFBUTtBQUNaLElBQUksa0RBQVE7O0FBRVo7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EscURBQXFELEtBQUs7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixnREFBTTs7QUFFM0I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QixrREFBUTs7QUFFL0I7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLGdEQUFNO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLGdEQUFNOztBQUUzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxzREFBbUI7QUFDM0U7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBLHNEQUFzRCxvREFBaUI7QUFDdkU7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsMkNBQVE7QUFDakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLDRDQUFVO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsNENBQVU7QUFDNUQ7QUFDQTtBQUNBLGdCQUFnQixxRkFBeUM7QUFDekQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSwrREFBbUI7O0FBRTNCO0FBQ0EsUUFBUSwrREFBbUI7QUFDM0IsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSw4REFBa0I7O0FBRXRCOztBQUVBO0FBQ0E7QUFDQSxxQ0FBcUMsc0RBQW1CO0FBQ3hEOztBQUVBO0FBQ0E7QUFDQSxxQ0FBcUMsb0RBQWlCO0FBQ3REOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksd0RBQWM7QUFDbEI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDRDQUFVO0FBQzdDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsT0FBTztBQUM1QyxrQ0FBa0Msd0RBQWM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLDRDQUFVO0FBQ2hEO0FBQ0E7O0FBRUEsSUFBSSwyRUFBK0I7O0FBRW5DLElBQUksc0VBQTBCO0FBQzlCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsNENBQVU7QUFDN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLGlFQUFxQjs7QUFFekIsSUFBSSxpRUFBcUI7O0FBRXpCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvYm9keS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvZWRpdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL2xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL2xpc3Rlbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvcGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiZm9udC9tYWpvci1tb25vL21ham9yLW1vbm8udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiZm9udC9zdWJsaW1hL3N1YmxpbWEtbGlnaHQub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiZm9udC9zdWJsaW1hL3N1YmxpbWEtZXh0cmEtYm9sZC5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLXJ2djogY2FsYygxcmVtICsgMXZoICsgMXZ3KTtcXG5cXG5cXHQtLWJsdWU6ICMyRTUxNjk7XFxuICAgIC0tYmx1ZS1ncmF5OiAjNUU2ODZEO1xcbiAgICAtLWJyb3duOiAjNkY1NzQ2O1xcbiAgICAtLWJyb3duLW11dGVkOiAjNjM1ODRDO1xcbiAgICAtLWJyb3duLXRhbjogI0E1OEY4NTtcXG4gICAgLS1mb3Jlc3QtZ3JlZW46ICM0RDY2M0U7XFxuICAgIC0tZ3JlZW4tYnJvd246ICM1RjU2M0Y7XFxuICAgIC0tZ3JheS10YW46ICNDOUJCQTM7XFxuICAgIC0tdGFuLWdyYXk6ICNEMUM5QkE7XFxuICAgIC0tb2ZmLXdoaXRlOiAjRTREOUM1O1xcbiAgICAtLW9yYW5nZS15ZWxsb3c6ICNFMUIyNzA7XFxuICAgIC0tb3JhbmdlLXRhbjogI0NEQTg4NTtcXG4gICAgLS1yZWQ6ICNBQzNBM0U7XFxuICAgIC0tc3BlY2lhbC1yZWQ6ICM4MjRFNEE7XFxuICAgIC0tdGFuOiAjRDJCQzlCO1xcblxcblxcdC0tdGl0bGUtZm9vdGVyLWNvbG9yOiAjYmE4ZTVlZGU7XFxuXFx0LS1uYXYtYmc6ICNlNGQ5YzU3NDtcXG5cXHQtLW5vdy1idXR0b246ICM3NDljNWQ7XFxuXFx0LS1sYXRlci1idXR0b246ICNiNTZjNjc7XFxuXFx0LS1hbGwtYnV0dG9uOiAjZTBhODViYzI7XFxuXFx0LS1idXR0b24tb3V0bGluZTogI2YwOTkxZmQ1O1xcblxcdC0taW5wdXQtZm9jdXMtb3V0bGluZTogI2U1OTgyZDtcXG5cXHQtLWlucHV0LXZhbGlkLW91dGxpbmU6IzRENjYzRTtcXG5cXHQtLW1haW4tYmc6ICNlMWNmYWU5NztcXG5cXHQtLWl0ZW0tYmc6ICMyMDg2Y2E5MjtcXG5cXHQtLW5vdy1pdGVtLWJnOiAjNjI5YzQwN2M7XFxuXFx0LS1sYXRlci1pdGVtLWJnOiAjZGE4NjgwYzE7XFxuXFx0LS1kZXNjcmlwdGlvbi1iZzogI2Q4ZjJmZjk1O1xcblxcdC0tYWRkLWl0ZW0tYnV0dG9uOiAjYmE4ZDVlODU7XFxuXFx0LS1hZGQtZm9ybS1iZzogI2YwZDdhOWRlO1xcblxcdC0tZWRpdC1mb3JtLWJnOiAjZjBkN2E5O1xcblxcdC0tcHJpb3JpdHktYnV0dG9uLWRlZmF1bHQ6ICNjOGI1YTI4NTtcXG5cXHQtLWZvcm0tYnV0dG9uOiAjYmE4ZDVlODU7XFxuXFx0LS1mb3JtLWlucHV0LWJnOiAjRjNFRUU1O1xcblxcdC0tc3VibWl0LWJ1dHRvbi1iZzogIzg3YjZkNWI0O1xcblxcdC0tY2xvc2UtYnV0dG9uOiAjOTg2ZjQ0NzE7XFxuXFx0LS1kaXNwbGF5LWljb246IGNhbGModmFyKC0tcnZ2KSk7XFxuXFxuXFx0LS1kYXJrLXRleHQ6ICNkZGQyYmY7XFxuXFx0LS1kYXJrLWJvcmRlcjogIzI3MjQyMDtcXG5cXHQtLWRhcmstdGl0bGUtZm9vdGVyLWNvbG9yOiAjMjAxYzE5ZGU7XFxuXFx0LS1kYXJrLW5hdi1iZzogIzIzMjAxY2MzO1xcblxcdC0tZGFyay1ub3ctYnV0dG9uOiAjMzg0YTJkZGE7XFxuXFx0LS1kYXJrLWxhdGVyLWJ1dHRvbjogIzhlNTY1MjtcXG5cXHQtLWRhcmstYWxsLWJ1dHRvbjogI2Q0OWY1MzljO1xcblxcdC0tZGFyay1idXR0b24tb3V0bGluZTogI2VlOWYzMmNhO1xcblxcdC0tZGFyay1pbnB1dC1mb2N1cy1vdXRsaW5lOiAjZWU5ZjMyY2E7XFxuXFx0LS1kYXJrLWlucHV0LXZhbGlkLW91dGxpbmU6IzRENjYzRTtcXG5cXHQtLWRhcmstbWFpbi1iZzogIzI0MjExZGExO1xcblxcdC0tZGFyay1pdGVtLWJnOiAjMTIzYzU4OTI7XFxuXFx0LS1kYXJrLW5vdy1pdGVtLWJnOiByZ2JhKDQ2LCA4MCwgMjgsIDAuNTI3KTtcXG5cXHQtLWRhcmstbGF0ZXItaXRlbS1iZzogIzc1NDc0M2IyO1xcblxcdC0tZGFyay1hZGQtaXRlbS1idXR0b246ICM4MTVlMzY3MDtcXG5cXHQtLWRhcmstYWRkLWZvcm0tYmc6ICMzYzM5MzVkZTtcXG5cXHQtLWRhcmstcHJpb3JpdHktYnV0dG9uLWRlZmF1bHQ6ICM4Yjc3NjI4NTtcXG5cXHQtLWRhcmstZm9ybS1idXR0b246ICNiYThkNWU4NTtcXG5cXHQtLWRhcmstZm9ybS1pbnB1dC1iZzogI2FiYTY5YTtcXG5cXHQtLWRhcmstc3VibWl0LWJ1dHRvbi1iZzogIzY2OGRhOGI0O1xcblxcdC0tZGFyay1jbG9zZS1idXR0b246ICM5Njg1NzM4NTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6ICdNYWpvciBNb25vJztcXG5cXHRzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcblxcdGZvbnQtZmFtaWx5OiAnU3VibGltYSc7XFxuXFx0c3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogJ1N1YmxpbWEgQm9sZCc7XFxuXFx0c3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbn1cXG5cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuaGVhZGVyIHtcXG5cXHRoZWlnaHQ6IDE1dmg7XFxuXFx0bWluLWhlaWdodDogY2FsYygzKnZhcigtLXJ2dikpO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRpdGxlIHtcXG5cXHRtaW4taGVpZ2h0OiBjYWxjKDAuOCp2YXIoLS1ydnYpKTtcXG5cXHRmbGV4OiAxO1xcblxcdG92ZXJmbG93LXg6IGhpZGRlbjtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiBjYWxjKDAuNip2YXIoLS1ydnYpKTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aXRsZS1mb290ZXItY29sb3IpO1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnRpdGxlLXRleHQge1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRmb250LWZhbWlseTogJ1N1YmxpbWEnO1xcblxcdGZvbnQtc2l6ZTogY2FsYygwLjQ1KnZhcigtLXJ2dikpO1xcblxcdGxldHRlci1zcGFjaW5nOiBjYWxjKDAuMSp2YXIoLS1ydnYpKTtcXG5cXHR0ZXh0LWluZGVudDogY2FsYygwLjEqdmFyKC0tcnZ2KSk7XFxufVxcblxcbi5saWdodC1tb2RlLFxcbi5kYXJrLW1vZGUge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRoZWlnaHQ6IHZhcigtLWRpc3BsYXktaWNvbik7XFxuXFx0d2lkdGg6IHZhcigtLWRpc3BsYXktaWNvbik7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubGlnaHQtbW9kZS5kYXJrLFxcbi5kYXJrLW1vZGUuZGFyayB7XFxuXFx0ZmlsdGVyOiBpbnZlcnQoODAlKTtcXG59XFxuXFxuLmxpZ2h0LW1vZGUgaW1nLFxcbi5kYXJrLW1vZGUgaW1nIHtcXG5cXHRoZWlnaHQ6IDgwJTtcXG5cXHR3aWR0aDogODAlO1xcbn1cXG5cXG4uc2VsZWN0ZWQtZGlzcGxheS5saWdodC1tb2RlLFxcbi5zZWxlY3RlZC1kaXNwbGF5LmRhcmstbW9kZSB7XFxuXFx0dHJhbnNpdGlvbjogMC4yNXMgbGluZWFyO1xcbn1cXG5cXG4uc2VsZWN0ZWQtZGlzcGxheS5saWdodC1tb2RlIGltZyB7XFxuXFx0ZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgNXB4IHZhcigtLXJlZCkpO1xcblxcdHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuXFxuLnNlbGVjdGVkLWRpc3BsYXkuZGFyay1tb2RlIGltZyB7XFxuXFx0ZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgNXB4IGJsYWNrKTtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbi5uYXYge1xcblxcdGZsZXg6IDI7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGZvbnQtZmFtaWx5OiAnTWFqb3IgTW9ubyc7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWJnKTtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5uYXYgZGl2IHtcXG5cXHRmb250LXNpemU6IGNhbGMoMC42KnZhcigtLXJ2dikpO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHR3aWR0aDogY2FsYygzKnZhcigtLXJ2dikpO1xcblxcdGhlaWdodDogY2FsYyh2YXIoLS1ydnYpKTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG5cXHRib3JkZXItcmFkaXVzOiAxNSU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm5vdyB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbm93LWJ1dHRvbik7XFxufVxcblxcbi5ub3csXFxuLmFsbCB7XFxuXFx0bGV0dGVyLXNwYWNpbmc6IGNhbGMoMC4zKnZhcigtLXJ2dikpO1xcblxcdHRleHQtaW5kZW50OiBjYWxjKDAuMyp2YXIoLS1ydnYpKTtcXG59XFxuXFxuLmxhdGVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sYXRlci1idXR0b24pO1xcblxcdGxldHRlci1zcGFjaW5nOiBjYWxjKDAuMSp2YXIoLS1ydnYpKTtcXG5cXHR0ZXh0LWluZGVudDogY2FsYygwLjEqdmFyKC0tcnZ2KSk7XFxufVxcblxcbi5hbGwge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFsbC1idXR0b24pO1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcblxcdGJveC1zaGFkb3c6IDAgMCAwIDNweCB2YXIoLS1idXR0b24tb3V0bGluZSk7XFxufVxcblxcbi5tYWluIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0ZmxleDogYXV0bztcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRwYWRkaW5nOiBjYWxjKDAuNSp2YXIoLS1ydnYpKSAwO1xcblxcdGdhcDogY2FsYygwLjYqdmFyKC0tcnZ2KSk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZyk7XFxufVxcblxcbi5kaXNwbGF5ZWQtaXRlbSB7XFxuXFx0d2lkdGg6IDkwdnc7XFxuXFx0bWF4LXdpZHRoOiBjYWxjKDE1KnZhcigtLXJ2dikpO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRmb250LWZhbWlseTogJ1N1YmxpbWEnO1xcblxcdGZvbnQtc2l6ZTogY2FsYygwLjYqdmFyKC0tcnZ2KSk7XFxuXFx0cGFkZGluZzogY2FsYygwLjEqdmFyKC0tcnZ2KSkgY2FsYygwLjMqdmFyKC0tcnZ2KSk7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuXFx0Ym9yZGVyLXJhZGl1czogY2FsYygwLjgqdmFyKC0tcnZ2KSk7XFxuXFx0bWFyZ2luOiAwIGNhbGMoMC43KnZhcigtLXJ2dikpO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBjYWxjKDEuNCp2YXIoLS1ydnYpKSAxZnIgY2FsYyh2YXIoLS1ydnYpKSBjYWxjKHZhcigtLXJ2dikpO1xcblxcdGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcblxcdGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJjaGVja2JveCB0aXRsZSBlZGl0IGV4cGFuZFxcXCI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0taXRlbS1iZyk7XFxufVxcblxcbi5kaXNwbGF5ZWQtaXRlbS5ub3ctaXRlbSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbm93LWl0ZW0tYmcpO1xcbn1cXG5cXG4uZGlzcGxheWVkLWl0ZW0ubGF0ZXItaXRlbSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGF0ZXItaXRlbS1iZyk7XFxufVxcblxcbi5leHBhbmRlZC1pdGVtIHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogY2FsYygxLjQqdmFyKC0tcnZ2KSkgMWZyIGNhbGModmFyKC0tcnZ2KSkgY2FsYyh2YXIoLS1ydnYpKTtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IGNhbGMoMS4yKnZhcigtLXJ2dikpIDFmcjtcXG5cXHRncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG5cXHRcXHRcXFwiY2hlY2tib3ggdGl0bGUgZWRpdCBleHBhbmRcXFwiXFxuXFx0XFx0XFxcIi4gZGVzY3JpcHRpb24gLiBkZWxldGVcXFwiO1xcbn1cXG5cXG4uZXhwYW5kZWQtaXRlbSAuaXRlbS1kZXNjcmlwdGlvbiB7XFxuXFx0bWFyZ2luLXJpZ2h0OiBjYWxjKDAuMyp2YXIoLS1ydnYpKTtcXG5cXHRtYXJnaW4tYm90dG9tOiBjYWxjKDAuMyp2YXIoLS1ydnYpKTtcXG59XFxuXFxuLmV4cGFuZGVkLWl0ZW0gLml0ZW0tdGl0bGUge1xcblxcdGN1cnNvcjogYXV0bztcXG59XFxuXFxuLmNvbXBsZXRlZC1pdGVtIHtcXG5cXHRmaWx0ZXI6IGdyYXlzY2FsZSg3MCUpO1xcbn1cXG5cXG4uY29tcGxldGVkLWl0ZW0gLml0ZW0tdGl0bGUge1xcblxcdGZvbnQtc3R5bGU6IGl0YWxpYztcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBjYWxjKDAuMDQqdmFyKC0tcnZ2KSkgYmxhY2s7XFxuXFx0dGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBub25lO1xcblxcdHRleHQtdW5kZXJsaW5lLW9mZnNldDogY2FsYygtMC4yKnZhcigtLXJ2dikpO1xcbn1cXG5cXG4uY29tcGxldGVkLWl0ZW0gLml0ZW0tZGVzY3JpcHRpb24ge1xcblxcdGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmRpc3BsYXllZC1pdGVtLmFkZC1pdGVtLWJ1dHRvbiB7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRtYXJnaW46IDA7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFkZC1pdGVtLWJ1dHRvbik7XFxuXFx0aGVpZ2h0OiBjYWxjKDEuNSp2YXIoLS1ydnYpKTtcXG5cXHR3aWR0aDogY2FsYygxLjUqdmFyKC0tcnZ2KSk7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYWRkLWl0ZW0tYnV0dG9uIGltZyB7XFxuXFx0bWF4LWhlaWdodDogMTAwJTtcXG5cXHRtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbi5kaXNwbGF5ZWQtaXRlbS5hZGQtZm9ybSB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWRkLWZvcm0tYmcpO1xcbn1cXG5cXG4uYWRkLWZvcm0taXRzZWxmLFxcbi5lZGl0LWZvcm0taXRzZWxmIHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtcm93czogY2FsYygxLjcqdmFyKC0tcnZ2KSkgY2FsYyh2YXIoLS1ydnYpKSBjYWxjKDQqdmFyKC0tcnZ2KSkgY2FsYyh2YXIoLS1ydnYpKSBjYWxjKDIuMip2YXIoLS1ydnYpKTtcXG5cXHRyb3ctZ2FwOiBjYWxjKDAuMjUqdmFyKC0tcnZ2KSk7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczpcXG5cXHRcXHRcXFwiZm9ybS10aXRsZVxcXCJcXG5cXHRcXHRcXFwidGl0bGUtc2VjdGlvblxcXCJcXG5cXHRcXHRcXFwiZGVzY3JpcHRpb24tc2VjdGlvblxcXCJcXG5cXHRcXHRcXFwicHJpb3JpdHktc2VjdGlvblxcXCJcXG5cXHRcXHRcXFwic3VibWl0LWJ1dHRvblxcXCI7XFxufVxcblxcbi5lZGl0LWJhY2tkcm9wIHtcXG5cXHR6LWluZGV4OiAyO1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHR3aWR0aDogMTAwdnc7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHRiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG5cXHQtLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG59XFxuXFxuLmVkaXQtZm9ybS1pdHNlbGYge1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHR6LWluZGV4OiAzO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1lZGl0LWZvcm0tYmcpO1xcblxcdHdpZHRoOiA5MHZ3O1xcblxcdG1heC13aWR0aDogY2FsYygxNSp2YXIoLS1ydnYpKTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0Zm9udC1mYW1pbHk6ICdTdWJsaW1hJztcXG5cXHRmb250LXNpemU6IGNhbGMoMC42KnZhcigtLXJ2dikpO1xcblxcdHBhZGRpbmc6IGNhbGMoMC4xKnZhcigtLXJ2dikpIGNhbGMoMC4zKnZhcigtLXJ2dikpO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcblxcdGJvcmRlci1yYWRpdXM6IGNhbGMoMC44KnZhcigtLXJ2dikpO1xcbn1cXG5cXG4uZm9ybS10aXRsZSB7XFxuXFx0bWFyZ2luOiAwIDElO1xcblxcdG1heC13aWR0aDogOTB2dztcXG5cXHRncmlkLWFyZWE6IGZvcm0tdGl0bGU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9ybS10aXRsZS10ZXh0IHtcXG5cXHRmb250LXNpemU6IGNhbGMoMC44KnZhcigtLXJ2dikpO1xcbn1cXG5cXG4uZm9ybS10aXRsZS10ZXh0OmhvdmVyIHtcXG5cXHRmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5jbG9zZS1idXR0b24ge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbG9zZS1idXR0b24pO1xcblxcdG1hcmdpbi1sZWZ0OiBhdXRvO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcblxcdGhlaWdodDogY2FsYygwLjkqdmFyKC0tcnZ2KSk7XFxuXFx0d2lkdGg6IGNhbGMoMC45KnZhcigtLXJ2dikpO1xcblxcdGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0tcnZ2KSk7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2xvc2UtYnV0dG9uIGltZyB7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4udGl0bGUtc2VjdGlvbiB7XFxuXFx0Z3JpZC1hcmVhOiB0aXRsZS1zZWN0aW9uO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBjYWxjKDMuNSp2YXIoLS1ydnYpKSAxZnI7XFxufVxcblxcbi50aXRsZS1zZWN0aW9uIGxhYmVsIHtcXG5cXHRmb250LXNpemU6IGNhbGMoMC41KnZhcigtLXJ2dikpO1xcbn1cXG5cXG4udGl0bGUtc2VjdGlvbiBpbnB1dCxcXG4uZGVzY3JpcHRpb24tc2VjdGlvbiB0ZXh0YXJlYSB7XFxuXFx0d2lkdGg6IDkzJTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3JtLWlucHV0LWJnKTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG5cXHRib3JkZXItcmFkaXVzOiBjYWxjKHZhcigtLXJ2dikpO1xcblxcdHBhZGRpbmctbGVmdDogMTBweDtcXG5cXHRmb250LWZhbWlseTogJ1N1YmxpbWEnO1xcblxcdGZvbnQtc2l6ZTogY2FsYygwLjQ1KnZhcigtLXJ2dikpO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24tc2VjdGlvbiB0ZXh0YXJlYSB7XFxuXFx0Ym9yZGVyLXJhZGl1czogY2FsYygwLjUqdmFyKC0tcnZ2KSk7XFxuXFx0cmVzaXplOiBub25lO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyxcXG50ZXh0YXJlYTpmb2N1cyB7XFxuXFx0YXBwZWFyYW5jZTogbm9uZTtcXG5cXHRvdXRsaW5lOiBub25lO1xcblxcdGJveC1zaGFkb3c6IDAgMCAwIDNweCB2YXIoLS1pbnB1dC1mb2N1cy1vdXRsaW5lKTtcXG59XFxuXFxuaW5wdXQ6bm90KDpmb2N1cyksXFxudGV4dGFyZWE6bm90KDpmb2N1cykge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRlc2NyaXB0aW9uLXNlY3Rpb24ge1xcblxcdGdyaWQtYXJlYTogZGVzY3JpcHRpb24tc2VjdGlvbjtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogY2FsYygzLjUqdmFyKC0tcnZ2KSkgMWZyO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24tc2VjdGlvbiBsYWJlbCB7XFxuXFx0Zm9udC1zaXplOiBjYWxjKDAuNSp2YXIoLS1ydnYpKTtcXG59XFxuXFxuLnByaW9yaXR5LXNlY3Rpb24ge1xcblxcdG1hcmdpbi10b3A6IDJweDtcXG5cXHRncmlkLWFyZWE6IHByaW9yaXR5LXNlY3Rpb247XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGNhbGMoMy41KnZhcigtLXJ2dikpIDFmciAxZnI7XFxufVxcblxcbi5wcmlvcml0eS1sYWJlbCB7XFxuXFx0Zm9udC1zaXplOiBjYWxjKDAuNSp2YXIoLS1ydnYpKTtcXG59XFxuXFxuLnJhZGlvLW9wdGlvbiB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGZvbnQtZmFtaWx5OiAnTWFqb3IgTW9ubyc7XFxuXFx0d2lkdGg6IGNhbGMoMyp2YXIoLS1ydnYpKTtcXG5cXHRoZWlnaHQ6IGNhbGModmFyKC0tcnZ2KSk7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTUlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpb3JpdHktYnV0dG9uLWRlZmF1bHQpO1xcbn1cXG5cXG4ucmFkaW8tb3B0aW9uIGxhYmVsIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5ub3ctb3B0aW9uIHtcXG5cXHRqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG5cXHRsZXR0ZXItc3BhY2luZzogY2FsYygwLjMqdmFyKC0tcnZ2KSk7XFxuXFx0dGV4dC1pbmRlbnQ6IGNhbGMoMC4zKnZhcigtLXJ2dikpO1xcbn1cXG5cXG4ubm93LW9wdGlvbi5zZWxlY3RlZC1wcmlvcml0eSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbm93LWJ1dHRvbik7XFxuXFx0Ym94LXNoYWRvdzogMCAwIDAgM3B4IHZhcigtLWJ1dHRvbi1vdXRsaW5lKTtcXG59XFxuXFxuLmxhdGVyLW9wdGlvbiB7XFxuXFx0anVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuXFx0bGV0dGVyLXNwYWNpbmc6IGNhbGMoMC4xKnZhcigtLXJ2dikpO1xcblxcdHRleHQtaW5kZW50OiBjYWxjKDAuMSp2YXIoLS1ydnYpKTtcXG59XFxuXFxuLmxhdGVyLW9wdGlvbi5zZWxlY3RlZC1wcmlvcml0eSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGF0ZXItYnV0dG9uKTtcXG5cXHRib3gtc2hhZG93OiAwIDAgMCAzcHggdmFyKC0tYnV0dG9uLW91dGxpbmUpO1xcbn1cXG5cXG4ucmFkaW8taW5wdXQge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRtYXJnaW46IDA7XFxuXFx0YXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLnN1Ym1pdC1idXR0b24ge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRncmlkLWFyZWE6IHN1Ym1pdC1idXR0b247XFxuXFx0Zm9udC1mYW1pbHk6ICdTdWJsaW1hJztcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWJtaXQtYnV0dG9uLWJnKTtcXG5cXHRhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuXFx0aGVpZ2h0OiBjYWxjKDEuNSp2YXIoLS1ydnYpKTtcXG5cXHR3aWR0aDogOTUlO1xcblxcdGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0tcnZ2KSk7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc3VibWl0LWJ1dHRvbiBpbWcge1xcblxcdGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmRpc3BsYXllZC1pdGVtIGltZyB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNoZWNrYm94IGltZyxcXG4uZXhwYW5kIGltZyB7XFxuXFx0d2lkdGg6IGNhbGModmFyKC0tcnZ2KSk7XFxufVxcblxcbi5lZGl0IGltZyB7XFxuXFx0d2lkdGg6IGNhbGMoMC44KnZhcigtLXJ2dikpO1xcbn1cXG5cXG4uY2hlY2tib3gge1xcblxcdGdyaWQtYXJlYTogY2hlY2tib3g7XFxuXFx0bWFyZ2luLWxlZnQ6IGNhbGMoMC4yKnZhcigtLXJ2dikpO1xcbn1cXG5cXG4uaXRlbS10aXRsZSB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGJvdHRvbTogMnB4O1xcblxcdGdyaWQtYXJlYTogdGl0bGU7XFxuXFx0anVzdGlmeS1zZWxmOiBzdGFydDtcXG59XFxuXFxuLmV4cGFuZGFibGUtdGl0bGUge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmVkaXQge1xcblxcdGdyaWQtYXJlYTogZWRpdDtcXG59XFxuXFxuLmV4cGFuZCB7XFxuXFx0Z3JpZC1hcmVhOiBleHBhbmQ7XFxufVxcblxcbi5zaHJpbmsge1xcblxcdGdyaWQtYXJlYTogZXhwYW5kO1xcblxcdGFzcGVjdC1yYXRpbzogMSAvIDE7XFxufVxcblxcbi5zaHJpbmsgaW1nIHtcXG5cXHRoZWlnaHQ6IGNhbGModmFyKC0tcnZ2KSk7XFxufVxcblxcbi5pdGVtLWRlc2NyaXB0aW9uIHtcXG5cXHRib3JkZXItcmFkaXVzOiAzcHg7XFxuXFx0Zm9udC1zdHlsZTogaXRhbGljO1xcblxcdGdyaWQtYXJlYTogZGVzY3JpcHRpb247XFxuXFx0YWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG5cXHRqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XFxuXFx0Zm9udC1zaXplOiA4MCU7XFxufVxcblxcbi5leHBhbmRlZC1pdGVtIC5kZWxldGUge1xcblxcdGdyaWQtYXJlYTogZGVsZXRlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcblxcdG1hcmdpbi1ib3R0b206IGNhbGMoMC4zKnZhcigtLXJ2dikpO1xcbn1cXG5cXG4uZGVsZXRlIGltZyB7XFxuXFx0aGVpZ2h0OiBjYWxjKHZhcigtLXJ2dikpO1xcbn1cXG5cXG5mb290ZXIge1xcblxcdGhlaWdodDogNXZoO1xcblxcdG1pbi1oZWlnaHQ6IGNhbGMoMC44KnZhcigtLXJ2dikpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpdGxlLWZvb3Rlci1jb2xvcik7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGZvbnQtc2l6ZTogY2FsYygwLjUqdmFyKC0tcnZ2KSk7XFxuXFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcblxcdGZvbnQtZmFtaWx5OiAnU3VibGltYSc7XFxuXFx0Zm9udC1zaXplOiBjYWxjKDAuNCp2YXIoLS1ydnYpKTtcXG5cXHRsZXR0ZXItc3BhY2luZzogY2FsYygwLjEqdmFyKC0tcnZ2KSk7XFxuXFx0dGV4dC1pbmRlbnQ6IGNhbGMoMC4xKnZhcigtLXJ2dikpO1xcbn1cXG5cXG4vKiBkYXJrIG1vZGUgc3R5bGluZzogKi9cXG5cXG5ib2R5LmRhcmsge1xcblxcdGNvbG9yOiB2YXIoLS1kYXJrLXRleHQpO1xcbn1cXG5cXG4udGl0bGUuZGFyayB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay10aXRsZS1mb290ZXItY29sb3IpO1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kYXJrLWJvcmRlcik7XFxufVxcblxcbi5uYXYuZGFyayB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1uYXYtYmcpO1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kYXJrLWJvcmRlcik7XFxufVxcblxcbi5uYXYuZGFyayBkaXYge1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstYm9yZGVyKTtcXG59XFxuXFxuLm5vdy5kYXJrIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLW5vdy1idXR0b24pO1xcbn1cXG5cXG4ubGF0ZXIuZGFyayB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1sYXRlci1idXR0b24pO1xcbn1cXG5cXG4uYWxsLmRhcmsge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYWxsLWJ1dHRvbik7XFxufVxcblxcbi5zZWxlY3RlZC5kYXJrIHtcXG5cXHRib3gtc2hhZG93OiAwIDAgMCAzcHggdmFyKC0tZGFyay1idXR0b24tb3V0bGluZSk7XFxufVxcblxcbi5tYWluLmRhcmsge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstbWFpbi1iZyk7XFxufVxcblxcbi5kaXNwbGF5ZWQtaXRlbS5kYXJrIHtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWJvcmRlcik7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1pdGVtLWJnKTtcXG59XFxuXFxuLmRpc3BsYXllZC1pdGVtLm5vdy1pdGVtLmRhcmsge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstbm93LWl0ZW0tYmcpO1xcbn1cXG5cXG4uZGlzcGxheWVkLWl0ZW0ubGF0ZXItaXRlbS5kYXJrIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWxhdGVyLWl0ZW0tYmcpO1xcbn1cXG5cXG4uY29tcGxldGVkLWl0ZW0gLml0ZW0tdGl0bGUuZGFyayB7XFxuXFx0ZmlsdGVyOiBicmlnaHRuZXNzKDgwJSk7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgY2FsYygwLjA0KnZhcigtLXJ2dikpIHZhcigtLWRhcmstdGV4dCk7XFxuXFx0dGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBub25lO1xcbn1cXG5cXG4uZGlzcGxheWVkLWl0ZW0uYWRkLWZvcm0uZGFyayB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1hZGQtZm9ybS1iZyk7XFxufVxcblxcbi5lZGl0LWZvcm0taXRzZWxmLmRhcmsge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYWRkLWZvcm0tYmcpO1xcbn1cXG5cXG4uY2xvc2UtYnV0dG9uLmRhcmsge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY2xvc2UtYnV0dG9uKTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWJvcmRlcik7XFxufVxcblxcbi50aXRsZS1zZWN0aW9uLmRhcmsgaW5wdXQsXFxuLmRlc2NyaXB0aW9uLXNlY3Rpb24uZGFyayB0ZXh0YXJlYSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1mb3JtLWlucHV0LWJnKTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWJvcmRlcik7XFxufVxcblxcbmlucHV0LmRhcms6Zm9jdXMsXFxudGV4dGFyZWEuZGFyazpmb2N1cyB7XFxuXFx0Ym94LXNoYWRvdzogMCAwIDAgM3B4IHZhcigtLWRhcmstaW5wdXQtZm9jdXMtb3V0bGluZSk7XFxufVxcblxcbi5yYWRpby1vcHRpb24uZGFyayB7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1ib3JkZXIpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstcHJpb3JpdHktYnV0dG9uLWRlZmF1bHQpO1xcbn1cXG5cXG4ubm93LW9wdGlvbi5zZWxlY3RlZC1wcmlvcml0eS5kYXJrIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLW5vdy1idXR0b24pO1xcblxcdGJveC1zaGFkb3c6IDAgMCAwIDNweCB2YXIoLS1kYXJrLWJ1dHRvbi1vdXRsaW5lKTtcXG59XFxuXFxuLmxhdGVyLW9wdGlvbi5zZWxlY3RlZC1wcmlvcml0eS5kYXJrIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWxhdGVyLWJ1dHRvbik7XFxuXFx0Ym94LXNoYWRvdzogMCAwIDAgM3B4IHZhcigtLWRhcmstYnV0dG9uLW91dGxpbmUpO1xcbn1cXG5cXG4uZGlzcGxheWVkLWl0ZW0uYWRkLWl0ZW0tYnV0dG9uLmRhcmsge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYWRkLWl0ZW0tYnV0dG9uKTtcXG59XFxuXFxuLnN1Ym1pdC1idXR0b24uZGFyayB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1zdWJtaXQtYnV0dG9uLWJnKTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWJvcmRlcik7XFxufVxcblxcbmZvb3Rlci5kYXJrIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLXRpdGxlLWZvb3Rlci1jb2xvcik7XFxuXFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWRhcmstYm9yZGVyKTtcXG59XFxuXFxuLyogZGVza3RvcCB2ZXJzaW9uOiAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzUwcHgpIHtcXG5cXG5cXHQubmF2IGRpdiB7XFxuXFx0XFx0dHJhbnNpdGlvbjogMC4wNzVzIGxpbmVhcjtcXG5cXHR9XFxuXFxuXFx0Lm5hdiBkaXY6aG92ZXIge1xcblxcdFxcdHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuXFx0fVxcblxcblxcdC5jaGVja2JveCxcXG5cXHQuZWRpdCxcXG5cXHQuZXhwYW5kLFxcblxcdC5zaHJpbmssXFxuXFx0LmRlbGV0ZSxcXG5cXHQuYWRkLWl0ZW0tYnV0dG9uLFxcblxcdC5yYWRpby1vcHRpb24sXFxuXFx0LnN1Ym1pdC1idXR0b24sXFxuXFx0LmNsb3NlLWJ1dHRvbiB7XFxuXFx0XFx0dHJhbnNpdGlvbjogMC4wNzVzIGxpbmVhcjtcXG5cXHR9XFxuXFxuXFx0LmNoZWNrYm94OmhvdmVyIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDc1KTtcXG5cXHR9XFxuXFxuXFx0LmVkaXQ6aG92ZXIge1xcblxcdFxcdHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG5cXHR9XFxuXFxuXFx0LmV4cGFuZDpob3ZlciB7XFxuXFx0XFx0dHJhbnNmb3JtOiBzY2FsZSgxLjI1KTtcXG5cXHR9XFxuXFxuXFx0LnNocmluazpob3ZlciB7XFxuXFx0XFx0dHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcblxcdH1cXG5cXG5cXHQuZGVsZXRlOmhvdmVyIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDc1KTtcXG5cXHR9XFxuXFxuXFx0LmFkZC1pdGVtLWJ1dHRvbjpob3ZlciB7XFxuXFx0XFx0dHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG5cXHR9XFxuXFxuXFx0LnJhZGlvLW9wdGlvbjpob3ZlciB7XFxuXFx0XFx0dHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG5cXHR9XFxuXFxuXFx0LnN1Ym1pdC1idXR0b246aG92ZXIge1xcblxcdFxcdHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XFxuXFx0fVxcblxcblxcdC5jbG9zZS1idXR0b246aG92ZXIge1xcblxcdFxcdHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG5cXHR9XFxuXFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcXG5cXHQuY29tcGxldGVkLWl0ZW0gLml0ZW0tdGl0bGUge1xcblxcdFxcdGZvbnQtc3R5bGU6IGl0YWxpYztcXG5cXHRcXHR0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG5cXHRcXHR0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IG5vbmU7XFxuXFx0XFx0dGV4dC11bmRlcmxpbmUtb2Zmc2V0OiAwO1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcXG5cXHRib2R5IHtcXG5cXHRcXHRtaW4taGVpZ2h0OiAxMDB2aDtcXG5cXHRcXHRtaW4td2lkdGg6IDEwMHZ3O1xcblxcdH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7Ozs7Ozs7OztDQWFDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0FBQ3pCOztBQUVBO0lBQ0ksNkJBQTZCOztDQUVoQyxlQUFlO0lBQ1osb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLGNBQWM7O0NBRWpCLCtCQUErQjtDQUMvQixtQkFBbUI7Q0FDbkIscUJBQXFCO0NBQ3JCLHVCQUF1QjtDQUN2Qix1QkFBdUI7Q0FDdkIsMkJBQTJCO0NBQzNCLDhCQUE4QjtDQUM5Qiw2QkFBNkI7Q0FDN0Isb0JBQW9CO0NBQ3BCLG9CQUFvQjtDQUNwQix3QkFBd0I7Q0FDeEIsMEJBQTBCO0NBQzFCLDJCQUEyQjtDQUMzQiw0QkFBNEI7Q0FDNUIsd0JBQXdCO0NBQ3hCLHVCQUF1QjtDQUN2QixvQ0FBb0M7Q0FDcEMsd0JBQXdCO0NBQ3hCLHdCQUF3QjtDQUN4Qiw2QkFBNkI7Q0FDN0IseUJBQXlCO0NBQ3pCLGdDQUFnQzs7Q0FFaEMsb0JBQW9CO0NBQ3BCLHNCQUFzQjtDQUN0QixvQ0FBb0M7Q0FDcEMsd0JBQXdCO0NBQ3hCLDRCQUE0QjtDQUM1Qiw0QkFBNEI7Q0FDNUIsNEJBQTRCO0NBQzVCLGdDQUFnQztDQUNoQyxxQ0FBcUM7Q0FDckMsa0NBQWtDO0NBQ2xDLHlCQUF5QjtDQUN6Qix5QkFBeUI7Q0FDekIsMkNBQTJDO0NBQzNDLCtCQUErQjtDQUMvQixpQ0FBaUM7Q0FDakMsNkJBQTZCO0NBQzdCLHlDQUF5QztDQUN6Qyw2QkFBNkI7Q0FDN0IsNkJBQTZCO0NBQzdCLGtDQUFrQztDQUNsQyw4QkFBOEI7QUFDL0I7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsNENBQTBDO0FBQzNDOztBQUVBO0NBQ0Msc0JBQXNCO0NBQ3RCLDRDQUEwQztBQUMzQzs7QUFFQTtDQUNDLDJCQUEyQjtDQUMzQiw0Q0FBK0M7QUFDaEQ7OztBQUdBOztJQUVJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osOEJBQThCO0NBQzlCLGFBQWE7Q0FDYixzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxnQ0FBZ0M7Q0FDaEMsT0FBTztDQUNQLGtCQUFrQjtDQUNsQixhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtDQUNuQix5QkFBeUI7Q0FDekIsMkNBQTJDO0NBQzNDLDhCQUE4QjtBQUMvQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixzQkFBc0I7Q0FDdEIsZ0NBQWdDO0NBQ2hDLG9DQUFvQztDQUNwQyxpQ0FBaUM7QUFDbEM7O0FBRUE7O0NBRUMsZUFBZTtDQUNmLDJCQUEyQjtDQUMzQiwwQkFBMEI7Q0FDMUIsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixtQkFBbUI7QUFDcEI7O0FBRUE7O0NBRUMsbUJBQW1CO0FBQ3BCOztBQUVBOztDQUVDLFdBQVc7Q0FDWCxVQUFVO0FBQ1g7O0FBRUE7O0NBRUMsd0JBQXdCO0FBQ3pCOztBQUVBO0NBQ0MsdUNBQXVDO0NBQ3ZDLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLGtDQUFrQztDQUNsQyxxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyxPQUFPO0NBQ1AsYUFBYTtDQUNiLDZCQUE2QjtDQUM3QixtQkFBbUI7Q0FDbkIseUJBQXlCO0NBQ3pCLCtCQUErQjtDQUMvQiw4QkFBOEI7QUFDL0I7O0FBRUE7Q0FDQywrQkFBK0I7Q0FDL0IsZUFBZTtDQUNmLHlCQUF5QjtDQUN6Qix3QkFBd0I7Q0FDeEIsdUJBQXVCO0NBQ3ZCLGtCQUFrQjtDQUNsQixhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtDQUNuQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxtQ0FBbUM7QUFDcEM7O0FBRUE7O0NBRUMsb0NBQW9DO0NBQ3BDLGlDQUFpQztBQUNsQzs7QUFFQTtDQUNDLHFDQUFxQztDQUNyQyxvQ0FBb0M7Q0FDcEMsaUNBQWlDO0FBQ2xDOztBQUVBO0NBQ0MsbUNBQW1DO0FBQ3BDOztBQUVBO0NBQ0MsMkNBQTJDO0FBQzVDOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFVBQVU7Q0FDVixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLG1CQUFtQjtDQUNuQiwrQkFBK0I7Q0FDL0IseUJBQXlCO0NBQ3pCLGdDQUFnQztBQUNqQzs7QUFFQTtDQUNDLFdBQVc7Q0FDWCw4QkFBOEI7Q0FDOUIsa0JBQWtCO0NBQ2xCLHNCQUFzQjtDQUN0QiwrQkFBK0I7Q0FDL0Isa0RBQWtEO0NBQ2xELHVCQUF1QjtDQUN2QixtQ0FBbUM7Q0FDbkMsOEJBQThCO0NBQzlCLGFBQWE7Q0FDYixpRkFBaUY7Q0FDakYsdUJBQXVCO0NBQ3ZCLGlEQUFpRDtDQUNqRCxnQ0FBZ0M7QUFDakM7O0FBRUE7Q0FDQyxvQ0FBb0M7QUFDckM7O0FBRUE7Q0FDQyxzQ0FBc0M7QUFDdkM7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsaUZBQWlGO0NBQ2pGLDRDQUE0QztDQUM1Qzs7MEJBRXlCO0FBQzFCOztBQUVBO0NBQ0Msa0NBQWtDO0NBQ2xDLG1DQUFtQztBQUNwQzs7QUFFQTtDQUNDLFlBQVk7QUFDYjs7QUFFQTtDQUNDLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixzREFBc0Q7Q0FDdEQsOEJBQThCO0NBQzlCLDRDQUE0QztBQUM3Qzs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLHdDQUF3QztDQUN4Qyw0QkFBNEI7Q0FDNUIsMkJBQTJCO0NBQzNCLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxjQUFjO0NBQ2Qsb0NBQW9DO0FBQ3JDOztBQUVBOztDQUVDLGFBQWE7Q0FDYixrSEFBa0g7Q0FDbEgsOEJBQThCO0NBQzlCOzs7OztpQkFLZ0I7QUFDakI7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YsZUFBZTtDQUNmLFlBQVk7Q0FDWixhQUFhO0NBQ2IsMEJBQTBCO0NBQzFCLG1DQUFtQztBQUNwQzs7QUFFQTtDQUNDLGVBQWU7Q0FDZixVQUFVO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7Q0FDbkMscUNBQXFDO0NBQ3JDLFdBQVc7Q0FDWCw4QkFBOEI7Q0FDOUIsa0JBQWtCO0NBQ2xCLHNCQUFzQjtDQUN0QiwrQkFBK0I7Q0FDL0Isa0RBQWtEO0NBQ2xELHVCQUF1QjtDQUN2QixtQ0FBbUM7QUFDcEM7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osZUFBZTtDQUNmLHFCQUFxQjtDQUNyQixhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLCtCQUErQjtBQUNoQzs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixxQ0FBcUM7Q0FDckMsaUJBQWlCO0NBQ2pCLHVCQUF1QjtDQUN2Qiw0QkFBNEI7Q0FDNUIsMkJBQTJCO0NBQzNCLCtCQUErQjtDQUMvQixhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLFlBQVk7QUFDYjs7QUFFQTtDQUNDLHdCQUF3QjtDQUN4QixhQUFhO0NBQ2IsK0NBQStDO0FBQ2hEOztBQUVBO0NBQ0MsK0JBQStCO0FBQ2hDOztBQUVBOztDQUVDLFVBQVU7Q0FDVixzQ0FBc0M7Q0FDdEMsdUJBQXVCO0NBQ3ZCLCtCQUErQjtDQUMvQixrQkFBa0I7Q0FDbEIsc0JBQXNCO0NBQ3RCLGdDQUFnQztBQUNqQzs7QUFFQTtDQUNDLG1DQUFtQztDQUNuQyxZQUFZO0FBQ2I7O0FBRUE7O0NBRUMsZ0JBQWdCO0NBQ2hCLGFBQWE7Q0FDYixnREFBZ0Q7QUFDakQ7O0FBRUE7O0NBRUMsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLDhCQUE4QjtDQUM5QixhQUFhO0NBQ2IsK0NBQStDO0FBQ2hEOztBQUVBO0NBQ0MsK0JBQStCO0FBQ2hDOztBQUVBO0NBQ0MsZUFBZTtDQUNmLDJCQUEyQjtDQUMzQixhQUFhO0NBQ2IsbURBQW1EO0FBQ3BEOztBQUVBO0NBQ0MsK0JBQStCO0FBQ2hDOztBQUVBO0NBQ0MsZUFBZTtDQUNmLHlCQUF5QjtDQUN6Qix5QkFBeUI7Q0FDekIsd0JBQXdCO0NBQ3hCLHVCQUF1QjtDQUN2QixrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIsa0JBQWtCO0NBQ2xCLGdEQUFnRDtBQUNqRDs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxvQkFBb0I7Q0FDcEIsb0NBQW9DO0NBQ3BDLGlDQUFpQztBQUNsQzs7QUFFQTtDQUNDLG1DQUFtQztDQUNuQywyQ0FBMkM7QUFDNUM7O0FBRUE7Q0FDQyxvQkFBb0I7Q0FDcEIsb0NBQW9DO0NBQ3BDLGlDQUFpQztBQUNsQzs7QUFFQTtDQUNDLHFDQUFxQztDQUNyQywyQ0FBMkM7QUFDNUM7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsVUFBVTtDQUNWLFNBQVM7Q0FDVCxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2Ysd0JBQXdCO0NBQ3hCLHNCQUFzQjtDQUN0Qix5Q0FBeUM7Q0FDekMsa0JBQWtCO0NBQ2xCLG9CQUFvQjtDQUNwQix1QkFBdUI7Q0FDdkIsNEJBQTRCO0NBQzVCLFVBQVU7Q0FDViwrQkFBK0I7Q0FDL0IsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixtQkFBbUI7QUFDcEI7O0FBRUE7O0NBRUMsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsMkJBQTJCO0FBQzVCOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLGlDQUFpQztBQUNsQzs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FDbEIsc0JBQXNCO0NBQ3RCLHNCQUFzQjtDQUN0Qix3QkFBd0I7Q0FDeEIsY0FBYztBQUNmOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIseUJBQXlCO0NBQ3pCLG1DQUFtQztBQUNwQzs7QUFFQTtDQUNDLHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxnQ0FBZ0M7Q0FDaEMsMkNBQTJDO0NBQzNDLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLCtCQUErQjtDQUMvQiwyQkFBMkI7Q0FDM0Isc0JBQXNCO0NBQ3RCLCtCQUErQjtDQUMvQixvQ0FBb0M7Q0FDcEMsaUNBQWlDO0FBQ2xDOztBQUVBLHVCQUF1Qjs7QUFFdkI7Q0FDQyx1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyxnREFBZ0Q7Q0FDaEQsMkNBQTJDO0FBQzVDOztBQUVBO0NBQ0Msb0NBQW9DO0NBQ3BDLDJDQUEyQztBQUM1Qzs7QUFFQTtDQUNDLG9DQUFvQztBQUNyQzs7QUFFQTtDQUNDLHdDQUF3QztBQUN6Qzs7QUFFQTtDQUNDLDBDQUEwQztBQUMzQzs7QUFFQTtDQUNDLHdDQUF3QztBQUN6Qzs7QUFFQTtDQUNDLGdEQUFnRDtBQUNqRDs7QUFFQTtDQUNDLHFDQUFxQztBQUN0Qzs7QUFFQTtDQUNDLG9DQUFvQztDQUNwQyxxQ0FBcUM7QUFDdEM7O0FBRUE7Q0FDQyx5Q0FBeUM7QUFDMUM7O0FBRUE7Q0FDQywyQ0FBMkM7QUFDNUM7O0FBRUE7Q0FDQyx1QkFBdUI7Q0FDdkIsaUVBQWlFO0NBQ2pFLDhCQUE4QjtBQUMvQjs7QUFFQTtDQUNDLHlDQUF5QztBQUMxQzs7QUFFQTtDQUNDLHlDQUF5QztBQUMxQzs7QUFFQTtDQUNDLDBDQUEwQztDQUMxQyxvQ0FBb0M7QUFDckM7O0FBRUE7O0NBRUMsMkNBQTJDO0NBQzNDLG9DQUFvQztBQUNyQzs7QUFFQTs7Q0FFQyxxREFBcUQ7QUFDdEQ7O0FBRUE7Q0FDQyxvQ0FBb0M7Q0FDcEMscURBQXFEO0FBQ3REOztBQUVBO0NBQ0Msd0NBQXdDO0NBQ3hDLGdEQUFnRDtBQUNqRDs7QUFFQTtDQUNDLDBDQUEwQztDQUMxQyxnREFBZ0Q7QUFDakQ7O0FBRUE7Q0FDQyw2Q0FBNkM7QUFDOUM7O0FBRUE7Q0FDQyw4Q0FBOEM7Q0FDOUMsb0NBQW9DO0FBQ3JDOztBQUVBO0NBQ0MsZ0RBQWdEO0NBQ2hELHdDQUF3QztBQUN6Qzs7QUFFQSxxQkFBcUI7QUFDckI7O0NBRUM7RUFDQyx5QkFBeUI7Q0FDMUI7O0NBRUE7RUFDQyxzQkFBc0I7Q0FDdkI7O0NBRUE7Ozs7Ozs7OztFQVNDLHlCQUF5QjtDQUMxQjs7Q0FFQTtFQUNDLHVCQUF1QjtDQUN4Qjs7Q0FFQTtFQUNDLHFCQUFxQjtDQUN0Qjs7Q0FFQTtFQUNDLHNCQUFzQjtDQUN2Qjs7Q0FFQTtFQUNDLHFCQUFxQjtDQUN0Qjs7Q0FFQTtFQUNDLHVCQUF1QjtDQUN4Qjs7Q0FFQTtFQUNDLHNCQUFzQjtDQUN2Qjs7Q0FFQTtFQUNDLHNCQUFzQjtDQUN2Qjs7Q0FFQTtFQUNDLHNCQUFzQjtDQUN2Qjs7Q0FFQTtFQUNDLHFCQUFxQjtDQUN0Qjs7QUFFRDs7QUFFQTtDQUNDO0VBQ0Msa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3Qiw4QkFBOEI7RUFDOUIsd0JBQXdCO0NBQ3pCO0FBQ0Q7O0FBRUE7Q0FDQztFQUNDLGlCQUFpQjtFQUNqQixnQkFBZ0I7Q0FDakI7QUFDRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1ydnY6IGNhbGMoMXJlbSArIDF2aCArIDF2dyk7XFxuXFxuXFx0LS1ibHVlOiAjMkU1MTY5O1xcbiAgICAtLWJsdWUtZ3JheTogIzVFNjg2RDtcXG4gICAgLS1icm93bjogIzZGNTc0NjtcXG4gICAgLS1icm93bi1tdXRlZDogIzYzNTg0QztcXG4gICAgLS1icm93bi10YW46ICNBNThGODU7XFxuICAgIC0tZm9yZXN0LWdyZWVuOiAjNEQ2NjNFO1xcbiAgICAtLWdyZWVuLWJyb3duOiAjNUY1NjNGO1xcbiAgICAtLWdyYXktdGFuOiAjQzlCQkEzO1xcbiAgICAtLXRhbi1ncmF5OiAjRDFDOUJBO1xcbiAgICAtLW9mZi13aGl0ZTogI0U0RDlDNTtcXG4gICAgLS1vcmFuZ2UteWVsbG93OiAjRTFCMjcwO1xcbiAgICAtLW9yYW5nZS10YW46ICNDREE4ODU7XFxuICAgIC0tcmVkOiAjQUMzQTNFO1xcbiAgICAtLXNwZWNpYWwtcmVkOiAjODI0RTRBO1xcbiAgICAtLXRhbjogI0QyQkM5QjtcXG5cXG5cXHQtLXRpdGxlLWZvb3Rlci1jb2xvcjogI2JhOGU1ZWRlO1xcblxcdC0tbmF2LWJnOiAjZTRkOWM1NzQ7XFxuXFx0LS1ub3ctYnV0dG9uOiAjNzQ5YzVkO1xcblxcdC0tbGF0ZXItYnV0dG9uOiAjYjU2YzY3O1xcblxcdC0tYWxsLWJ1dHRvbjogI2UwYTg1YmMyO1xcblxcdC0tYnV0dG9uLW91dGxpbmU6ICNmMDk5MWZkNTtcXG5cXHQtLWlucHV0LWZvY3VzLW91dGxpbmU6ICNlNTk4MmQ7XFxuXFx0LS1pbnB1dC12YWxpZC1vdXRsaW5lOiM0RDY2M0U7XFxuXFx0LS1tYWluLWJnOiAjZTFjZmFlOTc7XFxuXFx0LS1pdGVtLWJnOiAjMjA4NmNhOTI7XFxuXFx0LS1ub3ctaXRlbS1iZzogIzYyOWM0MDdjO1xcblxcdC0tbGF0ZXItaXRlbS1iZzogI2RhODY4MGMxO1xcblxcdC0tZGVzY3JpcHRpb24tYmc6ICNkOGYyZmY5NTtcXG5cXHQtLWFkZC1pdGVtLWJ1dHRvbjogI2JhOGQ1ZTg1O1xcblxcdC0tYWRkLWZvcm0tYmc6ICNmMGQ3YTlkZTtcXG5cXHQtLWVkaXQtZm9ybS1iZzogI2YwZDdhOTtcXG5cXHQtLXByaW9yaXR5LWJ1dHRvbi1kZWZhdWx0OiAjYzhiNWEyODU7XFxuXFx0LS1mb3JtLWJ1dHRvbjogI2JhOGQ1ZTg1O1xcblxcdC0tZm9ybS1pbnB1dC1iZzogI0YzRUVFNTtcXG5cXHQtLXN1Ym1pdC1idXR0b24tYmc6ICM4N2I2ZDViNDtcXG5cXHQtLWNsb3NlLWJ1dHRvbjogIzk4NmY0NDcxO1xcblxcdC0tZGlzcGxheS1pY29uOiBjYWxjKHZhcigtLXJ2dikpO1xcblxcblxcdC0tZGFyay10ZXh0OiAjZGRkMmJmO1xcblxcdC0tZGFyay1ib3JkZXI6ICMyNzI0MjA7XFxuXFx0LS1kYXJrLXRpdGxlLWZvb3Rlci1jb2xvcjogIzIwMWMxOWRlO1xcblxcdC0tZGFyay1uYXYtYmc6ICMyMzIwMWNjMztcXG5cXHQtLWRhcmstbm93LWJ1dHRvbjogIzM4NGEyZGRhO1xcblxcdC0tZGFyay1sYXRlci1idXR0b246ICM4ZTU2NTI7XFxuXFx0LS1kYXJrLWFsbC1idXR0b246ICNkNDlmNTM5YztcXG5cXHQtLWRhcmstYnV0dG9uLW91dGxpbmU6ICNlZTlmMzJjYTtcXG5cXHQtLWRhcmstaW5wdXQtZm9jdXMtb3V0bGluZTogI2VlOWYzMmNhO1xcblxcdC0tZGFyay1pbnB1dC12YWxpZC1vdXRsaW5lOiM0RDY2M0U7XFxuXFx0LS1kYXJrLW1haW4tYmc6ICMyNDIxMWRhMTtcXG5cXHQtLWRhcmstaXRlbS1iZzogIzEyM2M1ODkyO1xcblxcdC0tZGFyay1ub3ctaXRlbS1iZzogcmdiYSg0NiwgODAsIDI4LCAwLjUyNyk7XFxuXFx0LS1kYXJrLWxhdGVyLWl0ZW0tYmc6ICM3NTQ3NDNiMjtcXG5cXHQtLWRhcmstYWRkLWl0ZW0tYnV0dG9uOiAjODE1ZTM2NzA7XFxuXFx0LS1kYXJrLWFkZC1mb3JtLWJnOiAjM2MzOTM1ZGU7XFxuXFx0LS1kYXJrLXByaW9yaXR5LWJ1dHRvbi1kZWZhdWx0OiAjOGI3NzYyODU7XFxuXFx0LS1kYXJrLWZvcm0tYnV0dG9uOiAjYmE4ZDVlODU7XFxuXFx0LS1kYXJrLWZvcm0taW5wdXQtYmc6ICNhYmE2OWE7XFxuXFx0LS1kYXJrLXN1Ym1pdC1idXR0b24tYmc6ICM2NjhkYThiNDtcXG5cXHQtLWRhcmstY2xvc2UtYnV0dG9uOiAjOTY4NTczODU7XFxufVxcblxcbkBmb250LWZhY2Uge1xcblxcdGZvbnQtZmFtaWx5OiAnTWFqb3IgTW9ubyc7XFxuXFx0c3JjOiB1cmwoJ2ZvbnQvbWFqb3ItbW9uby9tYWpvci1tb25vLnR0ZicpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogJ1N1YmxpbWEnO1xcblxcdHNyYzogdXJsKCdmb250L3N1YmxpbWEvc3VibGltYS1saWdodC5vdGYnKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6ICdTdWJsaW1hIEJvbGQnO1xcblxcdHNyYzogdXJsKCdmb250L3N1YmxpbWEvc3VibGltYS1leHRyYS1ib2xkLm90ZicpO1xcbn1cXG5cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuaGVhZGVyIHtcXG5cXHRoZWlnaHQ6IDE1dmg7XFxuXFx0bWluLWhlaWdodDogY2FsYygzKnZhcigtLXJ2dikpO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRpdGxlIHtcXG5cXHRtaW4taGVpZ2h0OiBjYWxjKDAuOCp2YXIoLS1ydnYpKTtcXG5cXHRmbGV4OiAxO1xcblxcdG92ZXJmbG93LXg6IGhpZGRlbjtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiBjYWxjKDAuNip2YXIoLS1ydnYpKTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aXRsZS1mb290ZXItY29sb3IpO1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnRpdGxlLXRleHQge1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRmb250LWZhbWlseTogJ1N1YmxpbWEnO1xcblxcdGZvbnQtc2l6ZTogY2FsYygwLjQ1KnZhcigtLXJ2dikpO1xcblxcdGxldHRlci1zcGFjaW5nOiBjYWxjKDAuMSp2YXIoLS1ydnYpKTtcXG5cXHR0ZXh0LWluZGVudDogY2FsYygwLjEqdmFyKC0tcnZ2KSk7XFxufVxcblxcbi5saWdodC1tb2RlLFxcbi5kYXJrLW1vZGUge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRoZWlnaHQ6IHZhcigtLWRpc3BsYXktaWNvbik7XFxuXFx0d2lkdGg6IHZhcigtLWRpc3BsYXktaWNvbik7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubGlnaHQtbW9kZS5kYXJrLFxcbi5kYXJrLW1vZGUuZGFyayB7XFxuXFx0ZmlsdGVyOiBpbnZlcnQoODAlKTtcXG59XFxuXFxuLmxpZ2h0LW1vZGUgaW1nLFxcbi5kYXJrLW1vZGUgaW1nIHtcXG5cXHRoZWlnaHQ6IDgwJTtcXG5cXHR3aWR0aDogODAlO1xcbn1cXG5cXG4uc2VsZWN0ZWQtZGlzcGxheS5saWdodC1tb2RlLFxcbi5zZWxlY3RlZC1kaXNwbGF5LmRhcmstbW9kZSB7XFxuXFx0dHJhbnNpdGlvbjogMC4yNXMgbGluZWFyO1xcbn1cXG5cXG4uc2VsZWN0ZWQtZGlzcGxheS5saWdodC1tb2RlIGltZyB7XFxuXFx0ZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgNXB4IHZhcigtLXJlZCkpO1xcblxcdHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuXFxuLnNlbGVjdGVkLWRpc3BsYXkuZGFyay1tb2RlIGltZyB7XFxuXFx0ZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgNXB4IGJsYWNrKTtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbi5uYXYge1xcblxcdGZsZXg6IDI7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGZvbnQtZmFtaWx5OiAnTWFqb3IgTW9ubyc7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWJnKTtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5uYXYgZGl2IHtcXG5cXHRmb250LXNpemU6IGNhbGMoMC42KnZhcigtLXJ2dikpO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHR3aWR0aDogY2FsYygzKnZhcigtLXJ2dikpO1xcblxcdGhlaWdodDogY2FsYyh2YXIoLS1ydnYpKTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG5cXHRib3JkZXItcmFkaXVzOiAxNSU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm5vdyB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbm93LWJ1dHRvbik7XFxufVxcblxcbi5ub3csXFxuLmFsbCB7XFxuXFx0bGV0dGVyLXNwYWNpbmc6IGNhbGMoMC4zKnZhcigtLXJ2dikpO1xcblxcdHRleHQtaW5kZW50OiBjYWxjKDAuMyp2YXIoLS1ydnYpKTtcXG59XFxuXFxuLmxhdGVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sYXRlci1idXR0b24pO1xcblxcdGxldHRlci1zcGFjaW5nOiBjYWxjKDAuMSp2YXIoLS1ydnYpKTtcXG5cXHR0ZXh0LWluZGVudDogY2FsYygwLjEqdmFyKC0tcnZ2KSk7XFxufVxcblxcbi5hbGwge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFsbC1idXR0b24pO1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcblxcdGJveC1zaGFkb3c6IDAgMCAwIDNweCB2YXIoLS1idXR0b24tb3V0bGluZSk7XFxufVxcblxcbi5tYWluIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0ZmxleDogYXV0bztcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRwYWRkaW5nOiBjYWxjKDAuNSp2YXIoLS1ydnYpKSAwO1xcblxcdGdhcDogY2FsYygwLjYqdmFyKC0tcnZ2KSk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZyk7XFxufVxcblxcbi5kaXNwbGF5ZWQtaXRlbSB7XFxuXFx0d2lkdGg6IDkwdnc7XFxuXFx0bWF4LXdpZHRoOiBjYWxjKDE1KnZhcigtLXJ2dikpO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRmb250LWZhbWlseTogJ1N1YmxpbWEnO1xcblxcdGZvbnQtc2l6ZTogY2FsYygwLjYqdmFyKC0tcnZ2KSk7XFxuXFx0cGFkZGluZzogY2FsYygwLjEqdmFyKC0tcnZ2KSkgY2FsYygwLjMqdmFyKC0tcnZ2KSk7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuXFx0Ym9yZGVyLXJhZGl1czogY2FsYygwLjgqdmFyKC0tcnZ2KSk7XFxuXFx0bWFyZ2luOiAwIGNhbGMoMC43KnZhcigtLXJ2dikpO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBjYWxjKDEuNCp2YXIoLS1ydnYpKSAxZnIgY2FsYyh2YXIoLS1ydnYpKSBjYWxjKHZhcigtLXJ2dikpO1xcblxcdGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcblxcdGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJjaGVja2JveCB0aXRsZSBlZGl0IGV4cGFuZFxcXCI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0taXRlbS1iZyk7XFxufVxcblxcbi5kaXNwbGF5ZWQtaXRlbS5ub3ctaXRlbSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbm93LWl0ZW0tYmcpO1xcbn1cXG5cXG4uZGlzcGxheWVkLWl0ZW0ubGF0ZXItaXRlbSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGF0ZXItaXRlbS1iZyk7XFxufVxcblxcbi5leHBhbmRlZC1pdGVtIHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogY2FsYygxLjQqdmFyKC0tcnZ2KSkgMWZyIGNhbGModmFyKC0tcnZ2KSkgY2FsYyh2YXIoLS1ydnYpKTtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IGNhbGMoMS4yKnZhcigtLXJ2dikpIDFmcjtcXG5cXHRncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG5cXHRcXHRcXFwiY2hlY2tib3ggdGl0bGUgZWRpdCBleHBhbmRcXFwiXFxuXFx0XFx0XFxcIi4gZGVzY3JpcHRpb24gLiBkZWxldGVcXFwiO1xcbn1cXG5cXG4uZXhwYW5kZWQtaXRlbSAuaXRlbS1kZXNjcmlwdGlvbiB7XFxuXFx0bWFyZ2luLXJpZ2h0OiBjYWxjKDAuMyp2YXIoLS1ydnYpKTtcXG5cXHRtYXJnaW4tYm90dG9tOiBjYWxjKDAuMyp2YXIoLS1ydnYpKTtcXG59XFxuXFxuLmV4cGFuZGVkLWl0ZW0gLml0ZW0tdGl0bGUge1xcblxcdGN1cnNvcjogYXV0bztcXG59XFxuXFxuLmNvbXBsZXRlZC1pdGVtIHtcXG5cXHRmaWx0ZXI6IGdyYXlzY2FsZSg3MCUpO1xcbn1cXG5cXG4uY29tcGxldGVkLWl0ZW0gLml0ZW0tdGl0bGUge1xcblxcdGZvbnQtc3R5bGU6IGl0YWxpYztcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBjYWxjKDAuMDQqdmFyKC0tcnZ2KSkgYmxhY2s7XFxuXFx0dGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBub25lO1xcblxcdHRleHQtdW5kZXJsaW5lLW9mZnNldDogY2FsYygtMC4yKnZhcigtLXJ2dikpO1xcbn1cXG5cXG4uY29tcGxldGVkLWl0ZW0gLml0ZW0tZGVzY3JpcHRpb24ge1xcblxcdGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmRpc3BsYXllZC1pdGVtLmFkZC1pdGVtLWJ1dHRvbiB7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRtYXJnaW46IDA7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFkZC1pdGVtLWJ1dHRvbik7XFxuXFx0aGVpZ2h0OiBjYWxjKDEuNSp2YXIoLS1ydnYpKTtcXG5cXHR3aWR0aDogY2FsYygxLjUqdmFyKC0tcnZ2KSk7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYWRkLWl0ZW0tYnV0dG9uIGltZyB7XFxuXFx0bWF4LWhlaWdodDogMTAwJTtcXG5cXHRtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbi5kaXNwbGF5ZWQtaXRlbS5hZGQtZm9ybSB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWRkLWZvcm0tYmcpO1xcbn1cXG5cXG4uYWRkLWZvcm0taXRzZWxmLFxcbi5lZGl0LWZvcm0taXRzZWxmIHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtcm93czogY2FsYygxLjcqdmFyKC0tcnZ2KSkgY2FsYyh2YXIoLS1ydnYpKSBjYWxjKDQqdmFyKC0tcnZ2KSkgY2FsYyh2YXIoLS1ydnYpKSBjYWxjKDIuMip2YXIoLS1ydnYpKTtcXG5cXHRyb3ctZ2FwOiBjYWxjKDAuMjUqdmFyKC0tcnZ2KSk7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczpcXG5cXHRcXHRcXFwiZm9ybS10aXRsZVxcXCJcXG5cXHRcXHRcXFwidGl0bGUtc2VjdGlvblxcXCJcXG5cXHRcXHRcXFwiZGVzY3JpcHRpb24tc2VjdGlvblxcXCJcXG5cXHRcXHRcXFwicHJpb3JpdHktc2VjdGlvblxcXCJcXG5cXHRcXHRcXFwic3VibWl0LWJ1dHRvblxcXCI7XFxufVxcblxcbi5lZGl0LWJhY2tkcm9wIHtcXG5cXHR6LWluZGV4OiAyO1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHR3aWR0aDogMTAwdnc7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHRiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG5cXHQtLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG59XFxuXFxuLmVkaXQtZm9ybS1pdHNlbGYge1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHR6LWluZGV4OiAzO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1lZGl0LWZvcm0tYmcpO1xcblxcdHdpZHRoOiA5MHZ3O1xcblxcdG1heC13aWR0aDogY2FsYygxNSp2YXIoLS1ydnYpKTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0Zm9udC1mYW1pbHk6ICdTdWJsaW1hJztcXG5cXHRmb250LXNpemU6IGNhbGMoMC42KnZhcigtLXJ2dikpO1xcblxcdHBhZGRpbmc6IGNhbGMoMC4xKnZhcigtLXJ2dikpIGNhbGMoMC4zKnZhcigtLXJ2dikpO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcblxcdGJvcmRlci1yYWRpdXM6IGNhbGMoMC44KnZhcigtLXJ2dikpO1xcbn1cXG5cXG4uZm9ybS10aXRsZSB7XFxuXFx0bWFyZ2luOiAwIDElO1xcblxcdG1heC13aWR0aDogOTB2dztcXG5cXHRncmlkLWFyZWE6IGZvcm0tdGl0bGU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9ybS10aXRsZS10ZXh0IHtcXG5cXHRmb250LXNpemU6IGNhbGMoMC44KnZhcigtLXJ2dikpO1xcbn1cXG5cXG4uZm9ybS10aXRsZS10ZXh0OmhvdmVyIHtcXG5cXHRmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5jbG9zZS1idXR0b24ge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbG9zZS1idXR0b24pO1xcblxcdG1hcmdpbi1sZWZ0OiBhdXRvO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcblxcdGhlaWdodDogY2FsYygwLjkqdmFyKC0tcnZ2KSk7XFxuXFx0d2lkdGg6IGNhbGMoMC45KnZhcigtLXJ2dikpO1xcblxcdGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0tcnZ2KSk7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2xvc2UtYnV0dG9uIGltZyB7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4udGl0bGUtc2VjdGlvbiB7XFxuXFx0Z3JpZC1hcmVhOiB0aXRsZS1zZWN0aW9uO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBjYWxjKDMuNSp2YXIoLS1ydnYpKSAxZnI7XFxufVxcblxcbi50aXRsZS1zZWN0aW9uIGxhYmVsIHtcXG5cXHRmb250LXNpemU6IGNhbGMoMC41KnZhcigtLXJ2dikpO1xcbn1cXG5cXG4udGl0bGUtc2VjdGlvbiBpbnB1dCxcXG4uZGVzY3JpcHRpb24tc2VjdGlvbiB0ZXh0YXJlYSB7XFxuXFx0d2lkdGg6IDkzJTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3JtLWlucHV0LWJnKTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG5cXHRib3JkZXItcmFkaXVzOiBjYWxjKHZhcigtLXJ2dikpO1xcblxcdHBhZGRpbmctbGVmdDogMTBweDtcXG5cXHRmb250LWZhbWlseTogJ1N1YmxpbWEnO1xcblxcdGZvbnQtc2l6ZTogY2FsYygwLjQ1KnZhcigtLXJ2dikpO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24tc2VjdGlvbiB0ZXh0YXJlYSB7XFxuXFx0Ym9yZGVyLXJhZGl1czogY2FsYygwLjUqdmFyKC0tcnZ2KSk7XFxuXFx0cmVzaXplOiBub25lO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyxcXG50ZXh0YXJlYTpmb2N1cyB7XFxuXFx0YXBwZWFyYW5jZTogbm9uZTtcXG5cXHRvdXRsaW5lOiBub25lO1xcblxcdGJveC1zaGFkb3c6IDAgMCAwIDNweCB2YXIoLS1pbnB1dC1mb2N1cy1vdXRsaW5lKTtcXG59XFxuXFxuaW5wdXQ6bm90KDpmb2N1cyksXFxudGV4dGFyZWE6bm90KDpmb2N1cykge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRlc2NyaXB0aW9uLXNlY3Rpb24ge1xcblxcdGdyaWQtYXJlYTogZGVzY3JpcHRpb24tc2VjdGlvbjtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogY2FsYygzLjUqdmFyKC0tcnZ2KSkgMWZyO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24tc2VjdGlvbiBsYWJlbCB7XFxuXFx0Zm9udC1zaXplOiBjYWxjKDAuNSp2YXIoLS1ydnYpKTtcXG59XFxuXFxuLnByaW9yaXR5LXNlY3Rpb24ge1xcblxcdG1hcmdpbi10b3A6IDJweDtcXG5cXHRncmlkLWFyZWE6IHByaW9yaXR5LXNlY3Rpb247XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGNhbGMoMy41KnZhcigtLXJ2dikpIDFmciAxZnI7XFxufVxcblxcbi5wcmlvcml0eS1sYWJlbCB7XFxuXFx0Zm9udC1zaXplOiBjYWxjKDAuNSp2YXIoLS1ydnYpKTtcXG59XFxuXFxuLnJhZGlvLW9wdGlvbiB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGZvbnQtZmFtaWx5OiAnTWFqb3IgTW9ubyc7XFxuXFx0d2lkdGg6IGNhbGMoMyp2YXIoLS1ydnYpKTtcXG5cXHRoZWlnaHQ6IGNhbGModmFyKC0tcnZ2KSk7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTUlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpb3JpdHktYnV0dG9uLWRlZmF1bHQpO1xcbn1cXG5cXG4ucmFkaW8tb3B0aW9uIGxhYmVsIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5ub3ctb3B0aW9uIHtcXG5cXHRqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG5cXHRsZXR0ZXItc3BhY2luZzogY2FsYygwLjMqdmFyKC0tcnZ2KSk7XFxuXFx0dGV4dC1pbmRlbnQ6IGNhbGMoMC4zKnZhcigtLXJ2dikpO1xcbn1cXG5cXG4ubm93LW9wdGlvbi5zZWxlY3RlZC1wcmlvcml0eSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbm93LWJ1dHRvbik7XFxuXFx0Ym94LXNoYWRvdzogMCAwIDAgM3B4IHZhcigtLWJ1dHRvbi1vdXRsaW5lKTtcXG59XFxuXFxuLmxhdGVyLW9wdGlvbiB7XFxuXFx0anVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuXFx0bGV0dGVyLXNwYWNpbmc6IGNhbGMoMC4xKnZhcigtLXJ2dikpO1xcblxcdHRleHQtaW5kZW50OiBjYWxjKDAuMSp2YXIoLS1ydnYpKTtcXG59XFxuXFxuLmxhdGVyLW9wdGlvbi5zZWxlY3RlZC1wcmlvcml0eSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGF0ZXItYnV0dG9uKTtcXG5cXHRib3gtc2hhZG93OiAwIDAgMCAzcHggdmFyKC0tYnV0dG9uLW91dGxpbmUpO1xcbn1cXG5cXG4ucmFkaW8taW5wdXQge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRtYXJnaW46IDA7XFxuXFx0YXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLnN1Ym1pdC1idXR0b24ge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRncmlkLWFyZWE6IHN1Ym1pdC1idXR0b247XFxuXFx0Zm9udC1mYW1pbHk6ICdTdWJsaW1hJztcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWJtaXQtYnV0dG9uLWJnKTtcXG5cXHRhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuXFx0aGVpZ2h0OiBjYWxjKDEuNSp2YXIoLS1ydnYpKTtcXG5cXHR3aWR0aDogOTUlO1xcblxcdGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0tcnZ2KSk7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc3VibWl0LWJ1dHRvbiBpbWcge1xcblxcdGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmRpc3BsYXllZC1pdGVtIGltZyB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNoZWNrYm94IGltZyxcXG4uZXhwYW5kIGltZyB7XFxuXFx0d2lkdGg6IGNhbGModmFyKC0tcnZ2KSk7XFxufVxcblxcbi5lZGl0IGltZyB7XFxuXFx0d2lkdGg6IGNhbGMoMC44KnZhcigtLXJ2dikpO1xcbn1cXG5cXG4uY2hlY2tib3gge1xcblxcdGdyaWQtYXJlYTogY2hlY2tib3g7XFxuXFx0bWFyZ2luLWxlZnQ6IGNhbGMoMC4yKnZhcigtLXJ2dikpO1xcbn1cXG5cXG4uaXRlbS10aXRsZSB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGJvdHRvbTogMnB4O1xcblxcdGdyaWQtYXJlYTogdGl0bGU7XFxuXFx0anVzdGlmeS1zZWxmOiBzdGFydDtcXG59XFxuXFxuLmV4cGFuZGFibGUtdGl0bGUge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmVkaXQge1xcblxcdGdyaWQtYXJlYTogZWRpdDtcXG59XFxuXFxuLmV4cGFuZCB7XFxuXFx0Z3JpZC1hcmVhOiBleHBhbmQ7XFxufVxcblxcbi5zaHJpbmsge1xcblxcdGdyaWQtYXJlYTogZXhwYW5kO1xcblxcdGFzcGVjdC1yYXRpbzogMSAvIDE7XFxufVxcblxcbi5zaHJpbmsgaW1nIHtcXG5cXHRoZWlnaHQ6IGNhbGModmFyKC0tcnZ2KSk7XFxufVxcblxcbi5pdGVtLWRlc2NyaXB0aW9uIHtcXG5cXHRib3JkZXItcmFkaXVzOiAzcHg7XFxuXFx0Zm9udC1zdHlsZTogaXRhbGljO1xcblxcdGdyaWQtYXJlYTogZGVzY3JpcHRpb247XFxuXFx0YWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG5cXHRqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XFxuXFx0Zm9udC1zaXplOiA4MCU7XFxufVxcblxcbi5leHBhbmRlZC1pdGVtIC5kZWxldGUge1xcblxcdGdyaWQtYXJlYTogZGVsZXRlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcblxcdG1hcmdpbi1ib3R0b206IGNhbGMoMC4zKnZhcigtLXJ2dikpO1xcbn1cXG5cXG4uZGVsZXRlIGltZyB7XFxuXFx0aGVpZ2h0OiBjYWxjKHZhcigtLXJ2dikpO1xcbn1cXG5cXG5mb290ZXIge1xcblxcdGhlaWdodDogNXZoO1xcblxcdG1pbi1oZWlnaHQ6IGNhbGMoMC44KnZhcigtLXJ2dikpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpdGxlLWZvb3Rlci1jb2xvcik7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGZvbnQtc2l6ZTogY2FsYygwLjUqdmFyKC0tcnZ2KSk7XFxuXFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcblxcdGZvbnQtZmFtaWx5OiAnU3VibGltYSc7XFxuXFx0Zm9udC1zaXplOiBjYWxjKDAuNCp2YXIoLS1ydnYpKTtcXG5cXHRsZXR0ZXItc3BhY2luZzogY2FsYygwLjEqdmFyKC0tcnZ2KSk7XFxuXFx0dGV4dC1pbmRlbnQ6IGNhbGMoMC4xKnZhcigtLXJ2dikpO1xcbn1cXG5cXG4vKiBkYXJrIG1vZGUgc3R5bGluZzogKi9cXG5cXG5ib2R5LmRhcmsge1xcblxcdGNvbG9yOiB2YXIoLS1kYXJrLXRleHQpO1xcbn1cXG5cXG4udGl0bGUuZGFyayB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay10aXRsZS1mb290ZXItY29sb3IpO1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kYXJrLWJvcmRlcik7XFxufVxcblxcbi5uYXYuZGFyayB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1uYXYtYmcpO1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kYXJrLWJvcmRlcik7XFxufVxcblxcbi5uYXYuZGFyayBkaXYge1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstYm9yZGVyKTtcXG59XFxuXFxuLm5vdy5kYXJrIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLW5vdy1idXR0b24pO1xcbn1cXG5cXG4ubGF0ZXIuZGFyayB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1sYXRlci1idXR0b24pO1xcbn1cXG5cXG4uYWxsLmRhcmsge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYWxsLWJ1dHRvbik7XFxufVxcblxcbi5zZWxlY3RlZC5kYXJrIHtcXG5cXHRib3gtc2hhZG93OiAwIDAgMCAzcHggdmFyKC0tZGFyay1idXR0b24tb3V0bGluZSk7XFxufVxcblxcbi5tYWluLmRhcmsge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstbWFpbi1iZyk7XFxufVxcblxcbi5kaXNwbGF5ZWQtaXRlbS5kYXJrIHtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWJvcmRlcik7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1pdGVtLWJnKTtcXG59XFxuXFxuLmRpc3BsYXllZC1pdGVtLm5vdy1pdGVtLmRhcmsge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstbm93LWl0ZW0tYmcpO1xcbn1cXG5cXG4uZGlzcGxheWVkLWl0ZW0ubGF0ZXItaXRlbS5kYXJrIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWxhdGVyLWl0ZW0tYmcpO1xcbn1cXG5cXG4uY29tcGxldGVkLWl0ZW0gLml0ZW0tdGl0bGUuZGFyayB7XFxuXFx0ZmlsdGVyOiBicmlnaHRuZXNzKDgwJSk7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgY2FsYygwLjA0KnZhcigtLXJ2dikpIHZhcigtLWRhcmstdGV4dCk7XFxuXFx0dGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBub25lO1xcbn1cXG5cXG4uZGlzcGxheWVkLWl0ZW0uYWRkLWZvcm0uZGFyayB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1hZGQtZm9ybS1iZyk7XFxufVxcblxcbi5lZGl0LWZvcm0taXRzZWxmLmRhcmsge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYWRkLWZvcm0tYmcpO1xcbn1cXG5cXG4uY2xvc2UtYnV0dG9uLmRhcmsge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY2xvc2UtYnV0dG9uKTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWJvcmRlcik7XFxufVxcblxcbi50aXRsZS1zZWN0aW9uLmRhcmsgaW5wdXQsXFxuLmRlc2NyaXB0aW9uLXNlY3Rpb24uZGFyayB0ZXh0YXJlYSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1mb3JtLWlucHV0LWJnKTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWJvcmRlcik7XFxufVxcblxcbmlucHV0LmRhcms6Zm9jdXMsXFxudGV4dGFyZWEuZGFyazpmb2N1cyB7XFxuXFx0Ym94LXNoYWRvdzogMCAwIDAgM3B4IHZhcigtLWRhcmstaW5wdXQtZm9jdXMtb3V0bGluZSk7XFxufVxcblxcbi5yYWRpby1vcHRpb24uZGFyayB7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1ib3JkZXIpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstcHJpb3JpdHktYnV0dG9uLWRlZmF1bHQpO1xcbn1cXG5cXG4ubm93LW9wdGlvbi5zZWxlY3RlZC1wcmlvcml0eS5kYXJrIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLW5vdy1idXR0b24pO1xcblxcdGJveC1zaGFkb3c6IDAgMCAwIDNweCB2YXIoLS1kYXJrLWJ1dHRvbi1vdXRsaW5lKTtcXG59XFxuXFxuLmxhdGVyLW9wdGlvbi5zZWxlY3RlZC1wcmlvcml0eS5kYXJrIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWxhdGVyLWJ1dHRvbik7XFxuXFx0Ym94LXNoYWRvdzogMCAwIDAgM3B4IHZhcigtLWRhcmstYnV0dG9uLW91dGxpbmUpO1xcbn1cXG5cXG4uZGlzcGxheWVkLWl0ZW0uYWRkLWl0ZW0tYnV0dG9uLmRhcmsge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYWRkLWl0ZW0tYnV0dG9uKTtcXG59XFxuXFxuLnN1Ym1pdC1idXR0b24uZGFyayB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1zdWJtaXQtYnV0dG9uLWJnKTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWJvcmRlcik7XFxufVxcblxcbmZvb3Rlci5kYXJrIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLXRpdGxlLWZvb3Rlci1jb2xvcik7XFxuXFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWRhcmstYm9yZGVyKTtcXG59XFxuXFxuLyogZGVza3RvcCB2ZXJzaW9uOiAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzUwcHgpIHtcXG5cXG5cXHQubmF2IGRpdiB7XFxuXFx0XFx0dHJhbnNpdGlvbjogMC4wNzVzIGxpbmVhcjtcXG5cXHR9XFxuXFxuXFx0Lm5hdiBkaXY6aG92ZXIge1xcblxcdFxcdHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuXFx0fVxcblxcblxcdC5jaGVja2JveCxcXG5cXHQuZWRpdCxcXG5cXHQuZXhwYW5kLFxcblxcdC5zaHJpbmssXFxuXFx0LmRlbGV0ZSxcXG5cXHQuYWRkLWl0ZW0tYnV0dG9uLFxcblxcdC5yYWRpby1vcHRpb24sXFxuXFx0LnN1Ym1pdC1idXR0b24sXFxuXFx0LmNsb3NlLWJ1dHRvbiB7XFxuXFx0XFx0dHJhbnNpdGlvbjogMC4wNzVzIGxpbmVhcjtcXG5cXHR9XFxuXFxuXFx0LmNoZWNrYm94OmhvdmVyIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDc1KTtcXG5cXHR9XFxuXFxuXFx0LmVkaXQ6aG92ZXIge1xcblxcdFxcdHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG5cXHR9XFxuXFxuXFx0LmV4cGFuZDpob3ZlciB7XFxuXFx0XFx0dHJhbnNmb3JtOiBzY2FsZSgxLjI1KTtcXG5cXHR9XFxuXFxuXFx0LnNocmluazpob3ZlciB7XFxuXFx0XFx0dHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcblxcdH1cXG5cXG5cXHQuZGVsZXRlOmhvdmVyIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDc1KTtcXG5cXHR9XFxuXFxuXFx0LmFkZC1pdGVtLWJ1dHRvbjpob3ZlciB7XFxuXFx0XFx0dHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG5cXHR9XFxuXFxuXFx0LnJhZGlvLW9wdGlvbjpob3ZlciB7XFxuXFx0XFx0dHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG5cXHR9XFxuXFxuXFx0LnN1Ym1pdC1idXR0b246aG92ZXIge1xcblxcdFxcdHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XFxuXFx0fVxcblxcblxcdC5jbG9zZS1idXR0b246aG92ZXIge1xcblxcdFxcdHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG5cXHR9XFxuXFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcXG5cXHQuY29tcGxldGVkLWl0ZW0gLml0ZW0tdGl0bGUge1xcblxcdFxcdGZvbnQtc3R5bGU6IGl0YWxpYztcXG5cXHRcXHR0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG5cXHRcXHR0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IG5vbmU7XFxuXFx0XFx0dGV4dC11bmRlcmxpbmUtb2Zmc2V0OiAwO1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcXG5cXHRib2R5IHtcXG5cXHRcXHRtaW4taGVpZ2h0OiAxMDB2aDtcXG5cXHRcXHRtaW4td2lkdGg6IDEwMHZ3O1xcblxcdH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIHNldCBib2R5IGhlaWdodCB0byBleGFjdGx5IHRoZSBpbm5lciBoZWlnaHQgb2YgdGhlIGJyb3dzZXIgb24gbmFycm93IChsaWtlbHkgbW9iaWxlKSBzY3JlZW5zOlxuY29uc3Qgc2V0Qm9keUhlaWdodCA9ICgpID0+IHtcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA3NTEpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5taW5IZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKyBcInB4XCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5taW5IZWlnaHQgPSAnMTAwdmgnO1xuICAgIH1cbn07XG5cbi8vIHNldCBib2R5IHdpZHRoIHRvIGV4YWN0bHkgdGhlIGlubmVyIHdpZHRoIG9mIHRoZSBicm93c2VyOlxuY29uc3Qgc2V0Qm9keVdpZHRoID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUubWF4V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCArIFwicHhcIjtcbn07XG5cbi8vIHdvcmthcm91bmQgdG8gY2hlY2sgZm9yIHNhZmFyaSBsYW5kc2NhcGUgb3JpZW50YXRpb246XG5jb25zdCBjaGVja0ZvckxhbmRzY2FwZSA9ICgpID0+IHtcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcbiAgICAgICAgc2V0Qm9keSgpO1xuICAgIH1cbn1cblxuY29uc3Qgc2V0Qm9keSA9ICgpID0+IHtcbiAgICBzZXRCb2R5SGVpZ2h0KCk7XG4gICAgc2V0Qm9keVdpZHRoKCk7XG59O1xuXG5leHBvcnQgeyBzZXRCb2R5SGVpZ2h0LCBzZXRCb2R5V2lkdGgsIHNldEJvZHksIGNoZWNrRm9yTGFuZHNjYXBlIH07IiwiaW1wb3J0IFNhdmVJY29uIGZyb20gJy4uL2ltZy9zYXZlLnN2Zyc7XG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gJy4uL2ltZy9jbG9zZS5zdmcnO1xuaW1wb3J0IHsgZ2V0QWxsIH0gZnJvbSAnLi9saXN0LmpzJztcbmltcG9ydCB7IGRpc3BsYXlNb2RlIH0gZnJvbSAnLi9wYWdlLmpzJztcbmltcG9ydCB7IGFkZEVkaXRGb3JtTGlzdGVuZXJzIH0gZnJvbSAnLi9saXN0ZW4nO1xuXG5jb25zdCByZW5kZXJFZGl0Rm9ybSA9IChpbmRleCkgPT4ge1xuXG4gICAgY29uc3QgbGlzdCA9IGdldEFsbCgpO1xuICAgIGNvbnN0IGl0ZW0gPSBsaXN0W2luZGV4XTtcblxuICAgIC8vIGNyZWF0ZSBvdmVybGF5IGZvciBibHVyIGJhY2tkcm9wIGZpbHRlcjpcbiAgICBjb25zdCBlZGl0QmFja2Ryb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlZGl0QmFja2Ryb3AuY2xhc3NMaXN0LmFkZCgnZWRpdC1iYWNrZHJvcCcpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWRpdEJhY2tkcm9wKTtcblxuICAgIC8vIGNyZWF0ZSBlZGl0IGZvcm0gY29udGFpbmVyOlxuICAgIGNvbnN0IGVkaXRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWRpdEZvcm0uY2xhc3NMaXN0LmFkZCgnZWRpdC1mb3JtJyk7XG5cbiAgICAvLyBhZGQgZWRpdCBmb3JtIHRvIHRoZSBET006XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChlZGl0Rm9ybSk7XG5cbiAgICAgICAgLy8gY3JlYXRlIHRoZSBmb3JtIGl0c2VsZjpcbiAgICAgICAgY29uc3QgZm9ybUl0c2VsZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgZm9ybUl0c2VsZi5jbGFzc0xpc3QuYWRkKCdlZGl0LWZvcm0taXRzZWxmJyk7XG4gICAgICAgIGZvcm1JdHNlbGYuZGF0YXNldC5pZCA9IGluZGV4O1xuICAgICAgICBmb3JtSXRzZWxmLnNldEF0dHJpYnV0ZSgnbWV0aG9kJywgJycpO1xuICAgICAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZChmb3JtSXRzZWxmKTtcblxuICAgICAgICAgICAgLy8gY3JlYXRlIHRoZSBmb3JtIHRpdGxlOlxuICAgICAgICAgICAgY29uc3QgZm9ybVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBmb3JtVGl0bGUuY2xhc3NMaXN0LmFkZCgnZm9ybS10aXRsZScpO1xuICAgICAgICAgICAgZm9ybUl0c2VsZi5hcHBlbmRDaGlsZChmb3JtVGl0bGUpO1xuICAgICAgICAgICAgY29uc3QgZm9ybVRpdGxlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIGZvcm1UaXRsZVRleHQuY2xhc3NMaXN0LmFkZCgnZm9ybS10aXRsZS10ZXh0JywgJ2VkaXQtZm9ybS10aXRsZS10ZXh0Jyk7XG4gICAgICAgICAgICBmb3JtVGl0bGVUZXh0LnRleHRDb250ZW50ID0gYGVkaXRpbmcgJyR7aXRlbS50aXRsZX0nYDtcbiAgICAgICAgICAgIGZvcm1UaXRsZS5hcHBlbmRDaGlsZChmb3JtVGl0bGVUZXh0KTtcblxuICAgICAgICAgICAgLy8gY3JlYXRlIGFuICdYJyBidXR0b24gdG8gY2xvc2Ugb3V0IG9mIHRoZSBmb3JtOlxuICAgICAgICAgICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNsb3NlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlLWJ1dHRvbicsICdlZGl0LWNsb3NlLWJ1dHRvbicpO1xuICAgICAgICAgICAgZm9ybVRpdGxlLmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcbiAgICAgICAgICAgIGNvbnN0IGNsb3NlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgY2xvc2VJY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgQ2xvc2VJY29uKTtcbiAgICAgICAgICAgIGNsb3NlQnV0dG9uLmFwcGVuZENoaWxkKGNsb3NlSWNvbik7XG5cbiAgICAgICAgICAgIC8vIGNyZWF0ZSB0aGUgZm9ybSBlbGVtZW50czpcblxuICAgICAgICAgICAgICAgIC8vIHRpdGxlIHNlY3Rpb246XG4gICAgICAgICAgICAgICAgY29uc3QgdGl0bGVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgdGl0bGVTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZWxlbWVudCcsICd0aXRsZS1zZWN0aW9uJywgJ2VkaXQtdGl0bGUtc2VjdGlvbicpO1xuICAgICAgICAgICAgICAgIGZvcm1JdHNlbGYuYXBwZW5kQ2hpbGQodGl0bGVTZWN0aW9uKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyB0aXRsZSBsYWJlbDpcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndGl0bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9ICd0aXRsZTonO1xuICAgICAgICAgICAgICAgICAgICB0aXRsZVNlY3Rpb24uYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gdGl0bGUgaW5wdXQ6XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZCgndGl0bGUtaW5wdXQnLCAnZWRpdC10aXRsZS1pbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICd0aXRsZScpO1xuICAgICAgICAgICAgICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAndGl0bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVJbnB1dC52YWx1ZSA9IGl0ZW0udGl0bGU7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB0aXRsZVNlY3Rpb24uYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG5cblxuICAgICAgICAgICAgICAgIC8vIGRlc2NyaXB0aW9uIHNlY3Rpb246XG4gICAgICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb25TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25TZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZWxlbWVudCcsICdkZXNjcmlwdGlvbi1zZWN0aW9uJywgJ2VkaXQtZGVzY3JpcHRpb24tc2VjdGlvbicpO1xuICAgICAgICAgICAgICAgIGZvcm1JdHNlbGYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25TZWN0aW9uKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBkZXNjcmlwdGlvbiBsYWJlbDpcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZGVzY3JpcHRpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9ICdkZXNjcmlwdGlvbiAob3B0aW9uYWwpOic7XG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uU2VjdGlvbi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBkZXNjcmlwdGlvbiBpbnB1dDpcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uSW5wdXQuY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24taW5wdXQnLCAnZWRpdC1kZXNjcmlwdGlvbi1pbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdkZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVzY3JpcHRpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IGl0ZW0uZGVzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uU2VjdGlvbi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcblxuXG4gICAgICAgICAgICAgICAgLy8gcHJpb3JpdHkgZmllbGRzZXQ6XG4gICAgICAgICAgICAgICAgY29uc3QgZmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpO1xuICAgICAgICAgICAgICAgIGZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LXNlY3Rpb24nLCAnZWRpdC1wcmlvcml0eS1zZWN0aW9uJyk7XG4gICAgICAgICAgICAgICAgZm9ybUl0c2VsZi5hcHBlbmRDaGlsZChmaWVsZHNldCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gcHJpb3JpdHkgbGFiZWw6XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlMYWJlbC5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1sYWJlbCcsICdlZGl0LXByaW9yaXR5LWxhYmVsJyk7XG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAncHJpb3JpdHk6JztcbiAgICAgICAgICAgICAgICAgICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gJ05PVycgcHJpb3JpdHkgcmFkaW8gb3B0aW9uOlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBub3dPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgbm93T3B0aW9uLmNsYXNzTGlzdC5hZGQoJ3JhZGlvLW9wdGlvbicsICdub3ctb3B0aW9uJywgJ2VkaXQtbm93LW9wdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChub3dPcHRpb24pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBOT1cgaW5wdXQgJiBsYWJlbDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vd0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vd0lucHV0LmNsYXNzTGlzdC5hZGQoJ3JhZGlvLWlucHV0JywgJ2VkaXQtcmFkaW8taW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnByaW9yaXR5ID09PSAnbm93Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vd09wdGlvbi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZC1wcmlvcml0eScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbm93SW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3dJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25vdycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm93SW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3ByaW9yaXR5Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3dJbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ25vdycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm93T3B0aW9uLmFwcGVuZENoaWxkKG5vd0lucHV0KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm93TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm93TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbm93Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3dMYWJlbC50ZXh0Q29udGVudCA9ICdub3cnO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm93T3B0aW9uLmFwcGVuZENoaWxkKG5vd0xhYmVsKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyAnTEFURVInIHByaW9yaXR5IHJhZGlvIG9wdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGF0ZXJPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgbGF0ZXJPcHRpb24uY2xhc3NMaXN0LmFkZCgncmFkaW8tb3B0aW9uJywgJ2xhdGVyLW9wdGlvbicsICdlZGl0LWxhdGVyLW9wdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChsYXRlck9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTEFURVIgaW5wdXQgJiBsYWJlbDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhdGVySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF0ZXJJbnB1dC5jbGFzc0xpc3QuYWRkKCdyYWRpby1pbnB1dCcsICdlZGl0LXJhZGlvLWlucHV0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5wcmlvcml0eSA9PT0gJ2xhdGVyJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhdGVyT3B0aW9uLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkLXByaW9yaXR5Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXRlcklucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF0ZXJJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xhdGVyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXRlcklucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcmlvcml0eScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF0ZXJJbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2xhdGVyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXRlck9wdGlvbi5hcHBlbmRDaGlsZChsYXRlcklucHV0KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGF0ZXJMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXRlckxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2xhdGVyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXRlckxhYmVsLnRleHRDb250ZW50ID0gJ2xhdGVyJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhdGVyT3B0aW9uLmFwcGVuZENoaWxkKGxhdGVyTGFiZWwpO1xuXG4gICAgICAgICAgICAvLyBjcmVhdGUgYSBuZXcgJ2FkZCcgYnV0dG9uIGF0IHRoZSBib3R0b20gb2YgdGhlIGZvcm06XG4gICAgICAgICAgICBjb25zdCBmb3JtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBmb3JtQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdC1idXR0b24nLCAnZWRpdC1zdWJtaXQtYnV0dG9uJyk7XG4gICAgICAgICAgICBmb3JtQnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgICAgICAgICAgIGZvcm1JdHNlbGYuYXBwZW5kQ2hpbGQoZm9ybUJ1dHRvbik7XG4gICAgICAgICAgICBjb25zdCBmb3JtQnV0dG9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgZm9ybUJ1dHRvbkljb24uc2V0QXR0cmlidXRlKCdzcmMnLCBTYXZlSWNvbik7XG4gICAgICAgICAgICBmb3JtQnV0dG9uLmFwcGVuZENoaWxkKGZvcm1CdXR0b25JY29uKTtcbiAgICBcbiAgICAvLyByZW5kZXIgdGhlIGVkaXQgZm9ybSBpbiBkYXJrIG1vZGUgaWYgaXQncyB0dXJuZWQgb246XG4gICAgaWYgKGRpc3BsYXlNb2RlID09PSAnZGFyaycpIHtcbiAgICAgICAgc3dpdGNoVG9EYXJrKCk7XG4gICAgfVxuXG4gICAgYWRkRWRpdEZvcm1MaXN0ZW5lcnMoKTtcblxufVxuXG5leHBvcnQgeyByZW5kZXJFZGl0Rm9ybSB9IiwiaW1wb3J0ICcuLi9zdHlsZS5jc3MnO1xuXG5pbXBvcnQgeyByZXRyaWV2ZVN0b3JlZExpc3QgfSBmcm9tICcuL2xpc3QuanMnO1xuXG5pbXBvcnQgeyByZW5kZXJIZWFkZXJGb290ZXIsIHJlbmRlck5vdywgc3R5bGVMaWdodEljb24sIHN3aXRjaFRvTGlnaHQgfSBmcm9tICcuL3BhZ2UuanMnO1xuXG5pbXBvcnQgeyBhZGRJbml0aWFsTGlzdGVuZXJzIH0gZnJvbSAnLi9saXN0ZW4uanMnO1xuXG5yZW5kZXJIZWFkZXJGb290ZXIoKTtcblxuYWRkSW5pdGlhbExpc3RlbmVycygpO1xuXG5yZXRyaWV2ZVN0b3JlZExpc3QoKTtcblxucmVuZGVyTm93KCk7XG5cbi8vIHNldCBsaWdodCBtb2RlIGFzIGRlZmF1bHQ6XG5zd2l0Y2hUb0xpZ2h0KCk7XG5zdHlsZUxpZ2h0SWNvbigpOyIsIi8vIGNyZWF0ZSBlbXB0eSB0b2RvTGlzdCBhcnJheTpcbmxldCB0b2RvTGlzdCA9IFtdO1xuXG4vLyByZXRyaWV2ZSB0aGUgdG9kb0xpc3QgYXJyYXkgZnJvbSBsb2NhbFN0b3JhZ2U6XG5jb25zdCByZXRyaWV2ZVN0b3JlZExpc3QgPSAoKSA9PiB7XG5cbiAgICAvLyBmaXJzdCwgY2hlY2sgaWYgdG8tZG8gYXJyYXkgaXMgc3RvcmVkIGluIGxvY2FsU3RvcmFnZTpcbiAgICBjb25zdCBzdG9yZWRUb2RvTGlzdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvTGlzdCcpO1xuICAgIC8vIGlmIHRoZXJlIGlzIGEgc3RvcmVkVG9kb0xpc3QsIGdldCBpdCBhbmQgc2F2ZSBpdCB0byByZXRyaWV2ZWRMaXN0OlxuICAgIGlmIChzdG9yZWRUb2RvTGlzdCkge1xuICAgICAgICBjb25zdCByZXRyaWV2ZWRMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb0xpc3QnKSk7XG4gICAgICAgIFxuICAgICAgICAvLyBzZXQgdGhlIGxvY2FsIHRvZG9MaXN0IGFycmF5IHRvIHRoZSBsaXN0IHJldHJpZXZlZCBmcm9tIHN0b3JhZ2U6XG4gICAgICAgIHRvZG9MaXN0ID0gcmV0cmlldmVkTGlzdDtcbiAgICB9XG59XG5cbi8vIHNhdmUgdGhlIGxpc3QgdG8gbG9jYWxTdG9yYWdlOlxuY29uc3Qgc2F2ZVRvU3RvcmFnZSA9ICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb0xpc3QnLCBKU09OLnN0cmluZ2lmeSh0b2RvTGlzdCkpO1xufVxuXG4vLyBUb2RvIG9iamVjdCBjb25zdHJ1Y3RvcjpcbmZ1bmN0aW9uIFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgY29tcGxldGVkKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XG59O1xuXG4vLyBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFRvZG8gb2JqZWN0IGFuZCBhZGQgaXQgdG8gdGhlIHRvZG9MaXN0IGFycmF5OlxuY29uc3QgY3JlYXRlVG9kbyA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBjb21wbGV0ZWQpID0+IHtcbiAgICBjb25zdCBuZXdUb2RvID0gbmV3IFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgY29tcGxldGVkKTtcbiAgICB0b2RvTGlzdC5wdXNoKG5ld1RvZG8pO1xuICAgIHNhdmVUb1N0b3JhZ2UoKTtcbn07XG5cbi8vIGdldCB0aGUgY29tcGxldGUgY3VycmVudCBsaXN0OlxuY29uc3QgZ2V0QWxsID0gKCkgPT4ge1xuICAgIHJldHVybiB0b2RvTGlzdDtcbn07XG5cbi8vIGdldCB0aGUgaXRlbXMgd2l0aCAnbm93JyBwcmlvcml0eTpcbmNvbnN0IGdldE5vdyA9ICgpID0+IHtcbiAgICBjb25zdCBub3dJdGVtcyA9IHRvZG9MaXN0LmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgaWYgKGl0ZW0ucHJpb3JpdHkgPT09ICdub3cnKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBub3dJdGVtcztcbn07XG5cbi8vIGdldCB0aGUgaXRlbXMgd2l0aCAnbGF0ZXInIHByaW9yaXR5OlxuY29uc3QgZ2V0TGF0ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgbGF0ZXJJdGVtcyA9IHRvZG9MaXN0LmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgaWYgKGl0ZW0ucHJpb3JpdHkgPT09ICdsYXRlcicpIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGxhdGVySXRlbXM7XG59O1xuXG5jb25zdCBnZXREZXNjcmlwdGlvbiA9IChpZCkgPT4ge1xuICAgIHJldHVybiB0b2RvTGlzdFtpZF0uZGVzY3JpcHRpb247XG59O1xuXG5jb25zdCBnZXRDb21wbGV0ZWQgPSAoaWQpID0+IHtcbiAgICByZXR1cm4gdG9kb0xpc3RbaWRdLmNvbXBsZXRlZDtcbn1cblxuLy8gcmVtb3ZlIGEgVG9kbyBvYmplY3QgZnJvbSB0aGUgdG9kb0xpc3QgYXJyYXkgYnkgdXNpbmcgaXRzIERPTSBpZCBhcyBpdHMgYXJyYXkgaW5kZXg6XG5jb25zdCBkZWxldGVUb2RvID0gKGlkKSA9PiB7XG4gICAgdG9kb0xpc3Quc3BsaWNlKGlkLCAxKTtcbiAgICBzYXZlVG9TdG9yYWdlKCk7XG59XG5cbi8vIGVkaXQgYSBwcm9wZXJ0eSBvZiBhIFRvZG8gb2JqZWN0OlxuY29uc3QgZWRpdFRvZG8gPSAoaWQsIHByb3BlcnR5LCBuZXdWYWx1ZSkgPT4ge1xuICAgIHRvZG9MaXN0W2lkXVtwcm9wZXJ0eV0gPSBuZXdWYWx1ZTtcbiAgICBzYXZlVG9TdG9yYWdlKCk7XG59O1xuXG5leHBvcnQgeyBcbiAgICBjcmVhdGVUb2RvLCBcbiAgICBnZXRBbGwsIFxuICAgIGdldE5vdywgXG4gICAgZ2V0TGF0ZXIsIFxuICAgIGdldERlc2NyaXB0aW9uLCBcbiAgICBnZXRDb21wbGV0ZWQsIFxuICAgIGRlbGV0ZVRvZG8sIFxuICAgIGVkaXRUb2RvLFxuICAgIHJldHJpZXZlU3RvcmVkTGlzdCxcbiAgICBzYXZlVG9TdG9yYWdlXG59IiwiaW1wb3J0IHsgY2hlY2tGb3JMYW5kc2NhcGUsIHNldEJvZHkgfSBmcm9tICcuL2JvZHkuanMnO1xuaW1wb3J0IHsgXG4gICAgcmVuZGVyTm93LCBcbiAgICByZW5kZXJMYXRlciwgXG4gICAgcmVuZGVyQWxsLCBcbiAgICBleHBhbmRJdGVtLFxuICAgIHNocmlua0l0ZW0sIFxuICAgIGdldEN1cnJlbnRWaWV3LFxuICAgIGNoZWNrQ2hlY2tib3gsXG4gICAgdW5jaGVja0NoZWNrYm94LFxuICAgIHJlbmRlckFkZEZvcm0sXG4gICAgc3R5bGVSYWRpb09wdGlvbixcbiAgICBzdWJtaXRGb3JtLFxuICAgIHJlbW92ZUZvcm0sIFxuICAgIHN3aXRjaFRvTGlnaHQsXG4gICAgc3dpdGNoVG9EYXJrLFxuICAgIHN0eWxlTGlnaHRJY29uLFxuICAgIHN0eWxlRGFya0ljb24sXG4gICAgc2hvd0VkaXRQb3B1cCxcbiAgICBzdWJtaXRFZGl0Rm9ybSxcbiAgICByZW1vdmVFZGl0Rm9ybSB9IGZyb20gJy4vcGFnZS5qcyc7XG5pbXBvcnQgeyBkZWxldGVUb2RvLCBlZGl0VG9kbywgZ2V0Q29tcGxldGVkIH0gZnJvbSAnLi9saXN0LmpzJztcblxuLy8gZXZlbnQgbGlzdGVuZXJzIHRvIGFkZCB3aGVuIHRoZSBwYWdlIGZpcnN0IGxvYWRzOlxuY29uc3QgYWRkSW5pdGlhbExpc3RlbmVycyA9ICgpID0+IHtcblxuICAgIC8vIHNldCBpbml0aWFsIGJvZHkgaGVpZ2h0ICYgd2lkdGguLlxuICAgIHNldEJvZHkoKTtcblxuICAgIC8vIHRoZW4gYWRqdXN0IGJvZHkgaGVpZ2h0ICYgd2lkdGggaWYgbmVlZGVkIHdoZW5ldmVyIHRoZSB3aW5kb3cgaXMgcmVzaXplZCwgb3Igd2hlbiB0aGUgc2NyZWVuIG9yaWVudGF0aW9uIGNoYW5nZXM6XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHNldEJvZHkpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBjaGVja0ZvckxhbmRzY2FwZSk7XG4gICAgLy8gaWYgYnJvd3NlciBpcyBub3Qgc2FmYXJpOlxuICAgIGlmICghKG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIlNhZmFyaVwiKSAhPSAtMSApKSB7XG4gICAgICAgIHNjcmVlbi5vcmllbnRhdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZXRCb2R5KTtcbiAgICAgICAgc2NyZWVuLm9yaWVudGF0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGNoZWNrRm9yTGFuZHNjYXBlKTtcbiAgICB9XG4gICAgXG4gICAgLy8gYWRkIGNsaWNrIGxpc3RlbmVycyB0byBuYXYgYnV0dG9ucyB0byB0cmlnZ2VyIHJlbmRlciBmdW5jdGlvbnM6XG4gICAgY29uc3Qgbm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdycpO1xuICAgIG5vdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlck5vdyk7XG5cbiAgICBjb25zdCBsYXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYXRlcicpO1xuICAgIGxhdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVuZGVyTGF0ZXIpO1xuXG4gICAgY29uc3QgYWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbCcpO1xuICAgIGFsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlckFsbCk7XG5cbiAgICAvLyBhZGQgbGlzdGVuZXJzIHRvIGxpZ2h0L2RhcmsgbW9kZSBkaXNwbGF5IGljb25zOlxuICAgIGNvbnN0IGxpZ2h0SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saWdodC1tb2RlJyk7XG4gICAgbGlnaHRJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3dpdGNoVG9MaWdodCk7XG4gICAgbGlnaHRJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3R5bGVMaWdodEljb24pO1xuXG4gICAgY29uc3QgZGFya0ljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGFyay1tb2RlJyk7XG4gICAgZGFya0ljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzd2l0Y2hUb0RhcmspO1xuICAgIGRhcmtJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3R5bGVEYXJrSWNvbik7XG5cbn1cblxuY29uc3QgYWRkQWRkTGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1pdGVtLWJ1dHRvbicpO1xuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlckFkZEZvcm0pO1xufVxuXG5jb25zdCBhZGRGb3JtTGlzdGVuZXJzID0gKCkgPT4ge1xuXG4gICAgLy8gYWRkIGNsb3NlIGJ1dHRvbiBsaXN0ZW5lcjpcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1idXR0b24nKTtcbiAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZUZvcm0pO1xuXG4gICAgLy8gYWRkIHJhZGlvIGlucHV0IGxpc3RlbmVyczpcbiAgICBjb25zdCByYWRpb0lucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yYWRpby1pbnB1dCcpO1xuICAgIHJhZGlvSW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgICAgICAgc3R5bGVSYWRpb09wdGlvbihlKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBhZGQgc3VibWl0IGxpc3RlbmVyOlxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWZvcm0taXRzZWxmJyk7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHN1Ym1pdEZvcm0oKTtcbiAgICB9KTtcbn1cblxuY29uc3QgYWRkRWRpdEZvcm1MaXN0ZW5lcnMgPSAoKSA9PiB7XG5cbiAgICAvLyBhZGQgY2xvc2UgYnV0dG9uIGxpc3RlbmVyOlxuICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtY2xvc2UtYnV0dG9uJyk7XG4gICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVFZGl0Rm9ybSk7XG5cbiAgICAvLyBhZGQgcmFkaW8gaW5wdXQgbGlzdGVuZXJzOlxuICAgIGNvbnN0IHJhZGlvSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJhZGlvLWlucHV0Jyk7XG4gICAgcmFkaW9JbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICAgICAgICBzdHlsZVJhZGlvT3B0aW9uKGUpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIGFkZCBzdWJtaXQgbGlzdGVuZXI6XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWZvcm0taXRzZWxmJyk7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHN1Ym1pdEVkaXRGb3JtKGUpO1xuICAgIH0pO1xufVxuXG4vLyBldmVudCBsaXN0ZW5lcnMgdG8gb3BlbiBleHBhbmRlZCB2aWV3IG9mIGl0ZW1zOlxuY29uc3QgYWRkRXhwYW5kTGlzdGVuZXJzID0gKCkgPT4ge1xuXG4gICAgLy8gYWRkIGxpc3RlbmVycyB0byBhbGwgaXRlbSB0aXRsZSB0ZXh0OlxuICAgIGNvbnN0IGl0ZW1UaXRsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXhwYW5kYWJsZS10aXRsZScpO1xuICAgIGl0ZW1UaXRsZXMuZm9yRWFjaCh0aXRsZSA9PiB7XG4gICAgICAgIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXhwYW5kSXRlbSk7XG4gICAgfSk7XG5cbiAgICAvLyBhZGQgbGlzdGVuZXJzIHRvIGFsbCBleHBhbmQgaWNvbnM6XG4gICAgY29uc3QgZXhwYW5kSWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYuZXhwYW5kJyk7XG4gICAgZXhwYW5kSWNvbnMuZm9yRWFjaChpY29uID0+IHtcbiAgICAgICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV4cGFuZEl0ZW0pO1xuICAgIH0pO1xufVxuXG4vLyBjaGVja2JveCBsaXN0ZW5lciB0byBhZGQgdG8gZWFjaCBpdGVtIGFzIGl0IGlzIHJlbmRlcmVkOlxuY29uc3QgYWRkQ2hlY2tib3hMaXN0ZW5lciA9IChpZCkgPT4ge1xuXG4gICAgY29uc3QgcGFyZW50SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPScke2lkfSdgKTtcbiAgICBjb25zdCBpdGVtQ2hlY2tib3ggPSBwYXJlbnRJdGVtLmZpcnN0Q2hpbGQ7XG4gICAgaXRlbUNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG4gICAgICAgIC8vIGlmIHRvZG8gaXMgbm90IGNvbXBsZXRlZCwgbWFyayBpdCBhcyBjb21wbGV0ZWQ6XG4gICAgICAgIGNvbnN0IGNvbXBsZXRlZFN0YXR1cyA9IGdldENvbXBsZXRlZChpZCk7XG4gICAgICAgIGlmIChjb21wbGV0ZWRTdGF0dXMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBlZGl0VG9kbyhpZCwgJ2NvbXBsZXRlZCcsIHRydWUpO1xuICAgICAgICAgICAgLy8gdGhlbiBjaGFuZ2UgdGhlIERPTSBlbGVtZW50J3MgY2xhc3MgJiBzdHlsaW5nIHNvIHRoZSB2aWV3IGRvZXNuJ3QgaGF2ZSB0byBiZSByZS1yZW5kZXJlZDpcbiAgICAgICAgICAgIHBhcmVudEl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaW5jb21wbGV0ZS1pdGVtJyk7XG4gICAgICAgICAgICBwYXJlbnRJdGVtLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZC1pdGVtJyk7XG4gICAgICAgICAgICAvLyBhbmQgY2hlY2sgdGhlIGJveDpcbiAgICAgICAgICAgIGNoZWNrQ2hlY2tib3goaXRlbUNoZWNrYm94KTtcblxuICAgICAgICAvLyBpZiB0b2RvIGlzIGNvbXBsZXRlZCwgbWFyayBpdCBhcyBpbmNvbXBsZXRlOlxuICAgICAgICB9IGVsc2UgaWYgKGNvbXBsZXRlZFN0YXR1cyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZWRpdFRvZG8oaWQsICdjb21wbGV0ZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICBwYXJlbnRJdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXBsZXRlZC1pdGVtJyk7XG4gICAgICAgICAgICBwYXJlbnRJdGVtLmNsYXNzTGlzdC5hZGQoJ2luY29tcGxldGUtaXRlbScpO1xuICAgICAgICAgICAgLy8gYW5kIHVuY2hlY2sgdGhlIGJveDpcbiAgICAgICAgICAgIHVuY2hlY2tDaGVja2JveChpdGVtQ2hlY2tib3gpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbi8vIGVkaXQgaWNvbiBsaXN0ZW5lciB0byBhZGQgdG8gZWFjaCBpdGVtIGFzIGl0IGlzIHJlbmRlcmVkOlxuY29uc3QgYWRkRWRpdEljb25MaXN0ZW5lciA9IChpZCkgPT4ge1xuICAgIGNvbnN0IGl0ZW1Ub0VkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD0nJHtpZH0nYCk7XG4gICAgY29uc3QgZWRpdEljb24gPSBpdGVtVG9FZGl0LmNoaWxkcmVuWzJdLmZpcnN0Q2hpbGQ7XG4gICAgZWRpdEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93RWRpdFBvcHVwKTtcbn1cblxuY29uc3QgYWRkRGVsZXRlTGlzdGVuZXJUb0l0ZW1XaXRob3V0RGVzY3JpcHRpb24gPSAoZGVsZXRlSWNvbiwgaWQpID0+IHtcbiAgICBkZWxldGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAvLyBkZWxldGUgaXRlbTpcbiAgICAgICAgZGVsZXRlVG9kbyhpZCk7XG4gICAgICAgIC8vIHRoZW4gY2hlY2sgdGhlIHVzZXIncyBjdXJyZW50IHBhZ2UgYmVmb3JlIHJlLXJlbmRlcmluZzpcbiAgICAgICAgY29uc3QgY3VycmVudFZpZXcgPSBnZXRDdXJyZW50VmlldygpO1xuICAgICAgICBpZiAoY3VycmVudFZpZXcgPT09ICdub3cnKSB7XG4gICAgICAgICAgICByZW5kZXJOb3coKTtcbiAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50VmlldyA9PT0gJ2xhdGVyJykge1xuICAgICAgICAgICAgcmVuZGVyTGF0ZXIoKTtcbiAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50VmlldyA9PT0gJ2FsbCcpIHtcbiAgICAgICAgICAgIHJlbmRlckFsbCgpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbi8vIGV2ZW50IGxpc3RlbmVycyAoZm9yIGRlbGV0ZSBhbmQgc2hyaW5rIGFjdGlvbnMpIHRvIGFkZCB0byBhbiBpdGVtIHdoZW4gaXQgaXMgZXhwYW5kZWQ6XG5jb25zdCBhZGRMaXN0ZW5lcnNUb0V4cGFuZGVkSXRlbSA9IChpZCkgPT4ge1xuXG4gICAgLy8gYWRkIGxpc3RlbmVyIHRvIGRlbGV0ZSBpY29uOlxuICAgIGNvbnN0IHBhcmVudEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD0nJHtpZH0nYCk7XG4gICAgY29uc3QgZGVsZXRlSWNvbiA9IHBhcmVudEl0ZW0ubGFzdENoaWxkO1xuICAgIGRlbGV0ZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIC8vIGRlbGV0ZSBpdGVtOlxuICAgICAgICBkZWxldGVUb2RvKGlkKTtcbiAgICAgICAgLy8gdGhlbiBjaGVjayB0aGUgdXNlcidzIGN1cnJlbnQgcGFnZSBiZWZvcmUgcmUtcmVuZGVyaW5nOlxuICAgICAgICBjb25zdCBjdXJyZW50VmlldyA9IGdldEN1cnJlbnRWaWV3KCk7XG4gICAgICAgIGlmIChjdXJyZW50VmlldyA9PT0gJ25vdycpIHtcbiAgICAgICAgICAgIHJlbmRlck5vdygpO1xuICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRWaWV3ID09PSAnbGF0ZXInKSB7XG4gICAgICAgICAgICByZW5kZXJMYXRlcigpO1xuICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRWaWV3ID09PSAnYWxsJykge1xuICAgICAgICAgICAgcmVuZGVyQWxsKCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGFkZCBsaXN0ZW5lciB0byBzaHJpbmsgaWNvbjpcbiAgICBjb25zdCBpY29uID0gcGFyZW50SXRlbS5jaGlsZHJlblszXTtcbiAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgc2hyaW5rSXRlbShlKTtcbiAgICB9KTtcbn1cblxuLy8gcmVtb3ZlIGNsaWNrIGxpc3RlbmVycyBmcm9tIGFuIGV4cGFuZGVkIGl0ZW0gYXMgdGhleSBhcmUgbm8gbG9uZ2VyIG5lY2Vzc2FyeTpcbmNvbnN0IHJlbW92ZUxpc3RlbmVyc0Zyb21FeHBhbmRlZEl0ZW0gPSAoaWQpID0+IHtcbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9JyR7aWR9J2ApO1xuICAgIGNvbnN0IGl0ZW1UaXRsZSA9IGl0ZW0uY2hpbGRyZW5bMV07XG4gICAgaXRlbVRpdGxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXhwYW5kSXRlbSk7XG4gICAgY29uc3QgaXRlbUljb24gPSBpdGVtLmNoaWxkcmVuWzJdO1xuICAgIGl0ZW1JY29uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXhwYW5kSXRlbSk7XG59XG5cbi8vIGZ1bmN0aW9uIHRvIGF0dGFjaCBuZXcgZXhwYW5kIGNsaWNrIGxpc3RlbmVyIG9uIGl0ZW0gZWxlbWVudHMgLS0gdGhpcyBpcyBuZWNlc3NhcnkgYmVjYXVzZSB0aGUgbGlzdGVuZXJzIGFyZSByZW1vdmVkIHdoZW4gdGhlIGl0ZW0gZXhwYW5kcy5cbmNvbnN0IHJlcGxhY2VFeHBhbmRMaXN0ZW5lciA9IChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV4cGFuZEl0ZW0pO1xufVxuXG5leHBvcnQgeyBcbiAgICBhZGRJbml0aWFsTGlzdGVuZXJzLCBcbiAgICBhZGRFeHBhbmRMaXN0ZW5lcnMsIFxuICAgIGFkZExpc3RlbmVyc1RvRXhwYW5kZWRJdGVtLFxuICAgIHJlbW92ZUxpc3RlbmVyc0Zyb21FeHBhbmRlZEl0ZW0sXG4gICAgYWRkQ2hlY2tib3hMaXN0ZW5lcixcbiAgICByZXBsYWNlRXhwYW5kTGlzdGVuZXIsXG4gICAgYWRkQWRkTGlzdGVuZXIsXG4gICAgYWRkRWRpdEZvcm1MaXN0ZW5lcnMsXG4gICAgYWRkRm9ybUxpc3RlbmVycyxcbiAgICBhZGREZWxldGVMaXN0ZW5lclRvSXRlbVdpdGhvdXREZXNjcmlwdGlvbixcbiAgICBhZGRFZGl0SWNvbkxpc3RlbmVyXG59IiwiaW1wb3J0IHsgXG4gICAgZ2V0QWxsLCBcbiAgICBnZXROb3csIFxuICAgIGdldExhdGVyLCBcbiAgICBnZXREZXNjcmlwdGlvbixcbiAgICBjcmVhdGVUb2RvLCBcbiAgICBlZGl0VG9kb30gZnJvbSAnLi9saXN0LmpzJztcblxuaW1wb3J0IHsgXG4gICAgYWRkRXhwYW5kTGlzdGVuZXJzLCBcbiAgICBhZGRMaXN0ZW5lcnNUb0V4cGFuZGVkSXRlbSxcbiAgICByZW1vdmVMaXN0ZW5lcnNGcm9tRXhwYW5kZWRJdGVtLCBcbiAgICBhZGRDaGVja2JveExpc3RlbmVyLFxuICAgIHJlcGxhY2VFeHBhbmRMaXN0ZW5lcixcbiAgICBhZGRBZGRMaXN0ZW5lcixcbiAgICBhZGRGb3JtTGlzdGVuZXJzLCBcbiAgICBhZGREZWxldGVMaXN0ZW5lclRvSXRlbVdpdGhvdXREZXNjcmlwdGlvbixcbiAgICBhZGRFZGl0SWNvbkxpc3RlbmVyfSBmcm9tICcuL2xpc3Rlbi5qcyc7XG5cbmltcG9ydCB7IHJlbmRlckVkaXRGb3JtIH0gZnJvbSAnLi9lZGl0LmpzJztcblxuaW1wb3J0IENoZWNrZWRDaGVja2JveEljb24gZnJvbSAnLi4vaW1nL2NoZWNrZWQtY2hlY2tib3guc3ZnJztcbmltcG9ydCBFbXB0eUNoZWNrYm94SWNvbiBmcm9tICcuLi9pbWcvZW1wdHktY2hlY2tib3guc3ZnJztcbmltcG9ydCBFeHBhbmRJY29uIGZyb20gJy4uL2ltZy9leHBhbmQuc3ZnJztcbmltcG9ydCBTaHJpbmtJY29uIGZyb20gJy4uL2ltZy9zaHJpbmsuc3ZnJztcbmltcG9ydCBEZWxldGVJY29uIGZyb20gJy4uL2ltZy9kZWxldGUuc3ZnJztcbmltcG9ydCBBZGRJY29uIGZyb20gJy4uL2ltZy9hZGQuc3ZnJztcbmltcG9ydCBDbG9zZUljb24gZnJvbSAnLi4vaW1nL2Nsb3NlLnN2Zyc7XG5pbXBvcnQgRmF2SWNvbiBmcm9tICcuLi9pbWcvZmF2aWNvbi5wbmcnO1xuaW1wb3J0IERhcmtJY29uIGZyb20gJy4uL2ltZy9kYXJrLnN2Zyc7XG5pbXBvcnQgTGlnaHRJY29uIGZyb20gJy4uL2ltZy9saWdodC5zdmcnO1xuaW1wb3J0IEVkaXRJY29uIGZyb20gJy4uL2ltZy9lZGl0LnN2Zyc7XG5cbi8vIGNyZWF0ZSBjdXJyZW50VmlldyB2YXJpYWJsZSB0byB0cmFjayB0aGUgY3VycmVudCBwYWdlIGRpc3BsYXk6XG5sZXQgY3VycmVudFZpZXc7XG5cbmNvbnN0IHVwZGF0ZUN1cnJlbnRWaWV3ID0gKHBhZ2UpID0+IHtcbiAgICBjdXJyZW50VmlldyA9IHBhZ2U7XG59XG5cbmNvbnN0IGdldEN1cnJlbnRWaWV3ID0gKCkgPT4ge1xuICAgIHJldHVybiBjdXJyZW50Vmlldztcbn1cblxuLy8gY3JlYXRlIGRpc3BsYXlNb2RlIHZhcmlhYmxlIHRvIHRyYWNrIGxpZ2h0L2RhcmsgbW9kZTpcbmxldCBkaXNwbGF5TW9kZTtcblxuLy8gZ2VuZXJhdGUgYmFzZSBwYWdlIHN0cnVjdHVyZTpcbmNvbnN0IHJlbmRlckhlYWRlckZvb3RlciA9ICgpID0+IHtcbiAgICAvLyAvLyBhZGQgZmF2aWNvbjpcbiAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZCcpO1xuICAgIGNvbnN0IGZhdkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgZmF2SWNvbi5zZXRBdHRyaWJ1dGUoJ3JlbCcsICdpY29uJyk7XG4gICAgZmF2SWNvbi5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBGYXZJY29uKTtcbiAgICBoZWFkLmFwcGVuZENoaWxkKGZhdkljb24pO1xuXG4gICAgLy8gY3JlYXRlIGhlYWRlcjpcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICAgICAgLy8gY3JlYXRlIHRpdGxlIGJhcjpcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgICAgICAgICAgLy8gY3JlYXRlIGxpZ2h0IG1vZGUgaWNvbjpcbiAgICAgICAgICAgIGNvbnN0IGxpZ2h0TW9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbGlnaHRNb2RlLmNsYXNzTGlzdC5hZGQoJ2xpZ2h0LW1vZGUnKTtcbiAgICAgICAgICAgIHRpdGxlLmFwcGVuZENoaWxkKGxpZ2h0TW9kZSk7XG4gICAgICAgICAgICBjb25zdCBsaWdodEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIGxpZ2h0SWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsIExpZ2h0SWNvbik7XG4gICAgICAgICAgICBsaWdodE1vZGUuYXBwZW5kQ2hpbGQobGlnaHRJY29uKTtcblxuICAgICAgICAgICAgLy8gY3JlYXRlIHRpdGxlIHRleHQ6XG4gICAgICAgICAgICBjb25zdCB0aXRsZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRpdGxlVGV4dC5jbGFzc0xpc3QuYWRkKCd0aXRsZS10ZXh0Jyk7XG4gICAgICAgICAgICB0aXRsZVRleHQudGV4dENvbnRlbnQgPSAnTk9XIC8vIExBVEVSIDo6IGEgc2ltcGxlIHRvLWRvIGxpc3QnO1xuICAgICAgICAgICAgdGl0bGUuYXBwZW5kQ2hpbGQodGl0bGVUZXh0KTtcblxuICAgICAgICAgICAgLy8gY3JlYXRlIGRhcmsgbW9kZSBpY29uOlxuICAgICAgICAgICAgY29uc3QgZGFya01vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRhcmtNb2RlLmNsYXNzTGlzdC5hZGQoJ2RhcmstbW9kZScpO1xuICAgICAgICAgICAgdGl0bGUuYXBwZW5kQ2hpbGQoZGFya01vZGUpO1xuICAgICAgICAgICAgY29uc3QgZGFya0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIGRhcmtJY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgRGFya0ljb24pO1xuICAgICAgICAgICAgZGFya01vZGUuYXBwZW5kQ2hpbGQoZGFya0ljb24pO1xuXG5cbiAgICAgICAgLy8gY3JlYXRlIG5hdiBiYXI6XG4gICAgICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBuYXYuY2xhc3NMaXN0LmFkZCgnbmF2Jyk7XG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChuYXYpOyBcblxuICAgICAgICAgICAgLy8gY3JlYXRlIG5hdiBidXR0b25zOlxuICAgICAgICAgICAgY29uc3Qgbm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBub3cuY2xhc3NMaXN0LmFkZCgnbm93Jyk7XG4gICAgICAgICAgICBub3cuY2xhc3NMaXN0LmFkZCgnbmF2LWJ1dHRvbicpO1xuICAgICAgICAgICAgbm93LnRleHRDb250ZW50ID0gJ25vdyc7XG4gICAgICAgICAgICBuYXYuYXBwZW5kQ2hpbGQobm93KTtcblxuICAgICAgICAgICAgY29uc3QgbGF0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGxhdGVyLmNsYXNzTGlzdC5hZGQoJ2xhdGVyJyk7XG4gICAgICAgICAgICBsYXRlci5jbGFzc0xpc3QuYWRkKCduYXYtYnV0dG9uJyk7XG4gICAgICAgICAgICBsYXRlci50ZXh0Q29udGVudCA9ICdsYXRlcic7XG4gICAgICAgICAgICBuYXYuYXBwZW5kQ2hpbGQobGF0ZXIpO1xuXG4gICAgICAgICAgICBjb25zdCBhbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGFsbC5jbGFzc0xpc3QuYWRkKCdhbGwnKTtcbiAgICAgICAgICAgIGFsbC5jbGFzc0xpc3QuYWRkKCduYXYtYnV0dG9uJyk7XG4gICAgICAgICAgICBhbGwudGV4dENvbnRlbnQgPSAnYWxsJztcbiAgICAgICAgICAgIG5hdi5hcHBlbmRDaGlsZChhbGwpO1xuXG4gICAgLy8gY3JlYXRlIG1haW4gdG8tZG8gbGlzdCBkaXNwbGF5IHNlY3Rpb246XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbik7XG5cbiAgICAvLyBjcmVhdGUgZm9vdGVyOlxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbiAgICBmb290ZXIudGV4dENvbnRlbnQgPSAnY29weXJpZ2h0IMKpIDIwMjIgfCBzZWFuIHN0ZXBoZW4gYnJpYW4nO1xufVxuXG4vLyByZW5kZXJzICdhZGQnIGJ1dHRvbiB3aXRoaW4gdGhlIG1haW4gY29udGVudCBzZWN0aW9uOlxuY29uc3QgcmVuZGVyQWRkQnV0dG9uID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICAgIGNvbnN0IGFkZEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGRJdGVtLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXllZC1pdGVtJywnYWRkLWl0ZW0tYnV0dG9uJyk7XG4gICAgY29uc3QgYWRkSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGFkZEljb24uc2V0QXR0cmlidXRlKCdzcmMnLCBBZGRJY29uKTtcbiAgICBhZGRJdGVtLmFwcGVuZENoaWxkKGFkZEljb24pO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoYWRkSXRlbSk7XG5cbiAgICAvLyBhZGQgY2xpY2sgbGlzdGVuZXIgdG8gYWRkIGJ1dHRvbjpcbiAgICBhZGRBZGRMaXN0ZW5lcigpO1xufVxuXG5jb25zdCByZW5kZXJBZGRGb3JtID0gKCkgPT4ge1xuXG4gICAgLy8gY3JlYXRlIGFkZCBmb3JtIGNvbnRhaW5lcjpcbiAgICBjb25zdCBhZGRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkRm9ybS5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5ZWQtaXRlbScsICdhZGQtZm9ybScpO1xuXG4gICAgLy8gaW5zZXJ0IGFkZCBmb3JtIGJlZm9yZSBhZGQgYnV0dG9uOlxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtaXRlbS1idXR0b24nKTtcbiAgICBtYWluLmluc2VydEJlZm9yZShhZGRGb3JtLCBhZGRCdXR0b24pO1xuXG4gICAgLy8gcmVtb3ZlIGFkZCBidXR0b246XG4gICAgYWRkQnV0dG9uLnJlbW92ZSgpO1xuXG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgZm9ybSBpdHNlbGY6XG4gICAgICAgIGNvbnN0IGZvcm1JdHNlbGYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIGZvcm1JdHNlbGYuY2xhc3NMaXN0LmFkZCgnYWRkLWZvcm0taXRzZWxmJyk7XG4gICAgICAgIGZvcm1JdHNlbGYuc2V0QXR0cmlidXRlKCdtZXRob2QnLCAnJyk7XG4gICAgICAgIGFkZEZvcm0uYXBwZW5kQ2hpbGQoZm9ybUl0c2VsZik7XG5cbiAgICAgICAgICAgIC8vIGNyZWF0ZSB0aGUgZm9ybSB0aXRsZTpcbiAgICAgICAgICAgIGNvbnN0IGZvcm1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZm9ybVRpdGxlLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tdGl0bGUnKTtcbiAgICAgICAgICAgIGZvcm1JdHNlbGYuYXBwZW5kQ2hpbGQoZm9ybVRpdGxlKTtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1UaXRsZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICBmb3JtVGl0bGVUZXh0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tdGl0bGUtdGV4dCcpO1xuICAgICAgICAgICAgZm9ybVRpdGxlVGV4dC50ZXh0Q29udGVudCA9ICdhZGQgYSBuZXcgdGFzayc7XG4gICAgICAgICAgICBmb3JtVGl0bGUuYXBwZW5kQ2hpbGQoZm9ybVRpdGxlVGV4dCk7XG5cbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhbiAnWCcgYnV0dG9uIHRvIGNsb3NlIG91dCBvZiB0aGUgZm9ybTpcbiAgICAgICAgICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjbG9zZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjbG9zZS1idXR0b24nKTtcbiAgICAgICAgICAgIGZvcm1UaXRsZS5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG4gICAgICAgICAgICBjb25zdCBjbG9zZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIGNsb3NlSWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsIENsb3NlSWNvbik7XG4gICAgICAgICAgICBjbG9zZUJ1dHRvbi5hcHBlbmRDaGlsZChjbG9zZUljb24pO1xuXG4gICAgICAgICAgICAvLyBjcmVhdGUgdGhlIGZvcm0gZWxlbWVudHM6XG5cbiAgICAgICAgICAgICAgICAvLyB0aXRsZSBzZWN0aW9uOlxuICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHRpdGxlU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdmb3JtLWVsZW1lbnQnLCAndGl0bGUtc2VjdGlvbicpO1xuICAgICAgICAgICAgICAgIGZvcm1JdHNlbGYuYXBwZW5kQ2hpbGQodGl0bGVTZWN0aW9uKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyB0aXRsZSBsYWJlbDpcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndGl0bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9ICd0aXRsZTonO1xuICAgICAgICAgICAgICAgICAgICB0aXRsZVNlY3Rpb24uYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gdGl0bGUgaW5wdXQ6XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0aXRsZS1pbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICd0aXRsZScpO1xuICAgICAgICAgICAgICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAndGl0bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ2V4YW1wbGU6IGZlZWQgdGhlIGRvZycpO1xuICAgICAgICAgICAgICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVTZWN0aW9uLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuXG5cbiAgICAgICAgICAgICAgICAvLyBkZXNjcmlwdGlvbiBzZWN0aW9uOlxuICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdmb3JtLWVsZW1lbnQnLCAnZGVzY3JpcHRpb24tc2VjdGlvbicpO1xuICAgICAgICAgICAgICAgIGZvcm1JdHNlbGYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25TZWN0aW9uKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBkZXNjcmlwdGlvbiBsYWJlbDpcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZGVzY3JpcHRpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9ICdkZXNjcmlwdGlvbiAob3B0aW9uYWwpOic7XG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uU2VjdGlvbi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBkZXNjcmlwdGlvbiBpbnB1dDpcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZXNjcmlwdGlvbi1pbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdkZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVzY3JpcHRpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25TZWN0aW9uLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpO1xuXG5cbiAgICAgICAgICAgICAgICAvLyBwcmlvcml0eSBmaWVsZHNldDpcbiAgICAgICAgICAgICAgICBjb25zdCBmaWVsZHNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0Jyk7XG4gICAgICAgICAgICAgICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktc2VjdGlvbicpO1xuICAgICAgICAgICAgICAgIGZvcm1JdHNlbGYuYXBwZW5kQ2hpbGQoZmllbGRzZXQpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHByaW9yaXR5IGxhYmVsOlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5TGFiZWwuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktbGFiZWwnKTtcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdwcmlvcml0eTonO1xuICAgICAgICAgICAgICAgICAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyAnTk9XJyBwcmlvcml0eSByYWRpbyBvcHRpb246XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vd09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBub3dPcHRpb24uY2xhc3NMaXN0LmFkZCgncmFkaW8tb3B0aW9uJywgJ25vdy1vcHRpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobm93T3B0aW9uKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTk9XIGlucHV0ICYgbGFiZWw6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBub3dJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3dJbnB1dC5jbGFzc0xpc3QuYWRkKCdyYWRpby1pbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm93SW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3dJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25vdycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm93SW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3ByaW9yaXR5Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3dJbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ25vdycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm93T3B0aW9uLmFwcGVuZENoaWxkKG5vd0lucHV0KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm93TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm93TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbm93Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3dMYWJlbC50ZXh0Q29udGVudCA9ICdub3cnO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm93T3B0aW9uLmFwcGVuZENoaWxkKG5vd0xhYmVsKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyAnTEFURVInIHByaW9yaXR5IHJhZGlvIG9wdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGF0ZXJPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgbGF0ZXJPcHRpb24uY2xhc3NMaXN0LmFkZCgncmFkaW8tb3B0aW9uJywgJ2xhdGVyLW9wdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChsYXRlck9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTEFURVIgaW5wdXQgJiBsYWJlbDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhdGVySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF0ZXJJbnB1dC5jbGFzc0xpc3QuYWRkKCdyYWRpby1pbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF0ZXJJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhdGVySW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdsYXRlcicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF0ZXJJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJpb3JpdHknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhdGVySW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdsYXRlcicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF0ZXJPcHRpb24uYXBwZW5kQ2hpbGQobGF0ZXJJbnB1dCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhdGVyTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF0ZXJMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdsYXRlcicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF0ZXJMYWJlbC50ZXh0Q29udGVudCA9ICdsYXRlcic7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXRlck9wdGlvbi5hcHBlbmRDaGlsZChsYXRlckxhYmVsKTtcblxuICAgICAgICAgICAgLy8gY3JlYXRlIGEgbmV3ICdhZGQnIGJ1dHRvbiBhdCB0aGUgYm90dG9tIG9mIHRoZSBmb3JtOlxuICAgICAgICAgICAgY29uc3QgZm9ybUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgZm9ybUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzdWJtaXQtYnV0dG9uJyk7XG4gICAgICAgICAgICBmb3JtQnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgICAgICAgICAgIGZvcm1JdHNlbGYuYXBwZW5kQ2hpbGQoZm9ybUJ1dHRvbik7XG4gICAgICAgICAgICBjb25zdCBmb3JtQnV0dG9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgZm9ybUJ1dHRvbkljb24uc2V0QXR0cmlidXRlKCdzcmMnLCBBZGRJY29uKTtcbiAgICAgICAgICAgIGZvcm1CdXR0b24uYXBwZW5kQ2hpbGQoZm9ybUJ1dHRvbkljb24pO1xuICAgIFxuICAgIC8vIHJlbmRlciB0aGUgYWRkIGZvcm0gaW4gZGFyayBtb2RlIGlmIGl0J3MgdHVybmVkIG9uOlxuICAgIGlmIChkaXNwbGF5TW9kZSA9PT0gJ2RhcmsnKSB7XG4gICAgICAgIHN3aXRjaFRvRGFyaygpO1xuICAgIH1cblxuICAgIGFkZEZvcm1MaXN0ZW5lcnMoKTtcblxufVxuXG5jb25zdCBzdWJtaXRGb3JtID0gKCkgPT4ge1xuXG4gICAgLy8gZ2V0IGZvcm0gdmFsdWVzOlxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlLWlucHV0Jyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzY3JpcHRpb24taW5wdXQnKTtcbiAgICBsZXQgcHJpb3JpdHk7XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3cnKS5jaGVja2VkKSB7XG4gICAgICAgIHByaW9yaXR5ID0gJ25vdyc7XG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGF0ZXInKS5jaGVja2VkKSB7XG4gICAgICAgIHByaW9yaXR5ID0gJ2xhdGVyJztcbiAgICB9XG5cbiAgICAvLyBhZGQgYSB0by1kbyBvYmplY3QgdG8gdGhlIGFycmF5IHVzaW5nIHRoZSBmb3JtIHZhbHVlczpcbiAgICBjcmVhdGVUb2RvKHRpdGxlLnZhbHVlLCBkZXNjcmlwdGlvbi52YWx1ZSwgcHJpb3JpdHksIGZhbHNlKTtcblxuICAgIC8vIHJlLXJlbmRlciB0aGUgY3VycmVudCBwYWdlIHZpZXc6XG4gICAgaWYgKGN1cnJlbnRWaWV3ID0gJ25vdycpIHtcbiAgICAgICAgcmVuZGVyTm93KCk7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50VmlldyA9ICdsYXRlcicpIHtcbiAgICAgICAgcmVuZGVyTGF0ZXIoKTtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRWaWV3ID0gJ2FsbCcpIHtcbiAgICAgICAgcmVuZGVyQWxsKCk7XG4gICAgfVxuICAgIC8vIGFuZCBzZXQgaXQgdG8gdGhlIGNvcnJlY3QgZGlzcGxheSBtb2RlOlxuICAgIGlmIChkaXNwbGF5TW9kZSA9PT0gJ2RhcmsnKSB7XG4gICAgICAgIHN3aXRjaFRvRGFyaygpO1xuICAgIH1cblxufTtcblxuXG5jb25zdCBzdWJtaXRFZGl0Rm9ybSA9IChlKSA9PiB7XG5cbiAgICBjb25zdCBpbmRleCA9IGUudGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgY29uc29sZS5sb2coaW5kZXgpO1xuXG4gICAgLy8gZ2V0IGZvcm0gdmFsdWVzOlxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtdGl0bGUtaW5wdXQnKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWRlc2NyaXB0aW9uLWlucHV0Jyk7XG4gICAgbGV0IHByaW9yaXR5O1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm93JykuY2hlY2tlZCkge1xuICAgICAgICBwcmlvcml0eSA9ICdub3cnO1xuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xhdGVyJykuY2hlY2tlZCkge1xuICAgICAgICBwcmlvcml0eSA9ICdsYXRlcic7XG4gICAgfVxuXG4gICAgZWRpdFRvZG8oaW5kZXgsICd0aXRsZScsIHRpdGxlLnZhbHVlKTtcbiAgICBlZGl0VG9kbyhpbmRleCwgJ2Rlc2NyaXB0aW9uJywgZGVzY3JpcHRpb24udmFsdWUpO1xuICAgIGVkaXRUb2RvKGluZGV4LCAncHJpb3JpdHknLCBwcmlvcml0eSk7XG5cbiAgICByZW1vdmVFZGl0QmFja2Ryb3AoKTtcblxuICAgIC8vIHJlLXJlbmRlciB0aGUgY3VycmVudCBwYWdlIHZpZXc6XG4gICAgaWYgKGN1cnJlbnRWaWV3ID0gJ25vdycpIHtcbiAgICAgICAgcmVuZGVyTm93KCk7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50VmlldyA9ICdsYXRlcicpIHtcbiAgICAgICAgcmVuZGVyTGF0ZXIoKTtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRWaWV3ID0gJ2FsbCcpIHtcbiAgICAgICAgcmVuZGVyQWxsKCk7XG4gICAgfVxuXG4gICAgLy8gYW5kIHNldCBpdCB0byB0aGUgY29ycmVjdCBkaXNwbGF5IG1vZGU6XG4gICAgaWYgKGRpc3BsYXlNb2RlID09PSAnZGFyaycpIHtcbiAgICAgICAgc3dpdGNoVG9EYXJrKCk7XG4gICAgfVxuXG59XG5cbi8vIGNoYW5nZXMgYmFja2dyb3VuZCBjb2xvciBhbmQgb3V0bGluZSBmb3IgcmFkaW8gb3B0aW9ucyBkZXBlbmRpbmcgb24gc2VsZWN0aW9uOlxuY29uc3Qgc3R5bGVSYWRpb09wdGlvbiA9IChlKSA9PiB7XG4gICAgLy8gc2VsZWN0IHRoZSBwcmlvcml0eSBidXR0b24gd2Ugd2FudCB0byBzdHlsZTpcbiAgICBjb25zdCBzZWxlY3RlZElucHV0ID0gZS50YXJnZXQ7XG4gICAgY29uc3QgYnV0dG9uVG9TZWxlY3QgPSBzZWxlY3RlZElucHV0LnBhcmVudEVsZW1lbnQ7XG4gICAgLy8gY2xlYXIgb3V0IGV4aXN0aW5nIHByaW9yaXR5IGJ1dHRvbiBzZWxlY3Rpb24gc3R5bGluZzpcbiAgICBjb25zdCBwcmlvcml0eUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmFkaW8tb3B0aW9uJyk7XG4gICAgcHJpb3JpdHlCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgaWYgKGJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGVkLXByaW9yaXR5JykpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZC1wcmlvcml0eScpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy8gYWRkICdzZWxlY3RlZCcgY2xhc3MgdG8gdGhlIGJ1dHRvbiB3ZSB3YW50IHRvIHN0eWxlOlxuICAgIGJ1dHRvblRvU2VsZWN0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkLXByaW9yaXR5Jyk7XG59XG5cbi8vIHJlbW92ZXMgdGhlICdhZGQgYSBuZXcgdGFzaycgZm9ybSBmcm9tIERPTTpcbmNvbnN0IHJlbW92ZUZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtZm9ybScpO1xuICAgIGZvcm0ucmVtb3ZlKCk7XG4gICAgLy8gcmVwbGFjZSB0aGUgJysnIGJ1dHRvbiB3aGljaCB3YXMgcHJldmlvdXNseSBkZWxldGVkOlxuICAgIHJlbmRlckFkZEJ1dHRvbigpO1xuICAgIGlmIChkaXNwbGF5TW9kZSA9PT0gJ2RhcmsnKSB7XG4gICAgICAgIHN3aXRjaFRvRGFyaygpO1xuICAgIH1cbn1cblxuY29uc3QgcmVtb3ZlRWRpdEZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWZvcm0nKTtcbiAgICBmb3JtLnJlbW92ZSgpO1xuICAgIHJlbW92ZUVkaXRCYWNrZHJvcCgpO1xufVxuXG5jb25zdCByZW1vdmVFZGl0QmFja2Ryb3AgPSAoKSA9PiB7XG4gICAgY29uc3QgZWRpdEJhY2tkcm9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtYmFja2Ryb3AnKTtcbiAgICBlZGl0QmFja2Ryb3AucmVtb3ZlKCk7XG59XG5cbi8vIGFwcGx5IGFuIG91dGxpbmUgc3R5bGUgdG8gdGhlIHNlbGVjdGVkIGRpc3BsYXkncyBuYXYgYnV0dG9uOlxuY29uc3Qgb3V0bGluZU5hdkJ1dHRvbiA9IChwYWdlKSA9PiB7XG5cbiAgICAvLyBjcmVhdGUgcmVmZXJlbmNlIHRvIGFsbCB0aHJlZSBuYXYgYnV0dG9uczpcbiAgICBjb25zdCBuYXZCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1idXR0b24nKTtcbiAgICAvLyByZW1vdmUgJ3NlbGVjdGVkJyBjbGFzcyBmcm9tIGFueSBidXR0b24gdGhhdCBoYXMgaXQ6XG4gICAgbmF2QnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgIGlmIChidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RlZCcpKSB7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vIHRoZW4gYWRkIHRoZSAnc2VsZWN0ZWQnIGNsYXNzIHRvIG9ubHkgdGhlIGNob3NlbiBwYWdlOlxuICAgIGNvbnN0IGNsaWNrZWRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtwYWdlfWApO1xuICAgIGNsaWNrZWRCdXR0b24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICBjb25zdCBhbGxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsJyk7XG4gICAgaWYgKGNsaWNrZWRCdXR0b24gPT09IGFsbEJ1dHRvbikge1xuICAgICAgICBjbGlja2VkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkLWFsbCcpO1xuICAgIH1cbn1cblxuY29uc3QgcmVuZGVyTm93ID0gKCkgPT4ge1xuICAgIC8vIG91dGxpbmUgdGhlICdub3cnIGJ1dHRvbjpcbiAgICBvdXRsaW5lTmF2QnV0dG9uKCdub3cnKTtcblxuICAgIC8vIGNyZWF0ZSBhcnJheSBvZiBvbmx5IGl0ZW1zIHdpdGggYSAnbm93JyBwcmlvcml0eTpcbiAgICBjb25zdCBub3dJdGVtcyA9IGdldE5vdygpO1xuXG4gICAgcmVuZGVySXRlbXMobm93SXRlbXMpO1xuXG4gICAgdXBkYXRlQ3VycmVudFZpZXcoJ25vdycpO1xufVxuXG5jb25zdCByZW5kZXJMYXRlciA9ICgpID0+IHtcbiAgICBcbiAgICAvLyBvdXRsaW5lIHRoZSAnbGF0ZXInIGJ1dHRvbjpcbiAgICBvdXRsaW5lTmF2QnV0dG9uKCdsYXRlcicpO1xuXG4gICAgLy8gY3JlYXRlIGFycmF5IG9mIG9ubHkgaXRlbXMgd2l0aCBhICdsYXRlcicgcHJpb3JpdHk6XG4gICAgY29uc3QgbGF0ZXJJdGVtcyA9IGdldExhdGVyKCk7XG5cbiAgICByZW5kZXJJdGVtcyhsYXRlckl0ZW1zKTtcblxuICAgIHVwZGF0ZUN1cnJlbnRWaWV3KCdsYXRlcicpO1xufVxuXG5jb25zdCByZW5kZXJBbGwgPSAoKSA9PiB7XG5cbiAgICAvLyBvdXRsaW5lIHRoZSAnYWxsJyBidXR0b246XG4gICAgb3V0bGluZU5hdkJ1dHRvbignYWxsJyk7XG5cbiAgICAvLyBjcmVhdGUgYW4gYXJyYXkgb2YgYWxsIGN1cnJlbnQgaXRlbXM6XG4gICAgY29uc3QgYWxsSXRlbXMgPSBnZXRBbGwoKTtcbiBcbiAgICByZW5kZXJJdGVtcyhhbGxJdGVtcyk7XG5cbiAgICB1cGRhdGVDdXJyZW50VmlldygnYWxsJyk7XG59XG5cbmNvbnN0IHJlbmRlckl0ZW1zID0gKHNlbGVjdGVkSXRlbXMpID0+IHtcblxuICAgIC8vIGNyZWF0ZSByZWZlcmVuY2UgdG8gbWFpbiBjb250ZW50IHNlY3Rpb24gYW5kIGN1cnJlbnQgY29tcGxldGUgdG8tZG8gbGlzdDpcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgICBjb25zdCBhbGxJdGVtcyA9IGdldEFsbCgpO1xuXG4gICAgLy8gZW1wdHkgb3V0IG1haW4gY29udGVudCBzZWN0aW9uOlxuICAgIG1haW4uaW5uZXJIVE1MID0gJyc7XG5cbiAgICAvLyBjcmVhdGUgbmV3IDxkaXY+IGZvciBlYWNoIGl0ZW06XG4gICAgc2VsZWN0ZWRJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCBkaXNwbGF5ZWRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpc3BsYXllZEl0ZW0uY2xhc3NMaXN0LmFkZCgnZGlzcGxheWVkLWl0ZW0nKTtcblxuICAgICAgICAvLyBhZGQgY2xhc3MgZm9yIGl0ZW0gcHJpb3JpdHk6XG4gICAgICAgIGlmIChpdGVtLnByaW9yaXR5ID09PSAnbm93Jykge1xuICAgICAgICAgICAgZGlzcGxheWVkSXRlbS5jbGFzc0xpc3QuYWRkKCdub3ctaXRlbScpO1xuICAgICAgICB9IGVsc2UgaWYgKGl0ZW0ucHJpb3JpdHkgPT09ICdsYXRlcicpIHtcbiAgICAgICAgICAgIGRpc3BsYXllZEl0ZW0uY2xhc3NMaXN0LmFkZCgnbGF0ZXItaXRlbScpXG4gICAgICAgIH1cblxuICAgICAgICAvLyBzZXQgZGF0YXNldC5pZCB0byBpdGVtJ3MgaW5kZXggaW4gdGhlIG1haW4gYXJyYXk6XG4gICAgICAgIGRpc3BsYXllZEl0ZW0uZGF0YXNldC5pZCA9IGFsbEl0ZW1zLmluZGV4T2YoaXRlbSk7XG5cbiAgICAgICAgICAgIC8vIGNyZWF0ZSA8ZGl2PnMgZm9yIGNoZWNrYm94IGljb25zOlxuICAgICAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94Jyk7XG5cbiAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiBpdGVtIGlzIGNvbXBsZXRlZCB0byBkZXRlcm1pbmUgd2hldGhlciB0byBpbnNlcnQgYW4gZW1wdHkgb3IgY2hlY2tlZCBjaGVja2JveCBzdmc6XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uY29tcGxldGVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrZWRDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgICAgICAgICBjaGVja2VkQ2hlY2tib3guc2V0QXR0cmlidXRlKCdzcmMnLCBDaGVja2VkQ2hlY2tib3hJY29uKTtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3guYXBwZW5kQ2hpbGQoY2hlY2tlZENoZWNrYm94KTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheWVkSXRlbS5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQtaXRlbScpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXRlbS5jb21wbGV0ZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVtcHR5Q2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgICAgICAgICAgZW1wdHlDaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3NyYycsIEVtcHR5Q2hlY2tib3hJY29uKTtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3guYXBwZW5kQ2hpbGQoZW1wdHlDaGVja2JveCk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXllZEl0ZW0uY2xhc3NMaXN0LmFkZCgnaW5jb21wbGV0ZS1pdGVtJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkaXNwbGF5ZWRJdGVtLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcblxuICAgICAgICAgICAgLy8gY3JlYXRlIDxkaXY+cyBmb3IgaXRlbSB0aXRsZSB0ZXh0OlxuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gaXRlbS50aXRsZTtcbiAgICAgICAgICAgIC8vIGlmIHRoZSBpdGVtIGhhcyBhIGRlc2NyaXB0aW9uLCBtYWtlIHRoZSB0aXRsZSBleHBhbmRhYmxlOlxuICAgICAgICAgICAgaWYgKGl0ZW0uZGVzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdpdGVtLXRpdGxlJywgJ2V4cGFuZGFibGUtdGl0bGUnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWl0ZW0uZGVzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdpdGVtLXRpdGxlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXNwbGF5ZWRJdGVtLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgICAgICAgICAgLy8gY3JlYXRlIGVkaXQgaWNvbnM6XG4gICAgICAgICAgICBjb25zdCBlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBlZGl0LmNsYXNzTGlzdC5hZGQoJ2VkaXQnKTtcbiAgICAgICAgICAgIGNvbnN0IGVkaXRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBlZGl0SWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsIEVkaXRJY29uKTtcbiAgICAgICAgICAgIGVkaXQuYXBwZW5kQ2hpbGQoZWRpdEljb24pO1xuICAgICAgICAgICAgZGlzcGxheWVkSXRlbS5hcHBlbmRDaGlsZChlZGl0KTtcblxuICAgICAgICAgICAgLy8gaWYgdGhlcmUgaXMgYSBkZXNjcmlwdGlvbiwgY3JlYXRlIGV4cGFuZCBpY29uczpcbiAgICAgICAgICAgIGlmIChpdGVtLmRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXhwYW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZXhwYW5kLmNsYXNzTGlzdC5hZGQoJ2V4cGFuZCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGV4cGFuZEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgICAgICBleHBhbmRJY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgRXhwYW5kSWNvbik7XG4gICAgICAgICAgICAgICAgZXhwYW5kLmFwcGVuZENoaWxkKGV4cGFuZEljb24pO1xuICAgICAgICAgICAgICAgIGRpc3BsYXllZEl0ZW0uYXBwZW5kQ2hpbGQoZXhwYW5kKTtcbiAgICAgICAgICAgIC8vIGlmIHRoZXJlJ3Mgbm8gaXRlbSBkZXNjcmlwdGlvbiwgYWRkIHRoZSBkZWxldGUgaWNvbiBpbnN0ZWFkIG9mIHRoZSBleHBhbmQgaWNvbjpcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWl0ZW0uZGVzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGUnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkZWxldGVJY29uU3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICAgICAgZGVsZXRlSWNvblN2Zy5zZXRBdHRyaWJ1dGUoJ3NyYycsIERlbGV0ZUljb24pO1xuICAgICAgICAgICAgICAgIGRlbGV0ZUljb24uYXBwZW5kQ2hpbGQoZGVsZXRlSWNvblN2Zyk7XG4gICAgICAgICAgICAgICAgZGlzcGxheWVkSXRlbS5hcHBlbmRDaGlsZChkZWxldGVJY29uKTtcbiAgICAgICAgICAgICAgICBhZGREZWxldGVMaXN0ZW5lclRvSXRlbVdpdGhvdXREZXNjcmlwdGlvbihkZWxldGVJY29uLCBkaXNwbGF5ZWRJdGVtLmRhdGFzZXQuaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG5cbiAgICAgICAgLy8gYWRkIGl0ZW0gPGRpdj4gdG8gdGhlIG1haW4gY29udGVudCBzZWN0aW9uOlxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGRpc3BsYXllZEl0ZW0pO1xuXG4gICAgICAgIC8vIGFkZCBjbGljayBsaXN0ZW5lciB0byBjaGVja2JveCBvZiBuZXcgaXRlbSB1c2luZyBpdHMgaWQ6XG4gICAgICAgIGFkZENoZWNrYm94TGlzdGVuZXIoZGlzcGxheWVkSXRlbS5kYXRhc2V0LmlkKTtcblxuICAgICAgICAvLyBhZGQgY2xpY2sgbGlzdGVuZXIgdG9lIGRpdCBpY29uIG9mIG5ldyBpdGVtIHVzaW5nIGl0cyBpZDpcbiAgICAgICAgYWRkRWRpdEljb25MaXN0ZW5lcihkaXNwbGF5ZWRJdGVtLmRhdGFzZXQuaWQpO1xuICAgIH0pO1xuXG4gICAgLy8gcmVuZGVyICdhZGQnIGJ1dHRvbiBhdCB0aGUgYm90dG9tIG9mIHRoZSBjb250ZW50IHNlY3Rpb246XG4gICAgcmVuZGVyQWRkQnV0dG9uKCk7XG5cbiAgICAvLyBjaGVjayBpZiBkaXNwbGF5IG1vZGUgaXMgc2V0IHRvIGRhcmsgYW5kIHN3aXRjaCB0aGUgcGFnZSBzdHlsZSBpZiBuZWNlc3Nhcnk6XG4gICAgaWYgKGRpc3BsYXlNb2RlID09PSAnZGFyaycpIHtcbiAgICAgICAgc3dpdGNoVG9EYXJrKCk7XG4gICAgfVxuXG4gICAgLy8gYWRkIGNsaWNrIGxpc3RlbmVycyBvbiB0aXRsZSB0ZXh0ICYgZXhwYW5kIGljb25zIG9mIGFsbCByZW5kZXJlZCBpdGVtczpcbiAgICBhZGRFeHBhbmRMaXN0ZW5lcnMoKTtcblxufVxuXG5jb25zdCBjaGVja0NoZWNrYm94ID0gKGNoZWNrYm94RGl2KSA9PiB7XG4gICAgY29uc3QgY2hlY2tib3hJY29uID0gY2hlY2tib3hEaXYuZmlyc3RDaGlsZDtcbiAgICBjaGVja2JveEljb24uc2V0QXR0cmlidXRlKCdzcmMnLCBDaGVja2VkQ2hlY2tib3hJY29uKTtcbn1cblxuY29uc3QgdW5jaGVja0NoZWNrYm94ID0gKGNoZWNrYm94RGl2KSA9PiB7XG4gICAgY29uc3QgY2hlY2tib3hJY29uID0gY2hlY2tib3hEaXYuZmlyc3RDaGlsZDtcbiAgICBjaGVja2JveEljb24uc2V0QXR0cmlidXRlKCdzcmMnLCBFbXB0eUNoZWNrYm94SWNvbik7XG59XG5cbmNvbnN0IHNob3dFZGl0UG9wdXAgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGl0ZW1Ub0VkaXQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgY29uc3QgaW5kZXggPSBpdGVtVG9FZGl0LmRhdGFzZXQuaWQ7XG4gICAgcmVuZGVyRWRpdEZvcm0oaW5kZXgpO1xuICAgIFxufVxuXG5jb25zdCBleHBhbmRJdGVtID0gKGUpID0+IHtcblxuICAgIC8vIGZpcnN0LCBjcmVhdGUgcmVmZXJlbmNlIHRvIGNsaWNrZWQgZWxlbWVudCB0byBoZWxwIHVzIGRldGVybWluZSB0aGUgaXRlbSB0byBleHBhbmQ6XG4gICAgY29uc3QgY2xpY2tlZEVsZW1lbnQgPSBlLnRhcmdldDtcbiAgICBsZXQgaXRlbVRvRXhwYW5kO1xuICAgIC8vIGlmIHRoZSB0aXRsZSB0ZXh0IHdhcyBjbGlja2VkLCB0aGlzIGlzIHRydWUgYW5kIHRoZSBwYXJlbnQgPGRpdj4gaXMgdGhlIGl0ZW0gd2Ugd2FudCB0byBleHBhbmQ6XG4gICAgaWYgKGNsaWNrZWRFbGVtZW50LnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNwbGF5ZWQtaXRlbScpKSB7XG4gICAgICAgIGl0ZW1Ub0V4cGFuZCA9IGUudGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgLy8gb3RoZXJ3aXNlLCB0aGUgZXhwYW5kIGljb24gc3ZnIHdhcyBjbGlja2VkIGFuZCB3ZSBuZWVkIHRvIGFzY2VuZCBhbm90aGVyIGxheWVyIGluIHRoZSBET00gdG8gZ2V0IHRoZSA8ZGl2PiBvZiB0aGUgaXRlbSB3ZSB3YW50IHRvIGV4cGFuZDpcbiAgICB9IGVsc2Uge1xuICAgICAgICBpdGVtVG9FeHBhbmQgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgfVxuICAgIGl0ZW1Ub0V4cGFuZC5jbGFzc0xpc3QuYWRkKCdleHBhbmRlZC1pdGVtJyk7XG5cbiAgICAvLyBzYXZlIHJlZmVyZW5jZSB0byBpdGVtVG9FeHBhbmQncyBkYXRhLWlkOlxuICAgIGNvbnN0IGl0ZW1JZCA9IGl0ZW1Ub0V4cGFuZC5kYXRhc2V0LmlkO1xuXG4gICAgLy8gZ2V0IHJlZmVyZW5jZSB0byBleHBhbmQgaWNvbiwgYWRkIGEgbmV3IHNocmluayBpY29uIGJlZm9yZSBpdCwgYW5kIGRlbGV0ZSB0aGUgZXhwYW5kIGljb246XG4gICAgY29uc3QgZXhwYW5kID0gaXRlbVRvRXhwYW5kLmNoaWxkcmVuWzNdO1xuICAgIGNvbnN0IHNocmluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNocmluay5jbGFzc0xpc3QuYWRkKCdzaHJpbmsnKTtcbiAgICBjb25zdCBzaHJpbmtJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgc2hyaW5rSWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsIFNocmlua0ljb24pO1xuICAgIHNocmluay5hcHBlbmRDaGlsZChzaHJpbmtJY29uKTtcbiAgICBpdGVtVG9FeHBhbmQuaW5zZXJ0QmVmb3JlKHNocmluaywgZXhwYW5kKTtcbiAgICBleHBhbmQucmVtb3ZlKCk7XG5cbiAgICAvLyBjcmVhdGUgbmV3IDxkaXY+IGZvciBpdGVtIGRlc2NyaXB0aW9uIGFuZCBnZXQgdGV4dCBmcm9tIHRvZG9MaXN0IGFycmF5OlxuICAgIGNvbnN0IGl0ZW1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW1EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdpdGVtLWRlc2NyaXB0aW9uJyk7XG4gICAgaXRlbURlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoYCR7aXRlbUlkfS1kZXNjcmlwdGlvbmApO1xuICAgIGl0ZW1EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGdldERlc2NyaXB0aW9uKGl0ZW1JZCk7XG4gICAgaXRlbVRvRXhwYW5kLmFwcGVuZENoaWxkKGl0ZW1EZXNjcmlwdGlvbik7XG4gICAgXG4gICAgLy8gY3JlYXRlIG5ldyA8ZGl2PiBmb3IgZGVsZXRlIGljb24gYW5kIGFkZCBkZWxldGUgc3ZnIGFzIGEgY2hpbGQgPGltZz46XG4gICAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlbGV0ZUljb24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlJyk7XG4gICAgY29uc3QgZGVsZXRlSWNvblN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGRlbGV0ZUljb25Tdmcuc2V0QXR0cmlidXRlKCdzcmMnLCBEZWxldGVJY29uKTtcbiAgICBkZWxldGVJY29uLmFwcGVuZENoaWxkKGRlbGV0ZUljb25TdmcpO1xuICAgIGl0ZW1Ub0V4cGFuZC5hcHBlbmRDaGlsZChkZWxldGVJY29uKTtcblxuICAgIHJlbW92ZUxpc3RlbmVyc0Zyb21FeHBhbmRlZEl0ZW0oaXRlbUlkKTtcblxuICAgIGFkZExpc3RlbmVyc1RvRXhwYW5kZWRJdGVtKGl0ZW1JZCk7XG59XG5cbmNvbnN0IHNocmlua0l0ZW0gPSAoZSkgPT4ge1xuXG4gICAgLy8gc2FtZSBwcm90b2NvbCBhcyBleHBhbmRJdGVtKCk6XG4gICAgY29uc3QgY2xpY2tlZEVsZW1lbnQgPSBlLnRhcmdldDtcbiAgICBsZXQgaXRlbVRvU2hyaW5rID0gY2xpY2tlZEVsZW1lbnQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIGl0ZW1Ub1Nocmluay5jbGFzc0xpc3QucmVtb3ZlKCdleHBhbmRlZC1pdGVtJyk7XG5cbiAgICAvLyBnZXQgcmVmZXJlbmNlIHRvIHNocmluayBpY29uLCBhZGQgYSBuZXcgZXhwYW5kIGljb24gYmVmb3JlIGl0LCB0aGVuIGRlbGV0ZSB0aGUgc2hyaW5rIGljb246XG4gICAgY29uc3Qgc2hyaW5rID0gaXRlbVRvU2hyaW5rLmNoaWxkcmVuWzNdO1xuICAgIGNvbnN0IGV4cGFuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGV4cGFuZC5jbGFzc0xpc3QuYWRkKCdleHBhbmQnKTtcbiAgICBjb25zdCBleHBhbmRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgZXhwYW5kSWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsIEV4cGFuZEljb24pO1xuICAgIGV4cGFuZC5hcHBlbmRDaGlsZChleHBhbmRJY29uKTtcbiAgICBpdGVtVG9TaHJpbmsuaW5zZXJ0QmVmb3JlKGV4cGFuZCwgc2hyaW5rKTtcbiAgICBzaHJpbmsucmVtb3ZlKCk7XG5cbiAgICAvLyBzZWxlY3QgZXhwYW5kZWQgaXRlbSBkZXNjcmlwdGlvbiwgdGhlbiBkZWxldGUgaXQ6XG4gICAgY29uc3QgaXRlbURlc2NyaXB0aW9uID0gaXRlbVRvU2hyaW5rLmNoaWxkcmVuWzRdO1xuICAgIGl0ZW1EZXNjcmlwdGlvbi5yZW1vdmUoKTtcblxuICAgIC8vIHNlbGVjdCBkZWxldGUgaWNvbiA8ZGl2PiwgdGhlbiBkZWxldGUgaXQ6XG4gICAgY29uc3QgZGVsZXRlSWNvbiA9IGl0ZW1Ub1Nocmluay5jaGlsZHJlbls0XTtcbiAgICBkZWxldGVJY29uLnJlbW92ZSgpO1xuXG4gICAgY29uc3QgaXRlbVRpdGxlID0gaXRlbVRvU2hyaW5rLmNoaWxkcmVuWzFdO1xuICAgIHJlcGxhY2VFeHBhbmRMaXN0ZW5lcihpdGVtVGl0bGUpO1xuXG4gICAgcmVwbGFjZUV4cGFuZExpc3RlbmVyKGV4cGFuZCk7XG5cbn1cblxuY29uc3Qgc3dpdGNoVG9EYXJrID0gKCkgPT4ge1xuICAgIGNvbnN0IGV2ZXJ5dGhpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcqJyk7XG4gICAgZXZlcnl0aGluZy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RhcmsnKTtcbiAgICB9KTtcbiAgICBkaXNwbGF5TW9kZSA9ICdkYXJrJztcbn1cblxuY29uc3Qgc3R5bGVEYXJrSWNvbiA9ICgpID0+IHtcbiAgICAvLyBjaGVjayB0aGF0IGRhcmsgbW9kZSBpcyBzZWxlY3RlZDpcbiAgICBpZiAoZGlzcGxheU1vZGUgPT09ICdkYXJrJykge1xuICAgICAgICAvLyByZW1vdmUgc2VsZWN0aW9uIGZyb20gbGlnaHQgbW9kZSBpY29uOlxuICAgICAgICBjb25zdCBsaWdodEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlnaHQtbW9kZScpO1xuICAgICAgICBsaWdodEljb24uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQtZGlzcGxheScpO1xuICAgICAgICAvLyBtYXJrIGRhcmsgbW9kZSBpY29uIGFzIHNlbGVjdGVkOlxuICAgICAgICBjb25zdCBkYXJrSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXJrLW1vZGUnKTtcbiAgICAgICAgZGFya0ljb24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQtZGlzcGxheScpO1xuICAgIH1cbn1cblxuY29uc3Qgc3dpdGNoVG9MaWdodCA9ICgpID0+IHtcbiAgICBjb25zdCBldmVyeXRoaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKicpO1xuICAgIGV2ZXJ5dGhpbmcuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrJyk7XG4gICAgfSk7XG4gICAgZGlzcGxheU1vZGUgPSAnbGlnaHQnO1xufVxuXG5jb25zdCBzdHlsZUxpZ2h0SWNvbiA9ICgpID0+IHtcbiAgICAvLyBjaGVjayB0aGF0IGxpZ2h0IG1vZGUgaXMgc2VsZWN0ZWQ6XG4gICAgaWYgKGRpc3BsYXlNb2RlID09PSAnbGlnaHQnKSB7XG4gICAgICAgIC8vIHJlbW92ZSBzZWxlY3Rpb24gZnJvbSBkYXJrIG1vZGUgaWNvbjpcbiAgICAgICAgY29uc3QgZGFya0ljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGFyay1tb2RlJyk7XG4gICAgICAgIGRhcmtJY29uLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkLWRpc3BsYXknKTtcbiAgICAgICAgLy8gbWFyayBsaWdodCBtb2RlIGljb24gYXMgc2VsZWN0ZWQ6XG4gICAgICAgIGNvbnN0IGxpZ2h0SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saWdodC1tb2RlJyk7XG4gICAgICAgIGxpZ2h0SWNvbi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZC1kaXNwbGF5Jyk7XG4gICAgfVxufVxuXG5leHBvcnQgeyBcbiAgICByZW5kZXJIZWFkZXJGb290ZXIsIFxuICAgIHJlbmRlck5vdywgXG4gICAgcmVuZGVyTGF0ZXIsIFxuICAgIHJlbmRlckFsbCwgXG4gICAgZXhwYW5kSXRlbSxcbiAgICBzaHJpbmtJdGVtLCBcbiAgICB1cGRhdGVDdXJyZW50VmlldywgXG4gICAgZ2V0Q3VycmVudFZpZXcsXG4gICAgY2hlY2tDaGVja2JveCxcbiAgICB1bmNoZWNrQ2hlY2tib3gsXG4gICAgcmVuZGVyQWRkRm9ybSxcbiAgICBzdHlsZVJhZGlvT3B0aW9uLFxuICAgIHN1Ym1pdEZvcm0sXG4gICAgc3VibWl0RWRpdEZvcm0sXG4gICAgcmVtb3ZlRm9ybSxcbiAgICByZW1vdmVFZGl0Rm9ybSxcbiAgICBzd2l0Y2hUb0RhcmssXG4gICAgc3dpdGNoVG9MaWdodCxcbiAgICBzdHlsZURhcmtJY29uLFxuICAgIHN0eWxlTGlnaHRJY29uLFxuICAgIHNob3dFZGl0UG9wdXAsXG4gICAgZGlzcGxheU1vZGVcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=