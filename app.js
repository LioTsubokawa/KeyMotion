let animation = [];
let num;
const maxAnim = 6;

// function preload() {
// 	sample[0] = loadSound('./se01.wav');
// 	sample[1] = loadSound('./se02.wav');
// 	sample[2] = loadSound('./se03.wav');
// 	sample[3] = loadSound('./se04.wav');
// 	sample[4] = loadSound('./se05.wav');
// 	sample[5] = loadSound('./se06.wav');	
// }

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(0);
	if (animation.length > 0) {
		for (let i = 0; i < animation.length; i++) {
			animation[i].draw();
		}
	}
}

function keyTyped() {
	if (key == 'a') {
		// sample[0].play();
		animation.push(new Anim_a());
	} else if (key == 's') {
		// sample[1].play();    
		animation.push(new Anim_s());
	} else if (key == 'd') {
		// sample[2].play();
		animation.push(new Anim_d());
	} else if (key == 'f') {
		// sample[3].play();
		animation.push(new Anim_f());
	}	else if (key == 'g') {
		// sample[4].play();
		animation.push(new Anim_g());
	}	else if (key == 'h') {
		// sample[5].play();
		animation.push(new Anim_h());
	}  else if (key == 'j') {
		// sample[5].play();
		animation.push(new Anim_j());
	}  else if (key == 'k') {
		// sample[5].play();
		animation.push(new Anim_k());
	}  else if (key == 'l') {
		// sample[5].play();
		animation.push(new Anim_l());
	}  else if (key == 'q') {
		// sample[5].play();
		animation.push(new Anim_q());
	}  else if (key == 'w') {
		// sample[5].play();
		animation.push(new Anim_w());
	}  else if (key == 'e') {
		// sample[5].play();
		animation.push(new Anim_e());
	}  else if (key == 'r') {
		// sample[5].play();
		animation.push(new Anim_r());
	}  else if (key == 't') {
		// sample[5].play();
		animation.push(new Anim_t());
	}  else if (key == 'y') {
		// sample[5].play();
		animation.push(new Anim_y());
	}  else if (key == 'u') {
		// sample[5].play();
		animation.push(new Anim_u());
	}  else if (key == 'i') {
		// sample[5].play();
		animation.push(new Anim_i());
	}  else if (key == 'o') {
		// sample[5].play();
		animation.push(new Anim_o());
	}  else if (key == 'p') {
		// sample[5].play();
		animation.push(new Anim_p());
	}  else if (key == 'z') {
		// sample[5].play();
		animation.push(new Anim_z());
	}  else if (key == 'x') {
		// sample[5].play();
		animation.push(new Anim_x());
	}  else if (key == 'c') {
		// sample[5].play();
		animation.push(new Anim_c());
	}  else if (key == 'v') {
		// sample[5].play();
		animation.push(new Anim_v());
	}  else if (key == 'b') {
		// sample[5].play();
		animation.push(new Anim_b());
	}  else if (key == 'n') {
		// sample[5].play();
		animation.push(new Anim_n());
	}  else if (key == 'm') {
		// sample[5].play();
		animation.push(new Anim_m());
	  } else if (key == 'h') {
		// sample[5].play();
		animation.push(new Anim_h());
	  } 
	if(animation.length > maxAnim){
		animation.splice(1, 1);
	}
}


const audioCtx = new AudioContext();

WebMidi.enable((eer) => {
	if (eer){
		alert('Web MIDI APIは使えません。');
		return;
	}

	console.log(eer);
    console.log(WebMidi.inputs);
	
	WebMidi.inputs[0].addListener('noteon','all',(e) =>{
		const { note, velocity } = e ;
		const { accidental, name, octave } = note ;
		const offset = name === 'A' || name === 'B' ? 1 : 0 ;
		
		// animation.push(new Anim_a());
	
		console.log(`鍵盤が押されました
	押された強さ:${velocity}
	押されたコード: ${name}${accidental|| ''}${octave + offset}
	`);


	console.log(name);
	console.log(octave + offset);
	console.log(accidental);


	// if (accidental > 0.8 ) {
	// 	this.posy = 0.2 ;
	// }






	
	
	if (name === "C" && octave + offset === 3 ) {
		if (accidental === "#"){
			animation.push(new Anim_w(velocity));
		} else{
			animation.push(new Anim_a(velocity));
			if ( velocity > 0.7  ) {
				this.diameter += 30;
			}
		}
	  }

	if (name === "D" && octave + offset === 3 ) {
		if (accidental === "#"){
			animation.push(new Anim_e(velocity));
		} else{
			animation.push(new Anim_s(velocity));
		}
	  }

	
	

	if (name === "E" && octave + offset === 3 ) {
		animation.push(new Anim_d());
	  }

	

	if (name === "F" && octave + offset === 3 ) {
		if (accidental === "#"){
			animation.push(new Anim_t());
		} else{
			animation.push(new Anim_f());
		}
	  }

	

	if (name === "G" && octave + offset === 3 ) {
		if (accidental === "#"){
			animation.push(new Anim_y());
		} else{
			animation.push(new Anim_g());
		}
	  }

	

	if (name === "A" && octave + offset === 4 ) {
		if (accidental === "#"){
			animation.push(new Anim_u());
		} else{
			animation.push(new Anim_j());
		}
	  }

	
	if (name === "B" && octave + offset === 4 ) {
		animation.push(new Anim_k());
	  }

	

	if (name === "C" && octave + offset === 4 ) {
		if (accidental === "#"){
			animation.push(new Anim_q());
		} else{
			animation.push(new Anim_z());
		}
	  }
	


	if (name === "D" && octave + offset === 4 ) {
		if (accidental === "#"){
			animation.push(new Anim_r());
		} else{
			animation.push(new Anim_x());
		}
	  }

	
	  if (name === "E" && octave + offset === 4 ) {
		animation.push(new Anim_c());
	  }

	
	if (name === "F" && octave + offset === 4 ) {
		if (accidental === "#"){
			animation.push(new Anim_i());
		} else{
			animation.push(new Anim_v());
		}
	  }
	  
	
	  if (name === "G" && octave + offset === 4 ) {
		if (accidental === "#"){
			animation.push(new Anim_o());
		} else{
			animation.push(new Anim_b());
		}
	  }
	


	if (name === "A" && octave + offset === 5 ) {
		if (accidental === "#"){
			animation.push(new Anim_p());
		} else{
			animation.push(new Anim_n());
		}
	  }

	  if (name === "B" && octave + offset === 5 ) {
		animation.push(new Anim_m());
	  }
	  
	 
	if (name === "C" && octave + offset === 5 ) {
		
		animation.push(new Anim_z());
	  }
	
	});

});













// Animation A
class Anim_a {
	constructor(velocity) {
		this.velocity=velocity;
		this.x = random(width);
		this.y = random(height);
		this.diameter = 0;
		this.alpha = 255;
		console.log (this.velocity);
	}
	draw() {
		stroke(255,255,255);
		fill(227, 68, 61, this.alpha);
		ellipse(this.x, this.y, this.diameter, this.diameter);
		this.diameter += 20*this.velocity;
		this.alpha *= 0.99;
	} 
	
	
}


// Animation W
class Anim_w {
	constructor(velocity) {
		this.velocity=velocity;
		// this.x1 += random(width)*this.velocity;
		// this.y1 += random(height)*this.velocity;
		// this.x2 += random(width)*this.velocity;
		// this.y2 += random(height)*this.velocity;
		// this.x3 += random(width)*this.velocity;
		// this.y3 += random(height)*this.velocity;
		this.x1 = random(width*this.velocity);
		this.y1 = random(height*this.velocity);
		this.x2 = random(width*this.velocity);
		this.y2 = random(height*this.velocity);
		this.x3 = random(width*this.velocity);
		this.y3 = random(height*this.velocity);
		this.diameter = 0;
		this.alpha = 255;
		console.log (this.velocity);
	}
	draw() {
		stroke(255,255,255,this.alpha);
		fill(169, 54, 79, this.alpha);
		triangle(this.x1, this.y1, this.x2,this.y2,this.x3,this.y3,this.diameter);
		this.diameter += 25*this.velocity;
		this.alpha *= 0.99;
	} 
	// constructor() {
	// 	this.rotate = 0;
	// 	this.size = random(width);
	// 	this.speed = 5;
	// }
	// draw() {
	// 	push();
	// 	fill(178, 57, 83);
	// 	noStroke();
	// 	translate(width, height);
	// 	rotate(radians(this.rotate));
	// 	rectMode(CENTER);
	// 	rect(0,0,50,50);
	// 	pop();
	// 	this.rotate += this.speed;
	// 	this.size *= 0.95;
	// }
}




// Animation S
class Anim_s {
	
	constructor(velocity) {
		this.velocity=velocity;
		this.x = random(width);
		this.y = random(height);
		this.r = random(200,500)*this.velocity;
		// this.r1 = random(200,500);
		// this.r2 = random(200,500);
		this.diameter = 0;
		this.alpha = 255;
		this.rotate = 0;
		this.speed = 5;
		console.log (this.velocity);
	}
	draw() {
		stroke(255,255,255,this.alpha);
		fill(202, 166, 67, this.alpha);
		arc(this.x, this.y,this.r,this.r, 0, PI + QUARTER_PI, PIE,this.diameter);
		this.diameter += 10*this.velocity;
		this.rotate += this.speed;
		this.alpha *= 0.95;
	} 
}


// Animation E
class Anim_e {
	constructor(velocity) {
		this.velocity=velocity;
		this.x = random(width)*this.velocity;
		this.y = random(height)*this.velocity;
		this.alpha = 255;
	}
	draw() {
		noStroke();
		fill(143, 173, 101, this.alpha);
		rect(this.x, this.y, 30, 30);
		this.alpha -= 5;
	}
}


// Animation D
class Anim_d {
	constructor(velocity) {
		this.velocity=velocity;
		this.rotate = 0;
		this.size = width;
		this.speed = 5;
	}
	draw() {
		push();
		fill(98, 179, 86);
		noStroke();
		translate(width / 2, height / 2);
		rotate(radians(this.rotate));
		rectMode(CENTER);
		rect(0, 0, this.size, this.size);
		pop();
		this.rotate += this.speed;
		this.size *= 0.95;
	}
}

// Animation F
class Anim_f {
	constructor() {
		this.alpha = 255;
	}
	draw() {
		noStroke();
		fill(185, 138, 98, this.alpha);
		rect(0, 0, width, height);
		this.alpha -= 5;
	}
}

// Animation T
class Anim_t {
	constructor() {
		this.x = width / 2;
		this.y = height / 2;
		this.diameter = 0;
		this.alpha = 255;
	}
	draw() {
		stroke(255,255,255);
		fill(208, 109, 72, this.alpha);
		ellipse(this.x, this.y, this.diameter, this.diameter);
		this.diameter += 10;
		this.alpha *= 0.99;
	}
}



// Animation G
class Anim_g {
	constructor() {
		this.posy = height + 50;
	}
	draw() {
		noStroke();
		fill(0,185,200);
		rect(0, this.posy - 50, width, 50);
		rect(0, height - this.posy, width, 50);
		this.posy *= 0.95;
	}
}

// Animation Y
class Anim_y {
	constructor() {
		this.width = width;
		this.height = height;
	}
	draw() {
		stroke(61,145,179);
		strokeWeight(50);
		noFill();
		rectMode(CENTER);
		circle(width / 2, height / 2, this.width, this.height);
		this.width *= 0.95;
		this.height *= 0.95;
		rectMode(CORNER);
		strokeWeight(5);
	}
}


// Animation J
class Anim_j {
	constructor() {
		this.posy = height + 50;
	}
	draw() {
		noStroke();
		fill(183,105,147);
		rect(0, this.posy - 50, width, 50);
		rect(0, height - this.posy, width, 50);
		this.posy *= 0.95;
	}
}


// Animation U
class Anim_u {
	constructor() {
		this.x = width / 2;
		this.y = height / 2;
		this.diameter = 0;
		this.alpha = 255;
	}
	draw() {
		noStroke();
		fill(147, 123, 162, this.alpha);
		ellipse(this.x, this.y, this.diameter, this.diameter);
		this.diameter += 10;
		this.alpha *= 0.99;
	}
}


// Animation K
class Anim_k {
	constructor() {
		this.x = width / 2;
		this.y = height / 2;
		this.diameter = 0;
		this.alpha = 255;
	}
	draw() {
		noStroke();
		fill(211, 157, 173, this.alpha);
		ellipse(this.x, this.y, this.diameter, this.diameter);
		this.diameter += 10;
		this.alpha *= 0.99;
	}
}



// Animation Z
class Anim_z {
	constructor() {
		this.width = width;
		this.height = height;
	}
	draw() {
		stroke(75,189,198);
		strokeWeight(30);
		noFill();
		rectMode(CENTER);
		circle(width / 2, height / 2, this.width, this.height);
		this.width *= 0.95;
		this.height *= 0.95;
		rectMode(CORNER);
		strokeWeight(5);
	}
}


// Animation Q
class Anim_q {
	constructor() {
		this.width = 0;
		this.speed = 80;
		this.alpha = 255;
	}
	draw() {
		noStroke();
		fill(57, 162, 140, this.alpha);
		rectMode(CORNER);
		rect(0, 0, this.width, height);
		this.width += this.speed;
		this.alpha *= 0.99;
	}
}


// Animation X
class Anim_x {
	constructor() {
		this.posy = height + 50;
	}
	draw() {
		noStroke();
		fill(67,100,174);
		rect(0, this.posy - 50, width, 50);
		rect(0, height - this.posy, width, 50);
		this.posy *= 0.95;
	}
}


// Animation R
class Anim_r {
	constructor() {
		this.posy = height + 50;
	}
	draw() {
		noStroke();
		fill(123,96,159);
		rect(0, this.posy - 50, width, 50);
		rect(0, height - this.posy, width, 50);
		this.posy *= 0.95;
	}
}


// Animation C
class Anim_c {
	constructor() {
		this.x = width / 2;
		this.y = height / 2;
		this.diameter = 0;
		this.alpha = 255;
	}
	draw() {
		noStroke();
		fill(149, 82, 156, this.alpha);
		ellipse(this.x, this.y, this.diameter, this.diameter);
		this.diameter += 10;
		this.alpha *= 0.99;
	}
}


// Animation V
class Anim_v {
	constructor() {
		this.width = width;
		this.height = height;
	}
	draw() {
		stroke(94,137,173);
		strokeWeight(50);
		noFill();
		rectMode(CENTER);
		circle(width / 2, height / 2, this.width, this.height);
		this.width *= 0.95;
		this.height *= 0.95;
		rectMode(CORNER);
		strokeWeight(5);
	}
}


// Animation I
class Anim_i {
	constructor() {
		this.posy = height + 50;
	}
	draw() {
		noStroke();
		fill(70,157,190);
		rect(0, this.posy - 50, width, 50);
		rect(0, height - this.posy, width, 50);
		this.posy *= 0.9;
	}
}


// Animation B
class Anim_b {
	constructor() {
		this.x = width / 2;
		this.y = height / 2;
		this.diameter = 0;
		this.alpha = 255;
	}
	draw() {
		noStroke();
		fill(178, 37, 35, this.alpha);
		ellipse(this.x, this.y, this.diameter, this.diameter);
		this.diameter += 10;
		this.alpha *= 0.99;
	}
}


// Animation O
class Anim_o {
	constructor() {
		this.width = width;
		this.height = height;
	}
	draw() {
		stroke(165,91,61);
		strokeWeight(20);
		noFill();
		rectMode(CENTER);
		rect(width / 2, height / 2, this.width, this.height);
		this.width *= 0.7;
		this.height *= 0.7;
		rectMode(CORNER);
		strokeWeight(1);
	}
}


// Animation N
class Anim_n {
	constructor() {
		this.width = 0;
		this.speed = 80;
		this.alpha = 255;
	}
	draw() {
		noStroke();
		fill(99, 168, 131, this.alpha);
		rectMode(CORNER);
		rect(0, 0, this.width, height);
		this.width += this.speed;
		this.alpha *= 0.99;
	}
}


// Animation P
class Anim_p {
	constructor() {
		this.posy = height + 50;
	}
	draw() {
		noStroke();
		fill(132,154,118);
		rect(0, this.posy - 50, width, 50);
		rect(0, height - this.posy, width, 50);
		this.posy *= 0.9;
	}
}


// Animation M
class Anim_m {
	constructor() {
		this.rotate = 0;
		this.size = width;
		this.speed = 5;
	}
	draw() {
		push();
		fill(150, 199, 185);
		noStroke();
		translate(width / 2, height / 2);
		rotate(radians(this.rotate));
		rectMode(CENTER);
		rect(0, 0, this.size, this.size);
		pop();
		this.rotate += this.speed;
		this.size *= 0.95;
	}
}






// Animation H
class Anim_h {
	constructor() {
		this.x = width / 2;
		this.y = height / 2;
		this.diameter = 0;
		this.alpha = 255;
	}
	draw() {
		noStroke();
		fill(227, 68, 61, this.alpha);
		ellipse(this.x, this.y, this.diameter, this.diameter);
		this.diameter -= 10;
		this.alpha *= 0.99;
	}
}


