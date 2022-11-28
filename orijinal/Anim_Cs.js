

// Animation Cs
//4Cs.jpg
class Anim_Cs {
	constructor(velocity,img,octave) {
		this.velocity=velocity;
		this.octave=octave;
        this.img=img;
		this.x = width/62*((octave-1)*12+2);
		this.y = (this.velocity)*height+random(-10,10);
		this.diameter = 0;
		this.alpha = 255;
		console.log (this.velocity);
		console.log (this.y);
		console.log (octave);
		console.log (this.x);
		this.color = [
			{r:109, g:43,  b:63,  a:255},//1Cs
			{r:155, g:58,  b:88,  a:255},//2Cs
			{r:178, g:57,  b:83,  a:255},//3Cs
			{r:209, g:113, b:139, a:255},//4Cs
			{r:226, g:159, b:183, a:255},//5Cs
			
		
		];
	}
	draw() {
		push();
		translate(this.x,this.y);
		rotate(PI / ((this.velocity)/15));
		scale(this.velocity*0.8);
		tint(this.color[this.octave-1].r, this.color[this.octave-1].g, this.color[this.octave-1].b);
		image(this.img,0,0,width/26,width/26 );
		pop();
	}
}



