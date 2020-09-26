var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  //movingRect.velocityY = -5;
  fixedRect.velocityX = +5;

  ob3 = createSprite(1200,100,50,80);
  ob3.shapeColor = "purple";
  ob3.velocityX = -5;
}

function draw() {
  background(0,0,0);  

  bounce(ob3,fixedRect);
  drawSprites();
}

