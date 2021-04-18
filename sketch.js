//Taking constant and storing Engine,world,bodies and body from Matter
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.constraint;
  
var r;
var b1, b2,b3,b4;
var line;
var chain1;
var chain2;
var chain3;
var chain4;
var chain5;
var bobDiameter=40;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	r=new roof();
  b1=new bob(480);
  b2=new bob(390);
  b3=new bob(300);
  b4=new bob(210);
  b5=new bob(570);
  chain1=new Chain(b1.body,r.body,-bobDiameter*2, 0) 
  chain2=new Chain(b2.body,r.body,-bobDiameter*1, 0)
  chain3=new Chain(b3.body,r.body,0, 0) 
  chain4=new Chain(b4.body,r.body,bobDiameter*1, 0) 
  chan5=new Chain(b5.body,r.body,bobDiameter*2, 0)
  




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill("white");
  text(mouseX+","+mouseY,mouseX,mouseY);
  
  drawSprites();
  r.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  

 


 
}



