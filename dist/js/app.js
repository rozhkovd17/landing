/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_mobileMenu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/mobileMenu.js */ \"./src/js/modules/mobileMenu.js\");\n/* harmony import */ var _modules_subscribe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/subscribe.js */ \"./src/js/modules/subscribe.js\");\n/* harmony import */ var _modules_contactsForm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/contactsForm.js */ \"./src/js/modules/contactsForm.js\");\n/* harmony import */ var _modules_testimonials_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/testimonials.js */ \"./src/js/modules/testimonials.js\");\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://gulp/./src/js/app.js?");

/***/ }),

/***/ "./src/js/modules/contactsForm.js":
/*!****************************************!*\
  !*** ./src/js/modules/contactsForm.js ***!
  \****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst massageForm = document.querySelector(\".contacts__massage_form\");\r\nconst massageEmail = document.querySelector(\".contacts__massage_form-email\");\r\nconst massageSms = document.querySelector(\".contacts__massage_form1\");\r\nconst massageButton = document.querySelector(\".contacts__massage_button\");\r\n\r\nconst cb = (event) => {\r\n  let errMsg = \"\";\r\n\r\n  if (massageForm.value == \"\") {\r\n    errMsg = \"Введите имя\";\r\n    massageForm.classList.add(\"err\");\r\n    event.stopPropagation();\r\n  }\r\n  if (massageEmail.value == \"\") {\r\n    errMsg = \"Введите email\";\r\n    massageEmail.classList.add(\"err\");\r\n    event.stopPropagation();\r\n  }\r\n  if (massageSms.value == \"\") {\r\n    errMsg = \"Введите смс\";\r\n    massageSms.classList.add(\"err\");\r\n    event.stopPropagation();\r\n  }\r\n  if (\r\n    massageForm.value == \"\" &&\r\n    massageEmail.value == \"\" &&\r\n    massageSms.value == \"\"\r\n  ) {\r\n    errMsg = \"Заполните поля\";\r\n  }\r\n\r\n  if (errMsg !== \"\") {\r\n    alert(errMsg);\r\n  } else {\r\n    alert(\"Отправленно\");\r\n  }\r\n};\r\n\r\nmassageForm.addEventListener(\"input\", () => {\r\n  massageForm.classList.remove(\"err\");\r\n});\r\nmassageEmail.addEventListener(\"input\", () => {\r\n  massageEmail.classList.remove(\"err\");\r\n});\r\nmassageSms.addEventListener(\"input\", () => {\r\n  massageSms.classList.remove(\"err\");\r\n});\r\n\r\nmassageButton.addEventListener(\"click\", cb);\r\n\n\n//# sourceURL=webpack://gulp/./src/js/modules/contactsForm.js?");

/***/ }),

/***/ "./src/js/modules/mobileMenu.js":
/*!**************************************!*\
  !*** ./src/js/modules/mobileMenu.js ***!
  \**************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst mobileMenuBtn = document.getElementById(\"mobile-btn\");\r\nconst mobileMenu = document.getElementById(\"mobile-menu\");\r\nconst mobileMenuClouseBtn = document.querySelector(\".menu__close-btn\");\r\n\r\nconst cb = (event) => {\r\n  mobileMenu.classList.toggle(\"menu-open\");\r\n};\r\n\r\nmobileMenuBtn.addEventListener(\"click\", cb);\r\nmobileMenuClouseBtn.addEventListener(\"click\", cb);\r\n\r\nconst menuItems = document.querySelectorAll(\".menu_wrap .header__menu_item\");\r\n\r\nmenuItems.forEach((item) => {\r\n  item.addEventListener(\"click\", cb);\r\n});\r\n\n\n//# sourceURL=webpack://gulp/./src/js/modules/mobileMenu.js?");

/***/ }),

/***/ "./src/js/modules/subscribe.js":
/*!*************************************!*\
  !*** ./src/js/modules/subscribe.js ***!
  \*************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction subscr(slBtn, slImput) {\r\n  const subscribeBtn = document.querySelector(slBtn);\r\n  const input = document.querySelector(slImput);\r\n\r\n  const cb = (event) => {\r\n    if (input.value == \"\") {\r\n      alert(\"Укажите EMAIL!\");\r\n      input.classList.add(\"err\");\r\n      event.stopPropagation();\r\n    } else {\r\n      alert(\"Вы подписаны!\");\r\n    }\r\n  };\r\n\r\n  subscribeBtn.addEventListener(\"click\", cb);\r\n  input.addEventListener(\"input\", () => {\r\n    input.classList.remove(\"err\");\r\n  });\r\n}\r\n\r\ndocument.body.addEventListener(\"click\", (event) => {\r\n  if (!event.target.classList.contains(\"err\")) {\r\n    document.querySelectorAll(\".err\").forEach((item) => {\r\n      item.classList.remove(\"err\");\r\n    });\r\n  }\r\n});\r\n\r\nsubscr(\".header__search_button\", \".header__search_form\");\r\nsubscr(\".subscribe__suerch_button\", \".subscribe__suerch_form\");\r\nsubscr(\".lastblock__buttonz\", \".lastblock__suerch_form\");\r\n\n\n//# sourceURL=webpack://gulp/./src/js/modules/subscribe.js?");

/***/ }),

/***/ "./src/js/modules/testimonials.js":
/*!****************************************!*\
  !*** ./src/js/modules/testimonials.js ***!
  \****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst testomonials = document.getElementById(\"testapi\");\r\n\r\nasync function getUsers() {\r\n  const request = fetch(\"https://reqres.in/api/users?page=2\");\r\n  const response = await request;\r\n  if (response.ok) {\r\n    const data = await response.json();\r\n    renderUsers(data.data);\r\n  }\r\n}\r\ngetUsers();\r\n\r\nfunction renderUsers(users) {\r\n  users.forEach((user) => {\r\n    const cardMobile = document.createElement(\"div\");\r\n    cardMobile.className = \"testimonials__card420\";\r\n    cardMobile.innerHTML = `\r\n    <div class= 'testimonials__js' style=\"background-image: url('${user.avatar}')\">\r\n      </div>\r\n      <div class=\"testimonials__card_description\">\r\n        Slate helps you see how many more days you need to work to reach\r\n        your financial goal for the month and year.\r\n      </div>\r\n      <div class=\"testimonials__card_stars\">\r\n      <img src=\"/img/star1.png\" />\r\n      <img src=\"/img/star1.png\" />\r\n      <img src=\"/img/star1.png\" />\r\n      <img src=\"/img/star1.png\" />\r\n      <img src=\"/img/star2.png\" />\r\n    </div>\r\n      <div class=\"testimonials__card_name\">${user.first_name} ${user.last_name}</div>\r\n      <div class=\"designer\">${user.email}</div>\r\n    `;\r\n    testomonials.appendChild(cardMobile);\r\n\r\n    const card = document.createElement(\"div\");\r\n    card.className = \"testimonials__card\";\r\n    card.innerHTML = `\r\n      <div class= 'testimonials__js' style=\"background-image: url('${user.avatar}')\">\r\n      </div>\r\n      <div class=\"testimonials__card_description\">\r\n        Slate helps you see how many more days you need to work to reach\r\n        your financial goal for the month and year.\r\n      </div>\r\n      <div class=\"testimonials__card_stars\">\r\n      <img src=\"/img/star1.png\" />\r\n      <img src=\"/img/star1.png\" />\r\n      <img src=\"/img/star1.png\" />\r\n      <img src=\"/img/star1.png\" />\r\n      <img src=\"/img/star2.png\" />\r\n    </div>\r\n      <div class=\"testimonials__card_name\">${user.first_name} ${user.last_name}</div>\r\n      <div class=\"designer\">${user.email}</div>\r\n    `;\r\n    testomonials.appendChild(card);\r\n  });\r\n}\r\n\r\nwindow.addEventListener(\"resize\", () => {\r\n  if (window.innerWidth < 576) {\r\n    const cardMobile = document.querySelectorAll(\".testimonials__card420\");\r\n    cardMobile.forEach((card, idx) => {\r\n      if (idx > 2) {\r\n        card.style.display = \"none\";\r\n      }\r\n    });\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://gulp/./src/js/modules/testimonials.js?");

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;