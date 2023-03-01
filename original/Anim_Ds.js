// Animation Ds
//3D#.png
class Anim_Ds {
	constructor(velocity,img,octave) {
		this.velocity=velocity;
		this.octave=octave;
        this.img=img;
		this.x = width/64*((octave-1)*12+4);
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
			{r:80,  g:94,   b:56,  a:255},//1Ds
			{r:114, g:135,  b:81,  a:255},//2Ds
			{r:143, g:173,  b:101, a:255},//3Ds
			{r:178, g:198,  b:147, a:255},//4Ds
			{r:206, g:219,  b:185, a:255},//5Ds
			
		
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
		image(this.img,0,0,width/26,width/26);
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