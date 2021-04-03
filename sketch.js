var catimage
var mouseimage
var cats,mouses
var mouseimage2
function preload() {
    catimage=loadImage("images/cat2.png")
    mouseimage=loadImage("images/mouse1.png")
    mouseimage2=loadImage("images/mouse2.png")
}

function setup(){
    createCanvas(1000,800);
    cats=createSprite(800,400,100,100)
    cats.addImage(catimage)
    cats.scale=0.2
    mouses=createSprite(100,400,100,100)
    mouses.addImage(mouseimage)
mouses.scale=0.2
}

function draw() {

    background("brown");
    //Write condition here to evalute if tom and jerry collide
    var bar=isTouching(cats,mouses)
    if (bar==true){
        mouses.addImage(mouseimage2)   
    }
    else{
        mouses.addImage(mouseimage)
    }
    drawSprites();
}


function keyPressed(){

  if (keyCode==LEFT_ARROW)
  {
      cats.x=cats.x-7
  }


}
function isTouching(m,r)
{
  if(m.x-r.x <= 50 && r.x-m.x <=50
   && m.y-r.y<=50 && r.y-m.y <=50
    )
  {
    return true 
    
  }
  else{
    return false 
    
  }
}