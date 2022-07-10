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
		// sample[0].play();
		animation.push(new Anim_a());
    }if(animation.length > maxAnim){
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
	
	// WebMidi.inputs[0].addListener('noteon','all',(e) =>{
	// 	const { note, velocity } = e ;
	// 	const { accidental, name, octave } = note ;
	// 	const offset = name === 'A' || name === 'B' ? 1 : 0 ;
		
	// 	// animation.push(new Anim_a());
	
	// 	console.log(`鍵盤が押されました
	// 押された強さ:${velocity}
	// 押されたコード: ${name}${accidental|| ''}${octave + offset}
	// `);


	// console.log(name);
	// console.log(octave + offset);
	// console.log(accidental);


	// if (accidental > 0.8 ) {
	// 	this.posy = 0.2 ;
	// }






	
	
	if (name === "C" && octave + offset === 3 ) {
		if (accidental === "#"){
			animation.push(new Anim_w());
		} else{
			animation.push(new Anim_a(velocity));
			if ( velocity > 0.7  ) {
				this.diameter += 30;
			}
		}
	  }

	if (name === "D" && octave + offset === 3 ) {
		if (accidental === "#"){
			animation.push(new Anim_e());
		} else{
			animation.push(new Anim_s());
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

// });





// Animation A
class Anim_a {
    draw() {
		stroke(255,255,255);
		fill(227, 68, 61, this.alpha);
		ellipse(this.x, this.y, this.diameter, this.diameter);
		this.diameter += 20*this.velocity;
		this.alpha *= 0.99;
	} 
	
}