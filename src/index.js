
const can0 = document.getElementById('canvas0');
const can1 = document.getElementById('canvas1');

let ctx0 = can0.getContext('2d');
can0.width = 500;
can0.height = 450;

let ctx1 = can1.getContext('2d');
can1.width = 500;
can1.height = 450;


let img = new Image();
img.src = 'http://www.clker.com/cliparts/6/e/a/f/15137509091640585729cartoon-field-background.hi.png';

let pigImg = new Image();
pigImg.src = '../imgs/flying_pig_sprite.png';

window.onload = function() {
    
    ctx1.drawImage(pigImg, 3, 80,87,88, 20, 50, 90, 90);
    
    let imgWidth = can0.width;

    // the scroll speed 
    // an important thing to ensure here is that can.height 
    // is divisible by scrollSpeed 
    let scrollSpeed = -1;

    // this is the primary animation loop that is called 60 times 
    // per second 
    function loop() {
        // draw image 1 
       
        ctx0.drawImage(img, imgWidth, 0, 500, 450);

        // draw image 2 
        ctx0.drawImage(img, imgWidth - can0.width, 0, 500, 450);

        // update image height 
        imgWidth += scrollSpeed;

        // reseting the images when the first image entirely exits the screen 
        if (imgWidth == 0)
            imgWidth = can0.width;

        // this function creates a 60fps animation by scheduling a 
        // loop function call before the 
        // next redraw every time it is called 
        window.requestAnimationFrame(loop);
    }

    // this initiates the animation by calling the loop function 
    // for the first time 
    
        
    loop();
}

// let pigImage = new Image();
// pigImage.src = 'https://1.bp.blogspot.com/-plicCbCeadY/V0lLJouE1kI/AAAAAAAAAkQ/xTZO2ne5SawJeX18wuYw827O17MKkgFTgCLcB/w800-h800/flyingpig.png';

// function sprite(options) {

//     let that = {};
//     that.context = options.context;
//     that.width = options.width;
//     that.height = options.height;
//     that.image = options.image;

//     that.render = function () {
//         console.log(that);
//         that.context.drawImage(
//             that.image,
//             0,
//             0,
//             that.width,
//             that.height,
//             0,
//             0,
//             that.width,
//             that.height
//         );
//     };

//     return that;
// }

// let canvas = document.getElementById("canvas");

// let pig = sprite({
//     context: canvas.getContext("2d"),
//     width: 20,
//     height: 20,
//     image: pigImage
// });

// pig.render();

