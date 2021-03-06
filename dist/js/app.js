/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

var app = new Vue({
  el: '#app',
  data: {
    navbarIndex: 0,
    navbarMenu: [{
      name: 'Home',
      img_path: './dist/img/navbar/home.png',
      img_path_selected: './dist/img/navbar/home-2.png'
    }, {
      name: 'Pages',
      img_path: './dist/img/navbar/document.png',
      img_path_selected: './dist/img/navbar/document-2.png'
    }, {
      name: 'Blog',
      img_path: './dist/img/navbar/printer.png',
      img_path_selected: './dist/img/navbar/printer-2.png'
    }, {
      name: 'Shop',
      img_path: './dist/img/navbar/cart.png',
      img_path_selected: './dist/img/navbar/cart-2.png'
    }, {
      name: 'Shortcodes',
      img_path: './dist/img/navbar/lab.png',
      img_path_selected: './dist/img/navbar/lab-2.png'
    }, {
      name: 'Support',
      img_path: './dist/img/navbar/chat.png',
      img_path_selected: './dist/img/navbar/chat-2.png'
    }, {
      name: 'Contact',
      img_path: './dist/img/navbar/envelope.png',
      img_path_selected: './dist/img/navbar/envelope-2.png'
    }],
    welcomeIndex: 0,
    welcomeText: [{
      content: 'Our philosophy is learning through play as we offer a stimulating enviroment for children',
      img_path1: './dist/img/welcome_fable/clock_alt.png',
      title1: 'Full Day Sessions',
      paragraph1: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, ex!',
      img_path2: './dist/img/welcome_fable/diagram_alt.png',
      title2: 'Full Day Sessions',
      paragraph2: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, ex!'
    }, {
      content: 'Our philosophy is learning through play as we offer a stimulating enviroment for children!',
      img_path1: './dist/img/welcome_fable/diagram_alt.png',
      title1: 'Full Day Sessions',
      paragraph1: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, ex!',
      img_path2: './dist/img/welcome_fable/clock_alt.png',
      title2: 'Full Day Sessions',
      paragraph2: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, ex!'
    }],
    indexSlider1: 0,
    slider1_img: ['./dist/img/welcome_fable/welcome_slider/gallery_01-690x506.jpg', './dist/img/welcome_fable/welcome_slider/gallery_02-690x506.jpg', './dist/img/welcome_fable/welcome_slider/gallery_03-690x506.jpg'],
    indexFooter1: 0,
    footer_slide1: ['background-image: url("./dist/img/welcome_fable/footer_slider/parallax_01.jpg")', 'background-image: url("./dist/img/welcome_fable/footer_slider/bimbi1.jpg")', 'background-image: url("./dist/img/welcome_fable/footer_slider/bimbi6.png")', 'background-image: url("./dist/img/welcome_fable/footer_slider/bimbi2.jpg")', 'background-image: url("./dist/img/welcome_fable/footer_slider/bimbi3.jpg")', 'background-image: url("./dist/img/welcome_fable/footer_slider/bimbi4.jpg")', 'background-image: url("./dist/img/welcome_fable/footer_slider/bimbi6.png")'],
    indexFooter2: 2,
    footer_slide2: [{
      quotation: "La maggior parte delle persone sono altre persone. I loro pensieri sono opinioni di qualcun altro, la loro vita un???imitazione, le loro passioni una citazione.",
      name: 'Oscar Wilde'
    }, {
      quotation: "Se pensi in termini di anni, pianta il riso.Se pensi in termini di decenni, pianta alberi.Se pensi in termini di centinaia di anni, insegna alla gente.",
      name: 'Confucio'
    }, {
      quotation: "Fable Kindergarten is a great place for my daughter to start her schooling experience. It's welcoming and safe and my daughter loves being there.",
      name: 'Joe R. Hamblen'
    }, {
      quotation: "Ci sono due diversi tipi di persone nel mondo, coloro che vogliono sapere, e coloro che vogliono credere.",
      name: 'Friedrich Nietzsche'
    }, {
      quotation: "Amo i solitari, i diversi, quelli che non incontri mai. Quelli persi, andati, spiritati, fottuti. Quelli con l???anima in fiamme.",
      name: 'Charles Bukowski'
    }, {
      quotation: "Tutto l???universo cospira affinch?? chi lo desidera con tutto se stesso possa riuscire a realizzare i propri sogni.",
      name: 'Paulo Coelho'
    }]
  },
  methods: {
    selected: function selected(e) {
      return this.navbarIndex = e.currentTarget.getAttribute('data-number');
    },
    selectedSlider1: function selected(e) {
      return this.indexSlider1 = e.currentTarget.getAttribute('data-number');
    },
    welcomeSelect: function welcomeSelect(e) {
      console.log(e.currentTarget.getAttribute('class'));

      if (e.currentTarget.getAttribute('class') == 'selected') {
        return false;
      } else if (this.welcomeIndex) {
        return this.welcomeIndex--;
      } else return this.welcomeIndex++;
    },
    next: function next() {
      if (this.indexSlider1 < this.slider1_img.length - 1) {
        return this.indexSlider1++;
      } else return this.indexSlider1 = 0;
    },
    previous: function previous() {
      if (this.indexSlider1 > 0) {
        return this.indexSlider1--;
      } else return this.indexSlider1 = this.slider1_img.length - 1;
    },
    nextFooter1: function nextFooter1() {
      if (this.indexFooter1 < this.footer_slide1.length - 1) {
        return this.indexFooter1++;
      } else return this.indexFooter1 = 0;
    },
    previousFooter1: function previousFooter1() {
      if (this.indexFooter1 > 0) {
        return this.indexFooter1--;
      } else return this.indexFooter1 = this.footer_slide1.length - 1;
    },
    nextFooter2: function nextFooter2() {
      if (this.indexFooter2 < this.footer_slide2.length - 1) {
        return this.indexFooter2++;
      } else return this.indexFooter2 = 0;
    },
    previousFooter2: function previousFooter2() {
      if (this.indexFooter2 > 0) {
        return this.indexFooter2--;
      } else return this.indexFooter2 = this.footer_slide2.length - 1;
    },
    scroll_to_top: function scroll_to_top() {
      window.scrollTo(0, 0);
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkproj_html_vuejs"] = self["webpackChunkproj_html_vuejs"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./src/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./src/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;