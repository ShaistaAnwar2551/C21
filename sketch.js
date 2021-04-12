var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1 = createSprite(100,200,50,100);
  gameObject2 = createSprite(200,200,50,100);
  gameObject3 = createSprite(300,200,50,100);
  gameObject4 = createSprite(400,200,50,100);

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  if(myisTouching(gameObject1,movingRect)){
    movingRect.shapeColor = "blue";
    gameObject1.shapeColor = "blue";
  }
  else{
    movingRect.shapeColor = "green";
    gameObject1.shapeColor = "green";
  }
  drawSprites();
}

