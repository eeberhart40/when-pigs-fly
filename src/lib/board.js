const Pig = require('./pig');
const ObstacleManager = require('./obstacleManager');
const Obstacle = require('./obstacle');

class Board {
    constructor(scrollSpeed = -1){
        window.addEventListener('keydown', this.restart.bind(this));
        this.scrollSpeed = scrollSpeed;
        this.pig = new Pig();
        this.obstacles = new ObstacleManager(scrollSpeed);
        this.collision = this.collision.bind(this);
        this.gameOverRender = this.gameOverRender.bind(this);
        this.points = 0;
        this.gameOver = false;
    }

    collision() {
        const obstacles = this.obstacles.obstacleList;
        const pig = this.pig;

        obstacles.forEach(obstacle => {
            let pigSpace = {
                x: pig.posX,
                y: pig.posY,
                w: pig.width,
                h: pig.height
            };

            let obstacleSpace = {
                x: obstacle.spriteParams[4],
                y: obstacle.spriteParams[5],
                w: obstacle.spriteParams[6],
                h: obstacle.spriteParams[7]
            };

            if (pigSpace.x < obstacleSpace.x + obstacleSpace.w - 35 &&
                pigSpace.x + pigSpace.w - 35 > obstacleSpace.x &&
                pigSpace.y < obstacleSpace.y + obstacleSpace.h - 35 &&
                pigSpace.y + pigSpace.h - 35> obstacleSpace.y) {
                this.gameOver = true;
            }
        });

    }

    render () {
        const bgImg = new Image();
        bgImg.src = 'http://www.clker.com/cliparts/6/e/a/f/15137509091640585729cartoon-field-background.hi.png';
        
        const bgCan = document.getElementById('bgCanvas');
        bgCan.height = 450;
        bgCan.width = 500;
        const bgCtx= bgCan.getContext('2d');
        let bgImgWidth = bgCan.width;
     
        const fgCan = document.getElementById('fgCanvas');
        const fgCtx = fgCan.getContext('2d');
        // let scrollSpeed = -1;

        // const pig = new Pig();
        // // const obstacle = new Obstacle(scrollSpeed);
        // const obstacleManager = new ObstacleManager(scrollSpeed);
        
        let that = this;
        function loop() {

 
        

            that.pig.render();
            that.pig.update();
            that.obstacles.update();
            that.collision();
            // const obstacles = new ObstacleManager(scrollSpeed);
            
            // pig.render();
            // pig.update();
            // obstacleManager.update();
            
            // obstacle.render();
            // window.setInterval(function()
            // {
            //     obstacle.render();

            // },1000);


            bgCtx.drawImage(bgImg, bgImgWidth, 0, bgCan.width, bgCan.height );
            bgCtx.drawImage(bgImg, bgImgWidth - bgCan.width, 0, bgCan.width, bgCan.height);
            
            bgImgWidth += that.scrollSpeed;

            if(bgImgWidth == 0) {
                bgImgWidth = bgCan.width;
            }

            fgCtx.font = "25px Bangers, cursive";
            fgCtx.fillText(`Score: ${that.obstacles.points}`, 210, 25);
 
            let animationId = window.requestAnimationFrame(loop);

            if(that.gameOver) {
                // window.cancelAnimationFrame(animationId);

                that.gameOverRender(that.obstacles.points);
            }
        }

        loop();
    }

    gameOverRender(finalScore){
        const gameOverImg = new Image();
        gameOverImg.src = './imgs/gameOverPig.png';

        const gameOverCan = document.getElementById('fgCanvas');
        
        gameOverCan.width = 500;
        gameOverCan.height = 450;
        const goCtx = gameOverCan.getContext('2d');
        
        goCtx.drawImage(gameOverImg, 0, 0, 809, 604, 0, 0, 500, 450);
        goCtx.font = "50px Bangers, cursive";
        goCtx.fillText("GAME OVER", 150, 40);
        goCtx.font = "50px Bangers, cursive";
        goCtx.fillText(`final Score: ${finalScore}` , 120, 430);
        goCtx.font = "25px Bangers, cursive";
        goCtx.fillText("press enter to play again", 120, 450);
        

        window.clearInterval(this.obstacles.interval);
    }

    restart(key){
        if (this.gameOver) {
            if(key.keyCode === 13) window.location.reload();
        }
    }

}

module.exports = Board;