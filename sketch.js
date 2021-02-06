var fixedRect, movingRect;
var car,wall;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car=createSprite(200,500,70,20);
  car.shapeColor="lime";
  car.velocityX=2;
  wall=createSprite(600,500,20,70);
  wall.shapeColor="teal";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if(isTouching(car,wall)){
 car.shapeColor="red";
 car.velocityX=0;
 
 

}
else{
  car.shapeColor="lime"; 
  wall.shapeColor="teal";
}
  drawSprites();

}
