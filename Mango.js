class Mango{
    constructor(x,y,radius){
        var options = {
            restitution: 0,
            //density : 1.2,
            friction : 1,
            isStatic : true,
           
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.image = loadImage("mango.png");
        World.add(world, this.body);
    }

    display(){
        var mangoPos=this.body.position;	
		push()
		translate(mangoPos.x, mangoPos.y);
		rotate(this.body.angle)
		imageMode(CENTER);
		image(this.image, 0,0,this.radius*2, this.radius*2)
		pop()  
    }
}

/*
class mango{
	constructor(x,y,r){
		var options={
			isStatic:true,
			restitution :0,
            friction :1,
		}
		this.r=r
		this.image=loadImage("images/mango.png")
		this.body=Bodies.circle(x, y, this.r, options)
		World.add(world, this.body);
	}

	display()
	{
		var mangoPos=this.body.position;	
		push()
		translate(mangoPos.x, mangoPos.y);
		rotate(this.body.angle)
		imageMode(CENTER);
		image(this.image, 0,0,this.r*2, this.r*2)
		pop()
 }
}

*/ 
