const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;
var wall1;
var wall2;

var ball;


function setup() {
	createCanvas(600, 600);
	engine = Engine.create();
	world = engine.world;

	//crear los cuerpos aquí.
	ground = new Wall(300,590,600,20);
	wall1 = new Wall(350,542,20,75);
	wall2 = new Wall(470,542,20,75);

	var Balloptions = {
		isStatic:false,
		restitution: 0.85,
		friction:0,
		density:1.2
	}

	ball = Bodies.circle(200,200,20,Balloptions)
	World.add(world,ball);
	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
	background(0);
	ground.show();
	wall1.show();
	wall2.show();
	Engine.update(engine);
	ellipse(ball.position.x, ball.position.y,20);
	keyPressed();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:.5,y:.5});
	}
}

