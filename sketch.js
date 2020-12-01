const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
particle1=[]
plinko1=[]
division1=[]

function setup() {
  createCanvas(480, 800);


	engine = Engine.create();
  world = engine.world;
  ground1=new ground(240,790,480,20)
  Engine.run(engine);

  for (var k = 55; k <=width; k=k+50) 
    {
    
       plinko1.push(new plinko(k,275));
    }

     for (var k = 30; k <=width-10; k=k+50) 
    {
    
       plinko1.push(new plinko(k,375));
    }

    for (var k = 55; k <=width; k=k+50) 
    {
    
       plinko1.push(new plinko(k,325));
    }

     for (var k = 30; k <=width-10; k=k+50) 
    {
    
       plinko1.push(new plinko(k,425));
    }

    for (var k = 55; k <=width; k=k+50) 
    {
    
       plinko1.push(new plinko(k,455));
    }

     for (var k = 30; k <=width-10; k=k+50) 
    {
    
       plinko1.push(new plinko(k,485));
    } 
    
   for (var k = 0; k <=width; k = k + 80) {
    division1.push(new division(k, 700, 10, 200));
  }


}

function draw() {
  background("black");  
  drawSprites();

  Engine.update(engine)
  ground1.display()
  if(frameCount%5==0){
particle1.push(new particle(240,0,10))
  }
for(var i=0;i<particle1.length;i++){
particle1[i].display();

}
for(var i=0;i<plinko1.length;i++){
  plinko1[i].display();}

  for(var i=0;i<division1.length;i++){
    division1[i].display();}


}