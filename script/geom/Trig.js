"use strict";

function trig(x, y) {
    this.x = typeof x !== 'undefined' ? x : 0;
    this.y = typeof y !== 'undefined' ? y : 0;
}

Object.defineProperty(trig, "zero",
    {
        get: function () {
            return new trig();
        }
    });

Object.defineProperty(trig.prototype, "isZero",
    {
        get: function () {
            return this.x === 0 && this.y === 0;
        }
    });

Object.defineProperty(trig.prototype, "length",
    {
        get: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }
    });

trig.prototype.addTo = function (v) {
    if (v.constructor === trig) {
        this.x += v.x;
        this.y += v.y;
    }
    else if (v.constructor === Number) {
        this.x += v;
        this.y += v;
    }
    return this;
};

trig.prototype.add = function (v) {
    var result = this.copy();
    return result.addTo(v);
};

trig.prototype.subtractFrom = function (v) {
    if (v.constructor === trig) {
        this.x -= v.x;
        this.y -= v.y;
    }
    else if (v.constructor === Number) {
        this.x -= v;
        this.y -= v;
    }
    return this;
};

trig.prototype.subtract = function (v) {
    var result = this.copy();
    return result.subtractFrom(v);
};

trig.prototype.divideBy = function (v) {
    if (v.constructor === trig) {
        this.x /= v.x;
        this.y /= v.y;
    }
    else if (v.constructor === Number) {
        this.x /= v;
        this.y /= v;
    }
    return this;
};

trig.prototype.divide = function (v) {
    var result = this.copy();
    return result.divideBy(v);
};

trig.prototype.multiplyWith = function (v) {
    if (v.constructor === trig) {
        this.x *= v.x;
        this.y *= v.y;
    }
    else if (v.constructor === Number) {
        this.x *= v;
        this.y *= v;
    }
    return this;
};

trig.prototype.multiply = function (v) {
    var result = this.copy();
    return result.multiplyWith(v);
};

trig.prototype.toString = function () {
    return "(" + this.x + ", " + this.y + ")";
};

trig.prototype.normalize = function () {
    var length = this.length;
    if (length === 0)
        return;
    this.divideBy(length);
};

trig.prototype.copy = function () {
    return new trig(this.x, this.y);
};

trig.prototype.equals = function (obj) {
    return this.x === obj.x && this.y === obj.y;
};

trig.prototype.distanceFrom = function(obj){
    return Math.sqrt((this.x-obj.x)*(this.x-obj.x) + (this.y-obj.y)*(this.y-obj.y));
}