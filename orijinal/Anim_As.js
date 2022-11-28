// Animation As
//4As.png
class Anim_As {
	constructor(velocity,img,octave) {
		this.velocity=velocity;
		this.octave=octave;
        this.img=img;
		this.x = width/62*((octave-2)*12+11);
		this.y = (this.velocity)*height+random(-10,10);
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
		push();
		translate(this.x,this.y);
		rotate(PI / ((this.velocity)/15));
		scale(this.velocity*0.8);
		tint(this.color[this.octave-2].r, this.color[this.octave-2].g, this.color[this.octave-2].b);
		image(this.img, 0,0,width/26,width/26 );
		pop();
	} 
	
}