let animation = [];
let num;
const maxAnim = 6;


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
		animation.push(new Anim_a());
	} else if (key == 's') {   
		animation.push(new Anim_s());
	} else if (key == 'd') {
		animation.push(new Anim_d());
	} else if (key == 'f') {
		animation.push(new Anim_f());
	}	else if (key == 'g') {
		animation.push(new Anim_g());
	}	else if (key == 'h') {
		animation.push(new Anim_h());
	}  else if (key == 'j') {
		animation.push(new Anim_j());
	}  else if (key == 'k') {
		animation.push(new Anim_k());
	}  else if (key == 'l') {
		animation.push(new Anim_l());
	}  else if (key == 'q') {
		animation.push(new Anim_q());
	}  else if (key == 'w') {
		animation.push(new Anim_w());
	}  else if (key == 'e') {
		animation.push(new Anim_e());
	}  else if (key == 'r') {
		animation.push(new Anim_r());
	}  else if (key == 't') {
		animation.push(new Anim_t());
	}  else if (key == 'y') {
		animation.push(new Anim_y());
	}  else if (key == 'u') {
		animation.push(new Anim_u());
	}  else if (key == 'i') {
		animation.push(new Anim_i());
	}  else if (key == 'o') {
		animation.push(new Anim_o());
	}  else if (key == 'p') {
		animation.push(new Anim_p());
	}  else if (key == 'z') {
		animation.push(new Anim_z());
	}  else if (key == 'x') {
		animation.push(new Anim_x());
	}  else if (key == 'c') {
		animation.push(new Anim_c());
	}  else if (key == 'v') {
		animation.push(new Anim_v());
	}  else if (key == 'b') {
		animation.push(new Anim_b());
	}  else if (key == 'n') {
		animation.push(new Anim_n());
	}  else if (key == 'm') {
		animation.push(new Anim_m());
	  } else if (key == 'h') {
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






	
	
	// if (name === "C" && octave + offset === 3 ) {
	// 	if (accidental === "#"){
	// 		animation.push(new Anim_w(velocity));
	// 	} else{
	// 		animation.push(new Anim_a(velocity));
	// 		if ( velocity > 0.7  ) {
	// 			this.diameter += 30;
	// 		}
	// 	}
	//   }


    if (name === "C" && octave + offset === 3 ) {
		if (accidental === "#"){
			animation.push(new Anim_w);
		} else{
			animation.push(new Anim_a);
		}
	  }

	// if (name === "D" && octave + offset === 3 ) {
	// 	if (accidental === "#"){
	// 		animation.push(new Anim_e(velocity));
	// 	} else{
	// 		animation.push(new Anim_s(velocity));
	// 	}
	//   }

	if (name === "D" && octave + offset === 3 ) {
		if (accidental === "#"){
			animation.push(new Anim_e);
		} else{
			animation.push(new Anim_s);
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
	constructor() {
		// this.velocity=velocity;
		this.x = random(width);
		this.y = random(height);
		this.diameter = 0;
		this.alpha = 255;
		// console.log (this.velocity);
	}
	draw() {
		stroke(255,255,255,this.alpha);
		fill(227, 68, 61, this.alpha);
		square(this.x, this.y, 150);
		// this.diameter += 20*this.velocity;
		this.alpha *= 0.99;
	} 
	
}


// Animation W
class Anim_w {
	constructor() {
		// this.velocity=velocity;
		this.x = random(width);
		this.y = random(height);
		this.diameter = 0;
		this.alpha = 255;
		// console.log (this.velocity);
	}
	draw() {
		stroke(255,255,255,this.alpha);
		fill(169, 54, 79, this.alpha);
		quad(130, 110, 110, 170, 180, 170, 160, 110);
		// this.diameter += 20*this.velocity;
		this.alpha *= 0.99;
	} 
	
}

// Animation S
class Anim_s {
	
	constructor() {
		// this.velocity=velocity;
		this.x = random(width);
		this.y = random(height);
		// this.r = random(200,500);
		// this.r1 = random(200,500);
		// this.r2 = random(200,500);
		// this.diameter = 0;
		this.alpha = 255;
		// this.rotate = 0;
		// this.speed = 5;
		// console.log (this.velocity);
	}
	draw() {
		stroke(255,255,255,this.alpha);
		fill(202, 166, 67, this.alpha);
		triangle(this.x, this.y, this.x-30, this.y+40, this.x+30, this.y+40);
		// this.diameter += 10*this.velocity;
		// this.rotate += this.speed;
		this.alpha *= 0.99;
	} 
}

// Animation E
class Anim_e {
	constructor() {
		// this.velocity=velocity;
		// this.x = random(width)*this.velocity;
		// this.y = random(height)*this.velocity;
		this.x = random(width);
		this.y = random(height);
		this.alpha *= 0.99;
	}
	// preload(){
	// 	img = loadImage('3D#.jpg');
	//   }
	draw() {
		// setup() {
		// 	let img;
		// 	image(img, 0, 0);
		//   };
		// preload() {
		// 	img = loadImage('orijinal/3D#.jpg');
		// 	// let img;
		//   };
		//    setup() {
		// 	image(img, 0, 0);
		//   }
		// image(random(0,500),random(0,500),random(0,500),random(0,500),this.alpha *= 0.99);
		// noStroke();
		// fill(143, 173, 101, this.alpha);
		// rect(this.x, this.y, 30, 30);
		// this.alpha -= 5;
		this.alpha *= 0.99;
	}

//  preload() {
//   img = loadImage('orijinal/3D#.jpg');
//   let img;
// }
//  setup() {
//   image(img, 0, 0);
// }
}