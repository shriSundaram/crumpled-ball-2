class dustbin
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution:0.3
			}
		this.x=x;
		this.y=y;
		this.r=r;
		this.body=Bodies.circle(this.x, this.y, this.r/2, options);
		this.image = loadImage("dustbingreen.png");
		World.add(world, this.body);

	}
	display()
	{	
		var paperpos=this.body.position;		

		push()
		translate(paperpos.x, paperpos.y);
		imageMode(CENTER);
		image(this.image,0, -150, this.width, this.height);
		pop();
			
	}

}