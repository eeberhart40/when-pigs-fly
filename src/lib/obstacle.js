let spriteFiles = [
    'horse',
    'blueBird',
]

let airSpriteFiles = [
    'blueBird', 'chicken', 'blueBird', 'chicken', 'pterodactyl', 'bat', 'pterodactyl', 'blueBird', 'bat', 'blueBird'
];

let groundSpriteFiles = [
    'horse','llama','sheep','cow','horse','llama','sheep','cow','Tyrantrum', 'whiteTiger'
];

let spriteCategories = [airSpriteFiles, groundSpriteFiles];

class Obstacle {

    constructor(scrollSpeed, fileIdx = Math.floor(Math.random() * 10)) {
        this.scrollSpeed = scrollSpeed;
        // this.sprite = spriteFiles[Math.floor(Math.random() * spriteFiles.length)]
        this.spriteCategory = spriteCategories[Math.floor(Math.random() * spriteCategories.length)];
        this.sprite = this.spriteCategory[fileIdx];
        this.posX  = 350;
        this.xPos = 450;
      
        debugger
        if (this.spriteCategory.includes('horse')) {
            if( this.sprite === 'horse'){
                this.spriteParams = [65, 279, 63, 61, 500, 300 - Math.floor(Math.random() * Math.floor(100)), 200, 200];
            } else if (this.sprite === 'llama') {
                this.spriteParams = [167, 156, 49, 62, 500, 300 - Math.floor(Math.random() * Math.floor(100)), 150, 150];
            } else if (this.sprite === 'sheep') {
                this.spriteParams = [37, 172, 49, 38, 500, 300 - Math.floor(Math.random() * Math.floor(100)), 120, 100];
            } else if (this.sprite === 'cow') {
                this.spriteParams = [280, 174, 68, 42, 500, 300 - Math.floor(Math.random() * Math.floor(100)), 200, 150];
            } else if (this.sprite === 'Tyrantrum') {
                this.spriteParams = [0, 97, 1200, 1006, 500, 200 - Math.floor(Math.random() * Math.floor(100)), 300, 400];
            } else if (this.sprite === 'whiteTiger') {
                this.spriteParams = [868, 125, 148, 76, 500, 300 - Math.floor(Math.random() * Math.floor(100)), 200, 110];
            }
        } 
        else {
            if (this.sprite === 'blueBird') {
                this.spriteParams = [0, 0, 200, 130, 500,  Math.floor(Math.random() * Math.floor(250)), 70, 55];
            } else if (this.sprite === 'chicken') {
                this.spriteParams = [223, 379, 62, 61, 500,  Math.floor(Math.random() * Math.floor(250)), 80, 80];
            } else if (this.sprite === 'bat') {
                this.spriteParams = [482, 14, 151, 57, 500,  Math.floor(Math.random() * Math.floor(250)), 150, 60];
            } else if (this.sprite === 'pterodactyl') {
                this.spriteParams = [74, 49, 63, 43, 500,  Math.floor(Math.random() * Math.floor(250)), 200, 120];
            }
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