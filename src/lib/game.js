import Board from './board';

class Game {
    constructor(){
        this.gameOver = false;
        this.board = new Board();
        this.collision = this.collision.bind(this);
    }

    play(){
        this.board.render();
        this.collision();
    }

    collision(){
        const obstacles = this.board.obstacles.obstacleList;
        const pig = this.board.pig;
        
        obstacles.forEach(obstacle => {
            let pigSpace = {
                x: pig.posX, 
                y: pig.posY, 
                w: pig.width, 
                h: pig.height
            };

            let obstacleSpace = {
                x: obstacle.spriteParams[4],
                y: obstacle.spriteParms[5],
                w: obstacle.spriteParams[6],
                h: obstacle.spriteParams[7]
            };

            if (pigSpace.x < obstacleSpace.x + obstacleSpace.w &&
                pigSpace.x + pigSpace.w > obstacleSpace.x &&
                pigSpace.y < obstacleSpace.y + obstacleSpace.h &&
                pigSpace.y + pigSpace.h > obstacleSpace.y) {
                    const gameOverImg = new Image();
                    gameOverImg.src = '../imgs/gameOverPig.png';
                    
                    const gameOverCan = document.getElementById('fgCanvas');

                    gameOverCan.width = 500;
                    gameOverCan.height = 450;
                    const goCtx = gameOverCan.getContext('2d');
                    
                    goCtx.drawImage(gameOverImg, 0, 0, 809, 604, 0, 0, 500, 450);
                }
        });

    }
}

export default Game;