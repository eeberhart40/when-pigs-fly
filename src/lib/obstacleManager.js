import Obstacle from './obstacle';

class ObstacleManager{
    constructor(scrollSpeed){
        this.scrollSpeed = scrollSpeed;
        this.obstacleList = [];
        let that = this;
        this.points = 0;
        this.interval = window.setInterval(function()
        {
            this.obstacle = new Obstacle(scrollSpeed);
            this.obstacle.render();   

            that.points += 1;
            that.obstacleList.push(this.obstacle);
            // that.points += 1;
            // console.log(that.points);

            // const obImg = new Image();
            // obImg.src = '../imgs/sprites/' + this.obstacle.sprite + '.png';

            // const fgCan = document.getElementById('fgCanvas');

            // const fgCtx = fgCan.getContext('2d');
            // debugger
            // fgCtx.drawImage(obImg, ...this.obstacle.spriteParams);

            // that.obstacleList.push(this.obstacle);
        }
        , 750);
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

export default ObstacleManager;