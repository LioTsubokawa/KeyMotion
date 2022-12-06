// Animation C
//3E.png
class Anim_E {
	constructor(velocity,img,octave) {
		this.velocity=velocity;
		this.octave=octave;
        this.img=img;
		this.x = width/62*((octave-1)*12+5);
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
			{r:65,  g:109,   b:56,  a:255},//1Ds
			{r:82,  g:145,   b:71,  a:255},//2Ds
			{r:98,  g:179,   b:86,  a:255},//3Ds
			{r:147, g:214,   b:135, a:255},//4Ds
			{r:184, g:234,   b:173, a:255},//5Ds
			
		
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