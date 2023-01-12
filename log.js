class Log{
    constructor(x,y,w,angle){
        var options={
            isStatic:false,
            restitution:0.5,
            friction:1
        }
        this.body = Bodies.rectangle(x,y,w,20,options)
        this.width=w
        this.height=20
        this.image = loadImage("images/wood2.png")
       Matter.Body.setAngle(this.body,angle)
        World.add(world,this.body)
    }

    display(){
        imageMode(CENTER)
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        fill("red")
        image(this.image,0,0,this.width,this.height)
        pop()
    }
}