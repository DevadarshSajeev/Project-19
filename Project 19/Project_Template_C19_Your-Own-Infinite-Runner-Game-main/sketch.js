var PLAY = 1;
var END = 0;
var gameState = PLAY;
var rocket, rocketImg;
var star, starImg;
var meteor, meteorImg, meteorGroup;
var space, spaceImg;
var score;


function preload()
{
  rocketImg = loadImage("Rocket.png");
  starImg = loadImage("star.jpeg");
  meteorImg = loadImage("meteor.png");
  spaceImg = loadImage("space.jpeg");
}

function setup() 
{
 createCanvas(windowWidth, windowHeight);
 space = createSprite(300,300);
 space.addImage("space",spaceImg);
 space.velocityY = 1;

 rocket= createSprite(300,600,50,50);
 rocket.addImage("rocket",rocketImg);
 rocket.scale=0.4;

 meteorGroup = new Group();

 score = 0;
}

function draw() 
{
 background(200);
 text("Score: "+ score, 200,100)
 score = score + Math.round(frameCount/60)


 if(gameState = PLAY)
 {
  if(keyDown("right_arrow"))
  {
    rocket.x = rocket.x + 3;
  }
  if(keyDown("left_arrow"))
  {
    rocket.x = rocket.x - 3;
  }
  if(space.y > 400)
    {
      space.y = 300
    }
   if(rocket.isTouching(meteorGroup))
   {
    meteorGroup.velocityY = 0;
   }


    spawnMeteor();
 }
  
   
    drawSprites();
}
function spawnMeteor()
{
  if (frameCount % 240 === 0) 
  {
     meteor = createSprite(100,100);
     meteor.x = Math.round(random(50,200));
     meteor.addImage(meteorImg);
     meteor.scale = 0.1;
     meteor.velocityY = 2;

     meteor.lifetime = 800;
  
     meteor.depth = rocket.depth;
     rocket.depth = meteor.depth + 1;
    
     meteorGroup.add(meteor);
  }
}
