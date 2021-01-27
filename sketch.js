var weight,speed
var bullet
var wall,thickness;




function setup() {
  createCanvas(1600,400);
  
  thickness = random(22,83)
  speed = random(5,10)
  weight = random(30 , 52)
  wall = createSprite(1200,200,thickness,200);
  
  bullet = createSprite(100,200,60,20);

}

function draw() {
  background(0);

  
 
 
 

  bullet.velocityX=speed

  if (wall.x-bullet.x<(bullet.width+wall.width)/2){

     bullet.velocityX= 0
     var damage = 0.5*weight*speed*speed/(thickness*3)
     console.log(damage)
     textSize(15)

    if (damage>10){

            wall.shapeColor = color(255,0,0)
           
    }

    if   (damage<10){

      wall.shapeColor = color(0,255,0)
      


    }

   
  }

  drawSprites();
}