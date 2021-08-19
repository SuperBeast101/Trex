
var box;

function setup() 
{
  createCanvas(400,400);
  box = createSprite(10,10,30,30);  
  
}

function draw() 
{
  background(30);
  background("white");
  if(keyDown("up"))
  {
    box.position.y = box.position.y - 2; 
    
  }
  drawSprites();
}




