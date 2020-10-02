var car1,car2,car3,car4;
var line1,line2,line3;
var vel1,vel2,vel3,vel4;
var wei1,wei2,wei3,wei4;
var wall1,wall2,wall3,wall4;
function setup() {
createCanvas(1600,400);
//creating cars random velocity
 vel1  = random(55,90);
 vel2 = random(55,90);
 vel3 = random(55,90);
 vel4 = random(55,90);
 //creating random weight
 wei1 = random(400,1500);
 wei2 = random(400,1500);
 wei3 = random(400,1500);
 wei4 = random(400,1500);
 //creating cars
 car1 = createSprite(20,50,20,10);
 car2 = createSprite(20,150,20,10);
 car3 = createSprite(20,250,20,10);
 car4 = createSprite(20,350,20,10);
 //giving the cars shapecolors
car1.shapeColor="white";
car2.shapeColor = "white";
car3.shapeColor = "white";
car4.shapeColor = "white";
//giving the cars velocity
car1.velocityX = vel1;
car2.velocityX = vel2;
car3.velocityX = vel3;
car4.velocityX = vel4;
//creating lines
line1 = createSprite(800,100,1600,10);
line2 = createSprite(800,200,1600,10);
line3 = createSprite(800,300,1600,10);
//creating wall
wall1 = createSprite(1200,200,30,400);
//coloring the wall
wall1.shapeColor = "blue";
//making the wall work


  }

function draw() {
  background(23, 22, 22);  
  console.log( World.mouseX);
  console.log( World.mouseY);
  if(wall1.x-car1.x < (car1.width+wall1.width)/2)
  {
    car1.velocityX = 0;
    car1.depth = wall1.depth;
    console.log(car1.x);
    car1.x = 1175;
    var formula = 0.5*wei1*vel1*vel1/22509;
    if(formula > 180){
      car1.shapeColor ="red";
    }
    if(formula < 180 && formula > 100){
      car1.shapeColor = "yellow";
    }
    if(formula < 100){
      car1.shapeColor = "green";
      
    }
  }
  if(wall1.x-car2.x < (car2.width+wall1.width)/2)
  {
    car2.velocityX = 0;
    car2.depth = wall1.depth;
    car2.x = 1175;
    var formula = 0.5*wei2*vel2*vel2/22509;
    if(formula > 180){
      car2.shapeColor ="red";
    }
    if(formula < 180 && formula > 100){
      car2.shapeColor = "yellow";
    }
    if(formula < 100){
      car2.shapeColor = "green";
      
    }
        }
    if(wall1.x-car3.x < (car3.width+wall1.width)/2)
  {
    car3.velocityX = 0;
    car3.depth = wall1.depth;
    car3.x = 1175;
    var formula = 0.5*wei3*vel3*vel3/22509;
    if(formula > 180){
      car3.shapeColor ="red";
    }
    if(formula < 180 && formula > 100){
      car3.shapeColor = "yellow";
    }
    if(formula < 100){
      car3.shapeColor = "green";
      
    }
    }
    if(wall1.x-car4.x < (car4.width+wall1.width)/2)
  {
    car4.velocityX = 0;
    car4.depth = wall1.depth;
    car4.x = 1175;
    var formula = 0.5*wei4*vel4*vel4/22509;
    if(formula > 180){
      car4.shapeColor ="red";
    }
    if(formula < 180 && formula > 100){
      car4.shapeColor = "yellow";
    }
    if(formula < 100){
      car4.shapeColor = "green";
      
      
    }
    }
  drawSprites();
}



