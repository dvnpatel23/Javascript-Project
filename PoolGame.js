const DELTA = 1/100;

function PoolGame() {
    this.balls = [
        [new trig(1022,413),COLOR.YELLOW],
        [new trig(1056,393),COLOR.YELLOW],
        [new trig(1056,433),COLOR.RED],
        [new trig(1090,374),COLOR.RED],
        [new trig(1090,413),COLOR.BLACK],
        [new trig(1090,452),COLOR.YELLOW],
        [new trig(1126,354),COLOR.YELLOW],
        [new trig(1126,393),COLOR.RED],
        [new trig(1126,433),COLOR.YELLOW],
        [new trig(1126,472),COLOR.RED],
        [new trig(1162,335),COLOR.RED],
        [new trig(1162,374),COLOR.RED],
        [new trig(1162,413),COLOR.YELLOW],
        [new trig(1162,452),COLOR.RED],
        [new trig(1162,491),COLOR.YELLOW],
        [new trig(413,413),COLOR.WHITE]
    ].map(params => new Ball(params[0], params[1]))

    this.whiteBall = this.balls[this.balls.length - 1];
    this.stick = new cueStick(new trig(413, 413),
    this.whiteBall.shoot.bind(this.whiteBall));
}

PoolGame.prototype.update = function() {
    this.stick.update();

    for (let i = 0; i < this.balls.length; i++) {
        this.balls[i].update(DELTA);
    }

    if(!this.ballsInMotion() && this.stick.shot) {
        this.stick.shift(this.whiteBall.pos);
    }
}

PoolGame.prototype.create = function() {
    Canvas.drawImage(images.background, {x:0, y:0});

    for (let i = 0; i < this.balls.length; i++) {
        this.balls[i].create();
    }

    this.stick.create();

}

PoolGame.prototype.ballsInMotion = function () {
    return this.whiteBall.moving;
}