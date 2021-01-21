var gardenimage;
var tom,tomimage,tomimage2,tomimage3; 
var rat,rat1,rat2,rat3;

function preload() {
    gardenimage = loadImage("images/garden.png");
    tomimage = loadAnimation("images/cat1.png");
    tomimage2 = loadAnimation("images/cat2.png","images/cat3.png ");
     tomimage3 = loadAnimation("images/cat4.png");
     rat1 = loadAnimation("images/mouse1.png");
     rat2 = loadAnimation("images/mouse2.png","images/mouse3.png");
     rat3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);

   tom = createSprite(870,600,8,9);
   tom.addAnimation(tomimage);
   tom.scale = 0.2;

   rat = createSprite(200,600,8,9);
   rat.addAnimation(rat1);
   rat.scale = 0.15;

}

function draw() {

    background(gardenimage);
    if (tom.x-rat.x<(tom.width-rat.width)/2) {
        tom.changeAnimation(tomimage3);
        rat.changeAnimation(rat3);
    }

    drawSprites();
}
function keyPressed(){
    if (keyCode === LEFT_ARROW) {
        tom.velocityX = -5;
        tom.addAnimation(tomimage2);
    }
}
