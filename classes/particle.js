class Particle {
	constructor(x, y, size = 10) {
		this.mass = 1;
		this.x = x;
		this.y = y;
		this.size = size;
		this.velX = Math.random();
		this.velY = Math.random();
	}

	colision() {
		this.x > width / 2 ? (this.velX *= -1) : null;
		this.x < -width / 2 ? (this.velX *= -1) : null;
		this.y > height / 2 ? (this.velY *= -1) : null;
		this.y < -height / 2 ? (this.velY *= -1) : null;
	}
	update() {
		this.colision();
		this.x += this.velX;
		this.y += this.velY;
		this.velY += this.mass;
	}

	show() {
		this.update();
		stroke(255);
		fill(255);
		ellipse(this.x, this.y, this.size);
	}
}
