const Pig = require('./pig');
const ObstacleManager = require('./obstacleManager');
const Obstacle = require('./obstacle');

class Board {
    // contructor(pig, obstacles){

    // }

    render () {
        const bgImg = new Image();
        bgImg.src = 'http://www.clker.com/cliparts/6/e/a/f/15137509091640585729cartoon-field-background.hi.png';
        
        const bgCan = document.getElementById('bgCanvas');
        bgCan.width = 500;
        bgCan.height = 450;
        const bgCtx= bgCan.getContext('2d');
        let bgImgWidth = bgCan.width;

        let scrollSpeed = -1;

        const pig = new Pig();
        // const obstacle = new Obstacle(scrollSpeed);
        const obstacleManager = new ObstacleManager(scrollSpeed);
        
        function loop() {
            
            // const obstacles = new ObstacleManager(scrollSpeed);
            
            pig.render();
            pig.update();
            obstacleManager.update();
            
            // obstacle.render();
            // window.setInterval(function()
            // {
            //     obstacle.render();

            // },1000);


            bgCtx.drawImage(bgImg, bgImgWidth, 0, bgCan.width, bgCan.height );
            bgCtx.drawImage(bgImg, bgImgWidth - bgCan.width, 0, bgCan.width, bgCan.height);
            
            bgImgWidth += scrollSpeed;

            if(bgImgWidth == 0) {
                bgImgWidth = bgCan.width;
            }
 
            window.requestAnimationFrame(loop);
        }

        loop();
    }
}

module.exports = Board;