class Chain{

    constructor(bodyA,bodyB){

        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:3,
            length:0.05
        }
        this.chain=Constraint.create(options);
        World.add(world,this.chain);
    }

    display(){
    
        var pointA;
        pointA=this.chain.bodyA.position;
        var pointB; pointB=this .chain.bodyB.position;

       strokeWeight(10);
       

        line (pointA.x,pointA.y,pointB.x,pointB.y);

    }
}

