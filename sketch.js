
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj, leftSide, rightSide;
function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var options = {
		isStatic: false,
		restitution: 0.3,	
		friction: 0, 
		density: 1.2,
	}
	ball = Bodies.circle(200, 200, 15, options);
	World.add(world, ball);
	console.log(ball);

	groundObj = new Ground(width/2, 670, width, 20);
	leftSide = new Ground(1200, 600, 20, 120);
	rightSide = new Ground(1000, 600, 20, 120);

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	ellipseMode(RADIUS);
	background(0);

	engine = Engine.create();
	world = engine.world;
	Engine.update(engine);

	ellipse(ball.position.x, ball.position.y, 30);
	groundObj.display();
	leftSide.display();
	rightSide.display();

	

	drawSprites();
 
}
keyPressed();
function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(ball, {x:100, y:0}, {x:40, y:-60});
	}
}
