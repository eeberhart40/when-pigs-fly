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
/***/ (function(module, exports, __webpack_require__) {

eval("\nconst Board = __webpack_require__(/*! ./lib/board */ \"./src/lib/board.js\");\n\nlet board = new Board();\n\nboard.render();\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/lib/board.js":
/*!**************************!*\
  !*** ./src/lib/board.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Pig = __webpack_require__(/*! ./pig */ \"./src/lib/pig.js\");\nconst ObstacleManager = __webpack_require__(/*! ./obstacleManager */ \"./src/lib/obstacleManager.js\");\nconst Obstacle = __webpack_require__(/*! ./obstacle */ \"./src/lib/obstacle.js\");\n\nclass Board {\n    // contructor(pig, obstacles){\n\n    // }\n\n    render () {\n        const bgImg = new Image();\n        bgImg.src = 'http://www.clker.com/cliparts/6/e/a/f/15137509091640585729cartoon-field-background.hi.png';\n        \n        const bgCan = document.getElementById('bgCanvas');\n        bgCan.width = 500;\n        bgCan.height = 450;\n        const bgCtx= bgCan.getContext('2d');\n        let bgImgWidth = bgCan.width;\n\n        let scrollSpeed = -1;\n\n        const pig = new Pig();\n        // const obstacle = new Obstacle(scrollSpeed);\n        const obstacleManager = new ObstacleManager(scrollSpeed);\n        \n        function loop() {\n            \n            // const obstacles = new ObstacleManager(scrollSpeed);\n            \n            pig.render();\n            pig.update();\n            obstacleManager.update();\n            \n            // obstacle.render();\n            // window.setInterval(function()\n            // {\n            //     obstacle.render();\n\n            // },1000);\n\n\n            bgCtx.drawImage(bgImg, bgImgWidth, 0, bgCan.width, bgCan.height );\n            bgCtx.drawImage(bgImg, bgImgWidth - bgCan.width, 0, bgCan.width, bgCan.height);\n            \n            bgImgWidth += scrollSpeed;\n\n            if(bgImgWidth == 0) {\n                bgImgWidth = bgCan.width;\n            }\n \n            window.requestAnimationFrame(loop);\n        }\n\n        loop();\n    }\n}\n\nmodule.exports = Board;\n\n//# sourceURL=webpack:///./src/lib/board.js?");

/***/ }),

/***/ "./src/lib/obstacle.js":
/*!*****************************!*\
  !*** ./src/lib/obstacle.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let spriteFiles = [\n    'horse',\n    'blueBird'\n]\nclass Obstacle {\n\n    constructor(scrollSpeed) {\n        this.scrollSpeed = scrollSpeed;\n        this.sprite = spriteFiles[Math.floor(Math.random() * spriteFiles.length)]\n        // this.yPos = 350;\n        // this.xPos = 450;\n      \n\n        if (this.sprite === 'horse') {\n            this.spriteParams = [65, 279, 63, 61, 500, 330, 120, 120];\n        } else if (this.sprite === 'blueBird') {\n            this.spriteParams = [0, 0, 200, 130, 500, 100, 50, 40];\n        }\n    }\n\n    render() {\n        const obImg = new Image();\n        obImg.src = '../imgs/sprites/' + this.sprite + '.png';\n\n        const fgCan = document.getElementById('fgCanvas');\n   \n        const fgCtx = fgCan.getContext('2d');\n       \n        fgCtx.drawImage(obImg, ...this.spriteParams);\n\n        // this.spriteParams[4] += this.scrollSpeed;\n\n        \n    }\n\n    // destroy(){\n    //     this = {};\n    // }\n    \n\n}\n\nmodule.exports = Obstacle;  \n\n//# sourceURL=webpack:///./src/lib/obstacle.js?");

/***/ }),

/***/ "./src/lib/obstacleManager.js":
/*!************************************!*\
  !*** ./src/lib/obstacleManager.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Obstacle = __webpack_require__(/*! ./obstacle */ \"./src/lib/obstacle.js\");\n\nclass ObstacleManager{\n    constructor(scrollSpeed){\n        this.scrollSpeed = scrollSpeed;\n        this.obstacleList = [];\n        let that = this;\n        window.setInterval(function()\n        {\n            this.obstacle = new Obstacle(scrollSpeed);\n            this.obstacle.render();\n\n            that.obstacleList.push(this.obstacle);\n\n            // const obImg = new Image();\n            // obImg.src = '../imgs/sprites/' + this.obstacle.sprite + '.png';\n\n            // const fgCan = document.getElementById('fgCanvas');\n\n            // const fgCtx = fgCan.getContext('2d');\n            // debugger\n            // fgCtx.drawImage(obImg, ...this.obstacle.spriteParams);\n\n            // that.obstacleList.push(this.obstacle);\n        }\n        , Math.random() * 5000);\n    }\n\n    update(){\n        this.obstacleList.forEach(obstacle => {\n            obstacle.spriteParams[4] += this.scrollSpeed;\n            obstacle.render();\n            if (obstacle.spriteParams[4] < -100) {\n                // obstacle.destroy();\n                this.obstacleList.splice(0, 1);\n                // document.getElementById('fgCanvas').removeChild(obstacle);\n            }\n        })\n    }\n}\n\nmodule.exports = ObstacleManager;\n\n//# sourceURL=webpack:///./src/lib/obstacleManager.js?");

/***/ }),

/***/ "./src/lib/pig.js":
/*!************************!*\
  !*** ./src/lib/pig.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\nclass Pig {\n    constructor(){\n        window.addEventListener('keydown',this.onKeyDown.bind(this));\n        window.addEventListener('keyup', this.onKeyUp.bind(this));\n        this.directionY = 0;\n        // this.keyCode = {32: -1}\n        this.posY = 175;\n  \n    }\n\n    render() {\n        const pigImg = new Image();\n        pigImg.src = '../imgs/flying_pig_sprite.png';\n\n        const fgCan = document.getElementById('fgCanvas');\n        fgCan.width = 500;\n        fgCan.height = 450;\n        const fgCtx = fgCan.getContext('2d');\n        fgCtx.drawImage(pigImg, 3, 80, 87, 88, 30, this.posY, 80, 80);\n            \n        }\n\n    onKeyDown(key){\n        if (key.keyCode === 32) this.directionY = -3;\n    };\n\n    onKeyUp(key){\n        if(key.keyCode === 32) this.directionY = 2;\n    };\n    \n    update() {\n        if(this.posY <= 0) {\n            this.posY += 1;\n        } else if (this.posY >= 370){\n            this.posY -= 1;\n        } else {\n            this.posY += this.directionY;\n        }\n    }\n}\n\nmodule.exports = Pig;\n\n//# sourceURL=webpack:///./src/lib/pig.js?");

/***/ })

/******/ });