const canvas = document.querySelector('canvas');
let partArray = [];

// Resizes canvas size if window is resized
window.addEventListener('resize', () => {
	resizeCanvas(window.innerWidth, window.innerHeight);
	partArray = [];
	setup();
});

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	for (let i = 0; i < 100; i++) {
		partArray.push(new Particle(0, 0, 10));
	}
}

function draw() {
	background(0); // Black
	translate(width / 2, height / 2);
	for (let part of partArray) {
		part.show();
	}
}
