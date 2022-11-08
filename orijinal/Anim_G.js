// Animation G
//3G.png
class Anim_G {
	constructor(velocity) {
		this.velocity=velocity;
        this.img=img;
		this.x = random(width);
		this.y = (this.velocity)*height-width/26;
		this.diameter = 0;
		this.alpha = 255;
		console.log (this.velocity);
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