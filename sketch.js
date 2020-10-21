var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(800,400);

  speed = random(55,90);
  weight = random (400,1500);
  thickness = random (22,83);
  bullet = createSprite(50, 200, 50, 50);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";

  wall = createSprite(750,200,thickness,height/2);
  wall.shapeColor = "white";

}

function draw() {
  background("black");  

  if(wall.x - bullet.x < (bullet.width + wall.width)/2){
  bullet.velocityX = 0;
  var deformation = 0.5 * weight * speed * speed/22509;
  }

  if(deformation > 180){
    bullet.shapeColor = (255,0,0);
  }

  if(deformation < 180 && deformation > 100){
  bullet.shapeColor = (230,230,0);
  }

  if(deformation > 100){
  bullet.shapeColor = (0,255,0);
  }

  if (thickness > 1/2 ){
  bullet.shapeColor = "red";
  }

  if (thickness < 1/2 ){
    bullet.shapeColor = "pink";
    }

    if (thickness = 1/2 ){
      bullet.shapeColor = "green";
      }

      if(hasCollided(bullet,wall)){
        bullet.velocityX = 0;
        var damage = 0.5 *weight *speed *speed/(thickness *thickness *thickness)
    
        if(damage > 10){
          wall.shapeColor = (255,0,0)
        }
    
        if(damage < 10){
          wall.shapeColor = (0,255,0)
        }
        }

  drawSprites();
  hasCollided();
}

function hasCollided(lbullet,lwall){
bulletRightEdge = lbullet.x + lbullet.width;
wallLeftEdge = wall.x;

if(bulletRightEdge >= wallLeftEdge){
return true;
}
return false;
}