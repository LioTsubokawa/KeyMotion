// Animation A
//4A.png
class Anim_A {
	constructor(velocity,img,octave) {
		this.velocity=velocity;
		this.octave=octave;
        this.img=img;
		this.x = width/62*((octave-2)*12+10);
		this.y = (this.velocity)*height+random(-10,10);
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
		push();
		translate(this.x,this.y);
		rotate(PI / ((this.velocity)/15));
		scale(this.velocity*0.8);
		tint(this.color[this.octave-2].r, this.color[this.octave-2].g, this.color[this.octave-2].b);
		image(this.img, 0,0,width/26,width/26 );
		pop();
	} 
	
}