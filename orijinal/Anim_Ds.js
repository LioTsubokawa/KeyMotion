// Animation Ds
//3D#.png
class Anim_Ds {
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
		translate(width*0.1,this.y);
		rotate(PI / ((this.velocity)/15));
		scale(this.velocity);
		image(this.img,0,0,width/26,width/26);
		pop();
	}


}