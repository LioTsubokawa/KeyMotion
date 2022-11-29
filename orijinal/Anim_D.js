// Animation D
//3D.png
class Anim_D {
	
	constructor(velocity,img,octave) {
		this.velocity=velocity;
		this.octave=octave;
        this.img=img;
		this.x = width/62*((octave-1)*12+3);
		this.y = (this.velocity)*height+random(-10,10);
		this.diameter = 0;
		this.alpha = 255;
		console.log (this.velocity);
		console.log (this.y);
		console.log (octave);
		console.log (this.x);
		this.color = [
			{r:107, g:42,  b:60,  a:255},//1D
			{r:137, g:47,  b:70,  a:255},//2D
			{r:178, g:57,  b:83,  a:255},//3D
			{r:224, g:108, b:144, a:255},//4D
			{r:244, g:149, b:188, a:255},//5D
			
		
		];
	}
	draw() {
		push();
		translate(
			this.x + map(noise(frameCount * 0.01 + this.velocity + this.octave*10),0,1,-(width*0.01),width*0.01) ,
			this.y + map(noise(frameCount * 0.01 + this.velocity + this.octave*10),0,1,-(width*0.01),width*0.05)
		);
		rotate(PI / ((this.velocity)/15));
		scale(this.velocity*0.8);
		tint(this.color[this.octave-1].r, this.color[this.octave-1].g, this.color[this.octave-1].b);
		image(this.img,0,0,width/26,width/26 );
		pop();
	} 
}