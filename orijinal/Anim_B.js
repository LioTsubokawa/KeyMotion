// Animation B
//4B.png
class Anim_B {
	constructor(velocity,img,octave) {
		this.velocity=velocity;
		this.octave=octave;
        this.img=img;
		this.x = width/62*((octave-2)*12+12);
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
			{r:142, g:111,  b:122,  a:255},//1
			{r:178, g:135,  b:149,  a:255},//2
			{r:211, g:157,  b:173,  a:255},//3
			{r:242, g:214,  b:223,  a:255},//4
			{r:255, g:233,  b:241,  a:255},//5
			{r:255, g:233,  b:241,  a:255},//6
			
		
		];
	}
	draw() {
        console.log (this.x);
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