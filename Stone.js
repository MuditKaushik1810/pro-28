class Stone{
    constructor(x,y,radius){
        var options = {
            restitution: 0,
           // density : 1.2,
            friction : 1,
            isStatic : true,
           
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.image = loadImage("stone.png");
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        //ellipseMode(RADIUS);
        //fill("white");
        //ellipse(pos.x,pos.y,this.radius,this.radius);
        image(this.image,pos.x, pos.y,70,70);
    }
}
