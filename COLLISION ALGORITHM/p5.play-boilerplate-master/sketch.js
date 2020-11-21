function setup() {
  createCanvas(800,400);
 movingrect=createSprite(200,300,50,100)
 movingrect.velocityY=-2;
 fixedrect=createSprite(400,300,100,50)
 fixedrect.velocityY=+2;
 movingrect.debug=true;
 fixedrect.debug=true;
 movingrect.shapeColor="blue";
 fixedrect.shapeColor="blue";
}

function draw() {
  background(255,255,255);  
  movingrect.x=mouseX;
  movingrect.y=mouseY;
  
  if(movingrect.x-fixedrect.x<=movingrect.width/2+fixedrect.width/2 &&
    fixedrect.x-movingrect.x<=movingrect.width/2+fixedrect.width/2 && 
    movingrect.y-fixedrect.y<=movingrect.height/2+fixedrect.height/2&&
    fixedrect.y-movingrect.y<=movingrect.height/2+fixedrect.height/2)
    {
    movingrect.shapeColor="red";
    fixedrect.shapeColor="red";
  }
  else{
    movingrect.shapeColor="blue";
   fixedrect.shapeColor="blue";
  }
  
if (movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2 &&
  fixedrect.x-movingrect.x<=movingrect.width/2+fixedrect.width/2
  ) {
    movingrect.velocityX=movingrect.velocityX*(-1);
    fixedrect.velocityX = fixedrect.velocityX * (-1);


    
}

if ( movingrect.y-fixedrect.y<=movingrect.height/2+fixedrect.height/2&&
  fixedrect.y-movingrect.y<=movingrect.height/2+fixedrect.height/2)
{
  movingrect.velocityY=movingrect.velocityY*(-1);
  fixedrect.velocityY = fixedrect.velocityY * (-1);

}





  drawSprites();
}
