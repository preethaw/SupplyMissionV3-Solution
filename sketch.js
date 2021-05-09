const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var helicopterIMG, packageIMG;
var helicopterBody, packageBody,ground;
var boxLeftBody, boxBottomBody, boxRightBody;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;
	
	//Create  helicopter
	helicopterBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true});
	World.add(world, helicopterBody);
	
	//Create  package
	packageBody = Bodies.circle(width/2 , 200 , 10 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);

	//Create  Ground
	ground = Bodies.rectangle(width/2, 670, width, 30 , {isStatic:true} );
 	World.add(world, ground);
 

 	//create the red box
 	boxLeftBody = Bodies.rectangle(400, 610, 10,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBottomBody = Bodies.rectangle(500, 655, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxRightBody = Bodies.rectangle(600 , 610, 10,100 , {isStatic:true} );
 	World.add(world, boxRightBody);

	
	Engine.run(engine);
  
}


function draw() {
 

  background(0);
 
  rectMode(CENTER);

  fill("brown");
  rect(ground.position.x , ground.position.y, width, 20);
  
  fill("red");
  rect(boxLeftBody.position.x , boxLeftBody.position.y,10,100);
  rect(boxRightBody.position.x , boxRightBody.position.y, 10,100); 
  rect(boxBottomBody.position.x , boxBottomBody.position.y, 200,20);
  
 
  imageMode(CENTER);
  image(packageIMG,packageBody.position.x, packageBody.position.y, 40,40 )
  image(helicopterIMG,helicopterBody.position.x, helicopterBody.position.y, 300,100 )


 
}

function keyPressed() {
  
  if (keyCode === DOWN_ARROW && packageBody.position.x > boxLeftBody.position.x && packageBody.position.x < boxRightBody.position.x) {
    Matter.Body.setStatic(packageBody,false);    
  }

  if (keyCode === LEFT_ARROW) {
	    if (packageBody.isStatic === true){
			translation={x:-20,y:0}
			Matter.Body.translate(packageBody, translation)
			Matter.Body.translate(helicopterBody, translation)
		}
  }

  if (keyCode === RIGHT_ARROW) {
	    if (packageBody.isStatic === true){
			translation={x:20,y:0}
			Matter.Body.translate(packageBody, translation);
			Matter.Body.translate(helicopterBody, translation);
		}
  }


}



