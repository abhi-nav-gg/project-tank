const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var tanker;
var angle = 0
var canonBall;
var shot;
var backgroundImg,platform;
var bird, slingShot;
var launcherX,launcherY;
var flag = "start"

function preload() {
    backgroundImg = loadImage("bg.png");
}

function setup(){
    var canvas = createCanvas(displayWidth-50,displayHeight-120);
    engine = Engine.create();
    world = engine.world;
    
  tanker = new Tanker(80,height-80,60,30);
  
  canonBall = new CanonBall(80,height-80);


  shot = new ShootBall(canonBall.body,{x:80, y:height-80});

    ground = new Ground(600,height,displayWidth-50,20);
    //platform1 = new Ground(121,408,200,20)
    platform2 = new Ground(1000,250,300,20)
   // player = new Box(200,50,40,40);
    box2 =new Box(1000,170,20,70);
    box3 =new Box(979,170,20,70);
    box4 =new Box(958,170,20,70);
    box5 =new Box(937,170,20,70);
    box6 =new Box(916,170,20,70);
    box7 =new Box(895,170,20,70);
    box8 =new Box(874,170,20,70);
    box9 =new Box(1021,170,20,70);
    box10 =new Box(1042,170,20,70);
    box11=new Box(1063,170,20,70);
    box12=new Box(1084,170,20,70);
    box13=new Box(1105,170,20,70);
    box14=new Box(1126,170,20,70);
    box15=new Box(1147,170,20,70);
    box16=new Box(1168,170,20,70);
    box17=new Box(1189,170,20,70);
    box18=new Box(1210,170,20,70);
    box19 = new Box(1000,500,200,200);


}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
   // player.display();
    
    ground.display();
    //platform1.display();
    platform2.display();
    box19.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    tanker.display();
    shot.display();
    canonBall.display();

       
}
function keyReleased() {
    if (keyCode === DOWN_ARROW) {
      flag = "launch"
  
      shot.shoot()
    }
  }

 // function keyReleased() {
   /// if (keyCode === 32) {
      //flag = "launch"
  
      //shot.attach(tanker)
    //}
  //}


