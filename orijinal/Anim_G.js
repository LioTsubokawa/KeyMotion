// Animation G
//3G.png
class Anim_G {
	constructor(velocity,img,octave) {
		this.velocity=velocity;
		this.octave=octave;
        this.img=img;
		this.x = width/62*((octave-1)*12+8);
		this.y = (this.velocity)*height+random(-10,10);
		this.diameter = 0;
		this.alpha = 255;
		console.log (this.velocity);
		console.log (this.y);
		console.log (octave);
		console.log (this.x);
		this.color = [
			{r:1,  g:122,   b:122,  a:255},//1Ds
			{r:2,  g:159,   b:163,  a:255},//2Ds
			{r:0,  g:185,   b:200,  a:255},//3Ds
			{r:92, g:255,   b:255, a:255},//4Ds
			{r:171, g:255,   b:255, a:255},//5Ds
			
		
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
		image(this.img, 0,0,width/26,width/26 );
		pop();
	} 
	
}