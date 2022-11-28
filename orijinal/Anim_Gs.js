// Animation G
//3G.png
class Anim_Gs {
	constructor(velocity,img,octave) {
		this.velocity=velocity;
		this.octave=octave;
        this.img=img;
		this.x = width/62*((octave-1)*12+9);
		this.y = (this.velocity)*height+random(-10,10);
		this.diameter = 0;
		this.alpha = 255;
		console.log (this.velocity);
		console.log (this.y);
		console.log (octave);
		console.log (this.x);
		this.color = [
			{r:41,  g:96,   b:109,  a:255},//1Ds
			{r:49,  g:117,   b:137,  a:255},//2Ds
			{r:61,  g:145,   b:179,  a:255},//3Ds
			{r:121, g:207,   b:226, a:255},//4Ds
			{r:158, g:224,   b:239, a:255},//5Ds
			
		
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