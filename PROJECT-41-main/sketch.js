var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;

var player, form,game;
var dustbin1,dustbin2;
var player1, player2;
var dustbin;
var trash;
var trashGroup;
var trash1_img, trash2_img, trash3_img, trash4_img, trash5_img, trash6_img;
var dustbin1_img, dustbin2_img;
var score1 = 0, score2 = 0

function preload(){
  dustbin1_img = loadImage("images/bluedustbin.png");
  dustbin2_img = loadImage("images/greendustbin.png");
  trash1_img = loadImage("images/plasticbag.png");
  trash2_img = loadImage("images/crushedpaper.png");
  trash3_img = loadImage("images/cocacolacan.png");
  trash4_img = loadImage("images/plasticbottle.png");
  trash5_img = loadImage("images/bananapeel.png");
  trash6_img = loadImage("images/applecore.png");
  trashGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(back_img);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}