
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball1;
var ball2,ball3,ball4,ball5;
var rooof;
var chain1 , chain2;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	rooof = new Roof(400,200,400,10);
    ball1 = new Bob(400,250);
    ball2 = new Bob(400,350);
    chain1= new Chain(rooof.body,ball1.body);
    chain2 = new Chain(rooof.body,ball2.body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  ball1.display();
  rooof.display();
  chain1.display();
  chain2.display();
  //drawSprites();
 
}



