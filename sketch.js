//declaring the variables
var wall, car;
var speed, weight;

function setup()
{
  //creating the canvas
  createCanvas(1600,400);

  //giving random values to variables
  speed = random(55,90);
  weight = random(400,1500);

  //creaitng the car
  car = createSprite(50,200,50,50);
  car.shapeColor = color(255);

  //setting the speed of the car
  car.velocityX = speed;

  //creating the wall
  wall = createSprite(1300,200,60, height/2);
  wall.shapeColor = color(80,80,80);
}

function draw()
{
  //creating the background
  background(0);
  
  if (wall.x-car.x < (car.width + wall.width/2))
  {
    car.velocityX = 0;
    var deformation =0.5 *weight *speed *speed/25509;
    if (deformation>180)
    {
      car.shapeColor=color(255,0,0);
    }
    if (deformation<180 && deformation > 100)
    {
     car.shapeColor = color(230,230,0); 
    }
    if (deformation<100)
    {
      car.shapeColor= color(0,255,0);
    }
  }
  

  
  //drawing the Sprites
  drawSprites();
}
