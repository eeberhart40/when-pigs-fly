let spriteFiles = [
    'horse',
    'blueBird'
]
class Obstacle {

    constructor(scrollSpeed) {
        this.scrollSpeed = scrollSpeed;
        this.sprite = spriteFiles[Math.floor(Math.random() * spriteFiles.length)]
        this.posX  = 350;
        this.xPos = 450;
      

        if (this.sprite === 'horse') {
            this.spriteParams = [65, 279, 63, 61, 500, 330 - Math.floor(Math.random() * Math.floor(100)), 120, 120];
        } else if (this.sprite === 'blueBird') {
            this.spriteParams = [0, 0, 200, 130, 500, 250 - Math.floor(Math.random() * Math.floor(250)) , 50, 40];
        }
    }

    render() {
        const obImg = new Image();
        obImg.src = './imgs/sprites/' + this.sprite + '.png';

        const fgCan = document.getElementById('fgCanvas');
   
        const fgCtx = fgCan.getContext('2d');
       
        fgCtx.drawImage(obImg, ...this.spriteParams);

        // this.spriteParams[4] += this.scrollSpeed;

        
    }

    // destroy(){
    //     this = {};
    // }
    

}

export default Obstacle;