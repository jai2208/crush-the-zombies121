const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var ground;
var wall1;
var wall2;

var Stones = [];
var bridge ;
var bridge_con;
var jointPoint;



function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Base(200,750,2700,20)
  wall1 = new Base(1460,500,150,200)
  wall2 = new Base(50,500,150,200)

  jointPoint = new Base()

  
  bridge = new Bridge(14,{x:345 , y:500})
  Matter.Composite.add(bridge.body, jointPoint)
  jointLink = new Link(bridge , jointPoint)
   



 frameRate(80);

}

function draw() {
  background(51);
  Engine.update(engine);

 ground.Show();
 wall1.Show();
 wall2.Show();
 bridge.show();
 jointPoint.Show();


for (var stone of stones) {
  stone.show();
}
 }
