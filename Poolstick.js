const STICK_ORIGIN = new trig(970, 11);
const STICK_SHOT_ORIGIN = new trig(950, 11);

function cueStick(pos, onShoot) {
    this.pos = pos;
    this.rotation = 0;
    this.origin = STICK_ORIGIN.copy();
    this.power = 0;
    this.onShoot = onShoot;
    this.shot = false;
}

cueStick.prototype.update = function() {
    if (Mouse.left.down) {
        this.increasePower();
    } else if (this.power > 0) {
        this.shoot();
    }

    this.calcRotation();
}

cueStick.prototype.create = function() {
    Canvas.drawImage(images.stick, this.pos, this.origin, this.rotation);
}

cueStick.prototype.calcRotation = function() {
    let opp = Mouse.pos.y - this.pos.y;
    let adj = Mouse.pos.x - this.pos.x;

    this.rotation = Math.atan2(opp, adj);

}

cueStick.prototype.increasePower = function() {
    this.power += 100;
    this.origin.x += 5;
}

cueStick.prototype.shoot = function () {
    this.onShoot(this.power, this.rotation);
    this.power = 0;
    this.origin = STICK_SHOT_ORIGIN.copy();
    this.shot = true;
}

cueStick.prototype.shift = function(pos) {
    this.pos = pos.copy();
    this.origin = STICK_ORIGIN.copy();
    this.shot = false;
}