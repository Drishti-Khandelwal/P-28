
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint =  Matter.Constraint
var ground1;
var m1,m2,m3;
var stone;
var rope;
function preload()
{
tree = loadImage("tree.png");
boy = loadImage("boy.png");	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground1 = new Ground(width/2,height-10,width,20);
m1 = new Mango(630,310,40);
m2 = new Mango(700,320,40);
m3 = new Mango(750,310,40);
stone = new Stone(205,575,20);
rope = new Slingshoot(stone.body,{x:225,y:575});
	Engine.run(engine);
  
}


function draw() {
 // rectMode(CENTER);
  background(255);
 ground1.display();
 
 image(tree,600,200,200,500);
 image(boy,200,530,100,200);
 m1.display();
 m2.display();
 m3.display();
 stone.display();
 rope.display();
 detectCollision(stone,m1);
 detectCollision(stone,m2);
 detectCollision(stone,m3);
  drawSprites();
 
}



function mouseDragged(){
Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})	;
}
function mouseReleased(){
rope.fly();
}
function keyPressed(){
if(keyCode===32){
rope.attach(stone.body);
}
}
///detection algo
function detectCollision(lstone,lmango){
	
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  
  	if(distance<=lmango.radius+lstone.radius)
    {
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }