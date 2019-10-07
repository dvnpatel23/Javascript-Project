function trig(x = 0, y = 0) {
    this.x = x;
    this.y = y;
}

trig.prototype.copy = function () {
    return new trig(this.x, this.y);
}

trig.prototype.addTo = function(vector) {
    this.x += vector.x;
    this.y += vector.y;
}

trig.prototype.multiply = function(scalar) {
    return new trig(this.x * scalar, this.y * scalar)
}

trig.prototype.length = function () {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
}