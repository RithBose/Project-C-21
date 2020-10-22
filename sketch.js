var car
var speed, weight , thickness
function setup() {
  createCanvas(1600,400);
  
  car= createSprite(50,200,50,10);
 
  car.velocityX=  random(55,90)
  wall= createSprite(1500,200,thickness,height/2)
  speed= random(223,329)
  weight= random(30,52)
  thickness= random(22,83)
}

function draw() {
  background(80,80,80);  
  
if(hasCollided(car,wall))
{
  car.velocityX=0;
  var damage= 0.5* weight* speed* speed/(thickness*thickness*thickness);

  if(damage>10)
  {
    wall.shapeColor= ("red")
  }
  if(damage<10)
  {
    wall.shapeColor= ("green")
  }
}
  drawSprites();
}
function hasCollided (lcar, lwall)
{
  carRightEdge= lcar.x + lcar.width;
  wallLeftEdge = lwall.x
  if(carRightEdge>=wallLeftEdge)
  {
return  true 
  }
  return false
}
