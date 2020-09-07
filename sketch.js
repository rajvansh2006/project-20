var car,wall;
var speed,weight;
var deformation;

function setup() {
  speed=random(55,90);
  weight=random(400,1500);
  createCanvas(1400,400);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1300,200,60,height/2);
  wall=color(80,80,80);
  car.velocityX=speed;
  
 

}
function draw() {
  background(200,255,255);  
  if(wall.x - car.x <= car.width/2+wall.width/2){
    car.velocityX=0;
    deformation=(0.5 * weight * speed * speed)/22500; 
  }
    if (deformation>180){
      car.shapeColour=color(255,0,0);
    }
    
    if (deformation<180 && deformation>100){
      car.shapeColour=color(230,230,0);
    }
    
    if (deformation>100){
      car.shapeColour=color(0,255,0);
    }
    
    
    
    
    
      

  drawSprites()
}