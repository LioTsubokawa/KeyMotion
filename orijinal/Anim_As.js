// Animation As
//4As.png
class Anim_As {
	constructor(velocity,img,octave) {
		this.velocity=velocity;
		this.octave=octave;
        this.img=img;
		this.x = width/62*((octave-2)*12+11);
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
			{r:67, g:59,  b:76,  a:255},//1D
			{r:97, g:86,  b:107,  a:255},//2D
			{r:147, g:123,  b:162,  a:255},//3D
			{r:191, g:183, b:196, a:255},//4D
			{r:212, g:206, b:216, a:255},//5D
			
		
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
			this.color[this.octave-2].r,
			this.color[this.octave-2].g,
			this.color[this.octave-2].b,
			this.alpha);
		image(this.img, 0,0,width/26,width/26 );
		pop();
		this.alpha -= 3;
	} 

	join(animations) {
		animations.forEach((animation) => {
			const dis = dist(this.x, this.y, animation.x, animation.y);
			if (dis < window.threshold) {
				stroke(
					this.color[this.octave - 2].r,
					this.color[this.octave - 2].g,
					this.color[this.octave - 2].b,
					this.alpha
					);
				line(this.px, this.py, animation.px, animation.py);
			}
		});
	}
	
}