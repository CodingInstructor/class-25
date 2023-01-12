class Bird{
    constructor(x,y){
        var options = {
            isStatic:false,
            restitution:0.5
        }
        this.body=Bodies.rectangle(x,y,50,50,options)
        this.width = 50
        this.height = 50
        this.image = loadImage("images/bird.png")
        World.add(world,this.body)
    }
  
    display(){
  
        imageMode(CENTER);
      push()
      this.body.position.x = mouseX
      this.body.position.y = mouseY
        translate(this.body.position.x, this.body.position.y)
        rotate(this.body.angle)
        fill("blue")
        image(this.image,0,0, this.width, this.height);
       pop() 
    }
  }