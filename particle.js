class particle {
  constructor(x, y) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':0.2
    }
    this.body = Bodies.circle(x, y,10, options);
    this.radius = 10;
    this.color=color(random(0,255),random(0,255),random(0,255))
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
   
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(RADIUS);
    fill(this.color);
    //stroke("red")
    //strokeWeight(4)
    ellipse(0, 0, this.radius,this.radius);
    pop();
    

  }
};
