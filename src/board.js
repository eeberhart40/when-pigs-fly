const Pig = require('./pig')

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

        let scrollSpeed = -.5;

        const pig = new Pig();
        
        function loop() {

            pig.render();
            pig.update();

            bgCtx.drawImage(bgImg, bgImgWidth, 0, bgCan.width, bgCan.height );
            bgCtx.drawImage(bgImg, bgImgWidth - bgCan.width, 0, bgCan.width, bgCan.height);

            bgImgWidth += scrollSpeed;

            if(bgImgWidth == 0) bgImgWidth = bgCan.width;

            window.requestAnimationFrame(loop);
        }

        loop();
    }
}

module.exports = Board;