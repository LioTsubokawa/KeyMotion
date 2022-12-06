// Animation F
//3F.png
class Anim_F {
	constructor(velocity,img,octave) {
		this.velocity=velocity;
		this.octave=octave;
        this.img=img;
		this.x = width/62*((octave-1)*12+6);
		this.px = this.x;
		this.y = (this.velocity)*height+random(-10,10);
		this.py = this.y;
		this.diameter = 0;
		this.alpha = 255;
		console.log (this.velocity);
		console.log (this.y);
		console.log (octave);
		console.log (this.x);
		this.color = [
			{r:124,  g:93,   b:72,  a:255},//1Ds
			{r:153,  g:114,   b:85,  a:255},//2Ds
			{r:185,  g:138,   b:98,  a:255},//3Ds
			{r:219, g:177,   b:145, a:255},//4Ds
			{r:239, g:205,   b:182, a:255},//5Ds
			
		
		];
	}
	draw() {

		this.px = this.x + map(noise(frameCount * 0.01 + this.velocity + this.octave*10),0,1,-(width*0.03),width*0.03);
		this.py = this.y + map(noise(frameCount * 0.01 + this.velocity + this.octave*10),0,1,-(width*0.03),width*0.03);

		push();
		translate(
			this.px,
			this.py
		);
		rotate(PI / ((this.velocity)/15));
		scale(this.velocity*0.8);
		tint(
			this.color[this.octave-1].r,
			this.color[this.octave-1].g,
			this.color[this.octave-1].b,
			this.alpha
		);
		image(this.img, 0,0,width/26,width/26 );
		pop();
		this.alpha -= 3;
	}

	
	
	join(animations) {
		animations.forEach((animation) => {
			const dis = dist(this.x, this.y, animation.x, animation.y);
			
			if (dis < window.threshold) {
				stroke(
					this.color[this.octave - 1].r,
					this.color[this.octave - 1].g,
					this.color[this.octave - 1].b,
					this.alpha
					);
				line(this.px, this.py, animation.px, animation.py);
			 }
		});
	}
	
}