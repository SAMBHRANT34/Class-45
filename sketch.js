var snakeImg, appleImg, eggImg, mongooseImg, trophyImg, bgImg







function preload(){
snakeImg = loadAnimation("snake_1.png","snake_2.png","snake_3.png","snake_4.png","snake_5.png")
appleImg = loadImage("apple.png")
eggImg = loadImage("egg.png")
mongooseImg = loadImage("Mongoose.png")
trophyImg = loadImage("Trophy.png")
dieSound = loadSound("die.mp3")
jumpSound = loadSound("jump.mp3")
bgImg = loadImage("bg.png")
}

function setup(){
var Canvas = createCanvas(400, 400)
snake = createSprite(50, 50, 10, 10)
snake.addAnimation("snake", snakeImg)
snake.scale = 0.5
}


function draw(){
background(bgImg)

drawSprites();
}



