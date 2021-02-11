class Building {
    constructor(x,y,width,height) {
      var options = {
          density:1.2,
          friction:0.4
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.image = loadImage("building.png")
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      fill(181,101,29);
      image(this.image,pos.x, pos.y, this.width, this.height);
    }
  };
