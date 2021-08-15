
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper = new Box(100,200,20,20)
	dustbin = new Pig(600,200,40,40)
	ground = new Ground(400,200,800,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  paper.display();
  dustbin.display();
  ground.display();
  background(0);
  
  drawSprites();
 
}
function keyPressed(){
	if(keycode ===UP_ARROW){
	Matter.Body.applyforce(paperobject,body,paperobject.body.position,{x:85,y:-85})
	}
}



