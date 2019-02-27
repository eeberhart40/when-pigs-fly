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
        }
        , 1000);
    }

    update(){
        this.obstacleList.forEach(obstacle => {
            obstacle.spriteParams[4] += this.scrollSpeed;
            obstacle.render();
            if (obstacle.spriteParams[4] < -300) {
                this.obstacleList.splice(0, 1); 
            }
        })
    }
}

export default ObstacleManager;