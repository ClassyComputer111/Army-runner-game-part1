class Terrorist{
     constructor(x,y,w,h){
      var options={
        
     }
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h
  this.body = Bodies.rectangle(x,y,w,h,options)
  World.add(world, this.body)
    }
  display() {
    var terrPos=this.body.position;		

    push()
    translate(terrPos.x, terrPos.y);
    rectMode(CENTER)
    //strokeWeight(4);
    fill("yellow")
    rect(0,0,this.w, this.h);
    pop()
    
  }
}