let animation = [];
let num;
const maxAnim = 6;
let imgA;
let imgS;
let imgW;
let imgE;
let imgD;
let imgF;
let imgT;
let imgG;
let imgY;
let imgU;
let imgK;
let imgZ;
let imgX;
let imgR;
let imgC;
let imgV;
let imgI;
let imgB;
let imgO;
let imgN;
let imgP;
let imgM;
let imgH;

function preload() {

  imgA = loadImage('3C.png');	// 画像を読み込む
  imgS = loadImage('3D.png');
  imgE = loadImage('3Ds.png');
  imgD = loadImage('3E.png');
  imgF = loadImage('3F.png');
  imgT = loadImage('3Fs.png');
  imgG = loadImage('3G.png');
  imgW = loadImage('3Cs.png');
  imgY = loadImage('3Gs.png');
  imgJ = loadImage('4A.png');
  imgU = loadImage('4As.png');
  imgK = loadImage('4B.png');
  imgZ = loadImage('4C.png'); 
  imgX = loadImage('4D.png');
  imgR = loadImage('4Ds.png'); 
  imgC = loadImage('4E.png'); 
  imgV = loadImage('4F.png');
  imgI = loadImage('4Fs.png'); 
  imgB = loadImage('4G.png');
  imgO = loadImage('4Gs.png'); 
  imgN = loadImage('5A.png');
  imgP = loadImage('5As.png');
  imgM = loadImage('5B.png'); 
  imgH = loadImage('5C.png'); // 画像ファイル名には記号を含めないようにする
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
			animation.push(new Anim_w(velocity));
		} else{
			animation.push(new Anim_a(velocity));
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
			animation.push(new Anim_e(velocity));
		} else{
			animation.push(new Anim_s(velocity));
		}
	  }
	

	if (name === "E" && octave + offset === 3 ) {
		animation.push(new Anim_d((velocity)));
	  }

	

	if (name === "F" && octave + offset === 3 ) {
		if (accidental === "#"){
			animation.push(new Anim_t(velocity));
		} else{
			animation.push(new Anim_f(velocity));
		}
	  }

	

	if (name === "G" && octave + offset === 3 ) {
		if (accidental === "#"){
			animation.push(new Anim_y(velocity));
		} else{
			animation.push(new Anim_g(velocity));
		}
	  }

	

	if (name === "A" && octave + offset === 4 ) {
		if (accidental === "#"){
			animation.push(new Anim_u(velocity));
		} else{
			animation.push(new Anim_j(velocity));
		}
	  }

	
	if (name === "B" && octave + offset === 4 ) {
		animation.push(new Anim_k(velocity));
	  }

	

	if (name === "C" && octave + offset === 4 ) {
		if (accidental === "#"){
			animation.push(new Anim_q(velocity));
		} else{
			animation.push(new Anim_h(velocity));
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


// Animation A
//3C.png
class Anim_a {
	constructor(velocity) {
		this.velocity=velocity;
		this.x = (this.velocity)*width;
		this.y = random(height);
		this.diameter = 0;
		this.alpha = 255;
		console.log (this.velocity);
	}
	draw() {
		image(imgA, this.x,0 ,(this.velocity)*500,(this.velocity)*500,this.alpha);
		this.alpha *= 0.99;
	} 
	
}





// Animation W
//3Cs.png
class Anim_w {
	constructor(velocity) {
		this.velocity=velocity;
		this.x = (this.velocity)*width;
		this.y = random(height);
		this.alpha *= 0.99;
		console.log (this.velocity);
	}
	draw() {
		image(imgW,  this.x,50,(this.velocity)*500,(this.velocity)*500,this.alpha);
		this.alpha *= 0.99;
	}


}

// Animation S
//3D.png
class Anim_s {
	
	constructor(velocity) {
		 this.velocity=velocity;
         this.x = (this.velocity)*width;
         this.y = random(height);
         this.alpha *= 0.99;
		console.log (this.velocity);
	}
	draw() {
		image(imgS, this.x,100 ,(this.velocity)*500,(this.velocity)*500,this.alpha);
		this.alpha *= 0.99;
	} 
}

// Animation E
//3D#.jpg
class Anim_e {
	constructor(velocity) {
        this.velocity=velocity;
        this.x = (this.velocity)*width;
        this.y = random(height);
        this.alpha *= 0.99;
       console.log (this.velocity);
	}
	draw() {
		image(imgE,this.x,150,(this.velocity)*500,(this.velocity)*500,this.alpha);
		this.alpha *= 0.99;
	}


}


// Animation D
//3E.jpg
class Anim_d {
	constructor(velocity) {
		this.velocity=velocity;
        this.x = (this.velocity)*width;
        this.y = random(height);
        this.alpha *= 0.99;
       console.log (this.velocity);
	}

	draw() {
		image(imgD,this.x,200,(this.velocity)*500,(this.velocity)*500,this.alpha);
		this.alpha *= 0.99;
	}
}

// Animation F
//3F.jpg
class Anim_f {
	constructor(velocity) {
		this.velocity=velocity;
        this.x = (this.velocity)*width;
        this.y = random(height);
        this.alpha *= 0.99;
       console.log (this.velocity);
	}
	draw() {
		image(imgF, this.x,250 ,(this.velocity)*500,(this.velocity)*500,this.alpha);
		// noStroke();
		// fill(185, 138, 98, this.alpha);
		// rect(0, 0, width, height);
		// this.alpha -= 5;
	}
}

// Animation T
//3F#.jpg
class Anim_t {
	constructor(velocity) {
		this.velocity=velocity;
        this.x = (this.velocity)*width;
        this.y = random(height);
        this.alpha *= 0.99;
       console.log (this.velocity);
	}
	draw() {
		image(imgT, this.x,300 ,(this.velocity)*500,(this.velocity)*500,this.alpha);
		// stroke(255,255,255);
		// fill(208, 109, 72, this.alpha);
		// ellipse(this.x, this.y, this.diameter, this.diameter);
		// this.diameter += 10;
	}
}


// Animation G
//3G.jpg
class Anim_g {
	constructor(velocity) {
		this.velocity=velocity;
        this.x = (this.velocity)*width;
        this.y = random(height);
        this.alpha *= 0.99;
       console.log (this.velocity);
	}
	draw() {
		image(imgG, this.x,350 ,(this.velocity)*500,(this.velocity)*500,this.alpha);
		
	}
}

// Animation Y
//3Gs.jpg
class Anim_y {
	constructor(velocity) {
		this.velocity=velocity;
        this.x = (this.velocity)*width;
        this.y = random(height);
        this.alpha *= 0.99;
       console.log (this.velocity);
	}
	draw() {
		image(imgY, this.x,400 ,(this.velocity)*500,(this.velocity)*500,this.alpha);
	}
}

// Animation J
//4A.jpg
class Anim_j {
	constructor(velocity) {
		this.velocity=velocity;
        this.x = (this.velocity)*width;
        this.y = random(height);
        this.alpha *= 0.99;
       console.log (this.velocity);
	}
	draw() {
		image(imgJ, this.x,450,(this.velocity)*500,(this.velocity)*500,this.alpha);
	}
}

// Animation U
//4As.jpg
class Anim_u {
	constructor(velocity) {
		this.velocity=velocity;
        this.x = (this.velocity)*width;
        this.y = random(height);
        this.alpha *= 0.99;
       console.log (this.velocity);
	}
	draw() {
		image(imgU,this.x,500,(this.velocity)*500,(this.velocity)*500,this.alpha);
	}
}

// Animation K
//4B.jpg
class Anim_k {
	constructor(velocity) {
		this.velocity=velocity;
        this.x = (this.velocity)*width;
        this.y = random(height);
        this.alpha *= 0.99;
       console.log (this.velocity);
	}
	draw() {
		image(imgK,this.x,550,(this.velocity)*500,(this.velocity)*500,this.alpha);
	}
}

// Animation Z
//4C.jpg
class Anim_z {
	constructor(velocity) {
		this.velocity=velocity;
        this.x = (this.velocity)*width;
        this.y = random(height);
        this.alpha *= 0.99;
       console.log (this.velocity);
	}
	draw() {
		image(imgZ,this.x,600,(this.velocity)*500,(this.velocity)*500,this.alpha);
	}
}

// Animation X
//4D.jpg
class Anim_x {
	constructor(velocity) {
		this.velocity=velocity;
        this.x = (this.velocity)*width;
        this.y = random(height);
        this.alpha *= 0.99;
       console.log (this.velocity);
	}
	draw() {
		image(imgX,this.x,650,(this.velocity)*500,(this.velocity)*500,this.alpha);
	}
}

// Animation R
//4Ds.jpg
class Anim_r {
	constructor(velocity) {
		this.velocity=velocity;
        this.x = (this.velocity)*width;
        this.y = random(height);
        this.alpha *= 0.99;
       console.log (this.velocity);
	}
	draw() {
		image(imgR,this.x,700,(this.velocity)*500,(this.velocity)*500,this.alpha);
	}
}

// Animation C
//4E.jpg
class Anim_c {
	constructor(velocity) {
		this.velocity=velocity;
        this.x = (this.velocity)*width;
        this.y = random(height);
        this.alpha *= 0.99;
       console.log (this.velocity);
	}
	draw() {
		image(imgC,this.x,750,(this.velocity)*500,(this.velocity)*500,this.alpha);
	}
}
// Animation V
//4F.jpg
class Anim_v {
	constructor(velocity) {
		this.velocity=velocity;
        this.x = (this.velocity)*width;
        this.y = random(height);
        this.alpha *= 0.99;
       console.log (this.velocity);
	}
	draw() {
		image(imgV,this.x,800,(this.velocity)*500,(this.velocity)*500,this.alpha);
	}
}

// Animation I
//4Fs.jpg
class Anim_i {
	constructor(velocity) {
		this.velocity=velocity;
        this.x = (this.velocity)*width;
        this.y = random(height);
        this.alpha *= 0.99;
       console.log (this.velocity);
	}
	draw() {
		image(imgI, this.x,850,(this.velocity)*500,(this.velocity)*500,this.alpha);
	}
}

// Animation B
//4G.jpg
class Anim_b {
	constructor(velocity) {
		this.velocity=velocity;
        this.x = (this.velocity)*width;
        this.y = random(height);
        this.alpha *= 0.99;
       console.log (this.velocity);
	}
	draw() {
		image(imgB,this.x,900,(this.velocity)*500,(this.velocity)*500,this.alpha);
	}
}

// Animation O
//4Gs.jpg
class Anim_o {
	constructor(velocity) {
		this.velocity=velocity;
        this.x = (this.velocity)*width;
        this.y = random(height);
        this.alpha *= 0.99;
       console.log (this.velocity);
	}
	draw() {
		image(imgO,this.x,950,(this.velocity)*500,(this.velocity)*500,this.alpha);
	}
}

// Animation N
//5A.jpg
class Anim_n {
	constructor(velocity) {
		this.velocity=velocity;
        this.x = (this.velocity)*width;
        this.y = random(height);
        this.alpha *= 0.99;
       console.log (this.velocity);
	}
	draw() {
		image(imgN,this.x,1000,(this.velocity)*500,(this.velocity)*500,this.alpha);
	}
}

// Animation P
//5As.jpg
class Anim_p {
	constructor(velocity) {
		this.velocity=velocity;
        this.x = (this.velocity)*width;
        this.y = random(height);
        this.alpha *= 0.99;
       console.log (this.velocity);
	}
	draw() {
		image(imgP,this.x,1050,(this.velocity)*500,(this.velocity)*500,this.alpha);
	}
}

// Animation M
//5B.jpg
class Anim_m {
	constructor(velocity) {
		this.velocity=velocity;
        this.x = (this.velocity)*width;
        this.y = random(height);
        this.alpha *= 0.99;
       console.log (this.velocity);
	}
	draw() {
		image(imgM,this.x,1100,(this.velocity)*500,(this.velocity)*500,this.alpha);
	}
}


// Animation H
//5C.jpg
class Anim_h {
	constructor(velocity) {
		this.velocity=velocity;
        this.x = (this.velocity)*width;
        this.y = random(height);
        this.alpha *= 0.99;
       console.log (this.velocity);
	}
	draw() {
		image(imgH,this.x,1150,(this.velocity)*500,(this.velocity)*500,this.alpha);
	}
}
