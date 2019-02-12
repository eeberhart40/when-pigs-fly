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

eval("\n// const Board = require('./lib/board');\n\n// let board = new Board();\n\n// board.render();\n\nconst Game = __webpack_require__(/*! ./lib/game */ \"./src/lib/game.js\");\n\nconst game = new Game();\ngame.play();\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/lib/board.js":
/*!**************************!*\
  !*** ./src/lib/board.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Pig = __webpack_require__(/*! ./pig */ \"./src/lib/pig.js\");\nconst ObstacleManager = __webpack_require__(/*! ./obstacleManager */ \"./src/lib/obstacleManager.js\");\nconst Obstacle = __webpack_require__(/*! ./obstacle */ \"./src/lib/obstacle.js\");\n\nclass Board {\n    constructor(scrollSpeed = -1){\n        window.addEventListener('keydown', this.restart.bind(this));\n        this.scrollSpeed = scrollSpeed;\n        this.pig = new Pig();\n        this.obstacles = new ObstacleManager(scrollSpeed);\n        this.collision = this.collision.bind(this);\n        this.gameOverRender = this.gameOverRender.bind(this);\n\n        this.gameOver = false;\n    }\n\n    collision() {\n        const obstacles = this.obstacles.obstacleList;\n        const pig = this.pig;\n\n        obstacles.forEach(obstacle => {\n            let pigSpace = {\n                x: pig.posX,\n                y: pig.posY,\n                w: pig.width,\n                h: pig.height\n            };\n\n            let obstacleSpace = {\n                x: obstacle.spriteParams[4],\n                y: obstacle.spriteParams[5],\n                w: obstacle.spriteParams[6],\n                h: obstacle.spriteParams[7]\n            };\n\n            if (pigSpace.x < obstacleSpace.x + obstacleSpace.w &&\n                pigSpace.x + pigSpace.w > obstacleSpace.x &&\n                pigSpace.y < obstacleSpace.y + obstacleSpace.h &&\n                pigSpace.y + pigSpace.h > obstacleSpace.y) {\n  \n                this.gameOver = true;\n            }\n        });\n\n    }\n\n    render () {\n        const bgImg = new Image();\n        bgImg.src = 'http://www.clker.com/cliparts/6/e/a/f/15137509091640585729cartoon-field-background.hi.png';\n        \n        const bgCan = document.getElementById('bgCanvas');\n        bgCan.width = 500;\n        bgCan.height = 450;\n        const bgCtx= bgCan.getContext('2d');\n        let bgImgWidth = bgCan.width;\n     \n        // let scrollSpeed = -1;\n\n        // const pig = new Pig();\n        // // const obstacle = new Obstacle(scrollSpeed);\n        // const obstacleManager = new ObstacleManager(scrollSpeed);\n        \n        let that = this;\n        function loop() {\n            \n            that.pig.render();\n            that.pig.update();\n            that.obstacles.update();\n            that.collision();\n            // const obstacles = new ObstacleManager(scrollSpeed);\n            \n            // pig.render();\n            // pig.update();\n            // obstacleManager.update();\n            \n            // obstacle.render();\n            // window.setInterval(function()\n            // {\n            //     obstacle.render();\n\n            // },1000);\n\n\n            bgCtx.drawImage(bgImg, bgImgWidth, 0, bgCan.width, bgCan.height );\n            bgCtx.drawImage(bgImg, bgImgWidth - bgCan.width, 0, bgCan.width, bgCan.height);\n            \n            bgImgWidth += that.scrollSpeed;\n\n            if(bgImgWidth == 0) {\n                bgImgWidth = bgCan.width;\n            }\n \n            let animationId = window.requestAnimationFrame(loop);\n\n            if(that.gameOver) {\n                that.gameOverRender();\n                // window.cancelAnimationFrame(animationId);\n            }\n        }\n\n        loop();\n    }\n\n    gameOverRender(){\n        const gameOverImg = new Image();\n        gameOverImg.src = './imgs/gameOverPig.png';\n\n        const gameOverCan = document.getElementById('fgCanvas');\n\n        gameOverCan.width = 500;\n        gameOverCan.height = 450;\n        const goCtx = gameOverCan.getContext('2d');\n        goCtx.drawImage(gameOverImg, 0, 0, 809, 604, 0, 0, 500, 450);\n\n        goCtx.font = \"50px Bangers, cursive\";\n        goCtx.fillText(\"GAME OVER\", 150, 225);\n        goCtx.font = \"25px Bangers, cursive\";\n        goCtx.fillText(\"press enter to play again\", 120, 420);\n\n\n        window.clearInterval(this.obstacles.interval);\n    }\n\n    restart(key){\n        if (this.gameOver) {\n            if(key.keyCode === 13) window.location.reload();\n        }\n    }\n\n}\n\nmodule.exports = Board;\n\n//# sourceURL=webpack:///./src/lib/board.js?");

/***/ }),

/***/ "./src/lib/game.js":
/*!*************************!*\
  !*** ./src/lib/game.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Board = __webpack_require__(/*! ./board */ \"./src/lib/board.js\");\n\nclass Game {\n    constructor(){\n        this.gameOver = false;\n        this.board = new Board();\n        this.collision = this.collision.bind(this);\n    }\n\n    play(){\n        this.board.render();\n        this.collision();\n    }\n\n    collision(){\n        const obstacles = this.board.obstacles.obstacleList;\n        const pig = this.board.pig;\n        \n        obstacles.forEach(obstacle => {\n            let pigSpace = {\n                x: pig.posX, \n                y: pig.posY, \n                w: pig.width, \n                h: pig.height\n            };\n\n            let obstacleSpace = {\n                x: obstacle.spriteParams[4],\n                y: obstacle.spriteParms[5],\n                w: obstacle.spriteParams[6],\n                h: obstacle.spriteParams[7]\n            };\n\n            if (pigSpace.x < obstacleSpace.x + obstacleSpace.w &&\n                pigSpace.x + pigSpace.w > obstacleSpace.x &&\n                pigSpace.y < obstacleSpace.y + obstacleSpace.h &&\n                pigSpace.y + pigSpace.h > obstacleSpace.y) {\n                    const gameOverImg = new Image();\n                    gameOverImg.src = '../imgs/gameOverPig.png';\n                    \n                    const gameOverCan = document.getElementById('fgCanvas');\n\n                    gameOverCan.width = 500;\n                    gameOverCan.height = 450;\n                    const goCtx = gameOverCan.getContext('2d');\n                    debugger\n                    goCtx.drawImage(gameOverImg, 0, 0, 809, 604, 0, 0, 500, 450);\n                }\n        });\n\n    }\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/lib/game.js?");

/***/ }),

/***/ "./src/lib/obstacle.js":
/*!*****************************!*\
  !*** ./src/lib/obstacle.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let spriteFiles = [\n    'horse',\n    'blueBird'\n]\nclass Obstacle {\n\n    constructor(scrollSpeed) {\n        this.scrollSpeed = scrollSpeed;\n        this.sprite = spriteFiles[Math.floor(Math.random() * spriteFiles.length)]\n        this.posX  = 350;\n        this.xPos = 450;\n      \n\n        if (this.sprite === 'horse') {\n            this.spriteParams = [65, 279, 63, 61, 500, 330 - Math.floor(Math.random() * Math.floor(100)), 120, 120];\n        } else if (this.sprite === 'blueBird') {\n            this.spriteParams = [0, 0, 200, 130, 500, 250 - Math.floor(Math.random() * Math.floor(250)) , 50, 40];\n        }\n    }\n\n    render() {\n        const obImg = new Image();\n        obImg.src = './imgs/sprites/' + this.sprite + '.png';\n\n        const fgCan = document.getElementById('fgCanvas');\n   \n        const fgCtx = fgCan.getContext('2d');\n       \n        fgCtx.drawImage(obImg, ...this.spriteParams);\n\n        // this.spriteParams[4] += this.scrollSpeed;\n\n        \n    }\n\n    // destroy(){\n    //     this = {};\n    // }\n    \n\n}\n\nmodule.exports = Obstacle;  \n\n//# sourceURL=webpack:///./src/lib/obstacle.js?");

/***/ }),

/***/ "./src/lib/obstacleManager.js":
/*!************************************!*\
  !*** ./src/lib/obstacleManager.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Obstacle = __webpack_require__(/*! ./obstacle */ \"./src/lib/obstacle.js\");\n\nclass ObstacleManager{\n    constructor(scrollSpeed){\n        this.scrollSpeed = scrollSpeed;\n        this.obstacleList = [];\n        let that = this;\n        this.interval = window.setInterval(function()\n        {\n            this.obstacle = new Obstacle(scrollSpeed);\n            this.obstacle.render();   \n\n            that.obstacleList.push(this.obstacle);\n            console.log('obstacle');\n\n            // const obImg = new Image();\n            // obImg.src = '../imgs/sprites/' + this.obstacle.sprite + '.png';\n\n            // const fgCan = document.getElementById('fgCanvas');\n\n            // const fgCtx = fgCan.getContext('2d');\n            // debugger\n            // fgCtx.drawImage(obImg, ...this.obstacle.spriteParams);\n\n            // that.obstacleList.push(this.obstacle);\n        }\n        , 3000);\n    }\n\n    update(){\n        this.obstacleList.forEach(obstacle => {\n            obstacle.spriteParams[4] += this.scrollSpeed;\n            obstacle.render();\n            if (obstacle.spriteParams[4] < -100) {\n                // obstacle.destroy();\n                this.obstacleList.splice(0, 1); \n                // document.getElementById('fgCanvas').removeChild(obstacle);\n            }\n        })\n    }\n}\n\nmodule.exports = ObstacleManager;\n\n//# sourceURL=webpack:///./src/lib/obstacleManager.js?");

/***/ }),

/***/ "./src/lib/pig.js":
/*!************************!*\
  !*** ./src/lib/pig.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\nclass Pig {\n    constructor(){\n        window.addEventListener('keydown',this.onKeyDown.bind(this));\n        window.addEventListener('keyup', this.onKeyUp.bind(this));\n        this.posX = 30;\n        // this.keyCode = {32: -1}\n        this.posY = 175;\n        this.directionY = 0;\n        this.width = 80;\n        this.height = 80;\n  \n    }\n\n    render() {\n        const pigImg = new Image();\n        pigImg.src = './imgs/flying_pig_sprite.png';\n\n        const fgCan = document.getElementById('fgCanvas');\n        fgCan.width = 500;\n        fgCan.height = 450;\n        const fgCtx = fgCan.getContext('2d');\n        fgCtx.drawImage(pigImg, 3, 80, 87, 88, this.posX, this.posY, this.width, this.height);\n            \n        }\n\n    onKeyDown(key){\n        if (key.keyCode === 32) this.directionY = -3;\n    };\n\n    onKeyUp(key){\n        if(key.keyCode === 32) this.directionY = 2;\n    };\n    \n    update() {\n        if(this.posY <= 0) {\n            this.posY += 1;\n        } else if (this.posY >= 370){\n            this.posY -= 1;\n        } else {\n            this.posY += this.directionY;\n        }\n    }\n}\n\nmodule.exports = Pig;\n\n//# sourceURL=webpack:///./src/lib/pig.js?");

/***/ })

/******/ });