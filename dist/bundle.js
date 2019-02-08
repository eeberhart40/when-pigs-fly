/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nconst can0 = document.getElementById('canvas0');\nconst can1 = document.getElementById('canvas1');\n\nlet ctx0 = can0.getContext('2d');\ncan0.width = 500;\ncan0.height = 450;\n\nlet ctx1 = can1.getContext('2d');\ncan1.width = 500;\ncan1.height = 450;\n\n\nlet img = new Image();\nimg.src = 'http://www.clker.com/cliparts/6/e/a/f/15137509091640585729cartoon-field-background.hi.png';\n\nlet pigImg = new Image();\npigImg.src = '../imgs/flying_pig_sprite.png';\n\nwindow.onload = function() {\n    \n    ctx1.drawImage(pigImg, 3, 80,87,88, 20, 50, 90, 90);\n    \n    let imgWidth = can0.width;\n\n    // the scroll speed \n    // an important thing to ensure here is that can.height \n    // is divisible by scrollSpeed \n    let scrollSpeed = -1;\n\n    // this is the primary animation loop that is called 60 times \n    // per second \n    function loop() {\n        // draw image 1 \n       \n        ctx0.drawImage(img, imgWidth, 0, 500, 450);\n\n        // draw image 2 \n        ctx0.drawImage(img, imgWidth - can0.width, 0, 500, 450);\n\n        // update image height \n        imgWidth += scrollSpeed;\n\n        // reseting the images when the first image entirely exits the screen \n        if (imgWidth == 0)\n            imgWidth = can0.width;\n\n        // this function creates a 60fps animation by scheduling a \n        // loop function call before the \n        // next redraw every time it is called \n        window.requestAnimationFrame(loop);\n    }\n\n    // this initiates the animation by calling the loop function \n    // for the first time \n    \n        \n    loop();\n}\n\n// let pigImage = new Image();\n// pigImage.src = 'https://1.bp.blogspot.com/-plicCbCeadY/V0lLJouE1kI/AAAAAAAAAkQ/xTZO2ne5SawJeX18wuYw827O17MKkgFTgCLcB/w800-h800/flyingpig.png';\n\n// function sprite(options) {\n\n//     let that = {};\n//     that.context = options.context;\n//     that.width = options.width;\n//     that.height = options.height;\n//     that.image = options.image;\n\n//     that.render = function () {\n//         console.log(that);\n//         that.context.drawImage(\n//             that.image,\n//             0,\n//             0,\n//             that.width,\n//             that.height,\n//             0,\n//             0,\n//             that.width,\n//             that.height\n//         );\n//     };\n\n//     return that;\n// }\n\n// let canvas = document.getElementById(\"canvas\");\n\n// let pig = sprite({\n//     context: canvas.getContext(\"2d\"),\n//     width: 20,\n//     height: 20,\n//     image: pigImage\n// });\n\n// pig.render();\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });