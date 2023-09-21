const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;

var rotator1,rotator2,rotator3;
var world,engine;
var ground;
var angle1=60;
var angle2=60;
var angle3=60;


function setup() {
  createCanvas(400,400);
//crie o mecanismo
  //Adicione mundo ao mecanismo
  engine=Engine.create();
  world=engine.world;

  particle_options={
  restitution:0.4,
  friction:0.02
}
   var ground_options ={
     isStatic: true
   };
rotator3=Bodies.rectangle(250,200,150,10,ground_opitions);
World.add(world,rotator3);

particle1=Bodies.circle(220,10,10,particle_options);
World.add(world,particle1);

particle2=Bodies.circle(220,10,10,particle_options);
World.add(world,particle2);

particle3=Bodies.circle(220,10,10,particle_options);
World.add(world,particle3);

particle4=Bodies.circle(220,10,10,particle_options);
World.add(world,particle4);

particle5=Bodies.circle(220,10,10,particle_options);
World.add(world,particle5);

   var ball_options = {
    restitution: 0.87,
    frictionAir:0.01
  }
  b1=Bodies.rectangle(0,200,50,20,ground_options);
  World.add(world,b1);

  b2=Bodies.rectangle(400,200,50,20,ground_options);
  World.add(world,b2);


  
  ground=Bodies.rectangle(200,400,60000,10,ground_options);
  World.add(world,ground);
//crie o solo
//adicione ao mundo

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  ellipse(particle1.position.x,particle1.position.y,10);
  ellipse(particle2.position.x,particle2.position.y,10);
  ellipse(particle3.position.x,particle3.position.y,10);
  ellipse(particle4.position.x,particle4.position.y,10);
  ellipse(particle5.position.x,particle5.position.y,10);
  //escreva uma função de retângulo para exibir o solo.
  fill("white");
  rect(ground.position.x,ground.position.y,60000,10)
  rect(b1.position.x,b1.position.y,100,20)
  rect(b2.position.x,b2.position.y,100,20)
  rect(rotator3.position.x,rotator3.position.y,150,10)
  


  Matter.Body.rotate(rotator3,angle3);
  push();
  translate(rotator3.position.x,rotator3.position.y);
  rotate(angle3);
  rect(0,0,150,10);
  pop();
  angle3+=0.2;
}
