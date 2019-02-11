const Obstacle = require('./obstacle');

class ObstacleManager{
    constructor(scrollSpeed){
        this.scrollSpeed = scrollSpeed;
        this.obstacleList = [];
        let that = this;
        this.interval = window.setInterval(function()
        {
            this.obstacle = new Obstacle(scrollSpeed);
            this.obstacle.render();   

            that.obstacleList.push(this.obstacle);
            console.log('obstacle');

            // const obImg = new Image();
            // obImg.src = '../imgs/sprites/' + this.obstacle.sprite + '.png';

            // const fgCan = document.getElementById('fgCanvas');

            // const fgCtx = fgCan.getContext('2d');
            // debugger
            // fgCtx.drawImage(obImg, ...this.obstacle.spriteParams);

            // that.obstacleList.push(this.obstacle);
        }
        , 3000);
    }

    update(){
        this.obstacleList.forEach(obstacle => {
            obstacle.spriteParams[4] += this.scrollSpeed;
            obstacle.render();
            if (obstacle.spriteParams[4] < -100) {
                // obstacle.destroy();
                this.obstacleList.splice(0, 1); 
                // document.getElementById('fgCanvas').removeChild(obstacle);
            }
        })
    }
}

module.exports = ObstacleManager;