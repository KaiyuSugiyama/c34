class Ball {
    constructor(x,y,r,options) {
        var options = {
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
    this.image = loadImage("ball.png")
    this.x=x;
    this.y=y;
    this.r=r;
    this.body=Bodies.circle(this.x, this.y, this.r/2, options);
    World.add(world, this.body);
    }
    display() 
    {
    var paperpos = this.body.position;
    paperpos.x = mouseX;
    paperpos.y = mouseY;
    push()
    translate(paperpos.x, paperpos.y);
    
    imageMode(CENTER)
    fill("black")
    image(this.image,0,0,this.r,this.r)
    pop()
    }
}