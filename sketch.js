var canvas;
var gameState = 0;
var playerCount = 0;
var quiz;
var question;
var constant;
var database;
var player;

function setup(){
  canvas = createCanvas(1300,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
  
  if(playerCount === 4){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
  
}
