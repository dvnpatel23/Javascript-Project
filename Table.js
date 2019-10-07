function Canvas2D() {
    this._canvas = document.getElementById('PoolTable');
    this._canvasContext = this._canvas.getContext('2d');
} 

Canvas2D.prototype.clear = function() {
    this._canvasContext.clearRect(0, 0, this._canvas.width, this._canvas.height);
}

Canvas2D.prototype.drawImage = function(image, position, origin, rotation = 0 ) {
    if (!position) {
        position = new trig();
    }

    if (!origin) {
        origin = new trig();
    }

    this._canvasContext.save();
    this._canvasContext.translate(position.x, position.y)
    this._canvasContext.rotate(rotation);
    this._canvasContext.drawImage(image, -origin.x, -origin.y)
    this._canvasContext.restore();
}

let Canvas = new Canvas2D();

// let image = new Image();
// image.src = "./assets/images/redpooltable.png";
// // image.width = 50;


// setTimeout(() => {
//     Canvas.drawImage(image, {x:0,y:0});
// }, 1000);

