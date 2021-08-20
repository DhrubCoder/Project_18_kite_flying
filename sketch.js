//Game States
var PLAY=1;
var END=0;
var gameState=1;

var score = 0;

////////////   making var of all sprites   //////////          
var kite_1 , kite1_img , kite_2 , kite2_img , kite_3 , kite3_img , kite_4 , kite4_img , kite_5 , kite5_img ;
var bg , bg_img ;
var thread , thread_img ;
var bird1 , bird1_img , bird2 , bird2_img ;
var resart , restart_img , gameOver , gameOver_img ;





function preload(){

  ///////    loading images     /////
  bg_img =    loadImage("bg.jpg");
  kite1_img = loadImage("kite.png");
  kite2_img = loadImage("kite2.png");
  kite3_img = loadImage("kite3.png");
  kite4_img = loadImage("kite4.png");
  kite5_img = loadImage("kite_5.png");
  thread_img= loadImage("Kthread.png");
  bird1_img = loadImage("bird1.gif");
  bird2_img = loadImage("bird3.gif");
  restart_img = loadImage("reset.png");
  gameOver_img = loadImage("game over.png");
}



function setup(){

  //////  canvas  ////////
  createCanvas(windowWidth , windowHeight);


  //////    kite 1    /////
  kite_1 = createSprite(1000,600);
  kite_1.addImage(kite1_img);
  kite_1.scale = 0.6;


  /////      thread       ///////
  thread = createSprite(1000,900);
  thread.addImage(thread_img);

  /////    game over image    /////
  gameOver = createSprite(width/2 , height/2);
  gameOver.addImage(gameOver_img);
  gameOver.scale = 0.8;
  gameOver.visible = false ;

  /////   reset over image /////
  restart = createSprite(width/2 , height/2 + 130);
  restart.addImage(restart_img);
  restart.scale= 0.5;
  restart.visible = false;


  ///////   creating groups     ///////
  kite2_g = new Group();
  kite3_g = new Group();
  kite4_g = new Group();
  kite5_g = new Group();
  bird1_g = new Group();
  bird2_g = new Group();

  ///////     collider       ///////
  kite_1.setCollider("rectangle",0,0,200,400);
  kite_1.debug = false;

}



function draw() {

  /////   background    /////
  background(bg_img);


  ////////      game state play      ////////
  if(gameState === PLAY){

    gameOver.visible = false;
    restart.visible = false;
  ////////      moving kite     //////
  kite_1.x = World.mouseX;
  kite_1.y = World.mouseY;

    //////    making thread with kite    //////
  thread.x=kite_1.x;
  thread.y=kite_1.y;


  ///////     destroying kites     //////

  if(kite_1.isTouching(kite2_g)){
    kite2_g.destroyEach();
    score = score + 2;
  }

  if(kite_1.isTouching(kite3_g)){
    kite3_g.destroyEach();
    score = score + 2;
  }

  if(kite_1.isTouching(kite4_g)){
    kite4_g.destroyEach();
    score = score + 5;
  }

  if(kite_1.isTouching(kite5_g)){
    kite5_g.destroyEach();
    score = score + 4;
  }

  /////     calling groups   //////
  create_k2();
  create_k3();
  create_k4();
  create_bird1();
  create_bird2();


   //destroying kite
   if(kite_1.isTouching(bird1_g)){

    gameState = END;

    //kite_1.destroyEach();
    bird1_g.destroyEach();
    bird2_g.destroyEach();
    kite3_g.destroyEach();
    kite4_g.destroyEach();
    kite5_g.destroyEach();

    //setting velocity X as 0
    bird2_g.setVelocityXEach(0);
    bird1_g.setVelocityXEach(0);
    kite2_g.setVelocityXEach(0);
    kite3_g.setVelocityXEach(0);
    kite4_g.setVelocityXEach(0);
    kite5_g.setVelocityXEach(0);

  }

   if(kite_1.isTouching(bird2_g)){

    gameState = END;

    //kite_1.destroyEach();
    bird1_g.destroyEach();
    bird2_g.destroyEach();
    kite3_g.destroyEach();
    kite4_g.destroyEach();
    kite5_g.destroyEach();

    //setting velocity X as 0
    bird2_g.setVelocityXEach(0);
    bird1_g.setVelocityXEach(0);
    kite2_g.setVelocityXEach(0);
    kite3_g.setVelocityXEach(0);
    kite4_g.setVelocityXEach(0);
    kite5_g.setVelocityXEach(0);

  } 


  }

 else if(gameState === END){
    console.log(gameState);
    gameOver.visible = true ;
    restart.visible = true;

    fill("red");
    textSize(100);
    textFont("algerian")
    text("PRESS SPACE TO RESET",350,150);

    if(mousePressedOver(restart) || keyDown("space")){
      reset();
    }
   
  }

  drawSprites();

  ///    score   ///
  textSize(50)
  fill("black")
  textFont("chunkfive")
  text("Score: "+score,100,50);
}

function create_k2(){
  if(frameCount % 50 === 0){
    kite_2 = createSprite( 1200 , Math.round(random(60,2000)));
    kite_2.addImage(kite2_img);
    kite_2.velocityX = -17;
    kite_2.lifetime = 200;
    kite_2.scale = 0.6;

    kite2_g.add(kite_2);


  }
}

function create_k3(){
  if(frameCount % 60 === 0){
    kite_3 = createSprite( 1200 , Math.round(random(60,2000)));
    kite_3.addImage(kite3_img);
    kite_3.velocityX = -13;
    kite_3.lifetime = 200;
    kite_3.scale = 0.6;

    kite3_g.add(kite_3);
  }
}

function create_k4(){
  if(frameCount % 80 === 0){
    kite_4 = createSprite( 1200 , Math.round(random(60,2000)));
    kite_4.addImage(kite4_img);
    kite_4.velocityX = -25;
    kite_4.lifetime = 200;
    kite_4.scale = 0.3;

    kite4_g.add(kite_4);
  }
}

function create_k5(){
  if(frameCount % 80 === 0){
    kite_5 = createSprite( 1200 , Math.round(random(60,2000)));
    kite_5.addImage(kite5_img);
    kite_5.velocityX = -15;
    kite_5.lifetime = 200;
    kite_5.scale = 0.5;

    kite5_g.add(kite_5);
  }
}

function create_bird1(){
if(frameCount % 200 ===0){
  bird1 = createSprite(width-200,Math.round(random(60,1500)));
  bird1.addImage(bird1_img);
  bird1.velocityX = -15;
  bird1.lifetime = 200;
  bird1.scale = 0.1;

  bird1_g.add(bird1);
}
}

function create_bird2(){
  if(frameCount % 200 ===0){
    bird2 = createSprite(width-1800,Math.round(random(60,1500)));
    bird2.addImage(bird2_img);
    bird2.velocityX = 20;
    bird2.lifetime = 300;
    bird2.scale = 0.8;
  
    bird2_g.add(bird2);
  }
  }

  function reset(){
    
      gameState = PLAY;
      bird1_g.destroyEach();
      bird2_g.destroyEach();
      kite3_g.destroyEach();
      kite4_g.destroyEach();
      kite5_g.destroyEach();
      score = 0;
    
  }