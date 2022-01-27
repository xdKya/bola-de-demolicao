const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup(){
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

}
function draw(){
  background("black");

  Engine.update(engine);


  Coordenadas();
}

function Coordenadas(){
  text("X: "+mouseX,10,10);
  text("Y: "+mouseY,10,20);
}
