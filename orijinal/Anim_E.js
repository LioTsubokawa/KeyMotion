// Animation C
//3E.png
class Anim_E {
	constructor(velocity,img,octave) {
		this.velocity=velocity;
		this.octave=octave;
        this.img=img;
		this.x = width/62*((octave-1)*12+5);
		this.y = (this.velocity)*height+random(-10,10);
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
		push();
		translate(this.x,this.y);
		rotate(PI / ((this.velocity)/15));
		scale(this.velocity*0.8);
		tint(this.color[this.octave-1].r, this.color[this.octave-1].g, this.color[this.octave-1].b);
		image(this.img, 0,0,width/26,width/26 );
		pop();
	} 
}