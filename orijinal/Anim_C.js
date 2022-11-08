// Animation C
//3C.png
class Anim_C {
	constructor(velocity,img) {
		this.velocity=velocity;
        this.img=img;
		this.x = random(width);
		this.y = (this.velocity)*height+random(-10,10);
		this.diameter = 0;
		this.alpha = 255;
		console.log (this.velocity);
		console.log (this.y);
	}
	draw() {
		push();
		translate(width*0.05,this.y);
		rotate(PI / ((this.velocity)/15));
		scale(this.velocity*0.5);
		// tint(100,100,100);
		image(this.img, 0,0,width/26,width/26 );
		pop();
	} 
	
}