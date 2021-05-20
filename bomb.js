class Bomb{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.x=x;
        this.y=y;
        this.r=r;
       
        this.body=Bodies.circle(this.x,this.y,this.r,options);
        World.add(world,this.body);
        this.image = loadImage("terrorist 3.gif");
        
        this.Visiblity = 255;
    }
    display(){

        var pos = this.body.position;

        push();
        translate(pos.x,pos.y);
      if(this.body.position.y>350){

       this.Visiblity = this.Visiblity - 10;
       
       tint(255,this.Visiblity); 
      }
       rectMode(CENTER);
        strokeWeight(3);
        fill(255,0,255);
        imageMode(CENTER);
        image(this.image,0,0,this.r);
        pop();
    }
}
