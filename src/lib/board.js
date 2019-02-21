import Pig from './pig';
import ObstacleManager from './obstacleManager';
// const Obstacle = require('./obstacle');
import ScoreForm from './scoreForm';
import TopScores from './topScores';
import MusicButton from './music';

class Board {
    constructor(scrollSpeed = -6){
        window.addEventListener('keydown', this.restart.bind(this));
        this.scrollSpeed = scrollSpeed;
        this.pig = new Pig();
        this.obstacles = new ObstacleManager(scrollSpeed);
        this.collision = this.collision.bind(this);
        this.gameOverRender = this.gameOverRender.bind(this);
        this.points = 0;
        this.gameOver = false;
        this.scoreForm = new ScoreForm();
        this.topScores = new TopScores();
        this.music = true;
        this.MusicButton = new MusicButton();
        this.MusicButton.setup();
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

        this.topScores.getScores();
        // this.topScores.renderTopScores();
        
        const bgImg = new Image();
        bgImg.src = 'http://www.clker.com/cliparts/6/e/a/f/15137509091640585729cartoon-field-background.hi.png';
        
        const bgCan = document.getElementById('bgCanvas');
        bgCan.height = 445;
        bgCan.width = 500;
        const bgCtx= bgCan.getContext('2d');
        let bgImgWidth = bgCan.width;
     
        const fgCan = document.getElementById('fgCanvas');
        const fgCtx = fgCan.getContext('2d');
        
        let that = this;
        function loop() {

            that.pig.render();
            that.pig.update();
            that.obstacles.update();
            that.collision();
  
            bgCtx.drawImage(bgImg, bgImgWidth, 0, bgCan.width, bgCan.height );
            bgCtx.drawImage(bgImg, bgImgWidth - bgCan.width, 0, bgCan.width, bgCan.height);
            
            bgImgWidth += that.scrollSpeed;

            if(bgImgWidth <= 0) {
                bgImgWidth = bgCan.width;
            }

            fgCtx.font = "25px Bangers, cursive";
            fgCtx.fillText(`Up Arrow Controls Pig!`, 150, 25);
            fgCtx.fillText(`Score: ${that.obstacles.points}`, 210, 50);
 
            let animationId = window.requestAnimationFrame(loop);

            if(that.gameOver) {
  
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

        this.scoreForm.getScore(finalScore);
    }

    restart(key){
        if (this.gameOver) {
            if(key.keyCode === 13) window.location.reload();
        }
    }



}

export default Board;