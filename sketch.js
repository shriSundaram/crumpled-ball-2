const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	dustbinObj=new dustbin(1200,650,40);
	
	paperObject=new paper(200,450,40);
	
	//Create a Ground
	groundObject=new ground(width/2,670,width,20);

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine); 
}


function draw() {
  rectMode(CENTER);
  background(255);
 
  paperObject.display();
  dustbinObj.display();
  groundObject.display();
   
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:80,y:-85});
  	}
}