// Animation A
//4A.png
class Anim_A {
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
		image(this.img, 0,0,width/26,width/26 );
		pop();
	} 
	
}