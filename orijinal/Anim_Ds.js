// Animation Ds
//3D#.png
class Anim_Ds {
	constructor(velocity,img,octave) {
		this.velocity=velocity;
		this.octave=octave;
        this.img=img;
		this.x = width/62*((octave-1)*12+4);
		this.y = (this.velocity)*height+random(-10,10);
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
		push();
		translate(this.x,this.y);
		rotate(PI / ((this.velocity)/15));
		scale(this.velocity*0.8);
		tint(this.color[this.octave-1].r, this.color[this.octave-1].g, this.color[this.octave-1].b);
		image(this.img,0,0,width/26,width/26);
		pop();
	}


}