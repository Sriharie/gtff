var world;
var engine;
var ball;
var ground;
var ground2;

const Engine = Matter.Engine; //namespacing (puts matter.engine into a variable that is constant so you dont have to repeat it)
const World = Matter.World;
const Bodies = Matter.Bodies;

function setup(){
createCanvas(400,400);
engine = Engine.create(); //creates the engine
world = engine.world; //creates the world
var ball_options = { //properties of the ball
restitution : 0.5
}
ball = Bodies.circle(50,50,15,ball_options); //parameters of the ball (creates the ball)
ground = Bodies.rectangle(0,400,400,15);
ground2 = Bodies.rectangle(0,200,400,15);
World.add(world,ball,ground,ground2); //adds the variables world and ball to the world
}

function draw(){
background("white");
Engine.update(engine); //updates the engine every loop of function draw
ellipse(ball.position.x,ball.position.y,20); //displays the objects
rect(ground.position.x,ground.position.y,400,15);
rect(ground2.position.x,ground2.position.y,200,15);
}