class Bob {
  

    constructor(x, y) {
      var options = {
          'isStatic':false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, 20);
       this.radius = 20; 
      
      
      World.add(world, this.body);
    }
    display(){
      

      var angle = this.body.angle;
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("red");
      circle(0, 0, this.radius);
      pop();
    }
  }
  