class Ground {
    constructor(x,y){
        var option = {
            isStatic:true,
       restitution:0,
       density:0.5,
       speed:10
        }
       this.body=Bodies.rectangle(x,y,1000,0.5,option)
     this.width=1000
     this.height=0.5
       World.add(world,this.body)
      this.Visibility=0
       
        }
    display(){
        var pos = this.body.position
        rectMode(CENTER)
        rect(pos.x,pos.y,this.width,this.height)
       
        
        
    }
    }