var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600, 400);
  speed = random(55, 90);
  weight = random(400, 1500);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1000, 200, 60, height / 2);
  car.velocityX = speed;
}

function draw() {
  background(255, 255, 255);
  drawSprites();
  textSize(22);
  fill("purple");
  //1500 200 60
  if (wall.x - car.x < (car.width + wall.width) / 2) {
    var Deformation = Math.round((0.5 * weight * speed * speed) / 22500);
    if (Deformation > 180) {
      text("Lethal!  Deformation : " + Deformation, 200, 200);

      car.shapeColor = "red";
    }
    if (Deformation < 180 && Deformation > 80) {
      text("Average!  Deformation : " + Deformation, 200, 200);
      car.shapeColor = "blue";
    }
    if (Deformation < 80) {
      text("Good!  Deformation : " + Deformation, 200, 200);
      car.shapeColor = "orange";
    }
  }
}
