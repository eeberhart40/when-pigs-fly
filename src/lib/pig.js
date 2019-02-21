

class Pig {
    constructor(){
        window.addEventListener('keydown',this.onKeyDown.bind(this));
        window.addEventListener('keyup', this.onKeyUp.bind(this));
        this.posX = 30;
        // this.keyCode = {32: -1}
        this.posY = 175;
        this.directionY = 0;
        this.width = 80;
        this.height = 80;
  
    }

    render() {
        const pigImg = new Image();
        pigImg.src = './imgs/flying_pig_sprite.png';

        const fgCan = document.getElementById('fgCanvas');
        fgCan.width = 500;
        fgCan.height = 450;
        const fgCtx = fgCan.getContext('2d');
        fgCtx.drawImage(pigImg, 3, 80, 87, 88, this.posX, this.posY, this.width, this.height);
            
        }

    onKeyDown(key){
        if (key.keyCode === 38) {
            this.directionY = -3;
            return false;
        }
    };

    onKeyUp(key){
        if(key.keyCode === 38) {
            this.directionY = 2;
            return false;
        }
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

export default Pig;