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
___CSS_LOADER_EXPORT___.push([module.id, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n:root {\n    --rvv: calc(1rem + 1vh + 1vw);\n\n\t--blue: #2E5169;\n    --blue-gray: #5E686D;\n    --brown: #6F5746;\n    --brown-muted: #63584C;\n    --brown-tan: #A58F85;\n    --forest-green: #4D663E;\n    --green-brown: #5F563F;\n    --gray-tan: #C9BBA3;\n    --tan-gray: #D1C9BA;\n    --off-white: #E4D9C5;\n    --orange-yellow: #E1B270;\n    --orange-tan: #CDA885;\n    --red: #AC3A3E;\n    --special-red: #824E4A;\n    --tan: #D2BC9B;\n\n\t--title-footer-color: #ba8e5ede;\n\t--nav-bg: #e4d9c574;\n\t--now-button: #749c5d;\n\t--later-button: #b56c67;\n\t--all-button: #e0a85bc2;\n\t--button-outline: #f0991fd5;\n\t--input-focus-outline: #e5982d;\n\t--input-valid-outline:#4D663E;\n\t--main-bg: #e1cfae97;\n\t--item-bg: #2086ca92;\n\t--now-item-bg: #629c407c;\n\t--later-item-bg: #da8680c1;\n\t--description-bg: #d8f2ff95;\n\t--add-item-button: #ba8d5e85;\n\t--form-bg: #f0d7a9;\n\t--priority-button-default: #c8b5a285;\n\t--form-button: #ba8d5e85;\n\t--form-input-bg: #F3EEE5;\n\t--submit-button-bg: #87b6d5b4;\n\t--close-button: #986f4471;\n\t--display-icon: calc(var(--rvv));\n\n\t--dark-text: #ddd2bf;\n\t--dark-border: #272420;\n\t--dark-title-footer-color: #201c19de;\n\t--dark-nav-bg: #23201cc3;\n\t--dark-now-button: #384a2dda;\n\t--dark-later-button: #8e5652;\n\t--dark-all-button: #d49f539c;\n\t--dark-button-outline: #ee9f32ca;\n\t--dark-input-focus-outline: #ee9f32ca;\n\t--dark-input-valid-outline:#4D663E;\n\t--dark-main-bg: #24211da1;\n\t--dark-item-bg: #123c5892;\n\t--dark-now-item-bg: rgba(46, 80, 28, 0.527);\n\t--dark-later-item-bg: #754743b2;\n\t--dark-add-item-button: #815e3670;\n\t--dark-form-bg: #423d38;\n\t--dark-priority-button-default: #8b776285;\n\t--dark-form-button: #ba8d5e85;\n\t--dark-form-input-bg: #aba69a;\n\t--dark-submit-button-bg: #668da8b4;\n\t--dark-close-button: #96857385;\n\n\ttouch-action: pan-x pan-y;\n}\n\n@font-face {\n\tfont-family: 'Major Mono';\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n\tfont-family: 'Sublima';\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n@font-face {\n\tfont-family: 'Sublima Bold';\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\nhtml,\nbody {\n\tbox-sizing: border-box;\n\tposition: relative;\n\toverflow: hidden;\n}\n\nbody {\n\theight: 100vh;\n\twidth: 100vw;\n}\n\n.wrapper {\n\theight: 100%;\n\twidth: 100%;\n\tposition: relative;\n\toverflow-x: hidden;\n\tdisplay: flex;\n    flex-direction: column;\n}\n\nheader {\n\theight: 15vh;\n\tmin-height: calc(3.2*var(--rvv));\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.title {\n\toverflow: hidden;\n\tmin-height: calc(var(--rvv));\n\tflex: 1;\n\toverflow-x: hidden;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: calc(0.6*var(--rvv));\n\tbackground-color: var(--title-footer-color);\n\tborder-bottom: 1px solid black;\n}\n\n.title-text {\n\ttext-align: center;\n\tfont-family: 'Sublima';\n\tfont-size: calc(0.45*var(--rvv));\n\tletter-spacing: calc(0.1*var(--rvv));\n\ttext-indent: calc(0.1*var(--rvv));\n}\n\n.light-mode,\n.dark-mode {\n\tcursor: pointer;\n\theight: var(--display-icon);\n\twidth: var(--display-icon);\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.light-mode.dark,\n.dark-mode.dark {\n\tfilter: invert(80%);\n}\n\n.light-mode img,\n.dark-mode img {\n\theight: 80%;\n\twidth: 80%;\n}\n\n.selected-display.light-mode,\n.selected-display.dark-mode {\n\ttransition: 0.25s linear;\n}\n\n.selected-display.light-mode img {\n\tfilter: drop-shadow(0 0 5px var(--red));\n\ttransform: scale(1.2);\n}\n\n.selected-display.dark-mode img {\n\tfilter: drop-shadow(0 0 5px black);\n\ttransform: scale(1.2);\n}\n\n.nav {\n\tflex: 2;\n\tdisplay: flex;\n\tjustify-content: space-around;\n\talign-items: center;\n\tfont-family: 'Major Mono';\n\tbackground-color: var(--nav-bg);\n\tborder-bottom: 1px solid black;\n}\n\n.nav div {\n\tfont-size: calc(0.6*var(--rvv));\n\tcursor: pointer;\n\twidth: calc(3*var(--rvv));\n\theight: calc(var(--rvv));\n\tborder: 1px solid black;\n\tborder-radius: 15%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n}\n\n.now {\n\tbackground-color: var(--now-button);\n}\n\n.now,\n.all {\n\tletter-spacing: calc(0.3*var(--rvv));\n\ttext-indent: calc(0.3*var(--rvv));\n}\n\n.later {\n\tbackground-color: var(--later-button);\n\tletter-spacing: calc(0.1*var(--rvv));\n\ttext-indent: calc(0.1*var(--rvv));\n}\n\n.all {\n\tbackground-color: var(--all-button);\n}\n\n.selected {\n\tbox-shadow: 0 0 0 3px var(--button-outline);\n}\n\n.main {\n\tposition: relative;\n\tflex: auto;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tpadding: calc(0.5*var(--rvv)) 0;\n\tgap: calc(0.6*var(--rvv));\n\tbackground-color: var(--main-bg);\n}\n\n.displayed-item {\n\twidth: 90vw;\n\tmax-width: calc(15*var(--rvv));\n\tposition: relative;\n\tfont-family: 'Sublima';\n\tfont-size: calc(0.6*var(--rvv));\n\tpadding: calc(0.1*var(--rvv)) calc(0.3*var(--rvv));\n\tborder: 1px solid black;\n\tborder-radius: calc(0.8*var(--rvv));\n\tmargin: 0 calc(0.7*var(--rvv));\n\tdisplay: grid;\n\tgrid-template-columns: calc(1.4*var(--rvv)) 1fr calc(var(--rvv)) calc(var(--rvv));\n\tgrid-template-rows: 1fr;\n\tgrid-template-areas: \"checkbox title edit expand\";\n\tbackground-color: var(--item-bg);\n}\n\n.displayed-item.now-item {\n\tbackground-color: var(--now-item-bg);\n}\n\n.displayed-item.later-item {\n\tbackground-color: var(--later-item-bg);\n}\n\n.expanded-item {\n\tdisplay: grid;\n\tgrid-template-columns: calc(1.4*var(--rvv)) 1fr calc(var(--rvv)) calc(var(--rvv));\n\tgrid-template-rows: calc(1.2*var(--rvv)) 1fr;\n\tgrid-template-areas: \n\t\t\"checkbox title edit expand\"\n\t\t\". description . delete\";\n}\n\n.expanded-item .item-description {\n\tmargin-right: calc(0.3*var(--rvv));\n\tmargin-bottom: calc(0.3*var(--rvv));\n}\n\n.expanded-item .item-title {\n\tcursor: auto;\n}\n\n.completed-item {\n\tfilter: grayscale(70%);\n}\n\n.completed-item .item-title {\n\tfont-style: italic;\n\ttext-decoration: underline calc(0.04*var(--rvv)) black;\n\ttext-decoration-skip-ink: none;\n\ttext-underline-offset: calc(-0.2*var(--rvv));\n}\n\n.completed-item .item-description {\n\tfont-style: italic;\n}\n\n.displayed-item.add-item-button {\n\tpadding: 0;\n\tmargin: 0;\n\tcursor: pointer;\n\tbackground-color: var(--add-item-button);\n\theight: calc(1.5*var(--rvv));\n\twidth: calc(1.5*var(--rvv));\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.add-item-button img {\n\tmax-height: 100%;\n\tmax-width: 100%;\n}\n\n.add-form,\n.edit-form {\n\tdisplay: block;\n\tz-index: 3;\n\tposition: fixed;\n\ttop: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.add-form-itself,\n.edit-form-itself {\n\tbackground-color: var(--form-bg);\n\tdisplay: grid;\n\twidth: 90vw;\n\tposition: relative;\n\tmax-width: calc(15*var(--rvv));\n\tfont-family: 'Sublima';\n\tfont-size: calc(0.6*var(--rvv));\n\tpadding: calc(0.1*var(--rvv)) calc(0.3*var(--rvv));\n\tborder: 1px solid black;\n\tborder-radius: calc(0.8*var(--rvv));\n\tgrid-template-rows: calc(1.7*var(--rvv)) calc(var(--rvv)) calc(4*var(--rvv)) calc(var(--rvv)) calc(2.2*var(--rvv));\n\trow-gap: calc(0.25*var(--rvv));\n\tgrid-template-areas:\n\t\t\"form-title\"\n\t\t\"title-section\"\n\t\t\"description-section\"\n\t\t\"priority-section\"\n\t\t\"submit-button\";\n}\n\n.edit-form-title-text {\n\tmax-height: calc(1.7*var(--rvv));\n\tmax-width: calc(12*var(--rvv));\n\toverflow: hidden;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\tmargin-right: calc(var(--rvv));\n}\n\n.blur-backdrop {\n\tz-index: 2;\n\tposition: fixed;\n\toverflow: hidden;\n\tmin-width: 200vw;\n\theight: 200vh;\n\tbackdrop-filter: blur(5px);\n\t-webkit-backdrop-filter: blur(5px);\n}\n\n.form-title {\n\tmargin: 0 1%;\n\tmax-width: 90vw;\n\tgrid-area: form-title;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.form-title-text {\n\tfont-size: calc(0.7*var(--rvv));\n}\n\n.form-title-text:hover {\n\tfont-style: italic;\n}\n\n.close-button {\n\tcursor: pointer;\n\tbackground-color: var(--close-button);\n\tmargin-left: auto;\n\tborder: 1px solid black;\n\theight: calc(0.9*var(--rvv));\n\twidth: calc(0.9*var(--rvv));\n\tborder-radius: calc(var(--rvv));\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.close-button img {\n\theight: 100%;\n}\n\n.title-section {\n\tgrid-area: title-section;\n\tdisplay: grid;\n\tgrid-template-columns: calc(3.5*var(--rvv)) 1fr;\n}\n\n.title-section label {\n\tfont-size: calc(0.5*var(--rvv));\n}\n\n.title-section input,\n.description-section textarea {\n\twidth: 93%;\n\tbackground-color: var(--form-input-bg);\n\tborder: 1px solid black;\n\tborder-radius: calc(var(--rvv));\n\tpadding-left: 10px;\n\tfont-family: 'Sublima';\n\tfont-size: calc(0.45*var(--rvv));\n}\n\n.description-section textarea {\n\tborder-radius: calc(0.5*var(--rvv));\n\tresize: none;\n}\n\ninput:focus,\ntextarea:focus {\n\tappearance: none;\n\toutline: none;\n\tbox-shadow: 0 0 0 3px var(--input-focus-outline);\n}\n\ninput:not(:focus),\ntextarea:not(:focus) {\n\tcursor: pointer;\n}\n\n.description-section {\n\tgrid-area: description-section;\n\tdisplay: grid;\n\tgrid-template-columns: calc(3.5*var(--rvv)) 1fr;\n}\n\n.description-section label {\n\tfont-size: calc(0.5*var(--rvv));\n}\n\n.priority-section {\n\tmargin-top: 2px;\n\tgrid-area: priority-section;\n\tdisplay: grid;\n\tgrid-template-columns: calc(3.5*var(--rvv)) 1fr 1fr;\n}\n\n.priority-label {\n\tfont-size: calc(0.5*var(--rvv));\n}\n\n.radio-option {\n\tcursor: pointer;\n\tfont-family: 'Major Mono';\n\twidth: calc(3*var(--rvv));\n\theight: calc(var(--rvv));\n\tborder: 1px solid black;\n\tborder-radius: 15%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n\tbackground-color: var(--priority-button-default);\n}\n\n.radio-option label {\n\tcursor: pointer;\n}\n\n.now-option {\n\tjustify-self: center;\n\tletter-spacing: calc(0.3*var(--rvv));\n\ttext-indent: calc(0.3*var(--rvv));\n}\n\n.now-option.selected-priority {\n\tbackground-color: var(--now-button);\n\tbox-shadow: 0 0 0 3px var(--button-outline);\n}\n\n.later-option {\n\tjustify-self: center;\n\tletter-spacing: calc(0.1*var(--rvv));\n\ttext-indent: calc(0.1*var(--rvv));\n}\n\n.later-option.selected-priority {\n\tbackground-color: var(--later-button);\n\tbox-shadow: 0 0 0 3px var(--button-outline);\n}\n\n.radio-input {\n\tdisplay: none;\n\tpadding: 0;\n\tmargin: 0;\n\tappearance: none;\n}\n\n.submit-button {\n\tcursor: pointer;\n\tgrid-area: submit-button;\n\tfont-family: 'Sublima';\n\tbackground-color: var(--submit-button-bg);\n\talign-self: center;\n\tjustify-self: center;\n\tborder: 1px solid black;\n\theight: calc(1.5*var(--rvv));\n\twidth: 95%;\n\tborder-radius: calc(var(--rvv));\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.submit-button img {\n\theight: 100%;\n}\n\n.displayed-item img {\n\tcursor: pointer;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.checkbox img,\n.expand img {\n\twidth: calc(var(--rvv));\n}\n\n.edit img {\n\twidth: calc(0.8*var(--rvv));\n}\n\n.checkbox {\n\tgrid-area: checkbox;\n\tmargin-left: calc(0.2*var(--rvv));\n}\n\n.item-title {\n\tposition: relative;\n\tbottom: 2px;\n\tgrid-area: title;\n\tjustify-self: start;\n}\n\n.expandable-title {\n\tcursor: pointer;\n}\n\n.edit {\n\tgrid-area: edit;\n}\n\n.expand {\n\tgrid-area: expand;\n}\n\n.shrink {\n\tgrid-area: expand;\n\taspect-ratio: 1 / 1;\n}\n\n.shrink img {\n\theight: calc(var(--rvv));\n}\n\n.item-description {\n\tborder-radius: 3px;\n\tfont-style: italic;\n\tgrid-area: description;\n\talign-self: flex-start;\n\tjustify-self: flex-start;\n\tfont-size: 80%;\n}\n\n.expanded-item .delete {\n\tgrid-area: delete;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: flex-end;\n\tmargin-bottom: calc(0.3*var(--rvv));\n}\n\n.delete img {\n\theight: calc(var(--rvv));\n}\n\nfooter {\n\theight: 5vh;\n\tmin-height: calc(0.8*var(--rvv));\n\tbackground-color: var(--title-footer-color);\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-size: calc(0.5*var(--rvv));\n\tborder-top: 1px solid black;\n\tfont-family: 'Sublima';\n\tfont-size: calc(0.4*var(--rvv));\n\tletter-spacing: calc(0.1*var(--rvv));\n\ttext-indent: calc(0.1*var(--rvv));\n}\n\n/* dark mode styling: */\n\n.wrapper.dark {\n\tcolor: var(--dark-text);\n}\n\n.title.dark {\n\tbackground-color: var(--dark-title-footer-color);\n\tborder-bottom: 1px solid var(--dark-border);\n}\n\n.nav.dark {\n\tbackground-color: var(--dark-nav-bg);\n\tborder-bottom: 1px solid var(--dark-border);\n}\n\n.nav.dark div {\n\tborder: 1px solid var(--dark-border);\n}\n\n.now.dark {\n\tbackground-color: var(--dark-now-button);\n}\n\n.later.dark {\n\tbackground-color: var(--dark-later-button);\n}\n\n.all.dark {\n\tbackground-color: var(--dark-all-button);\n}\n\n.selected.dark {\n\tbox-shadow: 0 0 0 3px var(--dark-button-outline);\n}\n\n.main.dark {\n\tbackground-color: var(--dark-main-bg);\n}\n\n.displayed-item.dark {\n\tborder: 1px solid var(--dark-border);\n\tbackground-color: var(--dark-item-bg);\n}\n\n.displayed-item.now-item.dark {\n\tbackground-color: var(--dark-now-item-bg);\n}\n\n.displayed-item.later-item.dark {\n\tbackground-color: var(--dark-later-item-bg);\n}\n\n.completed-item .item-title.dark {\n\tfilter: brightness(80%);\n\ttext-decoration: underline calc(0.04*var(--rvv)) var(--dark-text);\n\ttext-decoration-skip-ink: none;\n}\n\n.add-form-itself.dark,\n.edit-form-itself.dark {\n\tbackground-color: var(--dark-form-bg);\n}\n\n.close-button.dark {\n\tbackground-color: var(--dark-close-button);\n\tborder: 1px solid var(--dark-border);\n}\n\n.title-section.dark input,\n.description-section.dark textarea {\n\tbackground-color: var(--dark-form-input-bg);\n\tborder: 1px solid var(--dark-border);\n}\n\ninput.dark:focus,\ntextarea.dark:focus {\n\tbox-shadow: 0 0 0 3px var(--dark-input-focus-outline);\n}\n\n.radio-option.dark {\n\tborder: 1px solid var(--dark-border);\n\tbackground-color: var(--dark-priority-button-default);\n}\n\n.now-option.selected-priority.dark {\n\tbackground-color: var(--dark-now-button);\n\tbox-shadow: 0 0 0 3px var(--dark-button-outline);\n}\n\n.later-option.selected-priority.dark {\n\tbackground-color: var(--dark-later-button);\n\tbox-shadow: 0 0 0 3px var(--dark-button-outline);\n}\n\n.displayed-item.add-item-button.dark {\n\tbackground-color: var(--dark-add-item-button);\n}\n\n.submit-button.dark {\n\tbackground-color: var(--dark-submit-button-bg);\n\tborder: 1px solid var(--dark-border);\n}\n\nfooter.dark {\n\tbackground-color: var(--dark-title-footer-color);\n\tborder-top: 1px solid var(--dark-border);\n}\n\n/* desktop version: */\n@media only screen and (min-width: 750px) {\n\n\t.nav div {\n\t\ttransition: 0.075s linear;\n\t}\n\n\t.nav div:hover {\n\t\ttransform: scale(1.05);\n\t}\n\n\t.checkbox,\n\t.edit,\n\t.expand,\n\t.shrink,\n\t.delete,\n\t.add-item-button,\n\t.radio-option,\n\t.submit-button,\n\t.close-button {\n\t\ttransition: 0.075s linear;\n\t}\n\n\t.checkbox:hover {\n\t\ttransform: scale(1.075);\n\t}\n\n\t.edit:hover {\n\t\ttransform: scale(1.1);\n\t}\n\n\t.expand:hover {\n\t\ttransform: scale(1.25);\n\t}\n\n\t.shrink:hover {\n\t\ttransform: scale(1.1);\n\t}\n\n\t.delete:hover {\n\t\ttransform: scale(1.075);\n\t}\n\n\t.add-item-button:hover {\n\t\ttransform: scale(1.05);\n\t}\n\n\t.radio-option:hover {\n\t\ttransform: scale(1.05);\n\t}\n\n\t.submit-button:hover {\n\t\ttransform: scale(1.01);\n\t}\n\n\t.close-button:hover {\n\t\ttransform: scale(1.1);\n\t}\n\n}\n\n@media only screen and (max-width: 750px) {\n\t.completed-item .item-title,\n\t.completed-item .item-title.dark {\n\t\tfont-style: italic;\n\t\ttext-decoration: line-through;\n\t\ttext-decoration-skip-ink: none;\n\t\ttext-underline-offset: 0;\n\t}\n}\n\n@media screen and (orientation: landscape) {\n\tbody {\n\t\tmin-height: 100vh;\n\t\tmin-width: 100vw;\n\t}\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n:root {\n    --rvv: calc(1rem + 1vh + 1vw);\n\n\t--blue: #2E5169;\n    --blue-gray: #5E686D;\n    --brown: #6F5746;\n    --brown-muted: #63584C;\n    --brown-tan: #A58F85;\n    --forest-green: #4D663E;\n    --green-brown: #5F563F;\n    --gray-tan: #C9BBA3;\n    --tan-gray: #D1C9BA;\n    --off-white: #E4D9C5;\n    --orange-yellow: #E1B270;\n    --orange-tan: #CDA885;\n    --red: #AC3A3E;\n    --special-red: #824E4A;\n    --tan: #D2BC9B;\n\n\t--title-footer-color: #ba8e5ede;\n\t--nav-bg: #e4d9c574;\n\t--now-button: #749c5d;\n\t--later-button: #b56c67;\n\t--all-button: #e0a85bc2;\n\t--button-outline: #f0991fd5;\n\t--input-focus-outline: #e5982d;\n\t--input-valid-outline:#4D663E;\n\t--main-bg: #e1cfae97;\n\t--item-bg: #2086ca92;\n\t--now-item-bg: #629c407c;\n\t--later-item-bg: #da8680c1;\n\t--description-bg: #d8f2ff95;\n\t--add-item-button: #ba8d5e85;\n\t--form-bg: #f0d7a9;\n\t--priority-button-default: #c8b5a285;\n\t--form-button: #ba8d5e85;\n\t--form-input-bg: #F3EEE5;\n\t--submit-button-bg: #87b6d5b4;\n\t--close-button: #986f4471;\n\t--display-icon: calc(var(--rvv));\n\n\t--dark-text: #ddd2bf;\n\t--dark-border: #272420;\n\t--dark-title-footer-color: #201c19de;\n\t--dark-nav-bg: #23201cc3;\n\t--dark-now-button: #384a2dda;\n\t--dark-later-button: #8e5652;\n\t--dark-all-button: #d49f539c;\n\t--dark-button-outline: #ee9f32ca;\n\t--dark-input-focus-outline: #ee9f32ca;\n\t--dark-input-valid-outline:#4D663E;\n\t--dark-main-bg: #24211da1;\n\t--dark-item-bg: #123c5892;\n\t--dark-now-item-bg: rgba(46, 80, 28, 0.527);\n\t--dark-later-item-bg: #754743b2;\n\t--dark-add-item-button: #815e3670;\n\t--dark-form-bg: #423d38;\n\t--dark-priority-button-default: #8b776285;\n\t--dark-form-button: #ba8d5e85;\n\t--dark-form-input-bg: #aba69a;\n\t--dark-submit-button-bg: #668da8b4;\n\t--dark-close-button: #96857385;\n\n\ttouch-action: pan-x pan-y;\n}\n\n@font-face {\n\tfont-family: 'Major Mono';\n\tsrc: url('font/major-mono/major-mono.ttf');\n}\n\n@font-face {\n\tfont-family: 'Sublima';\n\tsrc: url('font/sublima/sublima-light.otf');\n}\n\n@font-face {\n\tfont-family: 'Sublima Bold';\n\tsrc: url('font/sublima/sublima-extra-bold.otf');\n}\n\nhtml,\nbody {\n\tbox-sizing: border-box;\n\tposition: relative;\n\toverflow: hidden;\n}\n\nbody {\n\theight: 100vh;\n\twidth: 100vw;\n}\n\n.wrapper {\n\theight: 100%;\n\twidth: 100%;\n\tposition: relative;\n\toverflow-x: hidden;\n\tdisplay: flex;\n    flex-direction: column;\n}\n\nheader {\n\theight: 15vh;\n\tmin-height: calc(3.2*var(--rvv));\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.title {\n\toverflow: hidden;\n\tmin-height: calc(var(--rvv));\n\tflex: 1;\n\toverflow-x: hidden;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: calc(0.6*var(--rvv));\n\tbackground-color: var(--title-footer-color);\n\tborder-bottom: 1px solid black;\n}\n\n.title-text {\n\ttext-align: center;\n\tfont-family: 'Sublima';\n\tfont-size: calc(0.45*var(--rvv));\n\tletter-spacing: calc(0.1*var(--rvv));\n\ttext-indent: calc(0.1*var(--rvv));\n}\n\n.light-mode,\n.dark-mode {\n\tcursor: pointer;\n\theight: var(--display-icon);\n\twidth: var(--display-icon);\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.light-mode.dark,\n.dark-mode.dark {\n\tfilter: invert(80%);\n}\n\n.light-mode img,\n.dark-mode img {\n\theight: 80%;\n\twidth: 80%;\n}\n\n.selected-display.light-mode,\n.selected-display.dark-mode {\n\ttransition: 0.25s linear;\n}\n\n.selected-display.light-mode img {\n\tfilter: drop-shadow(0 0 5px var(--red));\n\ttransform: scale(1.2);\n}\n\n.selected-display.dark-mode img {\n\tfilter: drop-shadow(0 0 5px black);\n\ttransform: scale(1.2);\n}\n\n.nav {\n\tflex: 2;\n\tdisplay: flex;\n\tjustify-content: space-around;\n\talign-items: center;\n\tfont-family: 'Major Mono';\n\tbackground-color: var(--nav-bg);\n\tborder-bottom: 1px solid black;\n}\n\n.nav div {\n\tfont-size: calc(0.6*var(--rvv));\n\tcursor: pointer;\n\twidth: calc(3*var(--rvv));\n\theight: calc(var(--rvv));\n\tborder: 1px solid black;\n\tborder-radius: 15%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n}\n\n.now {\n\tbackground-color: var(--now-button);\n}\n\n.now,\n.all {\n\tletter-spacing: calc(0.3*var(--rvv));\n\ttext-indent: calc(0.3*var(--rvv));\n}\n\n.later {\n\tbackground-color: var(--later-button);\n\tletter-spacing: calc(0.1*var(--rvv));\n\ttext-indent: calc(0.1*var(--rvv));\n}\n\n.all {\n\tbackground-color: var(--all-button);\n}\n\n.selected {\n\tbox-shadow: 0 0 0 3px var(--button-outline);\n}\n\n.main {\n\tposition: relative;\n\tflex: auto;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tpadding: calc(0.5*var(--rvv)) 0;\n\tgap: calc(0.6*var(--rvv));\n\tbackground-color: var(--main-bg);\n}\n\n.displayed-item {\n\twidth: 90vw;\n\tmax-width: calc(15*var(--rvv));\n\tposition: relative;\n\tfont-family: 'Sublima';\n\tfont-size: calc(0.6*var(--rvv));\n\tpadding: calc(0.1*var(--rvv)) calc(0.3*var(--rvv));\n\tborder: 1px solid black;\n\tborder-radius: calc(0.8*var(--rvv));\n\tmargin: 0 calc(0.7*var(--rvv));\n\tdisplay: grid;\n\tgrid-template-columns: calc(1.4*var(--rvv)) 1fr calc(var(--rvv)) calc(var(--rvv));\n\tgrid-template-rows: 1fr;\n\tgrid-template-areas: \"checkbox title edit expand\";\n\tbackground-color: var(--item-bg);\n}\n\n.displayed-item.now-item {\n\tbackground-color: var(--now-item-bg);\n}\n\n.displayed-item.later-item {\n\tbackground-color: var(--later-item-bg);\n}\n\n.expanded-item {\n\tdisplay: grid;\n\tgrid-template-columns: calc(1.4*var(--rvv)) 1fr calc(var(--rvv)) calc(var(--rvv));\n\tgrid-template-rows: calc(1.2*var(--rvv)) 1fr;\n\tgrid-template-areas: \n\t\t\"checkbox title edit expand\"\n\t\t\". description . delete\";\n}\n\n.expanded-item .item-description {\n\tmargin-right: calc(0.3*var(--rvv));\n\tmargin-bottom: calc(0.3*var(--rvv));\n}\n\n.expanded-item .item-title {\n\tcursor: auto;\n}\n\n.completed-item {\n\tfilter: grayscale(70%);\n}\n\n.completed-item .item-title {\n\tfont-style: italic;\n\ttext-decoration: underline calc(0.04*var(--rvv)) black;\n\ttext-decoration-skip-ink: none;\n\ttext-underline-offset: calc(-0.2*var(--rvv));\n}\n\n.completed-item .item-description {\n\tfont-style: italic;\n}\n\n.displayed-item.add-item-button {\n\tpadding: 0;\n\tmargin: 0;\n\tcursor: pointer;\n\tbackground-color: var(--add-item-button);\n\theight: calc(1.5*var(--rvv));\n\twidth: calc(1.5*var(--rvv));\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.add-item-button img {\n\tmax-height: 100%;\n\tmax-width: 100%;\n}\n\n.add-form,\n.edit-form {\n\tdisplay: block;\n\tz-index: 3;\n\tposition: fixed;\n\ttop: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.add-form-itself,\n.edit-form-itself {\n\tbackground-color: var(--form-bg);\n\tdisplay: grid;\n\twidth: 90vw;\n\tposition: relative;\n\tmax-width: calc(15*var(--rvv));\n\tfont-family: 'Sublima';\n\tfont-size: calc(0.6*var(--rvv));\n\tpadding: calc(0.1*var(--rvv)) calc(0.3*var(--rvv));\n\tborder: 1px solid black;\n\tborder-radius: calc(0.8*var(--rvv));\n\tgrid-template-rows: calc(1.7*var(--rvv)) calc(var(--rvv)) calc(4*var(--rvv)) calc(var(--rvv)) calc(2.2*var(--rvv));\n\trow-gap: calc(0.25*var(--rvv));\n\tgrid-template-areas:\n\t\t\"form-title\"\n\t\t\"title-section\"\n\t\t\"description-section\"\n\t\t\"priority-section\"\n\t\t\"submit-button\";\n}\n\n.edit-form-title-text {\n\tmax-height: calc(1.7*var(--rvv));\n\tmax-width: calc(12*var(--rvv));\n\toverflow: hidden;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\tmargin-right: calc(var(--rvv));\n}\n\n.blur-backdrop {\n\tz-index: 2;\n\tposition: fixed;\n\toverflow: hidden;\n\tmin-width: 200vw;\n\theight: 200vh;\n\tbackdrop-filter: blur(5px);\n\t-webkit-backdrop-filter: blur(5px);\n}\n\n.form-title {\n\tmargin: 0 1%;\n\tmax-width: 90vw;\n\tgrid-area: form-title;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.form-title-text {\n\tfont-size: calc(0.7*var(--rvv));\n}\n\n.form-title-text:hover {\n\tfont-style: italic;\n}\n\n.close-button {\n\tcursor: pointer;\n\tbackground-color: var(--close-button);\n\tmargin-left: auto;\n\tborder: 1px solid black;\n\theight: calc(0.9*var(--rvv));\n\twidth: calc(0.9*var(--rvv));\n\tborder-radius: calc(var(--rvv));\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.close-button img {\n\theight: 100%;\n}\n\n.title-section {\n\tgrid-area: title-section;\n\tdisplay: grid;\n\tgrid-template-columns: calc(3.5*var(--rvv)) 1fr;\n}\n\n.title-section label {\n\tfont-size: calc(0.5*var(--rvv));\n}\n\n.title-section input,\n.description-section textarea {\n\twidth: 93%;\n\tbackground-color: var(--form-input-bg);\n\tborder: 1px solid black;\n\tborder-radius: calc(var(--rvv));\n\tpadding-left: 10px;\n\tfont-family: 'Sublima';\n\tfont-size: calc(0.45*var(--rvv));\n}\n\n.description-section textarea {\n\tborder-radius: calc(0.5*var(--rvv));\n\tresize: none;\n}\n\ninput:focus,\ntextarea:focus {\n\tappearance: none;\n\toutline: none;\n\tbox-shadow: 0 0 0 3px var(--input-focus-outline);\n}\n\ninput:not(:focus),\ntextarea:not(:focus) {\n\tcursor: pointer;\n}\n\n.description-section {\n\tgrid-area: description-section;\n\tdisplay: grid;\n\tgrid-template-columns: calc(3.5*var(--rvv)) 1fr;\n}\n\n.description-section label {\n\tfont-size: calc(0.5*var(--rvv));\n}\n\n.priority-section {\n\tmargin-top: 2px;\n\tgrid-area: priority-section;\n\tdisplay: grid;\n\tgrid-template-columns: calc(3.5*var(--rvv)) 1fr 1fr;\n}\n\n.priority-label {\n\tfont-size: calc(0.5*var(--rvv));\n}\n\n.radio-option {\n\tcursor: pointer;\n\tfont-family: 'Major Mono';\n\twidth: calc(3*var(--rvv));\n\theight: calc(var(--rvv));\n\tborder: 1px solid black;\n\tborder-radius: 15%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n\tbackground-color: var(--priority-button-default);\n}\n\n.radio-option label {\n\tcursor: pointer;\n}\n\n.now-option {\n\tjustify-self: center;\n\tletter-spacing: calc(0.3*var(--rvv));\n\ttext-indent: calc(0.3*var(--rvv));\n}\n\n.now-option.selected-priority {\n\tbackground-color: var(--now-button);\n\tbox-shadow: 0 0 0 3px var(--button-outline);\n}\n\n.later-option {\n\tjustify-self: center;\n\tletter-spacing: calc(0.1*var(--rvv));\n\ttext-indent: calc(0.1*var(--rvv));\n}\n\n.later-option.selected-priority {\n\tbackground-color: var(--later-button);\n\tbox-shadow: 0 0 0 3px var(--button-outline);\n}\n\n.radio-input {\n\tdisplay: none;\n\tpadding: 0;\n\tmargin: 0;\n\tappearance: none;\n}\n\n.submit-button {\n\tcursor: pointer;\n\tgrid-area: submit-button;\n\tfont-family: 'Sublima';\n\tbackground-color: var(--submit-button-bg);\n\talign-self: center;\n\tjustify-self: center;\n\tborder: 1px solid black;\n\theight: calc(1.5*var(--rvv));\n\twidth: 95%;\n\tborder-radius: calc(var(--rvv));\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.submit-button img {\n\theight: 100%;\n}\n\n.displayed-item img {\n\tcursor: pointer;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.checkbox img,\n.expand img {\n\twidth: calc(var(--rvv));\n}\n\n.edit img {\n\twidth: calc(0.8*var(--rvv));\n}\n\n.checkbox {\n\tgrid-area: checkbox;\n\tmargin-left: calc(0.2*var(--rvv));\n}\n\n.item-title {\n\tposition: relative;\n\tbottom: 2px;\n\tgrid-area: title;\n\tjustify-self: start;\n}\n\n.expandable-title {\n\tcursor: pointer;\n}\n\n.edit {\n\tgrid-area: edit;\n}\n\n.expand {\n\tgrid-area: expand;\n}\n\n.shrink {\n\tgrid-area: expand;\n\taspect-ratio: 1 / 1;\n}\n\n.shrink img {\n\theight: calc(var(--rvv));\n}\n\n.item-description {\n\tborder-radius: 3px;\n\tfont-style: italic;\n\tgrid-area: description;\n\talign-self: flex-start;\n\tjustify-self: flex-start;\n\tfont-size: 80%;\n}\n\n.expanded-item .delete {\n\tgrid-area: delete;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: flex-end;\n\tmargin-bottom: calc(0.3*var(--rvv));\n}\n\n.delete img {\n\theight: calc(var(--rvv));\n}\n\nfooter {\n\theight: 5vh;\n\tmin-height: calc(0.8*var(--rvv));\n\tbackground-color: var(--title-footer-color);\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-size: calc(0.5*var(--rvv));\n\tborder-top: 1px solid black;\n\tfont-family: 'Sublima';\n\tfont-size: calc(0.4*var(--rvv));\n\tletter-spacing: calc(0.1*var(--rvv));\n\ttext-indent: calc(0.1*var(--rvv));\n}\n\n/* dark mode styling: */\n\n.wrapper.dark {\n\tcolor: var(--dark-text);\n}\n\n.title.dark {\n\tbackground-color: var(--dark-title-footer-color);\n\tborder-bottom: 1px solid var(--dark-border);\n}\n\n.nav.dark {\n\tbackground-color: var(--dark-nav-bg);\n\tborder-bottom: 1px solid var(--dark-border);\n}\n\n.nav.dark div {\n\tborder: 1px solid var(--dark-border);\n}\n\n.now.dark {\n\tbackground-color: var(--dark-now-button);\n}\n\n.later.dark {\n\tbackground-color: var(--dark-later-button);\n}\n\n.all.dark {\n\tbackground-color: var(--dark-all-button);\n}\n\n.selected.dark {\n\tbox-shadow: 0 0 0 3px var(--dark-button-outline);\n}\n\n.main.dark {\n\tbackground-color: var(--dark-main-bg);\n}\n\n.displayed-item.dark {\n\tborder: 1px solid var(--dark-border);\n\tbackground-color: var(--dark-item-bg);\n}\n\n.displayed-item.now-item.dark {\n\tbackground-color: var(--dark-now-item-bg);\n}\n\n.displayed-item.later-item.dark {\n\tbackground-color: var(--dark-later-item-bg);\n}\n\n.completed-item .item-title.dark {\n\tfilter: brightness(80%);\n\ttext-decoration: underline calc(0.04*var(--rvv)) var(--dark-text);\n\ttext-decoration-skip-ink: none;\n}\n\n.add-form-itself.dark,\n.edit-form-itself.dark {\n\tbackground-color: var(--dark-form-bg);\n}\n\n.close-button.dark {\n\tbackground-color: var(--dark-close-button);\n\tborder: 1px solid var(--dark-border);\n}\n\n.title-section.dark input,\n.description-section.dark textarea {\n\tbackground-color: var(--dark-form-input-bg);\n\tborder: 1px solid var(--dark-border);\n}\n\ninput.dark:focus,\ntextarea.dark:focus {\n\tbox-shadow: 0 0 0 3px var(--dark-input-focus-outline);\n}\n\n.radio-option.dark {\n\tborder: 1px solid var(--dark-border);\n\tbackground-color: var(--dark-priority-button-default);\n}\n\n.now-option.selected-priority.dark {\n\tbackground-color: var(--dark-now-button);\n\tbox-shadow: 0 0 0 3px var(--dark-button-outline);\n}\n\n.later-option.selected-priority.dark {\n\tbackground-color: var(--dark-later-button);\n\tbox-shadow: 0 0 0 3px var(--dark-button-outline);\n}\n\n.displayed-item.add-item-button.dark {\n\tbackground-color: var(--dark-add-item-button);\n}\n\n.submit-button.dark {\n\tbackground-color: var(--dark-submit-button-bg);\n\tborder: 1px solid var(--dark-border);\n}\n\nfooter.dark {\n\tbackground-color: var(--dark-title-footer-color);\n\tborder-top: 1px solid var(--dark-border);\n}\n\n/* desktop version: */\n@media only screen and (min-width: 750px) {\n\n\t.nav div {\n\t\ttransition: 0.075s linear;\n\t}\n\n\t.nav div:hover {\n\t\ttransform: scale(1.05);\n\t}\n\n\t.checkbox,\n\t.edit,\n\t.expand,\n\t.shrink,\n\t.delete,\n\t.add-item-button,\n\t.radio-option,\n\t.submit-button,\n\t.close-button {\n\t\ttransition: 0.075s linear;\n\t}\n\n\t.checkbox:hover {\n\t\ttransform: scale(1.075);\n\t}\n\n\t.edit:hover {\n\t\ttransform: scale(1.1);\n\t}\n\n\t.expand:hover {\n\t\ttransform: scale(1.25);\n\t}\n\n\t.shrink:hover {\n\t\ttransform: scale(1.1);\n\t}\n\n\t.delete:hover {\n\t\ttransform: scale(1.075);\n\t}\n\n\t.add-item-button:hover {\n\t\ttransform: scale(1.05);\n\t}\n\n\t.radio-option:hover {\n\t\ttransform: scale(1.05);\n\t}\n\n\t.submit-button:hover {\n\t\ttransform: scale(1.01);\n\t}\n\n\t.close-button:hover {\n\t\ttransform: scale(1.1);\n\t}\n\n}\n\n@media only screen and (max-width: 750px) {\n\t.completed-item .item-title,\n\t.completed-item .item-title.dark {\n\t\tfont-style: italic;\n\t\ttext-decoration: line-through;\n\t\ttext-decoration-skip-ink: none;\n\t\ttext-underline-offset: 0;\n\t}\n}\n\n@media screen and (orientation: landscape) {\n\tbody {\n\t\tmin-height: 100vh;\n\t\tmin-width: 100vw;\n\t}\n}"],"sourceRoot":""}]);
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
/* harmony export */   "setBody": () => (/* binding */ setBody),
/* harmony export */   "setBodyHeight": () => (/* binding */ setBodyHeight),
/* harmony export */   "setBodyWidth": () => (/* binding */ setBodyWidth)
/* harmony export */ });
// set body height to exactly the inner height of the browser on narrow (likely mobile) screens:
const setBodyHeight = () => {
    const body = document.querySelector('body');
    if (window.innerWidth < 751) {
        body.style.minHeight = window.innerHeight + "px";
    } else {
        body.style.minHeight = '100vh';
    }
};

// set body width to exactly the inner width of the browser:
const setBodyWidth = () => {
    const body = document.querySelector('body');
    const width = window.innerWidth;
    body.style.maxWidth = width + "px";
    const viewport = document.querySelector(`meta[name='viewport']`);
    viewport.setAttribute('content', `width=${width} initial-scale=1.0, maximum-scale=2.0`)
};

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

    (0,_page_js__WEBPACK_IMPORTED_MODULE_3__.createBlurBackdrop)();

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
            const formTitleText = document.createElement('div');
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
/* harmony import */ var _body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./body */ "./src/js/body.js");







(0,_page_js__WEBPACK_IMPORTED_MODULE_2__.renderPage)();

(0,_body__WEBPACK_IMPORTED_MODULE_4__.setBody)();

// set the body every second:
setTimeout(_body__WEBPACK_IMPORTED_MODULE_4__.setBody, 1000);

(0,_listen_js__WEBPACK_IMPORTED_MODULE_3__.addInitialListeners)();

(0,_list_js__WEBPACK_IMPORTED_MODULE_1__.retrieveStoredList)();

(0,_page_js__WEBPACK_IMPORTED_MODULE_2__.renderStoredView)();

(0,_page_js__WEBPACK_IMPORTED_MODULE_2__.retrieveStoredDisplayMode)();

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
    // if browser is not safari:
    if (!(navigator.userAgent.indexOf("Safari") != -1 )) {
        screen.orientation.addEventListener('change', _body_js__WEBPACK_IMPORTED_MODULE_0__.setBody);
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

    const darkIcon = document.querySelector('.dark-mode');
    darkIcon.addEventListener('click', _page_js__WEBPACK_IMPORTED_MODULE_1__.switchToDark);

}

const addAddListener = () => {
    const addButton = document.querySelector('.add-item-button');
    addButton.addEventListener('click', _page_js__WEBPACK_IMPORTED_MODULE_1__.renderAddForm);
}

const addFormListeners = () => {

    // add close button listener:
    const closeButton = document.querySelector('.close-button');
    closeButton.addEventListener('click', _page_js__WEBPACK_IMPORTED_MODULE_1__.removeAddForm);

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
        (0,_page_js__WEBPACK_IMPORTED_MODULE_1__.submitAddForm)();
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
/* harmony export */   "createBlurBackdrop": () => (/* binding */ createBlurBackdrop),
/* harmony export */   "displayMode": () => (/* binding */ displayMode),
/* harmony export */   "expandItem": () => (/* binding */ expandItem),
/* harmony export */   "getCurrentView": () => (/* binding */ getCurrentView),
/* harmony export */   "removeAddForm": () => (/* binding */ removeAddForm),
/* harmony export */   "removeEditForm": () => (/* binding */ removeEditForm),
/* harmony export */   "renderAddForm": () => (/* binding */ renderAddForm),
/* harmony export */   "renderAll": () => (/* binding */ renderAll),
/* harmony export */   "renderLater": () => (/* binding */ renderLater),
/* harmony export */   "renderNow": () => (/* binding */ renderNow),
/* harmony export */   "renderPage": () => (/* binding */ renderPage),
/* harmony export */   "renderStoredView": () => (/* binding */ renderStoredView),
/* harmony export */   "retrieveStoredDisplayMode": () => (/* binding */ retrieveStoredDisplayMode),
/* harmony export */   "showEditPopup": () => (/* binding */ showEditPopup),
/* harmony export */   "shrinkItem": () => (/* binding */ shrinkItem),
/* harmony export */   "styleDarkIcon": () => (/* binding */ styleDarkIcon),
/* harmony export */   "styleLightIcon": () => (/* binding */ styleLightIcon),
/* harmony export */   "styleRadioOption": () => (/* binding */ styleRadioOption),
/* harmony export */   "submitAddForm": () => (/* binding */ submitAddForm),
/* harmony export */   "submitEditForm": () => (/* binding */ submitEditForm),
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
const renderPage = () => {

    const head = document.querySelector('head');

    // disable zoom to ensure page layout doesn't break on mobile:
    // const meta = document.createElement('meta');
    // meta.setAttribute('name', 'viewport');
    // meta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
    // head.appendChild(meta);

    // add favicon:
    const favIcon = document.createElement('link');
    favIcon.setAttribute('rel', 'icon');
    favIcon.setAttribute('href', _img_favicon_png__WEBPACK_IMPORTED_MODULE_10__);
    head.appendChild(favIcon);
    
    // create outer page wrapper <div>:
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    document.body.appendChild(wrapper);

    // create header:
    const header = document.createElement('header');
    wrapper.appendChild(header);

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
    wrapper.appendChild(main);

    // create footer:
    const footer = document.createElement('footer');
    wrapper.appendChild(footer);
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
    addForm.classList.add('add-form');

    // insert add form before add button:
    const main = document.querySelector('.main');
    main.appendChild(addForm);

    createBlurBackdrop();

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

            // create an 'add' button at the bottom of the form:
            const formButton = document.createElement('button');
            formButton.classList.add('submit-button');
            formButton.setAttribute('type', 'submit');
            formItself.appendChild(formButton);
            const formButtonIcon = document.createElement('img');
            formButtonIcon.setAttribute('src', _img_add_svg__WEBPACK_IMPORTED_MODULE_8__);
            formButton.appendChild(formButtonIcon);
    
    // render the add form in the correct display style:
    if (displayMode === 'dark') {
        switchToDark();
    }

    (0,_listen_js__WEBPACK_IMPORTED_MODULE_1__.addFormListeners)();
}

const submitAddForm = () => {

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

    removeBlurBackdrop();
};


const submitEditForm = (e) => {

    const index = e.target.dataset.id;
    console.log(index);

    // get form values:
    const title = document.querySelector('.edit-title-input');
    const description = document.querySelector('.edit-description-input');

    (0,_list_js__WEBPACK_IMPORTED_MODULE_0__.editTodo)(index, 'title', title.value);
    (0,_list_js__WEBPACK_IMPORTED_MODULE_0__.editTodo)(index, 'description', description.value);
    if (document.getElementById('now').checked) {
        (0,_list_js__WEBPACK_IMPORTED_MODULE_0__.editTodo)(index, 'priority', 'now');
    } else if (document.getElementById('later').checked) {
        (0,_list_js__WEBPACK_IMPORTED_MODULE_0__.editTodo)(index, 'priority', 'later');
    }

    removeBlurBackdrop();

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
const removeAddForm = () => {
    const form = document.querySelector('.add-form');
    form.remove();
    removeBlurBackdrop();
}

const removeEditForm = () => {
    const form = document.querySelector('.edit-form');
    form.remove();
    removeBlurBackdrop();
}

// create overlay for blur backdrop filter:
const createBlurBackdrop = () => {
    const blurBackdrop = document.createElement('div');
    blurBackdrop.classList.add('blur-backdrop');
    const wrapper = document.querySelector('.wrapper');
    wrapper.appendChild(blurBackdrop);
}

const removeBlurBackdrop = () => {
    const blurBackdrop = document.querySelector('.blur-backdrop');
    blurBackdrop.remove();
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

const renderNow = () => {
    // outline the 'now' button:
    outlineNavButton('now');

    // create array of only items with a 'now' priority:
    const nowItems = (0,_list_js__WEBPACK_IMPORTED_MODULE_0__.getNow)();

    renderItems(nowItems);

    updateCurrentView('now');

    localStorage.setItem('currentView', 'now');
}

const renderLater = () => {
    
    // outline the 'later' button:
    outlineNavButton('later');

    // create array of only items with a 'later' priority:
    const laterItems = (0,_list_js__WEBPACK_IMPORTED_MODULE_0__.getLater)();

    renderItems(laterItems);

    updateCurrentView('later');

    localStorage.setItem('currentView', 'later');
}

const renderAll = () => {

    // outline the 'all' button:
    outlineNavButton('all');

    // create an array of all current items:
    const allItems = (0,_list_js__WEBPACK_IMPORTED_MODULE_0__.getAll)();
 
    renderItems(allItems);

    updateCurrentView('all');

    localStorage.setItem('currentView', 'all');
}

const renderStoredView = () => {
    const storedView = localStorage.getItem('currentView');
    if (storedView === 'now') {
        renderNow();
    } else if (storedView === 'later') {
        renderLater();
    } else if (storedView === 'all') {
        renderAll();
    } else {
        renderNow();
    }
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
    const everything = document.querySelectorAll('body *');
    everything.forEach(element => {
        element.classList.add('dark');
    });
    displayMode = 'dark';
    localStorage.setItem('displayMode', 'dark');
    styleDarkIcon();
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
    localStorage.setItem('displayMode', 'light');
    styleLightIcon();
}

const retrieveStoredDisplayMode = () => {
    const displayMode = localStorage.getItem('displayMode');
    if (displayMode === 'dark') {
        switchToDark();
    } else if (displayMode === 'light') {
        switchToLight();
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYSxXQUFXLFlBQVksWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sT0FBTyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsVUFBVSxPQUFPLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxhQUFhLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8s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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLDJDQUFTO0FBQ25EOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyx5Q0FBTztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSw0REFBZ0I7QUFDcEI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLG9EQUFVOztBQUVkO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxrREFBUTtBQUNaLElBQUksa0RBQVE7QUFDWjtBQUNBLFFBQVEsa0RBQVE7QUFDaEIsTUFBTTtBQUNOLFFBQVEsa0RBQVE7QUFDaEI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EscURBQXFELEtBQUs7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsZ0RBQU07O0FBRTNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELHNEQUFtQjtBQUMzRTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0Esc0RBQXNELG9EQUFpQjtBQUN2RTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QywyQ0FBUTtBQUNqRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsNENBQVU7QUFDekQ7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCw0Q0FBVTtBQUM1RDtBQUNBO0FBQ0EsZ0JBQWdCLHFGQUF5QztBQUN6RDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLCtEQUFtQjs7QUFFM0I7QUFDQSxRQUFRLCtEQUFtQjtBQUMzQixLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLDhEQUFrQjtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsZ0RBQU07O0FBRTNCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsa0RBQVE7O0FBRS9COztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixnREFBTTtBQUMzQjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EscUNBQXFDLHNEQUFtQjtBQUN4RDs7QUFFQTtBQUNBO0FBQ0EscUNBQXFDLG9EQUFpQjtBQUN0RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdEQUFjO0FBQ2xCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsNENBQVU7QUFDN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDLGtDQUFrQyx3REFBYztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsNENBQVU7QUFDaEQ7QUFDQTs7QUFFQSxJQUFJLDJFQUErQjs7QUFFbkMsSUFBSSxzRUFBMEI7QUFDOUI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyw0Q0FBVTtBQUM3QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksaUVBQXFCOztBQUV6QixJQUFJLGlFQUFxQjs7QUFFekI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9ib2R5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9lZGl0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvbGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvbGlzdGVuLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9wYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJmb250L21ham9yLW1vbm8vbWFqb3ItbW9uby50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCJmb250L3N1YmxpbWEvc3VibGltYS1saWdodC5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCJmb250L3N1YmxpbWEvc3VibGltYS1leHRyYS1ib2xkLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tcnZ2OiBjYWxjKDFyZW0gKyAxdmggKyAxdncpO1xcblxcblxcdC0tYmx1ZTogIzJFNTE2OTtcXG4gICAgLS1ibHVlLWdyYXk6ICM1RTY4NkQ7XFxuICAgIC0tYnJvd246ICM2RjU3NDY7XFxuICAgIC0tYnJvd24tbXV0ZWQ6ICM2MzU4NEM7XFxuICAgIC0tYnJvd24tdGFuOiAjQTU4Rjg1O1xcbiAgICAtLWZvcmVzdC1ncmVlbjogIzRENjYzRTtcXG4gICAgLS1ncmVlbi1icm93bjogIzVGNTYzRjtcXG4gICAgLS1ncmF5LXRhbjogI0M5QkJBMztcXG4gICAgLS10YW4tZ3JheTogI0QxQzlCQTtcXG4gICAgLS1vZmYtd2hpdGU6ICNFNEQ5QzU7XFxuICAgIC0tb3JhbmdlLXllbGxvdzogI0UxQjI3MDtcXG4gICAgLS1vcmFuZ2UtdGFuOiAjQ0RBODg1O1xcbiAgICAtLXJlZDogI0FDM0EzRTtcXG4gICAgLS1zcGVjaWFsLXJlZDogIzgyNEU0QTtcXG4gICAgLS10YW46ICNEMkJDOUI7XFxuXFxuXFx0LS10aXRsZS1mb290ZXItY29sb3I6ICNiYThlNWVkZTtcXG5cXHQtLW5hdi1iZzogI2U0ZDljNTc0O1xcblxcdC0tbm93LWJ1dHRvbjogIzc0OWM1ZDtcXG5cXHQtLWxhdGVyLWJ1dHRvbjogI2I1NmM2NztcXG5cXHQtLWFsbC1idXR0b246ICNlMGE4NWJjMjtcXG5cXHQtLWJ1dHRvbi1vdXRsaW5lOiAjZjA5OTFmZDU7XFxuXFx0LS1pbnB1dC1mb2N1cy1vdXRsaW5lOiAjZTU5ODJkO1xcblxcdC0taW5wdXQtdmFsaWQtb3V0bGluZTojNEQ2NjNFO1xcblxcdC0tbWFpbi1iZzogI2UxY2ZhZTk3O1xcblxcdC0taXRlbS1iZzogIzIwODZjYTkyO1xcblxcdC0tbm93LWl0ZW0tYmc6ICM2MjljNDA3YztcXG5cXHQtLWxhdGVyLWl0ZW0tYmc6ICNkYTg2ODBjMTtcXG5cXHQtLWRlc2NyaXB0aW9uLWJnOiAjZDhmMmZmOTU7XFxuXFx0LS1hZGQtaXRlbS1idXR0b246ICNiYThkNWU4NTtcXG5cXHQtLWZvcm0tYmc6ICNmMGQ3YTk7XFxuXFx0LS1wcmlvcml0eS1idXR0b24tZGVmYXVsdDogI2M4YjVhMjg1O1xcblxcdC0tZm9ybS1idXR0b246ICNiYThkNWU4NTtcXG5cXHQtLWZvcm0taW5wdXQtYmc6ICNGM0VFRTU7XFxuXFx0LS1zdWJtaXQtYnV0dG9uLWJnOiAjODdiNmQ1YjQ7XFxuXFx0LS1jbG9zZS1idXR0b246ICM5ODZmNDQ3MTtcXG5cXHQtLWRpc3BsYXktaWNvbjogY2FsYyh2YXIoLS1ydnYpKTtcXG5cXG5cXHQtLWRhcmstdGV4dDogI2RkZDJiZjtcXG5cXHQtLWRhcmstYm9yZGVyOiAjMjcyNDIwO1xcblxcdC0tZGFyay10aXRsZS1mb290ZXItY29sb3I6ICMyMDFjMTlkZTtcXG5cXHQtLWRhcmstbmF2LWJnOiAjMjMyMDFjYzM7XFxuXFx0LS1kYXJrLW5vdy1idXR0b246ICMzODRhMmRkYTtcXG5cXHQtLWRhcmstbGF0ZXItYnV0dG9uOiAjOGU1NjUyO1xcblxcdC0tZGFyay1hbGwtYnV0dG9uOiAjZDQ5ZjUzOWM7XFxuXFx0LS1kYXJrLWJ1dHRvbi1vdXRsaW5lOiAjZWU5ZjMyY2E7XFxuXFx0LS1kYXJrLWlucHV0LWZvY3VzLW91dGxpbmU6ICNlZTlmMzJjYTtcXG5cXHQtLWRhcmstaW5wdXQtdmFsaWQtb3V0bGluZTojNEQ2NjNFO1xcblxcdC0tZGFyay1tYWluLWJnOiAjMjQyMTFkYTE7XFxuXFx0LS1kYXJrLWl0ZW0tYmc6ICMxMjNjNTg5MjtcXG5cXHQtLWRhcmstbm93LWl0ZW0tYmc6IHJnYmEoNDYsIDgwLCAyOCwgMC41MjcpO1xcblxcdC0tZGFyay1sYXRlci1pdGVtLWJnOiAjNzU0NzQzYjI7XFxuXFx0LS1kYXJrLWFkZC1pdGVtLWJ1dHRvbjogIzgxNWUzNjcwO1xcblxcdC0tZGFyay1mb3JtLWJnOiAjNDIzZDM4O1xcblxcdC0tZGFyay1wcmlvcml0eS1idXR0b24tZGVmYXVsdDogIzhiNzc2Mjg1O1xcblxcdC0tZGFyay1mb3JtLWJ1dHRvbjogI2JhOGQ1ZTg1O1xcblxcdC0tZGFyay1mb3JtLWlucHV0LWJnOiAjYWJhNjlhO1xcblxcdC0tZGFyay1zdWJtaXQtYnV0dG9uLWJnOiAjNjY4ZGE4YjQ7XFxuXFx0LS1kYXJrLWNsb3NlLWJ1dHRvbjogIzk2ODU3Mzg1O1xcblxcblxcdHRvdWNoLWFjdGlvbjogcGFuLXggcGFuLXk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcblxcdGZvbnQtZmFtaWx5OiAnTWFqb3IgTW9ubyc7XFxuXFx0c3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogJ1N1YmxpbWEnO1xcblxcdHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6ICdTdWJsaW1hIEJvbGQnO1xcblxcdHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcdHdpZHRoOiAxMDB2dztcXG59XFxuXFxuLndyYXBwZXIge1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0b3ZlcmZsb3cteDogaGlkZGVuO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmhlYWRlciB7XFxuXFx0aGVpZ2h0OiAxNXZoO1xcblxcdG1pbi1oZWlnaHQ6IGNhbGMoMy4yKnZhcigtLXJ2dikpO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRpdGxlIHtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdG1pbi1oZWlnaHQ6IGNhbGModmFyKC0tcnZ2KSk7XFxuXFx0ZmxleDogMTtcXG5cXHRvdmVyZmxvdy14OiBoaWRkZW47XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogY2FsYygwLjYqdmFyKC0tcnZ2KSk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGl0bGUtZm9vdGVyLWNvbG9yKTtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi50aXRsZS10ZXh0IHtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0Zm9udC1mYW1pbHk6ICdTdWJsaW1hJztcXG5cXHRmb250LXNpemU6IGNhbGMoMC40NSp2YXIoLS1ydnYpKTtcXG5cXHRsZXR0ZXItc3BhY2luZzogY2FsYygwLjEqdmFyKC0tcnZ2KSk7XFxuXFx0dGV4dC1pbmRlbnQ6IGNhbGMoMC4xKnZhcigtLXJ2dikpO1xcbn1cXG5cXG4ubGlnaHQtbW9kZSxcXG4uZGFyay1tb2RlIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0aGVpZ2h0OiB2YXIoLS1kaXNwbGF5LWljb24pO1xcblxcdHdpZHRoOiB2YXIoLS1kaXNwbGF5LWljb24pO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxpZ2h0LW1vZGUuZGFyayxcXG4uZGFyay1tb2RlLmRhcmsge1xcblxcdGZpbHRlcjogaW52ZXJ0KDgwJSk7XFxufVxcblxcbi5saWdodC1tb2RlIGltZyxcXG4uZGFyay1tb2RlIGltZyB7XFxuXFx0aGVpZ2h0OiA4MCU7XFxuXFx0d2lkdGg6IDgwJTtcXG59XFxuXFxuLnNlbGVjdGVkLWRpc3BsYXkubGlnaHQtbW9kZSxcXG4uc2VsZWN0ZWQtZGlzcGxheS5kYXJrLW1vZGUge1xcblxcdHRyYW5zaXRpb246IDAuMjVzIGxpbmVhcjtcXG59XFxuXFxuLnNlbGVjdGVkLWRpc3BsYXkubGlnaHQtbW9kZSBpbWcge1xcblxcdGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDVweCB2YXIoLS1yZWQpKTtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbi5zZWxlY3RlZC1kaXNwbGF5LmRhcmstbW9kZSBpbWcge1xcblxcdGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDVweCBibGFjayk7XFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG5cXG4ubmF2IHtcXG5cXHRmbGV4OiAyO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRmb250LWZhbWlseTogJ01ham9yIE1vbm8nO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1iZyk7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4ubmF2IGRpdiB7XFxuXFx0Zm9udC1zaXplOiBjYWxjKDAuNip2YXIoLS1ydnYpKTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0d2lkdGg6IGNhbGMoMyp2YXIoLS1ydnYpKTtcXG5cXHRoZWlnaHQ6IGNhbGModmFyKC0tcnZ2KSk7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTUlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5ub3cge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vdy1idXR0b24pO1xcbn1cXG5cXG4ubm93LFxcbi5hbGwge1xcblxcdGxldHRlci1zcGFjaW5nOiBjYWxjKDAuMyp2YXIoLS1ydnYpKTtcXG5cXHR0ZXh0LWluZGVudDogY2FsYygwLjMqdmFyKC0tcnZ2KSk7XFxufVxcblxcbi5sYXRlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGF0ZXItYnV0dG9uKTtcXG5cXHRsZXR0ZXItc3BhY2luZzogY2FsYygwLjEqdmFyKC0tcnZ2KSk7XFxuXFx0dGV4dC1pbmRlbnQ6IGNhbGMoMC4xKnZhcigtLXJ2dikpO1xcbn1cXG5cXG4uYWxsIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbGwtYnV0dG9uKTtcXG59XFxuXFxuLnNlbGVjdGVkIHtcXG5cXHRib3gtc2hhZG93OiAwIDAgMCAzcHggdmFyKC0tYnV0dG9uLW91dGxpbmUpO1xcbn1cXG5cXG4ubWFpbiB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGZsZXg6IGF1dG87XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0cGFkZGluZzogY2FsYygwLjUqdmFyKC0tcnZ2KSkgMDtcXG5cXHRnYXA6IGNhbGMoMC42KnZhcigtLXJ2dikpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmcpO1xcbn1cXG5cXG4uZGlzcGxheWVkLWl0ZW0ge1xcblxcdHdpZHRoOiA5MHZ3O1xcblxcdG1heC13aWR0aDogY2FsYygxNSp2YXIoLS1ydnYpKTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0Zm9udC1mYW1pbHk6ICdTdWJsaW1hJztcXG5cXHRmb250LXNpemU6IGNhbGMoMC42KnZhcigtLXJ2dikpO1xcblxcdHBhZGRpbmc6IGNhbGMoMC4xKnZhcigtLXJ2dikpIGNhbGMoMC4zKnZhcigtLXJ2dikpO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcblxcdGJvcmRlci1yYWRpdXM6IGNhbGMoMC44KnZhcigtLXJ2dikpO1xcblxcdG1hcmdpbjogMCBjYWxjKDAuNyp2YXIoLS1ydnYpKTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogY2FsYygxLjQqdmFyKC0tcnZ2KSkgMWZyIGNhbGModmFyKC0tcnZ2KSkgY2FsYyh2YXIoLS1ydnYpKTtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG5cXHRncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiY2hlY2tib3ggdGl0bGUgZWRpdCBleHBhbmRcXFwiO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWl0ZW0tYmcpO1xcbn1cXG5cXG4uZGlzcGxheWVkLWl0ZW0ubm93LWl0ZW0ge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vdy1pdGVtLWJnKTtcXG59XFxuXFxuLmRpc3BsYXllZC1pdGVtLmxhdGVyLWl0ZW0ge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxhdGVyLWl0ZW0tYmcpO1xcbn1cXG5cXG4uZXhwYW5kZWQtaXRlbSB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGNhbGMoMS40KnZhcigtLXJ2dikpIDFmciBjYWxjKHZhcigtLXJ2dikpIGNhbGModmFyKC0tcnZ2KSk7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiBjYWxjKDEuMip2YXIoLS1ydnYpKSAxZnI7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuXFx0XFx0XFxcImNoZWNrYm94IHRpdGxlIGVkaXQgZXhwYW5kXFxcIlxcblxcdFxcdFxcXCIuIGRlc2NyaXB0aW9uIC4gZGVsZXRlXFxcIjtcXG59XFxuXFxuLmV4cGFuZGVkLWl0ZW0gLml0ZW0tZGVzY3JpcHRpb24ge1xcblxcdG1hcmdpbi1yaWdodDogY2FsYygwLjMqdmFyKC0tcnZ2KSk7XFxuXFx0bWFyZ2luLWJvdHRvbTogY2FsYygwLjMqdmFyKC0tcnZ2KSk7XFxufVxcblxcbi5leHBhbmRlZC1pdGVtIC5pdGVtLXRpdGxlIHtcXG5cXHRjdXJzb3I6IGF1dG87XFxufVxcblxcbi5jb21wbGV0ZWQtaXRlbSB7XFxuXFx0ZmlsdGVyOiBncmF5c2NhbGUoNzAlKTtcXG59XFxuXFxuLmNvbXBsZXRlZC1pdGVtIC5pdGVtLXRpdGxlIHtcXG5cXHRmb250LXN0eWxlOiBpdGFsaWM7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgY2FsYygwLjA0KnZhcigtLXJ2dikpIGJsYWNrO1xcblxcdHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogbm9uZTtcXG5cXHR0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IGNhbGMoLTAuMip2YXIoLS1ydnYpKTtcXG59XFxuXFxuLmNvbXBsZXRlZC1pdGVtIC5pdGVtLWRlc2NyaXB0aW9uIHtcXG5cXHRmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5kaXNwbGF5ZWQtaXRlbS5hZGQtaXRlbS1idXR0b24ge1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0bWFyZ2luOiAwO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hZGQtaXRlbS1idXR0b24pO1xcblxcdGhlaWdodDogY2FsYygxLjUqdmFyKC0tcnZ2KSk7XFxuXFx0d2lkdGg6IGNhbGMoMS41KnZhcigtLXJ2dikpO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFkZC1pdGVtLWJ1dHRvbiBpbWcge1xcblxcdG1heC1oZWlnaHQ6IDEwMCU7XFxuXFx0bWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uYWRkLWZvcm0sXFxuLmVkaXQtZm9ybSB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0ei1pbmRleDogMztcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0dG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbi5hZGQtZm9ybS1pdHNlbGYsXFxuLmVkaXQtZm9ybS1pdHNlbGYge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvcm0tYmcpO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0d2lkdGg6IDkwdnc7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdG1heC13aWR0aDogY2FsYygxNSp2YXIoLS1ydnYpKTtcXG5cXHRmb250LWZhbWlseTogJ1N1YmxpbWEnO1xcblxcdGZvbnQtc2l6ZTogY2FsYygwLjYqdmFyKC0tcnZ2KSk7XFxuXFx0cGFkZGluZzogY2FsYygwLjEqdmFyKC0tcnZ2KSkgY2FsYygwLjMqdmFyKC0tcnZ2KSk7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuXFx0Ym9yZGVyLXJhZGl1czogY2FsYygwLjgqdmFyKC0tcnZ2KSk7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiBjYWxjKDEuNyp2YXIoLS1ydnYpKSBjYWxjKHZhcigtLXJ2dikpIGNhbGMoNCp2YXIoLS1ydnYpKSBjYWxjKHZhcigtLXJ2dikpIGNhbGMoMi4yKnZhcigtLXJ2dikpO1xcblxcdHJvdy1nYXA6IGNhbGMoMC4yNSp2YXIoLS1ydnYpKTtcXG5cXHRncmlkLXRlbXBsYXRlLWFyZWFzOlxcblxcdFxcdFxcXCJmb3JtLXRpdGxlXFxcIlxcblxcdFxcdFxcXCJ0aXRsZS1zZWN0aW9uXFxcIlxcblxcdFxcdFxcXCJkZXNjcmlwdGlvbi1zZWN0aW9uXFxcIlxcblxcdFxcdFxcXCJwcmlvcml0eS1zZWN0aW9uXFxcIlxcblxcdFxcdFxcXCJzdWJtaXQtYnV0dG9uXFxcIjtcXG59XFxuXFxuLmVkaXQtZm9ybS10aXRsZS10ZXh0IHtcXG5cXHRtYXgtaGVpZ2h0OiBjYWxjKDEuNyp2YXIoLS1ydnYpKTtcXG5cXHRtYXgtd2lkdGg6IGNhbGMoMTIqdmFyKC0tcnZ2KSk7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xcblxcdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcblxcdG1hcmdpbi1yaWdodDogY2FsYyh2YXIoLS1ydnYpKTtcXG59XFxuXFxuLmJsdXItYmFja2Ryb3Age1xcblxcdHotaW5kZXg6IDI7XFxuXFx0cG9zaXRpb246IGZpeGVkO1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxuXFx0bWluLXdpZHRoOiAyMDB2dztcXG5cXHRoZWlnaHQ6IDIwMHZoO1xcblxcdGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcblxcdC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxufVxcblxcbi5mb3JtLXRpdGxlIHtcXG5cXHRtYXJnaW46IDAgMSU7XFxuXFx0bWF4LXdpZHRoOiA5MHZ3O1xcblxcdGdyaWQtYXJlYTogZm9ybS10aXRsZTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb3JtLXRpdGxlLXRleHQge1xcblxcdGZvbnQtc2l6ZTogY2FsYygwLjcqdmFyKC0tcnZ2KSk7XFxufVxcblxcbi5mb3JtLXRpdGxlLXRleHQ6aG92ZXIge1xcblxcdGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmNsb3NlLWJ1dHRvbiB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsb3NlLWJ1dHRvbik7XFxuXFx0bWFyZ2luLWxlZnQ6IGF1dG87XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuXFx0aGVpZ2h0OiBjYWxjKDAuOSp2YXIoLS1ydnYpKTtcXG5cXHR3aWR0aDogY2FsYygwLjkqdmFyKC0tcnZ2KSk7XFxuXFx0Ym9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1ydnYpKTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jbG9zZS1idXR0b24gaW1nIHtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi50aXRsZS1zZWN0aW9uIHtcXG5cXHRncmlkLWFyZWE6IHRpdGxlLXNlY3Rpb247XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGNhbGMoMy41KnZhcigtLXJ2dikpIDFmcjtcXG59XFxuXFxuLnRpdGxlLXNlY3Rpb24gbGFiZWwge1xcblxcdGZvbnQtc2l6ZTogY2FsYygwLjUqdmFyKC0tcnZ2KSk7XFxufVxcblxcbi50aXRsZS1zZWN0aW9uIGlucHV0LFxcbi5kZXNjcmlwdGlvbi1zZWN0aW9uIHRleHRhcmVhIHtcXG5cXHR3aWR0aDogOTMlO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvcm0taW5wdXQtYmcpO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcblxcdGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0tcnZ2KSk7XFxuXFx0cGFkZGluZy1sZWZ0OiAxMHB4O1xcblxcdGZvbnQtZmFtaWx5OiAnU3VibGltYSc7XFxuXFx0Zm9udC1zaXplOiBjYWxjKDAuNDUqdmFyKC0tcnZ2KSk7XFxufVxcblxcbi5kZXNjcmlwdGlvbi1zZWN0aW9uIHRleHRhcmVhIHtcXG5cXHRib3JkZXItcmFkaXVzOiBjYWxjKDAuNSp2YXIoLS1ydnYpKTtcXG5cXHRyZXNpemU6IG5vbmU7XFxufVxcblxcbmlucHV0OmZvY3VzLFxcbnRleHRhcmVhOmZvY3VzIHtcXG5cXHRhcHBlYXJhbmNlOiBub25lO1xcblxcdG91dGxpbmU6IG5vbmU7XFxuXFx0Ym94LXNoYWRvdzogMCAwIDAgM3B4IHZhcigtLWlucHV0LWZvY3VzLW91dGxpbmUpO1xcbn1cXG5cXG5pbnB1dDpub3QoOmZvY3VzKSxcXG50ZXh0YXJlYTpub3QoOmZvY3VzKSB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24tc2VjdGlvbiB7XFxuXFx0Z3JpZC1hcmVhOiBkZXNjcmlwdGlvbi1zZWN0aW9uO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBjYWxjKDMuNSp2YXIoLS1ydnYpKSAxZnI7XFxufVxcblxcbi5kZXNjcmlwdGlvbi1zZWN0aW9uIGxhYmVsIHtcXG5cXHRmb250LXNpemU6IGNhbGMoMC41KnZhcigtLXJ2dikpO1xcbn1cXG5cXG4ucHJpb3JpdHktc2VjdGlvbiB7XFxuXFx0bWFyZ2luLXRvcDogMnB4O1xcblxcdGdyaWQtYXJlYTogcHJpb3JpdHktc2VjdGlvbjtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogY2FsYygzLjUqdmFyKC0tcnZ2KSkgMWZyIDFmcjtcXG59XFxuXFxuLnByaW9yaXR5LWxhYmVsIHtcXG5cXHRmb250LXNpemU6IGNhbGMoMC41KnZhcigtLXJ2dikpO1xcbn1cXG5cXG4ucmFkaW8tb3B0aW9uIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0Zm9udC1mYW1pbHk6ICdNYWpvciBNb25vJztcXG5cXHR3aWR0aDogY2FsYygzKnZhcigtLXJ2dikpO1xcblxcdGhlaWdodDogY2FsYyh2YXIoLS1ydnYpKTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG5cXHRib3JkZXItcmFkaXVzOiAxNSU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmlvcml0eS1idXR0b24tZGVmYXVsdCk7XFxufVxcblxcbi5yYWRpby1vcHRpb24gbGFiZWwge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5vdy1vcHRpb24ge1xcblxcdGp1c3RpZnktc2VsZjogY2VudGVyO1xcblxcdGxldHRlci1zcGFjaW5nOiBjYWxjKDAuMyp2YXIoLS1ydnYpKTtcXG5cXHR0ZXh0LWluZGVudDogY2FsYygwLjMqdmFyKC0tcnZ2KSk7XFxufVxcblxcbi5ub3ctb3B0aW9uLnNlbGVjdGVkLXByaW9yaXR5IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ub3ctYnV0dG9uKTtcXG5cXHRib3gtc2hhZG93OiAwIDAgMCAzcHggdmFyKC0tYnV0dG9uLW91dGxpbmUpO1xcbn1cXG5cXG4ubGF0ZXItb3B0aW9uIHtcXG5cXHRqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG5cXHRsZXR0ZXItc3BhY2luZzogY2FsYygwLjEqdmFyKC0tcnZ2KSk7XFxuXFx0dGV4dC1pbmRlbnQ6IGNhbGMoMC4xKnZhcigtLXJ2dikpO1xcbn1cXG5cXG4ubGF0ZXItb3B0aW9uLnNlbGVjdGVkLXByaW9yaXR5IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sYXRlci1idXR0b24pO1xcblxcdGJveC1zaGFkb3c6IDAgMCAwIDNweCB2YXIoLS1idXR0b24tb3V0bGluZSk7XFxufVxcblxcbi5yYWRpby1pbnB1dCB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdG1hcmdpbjogMDtcXG5cXHRhcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4uc3VibWl0LWJ1dHRvbiB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGdyaWQtYXJlYTogc3VibWl0LWJ1dHRvbjtcXG5cXHRmb250LWZhbWlseTogJ1N1YmxpbWEnO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1Ym1pdC1idXR0b24tYmcpO1xcblxcdGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG5cXHRoZWlnaHQ6IGNhbGMoMS41KnZhcigtLXJ2dikpO1xcblxcdHdpZHRoOiA5NSU7XFxuXFx0Ym9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1ydnYpKTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zdWJtaXQtYnV0dG9uIGltZyB7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uZGlzcGxheWVkLWl0ZW0gaW1nIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2hlY2tib3ggaW1nLFxcbi5leHBhbmQgaW1nIHtcXG5cXHR3aWR0aDogY2FsYyh2YXIoLS1ydnYpKTtcXG59XFxuXFxuLmVkaXQgaW1nIHtcXG5cXHR3aWR0aDogY2FsYygwLjgqdmFyKC0tcnZ2KSk7XFxufVxcblxcbi5jaGVja2JveCB7XFxuXFx0Z3JpZC1hcmVhOiBjaGVja2JveDtcXG5cXHRtYXJnaW4tbGVmdDogY2FsYygwLjIqdmFyKC0tcnZ2KSk7XFxufVxcblxcbi5pdGVtLXRpdGxlIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0Ym90dG9tOiAycHg7XFxuXFx0Z3JpZC1hcmVhOiB0aXRsZTtcXG5cXHRqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbn1cXG5cXG4uZXhwYW5kYWJsZS10aXRsZSB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZWRpdCB7XFxuXFx0Z3JpZC1hcmVhOiBlZGl0O1xcbn1cXG5cXG4uZXhwYW5kIHtcXG5cXHRncmlkLWFyZWE6IGV4cGFuZDtcXG59XFxuXFxuLnNocmluayB7XFxuXFx0Z3JpZC1hcmVhOiBleHBhbmQ7XFxuXFx0YXNwZWN0LXJhdGlvOiAxIC8gMTtcXG59XFxuXFxuLnNocmluayBpbWcge1xcblxcdGhlaWdodDogY2FsYyh2YXIoLS1ydnYpKTtcXG59XFxuXFxuLml0ZW0tZGVzY3JpcHRpb24ge1xcblxcdGJvcmRlci1yYWRpdXM6IDNweDtcXG5cXHRmb250LXN0eWxlOiBpdGFsaWM7XFxuXFx0Z3JpZC1hcmVhOiBkZXNjcmlwdGlvbjtcXG5cXHRhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcblxcdGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcXG5cXHRmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLmV4cGFuZGVkLWl0ZW0gLmRlbGV0ZSB7XFxuXFx0Z3JpZC1hcmVhOiBkZWxldGU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuXFx0bWFyZ2luLWJvdHRvbTogY2FsYygwLjMqdmFyKC0tcnZ2KSk7XFxufVxcblxcbi5kZWxldGUgaW1nIHtcXG5cXHRoZWlnaHQ6IGNhbGModmFyKC0tcnZ2KSk7XFxufVxcblxcbmZvb3RlciB7XFxuXFx0aGVpZ2h0OiA1dmg7XFxuXFx0bWluLWhlaWdodDogY2FsYygwLjgqdmFyKC0tcnZ2KSk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGl0bGUtZm9vdGVyLWNvbG9yKTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Zm9udC1zaXplOiBjYWxjKDAuNSp2YXIoLS1ydnYpKTtcXG5cXHRib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XFxuXFx0Zm9udC1mYW1pbHk6ICdTdWJsaW1hJztcXG5cXHRmb250LXNpemU6IGNhbGMoMC40KnZhcigtLXJ2dikpO1xcblxcdGxldHRlci1zcGFjaW5nOiBjYWxjKDAuMSp2YXIoLS1ydnYpKTtcXG5cXHR0ZXh0LWluZGVudDogY2FsYygwLjEqdmFyKC0tcnZ2KSk7XFxufVxcblxcbi8qIGRhcmsgbW9kZSBzdHlsaW5nOiAqL1xcblxcbi53cmFwcGVyLmRhcmsge1xcblxcdGNvbG9yOiB2YXIoLS1kYXJrLXRleHQpO1xcbn1cXG5cXG4udGl0bGUuZGFyayB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay10aXRsZS1mb290ZXItY29sb3IpO1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kYXJrLWJvcmRlcik7XFxufVxcblxcbi5uYXYuZGFyayB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1uYXYtYmcpO1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kYXJrLWJvcmRlcik7XFxufVxcblxcbi5uYXYuZGFyayBkaXYge1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstYm9yZGVyKTtcXG59XFxuXFxuLm5vdy5kYXJrIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLW5vdy1idXR0b24pO1xcbn1cXG5cXG4ubGF0ZXIuZGFyayB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1sYXRlci1idXR0b24pO1xcbn1cXG5cXG4uYWxsLmRhcmsge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYWxsLWJ1dHRvbik7XFxufVxcblxcbi5zZWxlY3RlZC5kYXJrIHtcXG5cXHRib3gtc2hhZG93OiAwIDAgMCAzcHggdmFyKC0tZGFyay1idXR0b24tb3V0bGluZSk7XFxufVxcblxcbi5tYWluLmRhcmsge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstbWFpbi1iZyk7XFxufVxcblxcbi5kaXNwbGF5ZWQtaXRlbS5kYXJrIHtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWJvcmRlcik7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1pdGVtLWJnKTtcXG59XFxuXFxuLmRpc3BsYXllZC1pdGVtLm5vdy1pdGVtLmRhcmsge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstbm93LWl0ZW0tYmcpO1xcbn1cXG5cXG4uZGlzcGxheWVkLWl0ZW0ubGF0ZXItaXRlbS5kYXJrIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWxhdGVyLWl0ZW0tYmcpO1xcbn1cXG5cXG4uY29tcGxldGVkLWl0ZW0gLml0ZW0tdGl0bGUuZGFyayB7XFxuXFx0ZmlsdGVyOiBicmlnaHRuZXNzKDgwJSk7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgY2FsYygwLjA0KnZhcigtLXJ2dikpIHZhcigtLWRhcmstdGV4dCk7XFxuXFx0dGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBub25lO1xcbn1cXG5cXG4uYWRkLWZvcm0taXRzZWxmLmRhcmssXFxuLmVkaXQtZm9ybS1pdHNlbGYuZGFyayB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1mb3JtLWJnKTtcXG59XFxuXFxuLmNsb3NlLWJ1dHRvbi5kYXJrIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNsb3NlLWJ1dHRvbik7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1ib3JkZXIpO1xcbn1cXG5cXG4udGl0bGUtc2VjdGlvbi5kYXJrIGlucHV0LFxcbi5kZXNjcmlwdGlvbi1zZWN0aW9uLmRhcmsgdGV4dGFyZWEge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZm9ybS1pbnB1dC1iZyk7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1ib3JkZXIpO1xcbn1cXG5cXG5pbnB1dC5kYXJrOmZvY3VzLFxcbnRleHRhcmVhLmRhcms6Zm9jdXMge1xcblxcdGJveC1zaGFkb3c6IDAgMCAwIDNweCB2YXIoLS1kYXJrLWlucHV0LWZvY3VzLW91dGxpbmUpO1xcbn1cXG5cXG4ucmFkaW8tb3B0aW9uLmRhcmsge1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstYm9yZGVyKTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLXByaW9yaXR5LWJ1dHRvbi1kZWZhdWx0KTtcXG59XFxuXFxuLm5vdy1vcHRpb24uc2VsZWN0ZWQtcHJpb3JpdHkuZGFyayB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ub3ctYnV0dG9uKTtcXG5cXHRib3gtc2hhZG93OiAwIDAgMCAzcHggdmFyKC0tZGFyay1idXR0b24tb3V0bGluZSk7XFxufVxcblxcbi5sYXRlci1vcHRpb24uc2VsZWN0ZWQtcHJpb3JpdHkuZGFyayB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1sYXRlci1idXR0b24pO1xcblxcdGJveC1zaGFkb3c6IDAgMCAwIDNweCB2YXIoLS1kYXJrLWJ1dHRvbi1vdXRsaW5lKTtcXG59XFxuXFxuLmRpc3BsYXllZC1pdGVtLmFkZC1pdGVtLWJ1dHRvbi5kYXJrIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWFkZC1pdGVtLWJ1dHRvbik7XFxufVxcblxcbi5zdWJtaXQtYnV0dG9uLmRhcmsge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstc3VibWl0LWJ1dHRvbi1iZyk7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1ib3JkZXIpO1xcbn1cXG5cXG5mb290ZXIuZGFyayB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay10aXRsZS1mb290ZXItY29sb3IpO1xcblxcdGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWJvcmRlcik7XFxufVxcblxcbi8qIGRlc2t0b3AgdmVyc2lvbjogKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc1MHB4KSB7XFxuXFxuXFx0Lm5hdiBkaXYge1xcblxcdFxcdHRyYW5zaXRpb246IDAuMDc1cyBsaW5lYXI7XFxuXFx0fVxcblxcblxcdC5uYXYgZGl2OmhvdmVyIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcblxcdH1cXG5cXG5cXHQuY2hlY2tib3gsXFxuXFx0LmVkaXQsXFxuXFx0LmV4cGFuZCxcXG5cXHQuc2hyaW5rLFxcblxcdC5kZWxldGUsXFxuXFx0LmFkZC1pdGVtLWJ1dHRvbixcXG5cXHQucmFkaW8tb3B0aW9uLFxcblxcdC5zdWJtaXQtYnV0dG9uLFxcblxcdC5jbG9zZS1idXR0b24ge1xcblxcdFxcdHRyYW5zaXRpb246IDAuMDc1cyBsaW5lYXI7XFxuXFx0fVxcblxcblxcdC5jaGVja2JveDpob3ZlciB7XFxuXFx0XFx0dHJhbnNmb3JtOiBzY2FsZSgxLjA3NSk7XFxuXFx0fVxcblxcblxcdC5lZGl0OmhvdmVyIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuXFx0fVxcblxcblxcdC5leHBhbmQ6aG92ZXIge1xcblxcdFxcdHRyYW5zZm9ybTogc2NhbGUoMS4yNSk7XFxuXFx0fVxcblxcblxcdC5zaHJpbms6aG92ZXIge1xcblxcdFxcdHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG5cXHR9XFxuXFxuXFx0LmRlbGV0ZTpob3ZlciB7XFxuXFx0XFx0dHJhbnNmb3JtOiBzY2FsZSgxLjA3NSk7XFxuXFx0fVxcblxcblxcdC5hZGQtaXRlbS1idXR0b246aG92ZXIge1xcblxcdFxcdHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuXFx0fVxcblxcblxcdC5yYWRpby1vcHRpb246aG92ZXIge1xcblxcdFxcdHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuXFx0fVxcblxcblxcdC5zdWJtaXQtYnV0dG9uOmhvdmVyIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xcblxcdH1cXG5cXG5cXHQuY2xvc2UtYnV0dG9uOmhvdmVyIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuXFx0fVxcblxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XFxuXFx0LmNvbXBsZXRlZC1pdGVtIC5pdGVtLXRpdGxlLFxcblxcdC5jb21wbGV0ZWQtaXRlbSAuaXRlbS10aXRsZS5kYXJrIHtcXG5cXHRcXHRmb250LXN0eWxlOiBpdGFsaWM7XFxuXFx0XFx0dGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuXFx0XFx0dGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBub25lO1xcblxcdFxcdHRleHQtdW5kZXJsaW5lLW9mZnNldDogMDtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XFxuXFx0Ym9keSB7XFxuXFx0XFx0bWluLWhlaWdodDogMTAwdmg7XFxuXFx0XFx0bWluLXdpZHRoOiAxMDB2dztcXG5cXHR9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7Ozs7Ozs7Ozs7Q0FhQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtBQUN6Qjs7QUFFQTtJQUNJLDZCQUE2Qjs7Q0FFaEMsZUFBZTtJQUNaLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lB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QywyQ0FBMkM7Q0FDM0Msb0NBQW9DO0FBQ3JDOztBQUVBOztDQUVDLHFEQUFxRDtBQUN0RDs7QUFFQTtDQUNDLG9DQUFvQztDQUNwQyxxREFBcUQ7QUFDdEQ7O0FBRUE7Q0FDQyx3Q0FBd0M7Q0FDeEMsZ0RBQWdEO0FBQ2pEOztBQUVBO0NBQ0MsMENBQTBDO0NBQzFDLGdEQUFnRDtBQUNqRDs7QUFFQTtDQUNDLDZDQUE2QztBQUM5Qzs7QUFFQTtDQUNDLDhDQUE4QztDQUM5QyxvQ0FBb0M7QUFDckM7O0FBRUE7Q0FDQyxnREFBZ0Q7Q0FDaEQsd0NBQXdDO0FBQ3pDOztBQUVBLHFCQUFxQjtBQUNyQjs7Q0FFQztFQUNDLHlCQUF5QjtDQUMxQjs7Q0FFQTtFQUNDLHNCQUFzQjtDQUN2Qjs7Q0FFQTs7Ozs7Ozs7O0VBU0MseUJBQXlCO0NBQzFCOztDQUVBO0VBQ0MsdUJBQXVCO0NBQ3hCOztDQUVBO0VBQ0MscUJBQXFCO0NBQ3RCOztDQUVBO0VBQ0Msc0JBQXNCO0NBQ3ZCOztDQUVBO0VBQ0MscUJBQXFCO0NBQ3RCOztDQUVBO0VBQ0MsdUJBQXVCO0NBQ3hCOztDQUVBO0VBQ0Msc0JBQXNCO0NBQ3ZCOztDQUVBO0VBQ0Msc0JBQXNCO0NBQ3ZCOztDQUVBO0VBQ0Msc0JBQXNCO0NBQ3ZCOztDQUVBO0VBQ0MscUJBQXFCO0NBQ3RCOztBQUVEOztBQUVBO0NBQ0M7O0VBRUMsa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3Qiw4QkFBOEI7RUFDOUIsd0JBQXdCO0NBQ3pCO0FBQ0Q7O0FBRUE7Q0FDQztFQUNDLGlCQUFpQjtFQUNqQixnQkFBZ0I7Q0FDakI7QUFDRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1ydnY6IGNhbGMoMXJlbSArIDF2aCArIDF2dyk7XFxuXFxuXFx0LS1ibHVlOiAjMkU1MTY5O1xcbiAgICAtLWJsdWUtZ3JheTogIzVFNjg2RDtcXG4gICAgLS1icm93bjogIzZGNTc0NjtcXG4gICAgLS1icm93bi1tdXRlZDogIzYzNTg0QztcXG4gICAgLS1icm93bi10YW46ICNBNThGODU7XFxuICAgIC0tZm9yZXN0LWdyZWVuOiAjNEQ2NjNFO1xcbiAgICAtLWdyZWVuLWJyb3duOiAjNUY1NjNGO1xcbiAgICAtLWdyYXktdGFuOiAjQzlCQkEzO1xcbiAgICAtLXRhbi1ncmF5OiAjRDFDOUJBO1xcbiAgICAtLW9mZi13aGl0ZTogI0U0RDlDNTtcXG4gICAgLS1vcmFuZ2UteWVsbG93OiAjRTFCMjcwO1xcbiAgICAtLW9yYW5nZS10YW46ICNDREE4ODU7XFxuICAgIC0tcmVkOiAjQUMzQTNFO1xcbiAgICAtLXNwZWNpYWwtcmVkOiAjODI0RTRBO1xcbiAgICAtLXRhbjogI0QyQkM5QjtcXG5cXG5cXHQtLXRpdGxlLWZvb3Rlci1jb2xvcjogI2JhOGU1ZWRlO1xcblxcdC0tbmF2LWJnOiAjZTRkOWM1NzQ7XFxuXFx0LS1ub3ctYnV0dG9uOiAjNzQ5YzVkO1xcblxcdC0tbGF0ZXItYnV0dG9uOiAjYjU2YzY3O1xcblxcdC0tYWxsLWJ1dHRvbjogI2UwYTg1YmMyO1xcblxcdC0tYnV0dG9uLW91dGxpbmU6ICNmMDk5MWZkNTtcXG5cXHQtLWlucHV0LWZvY3VzLW91dGxpbmU6ICNlNTk4MmQ7XFxuXFx0LS1pbnB1dC12YWxpZC1vdXRsaW5lOiM0RDY2M0U7XFxuXFx0LS1tYWluLWJnOiAjZTFjZmFlOTc7XFxuXFx0LS1pdGVtLWJnOiAjMjA4NmNhOTI7XFxuXFx0LS1ub3ctaXRlbS1iZzogIzYyOWM0MDdjO1xcblxcdC0tbGF0ZXItaXRlbS1iZzogI2RhODY4MGMxO1xcblxcdC0tZGVzY3JpcHRpb24tYmc6ICNkOGYyZmY5NTtcXG5cXHQtLWFkZC1pdGVtLWJ1dHRvbjogI2JhOGQ1ZTg1O1xcblxcdC0tZm9ybS1iZzogI2YwZDdhOTtcXG5cXHQtLXByaW9yaXR5LWJ1dHRvbi1kZWZhdWx0OiAjYzhiNWEyODU7XFxuXFx0LS1mb3JtLWJ1dHRvbjogI2JhOGQ1ZTg1O1xcblxcdC0tZm9ybS1pbnB1dC1iZzogI0YzRUVFNTtcXG5cXHQtLXN1Ym1pdC1idXR0b24tYmc6ICM4N2I2ZDViNDtcXG5cXHQtLWNsb3NlLWJ1dHRvbjogIzk4NmY0NDcxO1xcblxcdC0tZGlzcGxheS1pY29uOiBjYWxjKHZhcigtLXJ2dikpO1xcblxcblxcdC0tZGFyay10ZXh0OiAjZGRkMmJmO1xcblxcdC0tZGFyay1ib3JkZXI6ICMyNzI0MjA7XFxuXFx0LS1kYXJrLXRpdGxlLWZvb3Rlci1jb2xvcjogIzIwMWMxOWRlO1xcblxcdC0tZGFyay1uYXYtYmc6ICMyMzIwMWNjMztcXG5cXHQtLWRhcmstbm93LWJ1dHRvbjogIzM4NGEyZGRhO1xcblxcdC0tZGFyay1sYXRlci1idXR0b246ICM4ZTU2NTI7XFxuXFx0LS1kYXJrLWFsbC1idXR0b246ICNkNDlmNTM5YztcXG5cXHQtLWRhcmstYnV0dG9uLW91dGxpbmU6ICNlZTlmMzJjYTtcXG5cXHQtLWRhcmstaW5wdXQtZm9jdXMtb3V0bGluZTogI2VlOWYzMmNhO1xcblxcdC0tZGFyay1pbnB1dC12YWxpZC1vdXRsaW5lOiM0RDY2M0U7XFxuXFx0LS1kYXJrLW1haW4tYmc6ICMyNDIxMWRhMTtcXG5cXHQtLWRhcmstaXRlbS1iZzogIzEyM2M1ODkyO1xcblxcdC0tZGFyay1ub3ctaXRlbS1iZzogcmdiYSg0NiwgODAsIDI4LCAwLjUyNyk7XFxuXFx0LS1kYXJrLWxhdGVyLWl0ZW0tYmc6ICM3NTQ3NDNiMjtcXG5cXHQtLWRhcmstYWRkLWl0ZW0tYnV0dG9uOiAjODE1ZTM2NzA7XFxuXFx0LS1kYXJrLWZvcm0tYmc6ICM0MjNkMzg7XFxuXFx0LS1kYXJrLXByaW9yaXR5LWJ1dHRvbi1kZWZhdWx0OiAjOGI3NzYyODU7XFxuXFx0LS1kYXJrLWZvcm0tYnV0dG9uOiAjYmE4ZDVlODU7XFxuXFx0LS1kYXJrLWZvcm0taW5wdXQtYmc6ICNhYmE2OWE7XFxuXFx0LS1kYXJrLXN1Ym1pdC1idXR0b24tYmc6ICM2NjhkYThiNDtcXG5cXHQtLWRhcmstY2xvc2UtYnV0dG9uOiAjOTY4NTczODU7XFxuXFxuXFx0dG91Y2gtYWN0aW9uOiBwYW4teCBwYW4teTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6ICdNYWpvciBNb25vJztcXG5cXHRzcmM6IHVybCgnZm9udC9tYWpvci1tb25vL21ham9yLW1vbm8udHRmJyk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcblxcdGZvbnQtZmFtaWx5OiAnU3VibGltYSc7XFxuXFx0c3JjOiB1cmwoJ2ZvbnQvc3VibGltYS9zdWJsaW1hLWxpZ2h0Lm90ZicpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogJ1N1YmxpbWEgQm9sZCc7XFxuXFx0c3JjOiB1cmwoJ2ZvbnQvc3VibGltYS9zdWJsaW1hLWV4dHJhLWJvbGQub3RmJyk7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuYm9keSB7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHR3aWR0aDogMTAwdnc7XFxufVxcblxcbi53cmFwcGVyIHtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdG92ZXJmbG93LXg6IGhpZGRlbjtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5oZWFkZXIge1xcblxcdGhlaWdodDogMTV2aDtcXG5cXHRtaW4taGVpZ2h0OiBjYWxjKDMuMip2YXIoLS1ydnYpKTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50aXRsZSB7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHRtaW4taGVpZ2h0OiBjYWxjKHZhcigtLXJ2dikpO1xcblxcdGZsZXg6IDE7XFxuXFx0b3ZlcmZsb3cteDogaGlkZGVuO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IGNhbGMoMC42KnZhcigtLXJ2dikpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpdGxlLWZvb3Rlci1jb2xvcik7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4udGl0bGUtdGV4dCB7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGZvbnQtZmFtaWx5OiAnU3VibGltYSc7XFxuXFx0Zm9udC1zaXplOiBjYWxjKDAuNDUqdmFyKC0tcnZ2KSk7XFxuXFx0bGV0dGVyLXNwYWNpbmc6IGNhbGMoMC4xKnZhcigtLXJ2dikpO1xcblxcdHRleHQtaW5kZW50OiBjYWxjKDAuMSp2YXIoLS1ydnYpKTtcXG59XFxuXFxuLmxpZ2h0LW1vZGUsXFxuLmRhcmstbW9kZSB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGhlaWdodDogdmFyKC0tZGlzcGxheS1pY29uKTtcXG5cXHR3aWR0aDogdmFyKC0tZGlzcGxheS1pY29uKTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5saWdodC1tb2RlLmRhcmssXFxuLmRhcmstbW9kZS5kYXJrIHtcXG5cXHRmaWx0ZXI6IGludmVydCg4MCUpO1xcbn1cXG5cXG4ubGlnaHQtbW9kZSBpbWcsXFxuLmRhcmstbW9kZSBpbWcge1xcblxcdGhlaWdodDogODAlO1xcblxcdHdpZHRoOiA4MCU7XFxufVxcblxcbi5zZWxlY3RlZC1kaXNwbGF5LmxpZ2h0LW1vZGUsXFxuLnNlbGVjdGVkLWRpc3BsYXkuZGFyay1tb2RlIHtcXG5cXHR0cmFuc2l0aW9uOiAwLjI1cyBsaW5lYXI7XFxufVxcblxcbi5zZWxlY3RlZC1kaXNwbGF5LmxpZ2h0LW1vZGUgaW1nIHtcXG5cXHRmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCA1cHggdmFyKC0tcmVkKSk7XFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG5cXG4uc2VsZWN0ZWQtZGlzcGxheS5kYXJrLW1vZGUgaW1nIHtcXG5cXHRmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCA1cHggYmxhY2spO1xcblxcdHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuXFxuLm5hdiB7XFxuXFx0ZmxleDogMjtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Zm9udC1mYW1pbHk6ICdNYWpvciBNb25vJztcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYmcpO1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLm5hdiBkaXYge1xcblxcdGZvbnQtc2l6ZTogY2FsYygwLjYqdmFyKC0tcnZ2KSk7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdHdpZHRoOiBjYWxjKDMqdmFyKC0tcnZ2KSk7XFxuXFx0aGVpZ2h0OiBjYWxjKHZhcigtLXJ2dikpO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcblxcdGJvcmRlci1yYWRpdXM6IDE1JTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubm93IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ub3ctYnV0dG9uKTtcXG59XFxuXFxuLm5vdyxcXG4uYWxsIHtcXG5cXHRsZXR0ZXItc3BhY2luZzogY2FsYygwLjMqdmFyKC0tcnZ2KSk7XFxuXFx0dGV4dC1pbmRlbnQ6IGNhbGMoMC4zKnZhcigtLXJ2dikpO1xcbn1cXG5cXG4ubGF0ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxhdGVyLWJ1dHRvbik7XFxuXFx0bGV0dGVyLXNwYWNpbmc6IGNhbGMoMC4xKnZhcigtLXJ2dikpO1xcblxcdHRleHQtaW5kZW50OiBjYWxjKDAuMSp2YXIoLS1ydnYpKTtcXG59XFxuXFxuLmFsbCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWxsLWJ1dHRvbik7XFxufVxcblxcbi5zZWxlY3RlZCB7XFxuXFx0Ym94LXNoYWRvdzogMCAwIDAgM3B4IHZhcigtLWJ1dHRvbi1vdXRsaW5lKTtcXG59XFxuXFxuLm1haW4ge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRmbGV4OiBhdXRvO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHBhZGRpbmc6IGNhbGMoMC41KnZhcigtLXJ2dikpIDA7XFxuXFx0Z2FwOiBjYWxjKDAuNip2YXIoLS1ydnYpKTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnKTtcXG59XFxuXFxuLmRpc3BsYXllZC1pdGVtIHtcXG5cXHR3aWR0aDogOTB2dztcXG5cXHRtYXgtd2lkdGg6IGNhbGMoMTUqdmFyKC0tcnZ2KSk7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGZvbnQtZmFtaWx5OiAnU3VibGltYSc7XFxuXFx0Zm9udC1zaXplOiBjYWxjKDAuNip2YXIoLS1ydnYpKTtcXG5cXHRwYWRkaW5nOiBjYWxjKDAuMSp2YXIoLS1ydnYpKSBjYWxjKDAuMyp2YXIoLS1ydnYpKTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG5cXHRib3JkZXItcmFkaXVzOiBjYWxjKDAuOCp2YXIoLS1ydnYpKTtcXG5cXHRtYXJnaW46IDAgY2FsYygwLjcqdmFyKC0tcnZ2KSk7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGNhbGMoMS40KnZhcigtLXJ2dikpIDFmciBjYWxjKHZhcigtLXJ2dikpIGNhbGModmFyKC0tcnZ2KSk7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImNoZWNrYm94IHRpdGxlIGVkaXQgZXhwYW5kXFxcIjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pdGVtLWJnKTtcXG59XFxuXFxuLmRpc3BsYXllZC1pdGVtLm5vdy1pdGVtIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ub3ctaXRlbS1iZyk7XFxufVxcblxcbi5kaXNwbGF5ZWQtaXRlbS5sYXRlci1pdGVtIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sYXRlci1pdGVtLWJnKTtcXG59XFxuXFxuLmV4cGFuZGVkLWl0ZW0ge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBjYWxjKDEuNCp2YXIoLS1ydnYpKSAxZnIgY2FsYyh2YXIoLS1ydnYpKSBjYWxjKHZhcigtLXJ2dikpO1xcblxcdGdyaWQtdGVtcGxhdGUtcm93czogY2FsYygxLjIqdmFyKC0tcnZ2KSkgMWZyO1xcblxcdGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcblxcdFxcdFxcXCJjaGVja2JveCB0aXRsZSBlZGl0IGV4cGFuZFxcXCJcXG5cXHRcXHRcXFwiLiBkZXNjcmlwdGlvbiAuIGRlbGV0ZVxcXCI7XFxufVxcblxcbi5leHBhbmRlZC1pdGVtIC5pdGVtLWRlc2NyaXB0aW9uIHtcXG5cXHRtYXJnaW4tcmlnaHQ6IGNhbGMoMC4zKnZhcigtLXJ2dikpO1xcblxcdG1hcmdpbi1ib3R0b206IGNhbGMoMC4zKnZhcigtLXJ2dikpO1xcbn1cXG5cXG4uZXhwYW5kZWQtaXRlbSAuaXRlbS10aXRsZSB7XFxuXFx0Y3Vyc29yOiBhdXRvO1xcbn1cXG5cXG4uY29tcGxldGVkLWl0ZW0ge1xcblxcdGZpbHRlcjogZ3JheXNjYWxlKDcwJSk7XFxufVxcblxcbi5jb21wbGV0ZWQtaXRlbSAuaXRlbS10aXRsZSB7XFxuXFx0Zm9udC1zdHlsZTogaXRhbGljO1xcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGNhbGMoMC4wNCp2YXIoLS1ydnYpKSBibGFjaztcXG5cXHR0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IG5vbmU7XFxuXFx0dGV4dC11bmRlcmxpbmUtb2Zmc2V0OiBjYWxjKC0wLjIqdmFyKC0tcnZ2KSk7XFxufVxcblxcbi5jb21wbGV0ZWQtaXRlbSAuaXRlbS1kZXNjcmlwdGlvbiB7XFxuXFx0Zm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4uZGlzcGxheWVkLWl0ZW0uYWRkLWl0ZW0tYnV0dG9uIHtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdG1hcmdpbjogMDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWRkLWl0ZW0tYnV0dG9uKTtcXG5cXHRoZWlnaHQ6IGNhbGMoMS41KnZhcigtLXJ2dikpO1xcblxcdHdpZHRoOiBjYWxjKDEuNSp2YXIoLS1ydnYpKTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hZGQtaXRlbS1idXR0b24gaW1nIHtcXG5cXHRtYXgtaGVpZ2h0OiAxMDAlO1xcblxcdG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLmFkZC1mb3JtLFxcbi5lZGl0LWZvcm0ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdHotaW5kZXg6IDM7XFxuXFx0cG9zaXRpb246IGZpeGVkO1xcblxcdHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG4uYWRkLWZvcm0taXRzZWxmLFxcbi5lZGl0LWZvcm0taXRzZWxmIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3JtLWJnKTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdHdpZHRoOiA5MHZ3O1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRtYXgtd2lkdGg6IGNhbGMoMTUqdmFyKC0tcnZ2KSk7XFxuXFx0Zm9udC1mYW1pbHk6ICdTdWJsaW1hJztcXG5cXHRmb250LXNpemU6IGNhbGMoMC42KnZhcigtLXJ2dikpO1xcblxcdHBhZGRpbmc6IGNhbGMoMC4xKnZhcigtLXJ2dikpIGNhbGMoMC4zKnZhcigtLXJ2dikpO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcblxcdGJvcmRlci1yYWRpdXM6IGNhbGMoMC44KnZhcigtLXJ2dikpO1xcblxcdGdyaWQtdGVtcGxhdGUtcm93czogY2FsYygxLjcqdmFyKC0tcnZ2KSkgY2FsYyh2YXIoLS1ydnYpKSBjYWxjKDQqdmFyKC0tcnZ2KSkgY2FsYyh2YXIoLS1ydnYpKSBjYWxjKDIuMip2YXIoLS1ydnYpKTtcXG5cXHRyb3ctZ2FwOiBjYWxjKDAuMjUqdmFyKC0tcnZ2KSk7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczpcXG5cXHRcXHRcXFwiZm9ybS10aXRsZVxcXCJcXG5cXHRcXHRcXFwidGl0bGUtc2VjdGlvblxcXCJcXG5cXHRcXHRcXFwiZGVzY3JpcHRpb24tc2VjdGlvblxcXCJcXG5cXHRcXHRcXFwicHJpb3JpdHktc2VjdGlvblxcXCJcXG5cXHRcXHRcXFwic3VibWl0LWJ1dHRvblxcXCI7XFxufVxcblxcbi5lZGl0LWZvcm0tdGl0bGUtdGV4dCB7XFxuXFx0bWF4LWhlaWdodDogY2FsYygxLjcqdmFyKC0tcnZ2KSk7XFxuXFx0bWF4LXdpZHRoOiBjYWxjKDEyKnZhcigtLXJ2dikpO1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxuXFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcXG5cXHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG5cXHRtYXJnaW4tcmlnaHQ6IGNhbGModmFyKC0tcnZ2KSk7XFxufVxcblxcbi5ibHVyLWJhY2tkcm9wIHtcXG5cXHR6LWluZGV4OiAyO1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdG1pbi13aWR0aDogMjAwdnc7XFxuXFx0aGVpZ2h0OiAyMDB2aDtcXG5cXHRiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG5cXHQtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcbn1cXG5cXG4uZm9ybS10aXRsZSB7XFxuXFx0bWFyZ2luOiAwIDElO1xcblxcdG1heC13aWR0aDogOTB2dztcXG5cXHRncmlkLWFyZWE6IGZvcm0tdGl0bGU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9ybS10aXRsZS10ZXh0IHtcXG5cXHRmb250LXNpemU6IGNhbGMoMC43KnZhcigtLXJ2dikpO1xcbn1cXG5cXG4uZm9ybS10aXRsZS10ZXh0OmhvdmVyIHtcXG5cXHRmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5jbG9zZS1idXR0b24ge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbG9zZS1idXR0b24pO1xcblxcdG1hcmdpbi1sZWZ0OiBhdXRvO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcblxcdGhlaWdodDogY2FsYygwLjkqdmFyKC0tcnZ2KSk7XFxuXFx0d2lkdGg6IGNhbGMoMC45KnZhcigtLXJ2dikpO1xcblxcdGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0tcnZ2KSk7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2xvc2UtYnV0dG9uIGltZyB7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4udGl0bGUtc2VjdGlvbiB7XFxuXFx0Z3JpZC1hcmVhOiB0aXRsZS1zZWN0aW9uO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBjYWxjKDMuNSp2YXIoLS1ydnYpKSAxZnI7XFxufVxcblxcbi50aXRsZS1zZWN0aW9uIGxhYmVsIHtcXG5cXHRmb250LXNpemU6IGNhbGMoMC41KnZhcigtLXJ2dikpO1xcbn1cXG5cXG4udGl0bGUtc2VjdGlvbiBpbnB1dCxcXG4uZGVzY3JpcHRpb24tc2VjdGlvbiB0ZXh0YXJlYSB7XFxuXFx0d2lkdGg6IDkzJTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3JtLWlucHV0LWJnKTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG5cXHRib3JkZXItcmFkaXVzOiBjYWxjKHZhcigtLXJ2dikpO1xcblxcdHBhZGRpbmctbGVmdDogMTBweDtcXG5cXHRmb250LWZhbWlseTogJ1N1YmxpbWEnO1xcblxcdGZvbnQtc2l6ZTogY2FsYygwLjQ1KnZhcigtLXJ2dikpO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24tc2VjdGlvbiB0ZXh0YXJlYSB7XFxuXFx0Ym9yZGVyLXJhZGl1czogY2FsYygwLjUqdmFyKC0tcnZ2KSk7XFxuXFx0cmVzaXplOiBub25lO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyxcXG50ZXh0YXJlYTpmb2N1cyB7XFxuXFx0YXBwZWFyYW5jZTogbm9uZTtcXG5cXHRvdXRsaW5lOiBub25lO1xcblxcdGJveC1zaGFkb3c6IDAgMCAwIDNweCB2YXIoLS1pbnB1dC1mb2N1cy1vdXRsaW5lKTtcXG59XFxuXFxuaW5wdXQ6bm90KDpmb2N1cyksXFxudGV4dGFyZWE6bm90KDpmb2N1cykge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRlc2NyaXB0aW9uLXNlY3Rpb24ge1xcblxcdGdyaWQtYXJlYTogZGVzY3JpcHRpb24tc2VjdGlvbjtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogY2FsYygzLjUqdmFyKC0tcnZ2KSkgMWZyO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24tc2VjdGlvbiBsYWJlbCB7XFxuXFx0Zm9udC1zaXplOiBjYWxjKDAuNSp2YXIoLS1ydnYpKTtcXG59XFxuXFxuLnByaW9yaXR5LXNlY3Rpb24ge1xcblxcdG1hcmdpbi10b3A6IDJweDtcXG5cXHRncmlkLWFyZWE6IHByaW9yaXR5LXNlY3Rpb247XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGNhbGMoMy41KnZhcigtLXJ2dikpIDFmciAxZnI7XFxufVxcblxcbi5wcmlvcml0eS1sYWJlbCB7XFxuXFx0Zm9udC1zaXplOiBjYWxjKDAuNSp2YXIoLS1ydnYpKTtcXG59XFxuXFxuLnJhZGlvLW9wdGlvbiB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGZvbnQtZmFtaWx5OiAnTWFqb3IgTW9ubyc7XFxuXFx0d2lkdGg6IGNhbGMoMyp2YXIoLS1ydnYpKTtcXG5cXHRoZWlnaHQ6IGNhbGModmFyKC0tcnZ2KSk7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTUlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpb3JpdHktYnV0dG9uLWRlZmF1bHQpO1xcbn1cXG5cXG4ucmFkaW8tb3B0aW9uIGxhYmVsIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5ub3ctb3B0aW9uIHtcXG5cXHRqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG5cXHRsZXR0ZXItc3BhY2luZzogY2FsYygwLjMqdmFyKC0tcnZ2KSk7XFxuXFx0dGV4dC1pbmRlbnQ6IGNhbGMoMC4zKnZhcigtLXJ2dikpO1xcbn1cXG5cXG4ubm93LW9wdGlvbi5zZWxlY3RlZC1wcmlvcml0eSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbm93LWJ1dHRvbik7XFxuXFx0Ym94LXNoYWRvdzogMCAwIDAgM3B4IHZhcigtLWJ1dHRvbi1vdXRsaW5lKTtcXG59XFxuXFxuLmxhdGVyLW9wdGlvbiB7XFxuXFx0anVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuXFx0bGV0dGVyLXNwYWNpbmc6IGNhbGMoMC4xKnZhcigtLXJ2dikpO1xcblxcdHRleHQtaW5kZW50OiBjYWxjKDAuMSp2YXIoLS1ydnYpKTtcXG59XFxuXFxuLmxhdGVyLW9wdGlvbi5zZWxlY3RlZC1wcmlvcml0eSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGF0ZXItYnV0dG9uKTtcXG5cXHRib3gtc2hhZG93OiAwIDAgMCAzcHggdmFyKC0tYnV0dG9uLW91dGxpbmUpO1xcbn1cXG5cXG4ucmFkaW8taW5wdXQge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRtYXJnaW46IDA7XFxuXFx0YXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLnN1Ym1pdC1idXR0b24ge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRncmlkLWFyZWE6IHN1Ym1pdC1idXR0b247XFxuXFx0Zm9udC1mYW1pbHk6ICdTdWJsaW1hJztcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWJtaXQtYnV0dG9uLWJnKTtcXG5cXHRhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuXFx0aGVpZ2h0OiBjYWxjKDEuNSp2YXIoLS1ydnYpKTtcXG5cXHR3aWR0aDogOTUlO1xcblxcdGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0tcnZ2KSk7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc3VibWl0LWJ1dHRvbiBpbWcge1xcblxcdGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmRpc3BsYXllZC1pdGVtIGltZyB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNoZWNrYm94IGltZyxcXG4uZXhwYW5kIGltZyB7XFxuXFx0d2lkdGg6IGNhbGModmFyKC0tcnZ2KSk7XFxufVxcblxcbi5lZGl0IGltZyB7XFxuXFx0d2lkdGg6IGNhbGMoMC44KnZhcigtLXJ2dikpO1xcbn1cXG5cXG4uY2hlY2tib3gge1xcblxcdGdyaWQtYXJlYTogY2hlY2tib3g7XFxuXFx0bWFyZ2luLWxlZnQ6IGNhbGMoMC4yKnZhcigtLXJ2dikpO1xcbn1cXG5cXG4uaXRlbS10aXRsZSB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGJvdHRvbTogMnB4O1xcblxcdGdyaWQtYXJlYTogdGl0bGU7XFxuXFx0anVzdGlmeS1zZWxmOiBzdGFydDtcXG59XFxuXFxuLmV4cGFuZGFibGUtdGl0bGUge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmVkaXQge1xcblxcdGdyaWQtYXJlYTogZWRpdDtcXG59XFxuXFxuLmV4cGFuZCB7XFxuXFx0Z3JpZC1hcmVhOiBleHBhbmQ7XFxufVxcblxcbi5zaHJpbmsge1xcblxcdGdyaWQtYXJlYTogZXhwYW5kO1xcblxcdGFzcGVjdC1yYXRpbzogMSAvIDE7XFxufVxcblxcbi5zaHJpbmsgaW1nIHtcXG5cXHRoZWlnaHQ6IGNhbGModmFyKC0tcnZ2KSk7XFxufVxcblxcbi5pdGVtLWRlc2NyaXB0aW9uIHtcXG5cXHRib3JkZXItcmFkaXVzOiAzcHg7XFxuXFx0Zm9udC1zdHlsZTogaXRhbGljO1xcblxcdGdyaWQtYXJlYTogZGVzY3JpcHRpb247XFxuXFx0YWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG5cXHRqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XFxuXFx0Zm9udC1zaXplOiA4MCU7XFxufVxcblxcbi5leHBhbmRlZC1pdGVtIC5kZWxldGUge1xcblxcdGdyaWQtYXJlYTogZGVsZXRlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcblxcdG1hcmdpbi1ib3R0b206IGNhbGMoMC4zKnZhcigtLXJ2dikpO1xcbn1cXG5cXG4uZGVsZXRlIGltZyB7XFxuXFx0aGVpZ2h0OiBjYWxjKHZhcigtLXJ2dikpO1xcbn1cXG5cXG5mb290ZXIge1xcblxcdGhlaWdodDogNXZoO1xcblxcdG1pbi1oZWlnaHQ6IGNhbGMoMC44KnZhcigtLXJ2dikpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpdGxlLWZvb3Rlci1jb2xvcik7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGZvbnQtc2l6ZTogY2FsYygwLjUqdmFyKC0tcnZ2KSk7XFxuXFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcblxcdGZvbnQtZmFtaWx5OiAnU3VibGltYSc7XFxuXFx0Zm9udC1zaXplOiBjYWxjKDAuNCp2YXIoLS1ydnYpKTtcXG5cXHRsZXR0ZXItc3BhY2luZzogY2FsYygwLjEqdmFyKC0tcnZ2KSk7XFxuXFx0dGV4dC1pbmRlbnQ6IGNhbGMoMC4xKnZhcigtLXJ2dikpO1xcbn1cXG5cXG4vKiBkYXJrIG1vZGUgc3R5bGluZzogKi9cXG5cXG4ud3JhcHBlci5kYXJrIHtcXG5cXHRjb2xvcjogdmFyKC0tZGFyay10ZXh0KTtcXG59XFxuXFxuLnRpdGxlLmRhcmsge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstdGl0bGUtZm9vdGVyLWNvbG9yKTtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZGFyay1ib3JkZXIpO1xcbn1cXG5cXG4ubmF2LmRhcmsge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstbmF2LWJnKTtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZGFyay1ib3JkZXIpO1xcbn1cXG5cXG4ubmF2LmRhcmsgZGl2IHtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWJvcmRlcik7XFxufVxcblxcbi5ub3cuZGFyayB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ub3ctYnV0dG9uKTtcXG59XFxuXFxuLmxhdGVyLmRhcmsge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstbGF0ZXItYnV0dG9uKTtcXG59XFxuXFxuLmFsbC5kYXJrIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWFsbC1idXR0b24pO1xcbn1cXG5cXG4uc2VsZWN0ZWQuZGFyayB7XFxuXFx0Ym94LXNoYWRvdzogMCAwIDAgM3B4IHZhcigtLWRhcmstYnV0dG9uLW91dGxpbmUpO1xcbn1cXG5cXG4ubWFpbi5kYXJrIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLW1haW4tYmcpO1xcbn1cXG5cXG4uZGlzcGxheWVkLWl0ZW0uZGFyayB7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1ib3JkZXIpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstaXRlbS1iZyk7XFxufVxcblxcbi5kaXNwbGF5ZWQtaXRlbS5ub3ctaXRlbS5kYXJrIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLW5vdy1pdGVtLWJnKTtcXG59XFxuXFxuLmRpc3BsYXllZC1pdGVtLmxhdGVyLWl0ZW0uZGFyayB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1sYXRlci1pdGVtLWJnKTtcXG59XFxuXFxuLmNvbXBsZXRlZC1pdGVtIC5pdGVtLXRpdGxlLmRhcmsge1xcblxcdGZpbHRlcjogYnJpZ2h0bmVzcyg4MCUpO1xcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGNhbGMoMC4wNCp2YXIoLS1ydnYpKSB2YXIoLS1kYXJrLXRleHQpO1xcblxcdHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogbm9uZTtcXG59XFxuXFxuLmFkZC1mb3JtLWl0c2VsZi5kYXJrLFxcbi5lZGl0LWZvcm0taXRzZWxmLmRhcmsge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZm9ybS1iZyk7XFxufVxcblxcbi5jbG9zZS1idXR0b24uZGFyayB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1jbG9zZS1idXR0b24pO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstYm9yZGVyKTtcXG59XFxuXFxuLnRpdGxlLXNlY3Rpb24uZGFyayBpbnB1dCxcXG4uZGVzY3JpcHRpb24tc2VjdGlvbi5kYXJrIHRleHRhcmVhIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWZvcm0taW5wdXQtYmcpO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstYm9yZGVyKTtcXG59XFxuXFxuaW5wdXQuZGFyazpmb2N1cyxcXG50ZXh0YXJlYS5kYXJrOmZvY3VzIHtcXG5cXHRib3gtc2hhZG93OiAwIDAgMCAzcHggdmFyKC0tZGFyay1pbnB1dC1mb2N1cy1vdXRsaW5lKTtcXG59XFxuXFxuLnJhZGlvLW9wdGlvbi5kYXJrIHtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWJvcmRlcik7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1wcmlvcml0eS1idXR0b24tZGVmYXVsdCk7XFxufVxcblxcbi5ub3ctb3B0aW9uLnNlbGVjdGVkLXByaW9yaXR5LmRhcmsge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstbm93LWJ1dHRvbik7XFxuXFx0Ym94LXNoYWRvdzogMCAwIDAgM3B4IHZhcigtLWRhcmstYnV0dG9uLW91dGxpbmUpO1xcbn1cXG5cXG4ubGF0ZXItb3B0aW9uLnNlbGVjdGVkLXByaW9yaXR5LmRhcmsge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstbGF0ZXItYnV0dG9uKTtcXG5cXHRib3gtc2hhZG93OiAwIDAgMCAzcHggdmFyKC0tZGFyay1idXR0b24tb3V0bGluZSk7XFxufVxcblxcbi5kaXNwbGF5ZWQtaXRlbS5hZGQtaXRlbS1idXR0b24uZGFyayB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1hZGQtaXRlbS1idXR0b24pO1xcbn1cXG5cXG4uc3VibWl0LWJ1dHRvbi5kYXJrIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLXN1Ym1pdC1idXR0b24tYmcpO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstYm9yZGVyKTtcXG59XFxuXFxuZm9vdGVyLmRhcmsge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstdGl0bGUtZm9vdGVyLWNvbG9yKTtcXG5cXHRib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tZGFyay1ib3JkZXIpO1xcbn1cXG5cXG4vKiBkZXNrdG9wIHZlcnNpb246ICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NTBweCkge1xcblxcblxcdC5uYXYgZGl2IHtcXG5cXHRcXHR0cmFuc2l0aW9uOiAwLjA3NXMgbGluZWFyO1xcblxcdH1cXG5cXG5cXHQubmF2IGRpdjpob3ZlciB7XFxuXFx0XFx0dHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG5cXHR9XFxuXFxuXFx0LmNoZWNrYm94LFxcblxcdC5lZGl0LFxcblxcdC5leHBhbmQsXFxuXFx0LnNocmluayxcXG5cXHQuZGVsZXRlLFxcblxcdC5hZGQtaXRlbS1idXR0b24sXFxuXFx0LnJhZGlvLW9wdGlvbixcXG5cXHQuc3VibWl0LWJ1dHRvbixcXG5cXHQuY2xvc2UtYnV0dG9uIHtcXG5cXHRcXHR0cmFuc2l0aW9uOiAwLjA3NXMgbGluZWFyO1xcblxcdH1cXG5cXG5cXHQuY2hlY2tib3g6aG92ZXIge1xcblxcdFxcdHRyYW5zZm9ybTogc2NhbGUoMS4wNzUpO1xcblxcdH1cXG5cXG5cXHQuZWRpdDpob3ZlciB7XFxuXFx0XFx0dHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcblxcdH1cXG5cXG5cXHQuZXhwYW5kOmhvdmVyIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHNjYWxlKDEuMjUpO1xcblxcdH1cXG5cXG5cXHQuc2hyaW5rOmhvdmVyIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuXFx0fVxcblxcblxcdC5kZWxldGU6aG92ZXIge1xcblxcdFxcdHRyYW5zZm9ybTogc2NhbGUoMS4wNzUpO1xcblxcdH1cXG5cXG5cXHQuYWRkLWl0ZW0tYnV0dG9uOmhvdmVyIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcblxcdH1cXG5cXG5cXHQucmFkaW8tb3B0aW9uOmhvdmVyIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcblxcdH1cXG5cXG5cXHQuc3VibWl0LWJ1dHRvbjpob3ZlciB7XFxuXFx0XFx0dHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcXG5cXHR9XFxuXFxuXFx0LmNsb3NlLWJ1dHRvbjpob3ZlciB7XFxuXFx0XFx0dHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcblxcdH1cXG5cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xcblxcdC5jb21wbGV0ZWQtaXRlbSAuaXRlbS10aXRsZSxcXG5cXHQuY29tcGxldGVkLWl0ZW0gLml0ZW0tdGl0bGUuZGFyayB7XFxuXFx0XFx0Zm9udC1zdHlsZTogaXRhbGljO1xcblxcdFxcdHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcblxcdFxcdHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogbm9uZTtcXG5cXHRcXHR0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDA7XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xcblxcdGJvZHkge1xcblxcdFxcdG1pbi1oZWlnaHQ6IDEwMHZoO1xcblxcdFxcdG1pbi13aWR0aDogMTAwdnc7XFxuXFx0fVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gc2V0IGJvZHkgaGVpZ2h0IHRvIGV4YWN0bHkgdGhlIGlubmVyIGhlaWdodCBvZiB0aGUgYnJvd3NlciBvbiBuYXJyb3cgKGxpa2VseSBtb2JpbGUpIHNjcmVlbnM6XG5jb25zdCBzZXRCb2R5SGVpZ2h0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNzUxKSB7XG4gICAgICAgIGJvZHkuc3R5bGUubWluSGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ICsgXCJweFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGJvZHkuc3R5bGUubWluSGVpZ2h0ID0gJzEwMHZoJztcbiAgICB9XG59O1xuXG4vLyBzZXQgYm9keSB3aWR0aCB0byBleGFjdGx5IHRoZSBpbm5lciB3aWR0aCBvZiB0aGUgYnJvd3NlcjpcbmNvbnN0IHNldEJvZHlXaWR0aCA9ICgpID0+IHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGNvbnN0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgYm9keS5zdHlsZS5tYXhXaWR0aCA9IHdpZHRoICsgXCJweFwiO1xuICAgIGNvbnN0IHZpZXdwb3J0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbWV0YVtuYW1lPSd2aWV3cG9ydCddYCk7XG4gICAgdmlld3BvcnQuc2V0QXR0cmlidXRlKCdjb250ZW50JywgYHdpZHRoPSR7d2lkdGh9IGluaXRpYWwtc2NhbGU9MS4wLCBtYXhpbXVtLXNjYWxlPTIuMGApXG59O1xuXG5jb25zdCBzZXRCb2R5ID0gKCkgPT4ge1xuICAgIHNldEJvZHlIZWlnaHQoKTtcbiAgICBzZXRCb2R5V2lkdGgoKTtcbn07XG5cbmV4cG9ydCB7IHNldEJvZHlIZWlnaHQsIHNldEJvZHlXaWR0aCwgc2V0Qm9keSB9OyIsImltcG9ydCBTYXZlSWNvbiBmcm9tICcuLi9pbWcvc2F2ZS5zdmcnO1xuaW1wb3J0IENsb3NlSWNvbiBmcm9tICcuLi9pbWcvY2xvc2Uuc3ZnJztcbmltcG9ydCB7IGdldEFsbCB9IGZyb20gJy4vbGlzdC5qcyc7XG5pbXBvcnQgeyBcbiAgICBkaXNwbGF5TW9kZSxcbiAgICBzd2l0Y2hUb0RhcmssXG4gICAgY3JlYXRlQmx1ckJhY2tkcm9wIH0gZnJvbSAnLi9wYWdlLmpzJztcbmltcG9ydCB7IGFkZEVkaXRGb3JtTGlzdGVuZXJzIH0gZnJvbSAnLi9saXN0ZW4nO1xuXG5jb25zdCByZW5kZXJFZGl0Rm9ybSA9IChpbmRleCkgPT4ge1xuXG4gICAgY29uc3QgbGlzdCA9IGdldEFsbCgpO1xuICAgIGNvbnN0IGl0ZW0gPSBsaXN0W2luZGV4XTtcblxuICAgIGNyZWF0ZUJsdXJCYWNrZHJvcCgpO1xuXG4gICAgLy8gY3JlYXRlIGVkaXQgZm9ybSBjb250YWluZXI6XG4gICAgY29uc3QgZWRpdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlZGl0Rm9ybS5jbGFzc0xpc3QuYWRkKCdlZGl0LWZvcm0nKTtcblxuICAgIC8vIGFkZCBlZGl0IGZvcm0gdG8gdGhlIERPTTpcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGVkaXRGb3JtKTtcblxuICAgICAgICAvLyBjcmVhdGUgdGhlIGZvcm0gaXRzZWxmOlxuICAgICAgICBjb25zdCBmb3JtSXRzZWxmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICBmb3JtSXRzZWxmLmNsYXNzTGlzdC5hZGQoJ2VkaXQtZm9ybS1pdHNlbGYnKTtcbiAgICAgICAgZm9ybUl0c2VsZi5kYXRhc2V0LmlkID0gaW5kZXg7XG4gICAgICAgIGZvcm1JdHNlbGYuc2V0QXR0cmlidXRlKCdtZXRob2QnLCAnJyk7XG4gICAgICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKGZvcm1JdHNlbGYpO1xuXG4gICAgICAgICAgICAvLyBjcmVhdGUgdGhlIGZvcm0gdGl0bGU6XG4gICAgICAgICAgICBjb25zdCBmb3JtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGZvcm1UaXRsZS5jbGFzc0xpc3QuYWRkKCdmb3JtLXRpdGxlJyk7XG4gICAgICAgICAgICBmb3JtSXRzZWxmLmFwcGVuZENoaWxkKGZvcm1UaXRsZSk7XG4gICAgICAgICAgICBjb25zdCBmb3JtVGl0bGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBmb3JtVGl0bGVUZXh0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tdGl0bGUtdGV4dCcsICdlZGl0LWZvcm0tdGl0bGUtdGV4dCcpO1xuICAgICAgICAgICAgZm9ybVRpdGxlVGV4dC50ZXh0Q29udGVudCA9IGBlZGl0aW5nICcke2l0ZW0udGl0bGV9J2A7XG4gICAgICAgICAgICBmb3JtVGl0bGUuYXBwZW5kQ2hpbGQoZm9ybVRpdGxlVGV4dCk7XG5cbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhbiAnWCcgYnV0dG9uIHRvIGNsb3NlIG91dCBvZiB0aGUgZm9ybTpcbiAgICAgICAgICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjbG9zZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjbG9zZS1idXR0b24nLCAnZWRpdC1jbG9zZS1idXR0b24nKTtcbiAgICAgICAgICAgIGZvcm1UaXRsZS5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG4gICAgICAgICAgICBjb25zdCBjbG9zZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIGNsb3NlSWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsIENsb3NlSWNvbik7XG4gICAgICAgICAgICBjbG9zZUJ1dHRvbi5hcHBlbmRDaGlsZChjbG9zZUljb24pO1xuXG4gICAgICAgICAgICAvLyBjcmVhdGUgdGhlIGZvcm0gZWxlbWVudHM6XG5cbiAgICAgICAgICAgICAgICAvLyB0aXRsZSBzZWN0aW9uOlxuICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHRpdGxlU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdmb3JtLWVsZW1lbnQnLCAndGl0bGUtc2VjdGlvbicsICdlZGl0LXRpdGxlLXNlY3Rpb24nKTtcbiAgICAgICAgICAgICAgICBmb3JtSXRzZWxmLmFwcGVuZENoaWxkKHRpdGxlU2VjdGlvbik7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gdGl0bGUgbGFiZWw6XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgICAgICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RpdGxlJyk7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSAndGl0bGU6JztcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVTZWN0aW9uLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHRpdGxlIGlucHV0OlxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICAgICAgICAgICAgICB0aXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoJ3RpdGxlLWlucHV0JywgJ2VkaXQtdGl0bGUtaW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGl0bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RpdGxlJyk7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlSW5wdXQudmFsdWUgPSBpdGVtLnRpdGxlO1xuICAgICAgICAgICAgICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVTZWN0aW9uLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuXG5cbiAgICAgICAgICAgICAgICAvLyBkZXNjcmlwdGlvbiBzZWN0aW9uOlxuICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdmb3JtLWVsZW1lbnQnLCAnZGVzY3JpcHRpb24tc2VjdGlvbicsICdlZGl0LWRlc2NyaXB0aW9uLXNlY3Rpb24nKTtcbiAgICAgICAgICAgICAgICBmb3JtSXRzZWxmLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uU2VjdGlvbik7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gZGVzY3JpcHRpb24gbGFiZWw6XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSAnZGVzY3JpcHRpb24gKG9wdGlvbmFsKTonO1xuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblNlY3Rpb24uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gZGVzY3JpcHRpb24gaW5wdXQ6XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbklucHV0LmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uLWlucHV0JywgJ2VkaXQtZGVzY3JpcHRpb24taW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZGVzY3JpcHRpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSBpdGVtLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblNlY3Rpb24uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XG5cblxuICAgICAgICAgICAgICAgIC8vIHByaW9yaXR5IGZpZWxkc2V0OlxuICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKTtcbiAgICAgICAgICAgICAgICBmaWVsZHNldC5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1zZWN0aW9uJywgJ2VkaXQtcHJpb3JpdHktc2VjdGlvbicpO1xuICAgICAgICAgICAgICAgIGZvcm1JdHNlbGYuYXBwZW5kQ2hpbGQoZmllbGRzZXQpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHByaW9yaXR5IGxhYmVsOlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5TGFiZWwuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktbGFiZWwnLCAnZWRpdC1wcmlvcml0eS1sYWJlbCcpO1xuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ3ByaW9yaXR5Oic7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vICdOT1cnIHByaW9yaXR5IHJhZGlvIG9wdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm93T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIG5vd09wdGlvbi5jbGFzc0xpc3QuYWRkKCdyYWRpby1vcHRpb24nLCAnbm93LW9wdGlvbicsICdlZGl0LW5vdy1vcHRpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobm93T3B0aW9uKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTk9XIGlucHV0ICYgbGFiZWw6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBub3dJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3dJbnB1dC5jbGFzc0xpc3QuYWRkKCdyYWRpby1pbnB1dCcsICdlZGl0LXJhZGlvLWlucHV0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5wcmlvcml0eSA9PT0gJ25vdycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3dPcHRpb24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQtcHJpb3JpdHknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG5vd0lucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm93SW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdub3cnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vd0lucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcmlvcml0eScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm93SW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdub3cnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vd09wdGlvbi5hcHBlbmRDaGlsZChub3dJbnB1dCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vd0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vd0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ25vdycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm93TGFiZWwudGV4dENvbnRlbnQgPSAnbm93JztcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vd09wdGlvbi5hcHBlbmRDaGlsZChub3dMYWJlbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gJ0xBVEVSJyBwcmlvcml0eSByYWRpbyBvcHRpb246XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhdGVyT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGxhdGVyT3B0aW9uLmNsYXNzTGlzdC5hZGQoJ3JhZGlvLW9wdGlvbicsICdsYXRlci1vcHRpb24nLCAnZWRpdC1sYXRlci1vcHRpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobGF0ZXJPcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIExBVEVSIGlucHV0ICYgbGFiZWw6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXRlcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhdGVySW5wdXQuY2xhc3NMaXN0LmFkZCgncmFkaW8taW5wdXQnLCAnZWRpdC1yYWRpby1pbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0ucHJpb3JpdHkgPT09ICdsYXRlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXRlck9wdGlvbi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZC1wcmlvcml0eScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGF0ZXJJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhdGVySW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdsYXRlcicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF0ZXJJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJpb3JpdHknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhdGVySW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdsYXRlcicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF0ZXJPcHRpb24uYXBwZW5kQ2hpbGQobGF0ZXJJbnB1dCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhdGVyTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF0ZXJMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdsYXRlcicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF0ZXJMYWJlbC50ZXh0Q29udGVudCA9ICdsYXRlcic7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXRlck9wdGlvbi5hcHBlbmRDaGlsZChsYXRlckxhYmVsKTtcblxuICAgICAgICAgICAgLy8gY3JlYXRlIGEgbmV3ICdhZGQnIGJ1dHRvbiBhdCB0aGUgYm90dG9tIG9mIHRoZSBmb3JtOlxuICAgICAgICAgICAgY29uc3QgZm9ybUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgZm9ybUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzdWJtaXQtYnV0dG9uJywgJ2VkaXQtc3VibWl0LWJ1dHRvbicpO1xuICAgICAgICAgICAgZm9ybUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gICAgICAgICAgICBmb3JtSXRzZWxmLmFwcGVuZENoaWxkKGZvcm1CdXR0b24pO1xuICAgICAgICAgICAgY29uc3QgZm9ybUJ1dHRvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIGZvcm1CdXR0b25JY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgU2F2ZUljb24pO1xuICAgICAgICAgICAgZm9ybUJ1dHRvbi5hcHBlbmRDaGlsZChmb3JtQnV0dG9uSWNvbik7XG4gICAgXG4gICAgLy8gcmVuZGVyIHRoZSBlZGl0IGZvcm0gaW4gZGFyayBtb2RlIGlmIGl0J3MgdHVybmVkIG9uOlxuICAgIGlmIChkaXNwbGF5TW9kZSA9PT0gJ2RhcmsnKSB7XG4gICAgICAgIHN3aXRjaFRvRGFyaygpO1xuICAgIH1cblxuICAgIGFkZEVkaXRGb3JtTGlzdGVuZXJzKCk7XG5cbn1cblxuZXhwb3J0IHsgcmVuZGVyRWRpdEZvcm0gfSIsImltcG9ydCAnLi4vc3R5bGUuY3NzJztcblxuaW1wb3J0IHsgcmV0cmlldmVTdG9yZWRMaXN0IH0gZnJvbSAnLi9saXN0LmpzJztcbmltcG9ydCB7IFxuICAgIHJlbmRlclBhZ2UsIFxuICAgIHJlbmRlclN0b3JlZFZpZXcsIFxuICAgIHJldHJpZXZlU3RvcmVkRGlzcGxheU1vZGUgfSBmcm9tICcuL3BhZ2UuanMnO1xuaW1wb3J0IHsgYWRkSW5pdGlhbExpc3RlbmVycyB9IGZyb20gJy4vbGlzdGVuLmpzJztcbmltcG9ydCB7IHNldEJvZHkgfSBmcm9tICcuL2JvZHknO1xuXG5yZW5kZXJQYWdlKCk7XG5cbnNldEJvZHkoKTtcblxuLy8gc2V0IHRoZSBib2R5IGV2ZXJ5IHNlY29uZDpcbnNldFRpbWVvdXQoc2V0Qm9keSwgMTAwMCk7XG5cbmFkZEluaXRpYWxMaXN0ZW5lcnMoKTtcblxucmV0cmlldmVTdG9yZWRMaXN0KCk7XG5cbnJlbmRlclN0b3JlZFZpZXcoKTtcblxucmV0cmlldmVTdG9yZWREaXNwbGF5TW9kZSgpOyIsIi8vIGNyZWF0ZSBlbXB0eSB0b2RvTGlzdCBhcnJheTpcbmxldCB0b2RvTGlzdCA9IFtdO1xuXG4vLyByZXRyaWV2ZSB0aGUgdG9kb0xpc3QgYXJyYXkgZnJvbSBsb2NhbFN0b3JhZ2U6XG5jb25zdCByZXRyaWV2ZVN0b3JlZExpc3QgPSAoKSA9PiB7XG5cbiAgICAvLyBmaXJzdCwgY2hlY2sgaWYgdG8tZG8gYXJyYXkgaXMgc3RvcmVkIGluIGxvY2FsU3RvcmFnZTpcbiAgICBjb25zdCBzdG9yZWRUb2RvTGlzdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvTGlzdCcpO1xuICAgIC8vIGlmIHRoZXJlIGlzIGEgc3RvcmVkVG9kb0xpc3QsIGdldCBpdCBhbmQgc2F2ZSBpdCB0byByZXRyaWV2ZWRMaXN0OlxuICAgIGlmIChzdG9yZWRUb2RvTGlzdCkge1xuICAgICAgICBjb25zdCByZXRyaWV2ZWRMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb0xpc3QnKSk7XG4gICAgICAgIFxuICAgICAgICAvLyBzZXQgdGhlIGxvY2FsIHRvZG9MaXN0IGFycmF5IHRvIHRoZSBsaXN0IHJldHJpZXZlZCBmcm9tIHN0b3JhZ2U6XG4gICAgICAgIHRvZG9MaXN0ID0gcmV0cmlldmVkTGlzdDtcbiAgICB9XG59XG5cbi8vIHNhdmUgdGhlIGxpc3QgdG8gbG9jYWxTdG9yYWdlOlxuY29uc3Qgc2F2ZVRvU3RvcmFnZSA9ICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb0xpc3QnLCBKU09OLnN0cmluZ2lmeSh0b2RvTGlzdCkpO1xufVxuXG4vLyBUb2RvIG9iamVjdCBjb25zdHJ1Y3RvcjpcbmZ1bmN0aW9uIFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgY29tcGxldGVkKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XG59O1xuXG4vLyBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFRvZG8gb2JqZWN0IGFuZCBhZGQgaXQgdG8gdGhlIHRvZG9MaXN0IGFycmF5OlxuY29uc3QgY3JlYXRlVG9kbyA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBjb21wbGV0ZWQpID0+IHtcbiAgICBjb25zdCBuZXdUb2RvID0gbmV3IFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgY29tcGxldGVkKTtcbiAgICB0b2RvTGlzdC5wdXNoKG5ld1RvZG8pO1xuICAgIHNhdmVUb1N0b3JhZ2UoKTtcbn07XG5cbi8vIGdldCB0aGUgY29tcGxldGUgY3VycmVudCBsaXN0OlxuY29uc3QgZ2V0QWxsID0gKCkgPT4ge1xuICAgIHJldHVybiB0b2RvTGlzdDtcbn07XG5cbi8vIGdldCB0aGUgaXRlbXMgd2l0aCAnbm93JyBwcmlvcml0eTpcbmNvbnN0IGdldE5vdyA9ICgpID0+IHtcbiAgICBjb25zdCBub3dJdGVtcyA9IHRvZG9MaXN0LmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgaWYgKGl0ZW0ucHJpb3JpdHkgPT09ICdub3cnKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBub3dJdGVtcztcbn07XG5cbi8vIGdldCB0aGUgaXRlbXMgd2l0aCAnbGF0ZXInIHByaW9yaXR5OlxuY29uc3QgZ2V0TGF0ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgbGF0ZXJJdGVtcyA9IHRvZG9MaXN0LmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgaWYgKGl0ZW0ucHJpb3JpdHkgPT09ICdsYXRlcicpIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGxhdGVySXRlbXM7XG59O1xuXG5jb25zdCBnZXREZXNjcmlwdGlvbiA9IChpZCkgPT4ge1xuICAgIHJldHVybiB0b2RvTGlzdFtpZF0uZGVzY3JpcHRpb247XG59O1xuXG5jb25zdCBnZXRDb21wbGV0ZWQgPSAoaWQpID0+IHtcbiAgICByZXR1cm4gdG9kb0xpc3RbaWRdLmNvbXBsZXRlZDtcbn1cblxuLy8gcmVtb3ZlIGEgVG9kbyBvYmplY3QgZnJvbSB0aGUgdG9kb0xpc3QgYXJyYXkgYnkgdXNpbmcgaXRzIERPTSBpZCBhcyBpdHMgYXJyYXkgaW5kZXg6XG5jb25zdCBkZWxldGVUb2RvID0gKGlkKSA9PiB7XG4gICAgdG9kb0xpc3Quc3BsaWNlKGlkLCAxKTtcbiAgICBzYXZlVG9TdG9yYWdlKCk7XG59XG5cbi8vIGVkaXQgYSBwcm9wZXJ0eSBvZiBhIFRvZG8gb2JqZWN0OlxuY29uc3QgZWRpdFRvZG8gPSAoaWQsIHByb3BlcnR5LCBuZXdWYWx1ZSkgPT4ge1xuICAgIHRvZG9MaXN0W2lkXVtwcm9wZXJ0eV0gPSBuZXdWYWx1ZTtcbiAgICBzYXZlVG9TdG9yYWdlKCk7XG59O1xuXG5leHBvcnQgeyBcbiAgICBjcmVhdGVUb2RvLCBcbiAgICBnZXRBbGwsIFxuICAgIGdldE5vdywgXG4gICAgZ2V0TGF0ZXIsIFxuICAgIGdldERlc2NyaXB0aW9uLCBcbiAgICBnZXRDb21wbGV0ZWQsIFxuICAgIGRlbGV0ZVRvZG8sIFxuICAgIGVkaXRUb2RvLFxuICAgIHJldHJpZXZlU3RvcmVkTGlzdCxcbiAgICBzYXZlVG9TdG9yYWdlXG59IiwiaW1wb3J0IHsgc2V0Qm9keSB9IGZyb20gJy4vYm9keS5qcyc7XG5pbXBvcnQgeyBcbiAgICByZW5kZXJOb3csIFxuICAgIHJlbmRlckxhdGVyLCBcbiAgICByZW5kZXJBbGwsIFxuICAgIGV4cGFuZEl0ZW0sXG4gICAgc2hyaW5rSXRlbSwgXG4gICAgZ2V0Q3VycmVudFZpZXcsXG4gICAgY2hlY2tDaGVja2JveCxcbiAgICB1bmNoZWNrQ2hlY2tib3gsXG4gICAgcmVuZGVyQWRkRm9ybSxcbiAgICBzdHlsZVJhZGlvT3B0aW9uLFxuICAgIHN1Ym1pdEFkZEZvcm0sXG4gICAgcmVtb3ZlQWRkRm9ybSwgXG4gICAgc3dpdGNoVG9MaWdodCxcbiAgICBzd2l0Y2hUb0RhcmssXG4gICAgc2hvd0VkaXRQb3B1cCxcbiAgICBzdWJtaXRFZGl0Rm9ybSxcbiAgICByZW1vdmVFZGl0Rm9ybSB9IGZyb20gJy4vcGFnZS5qcyc7XG5pbXBvcnQgeyBkZWxldGVUb2RvLCBlZGl0VG9kbywgZ2V0Q29tcGxldGVkIH0gZnJvbSAnLi9saXN0LmpzJztcblxuLy8gZXZlbnQgbGlzdGVuZXJzIHRvIGFkZCB3aGVuIHRoZSBwYWdlIGZpcnN0IGxvYWRzOlxuY29uc3QgYWRkSW5pdGlhbExpc3RlbmVycyA9ICgpID0+IHtcblxuICAgIC8vIHNldCBpbml0aWFsIGJvZHkgaGVpZ2h0ICYgd2lkdGguLlxuICAgIHNldEJvZHkoKTtcblxuICAgIC8vIHRoZW4gYWRqdXN0IGJvZHkgaGVpZ2h0ICYgd2lkdGggaWYgbmVlZGVkIHdoZW5ldmVyIHRoZSB3aW5kb3cgaXMgcmVzaXplZCwgb3Igd2hlbiB0aGUgc2NyZWVuIG9yaWVudGF0aW9uIGNoYW5nZXM6XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHNldEJvZHkpO1xuICAgIC8vIGlmIGJyb3dzZXIgaXMgbm90IHNhZmFyaTpcbiAgICBpZiAoIShuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJTYWZhcmlcIikgIT0gLTEgKSkge1xuICAgICAgICBzY3JlZW4ub3JpZW50YXRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgc2V0Qm9keSk7XG4gICAgfVxuICAgIFxuICAgIC8vIGFkZCBjbGljayBsaXN0ZW5lcnMgdG8gbmF2IGJ1dHRvbnMgdG8gdHJpZ2dlciByZW5kZXIgZnVuY3Rpb25zOlxuICAgIGNvbnN0IG5vdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3cnKTtcbiAgICBub3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXJOb3cpO1xuXG4gICAgY29uc3QgbGF0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGF0ZXInKTtcbiAgICBsYXRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlckxhdGVyKTtcblxuICAgIGNvbnN0IGFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwnKTtcbiAgICBhbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXJBbGwpO1xuXG4gICAgLy8gYWRkIGxpc3RlbmVycyB0byBsaWdodC9kYXJrIG1vZGUgZGlzcGxheSBpY29uczpcbiAgICBjb25zdCBsaWdodEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlnaHQtbW9kZScpO1xuICAgIGxpZ2h0SWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN3aXRjaFRvTGlnaHQpO1xuXG4gICAgY29uc3QgZGFya0ljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGFyay1tb2RlJyk7XG4gICAgZGFya0ljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzd2l0Y2hUb0RhcmspO1xuXG59XG5cbmNvbnN0IGFkZEFkZExpc3RlbmVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtaXRlbS1idXR0b24nKTtcbiAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXJBZGRGb3JtKTtcbn1cblxuY29uc3QgYWRkRm9ybUxpc3RlbmVycyA9ICgpID0+IHtcblxuICAgIC8vIGFkZCBjbG9zZSBidXR0b24gbGlzdGVuZXI6XG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtYnV0dG9uJyk7XG4gICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVBZGRGb3JtKTtcblxuICAgIC8vIGFkZCByYWRpbyBpbnB1dCBsaXN0ZW5lcnM6XG4gICAgY29uc3QgcmFkaW9JbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmFkaW8taW5wdXQnKTtcbiAgICByYWRpb0lucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgICAgICAgIHN0eWxlUmFkaW9PcHRpb24oZSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gYWRkIHN1Ym1pdCBsaXN0ZW5lcjpcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1mb3JtLWl0c2VsZicpO1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzdWJtaXRBZGRGb3JtKCk7XG4gICAgfSk7XG59XG5cbmNvbnN0IGFkZEVkaXRGb3JtTGlzdGVuZXJzID0gKCkgPT4ge1xuXG4gICAgLy8gYWRkIGNsb3NlIGJ1dHRvbiBsaXN0ZW5lcjpcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWNsb3NlLWJ1dHRvbicpO1xuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlRWRpdEZvcm0pO1xuXG4gICAgLy8gYWRkIHJhZGlvIGlucHV0IGxpc3RlbmVyczpcbiAgICBjb25zdCByYWRpb0lucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yYWRpby1pbnB1dCcpO1xuICAgIHJhZGlvSW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgICAgICAgc3R5bGVSYWRpb09wdGlvbihlKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBhZGQgc3VibWl0IGxpc3RlbmVyOlxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1mb3JtLWl0c2VsZicpO1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzdWJtaXRFZGl0Rm9ybShlKTtcbiAgICB9KTtcbn1cblxuLy8gZXZlbnQgbGlzdGVuZXJzIHRvIG9wZW4gZXhwYW5kZWQgdmlldyBvZiBpdGVtczpcbmNvbnN0IGFkZEV4cGFuZExpc3RlbmVycyA9ICgpID0+IHtcblxuICAgIC8vIGFkZCBsaXN0ZW5lcnMgdG8gYWxsIGl0ZW0gdGl0bGUgdGV4dDpcbiAgICBjb25zdCBpdGVtVGl0bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmV4cGFuZGFibGUtdGl0bGUnKTtcbiAgICBpdGVtVGl0bGVzLmZvckVhY2godGl0bGUgPT4ge1xuICAgICAgICB0aXRsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV4cGFuZEl0ZW0pO1xuICAgIH0pO1xuXG4gICAgLy8gYWRkIGxpc3RlbmVycyB0byBhbGwgZXhwYW5kIGljb25zOlxuICAgIGNvbnN0IGV4cGFuZEljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2LmV4cGFuZCcpO1xuICAgIGV4cGFuZEljb25zLmZvckVhY2goaWNvbiA9PiB7XG4gICAgICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBleHBhbmRJdGVtKTtcbiAgICB9KTtcbn1cblxuLy8gY2hlY2tib3ggbGlzdGVuZXIgdG8gYWRkIHRvIGVhY2ggaXRlbSBhcyBpdCBpcyByZW5kZXJlZDpcbmNvbnN0IGFkZENoZWNrYm94TGlzdGVuZXIgPSAoaWQpID0+IHtcblxuICAgIGNvbnN0IHBhcmVudEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD0nJHtpZH0nYCk7XG4gICAgY29uc3QgaXRlbUNoZWNrYm94ID0gcGFyZW50SXRlbS5maXJzdENoaWxkO1xuICAgIGl0ZW1DaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuICAgICAgICAvLyBpZiB0b2RvIGlzIG5vdCBjb21wbGV0ZWQsIG1hcmsgaXQgYXMgY29tcGxldGVkOlxuICAgICAgICBjb25zdCBjb21wbGV0ZWRTdGF0dXMgPSBnZXRDb21wbGV0ZWQoaWQpO1xuICAgICAgICBpZiAoY29tcGxldGVkU3RhdHVzID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZWRpdFRvZG8oaWQsICdjb21wbGV0ZWQnLCB0cnVlKTtcbiAgICAgICAgICAgIC8vIHRoZW4gY2hhbmdlIHRoZSBET00gZWxlbWVudCdzIGNsYXNzICYgc3R5bGluZyBzbyB0aGUgdmlldyBkb2Vzbid0IGhhdmUgdG8gYmUgcmUtcmVuZGVyZWQ6XG4gICAgICAgICAgICBwYXJlbnRJdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2luY29tcGxldGUtaXRlbScpO1xuICAgICAgICAgICAgcGFyZW50SXRlbS5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQtaXRlbScpO1xuICAgICAgICAgICAgLy8gYW5kIGNoZWNrIHRoZSBib3g6XG4gICAgICAgICAgICBjaGVja0NoZWNrYm94KGl0ZW1DaGVja2JveCk7XG5cbiAgICAgICAgLy8gaWYgdG9kbyBpcyBjb21wbGV0ZWQsIG1hcmsgaXQgYXMgaW5jb21wbGV0ZTpcbiAgICAgICAgfSBlbHNlIGlmIChjb21wbGV0ZWRTdGF0dXMgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGVkaXRUb2RvKGlkLCAnY29tcGxldGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgcGFyZW50SXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZWQtaXRlbScpO1xuICAgICAgICAgICAgcGFyZW50SXRlbS5jbGFzc0xpc3QuYWRkKCdpbmNvbXBsZXRlLWl0ZW0nKTtcbiAgICAgICAgICAgIC8vIGFuZCB1bmNoZWNrIHRoZSBib3g6XG4gICAgICAgICAgICB1bmNoZWNrQ2hlY2tib3goaXRlbUNoZWNrYm94KTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG4vLyBlZGl0IGljb24gbGlzdGVuZXIgdG8gYWRkIHRvIGVhY2ggaXRlbSBhcyBpdCBpcyByZW5kZXJlZDpcbmNvbnN0IGFkZEVkaXRJY29uTGlzdGVuZXIgPSAoaWQpID0+IHtcbiAgICBjb25zdCBpdGVtVG9FZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9JyR7aWR9J2ApO1xuICAgIGNvbnN0IGVkaXRJY29uID0gaXRlbVRvRWRpdC5jaGlsZHJlblsyXS5maXJzdENoaWxkO1xuICAgIGVkaXRJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0VkaXRQb3B1cCk7XG59XG5cbmNvbnN0IGFkZERlbGV0ZUxpc3RlbmVyVG9JdGVtV2l0aG91dERlc2NyaXB0aW9uID0gKGRlbGV0ZUljb24sIGlkKSA9PiB7XG4gICAgZGVsZXRlSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgLy8gZGVsZXRlIGl0ZW06XG4gICAgICAgIGRlbGV0ZVRvZG8oaWQpO1xuICAgICAgICAvLyB0aGVuIGNoZWNrIHRoZSB1c2VyJ3MgY3VycmVudCBwYWdlIGJlZm9yZSByZS1yZW5kZXJpbmc6XG4gICAgICAgIGNvbnN0IGN1cnJlbnRWaWV3ID0gZ2V0Q3VycmVudFZpZXcoKTtcbiAgICAgICAgaWYgKGN1cnJlbnRWaWV3ID09PSAnbm93Jykge1xuICAgICAgICAgICAgcmVuZGVyTm93KCk7XG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFZpZXcgPT09ICdsYXRlcicpIHtcbiAgICAgICAgICAgIHJlbmRlckxhdGVyKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFZpZXcgPT09ICdhbGwnKSB7XG4gICAgICAgICAgICByZW5kZXJBbGwoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG4vLyBldmVudCBsaXN0ZW5lcnMgKGZvciBkZWxldGUgYW5kIHNocmluayBhY3Rpb25zKSB0byBhZGQgdG8gYW4gaXRlbSB3aGVuIGl0IGlzIGV4cGFuZGVkOlxuY29uc3QgYWRkTGlzdGVuZXJzVG9FeHBhbmRlZEl0ZW0gPSAoaWQpID0+IHtcblxuICAgIC8vIGFkZCBsaXN0ZW5lciB0byBkZWxldGUgaWNvbjpcbiAgICBjb25zdCBwYXJlbnRJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9JyR7aWR9J2ApO1xuICAgIGNvbnN0IGRlbGV0ZUljb24gPSBwYXJlbnRJdGVtLmxhc3RDaGlsZDtcbiAgICBkZWxldGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAvLyBkZWxldGUgaXRlbTpcbiAgICAgICAgZGVsZXRlVG9kbyhpZCk7XG4gICAgICAgIC8vIHRoZW4gY2hlY2sgdGhlIHVzZXIncyBjdXJyZW50IHBhZ2UgYmVmb3JlIHJlLXJlbmRlcmluZzpcbiAgICAgICAgY29uc3QgY3VycmVudFZpZXcgPSBnZXRDdXJyZW50VmlldygpO1xuICAgICAgICBpZiAoY3VycmVudFZpZXcgPT09ICdub3cnKSB7XG4gICAgICAgICAgICByZW5kZXJOb3coKTtcbiAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50VmlldyA9PT0gJ2xhdGVyJykge1xuICAgICAgICAgICAgcmVuZGVyTGF0ZXIoKTtcbiAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50VmlldyA9PT0gJ2FsbCcpIHtcbiAgICAgICAgICAgIHJlbmRlckFsbCgpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBhZGQgbGlzdGVuZXIgdG8gc2hyaW5rIGljb246XG4gICAgY29uc3QgaWNvbiA9IHBhcmVudEl0ZW0uY2hpbGRyZW5bM107XG4gICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIHNocmlua0l0ZW0oZSk7XG4gICAgfSk7XG59XG5cbi8vIHJlbW92ZSBjbGljayBsaXN0ZW5lcnMgZnJvbSBhbiBleHBhbmRlZCBpdGVtIGFzIHRoZXkgYXJlIG5vIGxvbmdlciBuZWNlc3Nhcnk6XG5jb25zdCByZW1vdmVMaXN0ZW5lcnNGcm9tRXhwYW5kZWRJdGVtID0gKGlkKSA9PiB7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPScke2lkfSdgKTtcbiAgICBjb25zdCBpdGVtVGl0bGUgPSBpdGVtLmNoaWxkcmVuWzFdO1xuICAgIGl0ZW1UaXRsZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGV4cGFuZEl0ZW0pO1xuICAgIGNvbnN0IGl0ZW1JY29uID0gaXRlbS5jaGlsZHJlblsyXTtcbiAgICBpdGVtSWNvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGV4cGFuZEl0ZW0pO1xufVxuXG4vLyBmdW5jdGlvbiB0byBhdHRhY2ggbmV3IGV4cGFuZCBjbGljayBsaXN0ZW5lciBvbiBpdGVtIGVsZW1lbnRzIC0tIHRoaXMgaXMgbmVjZXNzYXJ5IGJlY2F1c2UgdGhlIGxpc3RlbmVycyBhcmUgcmVtb3ZlZCB3aGVuIHRoZSBpdGVtIGV4cGFuZHMuXG5jb25zdCByZXBsYWNlRXhwYW5kTGlzdGVuZXIgPSAoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBleHBhbmRJdGVtKTtcbn1cblxuZXhwb3J0IHsgXG4gICAgYWRkSW5pdGlhbExpc3RlbmVycywgXG4gICAgYWRkRXhwYW5kTGlzdGVuZXJzLCBcbiAgICBhZGRMaXN0ZW5lcnNUb0V4cGFuZGVkSXRlbSxcbiAgICByZW1vdmVMaXN0ZW5lcnNGcm9tRXhwYW5kZWRJdGVtLFxuICAgIGFkZENoZWNrYm94TGlzdGVuZXIsXG4gICAgcmVwbGFjZUV4cGFuZExpc3RlbmVyLFxuICAgIGFkZEFkZExpc3RlbmVyLFxuICAgIGFkZEVkaXRGb3JtTGlzdGVuZXJzLFxuICAgIGFkZEZvcm1MaXN0ZW5lcnMsXG4gICAgYWRkRGVsZXRlTGlzdGVuZXJUb0l0ZW1XaXRob3V0RGVzY3JpcHRpb24sXG4gICAgYWRkRWRpdEljb25MaXN0ZW5lclxufSIsImltcG9ydCB7IFxuICAgIGdldEFsbCwgXG4gICAgZ2V0Tm93LCBcbiAgICBnZXRMYXRlciwgXG4gICAgZ2V0RGVzY3JpcHRpb24sXG4gICAgY3JlYXRlVG9kbywgXG4gICAgZWRpdFRvZG99IGZyb20gJy4vbGlzdC5qcyc7XG5cbmltcG9ydCB7IFxuICAgIGFkZEV4cGFuZExpc3RlbmVycywgXG4gICAgYWRkTGlzdGVuZXJzVG9FeHBhbmRlZEl0ZW0sXG4gICAgcmVtb3ZlTGlzdGVuZXJzRnJvbUV4cGFuZGVkSXRlbSwgXG4gICAgYWRkQ2hlY2tib3hMaXN0ZW5lcixcbiAgICByZXBsYWNlRXhwYW5kTGlzdGVuZXIsXG4gICAgYWRkQWRkTGlzdGVuZXIsXG4gICAgYWRkRm9ybUxpc3RlbmVycywgXG4gICAgYWRkRGVsZXRlTGlzdGVuZXJUb0l0ZW1XaXRob3V0RGVzY3JpcHRpb24sXG4gICAgYWRkRWRpdEljb25MaXN0ZW5lcn0gZnJvbSAnLi9saXN0ZW4uanMnO1xuXG5pbXBvcnQgeyByZW5kZXJFZGl0Rm9ybSB9IGZyb20gJy4vZWRpdC5qcyc7XG5cbmltcG9ydCBDaGVja2VkQ2hlY2tib3hJY29uIGZyb20gJy4uL2ltZy9jaGVja2VkLWNoZWNrYm94LnN2Zyc7XG5pbXBvcnQgRW1wdHlDaGVja2JveEljb24gZnJvbSAnLi4vaW1nL2VtcHR5LWNoZWNrYm94LnN2Zyc7XG5pbXBvcnQgRXhwYW5kSWNvbiBmcm9tICcuLi9pbWcvZXhwYW5kLnN2Zyc7XG5pbXBvcnQgU2hyaW5rSWNvbiBmcm9tICcuLi9pbWcvc2hyaW5rLnN2Zyc7XG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICcuLi9pbWcvZGVsZXRlLnN2Zyc7XG5pbXBvcnQgQWRkSWNvbiBmcm9tICcuLi9pbWcvYWRkLnN2Zyc7XG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gJy4uL2ltZy9jbG9zZS5zdmcnO1xuaW1wb3J0IEZhdkljb24gZnJvbSAnLi4vaW1nL2Zhdmljb24ucG5nJztcbmltcG9ydCBEYXJrSWNvbiBmcm9tICcuLi9pbWcvZGFyay5zdmcnO1xuaW1wb3J0IExpZ2h0SWNvbiBmcm9tICcuLi9pbWcvbGlnaHQuc3ZnJztcbmltcG9ydCBFZGl0SWNvbiBmcm9tICcuLi9pbWcvZWRpdC5zdmcnO1xuXG4vLyBjcmVhdGUgY3VycmVudFZpZXcgdmFyaWFibGUgdG8gdHJhY2sgdGhlIGN1cnJlbnQgcGFnZSBkaXNwbGF5OlxubGV0IGN1cnJlbnRWaWV3O1xuXG5jb25zdCB1cGRhdGVDdXJyZW50VmlldyA9IChwYWdlKSA9PiB7XG4gICAgY3VycmVudFZpZXcgPSBwYWdlO1xufVxuXG5jb25zdCBnZXRDdXJyZW50VmlldyA9ICgpID0+IHtcbiAgICByZXR1cm4gY3VycmVudFZpZXc7XG59XG5cbi8vIGNyZWF0ZSBkaXNwbGF5TW9kZSB2YXJpYWJsZSB0byB0cmFjayBsaWdodC9kYXJrIG1vZGU6XG5sZXQgZGlzcGxheU1vZGU7XG5cbi8vIGdlbmVyYXRlIGJhc2UgcGFnZSBzdHJ1Y3R1cmU6XG5jb25zdCByZW5kZXJQYWdlID0gKCkgPT4ge1xuXG4gICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWQnKTtcblxuICAgIC8vIGRpc2FibGUgem9vbSB0byBlbnN1cmUgcGFnZSBsYXlvdXQgZG9lc24ndCBicmVhayBvbiBtb2JpbGU6XG4gICAgLy8gY29uc3QgbWV0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21ldGEnKTtcbiAgICAvLyBtZXRhLnNldEF0dHJpYnV0ZSgnbmFtZScsICd2aWV3cG9ydCcpO1xuICAgIC8vIG1ldGEuc2V0QXR0cmlidXRlKCdjb250ZW50JywgJ3dpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAsIG1heGltdW0tc2NhbGU9MS4wLCB1c2VyLXNjYWxhYmxlPW5vJyk7XG4gICAgLy8gaGVhZC5hcHBlbmRDaGlsZChtZXRhKTtcblxuICAgIC8vIGFkZCBmYXZpY29uOlxuICAgIGNvbnN0IGZhdkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgZmF2SWNvbi5zZXRBdHRyaWJ1dGUoJ3JlbCcsICdpY29uJyk7XG4gICAgZmF2SWNvbi5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBGYXZJY29uKTtcbiAgICBoZWFkLmFwcGVuZENoaWxkKGZhdkljb24pO1xuICAgIFxuICAgIC8vIGNyZWF0ZSBvdXRlciBwYWdlIHdyYXBwZXIgPGRpdj46XG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnd3JhcHBlcicpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG5cbiAgICAvLyBjcmVhdGUgaGVhZGVyOlxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgICAgICAvLyBjcmVhdGUgdGl0bGUgYmFyOlxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgICAgICAgICAvLyBjcmVhdGUgbGlnaHQgbW9kZSBpY29uOlxuICAgICAgICAgICAgY29uc3QgbGlnaHRNb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBsaWdodE1vZGUuY2xhc3NMaXN0LmFkZCgnbGlnaHQtbW9kZScpO1xuICAgICAgICAgICAgdGl0bGUuYXBwZW5kQ2hpbGQobGlnaHRNb2RlKTtcbiAgICAgICAgICAgIGNvbnN0IGxpZ2h0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgbGlnaHRJY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgTGlnaHRJY29uKTtcbiAgICAgICAgICAgIGxpZ2h0TW9kZS5hcHBlbmRDaGlsZChsaWdodEljb24pO1xuXG4gICAgICAgICAgICAvLyBjcmVhdGUgdGl0bGUgdGV4dDpcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGl0bGVUZXh0LmNsYXNzTGlzdC5hZGQoJ3RpdGxlLXRleHQnKTtcbiAgICAgICAgICAgIHRpdGxlVGV4dC50ZXh0Q29udGVudCA9ICdOT1cgLy8gTEFURVIgOjogYSBzaW1wbGUgdG8tZG8gbGlzdCc7XG4gICAgICAgICAgICB0aXRsZS5hcHBlbmRDaGlsZCh0aXRsZVRleHQpO1xuXG4gICAgICAgICAgICAvLyBjcmVhdGUgZGFyayBtb2RlIGljb246XG4gICAgICAgICAgICBjb25zdCBkYXJrTW9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGFya01vZGUuY2xhc3NMaXN0LmFkZCgnZGFyay1tb2RlJyk7XG4gICAgICAgICAgICB0aXRsZS5hcHBlbmRDaGlsZChkYXJrTW9kZSk7XG4gICAgICAgICAgICBjb25zdCBkYXJrSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgZGFya0ljb24uc2V0QXR0cmlidXRlKCdzcmMnLCBEYXJrSWNvbik7XG4gICAgICAgICAgICBkYXJrTW9kZS5hcHBlbmRDaGlsZChkYXJrSWNvbik7XG5cblxuICAgICAgICAvLyBjcmVhdGUgbmF2IGJhcjpcbiAgICAgICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5hdi5jbGFzc0xpc3QuYWRkKCduYXYnKTtcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdik7IFxuXG4gICAgICAgICAgICAvLyBjcmVhdGUgbmF2IGJ1dHRvbnM6XG4gICAgICAgICAgICBjb25zdCBub3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG5vdy5jbGFzc0xpc3QuYWRkKCdub3cnKTtcbiAgICAgICAgICAgIG5vdy5jbGFzc0xpc3QuYWRkKCduYXYtYnV0dG9uJyk7XG4gICAgICAgICAgICBub3cudGV4dENvbnRlbnQgPSAnbm93JztcbiAgICAgICAgICAgIG5hdi5hcHBlbmRDaGlsZChub3cpO1xuXG4gICAgICAgICAgICBjb25zdCBsYXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbGF0ZXIuY2xhc3NMaXN0LmFkZCgnbGF0ZXInKTtcbiAgICAgICAgICAgIGxhdGVyLmNsYXNzTGlzdC5hZGQoJ25hdi1idXR0b24nKTtcbiAgICAgICAgICAgIGxhdGVyLnRleHRDb250ZW50ID0gJ2xhdGVyJztcbiAgICAgICAgICAgIG5hdi5hcHBlbmRDaGlsZChsYXRlcik7XG5cbiAgICAgICAgICAgIGNvbnN0IGFsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgYWxsLmNsYXNzTGlzdC5hZGQoJ2FsbCcpO1xuICAgICAgICAgICAgYWxsLmNsYXNzTGlzdC5hZGQoJ25hdi1idXR0b24nKTtcbiAgICAgICAgICAgIGFsbC50ZXh0Q29udGVudCA9ICdhbGwnO1xuICAgICAgICAgICAgbmF2LmFwcGVuZENoaWxkKGFsbCk7XG5cbiAgICAvLyBjcmVhdGUgbWFpbiB0by1kbyBsaXN0IGRpc3BsYXkgc2VjdGlvbjpcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChtYWluKTtcblxuICAgIC8vIGNyZWF0ZSBmb290ZXI6XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChmb290ZXIpO1xuICAgIGZvb3Rlci50ZXh0Q29udGVudCA9ICdjb3B5cmlnaHQgwqkgMjAyMiB8IHNlYW4gc3RlcGhlbiBicmlhbic7XG59XG5cbi8vIHJlbmRlcnMgJ2FkZCcgYnV0dG9uIHdpdGhpbiB0aGUgbWFpbiBjb250ZW50IHNlY3Rpb246XG5jb25zdCByZW5kZXJBZGRCdXR0b24gPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gICAgY29uc3QgYWRkSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZEl0ZW0uY2xhc3NMaXN0LmFkZCgnZGlzcGxheWVkLWl0ZW0nLCdhZGQtaXRlbS1idXR0b24nKTtcbiAgICBjb25zdCBhZGRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgYWRkSWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsIEFkZEljb24pO1xuICAgIGFkZEl0ZW0uYXBwZW5kQ2hpbGQoYWRkSWNvbik7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChhZGRJdGVtKTtcblxuICAgIC8vIGFkZCBjbGljayBsaXN0ZW5lciB0byBhZGQgYnV0dG9uOlxuICAgIGFkZEFkZExpc3RlbmVyKCk7XG59XG5cbmNvbnN0IHJlbmRlckFkZEZvcm0gPSAoKSA9PiB7XG5cbiAgICAvLyBjcmVhdGUgYWRkIGZvcm0gY29udGFpbmVyOlxuICAgIGNvbnN0IGFkZEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGRGb3JtLmNsYXNzTGlzdC5hZGQoJ2FkZC1mb3JtJyk7XG5cbiAgICAvLyBpbnNlcnQgYWRkIGZvcm0gYmVmb3JlIGFkZCBidXR0b246XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChhZGRGb3JtKTtcblxuICAgIGNyZWF0ZUJsdXJCYWNrZHJvcCgpO1xuXG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgZm9ybSBpdHNlbGY6XG4gICAgICAgIGNvbnN0IGZvcm1JdHNlbGYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIGZvcm1JdHNlbGYuY2xhc3NMaXN0LmFkZCgnYWRkLWZvcm0taXRzZWxmJyk7XG4gICAgICAgIGZvcm1JdHNlbGYuc2V0QXR0cmlidXRlKCdtZXRob2QnLCAnJyk7XG4gICAgICAgIGFkZEZvcm0uYXBwZW5kQ2hpbGQoZm9ybUl0c2VsZik7XG5cbiAgICAgICAgICAgIC8vIGNyZWF0ZSB0aGUgZm9ybSB0aXRsZTpcbiAgICAgICAgICAgIGNvbnN0IGZvcm1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZm9ybVRpdGxlLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tdGl0bGUnKTtcbiAgICAgICAgICAgIGZvcm1JdHNlbGYuYXBwZW5kQ2hpbGQoZm9ybVRpdGxlKTtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1UaXRsZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICBmb3JtVGl0bGVUZXh0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tdGl0bGUtdGV4dCcpO1xuICAgICAgICAgICAgZm9ybVRpdGxlVGV4dC50ZXh0Q29udGVudCA9ICdhZGQgYSBuZXcgdGFzayc7XG4gICAgICAgICAgICBmb3JtVGl0bGUuYXBwZW5kQ2hpbGQoZm9ybVRpdGxlVGV4dCk7XG5cbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhbiAnWCcgYnV0dG9uIHRvIGNsb3NlIG91dCBvZiB0aGUgZm9ybTpcbiAgICAgICAgICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjbG9zZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjbG9zZS1idXR0b24nKTtcbiAgICAgICAgICAgIGZvcm1UaXRsZS5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG4gICAgICAgICAgICBjb25zdCBjbG9zZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIGNsb3NlSWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsIENsb3NlSWNvbik7XG4gICAgICAgICAgICBjbG9zZUJ1dHRvbi5hcHBlbmRDaGlsZChjbG9zZUljb24pO1xuXG4gICAgICAgICAgICAvLyBjcmVhdGUgdGhlIGZvcm0gZWxlbWVudHM6XG5cbiAgICAgICAgICAgICAgICAvLyB0aXRsZSBzZWN0aW9uOlxuICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHRpdGxlU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdmb3JtLWVsZW1lbnQnLCAndGl0bGUtc2VjdGlvbicpO1xuICAgICAgICAgICAgICAgIGZvcm1JdHNlbGYuYXBwZW5kQ2hpbGQodGl0bGVTZWN0aW9uKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyB0aXRsZSBsYWJlbDpcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndGl0bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9ICd0aXRsZTonO1xuICAgICAgICAgICAgICAgICAgICB0aXRsZVNlY3Rpb24uYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gdGl0bGUgaW5wdXQ6XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0aXRsZS1pbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICd0aXRsZScpO1xuICAgICAgICAgICAgICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAndGl0bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ2V4YW1wbGU6IGZlZWQgdGhlIGRvZycpO1xuICAgICAgICAgICAgICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVTZWN0aW9uLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuXG5cbiAgICAgICAgICAgICAgICAvLyBkZXNjcmlwdGlvbiBzZWN0aW9uOlxuICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdmb3JtLWVsZW1lbnQnLCAnZGVzY3JpcHRpb24tc2VjdGlvbicpO1xuICAgICAgICAgICAgICAgIGZvcm1JdHNlbGYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25TZWN0aW9uKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBkZXNjcmlwdGlvbiBsYWJlbDpcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZGVzY3JpcHRpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9ICdkZXNjcmlwdGlvbiAob3B0aW9uYWwpOic7XG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uU2VjdGlvbi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBkZXNjcmlwdGlvbiBpbnB1dDpcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZXNjcmlwdGlvbi1pbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdkZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVzY3JpcHRpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25TZWN0aW9uLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpO1xuXG5cbiAgICAgICAgICAgICAgICAvLyBwcmlvcml0eSBmaWVsZHNldDpcbiAgICAgICAgICAgICAgICBjb25zdCBmaWVsZHNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0Jyk7XG4gICAgICAgICAgICAgICAgZmllbGRzZXQuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktc2VjdGlvbicpO1xuICAgICAgICAgICAgICAgIGZvcm1JdHNlbGYuYXBwZW5kQ2hpbGQoZmllbGRzZXQpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHByaW9yaXR5IGxhYmVsOlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5TGFiZWwuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktbGFiZWwnKTtcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdwcmlvcml0eTonO1xuICAgICAgICAgICAgICAgICAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyAnTk9XJyBwcmlvcml0eSByYWRpbyBvcHRpb246XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vd09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBub3dPcHRpb24uY2xhc3NMaXN0LmFkZCgncmFkaW8tb3B0aW9uJywgJ25vdy1vcHRpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobm93T3B0aW9uKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTk9XIGlucHV0ICYgbGFiZWw6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBub3dJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3dJbnB1dC5jbGFzc0xpc3QuYWRkKCdyYWRpby1pbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm93SW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3dJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25vdycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm93SW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3ByaW9yaXR5Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3dJbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ25vdycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm93T3B0aW9uLmFwcGVuZENoaWxkKG5vd0lucHV0KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm93TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm93TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbm93Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3dMYWJlbC50ZXh0Q29udGVudCA9ICdub3cnO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm93T3B0aW9uLmFwcGVuZENoaWxkKG5vd0xhYmVsKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyAnTEFURVInIHByaW9yaXR5IHJhZGlvIG9wdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGF0ZXJPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgbGF0ZXJPcHRpb24uY2xhc3NMaXN0LmFkZCgncmFkaW8tb3B0aW9uJywgJ2xhdGVyLW9wdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChsYXRlck9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTEFURVIgaW5wdXQgJiBsYWJlbDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhdGVySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF0ZXJJbnB1dC5jbGFzc0xpc3QuYWRkKCdyYWRpby1pbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF0ZXJJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhdGVySW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdsYXRlcicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF0ZXJJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJpb3JpdHknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhdGVySW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdsYXRlcicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF0ZXJPcHRpb24uYXBwZW5kQ2hpbGQobGF0ZXJJbnB1dCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhdGVyTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF0ZXJMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdsYXRlcicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF0ZXJMYWJlbC50ZXh0Q29udGVudCA9ICdsYXRlcic7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXRlck9wdGlvbi5hcHBlbmRDaGlsZChsYXRlckxhYmVsKTtcblxuICAgICAgICAgICAgLy8gY3JlYXRlIGFuICdhZGQnIGJ1dHRvbiBhdCB0aGUgYm90dG9tIG9mIHRoZSBmb3JtOlxuICAgICAgICAgICAgY29uc3QgZm9ybUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgZm9ybUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzdWJtaXQtYnV0dG9uJyk7XG4gICAgICAgICAgICBmb3JtQnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgICAgICAgICAgIGZvcm1JdHNlbGYuYXBwZW5kQ2hpbGQoZm9ybUJ1dHRvbik7XG4gICAgICAgICAgICBjb25zdCBmb3JtQnV0dG9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgZm9ybUJ1dHRvbkljb24uc2V0QXR0cmlidXRlKCdzcmMnLCBBZGRJY29uKTtcbiAgICAgICAgICAgIGZvcm1CdXR0b24uYXBwZW5kQ2hpbGQoZm9ybUJ1dHRvbkljb24pO1xuICAgIFxuICAgIC8vIHJlbmRlciB0aGUgYWRkIGZvcm0gaW4gdGhlIGNvcnJlY3QgZGlzcGxheSBzdHlsZTpcbiAgICBpZiAoZGlzcGxheU1vZGUgPT09ICdkYXJrJykge1xuICAgICAgICBzd2l0Y2hUb0RhcmsoKTtcbiAgICB9XG5cbiAgICBhZGRGb3JtTGlzdGVuZXJzKCk7XG59XG5cbmNvbnN0IHN1Ym1pdEFkZEZvcm0gPSAoKSA9PiB7XG5cbiAgICAvLyBnZXQgZm9ybSB2YWx1ZXM6XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUtaW5wdXQnKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbi1pbnB1dCcpO1xuICAgIGxldCBwcmlvcml0eTtcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdycpLmNoZWNrZWQpIHtcbiAgICAgICAgcHJpb3JpdHkgPSAnbm93JztcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYXRlcicpLmNoZWNrZWQpIHtcbiAgICAgICAgcHJpb3JpdHkgPSAnbGF0ZXInO1xuICAgIH1cblxuICAgIC8vIGFkZCBhIHRvLWRvIG9iamVjdCB0byB0aGUgYXJyYXkgdXNpbmcgdGhlIGZvcm0gdmFsdWVzOlxuICAgIGNyZWF0ZVRvZG8odGl0bGUudmFsdWUsIGRlc2NyaXB0aW9uLnZhbHVlLCBwcmlvcml0eSwgZmFsc2UpO1xuXG4gICAgLy8gcmUtcmVuZGVyIHRoZSBjdXJyZW50IHBhZ2UgdmlldzpcbiAgICBpZiAoY3VycmVudFZpZXcgPSAnbm93Jykge1xuICAgICAgICByZW5kZXJOb3coKTtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRWaWV3ID0gJ2xhdGVyJykge1xuICAgICAgICByZW5kZXJMYXRlcigpO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudFZpZXcgPSAnYWxsJykge1xuICAgICAgICByZW5kZXJBbGwoKTtcbiAgICB9XG4gICAgLy8gYW5kIHNldCBpdCB0byB0aGUgY29ycmVjdCBkaXNwbGF5IG1vZGU6XG4gICAgaWYgKGRpc3BsYXlNb2RlID09PSAnZGFyaycpIHtcbiAgICAgICAgc3dpdGNoVG9EYXJrKCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlQmx1ckJhY2tkcm9wKCk7XG59O1xuXG5cbmNvbnN0IHN1Ym1pdEVkaXRGb3JtID0gKGUpID0+IHtcblxuICAgIGNvbnN0IGluZGV4ID0gZS50YXJnZXQuZGF0YXNldC5pZDtcbiAgICBjb25zb2xlLmxvZyhpbmRleCk7XG5cbiAgICAvLyBnZXQgZm9ybSB2YWx1ZXM6XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC10aXRsZS1pbnB1dCcpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtZGVzY3JpcHRpb24taW5wdXQnKTtcblxuICAgIGVkaXRUb2RvKGluZGV4LCAndGl0bGUnLCB0aXRsZS52YWx1ZSk7XG4gICAgZWRpdFRvZG8oaW5kZXgsICdkZXNjcmlwdGlvbicsIGRlc2NyaXB0aW9uLnZhbHVlKTtcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdycpLmNoZWNrZWQpIHtcbiAgICAgICAgZWRpdFRvZG8oaW5kZXgsICdwcmlvcml0eScsICdub3cnKTtcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYXRlcicpLmNoZWNrZWQpIHtcbiAgICAgICAgZWRpdFRvZG8oaW5kZXgsICdwcmlvcml0eScsICdsYXRlcicpO1xuICAgIH1cblxuICAgIHJlbW92ZUJsdXJCYWNrZHJvcCgpO1xuXG4gICAgLy8gcmUtcmVuZGVyIHRoZSBjdXJyZW50IHBhZ2UgdmlldzpcbiAgICBpZiAoY3VycmVudFZpZXcgPSAnbm93Jykge1xuICAgICAgICByZW5kZXJOb3coKTtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRWaWV3ID0gJ2xhdGVyJykge1xuICAgICAgICByZW5kZXJMYXRlcigpO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudFZpZXcgPSAnYWxsJykge1xuICAgICAgICByZW5kZXJBbGwoKTtcbiAgICB9XG5cbiAgICAvLyBhbmQgc2V0IGl0IHRvIHRoZSBjb3JyZWN0IGRpc3BsYXkgbW9kZTpcbiAgICBpZiAoZGlzcGxheU1vZGUgPT09ICdkYXJrJykge1xuICAgICAgICBzd2l0Y2hUb0RhcmsoKTtcbiAgICB9XG59XG5cbi8vIGNoYW5nZXMgYmFja2dyb3VuZCBjb2xvciBhbmQgb3V0bGluZSBmb3IgcmFkaW8gb3B0aW9ucyBkZXBlbmRpbmcgb24gc2VsZWN0aW9uOlxuY29uc3Qgc3R5bGVSYWRpb09wdGlvbiA9IChlKSA9PiB7XG4gICAgLy8gc2VsZWN0IHRoZSBwcmlvcml0eSBidXR0b24gd2Ugd2FudCB0byBzdHlsZTpcbiAgICBjb25zdCBzZWxlY3RlZElucHV0ID0gZS50YXJnZXQ7XG4gICAgY29uc3QgYnV0dG9uVG9TZWxlY3QgPSBzZWxlY3RlZElucHV0LnBhcmVudEVsZW1lbnQ7XG4gICAgLy8gY2xlYXIgb3V0IGV4aXN0aW5nIHByaW9yaXR5IGJ1dHRvbiBzZWxlY3Rpb24gc3R5bGluZzpcbiAgICBjb25zdCBwcmlvcml0eUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmFkaW8tb3B0aW9uJyk7XG4gICAgcHJpb3JpdHlCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgaWYgKGJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGVkLXByaW9yaXR5JykpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZC1wcmlvcml0eScpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy8gYWRkICdzZWxlY3RlZCcgY2xhc3MgdG8gdGhlIGJ1dHRvbiB3ZSB3YW50IHRvIHN0eWxlOlxuICAgIGJ1dHRvblRvU2VsZWN0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkLXByaW9yaXR5Jyk7XG59XG5cbi8vIHJlbW92ZXMgdGhlICdhZGQgYSBuZXcgdGFzaycgZm9ybSBmcm9tIERPTTpcbmNvbnN0IHJlbW92ZUFkZEZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtZm9ybScpO1xuICAgIGZvcm0ucmVtb3ZlKCk7XG4gICAgcmVtb3ZlQmx1ckJhY2tkcm9wKCk7XG59XG5cbmNvbnN0IHJlbW92ZUVkaXRGb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1mb3JtJyk7XG4gICAgZm9ybS5yZW1vdmUoKTtcbiAgICByZW1vdmVCbHVyQmFja2Ryb3AoKTtcbn1cblxuLy8gY3JlYXRlIG92ZXJsYXkgZm9yIGJsdXIgYmFja2Ryb3AgZmlsdGVyOlxuY29uc3QgY3JlYXRlQmx1ckJhY2tkcm9wID0gKCkgPT4ge1xuICAgIGNvbnN0IGJsdXJCYWNrZHJvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJsdXJCYWNrZHJvcC5jbGFzc0xpc3QuYWRkKCdibHVyLWJhY2tkcm9wJyk7XG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJyk7XG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChibHVyQmFja2Ryb3ApO1xufVxuXG5jb25zdCByZW1vdmVCbHVyQmFja2Ryb3AgPSAoKSA9PiB7XG4gICAgY29uc3QgYmx1ckJhY2tkcm9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsdXItYmFja2Ryb3AnKTtcbiAgICBibHVyQmFja2Ryb3AucmVtb3ZlKCk7XG59XG5cbi8vIGFwcGx5IGFuIG91dGxpbmUgc3R5bGUgdG8gdGhlIHNlbGVjdGVkIGRpc3BsYXkncyBuYXYgYnV0dG9uOlxuY29uc3Qgb3V0bGluZU5hdkJ1dHRvbiA9IChwYWdlKSA9PiB7XG5cbiAgICAvLyBjcmVhdGUgcmVmZXJlbmNlIHRvIGFsbCB0aHJlZSBuYXYgYnV0dG9uczpcbiAgICBjb25zdCBuYXZCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1idXR0b24nKTtcbiAgICAvLyByZW1vdmUgJ3NlbGVjdGVkJyBjbGFzcyBmcm9tIGFueSBidXR0b24gdGhhdCBoYXMgaXQ6XG4gICAgbmF2QnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgIGlmIChidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RlZCcpKSB7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vIHRoZW4gYWRkIHRoZSAnc2VsZWN0ZWQnIGNsYXNzIHRvIG9ubHkgdGhlIGNob3NlbiBwYWdlOlxuICAgIGNvbnN0IGNsaWNrZWRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtwYWdlfWApO1xuICAgIGNsaWNrZWRCdXR0b24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICBjb25zdCBhbGxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsJyk7XG4gICAgaWYgKGNsaWNrZWRCdXR0b24gPT09IGFsbEJ1dHRvbikge1xuICAgICAgICBjbGlja2VkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkLWFsbCcpO1xuICAgIH1cbn1cblxuY29uc3QgcmVuZGVySXRlbXMgPSAoc2VsZWN0ZWRJdGVtcykgPT4ge1xuXG4gICAgLy8gY3JlYXRlIHJlZmVyZW5jZSB0byBtYWluIGNvbnRlbnQgc2VjdGlvbiBhbmQgY3VycmVudCBjb21wbGV0ZSB0by1kbyBsaXN0OlxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICAgIGNvbnN0IGFsbEl0ZW1zID0gZ2V0QWxsKCk7XG5cbiAgICAvLyBlbXB0eSBvdXQgbWFpbiBjb250ZW50IHNlY3Rpb246XG4gICAgbWFpbi5pbm5lckhUTUwgPSAnJztcblxuICAgIC8vIGNyZWF0ZSBuZXcgPGRpdj4gZm9yIGVhY2ggaXRlbTpcbiAgICBzZWxlY3RlZEl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGNvbnN0IGRpc3BsYXllZEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGlzcGxheWVkSXRlbS5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5ZWQtaXRlbScpO1xuXG4gICAgICAgIC8vIGFkZCBjbGFzcyBmb3IgaXRlbSBwcmlvcml0eTpcbiAgICAgICAgaWYgKGl0ZW0ucHJpb3JpdHkgPT09ICdub3cnKSB7XG4gICAgICAgICAgICBkaXNwbGF5ZWRJdGVtLmNsYXNzTGlzdC5hZGQoJ25vdy1pdGVtJyk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXRlbS5wcmlvcml0eSA9PT0gJ2xhdGVyJykge1xuICAgICAgICAgICAgZGlzcGxheWVkSXRlbS5jbGFzc0xpc3QuYWRkKCdsYXRlci1pdGVtJylcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNldCBkYXRhc2V0LmlkIHRvIGl0ZW0ncyBpbmRleCBpbiB0aGUgbWFpbiBhcnJheTpcbiAgICAgICAgZGlzcGxheWVkSXRlbS5kYXRhc2V0LmlkID0gYWxsSXRlbXMuaW5kZXhPZihpdGVtKTtcblxuICAgICAgICAgICAgLy8gY3JlYXRlIDxkaXY+cyBmb3IgY2hlY2tib3ggaWNvbnM6XG4gICAgICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gnKTtcblxuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIGl0ZW0gaXMgY29tcGxldGVkIHRvIGRldGVybWluZSB3aGV0aGVyIHRvIGluc2VydCBhbiBlbXB0eSBvciBjaGVja2VkIGNoZWNrYm94IHN2ZzpcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5jb21wbGV0ZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hlY2tlZENoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWRDaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3NyYycsIENoZWNrZWRDaGVja2JveEljb24pO1xuICAgICAgICAgICAgICAgICAgICBjaGVja2JveC5hcHBlbmRDaGlsZChjaGVja2VkQ2hlY2tib3gpO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5ZWRJdGVtLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZC1pdGVtJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtLmNvbXBsZXRlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZW1wdHlDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgICAgICAgICBlbXB0eUNoZWNrYm94LnNldEF0dHJpYnV0ZSgnc3JjJywgRW1wdHlDaGVja2JveEljb24pO1xuICAgICAgICAgICAgICAgICAgICBjaGVja2JveC5hcHBlbmRDaGlsZChlbXB0eUNoZWNrYm94KTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheWVkSXRlbS5jbGFzc0xpc3QuYWRkKCdpbmNvbXBsZXRlLWl0ZW0nKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRpc3BsYXllZEl0ZW0uYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuXG4gICAgICAgICAgICAvLyBjcmVhdGUgPGRpdj5zIGZvciBpdGVtIHRpdGxlIHRleHQ6XG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBpdGVtLnRpdGxlO1xuICAgICAgICAgICAgLy8gaWYgdGhlIGl0ZW0gaGFzIGEgZGVzY3JpcHRpb24sIG1ha2UgdGhlIHRpdGxlIGV4cGFuZGFibGU6XG4gICAgICAgICAgICBpZiAoaXRlbS5kZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tdGl0bGUnLCAnZXhwYW5kYWJsZS10aXRsZScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghaXRlbS5kZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tdGl0bGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpc3BsYXllZEl0ZW0uYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgICAgICAgICAvLyBjcmVhdGUgZWRpdCBpY29uczpcbiAgICAgICAgICAgIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGVkaXQuY2xhc3NMaXN0LmFkZCgnZWRpdCcpO1xuICAgICAgICAgICAgY29uc3QgZWRpdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIGVkaXRJY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgRWRpdEljb24pO1xuICAgICAgICAgICAgZWRpdC5hcHBlbmRDaGlsZChlZGl0SWNvbik7XG4gICAgICAgICAgICBkaXNwbGF5ZWRJdGVtLmFwcGVuZENoaWxkKGVkaXQpO1xuXG4gICAgICAgICAgICAvLyBpZiB0aGVyZSBpcyBhIGRlc2NyaXB0aW9uLCBjcmVhdGUgZXhwYW5kIGljb25zOlxuICAgICAgICAgICAgaWYgKGl0ZW0uZGVzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBleHBhbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBleHBhbmQuY2xhc3NMaXN0LmFkZCgnZXhwYW5kJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgZXhwYW5kSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgICAgIGV4cGFuZEljb24uc2V0QXR0cmlidXRlKCdzcmMnLCBFeHBhbmRJY29uKTtcbiAgICAgICAgICAgICAgICBleHBhbmQuYXBwZW5kQ2hpbGQoZXhwYW5kSWNvbik7XG4gICAgICAgICAgICAgICAgZGlzcGxheWVkSXRlbS5hcHBlbmRDaGlsZChleHBhbmQpO1xuICAgICAgICAgICAgLy8gaWYgdGhlcmUncyBubyBpdGVtIGRlc2NyaXB0aW9uLCBhZGQgdGhlIGRlbGV0ZSBpY29uIGluc3RlYWQgb2YgdGhlIGV4cGFuZCBpY29uOlxuICAgICAgICAgICAgfSBlbHNlIGlmICghaXRlbS5kZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBkZWxldGVJY29uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUljb25TdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgICAgICBkZWxldGVJY29uU3ZnLnNldEF0dHJpYnV0ZSgnc3JjJywgRGVsZXRlSWNvbik7XG4gICAgICAgICAgICAgICAgZGVsZXRlSWNvbi5hcHBlbmRDaGlsZChkZWxldGVJY29uU3ZnKTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5ZWRJdGVtLmFwcGVuZENoaWxkKGRlbGV0ZUljb24pO1xuICAgICAgICAgICAgICAgIGFkZERlbGV0ZUxpc3RlbmVyVG9JdGVtV2l0aG91dERlc2NyaXB0aW9uKGRlbGV0ZUljb24sIGRpc3BsYXllZEl0ZW0uZGF0YXNldC5pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcblxuICAgICAgICAvLyBhZGQgaXRlbSA8ZGl2PiB0byB0aGUgbWFpbiBjb250ZW50IHNlY3Rpb246XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoZGlzcGxheWVkSXRlbSk7XG5cbiAgICAgICAgLy8gYWRkIGNsaWNrIGxpc3RlbmVyIHRvIGNoZWNrYm94IG9mIG5ldyBpdGVtIHVzaW5nIGl0cyBpZDpcbiAgICAgICAgYWRkQ2hlY2tib3hMaXN0ZW5lcihkaXNwbGF5ZWRJdGVtLmRhdGFzZXQuaWQpO1xuXG4gICAgICAgIC8vIGFkZCBjbGljayBsaXN0ZW5lciB0b2UgZGl0IGljb24gb2YgbmV3IGl0ZW0gdXNpbmcgaXRzIGlkOlxuICAgICAgICBhZGRFZGl0SWNvbkxpc3RlbmVyKGRpc3BsYXllZEl0ZW0uZGF0YXNldC5pZCk7XG4gICAgfSk7XG5cbiAgICAvLyByZW5kZXIgJ2FkZCcgYnV0dG9uIGF0IHRoZSBib3R0b20gb2YgdGhlIGNvbnRlbnQgc2VjdGlvbjpcbiAgICByZW5kZXJBZGRCdXR0b24oKTtcblxuICAgIC8vIGNoZWNrIGlmIGRpc3BsYXkgbW9kZSBpcyBzZXQgdG8gZGFyayBhbmQgc3dpdGNoIHRoZSBwYWdlIHN0eWxlIGlmIG5lY2Vzc2FyeTpcbiAgICBpZiAoZGlzcGxheU1vZGUgPT09ICdkYXJrJykge1xuICAgICAgICBzd2l0Y2hUb0RhcmsoKTtcbiAgICB9XG5cbiAgICAvLyBhZGQgY2xpY2sgbGlzdGVuZXJzIG9uIHRpdGxlIHRleHQgJiBleHBhbmQgaWNvbnMgb2YgYWxsIHJlbmRlcmVkIGl0ZW1zOlxuICAgIGFkZEV4cGFuZExpc3RlbmVycygpO1xufVxuXG5jb25zdCByZW5kZXJOb3cgPSAoKSA9PiB7XG4gICAgLy8gb3V0bGluZSB0aGUgJ25vdycgYnV0dG9uOlxuICAgIG91dGxpbmVOYXZCdXR0b24oJ25vdycpO1xuXG4gICAgLy8gY3JlYXRlIGFycmF5IG9mIG9ubHkgaXRlbXMgd2l0aCBhICdub3cnIHByaW9yaXR5OlxuICAgIGNvbnN0IG5vd0l0ZW1zID0gZ2V0Tm93KCk7XG5cbiAgICByZW5kZXJJdGVtcyhub3dJdGVtcyk7XG5cbiAgICB1cGRhdGVDdXJyZW50Vmlldygnbm93Jyk7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVudFZpZXcnLCAnbm93Jyk7XG59XG5cbmNvbnN0IHJlbmRlckxhdGVyID0gKCkgPT4ge1xuICAgIFxuICAgIC8vIG91dGxpbmUgdGhlICdsYXRlcicgYnV0dG9uOlxuICAgIG91dGxpbmVOYXZCdXR0b24oJ2xhdGVyJyk7XG5cbiAgICAvLyBjcmVhdGUgYXJyYXkgb2Ygb25seSBpdGVtcyB3aXRoIGEgJ2xhdGVyJyBwcmlvcml0eTpcbiAgICBjb25zdCBsYXRlckl0ZW1zID0gZ2V0TGF0ZXIoKTtcblxuICAgIHJlbmRlckl0ZW1zKGxhdGVySXRlbXMpO1xuXG4gICAgdXBkYXRlQ3VycmVudFZpZXcoJ2xhdGVyJyk7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVudFZpZXcnLCAnbGF0ZXInKTtcbn1cblxuY29uc3QgcmVuZGVyQWxsID0gKCkgPT4ge1xuXG4gICAgLy8gb3V0bGluZSB0aGUgJ2FsbCcgYnV0dG9uOlxuICAgIG91dGxpbmVOYXZCdXR0b24oJ2FsbCcpO1xuXG4gICAgLy8gY3JlYXRlIGFuIGFycmF5IG9mIGFsbCBjdXJyZW50IGl0ZW1zOlxuICAgIGNvbnN0IGFsbEl0ZW1zID0gZ2V0QWxsKCk7XG4gXG4gICAgcmVuZGVySXRlbXMoYWxsSXRlbXMpO1xuXG4gICAgdXBkYXRlQ3VycmVudFZpZXcoJ2FsbCcpO1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRWaWV3JywgJ2FsbCcpO1xufVxuXG5jb25zdCByZW5kZXJTdG9yZWRWaWV3ID0gKCkgPT4ge1xuICAgIGNvbnN0IHN0b3JlZFZpZXcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudFZpZXcnKTtcbiAgICBpZiAoc3RvcmVkVmlldyA9PT0gJ25vdycpIHtcbiAgICAgICAgcmVuZGVyTm93KCk7XG4gICAgfSBlbHNlIGlmIChzdG9yZWRWaWV3ID09PSAnbGF0ZXInKSB7XG4gICAgICAgIHJlbmRlckxhdGVyKCk7XG4gICAgfSBlbHNlIGlmIChzdG9yZWRWaWV3ID09PSAnYWxsJykge1xuICAgICAgICByZW5kZXJBbGwoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZW5kZXJOb3coKTtcbiAgICB9XG59XG5cblxuY29uc3QgY2hlY2tDaGVja2JveCA9IChjaGVja2JveERpdikgPT4ge1xuICAgIGNvbnN0IGNoZWNrYm94SWNvbiA9IGNoZWNrYm94RGl2LmZpcnN0Q2hpbGQ7XG4gICAgY2hlY2tib3hJY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgQ2hlY2tlZENoZWNrYm94SWNvbik7XG59XG5cbmNvbnN0IHVuY2hlY2tDaGVja2JveCA9IChjaGVja2JveERpdikgPT4ge1xuICAgIGNvbnN0IGNoZWNrYm94SWNvbiA9IGNoZWNrYm94RGl2LmZpcnN0Q2hpbGQ7XG4gICAgY2hlY2tib3hJY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgRW1wdHlDaGVja2JveEljb24pO1xufVxuXG5jb25zdCBzaG93RWRpdFBvcHVwID0gKGUpID0+IHtcbiAgICBjb25zdCBpdGVtVG9FZGl0ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgIGNvbnN0IGluZGV4ID0gaXRlbVRvRWRpdC5kYXRhc2V0LmlkO1xuICAgIHJlbmRlckVkaXRGb3JtKGluZGV4KTsgICBcbn1cblxuY29uc3QgZXhwYW5kSXRlbSA9IChlKSA9PiB7XG5cbiAgICAvLyBmaXJzdCwgY3JlYXRlIHJlZmVyZW5jZSB0byBjbGlja2VkIGVsZW1lbnQgdG8gaGVscCB1cyBkZXRlcm1pbmUgdGhlIGl0ZW0gdG8gZXhwYW5kOlxuICAgIGNvbnN0IGNsaWNrZWRFbGVtZW50ID0gZS50YXJnZXQ7XG4gICAgbGV0IGl0ZW1Ub0V4cGFuZDtcbiAgICAvLyBpZiB0aGUgdGl0bGUgdGV4dCB3YXMgY2xpY2tlZCwgdGhpcyBpcyB0cnVlIGFuZCB0aGUgcGFyZW50IDxkaXY+IGlzIHRoZSBpdGVtIHdlIHdhbnQgdG8gZXhwYW5kOlxuICAgIGlmIChjbGlja2VkRWxlbWVudC5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnZGlzcGxheWVkLWl0ZW0nKSkge1xuICAgICAgICBpdGVtVG9FeHBhbmQgPSBlLnRhcmdldC5wYXJlbnROb2RlO1xuICAgIC8vIG90aGVyd2lzZSwgdGhlIGV4cGFuZCBpY29uIHN2ZyB3YXMgY2xpY2tlZCBhbmQgd2UgbmVlZCB0byBhc2NlbmQgYW5vdGhlciBsYXllciBpbiB0aGUgRE9NIHRvIGdldCB0aGUgPGRpdj4gb2YgdGhlIGl0ZW0gd2Ugd2FudCB0byBleHBhbmQ6XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaXRlbVRvRXhwYW5kID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIH1cbiAgICBpdGVtVG9FeHBhbmQuY2xhc3NMaXN0LmFkZCgnZXhwYW5kZWQtaXRlbScpO1xuXG4gICAgLy8gc2F2ZSByZWZlcmVuY2UgdG8gaXRlbVRvRXhwYW5kJ3MgZGF0YS1pZDpcbiAgICBjb25zdCBpdGVtSWQgPSBpdGVtVG9FeHBhbmQuZGF0YXNldC5pZDtcblxuICAgIC8vIGdldCByZWZlcmVuY2UgdG8gZXhwYW5kIGljb24sIGFkZCBhIG5ldyBzaHJpbmsgaWNvbiBiZWZvcmUgaXQsIGFuZCBkZWxldGUgdGhlIGV4cGFuZCBpY29uOlxuICAgIGNvbnN0IGV4cGFuZCA9IGl0ZW1Ub0V4cGFuZC5jaGlsZHJlblszXTtcbiAgICBjb25zdCBzaHJpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaHJpbmsuY2xhc3NMaXN0LmFkZCgnc2hyaW5rJyk7XG4gICAgY29uc3Qgc2hyaW5rSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHNocmlua0ljb24uc2V0QXR0cmlidXRlKCdzcmMnLCBTaHJpbmtJY29uKTtcbiAgICBzaHJpbmsuYXBwZW5kQ2hpbGQoc2hyaW5rSWNvbik7XG4gICAgaXRlbVRvRXhwYW5kLmluc2VydEJlZm9yZShzaHJpbmssIGV4cGFuZCk7XG4gICAgZXhwYW5kLnJlbW92ZSgpO1xuXG4gICAgLy8gY3JlYXRlIG5ldyA8ZGl2PiBmb3IgaXRlbSBkZXNjcmlwdGlvbiBhbmQgZ2V0IHRleHQgZnJvbSB0b2RvTGlzdCBhcnJheTpcbiAgICBjb25zdCBpdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnaXRlbS1kZXNjcmlwdGlvbicpO1xuICAgIGl0ZW1EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKGAke2l0ZW1JZH0tZGVzY3JpcHRpb25gKTtcbiAgICBpdGVtRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBnZXREZXNjcmlwdGlvbihpdGVtSWQpO1xuICAgIGl0ZW1Ub0V4cGFuZC5hcHBlbmRDaGlsZChpdGVtRGVzY3JpcHRpb24pO1xuICAgIFxuICAgIC8vIGNyZWF0ZSBuZXcgPGRpdj4gZm9yIGRlbGV0ZSBpY29uIGFuZCBhZGQgZGVsZXRlIHN2ZyBhcyBhIGNoaWxkIDxpbWc+OlxuICAgIGNvbnN0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZWxldGVJY29uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZScpO1xuICAgIGNvbnN0IGRlbGV0ZUljb25TdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBkZWxldGVJY29uU3ZnLnNldEF0dHJpYnV0ZSgnc3JjJywgRGVsZXRlSWNvbik7XG4gICAgZGVsZXRlSWNvbi5hcHBlbmRDaGlsZChkZWxldGVJY29uU3ZnKTtcbiAgICBpdGVtVG9FeHBhbmQuYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbik7XG5cbiAgICByZW1vdmVMaXN0ZW5lcnNGcm9tRXhwYW5kZWRJdGVtKGl0ZW1JZCk7XG5cbiAgICBhZGRMaXN0ZW5lcnNUb0V4cGFuZGVkSXRlbShpdGVtSWQpO1xufVxuXG5jb25zdCBzaHJpbmtJdGVtID0gKGUpID0+IHtcblxuICAgIC8vIHNhbWUgcHJvdG9jb2wgYXMgZXhwYW5kSXRlbSgpOlxuICAgIGNvbnN0IGNsaWNrZWRFbGVtZW50ID0gZS50YXJnZXQ7XG4gICAgbGV0IGl0ZW1Ub1NocmluayA9IGNsaWNrZWRFbGVtZW50LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICBpdGVtVG9TaHJpbmsuY2xhc3NMaXN0LnJlbW92ZSgnZXhwYW5kZWQtaXRlbScpO1xuXG4gICAgLy8gZ2V0IHJlZmVyZW5jZSB0byBzaHJpbmsgaWNvbiwgYWRkIGEgbmV3IGV4cGFuZCBpY29uIGJlZm9yZSBpdCwgdGhlbiBkZWxldGUgdGhlIHNocmluayBpY29uOlxuICAgIGNvbnN0IHNocmluayA9IGl0ZW1Ub1Nocmluay5jaGlsZHJlblszXTtcbiAgICBjb25zdCBleHBhbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBleHBhbmQuY2xhc3NMaXN0LmFkZCgnZXhwYW5kJyk7XG4gICAgY29uc3QgZXhwYW5kSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGV4cGFuZEljb24uc2V0QXR0cmlidXRlKCdzcmMnLCBFeHBhbmRJY29uKTtcbiAgICBleHBhbmQuYXBwZW5kQ2hpbGQoZXhwYW5kSWNvbik7XG4gICAgaXRlbVRvU2hyaW5rLmluc2VydEJlZm9yZShleHBhbmQsIHNocmluayk7XG4gICAgc2hyaW5rLnJlbW92ZSgpO1xuXG4gICAgLy8gc2VsZWN0IGV4cGFuZGVkIGl0ZW0gZGVzY3JpcHRpb24sIHRoZW4gZGVsZXRlIGl0OlxuICAgIGNvbnN0IGl0ZW1EZXNjcmlwdGlvbiA9IGl0ZW1Ub1Nocmluay5jaGlsZHJlbls0XTtcbiAgICBpdGVtRGVzY3JpcHRpb24ucmVtb3ZlKCk7XG5cbiAgICAvLyBzZWxlY3QgZGVsZXRlIGljb24gPGRpdj4sIHRoZW4gZGVsZXRlIGl0OlxuICAgIGNvbnN0IGRlbGV0ZUljb24gPSBpdGVtVG9TaHJpbmsuY2hpbGRyZW5bNF07XG4gICAgZGVsZXRlSWNvbi5yZW1vdmUoKTtcblxuICAgIGNvbnN0IGl0ZW1UaXRsZSA9IGl0ZW1Ub1Nocmluay5jaGlsZHJlblsxXTtcbiAgICByZXBsYWNlRXhwYW5kTGlzdGVuZXIoaXRlbVRpdGxlKTtcblxuICAgIHJlcGxhY2VFeHBhbmRMaXN0ZW5lcihleHBhbmQpO1xuXG59XG5cbmNvbnN0IHN3aXRjaFRvRGFyayA9ICgpID0+IHtcbiAgICBjb25zdCBldmVyeXRoaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYm9keSAqJyk7XG4gICAgZXZlcnl0aGluZy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RhcmsnKTtcbiAgICB9KTtcbiAgICBkaXNwbGF5TW9kZSA9ICdkYXJrJztcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGlzcGxheU1vZGUnLCAnZGFyaycpO1xuICAgIHN0eWxlRGFya0ljb24oKTtcbn1cblxuY29uc3Qgc3R5bGVEYXJrSWNvbiA9ICgpID0+IHtcbiAgICAvLyBjaGVjayB0aGF0IGRhcmsgbW9kZSBpcyBzZWxlY3RlZDpcbiAgICBpZiAoZGlzcGxheU1vZGUgPT09ICdkYXJrJykge1xuICAgICAgICAvLyByZW1vdmUgc2VsZWN0aW9uIGZyb20gbGlnaHQgbW9kZSBpY29uOlxuICAgICAgICBjb25zdCBsaWdodEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlnaHQtbW9kZScpO1xuICAgICAgICBsaWdodEljb24uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQtZGlzcGxheScpO1xuICAgICAgICAvLyBtYXJrIGRhcmsgbW9kZSBpY29uIGFzIHNlbGVjdGVkOlxuICAgICAgICBjb25zdCBkYXJrSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXJrLW1vZGUnKTtcbiAgICAgICAgZGFya0ljb24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQtZGlzcGxheScpO1xuICAgIH1cbn1cblxuY29uc3Qgc3dpdGNoVG9MaWdodCA9ICgpID0+IHtcbiAgICBjb25zdCBldmVyeXRoaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKicpO1xuICAgIGV2ZXJ5dGhpbmcuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrJyk7XG4gICAgfSk7XG4gICAgZGlzcGxheU1vZGUgPSAnbGlnaHQnO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkaXNwbGF5TW9kZScsICdsaWdodCcpO1xuICAgIHN0eWxlTGlnaHRJY29uKCk7XG59XG5cbmNvbnN0IHJldHJpZXZlU3RvcmVkRGlzcGxheU1vZGUgPSAoKSA9PiB7XG4gICAgY29uc3QgZGlzcGxheU1vZGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGlzcGxheU1vZGUnKTtcbiAgICBpZiAoZGlzcGxheU1vZGUgPT09ICdkYXJrJykge1xuICAgICAgICBzd2l0Y2hUb0RhcmsoKTtcbiAgICB9IGVsc2UgaWYgKGRpc3BsYXlNb2RlID09PSAnbGlnaHQnKSB7XG4gICAgICAgIHN3aXRjaFRvTGlnaHQoKTtcbiAgICB9XG59XG5cbmNvbnN0IHN0eWxlTGlnaHRJY29uID0gKCkgPT4ge1xuICAgIC8vIGNoZWNrIHRoYXQgbGlnaHQgbW9kZSBpcyBzZWxlY3RlZDpcbiAgICBpZiAoZGlzcGxheU1vZGUgPT09ICdsaWdodCcpIHtcbiAgICAgICAgLy8gcmVtb3ZlIHNlbGVjdGlvbiBmcm9tIGRhcmsgbW9kZSBpY29uOlxuICAgICAgICBjb25zdCBkYXJrSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXJrLW1vZGUnKTtcbiAgICAgICAgZGFya0ljb24uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQtZGlzcGxheScpO1xuICAgICAgICAvLyBtYXJrIGxpZ2h0IG1vZGUgaWNvbiBhcyBzZWxlY3RlZDpcbiAgICAgICAgY29uc3QgbGlnaHRJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpZ2h0LW1vZGUnKTtcbiAgICAgICAgbGlnaHRJY29uLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkLWRpc3BsYXknKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IFxuICAgIHJlbmRlclBhZ2UsIFxuICAgIHJlbmRlck5vdywgXG4gICAgcmVuZGVyTGF0ZXIsIFxuICAgIHJlbmRlckFsbCwgXG4gICAgZXhwYW5kSXRlbSxcbiAgICBzaHJpbmtJdGVtLCBcbiAgICB1cGRhdGVDdXJyZW50VmlldywgXG4gICAgZ2V0Q3VycmVudFZpZXcsXG4gICAgY2hlY2tDaGVja2JveCxcbiAgICB1bmNoZWNrQ2hlY2tib3gsXG4gICAgcmVuZGVyQWRkRm9ybSxcbiAgICBzdHlsZVJhZGlvT3B0aW9uLFxuICAgIHN1Ym1pdEFkZEZvcm0sXG4gICAgc3VibWl0RWRpdEZvcm0sXG4gICAgcmVtb3ZlQWRkRm9ybSxcbiAgICByZW1vdmVFZGl0Rm9ybSxcbiAgICBzd2l0Y2hUb0RhcmssXG4gICAgc3dpdGNoVG9MaWdodCxcbiAgICBzdHlsZURhcmtJY29uLFxuICAgIHN0eWxlTGlnaHRJY29uLFxuICAgIHNob3dFZGl0UG9wdXAsXG4gICAgY3JlYXRlQmx1ckJhY2tkcm9wLFxuICAgIHJldHJpZXZlU3RvcmVkRGlzcGxheU1vZGUsXG4gICAgcmVuZGVyU3RvcmVkVmlldyxcbiAgICBkaXNwbGF5TW9kZVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==