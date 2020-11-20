class Stone{
    constructor(x,y,radius){
        var options = {
            restitution: 0,
            density : 1.2,
            friction : 1,
            isStatic : false,
           
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.image = loadImage("stone.png");
        World.add(world, this.body);
    }

    display(){
        var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			fill(255,0,255)
			imageMode(CENTER);
			ellipseMode(RADIUS)
			image(this.image, 0,0,this.r*2, this.r*2)
			pop()			    
    }
}

/*
class stone{
	constructor(x,y,r){
		var options={
			isStatic:false,
			restitution:0,
			friction:1,
			density:1.2
		}
		this.r=r
		this.image=loadImage("images/stone.png");
		this.body=Bodies.circle(x, y, this.r/2, options)
		World.add(world, this.body);

	}
	display(){
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			fill(255,0,255)
			imageMode(CENTER);
			ellipseMode(RADIUS)
			image(this.image, 0,0,this.r*2, this.r*2)
			pop()			
	}

}
*/
