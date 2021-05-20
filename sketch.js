var city ,car1 ,car1img, car2,car2img,aim,aimimg,bomb1img,ground,hand,AWM
var goli
var gameover,go;
var sniper,img
var play , pimg
var horn
var score=0;
var inno,ino;
var res,rimg
//bomb1,
var man1 , man1img,man2 , man2img,man3 , man3img,man4 , man4img,child1,child1img,terroristimg1,terrorist1,terroristimg2,terrorist2
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	man1img = loadImage("man1.gif")
	man2img = loadImage("walking1.gif")
	man3img = loadImage("walking2.gif")
	man4img = loadImage("walkinhg 3.gif")
	child1img = loadImage("walking4.gif")
	city = loadImage("City.png")
	aimimg = loadImage ("aim.png")
	car1img = loadImage("car1.gif")
	car2img = loadImage("car2.gif")
	rimg = loadImage("restart.png")
goli = loadSound("gun.mp3")
horn = loadSound("horn.mp3")
gameover = loadImage ("gameOver.jpg")
  AWM=loadImage("AWM.png")
  img = loadImage("the hitman.png")
  pimg = loadImage("play.png")
  inno = loadImage("innocent.png")
	terroristimg1 = loadImage("terrorist 1.gif")
	terroristimg2 = loadImage("terrorist2.gif")
}

function setup() {
	createCanvas(1000,400);

frameRate(60)
	engine = Engine.create();
	world = engine.world;
go = createSprite(500,200,20,20)
go.addImage(gameover)
go.visible=false
go.scale=0.85
ino = createSprite(500,300,20,20)
ino.addImage(inno)
ino.visible=false
res = createSprite(500,350,20,20)
res.addImage(rimg)
res.visible=false
res.scale=0.2
	//Create the Bodies Here.
	aim=createSprite(mouseX,mouseY,20,20)
	aim.addImage(aimimg)
	aim.scale=0.1
	aim.depth=10000
	hand=createSprite(mouseX+100,365,20,20)
	hand.addImage(AWM)
	hand.scale=0.1
	hand.depth = 1000000000
	play = createSprite(500,300,20,20)
	play.addImage(pimg)
	play.depth=10000000000000000000
	play.scale=0.3
man1 = createSprite (1000,366,20,20)
man1.addImage(man1img)
man1.scale=0.4
man1.velocityX=-2.5
man1.depth=1000
man2 = createSprite (200,370,20,20)
man2.addImage(man2img)
man2.scale=0.35
man2.velocityX=0.75
man2.depth=1000
man3 = createSprite (600,366,20,20)
man3.addImage(man3img)
man3.scale=0.4
man3.velocityX=1.75
man3.depth=1000
man4 = createSprite (300,370,20,20)
man4.addImage(man4img)
man4.scale=0.2
man4.velocityX=2.5
man4.depth=1000
child1 = createSprite (700,370,20,20)
child1.addImage(child1img)
child1.scale=0.175
child1.velocityX=2.25
child1.depth=1000
terrorist1 = createSprite (700,366,20,20)
terrorist1.addImage(terroristimg1)
terrorist1.scale=0.2
terrorist1.velocityX=random(-0.5,-2)
terrorist1.depth=1000
terrorist2 = createSprite (50,366,20,20)
terrorist2.addImage(terroristimg2)
terrorist2.scale=0.2
terrorist2.velocityX=random(0.5,3)
terrorist2.depth=1000
ground=new Ground(500,387)
car1 = createSprite (0,370,20,20)
car1.addImage(car1img)
car1.scale=0.75
car1.velocityX=5
car1.depth=1000
rand = random (100,900)
//bomb1=createSprite(rand,366,20,20)
//	bomb1.addImage(bomb1img)
//	bomb1.scale=0.5
sniper= createSprite(500,200,1500,400)
sniper.addImage(img)
sniper.scale=1.75
sniper.depth=1000000000000
car2 = createSprite (1000,373,20,20)
car2.addImage(car2img)
car2.scale=0.75
car2.velocityX=-2.5
car2.depth=1000
	Engine.run(engine);
	Engine.update(engine)
  bomb = new Bomb(Math.round(random(100,900)),0,100)
 
  console.log(play)}



function draw() {
  rectMode(CENTER);
  background(city);
  textSize(40)
  stroke("red")
  fill("red")
text("KILLS : "+ score,00,50)
text.depth=100000000000000000000000000000 
textSize(15)
stroke("red")
fill("red")
text("{ KILL THE TERRORIT TO SAVE THE CITY WITHOU HURTING THE CITIZENS }",250,25)
text.depth=100000000000000000000000000000 
if (man1.x < -100)
{
	man1.x = 1000
}
if(mousePressedOver(res)){
	ino.visible=false
	go.visible=false
	res.visible=false
	score= 0
}
if (mousePressedOver(man1))
{
	go.visible=true 
		ino.visible=true
		goli.play();
		res.visible=true
		stroke("red")
		fill("red")
		text("HIGHEST KILLS : "+score,10,50)
		text.depth=10000000000000000000000000000000
		res.depth=100000000000000000000000000000 
		ino.depth=100000000000000000000000000000
go.depth=100000000000000000000000000000}
if (mousePressedOver(man2))
{
	go.visible=true 
	goli.play();
		ino.visible=true
		res.visible=true
		res.depth=100000000000000000000000000000
		ino.depth=100000000000000000000000000000
go.depth=100000000000000000000000000000}
if (mousePressedOver(man3))
{
	go.visible=true 
		ino.visible=true
		res.visible=true
		goli.play();
		res.depth=100000000000000000000000000000
		ino.depth=100000000000000000000000000000
go.depth=100000000000000000000000000000}
if (mousePressedOver(man4))
{
	go.visible=true 
		ino.visible=true
		res.visible=true
		goli.play();
		res.depth=100000000000000000000000000000
		ino.depth=100000000000000000000000000000
go.depth=100000000000000000000000000000}
if (terrorist1.x < -100)
{
	terrorist1.x = 1000
}
if (terrorist2.x > 1100)
{
	terrorist2.x = -100
}
if (man2.x > 1100)
{
	man2.x = 0
}
 	
if (man3.x > 1100)
{
	man3.x = 0
}
 	
if (man4.x >1100)
{
	man4.x = 0
}
if ( child1.x >1100)
{
	child1.x = 0
}
 	
if (car1.x > 1100)
{
	car1.x = 0
}
if (car2.x < -100)
{
	car2.x = 1000
}
if (mousePressedOver(play)){
	sniper.x=100000000000
	play.x =1000000000000000
}
//mousePressedOver();
backgroundmusic();
aim.x=mouseX
aim.y=mouseY
hand.x=mouseX+100
explosion();
bomb.display();
ground.display();
if (mousePressedOver(terrorist1)){
 score=score+1
		goli.play()
terrorist1.x=1100
   }
   if (mousePressedOver(terrorist2)){
score=score+1
	goli.play()
terrorist2.x=-50
}
//if(mousePressedOver(img)){
//	background(city)
//	
//}
  drawSprites();

}
function explosion(){
	if(frameCount % 120	=== 0 ){
		bomb = new Bomb(Math.round(random(100,900)),-100,100)

	}
	}
function backgroundmusic(){
	if(frameCount%240==0){
		horn.play()
		horn.setVolume(0.25)
	}
}


