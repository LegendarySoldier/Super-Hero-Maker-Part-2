var canvas = new fabric.Canvas('myCanvas');

block_image_width = 30;
block_image_height = 30;

player_x = 10;
player_y = 10;

var player_object = "";

function player_update() {
    fabric.Image.fronURL("player.png", function (Img) {
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToWidth(140);
        player_object.set({
            top: player_y,
            Left: player_x
        });
        canvas.add(player_object);

    })
}

function new_image(get_image) {
    fabric.Image.fronURL(get_image, function (Img) {
        block_image_object = Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToWidth(block_image_height);
        block_image_object.set({
            top: player_y,
            Left: player_x
        });
        canvas.add(block_image_object);
        
    })
}

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (e.shiftkey == true && keyPressed == "80") {
        console.log("p and shift pressed together");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }

    if (e.shiftkey && keyPressed == "77") {

        console.log("m and shift pressed together");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }

    if (keyPressed == "38") {
        up();
        console.log("up")
    }
    if (keyPressed == "40") {
        down();
        console.log("down")
    }
    if (keyPressed == "37") {
        left();
        console.log("left")
    }
    if (keyPressed == "39") {
        right();
        console.log("right")
    }
    if (keyPressed == "66") {
        new_image('hulk_body.png');
        console.log("b")
    }
    if (keyPressed == "68") {
        new_image('thor_right_hand.png');
        console.log("d")
    }
    if (keyPressed == "65") {
        new_image('spiderman_left_hand.png');
        console.log("a")
    }
    if (keyPressed == "72") {
        new_image('ironman_head.png');
        console.log("h")
    }
    if (keyPressed == "76") {
        new_image('ironman_legs.png');
        console.log("l")
    }
    
}