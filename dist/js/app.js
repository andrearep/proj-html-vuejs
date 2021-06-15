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
    }]
  },
  methods: {
    selected: function selected(e) {
      return this.navbarIndex = e.currentTarget.getAttribute('data-number');
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/css-loader/dist/cjs.js):\nError: Can't resolve './img/slider_header' in 'C:\\Users\\Huawei\\OneDrive\\Desktop\\programmazione\\Boolean\\progetti\\proj-html-vuejs\\src'\n    at finishWithoutResolve (C:\\Users\\Huawei\\OneDrive\\Desktop\\programmazione\\Boolean\\progetti\\proj-html-vuejs\\node_modules\\enhanced-resolve\\lib\\Resolver.js:293:18)\n    at C:\\Users\\Huawei\\OneDrive\\Desktop\\programmazione\\Boolean\\progetti\\proj-html-vuejs\\node_modules\\enhanced-resolve\\lib\\Resolver.js:362:15\n    at C:\\Users\\Huawei\\OneDrive\\Desktop\\programmazione\\Boolean\\progetti\\proj-html-vuejs\\node_modules\\enhanced-resolve\\lib\\Resolver.js:410:5\n    at eval (eval at create (C:\\Users\\Huawei\\OneDrive\\Desktop\\programmazione\\Boolean\\progetti\\proj-html-vuejs\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:16:1)\n    at C:\\Users\\Huawei\\OneDrive\\Desktop\\programmazione\\Boolean\\progetti\\proj-html-vuejs\\node_modules\\enhanced-resolve\\lib\\Resolver.js:410:5\n    at eval (eval at create (C:\\Users\\Huawei\\OneDrive\\Desktop\\programmazione\\Boolean\\progetti\\proj-html-vuejs\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:27:1)\n    at C:\\Users\\Huawei\\OneDrive\\Desktop\\programmazione\\Boolean\\progetti\\proj-html-vuejs\\node_modules\\enhanced-resolve\\lib\\DescriptionFilePlugin.js:87:43\n    at C:\\Users\\Huawei\\OneDrive\\Desktop\\programmazione\\Boolean\\progetti\\proj-html-vuejs\\node_modules\\enhanced-resolve\\lib\\Resolver.js:410:5\n    at eval (eval at create (C:\\Users\\Huawei\\OneDrive\\Desktop\\programmazione\\Boolean\\progetti\\proj-html-vuejs\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at C:\\Users\\Huawei\\OneDrive\\Desktop\\programmazione\\Boolean\\progetti\\proj-html-vuejs\\node_modules\\enhanced-resolve\\lib\\Resolver.js:410:5\n    at processResult (C:\\Users\\Huawei\\OneDrive\\Desktop\\programmazione\\Boolean\\progetti\\proj-html-vuejs\\node_modules\\webpack\\lib\\NormalModule.js:701:19)\n    at C:\\Users\\Huawei\\OneDrive\\Desktop\\programmazione\\Boolean\\progetti\\proj-html-vuejs\\node_modules\\webpack\\lib\\NormalModule.js:807:5\n    at C:\\Users\\Huawei\\OneDrive\\Desktop\\programmazione\\Boolean\\progetti\\proj-html-vuejs\\node_modules\\loader-runner\\lib\\LoaderRunner.js:399:11\n    at C:\\Users\\Huawei\\OneDrive\\Desktop\\programmazione\\Boolean\\progetti\\proj-html-vuejs\\node_modules\\loader-runner\\lib\\LoaderRunner.js:251:18\n    at context.callback (C:\\Users\\Huawei\\OneDrive\\Desktop\\programmazione\\Boolean\\progetti\\proj-html-vuejs\\node_modules\\loader-runner\\lib\\LoaderRunner.js:124:13)\n    at Object.loader (C:\\Users\\Huawei\\OneDrive\\Desktop\\programmazione\\Boolean\\progetti\\proj-html-vuejs\\node_modules\\css-loader\\dist\\index.js:155:5)\n    at processTicksAndRejections (internal/process/task_queues.js:95:5)");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_modules__["./src/app.js"]();
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.scss"]();
/******/ 	
/******/ })()
;