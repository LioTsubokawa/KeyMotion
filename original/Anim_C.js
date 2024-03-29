// Animation C
//3C.png
class Anim_C {

	constructor(velocity,img,octave) {

		this.velocity=velocity;
		this.octave=octave;
        this.img=img;
		this.x = width/64*((octave-1)*12+1);
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
			{r:153, g:49,  b:49,  a:255},//1C
			{r:46,  g:114, b:114, a:255},//2C
			{r:227, g:68,  b:61,  a:255},//3C
			{r:75,  g:189, b:198, a:255},//4C
			{r:234, g:150, b:150, a:255},//5C
			{r:182, g:255, b:255, a:255},//6C
		
		];

		
	}

	draw() {

		this.px = this.x + map(noise(frameCount * 0.01 + this.velocity + this.octave*10),0,1,-(width*0.03),width*0.03) ;
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

	join(animations){
		animations.forEach((animation) =>{
			const dis = dist(this.x, this.y, animation.x,animation.y);
			if (dis < window.threshold ) {
				stroke(
					this.color[this.octave-1].r,
					this.color[this.octave-1].g,
					this.color[this.octave-1].b,
					this.alpha 
				);

				line(this.px,this.py,animation.px,animation.py);
			}
		});
	}
	
	
}

