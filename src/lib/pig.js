

class Pig {
    constructor(){
        window.addEventListener('keydown',this.onKeyDown.bind(this));
        window.addEventListener('keyup', this.onKeyUp.bind(this));
        this.directionY = 0;
        // this.keyCode = {32: -1}
        this.posY = 175;
  
    }

    render() {
        const pigImg = new Image();
        pigImg.src = '../imgs/flying_pig_sprite.png';

        const fgCan = document.getElementById('fgCanvas');
        fgCan.width = 500;
        fgCan.height = 450;
        const fgCtx = fgCan.getContext('2d');
        fgCtx.drawImage(pigImg, 3, 80, 87, 88, 30, this.posY, 80, 80);
            
        }

    onKeyDown(key){
        if (key.keyCode === 32) this.directionY = -3;
    };

    onKeyUp(key){
        if(key.keyCode === 32) this.directionY = 2;
    };
    
    update() {
        if(this.posY <= 0) {
            this.posY += 1;
        } else if (this.posY >= 370){
            this.posY -= 1;
        } else {
            this.posY += this.directionY;
        }
    }
}

module.exports = Pig;