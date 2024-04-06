var bgl,bgs,astes,astel,lifel,lifes
var fogs,fogl,esplos
var gs = 1
var gos,gol
function preload()
{



bgl = loadImage("bg.png")
fogl = loadAnimation("player.gif")
astel = loadImage("aste.png")
esplos = loadAnimation("esplosao.gif")
gol = loadImage("Go.jpg")

}

function setup() 
{



createCanvas(1100,600)
bgs = createSprite(550,300)
bgs.addImage(bgl)
bgs.scale = 2



fogs = createSprite(300,300)
fogs.addAnimation("fog",fogl)
fogs.scale = 1
fogs.addAnimation("esp",esplos)
fogs.scale = 0.5

fogs.setCollider("circle",0,0,40);



}

function draw() {

if(gs == 1)
{

fogs.y = mouseY

touching()

if(frameCount % 75 == 0){

aste()

}
if(frameCount % 550 == 0){

    aste()
    
    }
}

background("black");

drawSprites()

function touching()

{

if (fogs !== undefined && astes !== undefined && astes.isTouching(fogs))
{

fogs.changeAnimation("esp",esplos)
fogs.scale = 0.3
gs= 2

}

}
gameover()
}
function aste(){

 astes = createSprite(1110,random(100,500))
 astes.addImage(astel)

 astes.setCollider("circle",-17,0,70);
 astes.velocityX = -20
 astes.velocityY = random(-2,2)
 astes.lifeTime = 1100

}

function gameover()
{
if(gs == 2)
{
gos = createSprite(550,300)
gos.addImage(gol)
gos.scale = 2
gos.lifeTime = 0
gos.depth = fogs.depth;
fogs.depth = fogs.depth + 1;
}


}