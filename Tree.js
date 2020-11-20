class Tree{
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("tree.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(Image);
      fill("RED");
      image(this.image,pos.x, pos.y, this.width, this.height);
     // rect(pos.x, pos.y, this.width, this.height);
    }
  }


  /*
  class tree{
	constructor(){		
		
		this.image=loadImage("images/tree.png")
	}
	display(){
			
			imageMode(CENTER);
			image(this.image,1050,300,600,600)
			
			
	}

}

  */