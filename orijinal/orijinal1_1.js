let animation = [];
let num;
// const maxAnim = 6;
let imgC;
let imgCs;
let imgD;
let imgDs;
let imgE;
let imgF;
let imgFs;
let imgG;
let imgGs;
let imgA;
let imgAs;
let imgB;

function preload() {

  imgC  = loadImage('siro_C.png');
  imgCs = loadImage('siro_Cs.png');	
  imgD  = loadImage('siro_D.png');
  imgDs = loadImage('siro_Ds.png');
  imgE  = loadImage('siro_E.png');
  imgF  = loadImage('siro_F.png');
  imgFs = loadImage('siro_Fs.png');
  imgG  = loadImage('siro_G.png');
  imgGs = loadImage('siro_Gs.png');
  imgA  = loadImage('siro_A.png');
  imgAs = loadImage('siro_As.png');
  imgB  = loadImage('siro_B.png');
  // 画像を読み込む
  // 画像ファイル名には記号を含めないようにする
}


function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(255);
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


    if (name === "C" ) {
		if (accidental === "#"){
			animation.push(new Anim_Cs(velocity,imgCs,octave + offset));
		} else{
			animation.push(new Anim_C(velocity,imgC,octave + offset));

		}
	}

	// if (name === "D" && octave + offset === 3 ) {
	// 	if (accidental === "#"){
	// 		animation.push(new Anim_e(velocity));
	// 	} else{
	// 		animation.push(new Anim_s(velocity));
	// 	}
	//   }

	if (name === "D" ) {
		if (accidental === "#"){
			animation.push(new Anim_Ds(velocity,imgDs,octave + offset));
		} else{
			animation.push(new Anim_D(velocity,imgD,octave + offset));
		}
	}
	

	if (name === "E" ) {
		animation.push(new Anim_E(velocity,imgE,octave + offset));
		
	}

	

	if (name === "F" ) {
		if (accidental === "#"){
			animation.push(new Anim_Fs(velocity,imgFs,octave + offset));
		} else{
			animation.push(new Anim_F(velocity,imgF,octave + offset));
		}
	}

	

	if (name === "G" ) {
		if (accidental === "#"){
			animation.push(new Anim_Gs(velocity,imgGs,octave + offset));
		} else{
			animation.push(new Anim_G(velocity,imgG,octave + offset));
		}
	}

	

	if (name === "A" ) {
		if (accidental === "#"){
			animation.push(new Anim_As(velocity,imgAs,octave + offset));
		} else{
			animation.push(new Anim_A(velocity,imgA,octave + offset));
		}
	}

	
	if (name === "B" ) {
		animation.push(new Anim_B(velocity,imgB,octave + offset));
	}

	

	
	




	
	
});
});


