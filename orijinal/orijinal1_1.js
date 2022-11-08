let animation = [];
let num;
const maxAnim = 6;
let imgC;
// let imgS;
// let imgW;
// let imgE;
// let imgD;
// let imgF;
// let imgT;
// let imgG;
// let imgY;
// let imgU;
// let imgK;
// let imgq;
// let imgX;
// let imgR;
// let imgC;
// let imgV;
// let imgI;
// let imgB;
// let imgO;
// let imgN;
// let imgP;
// let imgM;
// let imgH;
// let img0;

function preload() {

  imgC = loadImage('3C.png');
  imgCs = loadImage('3Cs.png');	// 画像を読み込む
  imgD = loadImage('3D.png');
  imgDs = loadImage('3Ds.png');
  imgE = loadImage('3E.png');
  imgF = loadImage('3F.png');
  imgFs = loadImage('3Fs.png');
  imgG = loadImage('3G.png');
  imgGs = loadImage('3Gs.png');
  imgA = loadImage('4A.png');
  imgAs = loadImage('4As.png');
  imgB = loadImage('4B.png');
//   imgq = loadImage('4Cs.png'); 
//   imgX = loadImage('4D.png');
//   imgR = loadImage('4Ds.png'); 
//   imgC = loadImage('4E.png'); 
//   imgV = loadImage('4F.png');
//   imgI = loadImage('4Fs.png'); 
//   imgB = loadImage('4G.png');
//   imgO = loadImage('4Gs.png'); 
//   imgN = loadImage('5A.png');
//   imgP = loadImage('5As.png');
//   imgM = loadImage('5B.png'); 
//   imgH = loadImage('4C.png');
//   imgZ = loadImage('5C.png');
//   img0 = loadImage('5Cs.png'); // 画像ファイル名には記号を含めないようにする
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


    if (name === "C" && octave + offset === 3 ) {
		if (accidental === "#"){
			animation.push(new Anim_Cs(velocity));
		} else{
			animation.push(new Anim_C(velocity));
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
			animation.push(new Anim_Ds(velocity));
		} else{
			animation.push(new Anim_D(velocity));
		}
	  }
	

	if (name === "E" && octave + offset === 3 ) {
		animation.push(new Anim_E((velocity)));
	  }

	

	if (name === "F" && octave + offset === 3 ) {
		if (accidental === "#"){
			animation.push(new Anim_Fs(velocity));
		} else{
			animation.push(new Anim_F(velocity));
		}
	  }

	

	if (name === "G" && octave + offset === 3 ) {
		if (accidental === "#"){
			animation.push(new Anim_Gs(velocity));
		} else{
			animation.push(new Anim_G(velocity));
		}
	  }

	

	if (name === "A" && octave + offset === 4 ) {
		if (accidental === "#"){
			animation.push(new Anim_As(velocity));
		} else{
			animation.push(new Anim_A(velocity));
		}
	  }

	
	if (name === "B" && octave + offset === 4 ) {
		animation.push(new Anim_B(velocity));
	  }

	

	if (name === "C" && octave + offset === 4 ) {
		if (accidental === "#"){
			animation.push(new Anim_Cs(velocity,imgq));
		} else{
			animation.push(new Anim_C(velocity));
		}
	  }
	


	if (name === "D" && octave + offset === 4 ) {
		if (accidental === "#"){
			animation.push(new Anim_r(velocity));
		} else{
			animation.push(new Anim_x(velocity));
		}
	  }

	
	  if (name === "E" && octave + offset === 4 ) {
		animation.push(new Anim_c(velocity));
	  }

	
	  if (name === "F" && octave + offset === 4 ) {
		if (accidental === "#"){
			animation.push(new Anim_i(velocity));
		} else{
			animation.push(new Anim_v(velocity));
		}
	  }
	  
	
	  if (name === "G" && octave + offset === 4 ) {
		if (accidental === "#"){
			animation.push(new Anim_o(velocity));
		} else{
			animation.push(new Anim_b(velocity));
		}
	  }
	


	  if (name === "A" && octave + offset === 5 ) {
		if (accidental === "#"){
			animation.push(new Anim_p(velocity));
		} else{
			animation.push(new Anim_n(velocity));
		}
	  }

	  if (name === "B" && octave + offset === 5 ) {
		animation.push(new Anim_m(velocity));
	  }
	  
	 
	  if (name === "C" && octave + offset === 5 ) {
		animation.push(new Anim_z(velocity));
	  }
		
	

	
	
	});

});


// // Animation A
// //3C.png
// class Anim_a {
// 	constructor(velocity) {
// 		this.velocity=velocity;
// 		this.x = random(width);
// 		this.y = (this.velocity)*height-width/26;
// 		this.diameter = 0;
// 		this.alpha = 255;
// 		console.log (this.velocity);
// 	}
// 	draw() {
// 		push();
// 		translate(width*0.05,this.y);
// 		rotate(PI / ((this.velocity)/15));
// 		scale(this.velocity*0.5);
// 		image(imgA, 0,0,width/26,width/26 );
// 		pop();
// 	} 
	
// }













// // Animation D
// //3E.jpg
// class Anim_d {
// 	constructor(velocity) {
// 		this.velocity=velocity;
// 		this.x = random(width);
// 		this.y = (this.velocity)*height-width/26;
// 		this.diameter = 0;
// 		this.alpha = 255;
// 		console.log (this.velocity);
// 	}

// 	draw() {
// 		push();
// 		translate(width*0.12,this.y);
// 		rotate(PI / ((this.velocity)/15));
// 		scale(this.velocity);
// 		image(imgD,0,0,width/26,width/26);
// 		pop();
// 	}
// }

// // Animation F
// //3F.jpg
// class Anim_f {
// 	constructor(velocity) {
// 		this.velocity=velocity;
// 		this.x = random(width);
// 		this.y = (this.velocity)*height-width/26;
// 		this.diameter = 0;
// 		this.alpha = 255;
// 		console.log (this.velocity);
// 	}
// 	draw() {
// 		push();
// 		translate(width*0.14,this.y);
// 		rotate(PI / ((this.velocity)/15));
// 		scale(this.velocity);
// 		image(imgF,0,0,width/26,width/26);
// 		pop();
// 	}
// }

// // Animation T
// //3F#.jpg
// class Anim_t {
// 	constructor(velocity) {
// 		this.velocity=velocity;
// 		this.x = random(width);
// 		this.y = (this.velocity)*height-width/26;
// 		this.diameter = 0;
// 		this.alpha = 255;
// 		console.log (this.velocity);
// 	}
// 	draw() {
// 		push();
// 		translate(width*0.16,this.y);
// 		rotate(PI / ((this.velocity)/15));
// 		scale(this.velocity);
// 		image(imgT,0,0,width/26,width/26);
// 		pop();
// 	}
// }


// // Animation G
// //3G.jpg
// class Anim_g {
// 	constructor(velocity) {
// 		this.velocity=velocity;
// 		this.x = random(width);
// 		this.y = (this.velocity)*height-width/26;
// 		this.diameter = 0;
// 		this.alpha = 255;
// 		console.log (this.velocity);
// 	}
// 	draw() {
// 		push();
// 		translate(width*0.18,this.y);
// 		rotate(PI / ((this.velocity)/15));
// 		scale(this.velocity);
// 		image(imgG,0,0,width/26,width/26);
// 		pop();
// 	}
// }

// // Animation Y
// //3Gs.jpg
// class Anim_y {
// 	constructor(velocity) {
// 		this.velocity=velocity;
// 		this.x = random(width);
// 		this.y = (this.velocity)*height-width/26;
// 		this.diameter = 0;
// 		this.alpha = 255;
// 		console.log (this.velocity);
// 	}
// 	draw() {
// 		push();
// 		translate(width*0.2,this.y);
// 		rotate(PI / ((this.velocity)/15));
// 		scale(this.velocity);
// 		image(imgY,0,0,width/26,width/26);
// 		pop();
// 	}
// }

// // Animation J
// //4A.jpg
// class Anim_j {
// 	constructor(velocity) {
// 		this.velocity=velocity;
// 		this.x = random(width);
// 		this.y = (this.velocity)*height-width/26;
// 		this.diameter = 0;
// 		this.alpha = 255;
// 		console.log (this.velocity);
// 	}
// 	draw() {
// 		push();
// 		translate(width*0.22,this.y);
// 		rotate(PI / ((this.velocity)/15));
// 		scale(this.velocity);
// 		image(imgJ,0,0,width/26,width/26);
// 		pop();
// 	}
// }

// // Animation U
// //4As.jpg
// class Anim_u {
// 	constructor(velocity) {
// 		this.velocity=velocity;
// 		this.x = random(width);
// 		this.y = (this.velocity)*height-width/26;
// 		this.diameter = 0;
// 		this.alpha = 255;
// 		console.log (this.velocity);
// 	}
// 	draw() {
// 		push();
// 		translate(width*0.24,this.y);
// 		rotate(PI / ((this.velocity)/15));
// 		scale(this.velocity);
// 		image(imgU,0,0,width/26,width/26);
// 		pop();
// 	}
// }

// // Animation K
// //4B.jpg
// class Anim_k {
// 	constructor(velocity) {
// 		this.velocity=velocity;
// 		this.x = random(width);
// 		this.y = (this.velocity)*height-width/26;
// 		this.diameter = 0;
// 		this.alpha = 255;
// 		console.log (this.velocity);
// 	}
// 	draw() {
// 		push();
// 		translate(width*0.26,this.y);
// 		rotate(PI / ((this.velocity)/15));
// 		scale(this.velocity);
// 		image(imgK,0,0,width/26,width/26);
// 		pop();
// 	}
// }

// // Animation H
// //5C.jpg
// class Anim_h {
// 	constructor(velocity) {
// 		this.velocity=velocity;
// 		this.x = random(width);
// 		this.y = (this.velocity)*height-width/26;
// 		this.diameter = 0;
// 		this.alpha = 255;
// 		console.log (this.velocity);
// 	}
// 	draw() {
// 		push();
// 		translate(width*0.28,this.y);
// 		rotate(PI / ((this.velocity)/15));
// 		scale(this.velocity);
// 		image(imgH,0,0,width/26,width/26);
// 		pop();
// 	}
// }

// // Animation Q
// //4C.jpg
// class Anim_q {
// 	constructor(velocity) {
// 		this.velocity=velocity;
// 		this.x = random(width);
// 		this.y = (this.velocity)*height-width/26;
// 		this.diameter = 0;
// 		this.alpha = 255;
// 		console.log (this.velocity);
// 	}
// 	draw() {
// 		push();
// 		translate(width*0.3,this.y);
// 		rotate(PI / ((this.velocity)*10));
// 		scale(this.velocity*0.5);
// 		image(imgq,0,0);
// 		pop();
// 	}
// }



// // Animation X
// //4D.jpg
// class Anim_x {
// 	constructor(velocity) {
// 		this.velocity=velocity;
// 		this.x = random(width);
// 		this.y = (this.velocity)*height-width/26;
// 		this.diameter = 0;
// 		this.alpha = 255;
// 		console.log (this.velocity);
// 	}
// 	draw() {
// 		push();
// 		translate(width*0.32,this.y);
// 		rotate(PI / ((this.velocity)*10));
// 		scale(this.velocity*0.5);
// 		image(imgX,0,0);
// 		pop();
// 	}
// }

// // Animation R
// //4Ds.jpg
// class Anim_r {
// 	constructor(velocity) {
// 		this.velocity=velocity;
// 		this.x = random(width);
// 		this.y = (this.velocity)*height-width/26;
// 		this.diameter = 0;
// 		this.alpha = 255;
// 		console.log (this.velocity);
// 	}
// 	draw() {
// 		push();
// 		translate(width*0.34,this.y);
// 		rotate(PI / ((this.velocity)*10));
// 		scale(this.velocity*0.5);
// 		image(imgR, 0,0);
// 		pop();
// 	}
// }

// // Animation C
// //4E.jpg
// class Anim_c {
// 	constructor(velocity) {
// 		this.velocity=velocity;
// 		this.x = random(width);
// 		this.y = (this.velocity)*height-width/26;
// 		this.diameter = 0;
// 		this.alpha = 255;
// 		console.log (this.velocity);
// 	}
// 	draw() {
// 		push();
// 		translate(width*0.36,this.y);
// 		rotate(PI / ((this.velocity)*10));
// 		scale(this.velocity*0.5);
// 		image(imgC,0,0);
// 		pop();
// 	}
// }
// // Animation V
// //4F.jpg
// class Anim_v {
// 	constructor(velocity) {
// 		this.velocity=velocity;
// 		this.x = random(width);
// 		this.y = (this.velocity)*height-width/26;
// 		this.diameter = 0;
// 		this.alpha = 255;
// 		console.log (this.velocity);
// 	}
// 	draw() {
// 		push();
// 		translate(width*0.38,this.y);
// 		rotate(PI / ((this.velocity)*10));
// 		scale(this.velocity*0.5);
// 		image(imgV,0,0);
// 		pop();
// 	}
// }

// // Animation I
// //4Fs.jpg
// class Anim_i {
// 	constructor(velocity) {
// 		this.velocity=velocity;
// 		this.x = random(width);
// 		this.y = (this.velocity)*height-width/26;
// 		this.diameter = 0;
// 		this.alpha = 255;
// 		console.log (this.velocity);
// 	}
// 	draw() {
// 		push();
// 		translate(width*0.4,this.y);
// 		rotate(PI / ((this.velocity)*10));
// 		scale(this.velocity*0.5);
// 		image(imgI,0,0);
// 		pop();
// 	}
// }

// // Animation B
// //4G.jpg
// class Anim_b {
// 	constructor(velocity) {
// 		this.velocity=velocity;
// 		this.x = random(width);
// 		this.y = (this.velocity)*height-width/26;
// 		this.diameter = 0;
// 		this.alpha = 255;
// 		console.log (this.velocity);
// 	}
// 	draw() {
// 		push();
// 		translate(width*0.42,this.y);
// 		rotate(PI / ((this.velocity)*10));
// 		scale(this.velocity*0.5);
// 		image(imgB,0,0);
// 		pop();
// 	}
// }

// // Animation O
// //4Gs.jpg
// class Anim_o {
// 	constructor(velocity) {
// 		this.velocity=velocity;
// 		this.x = random(width);
// 		this.y = (this.velocity)*height-width/26;
// 		this.diameter = 0;
// 		this.alpha = 255;
// 		console.log (this.velocity);
// 	}
// 	draw() {
// 		push();
// 		translate(width*0.44,this.y);
// 		rotate(PI / ((this.velocity)*10));
// 		scale(this.velocity*0.5);
// 		image(imgO, 0,0);
// 		pop();
// 	}
// }

// // Animation N
// //5A.jpg
// class Anim_n {
// 	constructor(velocity) {
// 		this.velocity=velocity;
// 		this.x = random(width);
// 		this.y = (this.velocity)*height-width/26;
// 		this.diameter = 0;
// 		this.alpha = 255;
// 		console.log (this.velocity);
// 	}
// 	draw() {
// 		push();
// 		translate(width*0.46,this.y);
// 		rotate(PI / ((this.velocity)*10));
// 		scale(this.velocity*0.5);
// 		image(imgN,0,0);
// 		pop();
// 	}
// }

// // Animation P
// //5As.jpg
// class Anim_p {
// 	constructor(velocity) {
// 		this.velocity=velocity;
// 		this.x = random(width);
// 		this.y = (this.velocity)*height-width/26;
// 		this.diameter = 0;
// 		this.alpha = 255;
// 		console.log (this.velocity);
// 	}
// 	draw() {
// 		push();
// 		translate(width*0.48,this.y);
// 		rotate(PI / ((this.velocity)*10));
// 		scale(this.velocity*0.5);
// 		image(imgP,0,0);
// 		pop();
// 	}
// }

// // Animation M
// //5B.jpg
// class Anim_m {
// 	constructor(velocity) {
// 		this.velocity=velocity;
// 		this.x = random(width);
// 		this.y = (this.velocity)*height-width/26;
// 		this.diameter = 0;
// 		this.alpha = 255;
// 		console.log (this.velocity);
// 	}
// 	draw() {
// 		push();
// 		translate(width*0.5,this.y);
// 		rotate(PI / ((this.velocity)*10));
// 		scale(this.velocity*0.5);
// 		image(imgM,0,0);
// 		pop();
// 	}
// }


// // Animation Z
// //5C.jpg
// class Anim_z {
// 	constructor(velocity) {
// 		this.velocity=velocity;
// 		this.x = random(width);
// 		this.y = (this.velocity)*height-width/26;
// 		this.diameter = 0;
// 		this.alpha = 255;
// 		console.log (this.velocity);
// 	}
// 	draw() {
// 		push();
// 		translate(width*0.55,this.y);
// 		rotate(PI / ((this.velocity)*10));
// 		scale(this.velocity*0.5);
// 		image(imgZ,0,0);
// 		pop();
// 	}
// }

