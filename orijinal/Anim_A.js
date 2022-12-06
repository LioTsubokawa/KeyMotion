// Animation A
//4A.png
class Anim_A {
	constructor(velocity,img,octave) {
		this.velocity=velocity;
		this.octave=octave;
        this.img=img;
		this.x = width/62*((octave-2)*12+10);
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
			{r:114, g:68,  b:96,  a:255},//1D
			{r:142, g:82,  b:116,  a:255},//2D
			{r:183, g:105,  b:147,  a:255},//3D
			{r:219, g:158, b:193, a:255},//4D
			{r:242, g:201, b:227, a:255},//5D
			
		
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