class Pig{
    constructor(x,y){
        var options = {
            isStatic:false,
            restitution:0.5
        }
        this.body=Bodies.rectangle(x,y,40,40,options)
        this.width = 40
        this.height = 40
        this.image = loadImage("images/enemy.png")
        World.add(world,this.body)
    }

    display(){
        imageMode(CENTER);
    push()
      translate(this.body.position.x, this.body.position.y)
      rotate(this.body.angle)
      fill("pink")
      image(this.image,0,0, this.width, this.height);
     pop() 
    }
}