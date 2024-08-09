let cor;
let posicaoHorizontal; // x
let posicaoVertical; // y

function setup() {
    createCanvas(400, 400);
  background(178,34,34)
  cor = color (random(0,169),random(0,130),random(0,128));
  posicaoHorizontal = 200;
  posicaoVertical = 200;
}

function draw() {
    fill(cor)
  circle(posicaoHorizontal,posicaoVertical,50);
  
  if(mouseX < posicaoHorizontal) {
    posicaoHorizontal = posicaoHorizontal -1;
  }
  
    if(mouseX > posicaoHorizontal) {
    posicaoHorizontal = posicaoHorizontal +1;
   }
  
   if(mouseY < posicaoVertical) {
    posicaoVertical = posicaoVertical -1;
   }
  
  if(mouseY > posicaoVertical) {
    posicaoVertical = posicaoVertical +1;
   }
  
  if(mouseIsPressed){
    cor = color (random(0,169),random(0,130),random(0,128));
  }
 }