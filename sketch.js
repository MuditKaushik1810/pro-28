
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy1;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    tree1 = new Tree(900,200,700,700);
	stone1 = new Stone(410,750,10);
	boy1 = new Boy(400,720,300,300);
	mango1 = new Mango(1200,300,100,100);
	mango2 = new Mango(1400,380,100,100);
	mango3 = new Mango(1300,250,100,100);
	mango4 = new Mango(1100,390,100,100);
  mango5 = new Mango(1300,380,100,100);
  //launcher1 = new Launcher(stone1.body,{x:460,y:760});
  //slingshot = new SlingShot(bird.body,{x:200, y:50});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);;
  //detectCollission(stone1,mango1);
  drawSprites();
  tree1.display();
  boy1.display(); 
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  //launcher1.display();
  stone1.display();
 // mouseReleased();
  //mouseDragged();
}

/*function mouseDragged(){
  Matter.Body.setPosition(stone1.body,boy1)
} */  

/*function mouseReleased(){
  launcher1.fly();
}*/

/*function detectCollission(lstone,lmango){
    mangoBodyPosition= lmango.body.position;
    stoneBodyPosition = lstone.body.position;

    var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
   if(distance<-lmango.r+lstone.r){
     Matter.Body.setStatic(lmango.body,false);
   }
}*/



