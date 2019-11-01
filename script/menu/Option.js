function Option(image, position, callback, hoverImage){

    this.image = image;
    this.hoverImage = hoverImage ? hoverImage : image;
    this.position = position;
    this.callback = callback;
}

Option.prototype.draw = function(){

    if(this.mouseInsideBorders()){
        Canvas2D.drawImage(this.hoverImage, this.position, 0, 1);
        Canvas2D._canvas.style.cursor = "pointer";
    }
    else{
        Canvas2D.drawImage(this.image, this.position, 0, 0.98);
    }
}

Option.prototype.handleInput = function(){

    if(Mouse.left.pressed && this.mouseInsideBorders()){
        this.callback();
    }
}

Option.prototype.mouseInsideBorders = function(){
    
    mousePos = Mouse.position;

    if(mousePos.x > this.position.x 
        &&
        mousePos.x < this.position.x + this.image.width
        &&
        mousePos.y > this.position.y
        &&
        mousePos.y < this.position.y + this.image.height
    ){
        return true;
    }

    return false;
}