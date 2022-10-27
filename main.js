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
___CSS_LOADER_EXPORT___.push([module.id, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n:root {\n    --rvv: calc(1rem + 1vh + 1vw);\n\n\t--blue: #2E5169;\n    --blue-gray: #5E686D;\n    --brown: #6F5746;\n    --brown-muted: #63584C;\n    --brown-tan: #A58F85;\n    --forest-green: #4D663E;\n    --green-brown: #5F563F;\n    --gray-tan: #C9BBA3;\n    --tan-gray: #D1C9BA;\n    --off-white: #E4D9C5;\n    --orange-yellow: #E1B270;\n    --orange-tan: #CDA885;\n    --red: #AC3A3E;\n    --special-red: #824E4A;\n    --tan: #D2BC9B;\n\n\t--title-footer-color: #ba8e5ede;\n\t--nav-bg: #e4d9c574;\n\t--now-button: #749c5d;\n\t--later-button: #b56c67;\n\t--all-button: #e0a85bc2;\n\t--button-outline: #f0991fd5;\n\t--input-focus-outline: #e5982d;\n\t--input-valid-outline:#4D663E;\n\t--main-bg: #e1cfae97;\n\t--item-bg: #2086ca92;\n\t--now-item-bg: #629c407c;\n\t--later-item-bg: #da8680c1;\n\t--description-bg: #d8f2ff95;\n\t--add-item-button: #ba8d5e85;\n\t--form-bg: #f0d7a9;\n\t--priority-button-default: #c8b5a285;\n\t--form-button: #ba8d5e85;\n\t--form-input-bg: #F3EEE5;\n\t--submit-button-bg: #87b6d5b4;\n\t--close-button: #986f4471;\n\t--display-icon: calc(var(--rvv));\n\n\t--dark-text: #ddd2bf;\n\t--dark-border: #272420;\n\t--dark-title-footer-color: #201c19de;\n\t--dark-nav-bg: #23201cc3;\n\t--dark-now-button: #384a2dda;\n\t--dark-later-button: #8e5652;\n\t--dark-all-button: #d49f539c;\n\t--dark-button-outline: #ee9f32ca;\n\t--dark-input-focus-outline: #ee9f32ca;\n\t--dark-input-valid-outline:#4D663E;\n\t--dark-main-bg: #24211da1;\n\t--dark-item-bg: #123c5892;\n\t--dark-now-item-bg: rgba(46, 80, 28, 0.527);\n\t--dark-later-item-bg: #754743b2;\n\t--dark-add-item-button: #815e3670;\n\t--dark-form-bg: #423d38;\n\t--dark-priority-button-default: #8b776285;\n\t--dark-form-button: #ba8d5e85;\n\t--dark-form-input-bg: #aba69a;\n\t--dark-submit-button-bg: #668da8b4;\n\t--dark-close-button: #96857385;\n\n\ttouch-action: pan-x pan-y;\n}\n\n@font-face {\n\tfont-family: 'Major Mono';\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n\tfont-family: 'Sublima';\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n@font-face {\n\tfont-family: 'Sublima Bold';\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\nhtml,\nbody {\n\tbox-sizing: border-box;\n\tposition: relative;\n\toverflow-x: hidden;\n}\n\nbody {\n\tmargin: 0;\n\tpadding: 0;\n\theight: 100vh;\n\twidth: 100vw;\n}\n\n.wrapper {\n\tmin-height: 100%;\n\twidth: 100vw;\n\tmax-width: 100%;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tposition: relative;\n\toverflow-x: hidden;\n\toverflow-y: scroll;\n\tdisplay: flex;\n    flex-direction: column;\n}\n\nheader {\n\theight: 15vh;\n\tmin-height: calc(3.2*var(--rvv));\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.title {\n\toverflow: hidden;\n\tmin-height: calc(var(--rvv));\n\tflex: 1;\n\toverflow-x: hidden;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: calc(0.6*var(--rvv));\n\tbackground-color: var(--title-footer-color);\n\tborder-bottom: 1px solid black;\n}\n\n.title-text {\n\ttext-align: center;\n\tfont-family: 'Sublima';\n\tfont-size: calc(0.45*var(--rvv));\n\tletter-spacing: calc(0.1*var(--rvv));\n\ttext-indent: calc(0.1*var(--rvv));\n}\n\n.light-mode,\n.dark-mode {\n\tcursor: pointer;\n\theight: var(--display-icon);\n\twidth: var(--display-icon);\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.light-mode.dark,\n.dark-mode.dark {\n\tfilter: invert(80%);\n}\n\n.light-mode img,\n.dark-mode img {\n\theight: 80%;\n\twidth: 80%;\n}\n\n.selected-display.light-mode,\n.selected-display.dark-mode {\n\ttransition: 0.25s linear;\n}\n\n.selected-display.light-mode img {\n\tfilter: drop-shadow(0 0 5px var(--red));\n\ttransform: scale(1.2);\n}\n\n.selected-display.dark-mode img {\n\tfilter: drop-shadow(0 0 5px black);\n\ttransform: scale(1.2);\n}\n\n.nav {\n\tflex: 2;\n\tdisplay: flex;\n\tjustify-content: space-around;\n\talign-items: center;\n\tfont-family: 'Major Mono';\n\tbackground-color: var(--nav-bg);\n\tborder-bottom: 1px solid black;\n}\n\n.nav div {\n\tfont-size: calc(0.6*var(--rvv));\n\tcursor: pointer;\n\twidth: calc(3*var(--rvv));\n\theight: calc(var(--rvv));\n\tborder: 1px solid black;\n\tborder-radius: 15%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n}\n\n.now {\n\tbackground-color: var(--now-button);\n}\n\n.now,\n.all {\n\tletter-spacing: calc(0.3*var(--rvv));\n\ttext-indent: calc(0.3*var(--rvv));\n}\n\n.later {\n\tbackground-color: var(--later-button);\n\tletter-spacing: calc(0.1*var(--rvv));\n\ttext-indent: calc(0.1*var(--rvv));\n}\n\n.all {\n\tbackground-color: var(--all-button);\n}\n\n.selected {\n\tbox-shadow: 0 0 0 3px var(--button-outline);\n}\n\n.main {\n\tposition: relative;\n\tflex: auto;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tpadding: calc(0.5*var(--rvv)) 0;\n\tgap: calc(0.6*var(--rvv));\n\tbackground-color: var(--main-bg);\n}\n\n.displayed-item {\n\twidth: 90vw;\n\tmax-width: calc(15*var(--rvv));\n\tposition: relative;\n\tfont-family: 'Sublima';\n\tfont-size: calc(0.6*var(--rvv));\n\tpadding: calc(0.1*var(--rvv)) calc(0.3*var(--rvv));\n\tborder: 1px solid black;\n\tborder-radius: calc(0.8*var(--rvv));\n\tmargin: 0 calc(0.7*var(--rvv));\n\tdisplay: grid;\n\tgrid-template-columns: calc(1.4*var(--rvv)) 1fr calc(var(--rvv)) calc(var(--rvv));\n\tgrid-template-rows: 1fr;\n\tgrid-template-areas: \"checkbox title edit expand\";\n\tbackground-color: var(--item-bg);\n}\n\n.displayed-item.now-item {\n\tbackground-color: var(--now-item-bg);\n}\n\n.displayed-item.later-item {\n\tbackground-color: var(--later-item-bg);\n}\n\n.expanded-item {\n\tdisplay: grid;\n\tgrid-template-columns: calc(1.4*var(--rvv)) 1fr calc(var(--rvv)) calc(var(--rvv));\n\tgrid-template-rows: calc(1.2*var(--rvv)) 1fr;\n\tgrid-template-areas: \n\t\t\"checkbox title edit expand\"\n\t\t\". description . delete\";\n}\n\n.expanded-item .item-description {\n\tmargin-right: calc(0.3*var(--rvv));\n\tmargin-bottom: calc(0.3*var(--rvv));\n}\n\n.expanded-item .item-title {\n\tcursor: auto;\n}\n\n.completed-item {\n\tfilter: grayscale(70%);\n}\n\n.completed-item .item-title {\n\tfont-style: italic;\n\ttext-decoration: underline calc(0.04*var(--rvv)) black;\n\ttext-decoration-skip-ink: none;\n\ttext-underline-offset: calc(-0.2*var(--rvv));\n}\n\n.completed-item .item-description {\n\tfont-style: italic;\n}\n\n.displayed-item.add-item-button {\n\tpadding: 0;\n\tmargin: 0;\n\tcursor: pointer;\n\tbackground-color: var(--add-item-button);\n\theight: calc(1.5*var(--rvv));\n\twidth: calc(1.5*var(--rvv));\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.add-item-button img {\n\tmax-height: 100%;\n\tmax-width: 100%;\n}\n\n.add-form,\n.edit-form {\n\tdisplay: block;\n\tz-index: 3;\n\tposition: fixed;\n\ttop: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.add-form-itself,\n.edit-form-itself {\n\tbackground-color: var(--form-bg);\n\tdisplay: grid;\n\twidth: 90vw;\n\tposition: relative;\n\tmax-width: calc(15*var(--rvv));\n\tfont-family: 'Sublima';\n\tfont-size: calc(0.6*var(--rvv));\n\tpadding: calc(0.1*var(--rvv)) calc(0.3*var(--rvv));\n\tborder: 1px solid black;\n\tborder-radius: calc(0.8*var(--rvv));\n\tgrid-template-rows: calc(1.7*var(--rvv)) calc(var(--rvv)) calc(4*var(--rvv)) calc(var(--rvv)) calc(2.2*var(--rvv));\n\trow-gap: calc(0.25*var(--rvv));\n\tgrid-template-areas:\n\t\t\"form-title\"\n\t\t\"title-section\"\n\t\t\"description-section\"\n\t\t\"priority-section\"\n\t\t\"submit-button\";\n}\n\n.edit-form-title-text {\n\tmax-height: calc(1.7*var(--rvv));\n\tmax-width: calc(12*var(--rvv));\n\toverflow: hidden;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\tmargin-right: calc(var(--rvv));\n}\n\n.blur-backdrop {\n\tz-index: 2;\n\tposition: fixed;\n\toverflow: hidden;\n\tmin-width: 200vw;\n\theight: 200vh;\n\tbackdrop-filter: blur(5px);\n\t-webkit-backdrop-filter: blur(5px);\n}\n\n.form-title {\n\tmargin: 0 1%;\n\tmax-width: 90vw;\n\tgrid-area: form-title;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.form-title-text {\n\tfont-size: calc(0.7*var(--rvv));\n}\n\n.form-title-text:hover {\n\tfont-style: italic;\n}\n\n.close-button {\n\tcursor: pointer;\n\tbackground-color: var(--close-button);\n\tmargin-left: auto;\n\tborder: 1px solid black;\n\theight: calc(0.9*var(--rvv));\n\twidth: calc(0.9*var(--rvv));\n\tborder-radius: calc(var(--rvv));\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.close-button img {\n\theight: 100%;\n}\n\n.title-section {\n\tgrid-area: title-section;\n\tdisplay: grid;\n\tgrid-template-columns: calc(3.5*var(--rvv)) 1fr;\n}\n\n.title-section label {\n\tfont-size: calc(0.5*var(--rvv));\n}\n\n.title-section input,\n.description-section textarea {\n\twidth: 93%;\n\tbackground-color: var(--form-input-bg);\n\tborder: 1px solid black;\n\tborder-radius: calc(var(--rvv));\n\tpadding-left: 10px;\n\tfont-family: 'Sublima';\n\tfont-size: calc(0.45*var(--rvv));\n}\n\n.description-section textarea {\n\tborder-radius: calc(0.5*var(--rvv));\n\tresize: none;\n}\n\ninput:focus,\ntextarea:focus {\n\tappearance: none;\n\toutline: none;\n\tbox-shadow: 0 0 0 3px var(--input-focus-outline);\n}\n\ninput:not(:focus),\ntextarea:not(:focus) {\n\tcursor: pointer;\n}\n\n.description-section {\n\tgrid-area: description-section;\n\tdisplay: grid;\n\tgrid-template-columns: calc(3.5*var(--rvv)) 1fr;\n}\n\n.description-section label {\n\tfont-size: calc(0.5*var(--rvv));\n}\n\n.priority-section {\n\tmargin-top: 2px;\n\tgrid-area: priority-section;\n\tdisplay: grid;\n\tgrid-template-columns: calc(3.5*var(--rvv)) 1fr 1fr;\n}\n\n.priority-label {\n\tfont-size: calc(0.5*var(--rvv));\n}\n\n.radio-option {\n\tcursor: pointer;\n\tfont-family: 'Major Mono';\n\twidth: calc(3*var(--rvv));\n\theight: calc(var(--rvv));\n\tborder: 1px solid black;\n\tborder-radius: 15%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n\tbackground-color: var(--priority-button-default);\n}\n\n.radio-option label {\n\tcursor: pointer;\n}\n\n.now-option {\n\tjustify-self: center;\n\tletter-spacing: calc(0.3*var(--rvv));\n\ttext-indent: calc(0.3*var(--rvv));\n}\n\n.now-option.selected-priority {\n\tbackground-color: var(--now-button);\n\tbox-shadow: 0 0 0 3px var(--button-outline);\n}\n\n.later-option {\n\tjustify-self: center;\n\tletter-spacing: calc(0.1*var(--rvv));\n\ttext-indent: calc(0.1*var(--rvv));\n}\n\n.later-option.selected-priority {\n\tbackground-color: var(--later-button);\n\tbox-shadow: 0 0 0 3px var(--button-outline);\n}\n\n.radio-input {\n\tdisplay: none;\n\tpadding: 0;\n\tmargin: 0;\n\tappearance: none;\n}\n\n.submit-button {\n\tcursor: pointer;\n\tgrid-area: submit-button;\n\tfont-family: 'Sublima';\n\tbackground-color: var(--submit-button-bg);\n\talign-self: center;\n\tjustify-self: center;\n\tborder: 1px solid black;\n\theight: calc(1.5*var(--rvv));\n\twidth: 95%;\n\tborder-radius: calc(var(--rvv));\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.submit-button img {\n\theight: 100%;\n}\n\n.displayed-item img {\n\tcursor: pointer;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.checkbox img,\n.expand img {\n\twidth: calc(var(--rvv));\n}\n\n.edit img {\n\twidth: calc(0.8*var(--rvv));\n}\n\n.checkbox {\n\tgrid-area: checkbox;\n\tmargin-left: calc(0.2*var(--rvv));\n}\n\n.item-title {\n\tposition: relative;\n\tbottom: 2px;\n\tgrid-area: title;\n\tjustify-self: start;\n}\n\n.expandable-title {\n\tcursor: pointer;\n}\n\n.edit {\n\tgrid-area: edit;\n}\n\n.expand {\n\tgrid-area: expand;\n}\n\n.shrink {\n\tgrid-area: expand;\n\taspect-ratio: 1 / 1;\n}\n\n.shrink img {\n\theight: calc(var(--rvv));\n}\n\n.item-description {\n\tborder-radius: 3px;\n\tfont-style: italic;\n\tgrid-area: description;\n\talign-self: flex-start;\n\tjustify-self: flex-start;\n\tfont-size: 80%;\n}\n\n.expanded-item .delete {\n\tgrid-area: delete;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: flex-end;\n\tmargin-bottom: calc(0.3*var(--rvv));\n}\n\n.delete img {\n\theight: calc(var(--rvv));\n}\n\nfooter {\n\theight: 5vh;\n\tmin-height: calc(0.8*var(--rvv));\n\tbackground-color: var(--title-footer-color);\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-size: calc(0.5*var(--rvv));\n\tborder-top: 1px solid black;\n\tfont-family: 'Sublima';\n\tfont-size: calc(0.4*var(--rvv));\n\tletter-spacing: calc(0.1*var(--rvv));\n\ttext-indent: calc(0.1*var(--rvv));\n}\n\n/* dark mode styling: */\n\n.wrapper.dark {\n\tcolor: var(--dark-text);\n}\n\n.title.dark {\n\tbackground-color: var(--dark-title-footer-color);\n\tborder-bottom: 1px solid var(--dark-border);\n}\n\n.nav.dark {\n\tbackground-color: var(--dark-nav-bg);\n\tborder-bottom: 1px solid var(--dark-border);\n}\n\n.nav.dark div {\n\tborder: 1px solid var(--dark-border);\n}\n\n.now.dark {\n\tbackground-color: var(--dark-now-button);\n}\n\n.later.dark {\n\tbackground-color: var(--dark-later-button);\n}\n\n.all.dark {\n\tbackground-color: var(--dark-all-button);\n}\n\n.selected.dark {\n\tbox-shadow: 0 0 0 3px var(--dark-button-outline);\n}\n\n.main.dark {\n\tbackground-color: var(--dark-main-bg);\n}\n\n.displayed-item.dark {\n\tborder: 1px solid var(--dark-border);\n\tbackground-color: var(--dark-item-bg);\n}\n\n.displayed-item.now-item.dark {\n\tbackground-color: var(--dark-now-item-bg);\n}\n\n.displayed-item.later-item.dark {\n\tbackground-color: var(--dark-later-item-bg);\n}\n\n.completed-item .item-title.dark {\n\tfilter: brightness(80%);\n\ttext-decoration: underline calc(0.04*var(--rvv)) var(--dark-text);\n\ttext-decoration-skip-ink: none;\n}\n\n.add-form-itself.dark,\n.edit-form-itself.dark {\n\tbackground-color: var(--dark-form-bg);\n}\n\n.close-button.dark {\n\tbackground-color: var(--dark-close-button);\n\tborder: 1px solid var(--dark-border);\n}\n\n.title-section.dark input,\n.description-section.dark textarea {\n\tbackground-color: var(--dark-form-input-bg);\n\tborder: 1px solid var(--dark-border);\n}\n\ninput.dark:focus,\ntextarea.dark:focus {\n\tbox-shadow: 0 0 0 3px var(--dark-input-focus-outline);\n}\n\n.radio-option.dark {\n\tborder: 1px solid var(--dark-border);\n\tbackground-color: var(--dark-priority-button-default);\n}\n\n.now-option.selected-priority.dark {\n\tbackground-color: var(--dark-now-button);\n\tbox-shadow: 0 0 0 3px var(--dark-button-outline);\n}\n\n.later-option.selected-priority.dark {\n\tbackground-color: var(--dark-later-button);\n\tbox-shadow: 0 0 0 3px var(--dark-button-outline);\n}\n\n.displayed-item.add-item-button.dark {\n\tbackground-color: var(--dark-add-item-button);\n}\n\n.submit-button.dark {\n\tbackground-color: var(--dark-submit-button-bg);\n\tborder: 1px solid var(--dark-border);\n}\n\nfooter.dark {\n\tbackground-color: var(--dark-title-footer-color);\n\tborder-top: 1px solid var(--dark-border);\n}\n\n/* desktop version: */\n@media only screen and (min-width: 750px) {\n\n\t.nav div {\n\t\ttransition: 0.075s linear;\n\t}\n\n\t.nav div:hover {\n\t\ttransform: scale(1.05);\n\t}\n\n\t.checkbox,\n\t.edit,\n\t.expand,\n\t.shrink,\n\t.delete,\n\t.add-item-button,\n\t.radio-option,\n\t.submit-button,\n\t.close-button {\n\t\ttransition: 0.075s linear;\n\t}\n\n\t.checkbox:hover {\n\t\ttransform: scale(1.075);\n\t}\n\n\t.edit:hover {\n\t\ttransform: scale(1.1);\n\t}\n\n\t.expand:hover {\n\t\ttransform: scale(1.25);\n\t}\n\n\t.shrink:hover {\n\t\ttransform: scale(1.1);\n\t}\n\n\t.delete:hover {\n\t\ttransform: scale(1.075);\n\t}\n\n\t.add-item-button:hover {\n\t\ttransform: scale(1.05);\n\t}\n\n\t.radio-option:hover {\n\t\ttransform: scale(1.05);\n\t}\n\n\t.submit-button:hover {\n\t\ttransform: scale(1.01);\n\t}\n\n\t.close-button:hover {\n\t\ttransform: scale(1.1);\n\t}\n\n}\n\n@media only screen and (max-width: 750px) {\n\t.completed-item .item-title,\n\t.completed-item .item-title.dark {\n\t\tfont-style: italic;\n\t\ttext-decoration: line-through;\n\t\ttext-decoration-skip-ink: none;\n\t\ttext-underline-offset: 0;\n\t}\n}\n\n@media screen and (orientation: landscape) {\n\tbody {\n\t\tmin-height: 100vh;\n\t\tmin-width: 100vw;\n\t}\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n:root {\n    --rvv: calc(1rem + 1vh + 1vw);\n\n\t--blue: #2E5169;\n    --blue-gray: #5E686D;\n    --brown: #6F5746;\n    --brown-muted: #63584C;\n    --brown-tan: #A58F85;\n    --forest-green: #4D663E;\n    --green-brown: #5F563F;\n    --gray-tan: #C9BBA3;\n    --tan-gray: #D1C9BA;\n    --off-white: #E4D9C5;\n    --orange-yellow: #E1B270;\n    --orange-tan: #CDA885;\n    --red: #AC3A3E;\n    --special-red: #824E4A;\n    --tan: #D2BC9B;\n\n\t--title-footer-color: #ba8e5ede;\n\t--nav-bg: #e4d9c574;\n\t--now-button: #749c5d;\n\t--later-button: #b56c67;\n\t--all-button: #e0a85bc2;\n\t--button-outline: #f0991fd5;\n\t--input-focus-outline: #e5982d;\n\t--input-valid-outline:#4D663E;\n\t--main-bg: #e1cfae97;\n\t--item-bg: #2086ca92;\n\t--now-item-bg: #629c407c;\n\t--later-item-bg: #da8680c1;\n\t--description-bg: #d8f2ff95;\n\t--add-item-button: #ba8d5e85;\n\t--form-bg: #f0d7a9;\n\t--priority-button-default: #c8b5a285;\n\t--form-button: #ba8d5e85;\n\t--form-input-bg: #F3EEE5;\n\t--submit-button-bg: #87b6d5b4;\n\t--close-button: #986f4471;\n\t--display-icon: calc(var(--rvv));\n\n\t--dark-text: #ddd2bf;\n\t--dark-border: #272420;\n\t--dark-title-footer-color: #201c19de;\n\t--dark-nav-bg: #23201cc3;\n\t--dark-now-button: #384a2dda;\n\t--dark-later-button: #8e5652;\n\t--dark-all-button: #d49f539c;\n\t--dark-button-outline: #ee9f32ca;\n\t--dark-input-focus-outline: #ee9f32ca;\n\t--dark-input-valid-outline:#4D663E;\n\t--dark-main-bg: #24211da1;\n\t--dark-item-bg: #123c5892;\n\t--dark-now-item-bg: rgba(46, 80, 28, 0.527);\n\t--dark-later-item-bg: #754743b2;\n\t--dark-add-item-button: #815e3670;\n\t--dark-form-bg: #423d38;\n\t--dark-priority-button-default: #8b776285;\n\t--dark-form-button: #ba8d5e85;\n\t--dark-form-input-bg: #aba69a;\n\t--dark-submit-button-bg: #668da8b4;\n\t--dark-close-button: #96857385;\n\n\ttouch-action: pan-x pan-y;\n}\n\n@font-face {\n\tfont-family: 'Major Mono';\n\tsrc: url('font/major-mono/major-mono.ttf');\n}\n\n@font-face {\n\tfont-family: 'Sublima';\n\tsrc: url('font/sublima/sublima-light.otf');\n}\n\n@font-face {\n\tfont-family: 'Sublima Bold';\n\tsrc: url('font/sublima/sublima-extra-bold.otf');\n}\n\nhtml,\nbody {\n\tbox-sizing: border-box;\n\tposition: relative;\n\toverflow-x: hidden;\n}\n\nbody {\n\tmargin: 0;\n\tpadding: 0;\n\theight: 100vh;\n\twidth: 100vw;\n}\n\n.wrapper {\n\tmin-height: 100%;\n\twidth: 100vw;\n\tmax-width: 100%;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tposition: relative;\n\toverflow-x: hidden;\n\toverflow-y: scroll;\n\tdisplay: flex;\n    flex-direction: column;\n}\n\nheader {\n\theight: 15vh;\n\tmin-height: calc(3.2*var(--rvv));\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.title {\n\toverflow: hidden;\n\tmin-height: calc(var(--rvv));\n\tflex: 1;\n\toverflow-x: hidden;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: calc(0.6*var(--rvv));\n\tbackground-color: var(--title-footer-color);\n\tborder-bottom: 1px solid black;\n}\n\n.title-text {\n\ttext-align: center;\n\tfont-family: 'Sublima';\n\tfont-size: calc(0.45*var(--rvv));\n\tletter-spacing: calc(0.1*var(--rvv));\n\ttext-indent: calc(0.1*var(--rvv));\n}\n\n.light-mode,\n.dark-mode {\n\tcursor: pointer;\n\theight: var(--display-icon);\n\twidth: var(--display-icon);\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.light-mode.dark,\n.dark-mode.dark {\n\tfilter: invert(80%);\n}\n\n.light-mode img,\n.dark-mode img {\n\theight: 80%;\n\twidth: 80%;\n}\n\n.selected-display.light-mode,\n.selected-display.dark-mode {\n\ttransition: 0.25s linear;\n}\n\n.selected-display.light-mode img {\n\tfilter: drop-shadow(0 0 5px var(--red));\n\ttransform: scale(1.2);\n}\n\n.selected-display.dark-mode img {\n\tfilter: drop-shadow(0 0 5px black);\n\ttransform: scale(1.2);\n}\n\n.nav {\n\tflex: 2;\n\tdisplay: flex;\n\tjustify-content: space-around;\n\talign-items: center;\n\tfont-family: 'Major Mono';\n\tbackground-color: var(--nav-bg);\n\tborder-bottom: 1px solid black;\n}\n\n.nav div {\n\tfont-size: calc(0.6*var(--rvv));\n\tcursor: pointer;\n\twidth: calc(3*var(--rvv));\n\theight: calc(var(--rvv));\n\tborder: 1px solid black;\n\tborder-radius: 15%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n}\n\n.now {\n\tbackground-color: var(--now-button);\n}\n\n.now,\n.all {\n\tletter-spacing: calc(0.3*var(--rvv));\n\ttext-indent: calc(0.3*var(--rvv));\n}\n\n.later {\n\tbackground-color: var(--later-button);\n\tletter-spacing: calc(0.1*var(--rvv));\n\ttext-indent: calc(0.1*var(--rvv));\n}\n\n.all {\n\tbackground-color: var(--all-button);\n}\n\n.selected {\n\tbox-shadow: 0 0 0 3px var(--button-outline);\n}\n\n.main {\n\tposition: relative;\n\tflex: auto;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tpadding: calc(0.5*var(--rvv)) 0;\n\tgap: calc(0.6*var(--rvv));\n\tbackground-color: var(--main-bg);\n}\n\n.displayed-item {\n\twidth: 90vw;\n\tmax-width: calc(15*var(--rvv));\n\tposition: relative;\n\tfont-family: 'Sublima';\n\tfont-size: calc(0.6*var(--rvv));\n\tpadding: calc(0.1*var(--rvv)) calc(0.3*var(--rvv));\n\tborder: 1px solid black;\n\tborder-radius: calc(0.8*var(--rvv));\n\tmargin: 0 calc(0.7*var(--rvv));\n\tdisplay: grid;\n\tgrid-template-columns: calc(1.4*var(--rvv)) 1fr calc(var(--rvv)) calc(var(--rvv));\n\tgrid-template-rows: 1fr;\n\tgrid-template-areas: \"checkbox title edit expand\";\n\tbackground-color: var(--item-bg);\n}\n\n.displayed-item.now-item {\n\tbackground-color: var(--now-item-bg);\n}\n\n.displayed-item.later-item {\n\tbackground-color: var(--later-item-bg);\n}\n\n.expanded-item {\n\tdisplay: grid;\n\tgrid-template-columns: calc(1.4*var(--rvv)) 1fr calc(var(--rvv)) calc(var(--rvv));\n\tgrid-template-rows: calc(1.2*var(--rvv)) 1fr;\n\tgrid-template-areas: \n\t\t\"checkbox title edit expand\"\n\t\t\". description . delete\";\n}\n\n.expanded-item .item-description {\n\tmargin-right: calc(0.3*var(--rvv));\n\tmargin-bottom: calc(0.3*var(--rvv));\n}\n\n.expanded-item .item-title {\n\tcursor: auto;\n}\n\n.completed-item {\n\tfilter: grayscale(70%);\n}\n\n.completed-item .item-title {\n\tfont-style: italic;\n\ttext-decoration: underline calc(0.04*var(--rvv)) black;\n\ttext-decoration-skip-ink: none;\n\ttext-underline-offset: calc(-0.2*var(--rvv));\n}\n\n.completed-item .item-description {\n\tfont-style: italic;\n}\n\n.displayed-item.add-item-button {\n\tpadding: 0;\n\tmargin: 0;\n\tcursor: pointer;\n\tbackground-color: var(--add-item-button);\n\theight: calc(1.5*var(--rvv));\n\twidth: calc(1.5*var(--rvv));\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.add-item-button img {\n\tmax-height: 100%;\n\tmax-width: 100%;\n}\n\n.add-form,\n.edit-form {\n\tdisplay: block;\n\tz-index: 3;\n\tposition: fixed;\n\ttop: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.add-form-itself,\n.edit-form-itself {\n\tbackground-color: var(--form-bg);\n\tdisplay: grid;\n\twidth: 90vw;\n\tposition: relative;\n\tmax-width: calc(15*var(--rvv));\n\tfont-family: 'Sublima';\n\tfont-size: calc(0.6*var(--rvv));\n\tpadding: calc(0.1*var(--rvv)) calc(0.3*var(--rvv));\n\tborder: 1px solid black;\n\tborder-radius: calc(0.8*var(--rvv));\n\tgrid-template-rows: calc(1.7*var(--rvv)) calc(var(--rvv)) calc(4*var(--rvv)) calc(var(--rvv)) calc(2.2*var(--rvv));\n\trow-gap: calc(0.25*var(--rvv));\n\tgrid-template-areas:\n\t\t\"form-title\"\n\t\t\"title-section\"\n\t\t\"description-section\"\n\t\t\"priority-section\"\n\t\t\"submit-button\";\n}\n\n.edit-form-title-text {\n\tmax-height: calc(1.7*var(--rvv));\n\tmax-width: calc(12*var(--rvv));\n\toverflow: hidden;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\tmargin-right: calc(var(--rvv));\n}\n\n.blur-backdrop {\n\tz-index: 2;\n\tposition: fixed;\n\toverflow: hidden;\n\tmin-width: 200vw;\n\theight: 200vh;\n\tbackdrop-filter: blur(5px);\n\t-webkit-backdrop-filter: blur(5px);\n}\n\n.form-title {\n\tmargin: 0 1%;\n\tmax-width: 90vw;\n\tgrid-area: form-title;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.form-title-text {\n\tfont-size: calc(0.7*var(--rvv));\n}\n\n.form-title-text:hover {\n\tfont-style: italic;\n}\n\n.close-button {\n\tcursor: pointer;\n\tbackground-color: var(--close-button);\n\tmargin-left: auto;\n\tborder: 1px solid black;\n\theight: calc(0.9*var(--rvv));\n\twidth: calc(0.9*var(--rvv));\n\tborder-radius: calc(var(--rvv));\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.close-button img {\n\theight: 100%;\n}\n\n.title-section {\n\tgrid-area: title-section;\n\tdisplay: grid;\n\tgrid-template-columns: calc(3.5*var(--rvv)) 1fr;\n}\n\n.title-section label {\n\tfont-size: calc(0.5*var(--rvv));\n}\n\n.title-section input,\n.description-section textarea {\n\twidth: 93%;\n\tbackground-color: var(--form-input-bg);\n\tborder: 1px solid black;\n\tborder-radius: calc(var(--rvv));\n\tpadding-left: 10px;\n\tfont-family: 'Sublima';\n\tfont-size: calc(0.45*var(--rvv));\n}\n\n.description-section textarea {\n\tborder-radius: calc(0.5*var(--rvv));\n\tresize: none;\n}\n\ninput:focus,\ntextarea:focus {\n\tappearance: none;\n\toutline: none;\n\tbox-shadow: 0 0 0 3px var(--input-focus-outline);\n}\n\ninput:not(:focus),\ntextarea:not(:focus) {\n\tcursor: pointer;\n}\n\n.description-section {\n\tgrid-area: description-section;\n\tdisplay: grid;\n\tgrid-template-columns: calc(3.5*var(--rvv)) 1fr;\n}\n\n.description-section label {\n\tfont-size: calc(0.5*var(--rvv));\n}\n\n.priority-section {\n\tmargin-top: 2px;\n\tgrid-area: priority-section;\n\tdisplay: grid;\n\tgrid-template-columns: calc(3.5*var(--rvv)) 1fr 1fr;\n}\n\n.priority-label {\n\tfont-size: calc(0.5*var(--rvv));\n}\n\n.radio-option {\n\tcursor: pointer;\n\tfont-family: 'Major Mono';\n\twidth: calc(3*var(--rvv));\n\theight: calc(var(--rvv));\n\tborder: 1px solid black;\n\tborder-radius: 15%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n\tbackground-color: var(--priority-button-default);\n}\n\n.radio-option label {\n\tcursor: pointer;\n}\n\n.now-option {\n\tjustify-self: center;\n\tletter-spacing: calc(0.3*var(--rvv));\n\ttext-indent: calc(0.3*var(--rvv));\n}\n\n.now-option.selected-priority {\n\tbackground-color: var(--now-button);\n\tbox-shadow: 0 0 0 3px var(--button-outline);\n}\n\n.later-option {\n\tjustify-self: center;\n\tletter-spacing: calc(0.1*var(--rvv));\n\ttext-indent: calc(0.1*var(--rvv));\n}\n\n.later-option.selected-priority {\n\tbackground-color: var(--later-button);\n\tbox-shadow: 0 0 0 3px var(--button-outline);\n}\n\n.radio-input {\n\tdisplay: none;\n\tpadding: 0;\n\tmargin: 0;\n\tappearance: none;\n}\n\n.submit-button {\n\tcursor: pointer;\n\tgrid-area: submit-button;\n\tfont-family: 'Sublima';\n\tbackground-color: var(--submit-button-bg);\n\talign-self: center;\n\tjustify-self: center;\n\tborder: 1px solid black;\n\theight: calc(1.5*var(--rvv));\n\twidth: 95%;\n\tborder-radius: calc(var(--rvv));\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.submit-button img {\n\theight: 100%;\n}\n\n.displayed-item img {\n\tcursor: pointer;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.checkbox img,\n.expand img {\n\twidth: calc(var(--rvv));\n}\n\n.edit img {\n\twidth: calc(0.8*var(--rvv));\n}\n\n.checkbox {\n\tgrid-area: checkbox;\n\tmargin-left: calc(0.2*var(--rvv));\n}\n\n.item-title {\n\tposition: relative;\n\tbottom: 2px;\n\tgrid-area: title;\n\tjustify-self: start;\n}\n\n.expandable-title {\n\tcursor: pointer;\n}\n\n.edit {\n\tgrid-area: edit;\n}\n\n.expand {\n\tgrid-area: expand;\n}\n\n.shrink {\n\tgrid-area: expand;\n\taspect-ratio: 1 / 1;\n}\n\n.shrink img {\n\theight: calc(var(--rvv));\n}\n\n.item-description {\n\tborder-radius: 3px;\n\tfont-style: italic;\n\tgrid-area: description;\n\talign-self: flex-start;\n\tjustify-self: flex-start;\n\tfont-size: 80%;\n}\n\n.expanded-item .delete {\n\tgrid-area: delete;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: flex-end;\n\tmargin-bottom: calc(0.3*var(--rvv));\n}\n\n.delete img {\n\theight: calc(var(--rvv));\n}\n\nfooter {\n\theight: 5vh;\n\tmin-height: calc(0.8*var(--rvv));\n\tbackground-color: var(--title-footer-color);\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-size: calc(0.5*var(--rvv));\n\tborder-top: 1px solid black;\n\tfont-family: 'Sublima';\n\tfont-size: calc(0.4*var(--rvv));\n\tletter-spacing: calc(0.1*var(--rvv));\n\ttext-indent: calc(0.1*var(--rvv));\n}\n\n/* dark mode styling: */\n\n.wrapper.dark {\n\tcolor: var(--dark-text);\n}\n\n.title.dark {\n\tbackground-color: var(--dark-title-footer-color);\n\tborder-bottom: 1px solid var(--dark-border);\n}\n\n.nav.dark {\n\tbackground-color: var(--dark-nav-bg);\n\tborder-bottom: 1px solid var(--dark-border);\n}\n\n.nav.dark div {\n\tborder: 1px solid var(--dark-border);\n}\n\n.now.dark {\n\tbackground-color: var(--dark-now-button);\n}\n\n.later.dark {\n\tbackground-color: var(--dark-later-button);\n}\n\n.all.dark {\n\tbackground-color: var(--dark-all-button);\n}\n\n.selected.dark {\n\tbox-shadow: 0 0 0 3px var(--dark-button-outline);\n}\n\n.main.dark {\n\tbackground-color: var(--dark-main-bg);\n}\n\n.displayed-item.dark {\n\tborder: 1px solid var(--dark-border);\n\tbackground-color: var(--dark-item-bg);\n}\n\n.displayed-item.now-item.dark {\n\tbackground-color: var(--dark-now-item-bg);\n}\n\n.displayed-item.later-item.dark {\n\tbackground-color: var(--dark-later-item-bg);\n}\n\n.completed-item .item-title.dark {\n\tfilter: brightness(80%);\n\ttext-decoration: underline calc(0.04*var(--rvv)) var(--dark-text);\n\ttext-decoration-skip-ink: none;\n}\n\n.add-form-itself.dark,\n.edit-form-itself.dark {\n\tbackground-color: var(--dark-form-bg);\n}\n\n.close-button.dark {\n\tbackground-color: var(--dark-close-button);\n\tborder: 1px solid var(--dark-border);\n}\n\n.title-section.dark input,\n.description-section.dark textarea {\n\tbackground-color: var(--dark-form-input-bg);\n\tborder: 1px solid var(--dark-border);\n}\n\ninput.dark:focus,\ntextarea.dark:focus {\n\tbox-shadow: 0 0 0 3px var(--dark-input-focus-outline);\n}\n\n.radio-option.dark {\n\tborder: 1px solid var(--dark-border);\n\tbackground-color: var(--dark-priority-button-default);\n}\n\n.now-option.selected-priority.dark {\n\tbackground-color: var(--dark-now-button);\n\tbox-shadow: 0 0 0 3px var(--dark-button-outline);\n}\n\n.later-option.selected-priority.dark {\n\tbackground-color: var(--dark-later-button);\n\tbox-shadow: 0 0 0 3px var(--dark-button-outline);\n}\n\n.displayed-item.add-item-button.dark {\n\tbackground-color: var(--dark-add-item-button);\n}\n\n.submit-button.dark {\n\tbackground-color: var(--dark-submit-button-bg);\n\tborder: 1px solid var(--dark-border);\n}\n\nfooter.dark {\n\tbackground-color: var(--dark-title-footer-color);\n\tborder-top: 1px solid var(--dark-border);\n}\n\n/* desktop version: */\n@media only screen and (min-width: 750px) {\n\n\t.nav div {\n\t\ttransition: 0.075s linear;\n\t}\n\n\t.nav div:hover {\n\t\ttransform: scale(1.05);\n\t}\n\n\t.checkbox,\n\t.edit,\n\t.expand,\n\t.shrink,\n\t.delete,\n\t.add-item-button,\n\t.radio-option,\n\t.submit-button,\n\t.close-button {\n\t\ttransition: 0.075s linear;\n\t}\n\n\t.checkbox:hover {\n\t\ttransform: scale(1.075);\n\t}\n\n\t.edit:hover {\n\t\ttransform: scale(1.1);\n\t}\n\n\t.expand:hover {\n\t\ttransform: scale(1.25);\n\t}\n\n\t.shrink:hover {\n\t\ttransform: scale(1.1);\n\t}\n\n\t.delete:hover {\n\t\ttransform: scale(1.075);\n\t}\n\n\t.add-item-button:hover {\n\t\ttransform: scale(1.05);\n\t}\n\n\t.radio-option:hover {\n\t\ttransform: scale(1.05);\n\t}\n\n\t.submit-button:hover {\n\t\ttransform: scale(1.01);\n\t}\n\n\t.close-button:hover {\n\t\ttransform: scale(1.1);\n\t}\n\n}\n\n@media only screen and (max-width: 750px) {\n\t.completed-item .item-title,\n\t.completed-item .item-title.dark {\n\t\tfont-style: italic;\n\t\ttext-decoration: line-through;\n\t\ttext-decoration-skip-ink: none;\n\t\ttext-underline-offset: 0;\n\t}\n}\n\n@media screen and (orientation: landscape) {\n\tbody {\n\t\tmin-height: 100vh;\n\t\tmin-width: 100vw;\n\t}\n}"],"sourceRoot":""}]);
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

// setBody();

// // set the body every second:
// setTimeout(setBody, 1000);

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

    // // set initial body height & width..
    // setBody();

    // // then adjust body height & width if needed whenever the window is resized, or when the screen orientation changes:
    // window.addEventListener('resize', setBody);
    // // if browser is not safari:
    // if (!(navigator.userAgent.indexOf("Safari") != -1 )) {
    //     screen.orientation.addEventListener('change', setBody);
    // }
    
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxPQUFPLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxVQUFVLE9BQU8sT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLGFBQWEsTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sS0FBSyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxtaEJBQW1oQixjQUFjLGVBQWUsY0FBYyxvQkFBb0Isa0JBQWtCLDZCQUE2QixHQUFHLFdBQVcsb0NBQW9DLHNCQUFzQiwyQkFBMkIsdUJBQXVCLDZCQUE2QiwyQkFBMkIsOEJBQThCLDZCQUE2QiwwQkFBMEIsMEJBQTBCLDJCQUEyQiwrQkFBK0IsNEJBQTRCLHFCQUFxQiw2QkFBNkIscUJBQXFCLHNDQUFzQyx3QkFBd0IsMEJBQTBCLDRCQUE0Qiw0QkFBNEIsZ0NBQWdDLG1DQUFtQyxrQ0FBa0MseUJBQXlCLHlCQUF5Qiw2QkFBNkIsK0JBQStCLGdDQUFnQyxpQ0FBaUMsdUJBQXVCLHlDQUF5Qyw2QkFBNkIsNkJBQTZCLGtDQUFrQyw4QkFBOEIscUNBQXFDLDJCQUEyQiwyQkFBMkIseUNBQXlDLDZCQUE2QixpQ0FBaUMsaUNBQWlDLGlDQUFpQyxxQ0FBcUMsMENBQTBDLHVDQUF1Qyw4QkFBOEIsOEJBQThCLGdEQUFnRCxvQ0FBb0Msc0NBQXNDLDRCQUE0Qiw4Q0FBOEMsa0NBQWtDLGtDQUFrQyx1Q0FBdUMsbUNBQW1DLGdDQUFnQyxHQUFHLGdCQUFnQiw4QkFBOEIsK0NBQStDLEdBQUcsZ0JBQWdCLDJCQUEyQiwrQ0FBK0MsR0FBRyxnQkFBZ0IsZ0NBQWdDLG9EQUFvRCxHQUFHLGlCQUFpQiwyQkFBMkIsdUJBQXVCLHVCQUF1QixHQUFHLFVBQVUsY0FBYyxlQUFlLGtCQUFrQixpQkFBaUIsR0FBRyxjQUFjLHFCQUFxQixpQkFBaUIsb0JBQW9CLHNCQUFzQix1QkFBdUIsdUJBQXVCLHVCQUF1Qix1QkFBdUIsa0JBQWtCLDZCQUE2QixHQUFHLFlBQVksaUJBQWlCLHFDQUFxQyxrQkFBa0IsMkJBQTJCLEdBQUcsWUFBWSxxQkFBcUIsaUNBQWlDLFlBQVksdUJBQXVCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLDhCQUE4QixnREFBZ0QsbUNBQW1DLEdBQUcsaUJBQWlCLHVCQUF1QiwyQkFBMkIscUNBQXFDLHlDQUF5QyxzQ0FBc0MsR0FBRyw4QkFBOEIsb0JBQW9CLGdDQUFnQywrQkFBK0Isa0JBQWtCLDRCQUE0Qix3QkFBd0IsR0FBRyx3Q0FBd0Msd0JBQXdCLEdBQUcsc0NBQXNDLGdCQUFnQixlQUFlLEdBQUcsZ0VBQWdFLDZCQUE2QixHQUFHLHNDQUFzQyw0Q0FBNEMsMEJBQTBCLEdBQUcscUNBQXFDLHVDQUF1QywwQkFBMEIsR0FBRyxVQUFVLFlBQVksa0JBQWtCLGtDQUFrQyx3QkFBd0IsOEJBQThCLG9DQUFvQyxtQ0FBbUMsR0FBRyxjQUFjLG9DQUFvQyxvQkFBb0IsOEJBQThCLDZCQUE2Qiw0QkFBNEIsdUJBQXVCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLHVCQUF1QixHQUFHLFVBQVUsd0NBQXdDLEdBQUcsaUJBQWlCLHlDQUF5QyxzQ0FBc0MsR0FBRyxZQUFZLDBDQUEwQyx5Q0FBeUMsc0NBQXNDLEdBQUcsVUFBVSx3Q0FBd0MsR0FBRyxlQUFlLGdEQUFnRCxHQUFHLFdBQVcsdUJBQXVCLGVBQWUsa0JBQWtCLDJCQUEyQix3QkFBd0Isb0NBQW9DLDhCQUE4QixxQ0FBcUMsR0FBRyxxQkFBcUIsZ0JBQWdCLG1DQUFtQyx1QkFBdUIsMkJBQTJCLG9DQUFvQyx1REFBdUQsNEJBQTRCLHdDQUF3QyxtQ0FBbUMsa0JBQWtCLHNGQUFzRiw0QkFBNEIsd0RBQXdELHFDQUFxQyxHQUFHLDhCQUE4Qix5Q0FBeUMsR0FBRyxnQ0FBZ0MsMkNBQTJDLEdBQUcsb0JBQW9CLGtCQUFrQixzRkFBc0YsaURBQWlELDhGQUE4RixHQUFHLHNDQUFzQyx1Q0FBdUMsd0NBQXdDLEdBQUcsZ0NBQWdDLGlCQUFpQixHQUFHLHFCQUFxQiwyQkFBMkIsR0FBRyxpQ0FBaUMsdUJBQXVCLDJEQUEyRCxtQ0FBbUMsaURBQWlELEdBQUcsdUNBQXVDLHVCQUF1QixHQUFHLHFDQUFxQyxlQUFlLGNBQWMsb0JBQW9CLDZDQUE2QyxpQ0FBaUMsZ0NBQWdDLGtCQUFrQiw0QkFBNEIsd0JBQXdCLEdBQUcsMEJBQTBCLHFCQUFxQixvQkFBb0IsR0FBRyw0QkFBNEIsbUJBQW1CLGVBQWUsb0JBQW9CLGFBQWEsZ0JBQWdCLHVDQUF1QyxHQUFHLDBDQUEwQyxxQ0FBcUMsa0JBQWtCLGdCQUFnQix1QkFBdUIsbUNBQW1DLDJCQUEyQixvQ0FBb0MsdURBQXVELDRCQUE0Qix3Q0FBd0MsdUhBQXVILG1DQUFtQyxrSkFBa0osR0FBRywyQkFBMkIscUNBQXFDLG1DQUFtQyxxQkFBcUIsd0JBQXdCLDRCQUE0QixtQ0FBbUMsR0FBRyxvQkFBb0IsZUFBZSxvQkFBb0IscUJBQXFCLHFCQUFxQixrQkFBa0IsK0JBQStCLHVDQUF1QyxHQUFHLGlCQUFpQixpQkFBaUIsb0JBQW9CLDBCQUEwQixrQkFBa0IsNEJBQTRCLHdCQUF3QixHQUFHLHNCQUFzQixvQ0FBb0MsR0FBRyw0QkFBNEIsdUJBQXVCLEdBQUcsbUJBQW1CLG9CQUFvQiwwQ0FBMEMsc0JBQXNCLDRCQUE0QixpQ0FBaUMsZ0NBQWdDLG9DQUFvQyxrQkFBa0IsNEJBQTRCLHdCQUF3QixHQUFHLHVCQUF1QixpQkFBaUIsR0FBRyxvQkFBb0IsNkJBQTZCLGtCQUFrQixvREFBb0QsR0FBRywwQkFBMEIsb0NBQW9DLEdBQUcsMERBQTBELGVBQWUsMkNBQTJDLDRCQUE0QixvQ0FBb0MsdUJBQXVCLDJCQUEyQixxQ0FBcUMsR0FBRyxtQ0FBbUMsd0NBQXdDLGlCQUFpQixHQUFHLGtDQUFrQyxxQkFBcUIsa0JBQWtCLHFEQUFxRCxHQUFHLDhDQUE4QyxvQkFBb0IsR0FBRywwQkFBMEIsbUNBQW1DLGtCQUFrQixvREFBb0QsR0FBRyxnQ0FBZ0Msb0NBQW9DLEdBQUcsdUJBQXVCLG9CQUFvQixnQ0FBZ0Msa0JBQWtCLHdEQUF3RCxHQUFHLHFCQUFxQixvQ0FBb0MsR0FBRyxtQkFBbUIsb0JBQW9CLDhCQUE4Qiw4QkFBOEIsNkJBQTZCLDRCQUE0Qix1QkFBdUIsa0JBQWtCLDRCQUE0Qix3QkFBd0IsdUJBQXVCLHFEQUFxRCxHQUFHLHlCQUF5QixvQkFBb0IsR0FBRyxpQkFBaUIseUJBQXlCLHlDQUF5QyxzQ0FBc0MsR0FBRyxtQ0FBbUMsd0NBQXdDLGdEQUFnRCxHQUFHLG1CQUFtQix5QkFBeUIseUNBQXlDLHNDQUFzQyxHQUFHLHFDQUFxQywwQ0FBMEMsZ0RBQWdELEdBQUcsa0JBQWtCLGtCQUFrQixlQUFlLGNBQWMscUJBQXFCLEdBQUcsb0JBQW9CLG9CQUFvQiw2QkFBNkIsMkJBQTJCLDhDQUE4Qyx1QkFBdUIseUJBQXlCLDRCQUE0QixpQ0FBaUMsZUFBZSxvQ0FBb0Msa0JBQWtCLDRCQUE0Qix3QkFBd0IsR0FBRyx3QkFBd0IsaUJBQWlCLEdBQUcseUJBQXlCLG9CQUFvQixrQkFBa0IsNEJBQTRCLHdCQUF3QixHQUFHLGlDQUFpQyw0QkFBNEIsR0FBRyxlQUFlLGdDQUFnQyxHQUFHLGVBQWUsd0JBQXdCLHNDQUFzQyxHQUFHLGlCQUFpQix1QkFBdUIsZ0JBQWdCLHFCQUFxQix3QkFBd0IsR0FBRyx1QkFBdUIsb0JBQW9CLEdBQUcsV0FBVyxvQkFBb0IsR0FBRyxhQUFhLHNCQUFzQixHQUFHLGFBQWEsc0JBQXNCLHdCQUF3QixHQUFHLGlCQUFpQiw2QkFBNkIsR0FBRyx1QkFBdUIsdUJBQXVCLHVCQUF1QiwyQkFBMkIsMkJBQTJCLDZCQUE2QixtQkFBbUIsR0FBRyw0QkFBNEIsc0JBQXNCLGtCQUFrQiwyQkFBMkIsOEJBQThCLHdDQUF3QyxHQUFHLGlCQUFpQiw2QkFBNkIsR0FBRyxZQUFZLGdCQUFnQixxQ0FBcUMsZ0RBQWdELGtCQUFrQiw0QkFBNEIsd0JBQXdCLG9DQUFvQyxnQ0FBZ0MsMkJBQTJCLG9DQUFvQyx5Q0FBeUMsc0NBQXNDLEdBQUcsK0NBQStDLDRCQUE0QixHQUFHLGlCQUFpQixxREFBcUQsZ0RBQWdELEdBQUcsZUFBZSx5Q0FBeUMsZ0RBQWdELEdBQUcsbUJBQW1CLHlDQUF5QyxHQUFHLGVBQWUsNkNBQTZDLEdBQUcsaUJBQWlCLCtDQUErQyxHQUFHLGVBQWUsNkNBQTZDLEdBQUcsb0JBQW9CLHFEQUFxRCxHQUFHLGdCQUFnQiwwQ0FBMEMsR0FBRywwQkFBMEIseUNBQXlDLDBDQUEwQyxHQUFHLG1DQUFtQyw4Q0FBOEMsR0FBRyxxQ0FBcUMsZ0RBQWdELEdBQUcsc0NBQXNDLDRCQUE0QixzRUFBc0UsbUNBQW1DLEdBQUcsb0RBQW9ELDBDQUEwQyxHQUFHLHdCQUF3QiwrQ0FBK0MseUNBQXlDLEdBQUcsb0VBQW9FLGdEQUFnRCx5Q0FBeUMsR0FBRyw0Q0FBNEMsMERBQTBELEdBQUcsd0JBQXdCLHlDQUF5QywwREFBMEQsR0FBRyx3Q0FBd0MsNkNBQTZDLHFEQUFxRCxHQUFHLDBDQUEwQywrQ0FBK0MscURBQXFELEdBQUcsMENBQTBDLGtEQUFrRCxHQUFHLHlCQUF5QixtREFBbUQseUNBQXlDLEdBQUcsaUJBQWlCLHFEQUFxRCw2Q0FBNkMsR0FBRyx1RUFBdUUsZ0JBQWdCLGdDQUFnQyxLQUFLLHNCQUFzQiw2QkFBNkIsS0FBSywySUFBMkksZ0NBQWdDLEtBQUssdUJBQXVCLDhCQUE4QixLQUFLLG1CQUFtQiw0QkFBNEIsS0FBSyxxQkFBcUIsNkJBQTZCLEtBQUsscUJBQXFCLDRCQUE0QixLQUFLLHFCQUFxQiw4QkFBOEIsS0FBSyw4QkFBOEIsNkJBQTZCLEtBQUssMkJBQTJCLDZCQUE2QixLQUFLLDRCQUE0Qiw2QkFBNkIsS0FBSywyQkFBMkIsNEJBQTRCLEtBQUssS0FBSywrQ0FBK0Msc0VBQXNFLHlCQUF5QixvQ0FBb0MscUNBQXFDLCtCQUErQixLQUFLLEdBQUcsZ0RBQWdELFVBQVUsd0JBQXdCLHVCQUF1QixLQUFLLEdBQUcsbUJBQW1CO0FBQ2pxdUM7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNkMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9EQUFvRDs7QUFFcEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDNUJhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCdUM7QUFDRTtBQUNOO0FBSU87QUFDTTs7QUFFaEQ7O0FBRUEsaUJBQWlCLGdEQUFNO0FBQ3ZCOztBQUVBLElBQUksNERBQWtCOztBQUV0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsV0FBVztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLDJDQUFTO0FBQ25EOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLDBDQUFRO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaURBQVc7QUFDbkIsUUFBUSxzREFBWTtBQUNwQjs7QUFFQSxJQUFJLDZEQUFvQjs7QUFFeEI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25Lc0I7O0FBRXlCO0FBSUU7QUFDQztBQUNqQjs7QUFFakMsb0RBQVU7O0FBRVY7O0FBRUE7QUFDQTs7QUFFQSwrREFBbUI7O0FBRW5CLDREQUFrQjs7QUFFbEIsMERBQWdCOztBQUVoQixtRUFBeUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJ6QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hGb0M7QUFrQkU7QUFDeUI7O0FBRS9EO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsK0NBQVM7O0FBRTNDO0FBQ0Esb0NBQW9DLGlEQUFXOztBQUUvQztBQUNBLGtDQUFrQywrQ0FBUzs7QUFFM0M7QUFDQTtBQUNBLHdDQUF3QyxtREFBYTs7QUFFckQ7QUFDQSx1Q0FBdUMsa0RBQVk7O0FBRW5EOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsbURBQWE7QUFDckQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDBDQUEwQyxtREFBYTs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDBEQUFnQjtBQUM1QixTQUFTO0FBQ1QsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdURBQWE7QUFDckIsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7QUFDQSwwQ0FBMEMsb0RBQWM7O0FBRXhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwwREFBZ0I7QUFDNUIsU0FBUztBQUNULEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHdEQUFjO0FBQ3RCLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxnREFBVTtBQUNsRCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxnREFBVTtBQUNqRCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQSwyREFBMkQsR0FBRztBQUM5RDtBQUNBOztBQUVBO0FBQ0EsZ0NBQWdDLHNEQUFZO0FBQzVDO0FBQ0EsWUFBWSxrREFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksdURBQWE7O0FBRXpCO0FBQ0EsVUFBVTtBQUNWLFlBQVksa0RBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0EsWUFBWSx5REFBZTtBQUMzQjtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsMkRBQTJELEdBQUc7QUFDOUQ7QUFDQSx1Q0FBdUMsbURBQWE7QUFDcEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxREFBVTtBQUNsQjtBQUNBLDRCQUE0Qix3REFBYztBQUMxQztBQUNBLFlBQVksbURBQVM7QUFDckIsVUFBVTtBQUNWLFlBQVkscURBQVc7QUFDdkIsVUFBVTtBQUNWLFlBQVksbURBQVM7QUFDckI7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDJEQUEyRCxHQUFHO0FBQzlEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0RBQVU7QUFDbEI7QUFDQSw0QkFBNEIsd0RBQWM7QUFDMUM7QUFDQSxZQUFZLG1EQUFTO0FBQ3JCLFVBQVU7QUFDVixZQUFZLHFEQUFXO0FBQ3ZCLFVBQVU7QUFDVixZQUFZLG1EQUFTO0FBQ3JCO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxRQUFRLG9EQUFVO0FBQ2xCLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EscURBQXFELEdBQUc7QUFDeEQ7QUFDQSwyQ0FBMkMsZ0RBQVU7QUFDckQ7QUFDQSwwQ0FBMEMsZ0RBQVU7QUFDcEQ7O0FBRUE7QUFDQTtBQUNBLHNDQUFzQyxnREFBVTtBQUNoRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMU0rQjs7QUFXYTs7QUFFRDs7QUFFbUI7QUFDSjtBQUNmO0FBQ0E7QUFDQTtBQUNOO0FBQ0k7QUFDQTtBQUNGO0FBQ0U7QUFDRjs7QUFFdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyw4Q0FBTztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsNENBQVM7QUFDbkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLDJDQUFRO0FBQ2pEOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHlDQUFPO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLDBEQUFjO0FBQ2xCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsMkNBQVM7QUFDbkQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLHlDQUFPO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLDREQUFnQjtBQUNwQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBLElBQUksb0RBQVU7O0FBRWQ7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLGtEQUFRO0FBQ1osSUFBSSxrREFBUTtBQUNaO0FBQ0EsUUFBUSxrREFBUTtBQUNoQixNQUFNO0FBQ04sUUFBUSxrREFBUTtBQUNoQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxxREFBcUQsS0FBSztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQixnREFBTTs7QUFFM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0Qsc0RBQW1CO0FBQzNFO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQSxzREFBc0Qsb0RBQWlCO0FBQ3ZFO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLDJDQUFRO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyw0Q0FBVTtBQUN6RDtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELDRDQUFVO0FBQzVEO0FBQ0E7QUFDQSxnQkFBZ0IscUZBQXlDO0FBQ3pEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFFBQVEsK0RBQW1COztBQUUzQjtBQUNBLFFBQVEsK0RBQW1CO0FBQzNCLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksOERBQWtCO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixnREFBTTs7QUFFM0I7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QixrREFBUTs7QUFFL0I7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLGdEQUFNO0FBQzNCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxxQ0FBcUMsc0RBQW1CO0FBQ3hEOztBQUVBO0FBQ0E7QUFDQSxxQ0FBcUMsb0RBQWlCO0FBQ3REOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksd0RBQWM7QUFDbEI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyw0Q0FBVTtBQUM3QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLE9BQU87QUFDNUMsa0NBQWtDLHdEQUFjO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyw0Q0FBVTtBQUNoRDtBQUNBOztBQUVBLElBQUksMkVBQStCOztBQUVuQyxJQUFJLHNFQUEwQjtBQUM5Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDRDQUFVO0FBQzdDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxpRUFBcUI7O0FBRXpCLElBQUksaUVBQXFCOztBQUV6Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL2JvZHkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL2VkaXQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9saXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9saXN0ZW4uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL3BhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImZvbnQvbWFqb3ItbW9uby9tYWpvci1tb25vLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcImZvbnQvc3VibGltYS9zdWJsaW1hLWxpZ2h0Lm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcImZvbnQvc3VibGltYS9zdWJsaW1hLWV4dHJhLWJvbGQub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1ydnY6IGNhbGMoMXJlbSArIDF2aCArIDF2dyk7XFxuXFxuXFx0LS1ibHVlOiAjMkU1MTY5O1xcbiAgICAtLWJsdWUtZ3JheTogIzVFNjg2RDtcXG4gICAgLS1icm93bjogIzZGNTc0NjtcXG4gICAgLS1icm93bi1tdXRlZDogIzYzNTg0QztcXG4gICAgLS1icm93bi10YW46ICNBNThGODU7XFxuICAgIC0tZm9yZXN0LWdyZWVuOiAjNEQ2NjNFO1xcbiAgICAtLWdyZWVuLWJyb3duOiAjNUY1NjNGO1xcbiAgICAtLWdyYXktdGFuOiAjQzlCQkEzO1xcbiAgICAtLXRhbi1ncmF5OiAjRDFDOUJBO1xcbiAgICAtLW9mZi13aGl0ZTogI0U0RDlDNTtcXG4gICAgLS1vcmFuZ2UteWVsbG93OiAjRTFCMjcwO1xcbiAgICAtLW9yYW5nZS10YW46ICNDREE4ODU7XFxuICAgIC0tcmVkOiAjQUMzQTNFO1xcbiAgICAtLXNwZWNpYWwtcmVkOiAjODI0RTRBO1xcbiAgICAtLXRhbjogI0QyQkM5QjtcXG5cXG5cXHQtLXRpdGxlLWZvb3Rlci1jb2xvcjogI2JhOGU1ZWRlO1xcblxcdC0tbmF2LWJnOiAjZTRkOWM1NzQ7XFxuXFx0LS1ub3ctYnV0dG9uOiAjNzQ5YzVkO1xcblxcdC0tbGF0ZXItYnV0dG9uOiAjYjU2YzY3O1xcblxcdC0tYWxsLWJ1dHRvbjogI2UwYTg1YmMyO1xcblxcdC0tYnV0dG9uLW91dGxpbmU6ICNmMDk5MWZkNTtcXG5cXHQtLWlucHV0LWZvY3VzLW91dGxpbmU6ICNlNTk4MmQ7XFxuXFx0LS1pbnB1dC12YWxpZC1vdXRsaW5lOiM0RDY2M0U7XFxuXFx0LS1tYWluLWJnOiAjZTFjZmFlOTc7XFxuXFx0LS1pdGVtLWJnOiAjMjA4NmNhOTI7XFxuXFx0LS1ub3ctaXRlbS1iZzogIzYyOWM0MDdjO1xcblxcdC0tbGF0ZXItaXRlbS1iZzogI2RhODY4MGMxO1xcblxcdC0tZGVzY3JpcHRpb24tYmc6ICNkOGYyZmY5NTtcXG5cXHQtLWFkZC1pdGVtLWJ1dHRvbjogI2JhOGQ1ZTg1O1xcblxcdC0tZm9ybS1iZzogI2YwZDdhOTtcXG5cXHQtLXByaW9yaXR5LWJ1dHRvbi1kZWZhdWx0OiAjYzhiNWEyODU7XFxuXFx0LS1mb3JtLWJ1dHRvbjogI2JhOGQ1ZTg1O1xcblxcdC0tZm9ybS1pbnB1dC1iZzogI0YzRUVFNTtcXG5cXHQtLXN1Ym1pdC1idXR0b24tYmc6ICM4N2I2ZDViNDtcXG5cXHQtLWNsb3NlLWJ1dHRvbjogIzk4NmY0NDcxO1xcblxcdC0tZGlzcGxheS1pY29uOiBjYWxjKHZhcigtLXJ2dikpO1xcblxcblxcdC0tZGFyay10ZXh0OiAjZGRkMmJmO1xcblxcdC0tZGFyay1ib3JkZXI6ICMyNzI0MjA7XFxuXFx0LS1kYXJrLXRpdGxlLWZvb3Rlci1jb2xvcjogIzIwMWMxOWRlO1xcblxcdC0tZGFyay1uYXYtYmc6ICMyMzIwMWNjMztcXG5cXHQtLWRhcmstbm93LWJ1dHRvbjogIzM4NGEyZGRhO1xcblxcdC0tZGFyay1sYXRlci1idXR0b246ICM4ZTU2NTI7XFxuXFx0LS1kYXJrLWFsbC1idXR0b246ICNkNDlmNTM5YztcXG5cXHQtLWRhcmstYnV0dG9uLW91dGxpbmU6ICNlZTlmMzJjYTtcXG5cXHQtLWRhcmstaW5wdXQtZm9jdXMtb3V0bGluZTogI2VlOWYzMmNhO1xcblxcdC0tZGFyay1pbnB1dC12YWxpZC1vdXRsaW5lOiM0RDY2M0U7XFxuXFx0LS1kYXJrLW1haW4tYmc6ICMyNDIxMWRhMTtcXG5cXHQtLWRhcmstaXRlbS1iZzogIzEyM2M1ODkyO1xcblxcdC0tZGFyay1ub3ctaXRlbS1iZzogcmdiYSg0NiwgODAsIDI4LCAwLjUyNyk7XFxuXFx0LS1kYXJrLWxhdGVyLWl0ZW0tYmc6ICM3NTQ3NDNiMjtcXG5cXHQtLWRhcmstYWRkLWl0ZW0tYnV0dG9uOiAjODE1ZTM2NzA7XFxuXFx0LS1kYXJrLWZvcm0tYmc6ICM0MjNkMzg7XFxuXFx0LS1kYXJrLXByaW9yaXR5LWJ1dHRvbi1kZWZhdWx0OiAjOGI3NzYyODU7XFxuXFx0LS1kYXJrLWZvcm0tYnV0dG9uOiAjYmE4ZDVlODU7XFxuXFx0LS1kYXJrLWZvcm0taW5wdXQtYmc6ICNhYmE2OWE7XFxuXFx0LS1kYXJrLXN1Ym1pdC1idXR0b24tYmc6ICM2NjhkYThiNDtcXG5cXHQtLWRhcmstY2xvc2UtYnV0dG9uOiAjOTY4NTczODU7XFxuXFxuXFx0dG91Y2gtYWN0aW9uOiBwYW4teCBwYW4teTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6ICdNYWpvciBNb25vJztcXG5cXHRzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcblxcdGZvbnQtZmFtaWx5OiAnU3VibGltYSc7XFxuXFx0c3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogJ1N1YmxpbWEgQm9sZCc7XFxuXFx0c3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuYm9keSB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHR3aWR0aDogMTAwdnc7XFxufVxcblxcbi53cmFwcGVyIHtcXG5cXHRtaW4taGVpZ2h0OiAxMDAlO1xcblxcdHdpZHRoOiAxMDB2dztcXG5cXHRtYXgtd2lkdGg6IDEwMCU7XFxuXFx0bWFyZ2luLWxlZnQ6IGF1dG87XFxuXFx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRvdmVyZmxvdy14OiBoaWRkZW47XFxuXFx0b3ZlcmZsb3cteTogc2Nyb2xsO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmhlYWRlciB7XFxuXFx0aGVpZ2h0OiAxNXZoO1xcblxcdG1pbi1oZWlnaHQ6IGNhbGMoMy4yKnZhcigtLXJ2dikpO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRpdGxlIHtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdG1pbi1oZWlnaHQ6IGNhbGModmFyKC0tcnZ2KSk7XFxuXFx0ZmxleDogMTtcXG5cXHRvdmVyZmxvdy14OiBoaWRkZW47XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogY2FsYygwLjYqdmFyKC0tcnZ2KSk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGl0bGUtZm9vdGVyLWNvbG9yKTtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi50aXRsZS10ZXh0IHtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0Zm9udC1mYW1pbHk6ICdTdWJsaW1hJztcXG5cXHRmb250LXNpemU6IGNhbGMoMC40NSp2YXIoLS1ydnYpKTtcXG5cXHRsZXR0ZXItc3BhY2luZzogY2FsYygwLjEqdmFyKC0tcnZ2KSk7XFxuXFx0dGV4dC1pbmRlbnQ6IGNhbGMoMC4xKnZhcigtLXJ2dikpO1xcbn1cXG5cXG4ubGlnaHQtbW9kZSxcXG4uZGFyay1tb2RlIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0aGVpZ2h0OiB2YXIoLS1kaXNwbGF5LWljb24pO1xcblxcdHdpZHRoOiB2YXIoLS1kaXNwbGF5LWljb24pO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxpZ2h0LW1vZGUuZGFyayxcXG4uZGFyay1tb2RlLmRhcmsge1xcblxcdGZpbHRlcjogaW52ZXJ0KDgwJSk7XFxufVxcblxcbi5saWdodC1tb2RlIGltZyxcXG4uZGFyay1tb2RlIGltZyB7XFxuXFx0aGVpZ2h0OiA4MCU7XFxuXFx0d2lkdGg6IDgwJTtcXG59XFxuXFxuLnNlbGVjdGVkLWRpc3BsYXkubGlnaHQtbW9kZSxcXG4uc2VsZWN0ZWQtZGlzcGxheS5kYXJrLW1vZGUge1xcblxcdHRyYW5zaXRpb246IDAuMjVzIGxpbmVhcjtcXG59XFxuXFxuLnNlbGVjdGVkLWRpc3BsYXkubGlnaHQtbW9kZSBpbWcge1xcblxcdGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDVweCB2YXIoLS1yZWQpKTtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbi5zZWxlY3RlZC1kaXNwbGF5LmRhcmstbW9kZSBpbWcge1xcblxcdGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDVweCBibGFjayk7XFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG5cXG4ubmF2IHtcXG5cXHRmbGV4OiAyO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRmb250LWZhbWlseTogJ01ham9yIE1vbm8nO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1iZyk7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4ubmF2IGRpdiB7XFxuXFx0Zm9udC1zaXplOiBjYWxjKDAuNip2YXIoLS1ydnYpKTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0d2lkdGg6IGNhbGMoMyp2YXIoLS1ydnYpKTtcXG5cXHRoZWlnaHQ6IGNhbGModmFyKC0tcnZ2KSk7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTUlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5ub3cge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vdy1idXR0b24pO1xcbn1cXG5cXG4ubm93LFxcbi5hbGwge1xcblxcdGxldHRlci1zcGFjaW5nOiBjYWxjKDAuMyp2YXIoLS1ydnYpKTtcXG5cXHR0ZXh0LWluZGVudDogY2FsYygwLjMqdmFyKC0tcnZ2KSk7XFxufVxcblxcbi5sYXRlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGF0ZXItYnV0dG9uKTtcXG5cXHRsZXR0ZXItc3BhY2luZzogY2FsYygwLjEqdmFyKC0tcnZ2KSk7XFxuXFx0dGV4dC1pbmRlbnQ6IGNhbGMoMC4xKnZhcigtLXJ2dikpO1xcbn1cXG5cXG4uYWxsIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbGwtYnV0dG9uKTtcXG59XFxuXFxuLnNlbGVjdGVkIHtcXG5cXHRib3gtc2hhZG93OiAwIDAgMCAzcHggdmFyKC0tYnV0dG9uLW91dGxpbmUpO1xcbn1cXG5cXG4ubWFpbiB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGZsZXg6IGF1dG87XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0cGFkZGluZzogY2FsYygwLjUqdmFyKC0tcnZ2KSkgMDtcXG5cXHRnYXA6IGNhbGMoMC42KnZhcigtLXJ2dikpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmcpO1xcbn1cXG5cXG4uZGlzcGxheWVkLWl0ZW0ge1xcblxcdHdpZHRoOiA5MHZ3O1xcblxcdG1heC13aWR0aDogY2FsYygxNSp2YXIoLS1ydnYpKTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0Zm9udC1mYW1pbHk6ICdTdWJsaW1hJztcXG5cXHRmb250LXNpemU6IGNhbGMoMC42KnZhcigtLXJ2dikpO1xcblxcdHBhZGRpbmc6IGNhbGMoMC4xKnZhcigtLXJ2dikpIGNhbGMoMC4zKnZhcigtLXJ2dikpO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcblxcdGJvcmRlci1yYWRpdXM6IGNhbGMoMC44KnZhcigtLXJ2dikpO1xcblxcdG1hcmdpbjogMCBjYWxjKDAuNyp2YXIoLS1ydnYpKTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogY2FsYygxLjQqdmFyKC0tcnZ2KSkgMWZyIGNhbGModmFyKC0tcnZ2KSkgY2FsYyh2YXIoLS1ydnYpKTtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG5cXHRncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiY2hlY2tib3ggdGl0bGUgZWRpdCBleHBhbmRcXFwiO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWl0ZW0tYmcpO1xcbn1cXG5cXG4uZGlzcGxheWVkLWl0ZW0ubm93LWl0ZW0ge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vdy1pdGVtLWJnKTtcXG59XFxuXFxuLmRpc3BsYXllZC1pdGVtLmxhdGVyLWl0ZW0ge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxhdGVyLWl0ZW0tYmcpO1xcbn1cXG5cXG4uZXhwYW5kZWQtaXRlbSB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGNhbGMoMS40KnZhcigtLXJ2dikpIDFmciBjYWxjKHZhcigtLXJ2dikpIGNhbGModmFyKC0tcnZ2KSk7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiBjYWxjKDEuMip2YXIoLS1ydnYpKSAxZnI7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuXFx0XFx0XFxcImNoZWNrYm94IHRpdGxlIGVkaXQgZXhwYW5kXFxcIlxcblxcdFxcdFxcXCIuIGRlc2NyaXB0aW9uIC4gZGVsZXRlXFxcIjtcXG59XFxuXFxuLmV4cGFuZGVkLWl0ZW0gLml0ZW0tZGVzY3JpcHRpb24ge1xcblxcdG1hcmdpbi1yaWdodDogY2FsYygwLjMqdmFyKC0tcnZ2KSk7XFxuXFx0bWFyZ2luLWJvdHRvbTogY2FsYygwLjMqdmFyKC0tcnZ2KSk7XFxufVxcblxcbi5leHBhbmRlZC1pdGVtIC5pdGVtLXRpdGxlIHtcXG5cXHRjdXJzb3I6IGF1dG87XFxufVxcblxcbi5jb21wbGV0ZWQtaXRlbSB7XFxuXFx0ZmlsdGVyOiBncmF5c2NhbGUoNzAlKTtcXG59XFxuXFxuLmNvbXBsZXRlZC1pdGVtIC5pdGVtLXRpdGxlIHtcXG5cXHRmb250LXN0eWxlOiBpdGFsaWM7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgY2FsYygwLjA0KnZhcigtLXJ2dikpIGJsYWNrO1xcblxcdHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogbm9uZTtcXG5cXHR0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IGNhbGMoLTAuMip2YXIoLS1ydnYpKTtcXG59XFxuXFxuLmNvbXBsZXRlZC1pdGVtIC5pdGVtLWRlc2NyaXB0aW9uIHtcXG5cXHRmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5kaXNwbGF5ZWQtaXRlbS5hZGQtaXRlbS1idXR0b24ge1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0bWFyZ2luOiAwO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hZGQtaXRlbS1idXR0b24pO1xcblxcdGhlaWdodDogY2FsYygxLjUqdmFyKC0tcnZ2KSk7XFxuXFx0d2lkdGg6IGNhbGMoMS41KnZhcigtLXJ2dikpO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFkZC1pdGVtLWJ1dHRvbiBpbWcge1xcblxcdG1heC1oZWlnaHQ6IDEwMCU7XFxuXFx0bWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uYWRkLWZvcm0sXFxuLmVkaXQtZm9ybSB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0ei1pbmRleDogMztcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0dG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbi5hZGQtZm9ybS1pdHNlbGYsXFxuLmVkaXQtZm9ybS1pdHNlbGYge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvcm0tYmcpO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0d2lkdGg6IDkwdnc7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdG1heC13aWR0aDogY2FsYygxNSp2YXIoLS1ydnYpKTtcXG5cXHRmb250LWZhbWlseTogJ1N1YmxpbWEnO1xcblxcdGZvbnQtc2l6ZTogY2FsYygwLjYqdmFyKC0tcnZ2KSk7XFxuXFx0cGFkZGluZzogY2FsYygwLjEqdmFyKC0tcnZ2KSkgY2FsYygwLjMqdmFyKC0tcnZ2KSk7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuXFx0Ym9yZGVyLXJhZGl1czogY2FsYygwLjgqdmFyKC0tcnZ2KSk7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiBjYWxjKDEuNyp2YXIoLS1ydnYpKSBjYWxjKHZhcigtLXJ2dikpIGNhbGMoNCp2YXIoLS1ydnYpKSBjYWxjKHZhcigtLXJ2dikpIGNhbGMoMi4yKnZhcigtLXJ2dikpO1xcblxcdHJvdy1nYXA6IGNhbGMoMC4yNSp2YXIoLS1ydnYpKTtcXG5cXHRncmlkLXRlbXBsYXRlLWFyZWFzOlxcblxcdFxcdFxcXCJmb3JtLXRpdGxlXFxcIlxcblxcdFxcdFxcXCJ0aXRsZS1zZWN0aW9uXFxcIlxcblxcdFxcdFxcXCJkZXNjcmlwdGlvbi1zZWN0aW9uXFxcIlxcblxcdFxcdFxcXCJwcmlvcml0eS1zZWN0aW9uXFxcIlxcblxcdFxcdFxcXCJzdWJtaXQtYnV0dG9uXFxcIjtcXG59XFxuXFxuLmVkaXQtZm9ybS10aXRsZS10ZXh0IHtcXG5cXHRtYXgtaGVpZ2h0OiBjYWxjKDEuNyp2YXIoLS1ydnYpKTtcXG5cXHRtYXgtd2lkdGg6IGNhbGMoMTIqdmFyKC0tcnZ2KSk7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xcblxcdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcblxcdG1hcmdpbi1yaWdodDogY2FsYyh2YXIoLS1ydnYpKTtcXG59XFxuXFxuLmJsdXItYmFja2Ryb3Age1xcblxcdHotaW5kZXg6IDI7XFxuXFx0cG9zaXRpb246IGZpeGVkO1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxuXFx0bWluLXdpZHRoOiAyMDB2dztcXG5cXHRoZWlnaHQ6IDIwMHZoO1xcblxcdGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcblxcdC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxufVxcblxcbi5mb3JtLXRpdGxlIHtcXG5cXHRtYXJnaW46IDAgMSU7XFxuXFx0bWF4LXdpZHRoOiA5MHZ3O1xcblxcdGdyaWQtYXJlYTogZm9ybS10aXRsZTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb3JtLXRpdGxlLXRleHQge1xcblxcdGZvbnQtc2l6ZTogY2FsYygwLjcqdmFyKC0tcnZ2KSk7XFxufVxcblxcbi5mb3JtLXRpdGxlLXRleHQ6aG92ZXIge1xcblxcdGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmNsb3NlLWJ1dHRvbiB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsb3NlLWJ1dHRvbik7XFxuXFx0bWFyZ2luLWxlZnQ6IGF1dG87XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuXFx0aGVpZ2h0OiBjYWxjKDAuOSp2YXIoLS1ydnYpKTtcXG5cXHR3aWR0aDogY2FsYygwLjkqdmFyKC0tcnZ2KSk7XFxuXFx0Ym9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1ydnYpKTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jbG9zZS1idXR0b24gaW1nIHtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi50aXRsZS1zZWN0aW9uIHtcXG5cXHRncmlkLWFyZWE6IHRpdGxlLXNlY3Rpb247XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGNhbGMoMy41KnZhcigtLXJ2dikpIDFmcjtcXG59XFxuXFxuLnRpdGxlLXNlY3Rpb24gbGFiZWwge1xcblxcdGZvbnQtc2l6ZTogY2FsYygwLjUqdmFyKC0tcnZ2KSk7XFxufVxcblxcbi50aXRsZS1zZWN0aW9uIGlucHV0LFxcbi5kZXNjcmlwdGlvbi1zZWN0aW9uIHRleHRhcmVhIHtcXG5cXHR3aWR0aDogOTMlO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvcm0taW5wdXQtYmcpO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcblxcdGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0tcnZ2KSk7XFxuXFx0cGFkZGluZy1sZWZ0OiAxMHB4O1xcblxcdGZvbnQtZmFtaWx5OiAnU3VibGltYSc7XFxuXFx0Zm9udC1zaXplOiBjYWxjKDAuNDUqdmFyKC0tcnZ2KSk7XFxufVxcblxcbi5kZXNjcmlwdGlvbi1zZWN0aW9uIHRleHRhcmVhIHtcXG5cXHRib3JkZXItcmFkaXVzOiBjYWxjKDAuNSp2YXIoLS1ydnYpKTtcXG5cXHRyZXNpemU6IG5vbmU7XFxufVxcblxcbmlucHV0OmZvY3VzLFxcbnRleHRhcmVhOmZvY3VzIHtcXG5cXHRhcHBlYXJhbmNlOiBub25lO1xcblxcdG91dGxpbmU6IG5vbmU7XFxuXFx0Ym94LXNoYWRvdzogMCAwIDAgM3B4IHZhcigtLWlucHV0LWZvY3VzLW91dGxpbmUpO1xcbn1cXG5cXG5pbnB1dDpub3QoOmZvY3VzKSxcXG50ZXh0YXJlYTpub3QoOmZvY3VzKSB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24tc2VjdGlvbiB7XFxuXFx0Z3JpZC1hcmVhOiBkZXNjcmlwdGlvbi1zZWN0aW9uO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBjYWxjKDMuNSp2YXIoLS1ydnYpKSAxZnI7XFxufVxcblxcbi5kZXNjcmlwdGlvbi1zZWN0aW9uIGxhYmVsIHtcXG5cXHRmb250LXNpemU6IGNhbGMoMC41KnZhcigtLXJ2dikpO1xcbn1cXG5cXG4ucHJpb3JpdHktc2VjdGlvbiB7XFxuXFx0bWFyZ2luLXRvcDogMnB4O1xcblxcdGdyaWQtYXJlYTogcHJpb3JpdHktc2VjdGlvbjtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogY2FsYygzLjUqdmFyKC0tcnZ2KSkgMWZyIDFmcjtcXG59XFxuXFxuLnByaW9yaXR5LWxhYmVsIHtcXG5cXHRmb250LXNpemU6IGNhbGMoMC41KnZhcigtLXJ2dikpO1xcbn1cXG5cXG4ucmFkaW8tb3B0aW9uIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0Zm9udC1mYW1pbHk6ICdNYWpvciBNb25vJztcXG5cXHR3aWR0aDogY2FsYygzKnZhcigtLXJ2dikpO1xcblxcdGhlaWdodDogY2FsYyh2YXIoLS1ydnYpKTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG5cXHRib3JkZXItcmFkaXVzOiAxNSU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmlvcml0eS1idXR0b24tZGVmYXVsdCk7XFxufVxcblxcbi5yYWRpby1vcHRpb24gbGFiZWwge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5vdy1vcHRpb24ge1xcblxcdGp1c3RpZnktc2VsZjogY2VudGVyO1xcblxcdGxldHRlci1zcGFjaW5nOiBjYWxjKDAuMyp2YXIoLS1ydnYpKTtcXG5cXHR0ZXh0LWluZGVudDogY2FsYygwLjMqdmFyKC0tcnZ2KSk7XFxufVxcblxcbi5ub3ctb3B0aW9uLnNlbGVjdGVkLXByaW9yaXR5IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ub3ctYnV0dG9uKTtcXG5cXHRib3gtc2hhZG93OiAwIDAgMCAzcHggdmFyKC0tYnV0dG9uLW91dGxpbmUpO1xcbn1cXG5cXG4ubGF0ZXItb3B0aW9uIHtcXG5cXHRqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG5cXHRsZXR0ZXItc3BhY2luZzogY2FsYygwLjEqdmFyKC0tcnZ2KSk7XFxuXFx0dGV4dC1pbmRlbnQ6IGNhbGMoMC4xKnZhcigtLXJ2dikpO1xcbn1cXG5cXG4ubGF0ZXItb3B0aW9uLnNlbGVjdGVkLXByaW9yaXR5IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sYXRlci1idXR0b24pO1xcblxcdGJveC1zaGFkb3c6IDAgMCAwIDNweCB2YXIoLS1idXR0b24tb3V0bGluZSk7XFxufVxcblxcbi5yYWRpby1pbnB1dCB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdG1hcmdpbjogMDtcXG5cXHRhcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4uc3VibWl0LWJ1dHRvbiB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGdyaWQtYXJlYTogc3VibWl0LWJ1dHRvbjtcXG5cXHRmb250LWZhbWlseTogJ1N1YmxpbWEnO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1Ym1pdC1idXR0b24tYmcpO1xcblxcdGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG5cXHRoZWlnaHQ6IGNhbGMoMS41KnZhcigtLXJ2dikpO1xcblxcdHdpZHRoOiA5NSU7XFxuXFx0Ym9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1ydnYpKTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zdWJtaXQtYnV0dG9uIGltZyB7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uZGlzcGxheWVkLWl0ZW0gaW1nIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2hlY2tib3ggaW1nLFxcbi5leHBhbmQgaW1nIHtcXG5cXHR3aWR0aDogY2FsYyh2YXIoLS1ydnYpKTtcXG59XFxuXFxuLmVkaXQgaW1nIHtcXG5cXHR3aWR0aDogY2FsYygwLjgqdmFyKC0tcnZ2KSk7XFxufVxcblxcbi5jaGVja2JveCB7XFxuXFx0Z3JpZC1hcmVhOiBjaGVja2JveDtcXG5cXHRtYXJnaW4tbGVmdDogY2FsYygwLjIqdmFyKC0tcnZ2KSk7XFxufVxcblxcbi5pdGVtLXRpdGxlIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0Ym90dG9tOiAycHg7XFxuXFx0Z3JpZC1hcmVhOiB0aXRsZTtcXG5cXHRqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbn1cXG5cXG4uZXhwYW5kYWJsZS10aXRsZSB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZWRpdCB7XFxuXFx0Z3JpZC1hcmVhOiBlZGl0O1xcbn1cXG5cXG4uZXhwYW5kIHtcXG5cXHRncmlkLWFyZWE6IGV4cGFuZDtcXG59XFxuXFxuLnNocmluayB7XFxuXFx0Z3JpZC1hcmVhOiBleHBhbmQ7XFxuXFx0YXNwZWN0LXJhdGlvOiAxIC8gMTtcXG59XFxuXFxuLnNocmluayBpbWcge1xcblxcdGhlaWdodDogY2FsYyh2YXIoLS1ydnYpKTtcXG59XFxuXFxuLml0ZW0tZGVzY3JpcHRpb24ge1xcblxcdGJvcmRlci1yYWRpdXM6IDNweDtcXG5cXHRmb250LXN0eWxlOiBpdGFsaWM7XFxuXFx0Z3JpZC1hcmVhOiBkZXNjcmlwdGlvbjtcXG5cXHRhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcblxcdGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcXG5cXHRmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLmV4cGFuZGVkLWl0ZW0gLmRlbGV0ZSB7XFxuXFx0Z3JpZC1hcmVhOiBkZWxldGU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuXFx0bWFyZ2luLWJvdHRvbTogY2FsYygwLjMqdmFyKC0tcnZ2KSk7XFxufVxcblxcbi5kZWxldGUgaW1nIHtcXG5cXHRoZWlnaHQ6IGNhbGModmFyKC0tcnZ2KSk7XFxufVxcblxcbmZvb3RlciB7XFxuXFx0aGVpZ2h0OiA1dmg7XFxuXFx0bWluLWhlaWdodDogY2FsYygwLjgqdmFyKC0tcnZ2KSk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGl0bGUtZm9vdGVyLWNvbG9yKTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Zm9udC1zaXplOiBjYWxjKDAuNSp2YXIoLS1ydnYpKTtcXG5cXHRib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XFxuXFx0Zm9udC1mYW1pbHk6ICdTdWJsaW1hJztcXG5cXHRmb250LXNpemU6IGNhbGMoMC40KnZhcigtLXJ2dikpO1xcblxcdGxldHRlci1zcGFjaW5nOiBjYWxjKDAuMSp2YXIoLS1ydnYpKTtcXG5cXHR0ZXh0LWluZGVudDogY2FsYygwLjEqdmFyKC0tcnZ2KSk7XFxufVxcblxcbi8qIGRhcmsgbW9kZSBzdHlsaW5nOiAqL1xcblxcbi53cmFwcGVyLmRhcmsge1xcblxcdGNvbG9yOiB2YXIoLS1kYXJrLXRleHQpO1xcbn1cXG5cXG4udGl0bGUuZGFyayB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay10aXRsZS1mb290ZXItY29sb3IpO1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kYXJrLWJvcmRlcik7XFxufVxcblxcbi5uYXYuZGFyayB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1uYXYtYmcpO1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kYXJrLWJvcmRlcik7XFxufVxcblxcbi5uYXYuZGFyayBkaXYge1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstYm9yZGVyKTtcXG59XFxuXFxuLm5vdy5kYXJrIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLW5vdy1idXR0b24pO1xcbn1cXG5cXG4ubGF0ZXIuZGFyayB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1sYXRlci1idXR0b24pO1xcbn1cXG5cXG4uYWxsLmRhcmsge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYWxsLWJ1dHRvbik7XFxufVxcblxcbi5zZWxlY3RlZC5kYXJrIHtcXG5cXHRib3gtc2hhZG93OiAwIDAgMCAzcHggdmFyKC0tZGFyay1idXR0b24tb3V0bGluZSk7XFxufVxcblxcbi5tYWluLmRhcmsge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstbWFpbi1iZyk7XFxufVxcblxcbi5kaXNwbGF5ZWQtaXRlbS5kYXJrIHtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWJvcmRlcik7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1pdGVtLWJnKTtcXG59XFxuXFxuLmRpc3BsYXllZC1pdGVtLm5vdy1pdGVtLmRhcmsge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstbm93LWl0ZW0tYmcpO1xcbn1cXG5cXG4uZGlzcGxheWVkLWl0ZW0ubGF0ZXItaXRlbS5kYXJrIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWxhdGVyLWl0ZW0tYmcpO1xcbn1cXG5cXG4uY29tcGxldGVkLWl0ZW0gLml0ZW0tdGl0bGUuZGFyayB7XFxuXFx0ZmlsdGVyOiBicmlnaHRuZXNzKDgwJSk7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgY2FsYygwLjA0KnZhcigtLXJ2dikpIHZhcigtLWRhcmstdGV4dCk7XFxuXFx0dGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBub25lO1xcbn1cXG5cXG4uYWRkLWZvcm0taXRzZWxmLmRhcmssXFxuLmVkaXQtZm9ybS1pdHNlbGYuZGFyayB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1mb3JtLWJnKTtcXG59XFxuXFxuLmNsb3NlLWJ1dHRvbi5kYXJrIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWNsb3NlLWJ1dHRvbik7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1ib3JkZXIpO1xcbn1cXG5cXG4udGl0bGUtc2VjdGlvbi5kYXJrIGlucHV0LFxcbi5kZXNjcmlwdGlvbi1zZWN0aW9uLmRhcmsgdGV4dGFyZWEge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZm9ybS1pbnB1dC1iZyk7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1ib3JkZXIpO1xcbn1cXG5cXG5pbnB1dC5kYXJrOmZvY3VzLFxcbnRleHRhcmVhLmRhcms6Zm9jdXMge1xcblxcdGJveC1zaGFkb3c6IDAgMCAwIDNweCB2YXIoLS1kYXJrLWlucHV0LWZvY3VzLW91dGxpbmUpO1xcbn1cXG5cXG4ucmFkaW8tb3B0aW9uLmRhcmsge1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstYm9yZGVyKTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLXByaW9yaXR5LWJ1dHRvbi1kZWZhdWx0KTtcXG59XFxuXFxuLm5vdy1vcHRpb24uc2VsZWN0ZWQtcHJpb3JpdHkuZGFyayB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ub3ctYnV0dG9uKTtcXG5cXHRib3gtc2hhZG93OiAwIDAgMCAzcHggdmFyKC0tZGFyay1idXR0b24tb3V0bGluZSk7XFxufVxcblxcbi5sYXRlci1vcHRpb24uc2VsZWN0ZWQtcHJpb3JpdHkuZGFyayB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1sYXRlci1idXR0b24pO1xcblxcdGJveC1zaGFkb3c6IDAgMCAwIDNweCB2YXIoLS1kYXJrLWJ1dHRvbi1vdXRsaW5lKTtcXG59XFxuXFxuLmRpc3BsYXllZC1pdGVtLmFkZC1pdGVtLWJ1dHRvbi5kYXJrIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWFkZC1pdGVtLWJ1dHRvbik7XFxufVxcblxcbi5zdWJtaXQtYnV0dG9uLmRhcmsge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstc3VibWl0LWJ1dHRvbi1iZyk7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1ib3JkZXIpO1xcbn1cXG5cXG5mb290ZXIuZGFyayB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay10aXRsZS1mb290ZXItY29sb3IpO1xcblxcdGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWJvcmRlcik7XFxufVxcblxcbi8qIGRlc2t0b3AgdmVyc2lvbjogKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc1MHB4KSB7XFxuXFxuXFx0Lm5hdiBkaXYge1xcblxcdFxcdHRyYW5zaXRpb246IDAuMDc1cyBsaW5lYXI7XFxuXFx0fVxcblxcblxcdC5uYXYgZGl2OmhvdmVyIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcblxcdH1cXG5cXG5cXHQuY2hlY2tib3gsXFxuXFx0LmVkaXQsXFxuXFx0LmV4cGFuZCxcXG5cXHQuc2hyaW5rLFxcblxcdC5kZWxldGUsXFxuXFx0LmFkZC1pdGVtLWJ1dHRvbixcXG5cXHQucmFkaW8tb3B0aW9uLFxcblxcdC5zdWJtaXQtYnV0dG9uLFxcblxcdC5jbG9zZS1idXR0b24ge1xcblxcdFxcdHRyYW5zaXRpb246IDAuMDc1cyBsaW5lYXI7XFxuXFx0fVxcblxcblxcdC5jaGVja2JveDpob3ZlciB7XFxuXFx0XFx0dHJhbnNmb3JtOiBzY2FsZSgxLjA3NSk7XFxuXFx0fVxcblxcblxcdC5lZGl0OmhvdmVyIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuXFx0fVxcblxcblxcdC5leHBhbmQ6aG92ZXIge1xcblxcdFxcdHRyYW5zZm9ybTogc2NhbGUoMS4yNSk7XFxuXFx0fVxcblxcblxcdC5zaHJpbms6aG92ZXIge1xcblxcdFxcdHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG5cXHR9XFxuXFxuXFx0LmRlbGV0ZTpob3ZlciB7XFxuXFx0XFx0dHJhbnNmb3JtOiBzY2FsZSgxLjA3NSk7XFxuXFx0fVxcblxcblxcdC5hZGQtaXRlbS1idXR0b246aG92ZXIge1xcblxcdFxcdHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuXFx0fVxcblxcblxcdC5yYWRpby1vcHRpb246aG92ZXIge1xcblxcdFxcdHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuXFx0fVxcblxcblxcdC5zdWJtaXQtYnV0dG9uOmhvdmVyIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xcblxcdH1cXG5cXG5cXHQuY2xvc2UtYnV0dG9uOmhvdmVyIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuXFx0fVxcblxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XFxuXFx0LmNvbXBsZXRlZC1pdGVtIC5pdGVtLXRpdGxlLFxcblxcdC5jb21wbGV0ZWQtaXRlbSAuaXRlbS10aXRsZS5kYXJrIHtcXG5cXHRcXHRmb250LXN0eWxlOiBpdGFsaWM7XFxuXFx0XFx0dGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuXFx0XFx0dGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBub25lO1xcblxcdFxcdHRleHQtdW5kZXJsaW5lLW9mZnNldDogMDtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XFxuXFx0Ym9keSB7XFxuXFx0XFx0bWluLWhlaWdodDogMTAwdmg7XFxuXFx0XFx0bWluLXdpZHRoOiAxMDB2dztcXG5cXHR9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7Ozs7Ozs7Ozs7Q0FhQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNi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QztFQUNDLGlCQUFpQjtFQUNqQixnQkFBZ0I7Q0FDakI7QUFDRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1ydnY6IGNhbGMoMXJlbSArIDF2aCArIDF2dyk7XFxuXFxuXFx0LS1ibHVlOiAjMkU1MTY5O1xcbiAgICAtLWJsdWUtZ3JheTogIzVFNjg2RDtcXG4gICAgLS1icm93bjogIzZGNTc0NjtcXG4gICAgLS1icm93bi1tdXRlZDogIzYzNTg0QztcXG4gICAgLS1icm93bi10YW46ICNBNThGODU7XFxuICAgIC0tZm9yZXN0LWdyZWVuOiAjNEQ2NjNFO1xcbiAgICAtLWdyZWVuLWJyb3duOiAjNUY1NjNGO1xcbiAgICAtLWdyYXktdGFuOiAjQzlCQkEzO1xcbiAgICAtLXRhbi1ncmF5OiAjRDFDOUJBO1xcbiAgICAtLW9mZi13aGl0ZTogI0U0RDlDNTtcXG4gICAgLS1vcmFuZ2UteWVsbG93OiAjRTFCMjcwO1xcbiAgICAtLW9yYW5nZS10YW46ICNDREE4ODU7XFxuICAgIC0tcmVkOiAjQUMzQTNFO1xcbiAgICAtLXNwZWNpYWwtcmVkOiAjODI0RTRBO1xcbiAgICAtLXRhbjogI0QyQkM5QjtcXG5cXG5cXHQtLXRpdGxlLWZvb3Rlci1jb2xvcjogI2JhOGU1ZWRlO1xcblxcdC0tbmF2LWJnOiAjZTRkOWM1NzQ7XFxuXFx0LS1ub3ctYnV0dG9uOiAjNzQ5YzVkO1xcblxcdC0tbGF0ZXItYnV0dG9uOiAjYjU2YzY3O1xcblxcdC0tYWxsLWJ1dHRvbjogI2UwYTg1YmMyO1xcblxcdC0tYnV0dG9uLW91dGxpbmU6ICNmMDk5MWZkNTtcXG5cXHQtLWlucHV0LWZvY3VzLW91dGxpbmU6ICNlNTk4MmQ7XFxuXFx0LS1pbnB1dC12YWxpZC1vdXRsaW5lOiM0RDY2M0U7XFxuXFx0LS1tYWluLWJnOiAjZTFjZmFlOTc7XFxuXFx0LS1pdGVtLWJnOiAjMjA4NmNhOTI7XFxuXFx0LS1ub3ctaXRlbS1iZzogIzYyOWM0MDdjO1xcblxcdC0tbGF0ZXItaXRlbS1iZzogI2RhODY4MGMxO1xcblxcdC0tZGVzY3JpcHRpb24tYmc6ICNkOGYyZmY5NTtcXG5cXHQtLWFkZC1pdGVtLWJ1dHRvbjogI2JhOGQ1ZTg1O1xcblxcdC0tZm9ybS1iZzogI2YwZDdhOTtcXG5cXHQtLXByaW9yaXR5LWJ1dHRvbi1kZWZhdWx0OiAjYzhiNWEyODU7XFxuXFx0LS1mb3JtLWJ1dHRvbjogI2JhOGQ1ZTg1O1xcblxcdC0tZm9ybS1pbnB1dC1iZzogI0YzRUVFNTtcXG5cXHQtLXN1Ym1pdC1idXR0b24tYmc6ICM4N2I2ZDViNDtcXG5cXHQtLWNsb3NlLWJ1dHRvbjogIzk4NmY0NDcxO1xcblxcdC0tZGlzcGxheS1pY29uOiBjYWxjKHZhcigtLXJ2dikpO1xcblxcblxcdC0tZGFyay10ZXh0OiAjZGRkMmJmO1xcblxcdC0tZGFyay1ib3JkZXI6ICMyNzI0MjA7XFxuXFx0LS1kYXJrLXRpdGxlLWZvb3Rlci1jb2xvcjogIzIwMWMxOWRlO1xcblxcdC0tZGFyay1uYXYtYmc6ICMyMzIwMWNjMztcXG5cXHQtLWRhcmstbm93LWJ1dHRvbjogIzM4NGEyZGRhO1xcblxcdC0tZGFyay1sYXRlci1idXR0b246ICM4ZTU2NTI7XFxuXFx0LS1kYXJrLWFsbC1idXR0b246ICNkNDlmNTM5YztcXG5cXHQtLWRhcmstYnV0dG9uLW91dGxpbmU6ICNlZTlmMzJjYTtcXG5cXHQtLWRhcmstaW5wdXQtZm9jdXMtb3V0bGluZTogI2VlOWYzMmNhO1xcblxcdC0tZGFyay1pbnB1dC12YWxpZC1vdXRsaW5lOiM0RDY2M0U7XFxuXFx0LS1kYXJrLW1haW4tYmc6ICMyNDIxMWRhMTtcXG5cXHQtLWRhcmstaXRlbS1iZzogIzEyM2M1ODkyO1xcblxcdC0tZGFyay1ub3ctaXRlbS1iZzogcmdiYSg0NiwgODAsIDI4LCAwLjUyNyk7XFxuXFx0LS1kYXJrLWxhdGVyLWl0ZW0tYmc6ICM3NTQ3NDNiMjtcXG5cXHQtLWRhcmstYWRkLWl0ZW0tYnV0dG9uOiAjODE1ZTM2NzA7XFxuXFx0LS1kYXJrLWZvcm0tYmc6ICM0MjNkMzg7XFxuXFx0LS1kYXJrLXByaW9yaXR5LWJ1dHRvbi1kZWZhdWx0OiAjOGI3NzYyODU7XFxuXFx0LS1kYXJrLWZvcm0tYnV0dG9uOiAjYmE4ZDVlODU7XFxuXFx0LS1kYXJrLWZvcm0taW5wdXQtYmc6ICNhYmE2OWE7XFxuXFx0LS1kYXJrLXN1Ym1pdC1idXR0b24tYmc6ICM2NjhkYThiNDtcXG5cXHQtLWRhcmstY2xvc2UtYnV0dG9uOiAjOTY4NTczODU7XFxuXFxuXFx0dG91Y2gtYWN0aW9uOiBwYW4teCBwYW4teTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6ICdNYWpvciBNb25vJztcXG5cXHRzcmM6IHVybCgnZm9udC9tYWpvci1tb25vL21ham9yLW1vbm8udHRmJyk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcblxcdGZvbnQtZmFtaWx5OiAnU3VibGltYSc7XFxuXFx0c3JjOiB1cmwoJ2ZvbnQvc3VibGltYS9zdWJsaW1hLWxpZ2h0Lm90ZicpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogJ1N1YmxpbWEgQm9sZCc7XFxuXFx0c3JjOiB1cmwoJ2ZvbnQvc3VibGltYS9zdWJsaW1hLWV4dHJhLWJvbGQub3RmJyk7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0b3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcdHdpZHRoOiAxMDB2dztcXG59XFxuXFxuLndyYXBwZXIge1xcblxcdG1pbi1oZWlnaHQ6IDEwMCU7XFxuXFx0d2lkdGg6IDEwMHZ3O1xcblxcdG1heC13aWR0aDogMTAwJTtcXG5cXHRtYXJnaW4tbGVmdDogYXV0bztcXG5cXHRtYXJnaW4tcmlnaHQ6IGF1dG87XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdG92ZXJmbG93LXg6IGhpZGRlbjtcXG5cXHRvdmVyZmxvdy15OiBzY3JvbGw7XFxuXFx0ZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuaGVhZGVyIHtcXG5cXHRoZWlnaHQ6IDE1dmg7XFxuXFx0bWluLWhlaWdodDogY2FsYygzLjIqdmFyKC0tcnZ2KSk7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udGl0bGUge1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxuXFx0bWluLWhlaWdodDogY2FsYyh2YXIoLS1ydnYpKTtcXG5cXHRmbGV4OiAxO1xcblxcdG92ZXJmbG93LXg6IGhpZGRlbjtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiBjYWxjKDAuNip2YXIoLS1ydnYpKTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aXRsZS1mb290ZXItY29sb3IpO1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnRpdGxlLXRleHQge1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRmb250LWZhbWlseTogJ1N1YmxpbWEnO1xcblxcdGZvbnQtc2l6ZTogY2FsYygwLjQ1KnZhcigtLXJ2dikpO1xcblxcdGxldHRlci1zcGFjaW5nOiBjYWxjKDAuMSp2YXIoLS1ydnYpKTtcXG5cXHR0ZXh0LWluZGVudDogY2FsYygwLjEqdmFyKC0tcnZ2KSk7XFxufVxcblxcbi5saWdodC1tb2RlLFxcbi5kYXJrLW1vZGUge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRoZWlnaHQ6IHZhcigtLWRpc3BsYXktaWNvbik7XFxuXFx0d2lkdGg6IHZhcigtLWRpc3BsYXktaWNvbik7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubGlnaHQtbW9kZS5kYXJrLFxcbi5kYXJrLW1vZGUuZGFyayB7XFxuXFx0ZmlsdGVyOiBpbnZlcnQoODAlKTtcXG59XFxuXFxuLmxpZ2h0LW1vZGUgaW1nLFxcbi5kYXJrLW1vZGUgaW1nIHtcXG5cXHRoZWlnaHQ6IDgwJTtcXG5cXHR3aWR0aDogODAlO1xcbn1cXG5cXG4uc2VsZWN0ZWQtZGlzcGxheS5saWdodC1tb2RlLFxcbi5zZWxlY3RlZC1kaXNwbGF5LmRhcmstbW9kZSB7XFxuXFx0dHJhbnNpdGlvbjogMC4yNXMgbGluZWFyO1xcbn1cXG5cXG4uc2VsZWN0ZWQtZGlzcGxheS5saWdodC1tb2RlIGltZyB7XFxuXFx0ZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgNXB4IHZhcigtLXJlZCkpO1xcblxcdHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuXFxuLnNlbGVjdGVkLWRpc3BsYXkuZGFyay1tb2RlIGltZyB7XFxuXFx0ZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgNXB4IGJsYWNrKTtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcblxcbi5uYXYge1xcblxcdGZsZXg6IDI7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGZvbnQtZmFtaWx5OiAnTWFqb3IgTW9ubyc7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWJnKTtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5uYXYgZGl2IHtcXG5cXHRmb250LXNpemU6IGNhbGMoMC42KnZhcigtLXJ2dikpO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHR3aWR0aDogY2FsYygzKnZhcigtLXJ2dikpO1xcblxcdGhlaWdodDogY2FsYyh2YXIoLS1ydnYpKTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG5cXHRib3JkZXItcmFkaXVzOiAxNSU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm5vdyB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbm93LWJ1dHRvbik7XFxufVxcblxcbi5ub3csXFxuLmFsbCB7XFxuXFx0bGV0dGVyLXNwYWNpbmc6IGNhbGMoMC4zKnZhcigtLXJ2dikpO1xcblxcdHRleHQtaW5kZW50OiBjYWxjKDAuMyp2YXIoLS1ydnYpKTtcXG59XFxuXFxuLmxhdGVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sYXRlci1idXR0b24pO1xcblxcdGxldHRlci1zcGFjaW5nOiBjYWxjKDAuMSp2YXIoLS1ydnYpKTtcXG5cXHR0ZXh0LWluZGVudDogY2FsYygwLjEqdmFyKC0tcnZ2KSk7XFxufVxcblxcbi5hbGwge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFsbC1idXR0b24pO1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcblxcdGJveC1zaGFkb3c6IDAgMCAwIDNweCB2YXIoLS1idXR0b24tb3V0bGluZSk7XFxufVxcblxcbi5tYWluIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0ZmxleDogYXV0bztcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRwYWRkaW5nOiBjYWxjKDAuNSp2YXIoLS1ydnYpKSAwO1xcblxcdGdhcDogY2FsYygwLjYqdmFyKC0tcnZ2KSk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZyk7XFxufVxcblxcbi5kaXNwbGF5ZWQtaXRlbSB7XFxuXFx0d2lkdGg6IDkwdnc7XFxuXFx0bWF4LXdpZHRoOiBjYWxjKDE1KnZhcigtLXJ2dikpO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRmb250LWZhbWlseTogJ1N1YmxpbWEnO1xcblxcdGZvbnQtc2l6ZTogY2FsYygwLjYqdmFyKC0tcnZ2KSk7XFxuXFx0cGFkZGluZzogY2FsYygwLjEqdmFyKC0tcnZ2KSkgY2FsYygwLjMqdmFyKC0tcnZ2KSk7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuXFx0Ym9yZGVyLXJhZGl1czogY2FsYygwLjgqdmFyKC0tcnZ2KSk7XFxuXFx0bWFyZ2luOiAwIGNhbGMoMC43KnZhcigtLXJ2dikpO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBjYWxjKDEuNCp2YXIoLS1ydnYpKSAxZnIgY2FsYyh2YXIoLS1ydnYpKSBjYWxjKHZhcigtLXJ2dikpO1xcblxcdGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcblxcdGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJjaGVja2JveCB0aXRsZSBlZGl0IGV4cGFuZFxcXCI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0taXRlbS1iZyk7XFxufVxcblxcbi5kaXNwbGF5ZWQtaXRlbS5ub3ctaXRlbSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbm93LWl0ZW0tYmcpO1xcbn1cXG5cXG4uZGlzcGxheWVkLWl0ZW0ubGF0ZXItaXRlbSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGF0ZXItaXRlbS1iZyk7XFxufVxcblxcbi5leHBhbmRlZC1pdGVtIHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogY2FsYygxLjQqdmFyKC0tcnZ2KSkgMWZyIGNhbGModmFyKC0tcnZ2KSkgY2FsYyh2YXIoLS1ydnYpKTtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IGNhbGMoMS4yKnZhcigtLXJ2dikpIDFmcjtcXG5cXHRncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG5cXHRcXHRcXFwiY2hlY2tib3ggdGl0bGUgZWRpdCBleHBhbmRcXFwiXFxuXFx0XFx0XFxcIi4gZGVzY3JpcHRpb24gLiBkZWxldGVcXFwiO1xcbn1cXG5cXG4uZXhwYW5kZWQtaXRlbSAuaXRlbS1kZXNjcmlwdGlvbiB7XFxuXFx0bWFyZ2luLXJpZ2h0OiBjYWxjKDAuMyp2YXIoLS1ydnYpKTtcXG5cXHRtYXJnaW4tYm90dG9tOiBjYWxjKDAuMyp2YXIoLS1ydnYpKTtcXG59XFxuXFxuLmV4cGFuZGVkLWl0ZW0gLml0ZW0tdGl0bGUge1xcblxcdGN1cnNvcjogYXV0bztcXG59XFxuXFxuLmNvbXBsZXRlZC1pdGVtIHtcXG5cXHRmaWx0ZXI6IGdyYXlzY2FsZSg3MCUpO1xcbn1cXG5cXG4uY29tcGxldGVkLWl0ZW0gLml0ZW0tdGl0bGUge1xcblxcdGZvbnQtc3R5bGU6IGl0YWxpYztcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBjYWxjKDAuMDQqdmFyKC0tcnZ2KSkgYmxhY2s7XFxuXFx0dGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBub25lO1xcblxcdHRleHQtdW5kZXJsaW5lLW9mZnNldDogY2FsYygtMC4yKnZhcigtLXJ2dikpO1xcbn1cXG5cXG4uY29tcGxldGVkLWl0ZW0gLml0ZW0tZGVzY3JpcHRpb24ge1xcblxcdGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmRpc3BsYXllZC1pdGVtLmFkZC1pdGVtLWJ1dHRvbiB7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRtYXJnaW46IDA7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFkZC1pdGVtLWJ1dHRvbik7XFxuXFx0aGVpZ2h0OiBjYWxjKDEuNSp2YXIoLS1ydnYpKTtcXG5cXHR3aWR0aDogY2FsYygxLjUqdmFyKC0tcnZ2KSk7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYWRkLWl0ZW0tYnV0dG9uIGltZyB7XFxuXFx0bWF4LWhlaWdodDogMTAwJTtcXG5cXHRtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbi5hZGQtZm9ybSxcXG4uZWRpdC1mb3JtIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG5cXHR6LWluZGV4OiAzO1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHR0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuLmFkZC1mb3JtLWl0c2VsZixcXG4uZWRpdC1mb3JtLWl0c2VsZiB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9ybS1iZyk7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHR3aWR0aDogOTB2dztcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0bWF4LXdpZHRoOiBjYWxjKDE1KnZhcigtLXJ2dikpO1xcblxcdGZvbnQtZmFtaWx5OiAnU3VibGltYSc7XFxuXFx0Zm9udC1zaXplOiBjYWxjKDAuNip2YXIoLS1ydnYpKTtcXG5cXHRwYWRkaW5nOiBjYWxjKDAuMSp2YXIoLS1ydnYpKSBjYWxjKDAuMyp2YXIoLS1ydnYpKTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG5cXHRib3JkZXItcmFkaXVzOiBjYWxjKDAuOCp2YXIoLS1ydnYpKTtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IGNhbGMoMS43KnZhcigtLXJ2dikpIGNhbGModmFyKC0tcnZ2KSkgY2FsYyg0KnZhcigtLXJ2dikpIGNhbGModmFyKC0tcnZ2KSkgY2FsYygyLjIqdmFyKC0tcnZ2KSk7XFxuXFx0cm93LWdhcDogY2FsYygwLjI1KnZhcigtLXJ2dikpO1xcblxcdGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuXFx0XFx0XFxcImZvcm0tdGl0bGVcXFwiXFxuXFx0XFx0XFxcInRpdGxlLXNlY3Rpb25cXFwiXFxuXFx0XFx0XFxcImRlc2NyaXB0aW9uLXNlY3Rpb25cXFwiXFxuXFx0XFx0XFxcInByaW9yaXR5LXNlY3Rpb25cXFwiXFxuXFx0XFx0XFxcInN1Ym1pdC1idXR0b25cXFwiO1xcbn1cXG5cXG4uZWRpdC1mb3JtLXRpdGxlLXRleHQge1xcblxcdG1heC1oZWlnaHQ6IGNhbGMoMS43KnZhcigtLXJ2dikpO1xcblxcdG1heC13aWR0aDogY2FsYygxMip2YXIoLS1ydnYpKTtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcblxcdHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuXFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuXFx0bWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLXJ2dikpO1xcbn1cXG5cXG4uYmx1ci1iYWNrZHJvcCB7XFxuXFx0ei1pbmRleDogMjtcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHRtaW4td2lkdGg6IDIwMHZ3O1xcblxcdGhlaWdodDogMjAwdmg7XFxuXFx0YmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxuXFx0LXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG59XFxuXFxuLmZvcm0tdGl0bGUge1xcblxcdG1hcmdpbjogMCAxJTtcXG5cXHRtYXgtd2lkdGg6IDkwdnc7XFxuXFx0Z3JpZC1hcmVhOiBmb3JtLXRpdGxlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvcm0tdGl0bGUtdGV4dCB7XFxuXFx0Zm9udC1zaXplOiBjYWxjKDAuNyp2YXIoLS1ydnYpKTtcXG59XFxuXFxuLmZvcm0tdGl0bGUtdGV4dDpob3ZlciB7XFxuXFx0Zm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4uY2xvc2UtYnV0dG9uIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xvc2UtYnV0dG9uKTtcXG5cXHRtYXJnaW4tbGVmdDogYXV0bztcXG5cXHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG5cXHRoZWlnaHQ6IGNhbGMoMC45KnZhcigtLXJ2dikpO1xcblxcdHdpZHRoOiBjYWxjKDAuOSp2YXIoLS1ydnYpKTtcXG5cXHRib3JkZXItcmFkaXVzOiBjYWxjKHZhcigtLXJ2dikpO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNsb3NlLWJ1dHRvbiBpbWcge1xcblxcdGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnRpdGxlLXNlY3Rpb24ge1xcblxcdGdyaWQtYXJlYTogdGl0bGUtc2VjdGlvbjtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogY2FsYygzLjUqdmFyKC0tcnZ2KSkgMWZyO1xcbn1cXG5cXG4udGl0bGUtc2VjdGlvbiBsYWJlbCB7XFxuXFx0Zm9udC1zaXplOiBjYWxjKDAuNSp2YXIoLS1ydnYpKTtcXG59XFxuXFxuLnRpdGxlLXNlY3Rpb24gaW5wdXQsXFxuLmRlc2NyaXB0aW9uLXNlY3Rpb24gdGV4dGFyZWEge1xcblxcdHdpZHRoOiA5MyU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9ybS1pbnB1dC1iZyk7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuXFx0Ym9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1ydnYpKTtcXG5cXHRwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuXFx0Zm9udC1mYW1pbHk6ICdTdWJsaW1hJztcXG5cXHRmb250LXNpemU6IGNhbGMoMC40NSp2YXIoLS1ydnYpKTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uLXNlY3Rpb24gdGV4dGFyZWEge1xcblxcdGJvcmRlci1yYWRpdXM6IGNhbGMoMC41KnZhcigtLXJ2dikpO1xcblxcdHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMsXFxudGV4dGFyZWE6Zm9jdXMge1xcblxcdGFwcGVhcmFuY2U6IG5vbmU7XFxuXFx0b3V0bGluZTogbm9uZTtcXG5cXHRib3gtc2hhZG93OiAwIDAgMCAzcHggdmFyKC0taW5wdXQtZm9jdXMtb3V0bGluZSk7XFxufVxcblxcbmlucHV0Om5vdCg6Zm9jdXMpLFxcbnRleHRhcmVhOm5vdCg6Zm9jdXMpIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kZXNjcmlwdGlvbi1zZWN0aW9uIHtcXG5cXHRncmlkLWFyZWE6IGRlc2NyaXB0aW9uLXNlY3Rpb247XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGNhbGMoMy41KnZhcigtLXJ2dikpIDFmcjtcXG59XFxuXFxuLmRlc2NyaXB0aW9uLXNlY3Rpb24gbGFiZWwge1xcblxcdGZvbnQtc2l6ZTogY2FsYygwLjUqdmFyKC0tcnZ2KSk7XFxufVxcblxcbi5wcmlvcml0eS1zZWN0aW9uIHtcXG5cXHRtYXJnaW4tdG9wOiAycHg7XFxuXFx0Z3JpZC1hcmVhOiBwcmlvcml0eS1zZWN0aW9uO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBjYWxjKDMuNSp2YXIoLS1ydnYpKSAxZnIgMWZyO1xcbn1cXG5cXG4ucHJpb3JpdHktbGFiZWwge1xcblxcdGZvbnQtc2l6ZTogY2FsYygwLjUqdmFyKC0tcnZ2KSk7XFxufVxcblxcbi5yYWRpby1vcHRpb24ge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRmb250LWZhbWlseTogJ01ham9yIE1vbm8nO1xcblxcdHdpZHRoOiBjYWxjKDMqdmFyKC0tcnZ2KSk7XFxuXFx0aGVpZ2h0OiBjYWxjKHZhcigtLXJ2dikpO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcblxcdGJvcmRlci1yYWRpdXM6IDE1JTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW9yaXR5LWJ1dHRvbi1kZWZhdWx0KTtcXG59XFxuXFxuLnJhZGlvLW9wdGlvbiBsYWJlbCB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubm93LW9wdGlvbiB7XFxuXFx0anVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuXFx0bGV0dGVyLXNwYWNpbmc6IGNhbGMoMC4zKnZhcigtLXJ2dikpO1xcblxcdHRleHQtaW5kZW50OiBjYWxjKDAuMyp2YXIoLS1ydnYpKTtcXG59XFxuXFxuLm5vdy1vcHRpb24uc2VsZWN0ZWQtcHJpb3JpdHkge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vdy1idXR0b24pO1xcblxcdGJveC1zaGFkb3c6IDAgMCAwIDNweCB2YXIoLS1idXR0b24tb3V0bGluZSk7XFxufVxcblxcbi5sYXRlci1vcHRpb24ge1xcblxcdGp1c3RpZnktc2VsZjogY2VudGVyO1xcblxcdGxldHRlci1zcGFjaW5nOiBjYWxjKDAuMSp2YXIoLS1ydnYpKTtcXG5cXHR0ZXh0LWluZGVudDogY2FsYygwLjEqdmFyKC0tcnZ2KSk7XFxufVxcblxcbi5sYXRlci1vcHRpb24uc2VsZWN0ZWQtcHJpb3JpdHkge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxhdGVyLWJ1dHRvbik7XFxuXFx0Ym94LXNoYWRvdzogMCAwIDAgM3B4IHZhcigtLWJ1dHRvbi1vdXRsaW5lKTtcXG59XFxuXFxuLnJhZGlvLWlucHV0IHtcXG5cXHRkaXNwbGF5OiBub25lO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0bWFyZ2luOiAwO1xcblxcdGFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi5zdWJtaXQtYnV0dG9uIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0Z3JpZC1hcmVhOiBzdWJtaXQtYnV0dG9uO1xcblxcdGZvbnQtZmFtaWx5OiAnU3VibGltYSc7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VibWl0LWJ1dHRvbi1iZyk7XFxuXFx0YWxpZ24tc2VsZjogY2VudGVyO1xcblxcdGp1c3RpZnktc2VsZjogY2VudGVyO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcblxcdGhlaWdodDogY2FsYygxLjUqdmFyKC0tcnZ2KSk7XFxuXFx0d2lkdGg6IDk1JTtcXG5cXHRib3JkZXItcmFkaXVzOiBjYWxjKHZhcigtLXJ2dikpO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnN1Ym1pdC1idXR0b24gaW1nIHtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5kaXNwbGF5ZWQtaXRlbSBpbWcge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jaGVja2JveCBpbWcsXFxuLmV4cGFuZCBpbWcge1xcblxcdHdpZHRoOiBjYWxjKHZhcigtLXJ2dikpO1xcbn1cXG5cXG4uZWRpdCBpbWcge1xcblxcdHdpZHRoOiBjYWxjKDAuOCp2YXIoLS1ydnYpKTtcXG59XFxuXFxuLmNoZWNrYm94IHtcXG5cXHRncmlkLWFyZWE6IGNoZWNrYm94O1xcblxcdG1hcmdpbi1sZWZ0OiBjYWxjKDAuMip2YXIoLS1ydnYpKTtcXG59XFxuXFxuLml0ZW0tdGl0bGUge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRib3R0b206IDJweDtcXG5cXHRncmlkLWFyZWE6IHRpdGxlO1xcblxcdGp1c3RpZnktc2VsZjogc3RhcnQ7XFxufVxcblxcbi5leHBhbmRhYmxlLXRpdGxlIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5lZGl0IHtcXG5cXHRncmlkLWFyZWE6IGVkaXQ7XFxufVxcblxcbi5leHBhbmQge1xcblxcdGdyaWQtYXJlYTogZXhwYW5kO1xcbn1cXG5cXG4uc2hyaW5rIHtcXG5cXHRncmlkLWFyZWE6IGV4cGFuZDtcXG5cXHRhc3BlY3QtcmF0aW86IDEgLyAxO1xcbn1cXG5cXG4uc2hyaW5rIGltZyB7XFxuXFx0aGVpZ2h0OiBjYWxjKHZhcigtLXJ2dikpO1xcbn1cXG5cXG4uaXRlbS1kZXNjcmlwdGlvbiB7XFxuXFx0Ym9yZGVyLXJhZGl1czogM3B4O1xcblxcdGZvbnQtc3R5bGU6IGl0YWxpYztcXG5cXHRncmlkLWFyZWE6IGRlc2NyaXB0aW9uO1xcblxcdGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuXFx0anVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xcblxcdGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4uZXhwYW5kZWQtaXRlbSAuZGVsZXRlIHtcXG5cXHRncmlkLWFyZWE6IGRlbGV0ZTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG5cXHRtYXJnaW4tYm90dG9tOiBjYWxjKDAuMyp2YXIoLS1ydnYpKTtcXG59XFxuXFxuLmRlbGV0ZSBpbWcge1xcblxcdGhlaWdodDogY2FsYyh2YXIoLS1ydnYpKTtcXG59XFxuXFxuZm9vdGVyIHtcXG5cXHRoZWlnaHQ6IDV2aDtcXG5cXHRtaW4taGVpZ2h0OiBjYWxjKDAuOCp2YXIoLS1ydnYpKTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aXRsZS1mb290ZXItY29sb3IpO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRmb250LXNpemU6IGNhbGMoMC41KnZhcigtLXJ2dikpO1xcblxcdGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcXG5cXHRmb250LWZhbWlseTogJ1N1YmxpbWEnO1xcblxcdGZvbnQtc2l6ZTogY2FsYygwLjQqdmFyKC0tcnZ2KSk7XFxuXFx0bGV0dGVyLXNwYWNpbmc6IGNhbGMoMC4xKnZhcigtLXJ2dikpO1xcblxcdHRleHQtaW5kZW50OiBjYWxjKDAuMSp2YXIoLS1ydnYpKTtcXG59XFxuXFxuLyogZGFyayBtb2RlIHN0eWxpbmc6ICovXFxuXFxuLndyYXBwZXIuZGFyayB7XFxuXFx0Y29sb3I6IHZhcigtLWRhcmstdGV4dCk7XFxufVxcblxcbi50aXRsZS5kYXJrIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLXRpdGxlLWZvb3Rlci1jb2xvcik7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWRhcmstYm9yZGVyKTtcXG59XFxuXFxuLm5hdi5kYXJrIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLW5hdi1iZyk7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWRhcmstYm9yZGVyKTtcXG59XFxuXFxuLm5hdi5kYXJrIGRpdiB7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1ib3JkZXIpO1xcbn1cXG5cXG4ubm93LmRhcmsge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstbm93LWJ1dHRvbik7XFxufVxcblxcbi5sYXRlci5kYXJrIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWxhdGVyLWJ1dHRvbik7XFxufVxcblxcbi5hbGwuZGFyayB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1hbGwtYnV0dG9uKTtcXG59XFxuXFxuLnNlbGVjdGVkLmRhcmsge1xcblxcdGJveC1zaGFkb3c6IDAgMCAwIDNweCB2YXIoLS1kYXJrLWJ1dHRvbi1vdXRsaW5lKTtcXG59XFxuXFxuLm1haW4uZGFyayB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1tYWluLWJnKTtcXG59XFxuXFxuLmRpc3BsYXllZC1pdGVtLmRhcmsge1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstYm9yZGVyKTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWl0ZW0tYmcpO1xcbn1cXG5cXG4uZGlzcGxheWVkLWl0ZW0ubm93LWl0ZW0uZGFyayB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ub3ctaXRlbS1iZyk7XFxufVxcblxcbi5kaXNwbGF5ZWQtaXRlbS5sYXRlci1pdGVtLmRhcmsge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstbGF0ZXItaXRlbS1iZyk7XFxufVxcblxcbi5jb21wbGV0ZWQtaXRlbSAuaXRlbS10aXRsZS5kYXJrIHtcXG5cXHRmaWx0ZXI6IGJyaWdodG5lc3MoODAlKTtcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBjYWxjKDAuMDQqdmFyKC0tcnZ2KSkgdmFyKC0tZGFyay10ZXh0KTtcXG5cXHR0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IG5vbmU7XFxufVxcblxcbi5hZGQtZm9ybS1pdHNlbGYuZGFyayxcXG4uZWRpdC1mb3JtLWl0c2VsZi5kYXJrIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWZvcm0tYmcpO1xcbn1cXG5cXG4uY2xvc2UtYnV0dG9uLmRhcmsge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstY2xvc2UtYnV0dG9uKTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWJvcmRlcik7XFxufVxcblxcbi50aXRsZS1zZWN0aW9uLmRhcmsgaW5wdXQsXFxuLmRlc2NyaXB0aW9uLXNlY3Rpb24uZGFyayB0ZXh0YXJlYSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1mb3JtLWlucHV0LWJnKTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWJvcmRlcik7XFxufVxcblxcbmlucHV0LmRhcms6Zm9jdXMsXFxudGV4dGFyZWEuZGFyazpmb2N1cyB7XFxuXFx0Ym94LXNoYWRvdzogMCAwIDAgM3B4IHZhcigtLWRhcmstaW5wdXQtZm9jdXMtb3V0bGluZSk7XFxufVxcblxcbi5yYWRpby1vcHRpb24uZGFyayB7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1ib3JkZXIpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstcHJpb3JpdHktYnV0dG9uLWRlZmF1bHQpO1xcbn1cXG5cXG4ubm93LW9wdGlvbi5zZWxlY3RlZC1wcmlvcml0eS5kYXJrIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLW5vdy1idXR0b24pO1xcblxcdGJveC1zaGFkb3c6IDAgMCAwIDNweCB2YXIoLS1kYXJrLWJ1dHRvbi1vdXRsaW5lKTtcXG59XFxuXFxuLmxhdGVyLW9wdGlvbi5zZWxlY3RlZC1wcmlvcml0eS5kYXJrIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWxhdGVyLWJ1dHRvbik7XFxuXFx0Ym94LXNoYWRvdzogMCAwIDAgM3B4IHZhcigtLWRhcmstYnV0dG9uLW91dGxpbmUpO1xcbn1cXG5cXG4uZGlzcGxheWVkLWl0ZW0uYWRkLWl0ZW0tYnV0dG9uLmRhcmsge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYWRkLWl0ZW0tYnV0dG9uKTtcXG59XFxuXFxuLnN1Ym1pdC1idXR0b24uZGFyayB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1zdWJtaXQtYnV0dG9uLWJnKTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWJvcmRlcik7XFxufVxcblxcbmZvb3Rlci5kYXJrIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLXRpdGxlLWZvb3Rlci1jb2xvcik7XFxuXFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWRhcmstYm9yZGVyKTtcXG59XFxuXFxuLyogZGVza3RvcCB2ZXJzaW9uOiAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzUwcHgpIHtcXG5cXG5cXHQubmF2IGRpdiB7XFxuXFx0XFx0dHJhbnNpdGlvbjogMC4wNzVzIGxpbmVhcjtcXG5cXHR9XFxuXFxuXFx0Lm5hdiBkaXY6aG92ZXIge1xcblxcdFxcdHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuXFx0fVxcblxcblxcdC5jaGVja2JveCxcXG5cXHQuZWRpdCxcXG5cXHQuZXhwYW5kLFxcblxcdC5zaHJpbmssXFxuXFx0LmRlbGV0ZSxcXG5cXHQuYWRkLWl0ZW0tYnV0dG9uLFxcblxcdC5yYWRpby1vcHRpb24sXFxuXFx0LnN1Ym1pdC1idXR0b24sXFxuXFx0LmNsb3NlLWJ1dHRvbiB7XFxuXFx0XFx0dHJhbnNpdGlvbjogMC4wNzVzIGxpbmVhcjtcXG5cXHR9XFxuXFxuXFx0LmNoZWNrYm94OmhvdmVyIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDc1KTtcXG5cXHR9XFxuXFxuXFx0LmVkaXQ6aG92ZXIge1xcblxcdFxcdHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG5cXHR9XFxuXFxuXFx0LmV4cGFuZDpob3ZlciB7XFxuXFx0XFx0dHJhbnNmb3JtOiBzY2FsZSgxLjI1KTtcXG5cXHR9XFxuXFxuXFx0LnNocmluazpob3ZlciB7XFxuXFx0XFx0dHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcblxcdH1cXG5cXG5cXHQuZGVsZXRlOmhvdmVyIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDc1KTtcXG5cXHR9XFxuXFxuXFx0LmFkZC1pdGVtLWJ1dHRvbjpob3ZlciB7XFxuXFx0XFx0dHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG5cXHR9XFxuXFxuXFx0LnJhZGlvLW9wdGlvbjpob3ZlciB7XFxuXFx0XFx0dHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG5cXHR9XFxuXFxuXFx0LnN1Ym1pdC1idXR0b246aG92ZXIge1xcblxcdFxcdHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XFxuXFx0fVxcblxcblxcdC5jbG9zZS1idXR0b246aG92ZXIge1xcblxcdFxcdHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG5cXHR9XFxuXFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcXG5cXHQuY29tcGxldGVkLWl0ZW0gLml0ZW0tdGl0bGUsXFxuXFx0LmNvbXBsZXRlZC1pdGVtIC5pdGVtLXRpdGxlLmRhcmsge1xcblxcdFxcdGZvbnQtc3R5bGU6IGl0YWxpYztcXG5cXHRcXHR0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG5cXHRcXHR0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IG5vbmU7XFxuXFx0XFx0dGV4dC11bmRlcmxpbmUtb2Zmc2V0OiAwO1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcXG5cXHRib2R5IHtcXG5cXHRcXHRtaW4taGVpZ2h0OiAxMDB2aDtcXG5cXHRcXHRtaW4td2lkdGg6IDEwMHZ3O1xcblxcdH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIHNldCBib2R5IGhlaWdodCB0byBleGFjdGx5IHRoZSBpbm5lciBoZWlnaHQgb2YgdGhlIGJyb3dzZXIgb24gbmFycm93IChsaWtlbHkgbW9iaWxlKSBzY3JlZW5zOlxuY29uc3Qgc2V0Qm9keUhlaWdodCA9ICgpID0+IHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDc1MSkge1xuICAgICAgICBib2R5LnN0eWxlLm1pbkhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCArIFwicHhcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBib2R5LnN0eWxlLm1pbkhlaWdodCA9ICcxMDB2aCc7XG4gICAgfVxufTtcblxuLy8gc2V0IGJvZHkgd2lkdGggdG8gZXhhY3RseSB0aGUgaW5uZXIgd2lkdGggb2YgdGhlIGJyb3dzZXI6XG5jb25zdCBzZXRCb2R5V2lkdGggPSAoKSA9PiB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBjb25zdCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGJvZHkuc3R5bGUubWF4V2lkdGggPSB3aWR0aCArIFwicHhcIjtcbn07XG5cbmNvbnN0IHNldEJvZHkgPSAoKSA9PiB7XG4gICAgc2V0Qm9keUhlaWdodCgpO1xuICAgIHNldEJvZHlXaWR0aCgpO1xufTtcblxuZXhwb3J0IHsgc2V0Qm9keUhlaWdodCwgc2V0Qm9keVdpZHRoLCBzZXRCb2R5IH07IiwiaW1wb3J0IFNhdmVJY29uIGZyb20gJy4uL2ltZy9zYXZlLnN2Zyc7XG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gJy4uL2ltZy9jbG9zZS5zdmcnO1xuaW1wb3J0IHsgZ2V0QWxsIH0gZnJvbSAnLi9saXN0LmpzJztcbmltcG9ydCB7IFxuICAgIGRpc3BsYXlNb2RlLFxuICAgIHN3aXRjaFRvRGFyayxcbiAgICBjcmVhdGVCbHVyQmFja2Ryb3AgfSBmcm9tICcuL3BhZ2UuanMnO1xuaW1wb3J0IHsgYWRkRWRpdEZvcm1MaXN0ZW5lcnMgfSBmcm9tICcuL2xpc3Rlbic7XG5cbmNvbnN0IHJlbmRlckVkaXRGb3JtID0gKGluZGV4KSA9PiB7XG5cbiAgICBjb25zdCBsaXN0ID0gZ2V0QWxsKCk7XG4gICAgY29uc3QgaXRlbSA9IGxpc3RbaW5kZXhdO1xuXG4gICAgY3JlYXRlQmx1ckJhY2tkcm9wKCk7XG5cbiAgICAvLyBjcmVhdGUgZWRpdCBmb3JtIGNvbnRhaW5lcjpcbiAgICBjb25zdCBlZGl0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVkaXRGb3JtLmNsYXNzTGlzdC5hZGQoJ2VkaXQtZm9ybScpO1xuXG4gICAgLy8gYWRkIGVkaXQgZm9ybSB0byB0aGUgRE9NOlxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoZWRpdEZvcm0pO1xuXG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgZm9ybSBpdHNlbGY6XG4gICAgICAgIGNvbnN0IGZvcm1JdHNlbGYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIGZvcm1JdHNlbGYuY2xhc3NMaXN0LmFkZCgnZWRpdC1mb3JtLWl0c2VsZicpO1xuICAgICAgICBmb3JtSXRzZWxmLmRhdGFzZXQuaWQgPSBpbmRleDtcbiAgICAgICAgZm9ybUl0c2VsZi5zZXRBdHRyaWJ1dGUoJ21ldGhvZCcsICcnKTtcbiAgICAgICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQoZm9ybUl0c2VsZik7XG5cbiAgICAgICAgICAgIC8vIGNyZWF0ZSB0aGUgZm9ybSB0aXRsZTpcbiAgICAgICAgICAgIGNvbnN0IGZvcm1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZm9ybVRpdGxlLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tdGl0bGUnKTtcbiAgICAgICAgICAgIGZvcm1JdHNlbGYuYXBwZW5kQ2hpbGQoZm9ybVRpdGxlKTtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1UaXRsZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGZvcm1UaXRsZVRleHQuY2xhc3NMaXN0LmFkZCgnZm9ybS10aXRsZS10ZXh0JywgJ2VkaXQtZm9ybS10aXRsZS10ZXh0Jyk7XG4gICAgICAgICAgICBmb3JtVGl0bGVUZXh0LnRleHRDb250ZW50ID0gYGVkaXRpbmcgJyR7aXRlbS50aXRsZX0nYDtcbiAgICAgICAgICAgIGZvcm1UaXRsZS5hcHBlbmRDaGlsZChmb3JtVGl0bGVUZXh0KTtcblxuICAgICAgICAgICAgLy8gY3JlYXRlIGFuICdYJyBidXR0b24gdG8gY2xvc2Ugb3V0IG9mIHRoZSBmb3JtOlxuICAgICAgICAgICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNsb3NlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlLWJ1dHRvbicsICdlZGl0LWNsb3NlLWJ1dHRvbicpO1xuICAgICAgICAgICAgZm9ybVRpdGxlLmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcbiAgICAgICAgICAgIGNvbnN0IGNsb3NlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgY2xvc2VJY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgQ2xvc2VJY29uKTtcbiAgICAgICAgICAgIGNsb3NlQnV0dG9uLmFwcGVuZENoaWxkKGNsb3NlSWNvbik7XG5cbiAgICAgICAgICAgIC8vIGNyZWF0ZSB0aGUgZm9ybSBlbGVtZW50czpcblxuICAgICAgICAgICAgICAgIC8vIHRpdGxlIHNlY3Rpb246XG4gICAgICAgICAgICAgICAgY29uc3QgdGl0bGVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgdGl0bGVTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZWxlbWVudCcsICd0aXRsZS1zZWN0aW9uJywgJ2VkaXQtdGl0bGUtc2VjdGlvbicpO1xuICAgICAgICAgICAgICAgIGZvcm1JdHNlbGYuYXBwZW5kQ2hpbGQodGl0bGVTZWN0aW9uKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyB0aXRsZSBsYWJlbDpcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndGl0bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9ICd0aXRsZTonO1xuICAgICAgICAgICAgICAgICAgICB0aXRsZVNlY3Rpb24uYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gdGl0bGUgaW5wdXQ6XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZCgndGl0bGUtaW5wdXQnLCAnZWRpdC10aXRsZS1pbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICd0aXRsZScpO1xuICAgICAgICAgICAgICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAndGl0bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVJbnB1dC52YWx1ZSA9IGl0ZW0udGl0bGU7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB0aXRsZVNlY3Rpb24uYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG5cblxuICAgICAgICAgICAgICAgIC8vIGRlc2NyaXB0aW9uIHNlY3Rpb246XG4gICAgICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb25TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25TZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZWxlbWVudCcsICdkZXNjcmlwdGlvbi1zZWN0aW9uJywgJ2VkaXQtZGVzY3JpcHRpb24tc2VjdGlvbicpO1xuICAgICAgICAgICAgICAgIGZvcm1JdHNlbGYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25TZWN0aW9uKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBkZXNjcmlwdGlvbiBsYWJlbDpcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZGVzY3JpcHRpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9ICdkZXNjcmlwdGlvbiAob3B0aW9uYWwpOic7XG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uU2VjdGlvbi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBkZXNjcmlwdGlvbiBpbnB1dDpcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uSW5wdXQuY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24taW5wdXQnLCAnZWRpdC1kZXNjcmlwdGlvbi1pbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdkZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVzY3JpcHRpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IGl0ZW0uZGVzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uU2VjdGlvbi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcblxuXG4gICAgICAgICAgICAgICAgLy8gcHJpb3JpdHkgZmllbGRzZXQ6XG4gICAgICAgICAgICAgICAgY29uc3QgZmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpO1xuICAgICAgICAgICAgICAgIGZpZWxkc2V0LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LXNlY3Rpb24nLCAnZWRpdC1wcmlvcml0eS1zZWN0aW9uJyk7XG4gICAgICAgICAgICAgICAgZm9ybUl0c2VsZi5hcHBlbmRDaGlsZChmaWVsZHNldCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gcHJpb3JpdHkgbGFiZWw6XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlMYWJlbC5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1sYWJlbCcsICdlZGl0LXByaW9yaXR5LWxhYmVsJyk7XG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAncHJpb3JpdHk6JztcbiAgICAgICAgICAgICAgICAgICAgZmllbGRzZXQuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gJ05PVycgcHJpb3JpdHkgcmFkaW8gb3B0aW9uOlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBub3dPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgbm93T3B0aW9uLmNsYXNzTGlzdC5hZGQoJ3JhZGlvLW9wdGlvbicsICdub3ctb3B0aW9uJywgJ2VkaXQtbm93LW9wdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChub3dPcHRpb24pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBOT1cgaW5wdXQgJiBsYWJlbDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vd0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vd0lucHV0LmNsYXNzTGlzdC5hZGQoJ3JhZGlvLWlucHV0JywgJ2VkaXQtcmFkaW8taW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnByaW9yaXR5ID09PSAnbm93Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vd09wdGlvbi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZC1wcmlvcml0eScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbm93SW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3dJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25vdycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm93SW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3ByaW9yaXR5Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3dJbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ25vdycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm93T3B0aW9uLmFwcGVuZENoaWxkKG5vd0lucHV0KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm93TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm93TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbm93Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3dMYWJlbC50ZXh0Q29udGVudCA9ICdub3cnO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm93T3B0aW9uLmFwcGVuZENoaWxkKG5vd0xhYmVsKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyAnTEFURVInIHByaW9yaXR5IHJhZGlvIG9wdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGF0ZXJPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgbGF0ZXJPcHRpb24uY2xhc3NMaXN0LmFkZCgncmFkaW8tb3B0aW9uJywgJ2xhdGVyLW9wdGlvbicsICdlZGl0LWxhdGVyLW9wdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChsYXRlck9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTEFURVIgaW5wdXQgJiBsYWJlbDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhdGVySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF0ZXJJbnB1dC5jbGFzc0xpc3QuYWRkKCdyYWRpby1pbnB1dCcsICdlZGl0LXJhZGlvLWlucHV0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5wcmlvcml0eSA9PT0gJ2xhdGVyJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhdGVyT3B0aW9uLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkLXByaW9yaXR5Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXRlcklucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF0ZXJJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xhdGVyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXRlcklucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcmlvcml0eScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF0ZXJJbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2xhdGVyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXRlck9wdGlvbi5hcHBlbmRDaGlsZChsYXRlcklucHV0KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGF0ZXJMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXRlckxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2xhdGVyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXRlckxhYmVsLnRleHRDb250ZW50ID0gJ2xhdGVyJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhdGVyT3B0aW9uLmFwcGVuZENoaWxkKGxhdGVyTGFiZWwpO1xuXG4gICAgICAgICAgICAvLyBjcmVhdGUgYSBuZXcgJ2FkZCcgYnV0dG9uIGF0IHRoZSBib3R0b20gb2YgdGhlIGZvcm06XG4gICAgICAgICAgICBjb25zdCBmb3JtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBmb3JtQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdC1idXR0b24nLCAnZWRpdC1zdWJtaXQtYnV0dG9uJyk7XG4gICAgICAgICAgICBmb3JtQnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgICAgICAgICAgIGZvcm1JdHNlbGYuYXBwZW5kQ2hpbGQoZm9ybUJ1dHRvbik7XG4gICAgICAgICAgICBjb25zdCBmb3JtQnV0dG9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgZm9ybUJ1dHRvbkljb24uc2V0QXR0cmlidXRlKCdzcmMnLCBTYXZlSWNvbik7XG4gICAgICAgICAgICBmb3JtQnV0dG9uLmFwcGVuZENoaWxkKGZvcm1CdXR0b25JY29uKTtcbiAgICBcbiAgICAvLyByZW5kZXIgdGhlIGVkaXQgZm9ybSBpbiBkYXJrIG1vZGUgaWYgaXQncyB0dXJuZWQgb246XG4gICAgaWYgKGRpc3BsYXlNb2RlID09PSAnZGFyaycpIHtcbiAgICAgICAgc3dpdGNoVG9EYXJrKCk7XG4gICAgfVxuXG4gICAgYWRkRWRpdEZvcm1MaXN0ZW5lcnMoKTtcblxufVxuXG5leHBvcnQgeyByZW5kZXJFZGl0Rm9ybSB9IiwiaW1wb3J0ICcuLi9zdHlsZS5jc3MnO1xuXG5pbXBvcnQgeyByZXRyaWV2ZVN0b3JlZExpc3QgfSBmcm9tICcuL2xpc3QuanMnO1xuaW1wb3J0IHsgXG4gICAgcmVuZGVyUGFnZSwgXG4gICAgcmVuZGVyU3RvcmVkVmlldywgXG4gICAgcmV0cmlldmVTdG9yZWREaXNwbGF5TW9kZSB9IGZyb20gJy4vcGFnZS5qcyc7XG5pbXBvcnQgeyBhZGRJbml0aWFsTGlzdGVuZXJzIH0gZnJvbSAnLi9saXN0ZW4uanMnO1xuaW1wb3J0IHsgc2V0Qm9keSB9IGZyb20gJy4vYm9keSc7XG5cbnJlbmRlclBhZ2UoKTtcblxuLy8gc2V0Qm9keSgpO1xuXG4vLyAvLyBzZXQgdGhlIGJvZHkgZXZlcnkgc2Vjb25kOlxuLy8gc2V0VGltZW91dChzZXRCb2R5LCAxMDAwKTtcblxuYWRkSW5pdGlhbExpc3RlbmVycygpO1xuXG5yZXRyaWV2ZVN0b3JlZExpc3QoKTtcblxucmVuZGVyU3RvcmVkVmlldygpO1xuXG5yZXRyaWV2ZVN0b3JlZERpc3BsYXlNb2RlKCk7IiwiLy8gY3JlYXRlIGVtcHR5IHRvZG9MaXN0IGFycmF5OlxubGV0IHRvZG9MaXN0ID0gW107XG5cbi8vIHJldHJpZXZlIHRoZSB0b2RvTGlzdCBhcnJheSBmcm9tIGxvY2FsU3RvcmFnZTpcbmNvbnN0IHJldHJpZXZlU3RvcmVkTGlzdCA9ICgpID0+IHtcblxuICAgIC8vIGZpcnN0LCBjaGVjayBpZiB0by1kbyBhcnJheSBpcyBzdG9yZWQgaW4gbG9jYWxTdG9yYWdlOlxuICAgIGNvbnN0IHN0b3JlZFRvZG9MaXN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9MaXN0Jyk7XG4gICAgLy8gaWYgdGhlcmUgaXMgYSBzdG9yZWRUb2RvTGlzdCwgZ2V0IGl0IGFuZCBzYXZlIGl0IHRvIHJldHJpZXZlZExpc3Q6XG4gICAgaWYgKHN0b3JlZFRvZG9MaXN0KSB7XG4gICAgICAgIGNvbnN0IHJldHJpZXZlZExpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvTGlzdCcpKTtcbiAgICAgICAgXG4gICAgICAgIC8vIHNldCB0aGUgbG9jYWwgdG9kb0xpc3QgYXJyYXkgdG8gdGhlIGxpc3QgcmV0cmlldmVkIGZyb20gc3RvcmFnZTpcbiAgICAgICAgdG9kb0xpc3QgPSByZXRyaWV2ZWRMaXN0O1xuICAgIH1cbn1cblxuLy8gc2F2ZSB0aGUgbGlzdCB0byBsb2NhbFN0b3JhZ2U6XG5jb25zdCBzYXZlVG9TdG9yYWdlID0gKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvTGlzdCcsIEpTT04uc3RyaW5naWZ5KHRvZG9MaXN0KSk7XG59XG5cbi8vIFRvZG8gb2JqZWN0IGNvbnN0cnVjdG9yOlxuZnVuY3Rpb24gVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBjb21wbGV0ZWQpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGNvbXBsZXRlZDtcbn07XG5cbi8vIG1ldGhvZCB0byBjcmVhdGUgYSBuZXcgVG9kbyBvYmplY3QgYW5kIGFkZCBpdCB0byB0aGUgdG9kb0xpc3QgYXJyYXk6XG5jb25zdCBjcmVhdGVUb2RvID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGNvbXBsZXRlZCkgPT4ge1xuICAgIGNvbnN0IG5ld1RvZG8gPSBuZXcgVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBjb21wbGV0ZWQpO1xuICAgIHRvZG9MaXN0LnB1c2gobmV3VG9kbyk7XG4gICAgc2F2ZVRvU3RvcmFnZSgpO1xufTtcblxuLy8gZ2V0IHRoZSBjb21wbGV0ZSBjdXJyZW50IGxpc3Q6XG5jb25zdCBnZXRBbGwgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRvZG9MaXN0O1xufTtcblxuLy8gZ2V0IHRoZSBpdGVtcyB3aXRoICdub3cnIHByaW9yaXR5OlxuY29uc3QgZ2V0Tm93ID0gKCkgPT4ge1xuICAgIGNvbnN0IG5vd0l0ZW1zID0gdG9kb0xpc3QuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoaXRlbS5wcmlvcml0eSA9PT0gJ25vdycpIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG5vd0l0ZW1zO1xufTtcblxuLy8gZ2V0IHRoZSBpdGVtcyB3aXRoICdsYXRlcicgcHJpb3JpdHk6XG5jb25zdCBnZXRMYXRlciA9ICgpID0+IHtcbiAgICBjb25zdCBsYXRlckl0ZW1zID0gdG9kb0xpc3QuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoaXRlbS5wcmlvcml0eSA9PT0gJ2xhdGVyJykge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbGF0ZXJJdGVtcztcbn07XG5cbmNvbnN0IGdldERlc2NyaXB0aW9uID0gKGlkKSA9PiB7XG4gICAgcmV0dXJuIHRvZG9MaXN0W2lkXS5kZXNjcmlwdGlvbjtcbn07XG5cbmNvbnN0IGdldENvbXBsZXRlZCA9IChpZCkgPT4ge1xuICAgIHJldHVybiB0b2RvTGlzdFtpZF0uY29tcGxldGVkO1xufVxuXG4vLyByZW1vdmUgYSBUb2RvIG9iamVjdCBmcm9tIHRoZSB0b2RvTGlzdCBhcnJheSBieSB1c2luZyBpdHMgRE9NIGlkIGFzIGl0cyBhcnJheSBpbmRleDpcbmNvbnN0IGRlbGV0ZVRvZG8gPSAoaWQpID0+IHtcbiAgICB0b2RvTGlzdC5zcGxpY2UoaWQsIDEpO1xuICAgIHNhdmVUb1N0b3JhZ2UoKTtcbn1cblxuLy8gZWRpdCBhIHByb3BlcnR5IG9mIGEgVG9kbyBvYmplY3Q6XG5jb25zdCBlZGl0VG9kbyA9IChpZCwgcHJvcGVydHksIG5ld1ZhbHVlKSA9PiB7XG4gICAgdG9kb0xpc3RbaWRdW3Byb3BlcnR5XSA9IG5ld1ZhbHVlO1xuICAgIHNhdmVUb1N0b3JhZ2UoKTtcbn07XG5cbmV4cG9ydCB7IFxuICAgIGNyZWF0ZVRvZG8sIFxuICAgIGdldEFsbCwgXG4gICAgZ2V0Tm93LCBcbiAgICBnZXRMYXRlciwgXG4gICAgZ2V0RGVzY3JpcHRpb24sIFxuICAgIGdldENvbXBsZXRlZCwgXG4gICAgZGVsZXRlVG9kbywgXG4gICAgZWRpdFRvZG8sXG4gICAgcmV0cmlldmVTdG9yZWRMaXN0LFxuICAgIHNhdmVUb1N0b3JhZ2Vcbn0iLCJpbXBvcnQgeyBzZXRCb2R5IH0gZnJvbSAnLi9ib2R5LmpzJztcbmltcG9ydCB7IFxuICAgIHJlbmRlck5vdywgXG4gICAgcmVuZGVyTGF0ZXIsIFxuICAgIHJlbmRlckFsbCwgXG4gICAgZXhwYW5kSXRlbSxcbiAgICBzaHJpbmtJdGVtLCBcbiAgICBnZXRDdXJyZW50VmlldyxcbiAgICBjaGVja0NoZWNrYm94LFxuICAgIHVuY2hlY2tDaGVja2JveCxcbiAgICByZW5kZXJBZGRGb3JtLFxuICAgIHN0eWxlUmFkaW9PcHRpb24sXG4gICAgc3VibWl0QWRkRm9ybSxcbiAgICByZW1vdmVBZGRGb3JtLCBcbiAgICBzd2l0Y2hUb0xpZ2h0LFxuICAgIHN3aXRjaFRvRGFyayxcbiAgICBzaG93RWRpdFBvcHVwLFxuICAgIHN1Ym1pdEVkaXRGb3JtLFxuICAgIHJlbW92ZUVkaXRGb3JtIH0gZnJvbSAnLi9wYWdlLmpzJztcbmltcG9ydCB7IGRlbGV0ZVRvZG8sIGVkaXRUb2RvLCBnZXRDb21wbGV0ZWQgfSBmcm9tICcuL2xpc3QuanMnO1xuXG4vLyBldmVudCBsaXN0ZW5lcnMgdG8gYWRkIHdoZW4gdGhlIHBhZ2UgZmlyc3QgbG9hZHM6XG5jb25zdCBhZGRJbml0aWFsTGlzdGVuZXJzID0gKCkgPT4ge1xuXG4gICAgLy8gLy8gc2V0IGluaXRpYWwgYm9keSBoZWlnaHQgJiB3aWR0aC4uXG4gICAgLy8gc2V0Qm9keSgpO1xuXG4gICAgLy8gLy8gdGhlbiBhZGp1c3QgYm9keSBoZWlnaHQgJiB3aWR0aCBpZiBuZWVkZWQgd2hlbmV2ZXIgdGhlIHdpbmRvdyBpcyByZXNpemVkLCBvciB3aGVuIHRoZSBzY3JlZW4gb3JpZW50YXRpb24gY2hhbmdlczpcbiAgICAvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc2V0Qm9keSk7XG4gICAgLy8gLy8gaWYgYnJvd3NlciBpcyBub3Qgc2FmYXJpOlxuICAgIC8vIGlmICghKG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIlNhZmFyaVwiKSAhPSAtMSApKSB7XG4gICAgLy8gICAgIHNjcmVlbi5vcmllbnRhdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZXRCb2R5KTtcbiAgICAvLyB9XG4gICAgXG4gICAgLy8gYWRkIGNsaWNrIGxpc3RlbmVycyB0byBuYXYgYnV0dG9ucyB0byB0cmlnZ2VyIHJlbmRlciBmdW5jdGlvbnM6XG4gICAgY29uc3Qgbm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdycpO1xuICAgIG5vdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlck5vdyk7XG5cbiAgICBjb25zdCBsYXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYXRlcicpO1xuICAgIGxhdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVuZGVyTGF0ZXIpO1xuXG4gICAgY29uc3QgYWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbCcpO1xuICAgIGFsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlckFsbCk7XG5cbiAgICAvLyBhZGQgbGlzdGVuZXJzIHRvIGxpZ2h0L2RhcmsgbW9kZSBkaXNwbGF5IGljb25zOlxuICAgIGNvbnN0IGxpZ2h0SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saWdodC1tb2RlJyk7XG4gICAgbGlnaHRJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3dpdGNoVG9MaWdodCk7XG5cbiAgICBjb25zdCBkYXJrSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXJrLW1vZGUnKTtcbiAgICBkYXJrSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN3aXRjaFRvRGFyayk7XG5cbn1cblxuY29uc3QgYWRkQWRkTGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1pdGVtLWJ1dHRvbicpO1xuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlckFkZEZvcm0pO1xufVxuXG5jb25zdCBhZGRGb3JtTGlzdGVuZXJzID0gKCkgPT4ge1xuXG4gICAgLy8gYWRkIGNsb3NlIGJ1dHRvbiBsaXN0ZW5lcjpcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1idXR0b24nKTtcbiAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZUFkZEZvcm0pO1xuXG4gICAgLy8gYWRkIHJhZGlvIGlucHV0IGxpc3RlbmVyczpcbiAgICBjb25zdCByYWRpb0lucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yYWRpby1pbnB1dCcpO1xuICAgIHJhZGlvSW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgICAgICAgc3R5bGVSYWRpb09wdGlvbihlKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBhZGQgc3VibWl0IGxpc3RlbmVyOlxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWZvcm0taXRzZWxmJyk7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHN1Ym1pdEFkZEZvcm0oKTtcbiAgICB9KTtcbn1cblxuY29uc3QgYWRkRWRpdEZvcm1MaXN0ZW5lcnMgPSAoKSA9PiB7XG5cbiAgICAvLyBhZGQgY2xvc2UgYnV0dG9uIGxpc3RlbmVyOlxuICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtY2xvc2UtYnV0dG9uJyk7XG4gICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVFZGl0Rm9ybSk7XG5cbiAgICAvLyBhZGQgcmFkaW8gaW5wdXQgbGlzdGVuZXJzOlxuICAgIGNvbnN0IHJhZGlvSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJhZGlvLWlucHV0Jyk7XG4gICAgcmFkaW9JbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICAgICAgICBzdHlsZVJhZGlvT3B0aW9uKGUpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIGFkZCBzdWJtaXQgbGlzdGVuZXI6XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWZvcm0taXRzZWxmJyk7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHN1Ym1pdEVkaXRGb3JtKGUpO1xuICAgIH0pO1xufVxuXG4vLyBldmVudCBsaXN0ZW5lcnMgdG8gb3BlbiBleHBhbmRlZCB2aWV3IG9mIGl0ZW1zOlxuY29uc3QgYWRkRXhwYW5kTGlzdGVuZXJzID0gKCkgPT4ge1xuXG4gICAgLy8gYWRkIGxpc3RlbmVycyB0byBhbGwgaXRlbSB0aXRsZSB0ZXh0OlxuICAgIGNvbnN0IGl0ZW1UaXRsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXhwYW5kYWJsZS10aXRsZScpO1xuICAgIGl0ZW1UaXRsZXMuZm9yRWFjaCh0aXRsZSA9PiB7XG4gICAgICAgIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXhwYW5kSXRlbSk7XG4gICAgfSk7XG5cbiAgICAvLyBhZGQgbGlzdGVuZXJzIHRvIGFsbCBleHBhbmQgaWNvbnM6XG4gICAgY29uc3QgZXhwYW5kSWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYuZXhwYW5kJyk7XG4gICAgZXhwYW5kSWNvbnMuZm9yRWFjaChpY29uID0+IHtcbiAgICAgICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV4cGFuZEl0ZW0pO1xuICAgIH0pO1xufVxuXG4vLyBjaGVja2JveCBsaXN0ZW5lciB0byBhZGQgdG8gZWFjaCBpdGVtIGFzIGl0IGlzIHJlbmRlcmVkOlxuY29uc3QgYWRkQ2hlY2tib3hMaXN0ZW5lciA9IChpZCkgPT4ge1xuXG4gICAgY29uc3QgcGFyZW50SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPScke2lkfSdgKTtcbiAgICBjb25zdCBpdGVtQ2hlY2tib3ggPSBwYXJlbnRJdGVtLmZpcnN0Q2hpbGQ7XG4gICAgaXRlbUNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG4gICAgICAgIC8vIGlmIHRvZG8gaXMgbm90IGNvbXBsZXRlZCwgbWFyayBpdCBhcyBjb21wbGV0ZWQ6XG4gICAgICAgIGNvbnN0IGNvbXBsZXRlZFN0YXR1cyA9IGdldENvbXBsZXRlZChpZCk7XG4gICAgICAgIGlmIChjb21wbGV0ZWRTdGF0dXMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBlZGl0VG9kbyhpZCwgJ2NvbXBsZXRlZCcsIHRydWUpO1xuICAgICAgICAgICAgLy8gdGhlbiBjaGFuZ2UgdGhlIERPTSBlbGVtZW50J3MgY2xhc3MgJiBzdHlsaW5nIHNvIHRoZSB2aWV3IGRvZXNuJ3QgaGF2ZSB0byBiZSByZS1yZW5kZXJlZDpcbiAgICAgICAgICAgIHBhcmVudEl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaW5jb21wbGV0ZS1pdGVtJyk7XG4gICAgICAgICAgICBwYXJlbnRJdGVtLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZC1pdGVtJyk7XG4gICAgICAgICAgICAvLyBhbmQgY2hlY2sgdGhlIGJveDpcbiAgICAgICAgICAgIGNoZWNrQ2hlY2tib3goaXRlbUNoZWNrYm94KTtcblxuICAgICAgICAvLyBpZiB0b2RvIGlzIGNvbXBsZXRlZCwgbWFyayBpdCBhcyBpbmNvbXBsZXRlOlxuICAgICAgICB9IGVsc2UgaWYgKGNvbXBsZXRlZFN0YXR1cyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZWRpdFRvZG8oaWQsICdjb21wbGV0ZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICBwYXJlbnRJdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXBsZXRlZC1pdGVtJyk7XG4gICAgICAgICAgICBwYXJlbnRJdGVtLmNsYXNzTGlzdC5hZGQoJ2luY29tcGxldGUtaXRlbScpO1xuICAgICAgICAgICAgLy8gYW5kIHVuY2hlY2sgdGhlIGJveDpcbiAgICAgICAgICAgIHVuY2hlY2tDaGVja2JveChpdGVtQ2hlY2tib3gpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbi8vIGVkaXQgaWNvbiBsaXN0ZW5lciB0byBhZGQgdG8gZWFjaCBpdGVtIGFzIGl0IGlzIHJlbmRlcmVkOlxuY29uc3QgYWRkRWRpdEljb25MaXN0ZW5lciA9IChpZCkgPT4ge1xuICAgIGNvbnN0IGl0ZW1Ub0VkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD0nJHtpZH0nYCk7XG4gICAgY29uc3QgZWRpdEljb24gPSBpdGVtVG9FZGl0LmNoaWxkcmVuWzJdLmZpcnN0Q2hpbGQ7XG4gICAgZWRpdEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93RWRpdFBvcHVwKTtcbn1cblxuY29uc3QgYWRkRGVsZXRlTGlzdGVuZXJUb0l0ZW1XaXRob3V0RGVzY3JpcHRpb24gPSAoZGVsZXRlSWNvbiwgaWQpID0+IHtcbiAgICBkZWxldGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAvLyBkZWxldGUgaXRlbTpcbiAgICAgICAgZGVsZXRlVG9kbyhpZCk7XG4gICAgICAgIC8vIHRoZW4gY2hlY2sgdGhlIHVzZXIncyBjdXJyZW50IHBhZ2UgYmVmb3JlIHJlLXJlbmRlcmluZzpcbiAgICAgICAgY29uc3QgY3VycmVudFZpZXcgPSBnZXRDdXJyZW50VmlldygpO1xuICAgICAgICBpZiAoY3VycmVudFZpZXcgPT09ICdub3cnKSB7XG4gICAgICAgICAgICByZW5kZXJOb3coKTtcbiAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50VmlldyA9PT0gJ2xhdGVyJykge1xuICAgICAgICAgICAgcmVuZGVyTGF0ZXIoKTtcbiAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50VmlldyA9PT0gJ2FsbCcpIHtcbiAgICAgICAgICAgIHJlbmRlckFsbCgpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbi8vIGV2ZW50IGxpc3RlbmVycyAoZm9yIGRlbGV0ZSBhbmQgc2hyaW5rIGFjdGlvbnMpIHRvIGFkZCB0byBhbiBpdGVtIHdoZW4gaXQgaXMgZXhwYW5kZWQ6XG5jb25zdCBhZGRMaXN0ZW5lcnNUb0V4cGFuZGVkSXRlbSA9IChpZCkgPT4ge1xuXG4gICAgLy8gYWRkIGxpc3RlbmVyIHRvIGRlbGV0ZSBpY29uOlxuICAgIGNvbnN0IHBhcmVudEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD0nJHtpZH0nYCk7XG4gICAgY29uc3QgZGVsZXRlSWNvbiA9IHBhcmVudEl0ZW0ubGFzdENoaWxkO1xuICAgIGRlbGV0ZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIC8vIGRlbGV0ZSBpdGVtOlxuICAgICAgICBkZWxldGVUb2RvKGlkKTtcbiAgICAgICAgLy8gdGhlbiBjaGVjayB0aGUgdXNlcidzIGN1cnJlbnQgcGFnZSBiZWZvcmUgcmUtcmVuZGVyaW5nOlxuICAgICAgICBjb25zdCBjdXJyZW50VmlldyA9IGdldEN1cnJlbnRWaWV3KCk7XG4gICAgICAgIGlmIChjdXJyZW50VmlldyA9PT0gJ25vdycpIHtcbiAgICAgICAgICAgIHJlbmRlck5vdygpO1xuICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRWaWV3ID09PSAnbGF0ZXInKSB7XG4gICAgICAgICAgICByZW5kZXJMYXRlcigpO1xuICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRWaWV3ID09PSAnYWxsJykge1xuICAgICAgICAgICAgcmVuZGVyQWxsKCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGFkZCBsaXN0ZW5lciB0byBzaHJpbmsgaWNvbjpcbiAgICBjb25zdCBpY29uID0gcGFyZW50SXRlbS5jaGlsZHJlblszXTtcbiAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgc2hyaW5rSXRlbShlKTtcbiAgICB9KTtcbn1cblxuLy8gcmVtb3ZlIGNsaWNrIGxpc3RlbmVycyBmcm9tIGFuIGV4cGFuZGVkIGl0ZW0gYXMgdGhleSBhcmUgbm8gbG9uZ2VyIG5lY2Vzc2FyeTpcbmNvbnN0IHJlbW92ZUxpc3RlbmVyc0Zyb21FeHBhbmRlZEl0ZW0gPSAoaWQpID0+IHtcbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9JyR7aWR9J2ApO1xuICAgIGNvbnN0IGl0ZW1UaXRsZSA9IGl0ZW0uY2hpbGRyZW5bMV07XG4gICAgaXRlbVRpdGxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXhwYW5kSXRlbSk7XG4gICAgY29uc3QgaXRlbUljb24gPSBpdGVtLmNoaWxkcmVuWzJdO1xuICAgIGl0ZW1JY29uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXhwYW5kSXRlbSk7XG59XG5cbi8vIGZ1bmN0aW9uIHRvIGF0dGFjaCBuZXcgZXhwYW5kIGNsaWNrIGxpc3RlbmVyIG9uIGl0ZW0gZWxlbWVudHMgLS0gdGhpcyBpcyBuZWNlc3NhcnkgYmVjYXVzZSB0aGUgbGlzdGVuZXJzIGFyZSByZW1vdmVkIHdoZW4gdGhlIGl0ZW0gZXhwYW5kcy5cbmNvbnN0IHJlcGxhY2VFeHBhbmRMaXN0ZW5lciA9IChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV4cGFuZEl0ZW0pO1xufVxuXG5leHBvcnQgeyBcbiAgICBhZGRJbml0aWFsTGlzdGVuZXJzLCBcbiAgICBhZGRFeHBhbmRMaXN0ZW5lcnMsIFxuICAgIGFkZExpc3RlbmVyc1RvRXhwYW5kZWRJdGVtLFxuICAgIHJlbW92ZUxpc3RlbmVyc0Zyb21FeHBhbmRlZEl0ZW0sXG4gICAgYWRkQ2hlY2tib3hMaXN0ZW5lcixcbiAgICByZXBsYWNlRXhwYW5kTGlzdGVuZXIsXG4gICAgYWRkQWRkTGlzdGVuZXIsXG4gICAgYWRkRWRpdEZvcm1MaXN0ZW5lcnMsXG4gICAgYWRkRm9ybUxpc3RlbmVycyxcbiAgICBhZGREZWxldGVMaXN0ZW5lclRvSXRlbVdpdGhvdXREZXNjcmlwdGlvbixcbiAgICBhZGRFZGl0SWNvbkxpc3RlbmVyXG59IiwiaW1wb3J0IHsgXG4gICAgZ2V0QWxsLCBcbiAgICBnZXROb3csIFxuICAgIGdldExhdGVyLCBcbiAgICBnZXREZXNjcmlwdGlvbixcbiAgICBjcmVhdGVUb2RvLCBcbiAgICBlZGl0VG9kb30gZnJvbSAnLi9saXN0LmpzJztcblxuaW1wb3J0IHsgXG4gICAgYWRkRXhwYW5kTGlzdGVuZXJzLCBcbiAgICBhZGRMaXN0ZW5lcnNUb0V4cGFuZGVkSXRlbSxcbiAgICByZW1vdmVMaXN0ZW5lcnNGcm9tRXhwYW5kZWRJdGVtLCBcbiAgICBhZGRDaGVja2JveExpc3RlbmVyLFxuICAgIHJlcGxhY2VFeHBhbmRMaXN0ZW5lcixcbiAgICBhZGRBZGRMaXN0ZW5lcixcbiAgICBhZGRGb3JtTGlzdGVuZXJzLCBcbiAgICBhZGREZWxldGVMaXN0ZW5lclRvSXRlbVdpdGhvdXREZXNjcmlwdGlvbixcbiAgICBhZGRFZGl0SWNvbkxpc3RlbmVyfSBmcm9tICcuL2xpc3Rlbi5qcyc7XG5cbmltcG9ydCB7IHJlbmRlckVkaXRGb3JtIH0gZnJvbSAnLi9lZGl0LmpzJztcblxuaW1wb3J0IENoZWNrZWRDaGVja2JveEljb24gZnJvbSAnLi4vaW1nL2NoZWNrZWQtY2hlY2tib3guc3ZnJztcbmltcG9ydCBFbXB0eUNoZWNrYm94SWNvbiBmcm9tICcuLi9pbWcvZW1wdHktY2hlY2tib3guc3ZnJztcbmltcG9ydCBFeHBhbmRJY29uIGZyb20gJy4uL2ltZy9leHBhbmQuc3ZnJztcbmltcG9ydCBTaHJpbmtJY29uIGZyb20gJy4uL2ltZy9zaHJpbmsuc3ZnJztcbmltcG9ydCBEZWxldGVJY29uIGZyb20gJy4uL2ltZy9kZWxldGUuc3ZnJztcbmltcG9ydCBBZGRJY29uIGZyb20gJy4uL2ltZy9hZGQuc3ZnJztcbmltcG9ydCBDbG9zZUljb24gZnJvbSAnLi4vaW1nL2Nsb3NlLnN2Zyc7XG5pbXBvcnQgRmF2SWNvbiBmcm9tICcuLi9pbWcvZmF2aWNvbi5wbmcnO1xuaW1wb3J0IERhcmtJY29uIGZyb20gJy4uL2ltZy9kYXJrLnN2Zyc7XG5pbXBvcnQgTGlnaHRJY29uIGZyb20gJy4uL2ltZy9saWdodC5zdmcnO1xuaW1wb3J0IEVkaXRJY29uIGZyb20gJy4uL2ltZy9lZGl0LnN2Zyc7XG5cbi8vIGNyZWF0ZSBjdXJyZW50VmlldyB2YXJpYWJsZSB0byB0cmFjayB0aGUgY3VycmVudCBwYWdlIGRpc3BsYXk6XG5sZXQgY3VycmVudFZpZXc7XG5cbmNvbnN0IHVwZGF0ZUN1cnJlbnRWaWV3ID0gKHBhZ2UpID0+IHtcbiAgICBjdXJyZW50VmlldyA9IHBhZ2U7XG59XG5cbmNvbnN0IGdldEN1cnJlbnRWaWV3ID0gKCkgPT4ge1xuICAgIHJldHVybiBjdXJyZW50Vmlldztcbn1cblxuLy8gY3JlYXRlIGRpc3BsYXlNb2RlIHZhcmlhYmxlIHRvIHRyYWNrIGxpZ2h0L2RhcmsgbW9kZTpcbmxldCBkaXNwbGF5TW9kZTtcblxuLy8gZ2VuZXJhdGUgYmFzZSBwYWdlIHN0cnVjdHVyZTpcbmNvbnN0IHJlbmRlclBhZ2UgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZCcpO1xuXG4gICAgLy8gZGlzYWJsZSB6b29tIHRvIGVuc3VyZSBwYWdlIGxheW91dCBkb2Vzbid0IGJyZWFrIG9uIG1vYmlsZTpcbiAgICAvLyBjb25zdCBtZXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWV0YScpO1xuICAgIC8vIG1ldGEuc2V0QXR0cmlidXRlKCduYW1lJywgJ3ZpZXdwb3J0Jyk7XG4gICAgLy8gbWV0YS5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnLCAnd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCwgbWF4aW11bS1zY2FsZT0xLjAsIHVzZXItc2NhbGFibGU9bm8nKTtcbiAgICAvLyBoZWFkLmFwcGVuZENoaWxkKG1ldGEpO1xuXG4gICAgLy8gYWRkIGZhdmljb246XG4gICAgY29uc3QgZmF2SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICBmYXZJY29uLnNldEF0dHJpYnV0ZSgncmVsJywgJ2ljb24nKTtcbiAgICBmYXZJY29uLnNldEF0dHJpYnV0ZSgnaHJlZicsIEZhdkljb24pO1xuICAgIGhlYWQuYXBwZW5kQ2hpbGQoZmF2SWNvbik7XG4gICAgXG4gICAgLy8gY3JlYXRlIG91dGVyIHBhZ2Ugd3JhcHBlciA8ZGl2PjpcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCd3cmFwcGVyJyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcblxuICAgIC8vIGNyZWF0ZSBoZWFkZXI6XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgICAgIC8vIGNyZWF0ZSB0aXRsZSBiYXI6XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICAgICAgICAgIC8vIGNyZWF0ZSBsaWdodCBtb2RlIGljb246XG4gICAgICAgICAgICBjb25zdCBsaWdodE1vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGxpZ2h0TW9kZS5jbGFzc0xpc3QuYWRkKCdsaWdodC1tb2RlJyk7XG4gICAgICAgICAgICB0aXRsZS5hcHBlbmRDaGlsZChsaWdodE1vZGUpO1xuICAgICAgICAgICAgY29uc3QgbGlnaHRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBsaWdodEljb24uc2V0QXR0cmlidXRlKCdzcmMnLCBMaWdodEljb24pO1xuICAgICAgICAgICAgbGlnaHRNb2RlLmFwcGVuZENoaWxkKGxpZ2h0SWNvbik7XG5cbiAgICAgICAgICAgIC8vIGNyZWF0ZSB0aXRsZSB0ZXh0OlxuICAgICAgICAgICAgY29uc3QgdGl0bGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0aXRsZVRleHQuY2xhc3NMaXN0LmFkZCgndGl0bGUtdGV4dCcpO1xuICAgICAgICAgICAgdGl0bGVUZXh0LnRleHRDb250ZW50ID0gJ05PVyAvLyBMQVRFUiA6OiBhIHNpbXBsZSB0by1kbyBsaXN0JztcbiAgICAgICAgICAgIHRpdGxlLmFwcGVuZENoaWxkKHRpdGxlVGV4dCk7XG5cbiAgICAgICAgICAgIC8vIGNyZWF0ZSBkYXJrIG1vZGUgaWNvbjpcbiAgICAgICAgICAgIGNvbnN0IGRhcmtNb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkYXJrTW9kZS5jbGFzc0xpc3QuYWRkKCdkYXJrLW1vZGUnKTtcbiAgICAgICAgICAgIHRpdGxlLmFwcGVuZENoaWxkKGRhcmtNb2RlKTtcbiAgICAgICAgICAgIGNvbnN0IGRhcmtJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBkYXJrSWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsIERhcmtJY29uKTtcbiAgICAgICAgICAgIGRhcmtNb2RlLmFwcGVuZENoaWxkKGRhcmtJY29uKTtcblxuXG4gICAgICAgIC8vIGNyZWF0ZSBuYXYgYmFyOlxuICAgICAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbmF2LmNsYXNzTGlzdC5hZGQoJ25hdicpO1xuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KTsgXG5cbiAgICAgICAgICAgIC8vIGNyZWF0ZSBuYXYgYnV0dG9uczpcbiAgICAgICAgICAgIGNvbnN0IG5vdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbm93LmNsYXNzTGlzdC5hZGQoJ25vdycpO1xuICAgICAgICAgICAgbm93LmNsYXNzTGlzdC5hZGQoJ25hdi1idXR0b24nKTtcbiAgICAgICAgICAgIG5vdy50ZXh0Q29udGVudCA9ICdub3cnO1xuICAgICAgICAgICAgbmF2LmFwcGVuZENoaWxkKG5vdyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGxhdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBsYXRlci5jbGFzc0xpc3QuYWRkKCdsYXRlcicpO1xuICAgICAgICAgICAgbGF0ZXIuY2xhc3NMaXN0LmFkZCgnbmF2LWJ1dHRvbicpO1xuICAgICAgICAgICAgbGF0ZXIudGV4dENvbnRlbnQgPSAnbGF0ZXInO1xuICAgICAgICAgICAgbmF2LmFwcGVuZENoaWxkKGxhdGVyKTtcblxuICAgICAgICAgICAgY29uc3QgYWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBhbGwuY2xhc3NMaXN0LmFkZCgnYWxsJyk7XG4gICAgICAgICAgICBhbGwuY2xhc3NMaXN0LmFkZCgnbmF2LWJ1dHRvbicpO1xuICAgICAgICAgICAgYWxsLnRleHRDb250ZW50ID0gJ2FsbCc7XG4gICAgICAgICAgICBuYXYuYXBwZW5kQ2hpbGQoYWxsKTtcblxuICAgIC8vIGNyZWF0ZSBtYWluIHRvLWRvIGxpc3QgZGlzcGxheSBzZWN0aW9uOlxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKG1haW4pO1xuXG4gICAgLy8gY3JlYXRlIGZvb3RlcjpcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGZvb3Rlcik7XG4gICAgZm9vdGVyLnRleHRDb250ZW50ID0gJ2NvcHlyaWdodCDCqSAyMDIyIHwgc2VhbiBzdGVwaGVuIGJyaWFuJztcbn1cblxuLy8gcmVuZGVycyAnYWRkJyBidXR0b24gd2l0aGluIHRoZSBtYWluIGNvbnRlbnQgc2VjdGlvbjpcbmNvbnN0IHJlbmRlckFkZEJ1dHRvbiA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgICBjb25zdCBhZGRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkSXRlbS5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5ZWQtaXRlbScsJ2FkZC1pdGVtLWJ1dHRvbicpO1xuICAgIGNvbnN0IGFkZEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBhZGRJY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgQWRkSWNvbik7XG4gICAgYWRkSXRlbS5hcHBlbmRDaGlsZChhZGRJY29uKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGFkZEl0ZW0pO1xuXG4gICAgLy8gYWRkIGNsaWNrIGxpc3RlbmVyIHRvIGFkZCBidXR0b246XG4gICAgYWRkQWRkTGlzdGVuZXIoKTtcbn1cblxuY29uc3QgcmVuZGVyQWRkRm9ybSA9ICgpID0+IHtcblxuICAgIC8vIGNyZWF0ZSBhZGQgZm9ybSBjb250YWluZXI6XG4gICAgY29uc3QgYWRkRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZEZvcm0uY2xhc3NMaXN0LmFkZCgnYWRkLWZvcm0nKTtcblxuICAgIC8vIGluc2VydCBhZGQgZm9ybSBiZWZvcmUgYWRkIGJ1dHRvbjpcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGFkZEZvcm0pO1xuXG4gICAgY3JlYXRlQmx1ckJhY2tkcm9wKCk7XG5cbiAgICAgICAgLy8gY3JlYXRlIHRoZSBmb3JtIGl0c2VsZjpcbiAgICAgICAgY29uc3QgZm9ybUl0c2VsZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgZm9ybUl0c2VsZi5jbGFzc0xpc3QuYWRkKCdhZGQtZm9ybS1pdHNlbGYnKTtcbiAgICAgICAgZm9ybUl0c2VsZi5zZXRBdHRyaWJ1dGUoJ21ldGhvZCcsICcnKTtcbiAgICAgICAgYWRkRm9ybS5hcHBlbmRDaGlsZChmb3JtSXRzZWxmKTtcblxuICAgICAgICAgICAgLy8gY3JlYXRlIHRoZSBmb3JtIHRpdGxlOlxuICAgICAgICAgICAgY29uc3QgZm9ybVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBmb3JtVGl0bGUuY2xhc3NMaXN0LmFkZCgnZm9ybS10aXRsZScpO1xuICAgICAgICAgICAgZm9ybUl0c2VsZi5hcHBlbmRDaGlsZChmb3JtVGl0bGUpO1xuICAgICAgICAgICAgY29uc3QgZm9ybVRpdGxlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIGZvcm1UaXRsZVRleHQuY2xhc3NMaXN0LmFkZCgnZm9ybS10aXRsZS10ZXh0Jyk7XG4gICAgICAgICAgICBmb3JtVGl0bGVUZXh0LnRleHRDb250ZW50ID0gJ2FkZCBhIG5ldyB0YXNrJztcbiAgICAgICAgICAgIGZvcm1UaXRsZS5hcHBlbmRDaGlsZChmb3JtVGl0bGVUZXh0KTtcblxuICAgICAgICAgICAgLy8gY3JlYXRlIGFuICdYJyBidXR0b24gdG8gY2xvc2Ugb3V0IG9mIHRoZSBmb3JtOlxuICAgICAgICAgICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNsb3NlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlLWJ1dHRvbicpO1xuICAgICAgICAgICAgZm9ybVRpdGxlLmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcbiAgICAgICAgICAgIGNvbnN0IGNsb3NlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgY2xvc2VJY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgQ2xvc2VJY29uKTtcbiAgICAgICAgICAgIGNsb3NlQnV0dG9uLmFwcGVuZENoaWxkKGNsb3NlSWNvbik7XG5cbiAgICAgICAgICAgIC8vIGNyZWF0ZSB0aGUgZm9ybSBlbGVtZW50czpcblxuICAgICAgICAgICAgICAgIC8vIHRpdGxlIHNlY3Rpb246XG4gICAgICAgICAgICAgICAgY29uc3QgdGl0bGVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgdGl0bGVTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZWxlbWVudCcsICd0aXRsZS1zZWN0aW9uJyk7XG4gICAgICAgICAgICAgICAgZm9ybUl0c2VsZi5hcHBlbmRDaGlsZCh0aXRsZVNlY3Rpb24pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHRpdGxlIGxhYmVsOlxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0aXRsZScpO1xuICAgICAgICAgICAgICAgICAgICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gJ3RpdGxlOic7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlU2VjdGlvbi5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyB0aXRsZSBpbnB1dDpcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RpdGxlLWlucHV0Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3RpdGxlJyk7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICd0aXRsZScpO1xuICAgICAgICAgICAgICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnZXhhbXBsZTogZmVlZCB0aGUgZG9nJyk7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB0aXRsZVNlY3Rpb24uYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG5cblxuICAgICAgICAgICAgICAgIC8vIGRlc2NyaXB0aW9uIHNlY3Rpb246XG4gICAgICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb25TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25TZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZWxlbWVudCcsICdkZXNjcmlwdGlvbi1zZWN0aW9uJyk7XG4gICAgICAgICAgICAgICAgZm9ybUl0c2VsZi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblNlY3Rpb24pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGRlc2NyaXB0aW9uIGxhYmVsOlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbkxhYmVsLnRleHRDb250ZW50ID0gJ2Rlc2NyaXB0aW9uIChvcHRpb25hbCk6JztcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25TZWN0aW9uLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGRlc2NyaXB0aW9uIGlucHV0OlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Rlc2NyaXB0aW9uLWlucHV0Jyk7XG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdkZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblNlY3Rpb24uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XG5cblxuICAgICAgICAgICAgICAgIC8vIHByaW9yaXR5IGZpZWxkc2V0OlxuICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKTtcbiAgICAgICAgICAgICAgICBmaWVsZHNldC5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1zZWN0aW9uJyk7XG4gICAgICAgICAgICAgICAgZm9ybUl0c2VsZi5hcHBlbmRDaGlsZChmaWVsZHNldCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gcHJpb3JpdHkgbGFiZWw6XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlMYWJlbC5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1sYWJlbCcpO1xuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gJ3ByaW9yaXR5Oic7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vICdOT1cnIHByaW9yaXR5IHJhZGlvIG9wdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm93T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIG5vd09wdGlvbi5jbGFzc0xpc3QuYWRkKCdyYWRpby1vcHRpb24nLCAnbm93LW9wdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICBmaWVsZHNldC5hcHBlbmRDaGlsZChub3dPcHRpb24pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBOT1cgaW5wdXQgJiBsYWJlbDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vd0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vd0lucHV0LmNsYXNzTGlzdC5hZGQoJ3JhZGlvLWlucHV0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3dJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vd0lucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbm93Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3dJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJpb3JpdHknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vd0lucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnbm93Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3dPcHRpb24uYXBwZW5kQ2hpbGQobm93SW5wdXQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBub3dMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3dMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdub3cnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vd0xhYmVsLnRleHRDb250ZW50ID0gJ25vdyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3dPcHRpb24uYXBwZW5kQ2hpbGQobm93TGFiZWwpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vICdMQVRFUicgcHJpb3JpdHkgcmFkaW8gb3B0aW9uOlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXRlck9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBsYXRlck9wdGlvbi5jbGFzc0xpc3QuYWRkKCdyYWRpby1vcHRpb24nLCAnbGF0ZXItb3B0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkc2V0LmFwcGVuZENoaWxkKGxhdGVyT3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBMQVRFUiBpbnB1dCAmIGxhYmVsOlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGF0ZXJJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXRlcklucHV0LmNsYXNzTGlzdC5hZGQoJ3JhZGlvLWlucHV0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXRlcklucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF0ZXJJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xhdGVyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXRlcklucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdwcmlvcml0eScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF0ZXJJbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2xhdGVyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXRlck9wdGlvbi5hcHBlbmRDaGlsZChsYXRlcklucHV0KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGF0ZXJMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXRlckxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2xhdGVyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXRlckxhYmVsLnRleHRDb250ZW50ID0gJ2xhdGVyJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhdGVyT3B0aW9uLmFwcGVuZENoaWxkKGxhdGVyTGFiZWwpO1xuXG4gICAgICAgICAgICAvLyBjcmVhdGUgYW4gJ2FkZCcgYnV0dG9uIGF0IHRoZSBib3R0b20gb2YgdGhlIGZvcm06XG4gICAgICAgICAgICBjb25zdCBmb3JtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBmb3JtQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdC1idXR0b24nKTtcbiAgICAgICAgICAgIGZvcm1CdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICAgICAgICAgICAgZm9ybUl0c2VsZi5hcHBlbmRDaGlsZChmb3JtQnV0dG9uKTtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1CdXR0b25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBmb3JtQnV0dG9uSWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsIEFkZEljb24pO1xuICAgICAgICAgICAgZm9ybUJ1dHRvbi5hcHBlbmRDaGlsZChmb3JtQnV0dG9uSWNvbik7XG4gICAgXG4gICAgLy8gcmVuZGVyIHRoZSBhZGQgZm9ybSBpbiB0aGUgY29ycmVjdCBkaXNwbGF5IHN0eWxlOlxuICAgIGlmIChkaXNwbGF5TW9kZSA9PT0gJ2RhcmsnKSB7XG4gICAgICAgIHN3aXRjaFRvRGFyaygpO1xuICAgIH1cblxuICAgIGFkZEZvcm1MaXN0ZW5lcnMoKTtcbn1cblxuY29uc3Qgc3VibWl0QWRkRm9ybSA9ICgpID0+IHtcblxuICAgIC8vIGdldCBmb3JtIHZhbHVlczpcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZS1pbnB1dCcpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uLWlucHV0Jyk7XG4gICAgbGV0IHByaW9yaXR5O1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm93JykuY2hlY2tlZCkge1xuICAgICAgICBwcmlvcml0eSA9ICdub3cnO1xuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xhdGVyJykuY2hlY2tlZCkge1xuICAgICAgICBwcmlvcml0eSA9ICdsYXRlcic7XG4gICAgfVxuXG4gICAgLy8gYWRkIGEgdG8tZG8gb2JqZWN0IHRvIHRoZSBhcnJheSB1c2luZyB0aGUgZm9ybSB2YWx1ZXM6XG4gICAgY3JlYXRlVG9kbyh0aXRsZS52YWx1ZSwgZGVzY3JpcHRpb24udmFsdWUsIHByaW9yaXR5LCBmYWxzZSk7XG5cbiAgICAvLyByZS1yZW5kZXIgdGhlIGN1cnJlbnQgcGFnZSB2aWV3OlxuICAgIGlmIChjdXJyZW50VmlldyA9ICdub3cnKSB7XG4gICAgICAgIHJlbmRlck5vdygpO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudFZpZXcgPSAnbGF0ZXInKSB7XG4gICAgICAgIHJlbmRlckxhdGVyKCk7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50VmlldyA9ICdhbGwnKSB7XG4gICAgICAgIHJlbmRlckFsbCgpO1xuICAgIH1cbiAgICAvLyBhbmQgc2V0IGl0IHRvIHRoZSBjb3JyZWN0IGRpc3BsYXkgbW9kZTpcbiAgICBpZiAoZGlzcGxheU1vZGUgPT09ICdkYXJrJykge1xuICAgICAgICBzd2l0Y2hUb0RhcmsoKTtcbiAgICB9XG5cbiAgICByZW1vdmVCbHVyQmFja2Ryb3AoKTtcbn07XG5cblxuY29uc3Qgc3VibWl0RWRpdEZvcm0gPSAoZSkgPT4ge1xuXG4gICAgY29uc3QgaW5kZXggPSBlLnRhcmdldC5kYXRhc2V0LmlkO1xuICAgIGNvbnNvbGUubG9nKGluZGV4KTtcblxuICAgIC8vIGdldCBmb3JtIHZhbHVlczpcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRpdGxlLWlucHV0Jyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1kZXNjcmlwdGlvbi1pbnB1dCcpO1xuXG4gICAgZWRpdFRvZG8oaW5kZXgsICd0aXRsZScsIHRpdGxlLnZhbHVlKTtcbiAgICBlZGl0VG9kbyhpbmRleCwgJ2Rlc2NyaXB0aW9uJywgZGVzY3JpcHRpb24udmFsdWUpO1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm93JykuY2hlY2tlZCkge1xuICAgICAgICBlZGl0VG9kbyhpbmRleCwgJ3ByaW9yaXR5JywgJ25vdycpO1xuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xhdGVyJykuY2hlY2tlZCkge1xuICAgICAgICBlZGl0VG9kbyhpbmRleCwgJ3ByaW9yaXR5JywgJ2xhdGVyJyk7XG4gICAgfVxuXG4gICAgcmVtb3ZlQmx1ckJhY2tkcm9wKCk7XG5cbiAgICAvLyByZS1yZW5kZXIgdGhlIGN1cnJlbnQgcGFnZSB2aWV3OlxuICAgIGlmIChjdXJyZW50VmlldyA9ICdub3cnKSB7XG4gICAgICAgIHJlbmRlck5vdygpO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudFZpZXcgPSAnbGF0ZXInKSB7XG4gICAgICAgIHJlbmRlckxhdGVyKCk7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50VmlldyA9ICdhbGwnKSB7XG4gICAgICAgIHJlbmRlckFsbCgpO1xuICAgIH1cblxuICAgIC8vIGFuZCBzZXQgaXQgdG8gdGhlIGNvcnJlY3QgZGlzcGxheSBtb2RlOlxuICAgIGlmIChkaXNwbGF5TW9kZSA9PT0gJ2RhcmsnKSB7XG4gICAgICAgIHN3aXRjaFRvRGFyaygpO1xuICAgIH1cbn1cblxuLy8gY2hhbmdlcyBiYWNrZ3JvdW5kIGNvbG9yIGFuZCBvdXRsaW5lIGZvciByYWRpbyBvcHRpb25zIGRlcGVuZGluZyBvbiBzZWxlY3Rpb246XG5jb25zdCBzdHlsZVJhZGlvT3B0aW9uID0gKGUpID0+IHtcbiAgICAvLyBzZWxlY3QgdGhlIHByaW9yaXR5IGJ1dHRvbiB3ZSB3YW50IHRvIHN0eWxlOlxuICAgIGNvbnN0IHNlbGVjdGVkSW5wdXQgPSBlLnRhcmdldDtcbiAgICBjb25zdCBidXR0b25Ub1NlbGVjdCA9IHNlbGVjdGVkSW5wdXQucGFyZW50RWxlbWVudDtcbiAgICAvLyBjbGVhciBvdXQgZXhpc3RpbmcgcHJpb3JpdHkgYnV0dG9uIHNlbGVjdGlvbiBzdHlsaW5nOlxuICAgIGNvbnN0IHByaW9yaXR5QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yYWRpby1vcHRpb24nKTtcbiAgICBwcmlvcml0eUJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICBpZiAoYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQtcHJpb3JpdHknKSkge1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkLXByaW9yaXR5Jyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBhZGQgJ3NlbGVjdGVkJyBjbGFzcyB0byB0aGUgYnV0dG9uIHdlIHdhbnQgdG8gc3R5bGU6XG4gICAgYnV0dG9uVG9TZWxlY3QuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQtcHJpb3JpdHknKTtcbn1cblxuLy8gcmVtb3ZlcyB0aGUgJ2FkZCBhIG5ldyB0YXNrJyBmb3JtIGZyb20gRE9NOlxuY29uc3QgcmVtb3ZlQWRkRm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1mb3JtJyk7XG4gICAgZm9ybS5yZW1vdmUoKTtcbiAgICByZW1vdmVCbHVyQmFja2Ryb3AoKTtcbn1cblxuY29uc3QgcmVtb3ZlRWRpdEZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWZvcm0nKTtcbiAgICBmb3JtLnJlbW92ZSgpO1xuICAgIHJlbW92ZUJsdXJCYWNrZHJvcCgpO1xufVxuXG4vLyBjcmVhdGUgb3ZlcmxheSBmb3IgYmx1ciBiYWNrZHJvcCBmaWx0ZXI6XG5jb25zdCBjcmVhdGVCbHVyQmFja2Ryb3AgPSAoKSA9PiB7XG4gICAgY29uc3QgYmx1ckJhY2tkcm9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYmx1ckJhY2tkcm9wLmNsYXNzTGlzdC5hZGQoJ2JsdXItYmFja2Ryb3AnKTtcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXInKTtcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGJsdXJCYWNrZHJvcCk7XG59XG5cbmNvbnN0IHJlbW92ZUJsdXJCYWNrZHJvcCA9ICgpID0+IHtcbiAgICBjb25zdCBibHVyQmFja2Ryb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmx1ci1iYWNrZHJvcCcpO1xuICAgIGJsdXJCYWNrZHJvcC5yZW1vdmUoKTtcbn1cblxuLy8gYXBwbHkgYW4gb3V0bGluZSBzdHlsZSB0byB0aGUgc2VsZWN0ZWQgZGlzcGxheSdzIG5hdiBidXR0b246XG5jb25zdCBvdXRsaW5lTmF2QnV0dG9uID0gKHBhZ2UpID0+IHtcblxuICAgIC8vIGNyZWF0ZSByZWZlcmVuY2UgdG8gYWxsIHRocmVlIG5hdiBidXR0b25zOlxuICAgIGNvbnN0IG5hdkJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LWJ1dHRvbicpO1xuICAgIC8vIHJlbW92ZSAnc2VsZWN0ZWQnIGNsYXNzIGZyb20gYW55IGJ1dHRvbiB0aGF0IGhhcyBpdDpcbiAgICBuYXZCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgaWYgKGJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGVkJykpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy8gdGhlbiBhZGQgdGhlICdzZWxlY3RlZCcgY2xhc3MgdG8gb25seSB0aGUgY2hvc2VuIHBhZ2U6XG4gICAgY29uc3QgY2xpY2tlZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3BhZ2V9YCk7XG4gICAgY2xpY2tlZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgIGNvbnN0IGFsbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwnKTtcbiAgICBpZiAoY2xpY2tlZEJ1dHRvbiA9PT0gYWxsQnV0dG9uKSB7XG4gICAgICAgIGNsaWNrZWRCdXR0b24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQtYWxsJyk7XG4gICAgfVxufVxuXG5jb25zdCByZW5kZXJJdGVtcyA9IChzZWxlY3RlZEl0ZW1zKSA9PiB7XG5cbiAgICAvLyBjcmVhdGUgcmVmZXJlbmNlIHRvIG1haW4gY29udGVudCBzZWN0aW9uIGFuZCBjdXJyZW50IGNvbXBsZXRlIHRvLWRvIGxpc3Q6XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gICAgY29uc3QgYWxsSXRlbXMgPSBnZXRBbGwoKTtcblxuICAgIC8vIGVtcHR5IG91dCBtYWluIGNvbnRlbnQgc2VjdGlvbjpcbiAgICBtYWluLmlubmVySFRNTCA9ICcnO1xuXG4gICAgLy8gY3JlYXRlIG5ldyA8ZGl2PiBmb3IgZWFjaCBpdGVtOlxuICAgIHNlbGVjdGVkSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgY29uc3QgZGlzcGxheWVkSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXNwbGF5ZWRJdGVtLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXllZC1pdGVtJyk7XG5cbiAgICAgICAgLy8gYWRkIGNsYXNzIGZvciBpdGVtIHByaW9yaXR5OlxuICAgICAgICBpZiAoaXRlbS5wcmlvcml0eSA9PT0gJ25vdycpIHtcbiAgICAgICAgICAgIGRpc3BsYXllZEl0ZW0uY2xhc3NMaXN0LmFkZCgnbm93LWl0ZW0nKTtcbiAgICAgICAgfSBlbHNlIGlmIChpdGVtLnByaW9yaXR5ID09PSAnbGF0ZXInKSB7XG4gICAgICAgICAgICBkaXNwbGF5ZWRJdGVtLmNsYXNzTGlzdC5hZGQoJ2xhdGVyLWl0ZW0nKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2V0IGRhdGFzZXQuaWQgdG8gaXRlbSdzIGluZGV4IGluIHRoZSBtYWluIGFycmF5OlxuICAgICAgICBkaXNwbGF5ZWRJdGVtLmRhdGFzZXQuaWQgPSBhbGxJdGVtcy5pbmRleE9mKGl0ZW0pO1xuXG4gICAgICAgICAgICAvLyBjcmVhdGUgPGRpdj5zIGZvciBjaGVja2JveCBpY29uczpcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcpO1xuXG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgaXRlbSBpcyBjb21wbGV0ZWQgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdG8gaW5zZXJ0IGFuIGVtcHR5IG9yIGNoZWNrZWQgY2hlY2tib3ggc3ZnOlxuICAgICAgICAgICAgICAgIGlmIChpdGVtLmNvbXBsZXRlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGVja2VkQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZENoZWNrYm94LnNldEF0dHJpYnV0ZSgnc3JjJywgQ2hlY2tlZENoZWNrYm94SWNvbik7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrYm94LmFwcGVuZENoaWxkKGNoZWNrZWRDaGVja2JveCk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXllZEl0ZW0uY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkLWl0ZW0nKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0uY29tcGxldGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbXB0eUNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICAgICAgICAgIGVtcHR5Q2hlY2tib3guc2V0QXR0cmlidXRlKCdzcmMnLCBFbXB0eUNoZWNrYm94SWNvbik7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrYm94LmFwcGVuZENoaWxkKGVtcHR5Q2hlY2tib3gpO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5ZWRJdGVtLmNsYXNzTGlzdC5hZGQoJ2luY29tcGxldGUtaXRlbScpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGlzcGxheWVkSXRlbS5hcHBlbmRDaGlsZChjaGVja2JveCk7XG5cbiAgICAgICAgICAgIC8vIGNyZWF0ZSA8ZGl2PnMgZm9yIGl0ZW0gdGl0bGUgdGV4dDpcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGl0ZW0udGl0bGU7XG4gICAgICAgICAgICAvLyBpZiB0aGUgaXRlbSBoYXMgYSBkZXNjcmlwdGlvbiwgbWFrZSB0aGUgdGl0bGUgZXhwYW5kYWJsZTpcbiAgICAgICAgICAgIGlmIChpdGVtLmRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnaXRlbS10aXRsZScsICdleHBhbmRhYmxlLXRpdGxlJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFpdGVtLmRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnaXRlbS10aXRsZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGlzcGxheWVkSXRlbS5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICAgICAgICAgIC8vIGNyZWF0ZSBlZGl0IGljb25zOlxuICAgICAgICAgICAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZWRpdC5jbGFzc0xpc3QuYWRkKCdlZGl0Jyk7XG4gICAgICAgICAgICBjb25zdCBlZGl0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgZWRpdEljb24uc2V0QXR0cmlidXRlKCdzcmMnLCBFZGl0SWNvbik7XG4gICAgICAgICAgICBlZGl0LmFwcGVuZENoaWxkKGVkaXRJY29uKTtcbiAgICAgICAgICAgIGRpc3BsYXllZEl0ZW0uYXBwZW5kQ2hpbGQoZWRpdCk7XG5cbiAgICAgICAgICAgIC8vIGlmIHRoZXJlIGlzIGEgZGVzY3JpcHRpb24sIGNyZWF0ZSBleHBhbmQgaWNvbnM6XG4gICAgICAgICAgICBpZiAoaXRlbS5kZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV4cGFuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGV4cGFuZC5jbGFzc0xpc3QuYWRkKCdleHBhbmQnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBleHBhbmRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICAgICAgZXhwYW5kSWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsIEV4cGFuZEljb24pO1xuICAgICAgICAgICAgICAgIGV4cGFuZC5hcHBlbmRDaGlsZChleHBhbmRJY29uKTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5ZWRJdGVtLmFwcGVuZENoaWxkKGV4cGFuZCk7XG4gICAgICAgICAgICAvLyBpZiB0aGVyZSdzIG5vIGl0ZW0gZGVzY3JpcHRpb24sIGFkZCB0aGUgZGVsZXRlIGljb24gaW5zdGVhZCBvZiB0aGUgZXhwYW5kIGljb246XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFpdGVtLmRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZUljb24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVsZXRlSWNvblN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZUljb25Tdmcuc2V0QXR0cmlidXRlKCdzcmMnLCBEZWxldGVJY29uKTtcbiAgICAgICAgICAgICAgICBkZWxldGVJY29uLmFwcGVuZENoaWxkKGRlbGV0ZUljb25TdmcpO1xuICAgICAgICAgICAgICAgIGRpc3BsYXllZEl0ZW0uYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbik7XG4gICAgICAgICAgICAgICAgYWRkRGVsZXRlTGlzdGVuZXJUb0l0ZW1XaXRob3V0RGVzY3JpcHRpb24oZGVsZXRlSWNvbiwgZGlzcGxheWVkSXRlbS5kYXRhc2V0LmlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuXG4gICAgICAgIC8vIGFkZCBpdGVtIDxkaXY+IHRvIHRoZSBtYWluIGNvbnRlbnQgc2VjdGlvbjpcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChkaXNwbGF5ZWRJdGVtKTtcblxuICAgICAgICAvLyBhZGQgY2xpY2sgbGlzdGVuZXIgdG8gY2hlY2tib3ggb2YgbmV3IGl0ZW0gdXNpbmcgaXRzIGlkOlxuICAgICAgICBhZGRDaGVja2JveExpc3RlbmVyKGRpc3BsYXllZEl0ZW0uZGF0YXNldC5pZCk7XG5cbiAgICAgICAgLy8gYWRkIGNsaWNrIGxpc3RlbmVyIHRvZSBkaXQgaWNvbiBvZiBuZXcgaXRlbSB1c2luZyBpdHMgaWQ6XG4gICAgICAgIGFkZEVkaXRJY29uTGlzdGVuZXIoZGlzcGxheWVkSXRlbS5kYXRhc2V0LmlkKTtcbiAgICB9KTtcblxuICAgIC8vIHJlbmRlciAnYWRkJyBidXR0b24gYXQgdGhlIGJvdHRvbSBvZiB0aGUgY29udGVudCBzZWN0aW9uOlxuICAgIHJlbmRlckFkZEJ1dHRvbigpO1xuXG4gICAgLy8gY2hlY2sgaWYgZGlzcGxheSBtb2RlIGlzIHNldCB0byBkYXJrIGFuZCBzd2l0Y2ggdGhlIHBhZ2Ugc3R5bGUgaWYgbmVjZXNzYXJ5OlxuICAgIGlmIChkaXNwbGF5TW9kZSA9PT0gJ2RhcmsnKSB7XG4gICAgICAgIHN3aXRjaFRvRGFyaygpO1xuICAgIH1cblxuICAgIC8vIGFkZCBjbGljayBsaXN0ZW5lcnMgb24gdGl0bGUgdGV4dCAmIGV4cGFuZCBpY29ucyBvZiBhbGwgcmVuZGVyZWQgaXRlbXM6XG4gICAgYWRkRXhwYW5kTGlzdGVuZXJzKCk7XG59XG5cbmNvbnN0IHJlbmRlck5vdyA9ICgpID0+IHtcbiAgICAvLyBvdXRsaW5lIHRoZSAnbm93JyBidXR0b246XG4gICAgb3V0bGluZU5hdkJ1dHRvbignbm93Jyk7XG5cbiAgICAvLyBjcmVhdGUgYXJyYXkgb2Ygb25seSBpdGVtcyB3aXRoIGEgJ25vdycgcHJpb3JpdHk6XG4gICAgY29uc3Qgbm93SXRlbXMgPSBnZXROb3coKTtcblxuICAgIHJlbmRlckl0ZW1zKG5vd0l0ZW1zKTtcblxuICAgIHVwZGF0ZUN1cnJlbnRWaWV3KCdub3cnKTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50VmlldycsICdub3cnKTtcbn1cblxuY29uc3QgcmVuZGVyTGF0ZXIgPSAoKSA9PiB7XG4gICAgXG4gICAgLy8gb3V0bGluZSB0aGUgJ2xhdGVyJyBidXR0b246XG4gICAgb3V0bGluZU5hdkJ1dHRvbignbGF0ZXInKTtcblxuICAgIC8vIGNyZWF0ZSBhcnJheSBvZiBvbmx5IGl0ZW1zIHdpdGggYSAnbGF0ZXInIHByaW9yaXR5OlxuICAgIGNvbnN0IGxhdGVySXRlbXMgPSBnZXRMYXRlcigpO1xuXG4gICAgcmVuZGVySXRlbXMobGF0ZXJJdGVtcyk7XG5cbiAgICB1cGRhdGVDdXJyZW50VmlldygnbGF0ZXInKTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50VmlldycsICdsYXRlcicpO1xufVxuXG5jb25zdCByZW5kZXJBbGwgPSAoKSA9PiB7XG5cbiAgICAvLyBvdXRsaW5lIHRoZSAnYWxsJyBidXR0b246XG4gICAgb3V0bGluZU5hdkJ1dHRvbignYWxsJyk7XG5cbiAgICAvLyBjcmVhdGUgYW4gYXJyYXkgb2YgYWxsIGN1cnJlbnQgaXRlbXM6XG4gICAgY29uc3QgYWxsSXRlbXMgPSBnZXRBbGwoKTtcbiBcbiAgICByZW5kZXJJdGVtcyhhbGxJdGVtcyk7XG5cbiAgICB1cGRhdGVDdXJyZW50VmlldygnYWxsJyk7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVudFZpZXcnLCAnYWxsJyk7XG59XG5cbmNvbnN0IHJlbmRlclN0b3JlZFZpZXcgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3RvcmVkVmlldyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50VmlldycpO1xuICAgIGlmIChzdG9yZWRWaWV3ID09PSAnbm93Jykge1xuICAgICAgICByZW5kZXJOb3coKTtcbiAgICB9IGVsc2UgaWYgKHN0b3JlZFZpZXcgPT09ICdsYXRlcicpIHtcbiAgICAgICAgcmVuZGVyTGF0ZXIoKTtcbiAgICB9IGVsc2UgaWYgKHN0b3JlZFZpZXcgPT09ICdhbGwnKSB7XG4gICAgICAgIHJlbmRlckFsbCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlbmRlck5vdygpO1xuICAgIH1cbn1cblxuXG5jb25zdCBjaGVja0NoZWNrYm94ID0gKGNoZWNrYm94RGl2KSA9PiB7XG4gICAgY29uc3QgY2hlY2tib3hJY29uID0gY2hlY2tib3hEaXYuZmlyc3RDaGlsZDtcbiAgICBjaGVja2JveEljb24uc2V0QXR0cmlidXRlKCdzcmMnLCBDaGVja2VkQ2hlY2tib3hJY29uKTtcbn1cblxuY29uc3QgdW5jaGVja0NoZWNrYm94ID0gKGNoZWNrYm94RGl2KSA9PiB7XG4gICAgY29uc3QgY2hlY2tib3hJY29uID0gY2hlY2tib3hEaXYuZmlyc3RDaGlsZDtcbiAgICBjaGVja2JveEljb24uc2V0QXR0cmlidXRlKCdzcmMnLCBFbXB0eUNoZWNrYm94SWNvbik7XG59XG5cbmNvbnN0IHNob3dFZGl0UG9wdXAgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGl0ZW1Ub0VkaXQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgY29uc3QgaW5kZXggPSBpdGVtVG9FZGl0LmRhdGFzZXQuaWQ7XG4gICAgcmVuZGVyRWRpdEZvcm0oaW5kZXgpOyAgIFxufVxuXG5jb25zdCBleHBhbmRJdGVtID0gKGUpID0+IHtcblxuICAgIC8vIGZpcnN0LCBjcmVhdGUgcmVmZXJlbmNlIHRvIGNsaWNrZWQgZWxlbWVudCB0byBoZWxwIHVzIGRldGVybWluZSB0aGUgaXRlbSB0byBleHBhbmQ6XG4gICAgY29uc3QgY2xpY2tlZEVsZW1lbnQgPSBlLnRhcmdldDtcbiAgICBsZXQgaXRlbVRvRXhwYW5kO1xuICAgIC8vIGlmIHRoZSB0aXRsZSB0ZXh0IHdhcyBjbGlja2VkLCB0aGlzIGlzIHRydWUgYW5kIHRoZSBwYXJlbnQgPGRpdj4gaXMgdGhlIGl0ZW0gd2Ugd2FudCB0byBleHBhbmQ6XG4gICAgaWYgKGNsaWNrZWRFbGVtZW50LnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNwbGF5ZWQtaXRlbScpKSB7XG4gICAgICAgIGl0ZW1Ub0V4cGFuZCA9IGUudGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgLy8gb3RoZXJ3aXNlLCB0aGUgZXhwYW5kIGljb24gc3ZnIHdhcyBjbGlja2VkIGFuZCB3ZSBuZWVkIHRvIGFzY2VuZCBhbm90aGVyIGxheWVyIGluIHRoZSBET00gdG8gZ2V0IHRoZSA8ZGl2PiBvZiB0aGUgaXRlbSB3ZSB3YW50IHRvIGV4cGFuZDpcbiAgICB9IGVsc2Uge1xuICAgICAgICBpdGVtVG9FeHBhbmQgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgfVxuICAgIGl0ZW1Ub0V4cGFuZC5jbGFzc0xpc3QuYWRkKCdleHBhbmRlZC1pdGVtJyk7XG5cbiAgICAvLyBzYXZlIHJlZmVyZW5jZSB0byBpdGVtVG9FeHBhbmQncyBkYXRhLWlkOlxuICAgIGNvbnN0IGl0ZW1JZCA9IGl0ZW1Ub0V4cGFuZC5kYXRhc2V0LmlkO1xuXG4gICAgLy8gZ2V0IHJlZmVyZW5jZSB0byBleHBhbmQgaWNvbiwgYWRkIGEgbmV3IHNocmluayBpY29uIGJlZm9yZSBpdCwgYW5kIGRlbGV0ZSB0aGUgZXhwYW5kIGljb246XG4gICAgY29uc3QgZXhwYW5kID0gaXRlbVRvRXhwYW5kLmNoaWxkcmVuWzNdO1xuICAgIGNvbnN0IHNocmluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNocmluay5jbGFzc0xpc3QuYWRkKCdzaHJpbmsnKTtcbiAgICBjb25zdCBzaHJpbmtJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgc2hyaW5rSWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsIFNocmlua0ljb24pO1xuICAgIHNocmluay5hcHBlbmRDaGlsZChzaHJpbmtJY29uKTtcbiAgICBpdGVtVG9FeHBhbmQuaW5zZXJ0QmVmb3JlKHNocmluaywgZXhwYW5kKTtcbiAgICBleHBhbmQucmVtb3ZlKCk7XG5cbiAgICAvLyBjcmVhdGUgbmV3IDxkaXY+IGZvciBpdGVtIGRlc2NyaXB0aW9uIGFuZCBnZXQgdGV4dCBmcm9tIHRvZG9MaXN0IGFycmF5OlxuICAgIGNvbnN0IGl0ZW1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW1EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdpdGVtLWRlc2NyaXB0aW9uJyk7XG4gICAgaXRlbURlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoYCR7aXRlbUlkfS1kZXNjcmlwdGlvbmApO1xuICAgIGl0ZW1EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGdldERlc2NyaXB0aW9uKGl0ZW1JZCk7XG4gICAgaXRlbVRvRXhwYW5kLmFwcGVuZENoaWxkKGl0ZW1EZXNjcmlwdGlvbik7XG4gICAgXG4gICAgLy8gY3JlYXRlIG5ldyA8ZGl2PiBmb3IgZGVsZXRlIGljb24gYW5kIGFkZCBkZWxldGUgc3ZnIGFzIGEgY2hpbGQgPGltZz46XG4gICAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlbGV0ZUljb24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlJyk7XG4gICAgY29uc3QgZGVsZXRlSWNvblN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGRlbGV0ZUljb25Tdmcuc2V0QXR0cmlidXRlKCdzcmMnLCBEZWxldGVJY29uKTtcbiAgICBkZWxldGVJY29uLmFwcGVuZENoaWxkKGRlbGV0ZUljb25TdmcpO1xuICAgIGl0ZW1Ub0V4cGFuZC5hcHBlbmRDaGlsZChkZWxldGVJY29uKTtcblxuICAgIHJlbW92ZUxpc3RlbmVyc0Zyb21FeHBhbmRlZEl0ZW0oaXRlbUlkKTtcblxuICAgIGFkZExpc3RlbmVyc1RvRXhwYW5kZWRJdGVtKGl0ZW1JZCk7XG59XG5cbmNvbnN0IHNocmlua0l0ZW0gPSAoZSkgPT4ge1xuXG4gICAgLy8gc2FtZSBwcm90b2NvbCBhcyBleHBhbmRJdGVtKCk6XG4gICAgY29uc3QgY2xpY2tlZEVsZW1lbnQgPSBlLnRhcmdldDtcbiAgICBsZXQgaXRlbVRvU2hyaW5rID0gY2xpY2tlZEVsZW1lbnQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIGl0ZW1Ub1Nocmluay5jbGFzc0xpc3QucmVtb3ZlKCdleHBhbmRlZC1pdGVtJyk7XG5cbiAgICAvLyBnZXQgcmVmZXJlbmNlIHRvIHNocmluayBpY29uLCBhZGQgYSBuZXcgZXhwYW5kIGljb24gYmVmb3JlIGl0LCB0aGVuIGRlbGV0ZSB0aGUgc2hyaW5rIGljb246XG4gICAgY29uc3Qgc2hyaW5rID0gaXRlbVRvU2hyaW5rLmNoaWxkcmVuWzNdO1xuICAgIGNvbnN0IGV4cGFuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGV4cGFuZC5jbGFzc0xpc3QuYWRkKCdleHBhbmQnKTtcbiAgICBjb25zdCBleHBhbmRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgZXhwYW5kSWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsIEV4cGFuZEljb24pO1xuICAgIGV4cGFuZC5hcHBlbmRDaGlsZChleHBhbmRJY29uKTtcbiAgICBpdGVtVG9TaHJpbmsuaW5zZXJ0QmVmb3JlKGV4cGFuZCwgc2hyaW5rKTtcbiAgICBzaHJpbmsucmVtb3ZlKCk7XG5cbiAgICAvLyBzZWxlY3QgZXhwYW5kZWQgaXRlbSBkZXNjcmlwdGlvbiwgdGhlbiBkZWxldGUgaXQ6XG4gICAgY29uc3QgaXRlbURlc2NyaXB0aW9uID0gaXRlbVRvU2hyaW5rLmNoaWxkcmVuWzRdO1xuICAgIGl0ZW1EZXNjcmlwdGlvbi5yZW1vdmUoKTtcblxuICAgIC8vIHNlbGVjdCBkZWxldGUgaWNvbiA8ZGl2PiwgdGhlbiBkZWxldGUgaXQ6XG4gICAgY29uc3QgZGVsZXRlSWNvbiA9IGl0ZW1Ub1Nocmluay5jaGlsZHJlbls0XTtcbiAgICBkZWxldGVJY29uLnJlbW92ZSgpO1xuXG4gICAgY29uc3QgaXRlbVRpdGxlID0gaXRlbVRvU2hyaW5rLmNoaWxkcmVuWzFdO1xuICAgIHJlcGxhY2VFeHBhbmRMaXN0ZW5lcihpdGVtVGl0bGUpO1xuXG4gICAgcmVwbGFjZUV4cGFuZExpc3RlbmVyKGV4cGFuZCk7XG5cbn1cblxuY29uc3Qgc3dpdGNoVG9EYXJrID0gKCkgPT4ge1xuICAgIGNvbnN0IGV2ZXJ5dGhpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdib2R5IConKTtcbiAgICBldmVyeXRoaW5nLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZGFyaycpO1xuICAgIH0pO1xuICAgIGRpc3BsYXlNb2RlID0gJ2RhcmsnO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkaXNwbGF5TW9kZScsICdkYXJrJyk7XG4gICAgc3R5bGVEYXJrSWNvbigpO1xufVxuXG5jb25zdCBzdHlsZURhcmtJY29uID0gKCkgPT4ge1xuICAgIC8vIGNoZWNrIHRoYXQgZGFyayBtb2RlIGlzIHNlbGVjdGVkOlxuICAgIGlmIChkaXNwbGF5TW9kZSA9PT0gJ2RhcmsnKSB7XG4gICAgICAgIC8vIHJlbW92ZSBzZWxlY3Rpb24gZnJvbSBsaWdodCBtb2RlIGljb246XG4gICAgICAgIGNvbnN0IGxpZ2h0SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saWdodC1tb2RlJyk7XG4gICAgICAgIGxpZ2h0SWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZC1kaXNwbGF5Jyk7XG4gICAgICAgIC8vIG1hcmsgZGFyayBtb2RlIGljb24gYXMgc2VsZWN0ZWQ6XG4gICAgICAgIGNvbnN0IGRhcmtJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhcmstbW9kZScpO1xuICAgICAgICBkYXJrSWNvbi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZC1kaXNwbGF5Jyk7XG4gICAgfVxufVxuXG5jb25zdCBzd2l0Y2hUb0xpZ2h0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGV2ZXJ5dGhpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcqJyk7XG4gICAgZXZlcnl0aGluZy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmsnKTtcbiAgICB9KTtcbiAgICBkaXNwbGF5TW9kZSA9ICdsaWdodCc7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Rpc3BsYXlNb2RlJywgJ2xpZ2h0Jyk7XG4gICAgc3R5bGVMaWdodEljb24oKTtcbn1cblxuY29uc3QgcmV0cmlldmVTdG9yZWREaXNwbGF5TW9kZSA9ICgpID0+IHtcbiAgICBjb25zdCBkaXNwbGF5TW9kZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkaXNwbGF5TW9kZScpO1xuICAgIGlmIChkaXNwbGF5TW9kZSA9PT0gJ2RhcmsnKSB7XG4gICAgICAgIHN3aXRjaFRvRGFyaygpO1xuICAgIH0gZWxzZSBpZiAoZGlzcGxheU1vZGUgPT09ICdsaWdodCcpIHtcbiAgICAgICAgc3dpdGNoVG9MaWdodCgpO1xuICAgIH1cbn1cblxuY29uc3Qgc3R5bGVMaWdodEljb24gPSAoKSA9PiB7XG4gICAgLy8gY2hlY2sgdGhhdCBsaWdodCBtb2RlIGlzIHNlbGVjdGVkOlxuICAgIGlmIChkaXNwbGF5TW9kZSA9PT0gJ2xpZ2h0Jykge1xuICAgICAgICAvLyByZW1vdmUgc2VsZWN0aW9uIGZyb20gZGFyayBtb2RlIGljb246XG4gICAgICAgIGNvbnN0IGRhcmtJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhcmstbW9kZScpO1xuICAgICAgICBkYXJrSWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZC1kaXNwbGF5Jyk7XG4gICAgICAgIC8vIG1hcmsgbGlnaHQgbW9kZSBpY29uIGFzIHNlbGVjdGVkOlxuICAgICAgICBjb25zdCBsaWdodEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlnaHQtbW9kZScpO1xuICAgICAgICBsaWdodEljb24uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQtZGlzcGxheScpO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgXG4gICAgcmVuZGVyUGFnZSwgXG4gICAgcmVuZGVyTm93LCBcbiAgICByZW5kZXJMYXRlciwgXG4gICAgcmVuZGVyQWxsLCBcbiAgICBleHBhbmRJdGVtLFxuICAgIHNocmlua0l0ZW0sIFxuICAgIHVwZGF0ZUN1cnJlbnRWaWV3LCBcbiAgICBnZXRDdXJyZW50VmlldyxcbiAgICBjaGVja0NoZWNrYm94LFxuICAgIHVuY2hlY2tDaGVja2JveCxcbiAgICByZW5kZXJBZGRGb3JtLFxuICAgIHN0eWxlUmFkaW9PcHRpb24sXG4gICAgc3VibWl0QWRkRm9ybSxcbiAgICBzdWJtaXRFZGl0Rm9ybSxcbiAgICByZW1vdmVBZGRGb3JtLFxuICAgIHJlbW92ZUVkaXRGb3JtLFxuICAgIHN3aXRjaFRvRGFyayxcbiAgICBzd2l0Y2hUb0xpZ2h0LFxuICAgIHN0eWxlRGFya0ljb24sXG4gICAgc3R5bGVMaWdodEljb24sXG4gICAgc2hvd0VkaXRQb3B1cCxcbiAgICBjcmVhdGVCbHVyQmFja2Ryb3AsXG4gICAgcmV0cmlldmVTdG9yZWREaXNwbGF5TW9kZSxcbiAgICByZW5kZXJTdG9yZWRWaWV3LFxuICAgIGRpc3BsYXlNb2RlXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9