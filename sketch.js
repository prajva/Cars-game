var hypnoticBall, database;
var position;
var gameState=0;
var playerCount=0;
var form,player,game;
var allPlayer;
var car1,car2,car3,car4,cars;
var car1img,car2img,car3img,car4img;
var trackimg,groundimg;

function preload(){
  car1img=loadImage("images/car1.png");
  car2img=loadImage("images/car2.png");
  car3img=loadImage("images/car3.png");
  car4img=loadImage("images/car4.png");
  trackimg=loadImage("images/track.jpg");
  groundimg=loadImage("images/ground.png");
}

function setup(){
  database = firebase.database();
  createCanvas(displayWidth-50,displayHeight-200);
  game=new Game();
  game.getState();
  game.start();


}

function draw(){
  //background("white");
  if(playerCount===4){
    game.update(1);
  }
  if(gameState===1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end();
  }

  
}
