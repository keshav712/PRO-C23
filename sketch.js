var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

    helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
    
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	packageBody.image=loadImage("package.png")
	World.add(world, packageBody);
	

	//Create a Ground
	
 	boxPosition=width/2-100
 	boxY=610;


 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);


 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	
 	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

	 ground=Bodies.rectangle(400,680,800,20)
	 World.add(world,ground)
 	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 Engine.update(engine)
 imageMode(CENTER)
 image(packageBody.image,packageBody.position.x,packageBody.position.y,20,20)
 rect(ground.position.x,ground.position.y,800,20)
  drawSprites();
  
  
 
}
function keyPressed() {
if(keyCode===RIGHT_ARROW){
	helicopterSprite.velocityX=3
}
if(keyCode===LEFT_ARROW){
	helicopterSprite.velocityX=-3
}
if(keyCode===DOWN_ARROW){
	Matter.Body.setStatic(packageBody,false)
}
}