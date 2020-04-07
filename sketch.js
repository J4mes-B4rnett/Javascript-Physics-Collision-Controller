
//Made by @Slurp1e, James B

var player_left_pressed = false;
var player_right_pressed = false;

//Define Platform Objects
var platform = {
  x: 200,
  y: 200,
  dir: 0,
  display: function(){
    rect(this.x, this.y, 200, 10);
    if (this.dir == 0){
      this.x += 1;
    }
    else {
      this.x -= 1;
    }
    
    if (this.x >= width){
      this.dir = 1;
    } else if (this.x <= 0){
      this.dir = 0;
    }
  }
}

var platform_2 = {
  x: 300,
  y: 450,
  dir: 0,
  display: function(){
    rect(this.x, this.y, 200, 10);
    
    if (this.dir == 0){
      this.x += 1;
    }
    else {
      this.x -= 1;
    }
    
    if (this.x >= width){
      this.dir = 1;
    } else if (this.x <= 0){
      this.dir = 0;
    }
  }
}
var platform_3 = {
  x: 300,
  y: 450,
  dir: 0,
  display: function(){
    rect(this.x, this.y, 200, 10);
    
    if (this.dir == 0){
      this.x += 1;
    }
    else {
      this.x -= 1;
    }
    
    if (this.x >= width){
      this.dir = 1;
    } else if (this.x <= 0){
      this.dir = 0;
    }
  }
}
var platform_4 = {
  x: 300,
  y: 450,
  dir: 0,
  display: function(){
    rect(this.x, this.y, 200, 10);
    
    if (this.dir == 0){
      this.x += 1;
    }
    else {
      this.x -= 1;
    }
    
    if (this.x >= width){
      this.dir = 1;
    } else if (this.x <= 0){
      this.dir = 0;
    }
  }
}

//Define Player Object
var player = {
  x: 200,
  y: 200,
  vel: 3,
  acc: 0.4,
  
  xvel: 0,
  xacc: 0.3,
  
  display: function(){
    ellipse(this.x, this.y, 30);
    this.y += this.vel;
    this.vel += this.acc;
    noFill();
    strokeWeight(2);
    
    if (this.y >= height){
      this.vel = -8; 
    }
    
    if (player_left_pressed){
      this.x -= 5; 
    }
    if (player_right_pressed){
      this.x += 5; 
    }
    
    this.x += this.xvel; 
    
    if (this.x >= width){
      this.xvel = -12;
    }
    if (this.x <= 0){
      this.xvel = 12;
    }
    
    if (this.xvel < 0){
      this.xvel += 0.5; 
    }
    if (this.xvel > 0){
      this.xvel -= 0.5;
    }
    
    if (this.y <= 0){
      this.vel = 15; 
    }
    
    //Collision
    
    if (this.x >= platform.x && this.x <= platform.x+200 && this.y <= platform.y && this.y >= platform.y - 20){
      this.vel = -11;
    }
    
    if (this.x >= platform_2.x && this.x <= platform_2.x+200 && this.y <= platform_2.y && this.y >= platform_2.y - 20){
      this.vel = -11;
    }
    if (this.x >= platform_3.x && this.x <= platform_3.x+200 && this.y <= platform_3.y && this.y >= platform_3.y - 20){
      this.vel = -11;
    }
    
    if (this.x >= platform_4.x && this.x <= platform_4.x+200 && this.y <= platform_4.y && this.y >= platform_4.y - 20){
      this.vel = -11;
    }
    
  },
}

//Set Random Positions For Platforms
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  platform.x = random(0, width);
  platform.y = random(0, height);
  platform_2.x = random(0, width);
  platform_2.y = random(0, height);
  platform_3.x = random(0, width);
  platform_3.y = random(0, height);
  platform_4.x = random(0, width);
  platform_4.y = random(0, height);
}

//Render Platforms and Player
function draw() {
  background(256, 120);
  player.display();
  platform.display();
  platform_2.display();
  platform_3.display();
  platform_4.display();
}

//Movement
function keyPressed(){
  if(key==' '){
    player.vel = -8; 
  }
  
  if (key == 'a' || key == 'A'){
    player_left_pressed = true;
  }
  
  if (key == 'd' || key == 'D'){
    player_right_pressed = true;
  }
}

function keyReleased(){
   if (key == 'a' || key == 'A'){
    player_left_pressed = false;
  }
  
  if (key == 'd' || key == 'D'){
    player_right_pressed = false;
  }
}