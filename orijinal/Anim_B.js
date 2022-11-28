// Animation B
//4B.png
class Anim_B {
	constructor(velocity,img,octave) {
		this.velocity=velocity;
		this.octave=octave;
        this.img=img;
		this.x = width/60*((octave-2)*12+12);
		this.y = (this.velocity)*height+random(-10,10);
		this.diameter = 0;
		this.alpha = 255;
		console.log (this.velocity);
		console.log (this.y);
		console.log (octave);
		console.log (this.x);
		this.color = [
			{r:142, g:111,  b:122,  a:255},//1D
			{r:178, g:135,  b:149,  a:255},//2D
			{r:211, g:157,  b:173,  a:255},//3D
			{r:242, g:214,  b:223,  a:255},//4D
			{r:255, g:233,  b:241,  a:255},//5D
			
		
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