const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var soldier;




function setup() {
  createCanvas(1000,1000);

  engine = Engine.create();
	world = engine.world;

  soldier = createSprite(500,500,50,50);
  ground1 = createSprite(500,950,1000,20);
  ground2 = new Ground(500,960,1000,20);
  terr1 = new Terrorist(50,100,20,20);
  terr2 = new Terrorist(120,100,20,20);

  
  Engine.run(engine);
  
}

function draw() {
  background("lightgrey"); 
   
  terr1.display();
  terr2.display();
  ground2.display();

if(keyDown(UP_ARROW)) {
  soldier.y = soldier.y-5
  ground1.y = ground1.y-5
}
if(keyDown(DOWN_ARROW)) {
  soldier.y = soldier.y+5
  ground1.y = ground1.y+5
  
}
if(keyDown(LEFT_ARROW)) {
  soldier.x = soldier.x-5
  
}
if(keyDown(RIGHT_ARROW)) {
  soldier.x = soldier.x+5
  
}
if(keyDown("space")) {
 soldier.velocityY = -10
  
}
soldier.velocityY = soldier.velocityY+0.5
ground1.x = soldier.x
soldier.collide(ground1)
  drawSprites();
}