const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

// Defining variables
var engine, world;

function preload(){
}
function setup() {
  createCanvas(1200,900);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground = new Ground(600,800,1200,200);
  
  ball = new Ball(1000,400,200);
  building = new Building(300,510,800,500);
  rope = new Rope(ball.body,{x:800,y:60});


}
function draw() {
  background("lightblue"); 

  ground.display();
  building.display();
  ball.display();
  rope.display();
}