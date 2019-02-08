let pigImage = new Image();
pigImage.src = 'imgs/flying_pig_sprite.png';

function sprite(options){

    let that = {};
    that.context = options.context;
    that.width = options.width;
    that.height = options.height;
    that.image = options.image;

    that.render = function() {
        that.context.drawImage(
            that.image,
            0,
            0,
            that.width,
            that.height,
            0,
            0,
            that.width,
            that.height
        );
    };

    that.render();
    return that;
}

let canvas = document.getElementById("canvas");

let pig = sprite({
    context: canvas.getContext("2d"),
    width: 20,
    height: 20,
    image: pigImage
});

pig.render();