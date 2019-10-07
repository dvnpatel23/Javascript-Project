const BALL_ORIGIN = new trig(25, 25);

function Ball(pos, color) {
    this.pos = pos;
    this.vel = new trig();
    this.moving = false;
    this.image = getBallByColor(color);
}

Ball.prototype.update = function() {
    this.pos.addTo(this.vel.multiply(DELTA));

    this.vel = this.vel.multiply(0.98);

    if (this.vel.length() < 5) {
        this.vel = new trig();
        this.moving = false;
    }
}

Ball.prototype.draw = function() {
    Canvas.drawImage(this.image, this.pos, BALL_ORIGIN);
}

Ball.prototype.shoot = function(power, rotation) {
    this.vel = new trig(power * Math.cos(rotation), power * Math.sin(rotation));
    this.moving = true;
}