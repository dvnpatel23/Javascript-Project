function Menu(){
    
}

Menu.prototype.init = function
(
    backgroundImage,
    labels,
    buttons
){  
    this.background = backgroundImage;
    this.labels = labels || [];
    this.buttons = buttons || [];
    // this.sound = sound ? sound : undefined;

    this.active = false;
}

Menu.prototype.load = function(){
    // this.sound.currentTime = 0;
    this.active = true;

    requestAnimationFrame(this.menuLoop.bind(this));
    // if(SOUND_ON){
    //     this.sound.volume = 0.8;
    // }

    // this.sound.play();
}

Menu.prototype.draw = function(){

    Canvas2D._canvas.style.cursor = "auto"; 

    Canvas2D.drawImage(
        this.background, 
        trig.zero, 
        0, 
        1, 
        trig.zero
    );


    for(let i = 0 ; i < this.labels.length ; i++){
        this.labels[i].draw();
    }

    for(let i = 0 ; i < this.buttons.length ; i++){
        this.buttons[i].draw();
    }
}

Menu.prototype.handleInput = function(){

    for(let i = 0 ; i < this.buttons.length ; i++){
        this.buttons[i].handleInput();
    }
}

Menu.prototype.menuLoop = function(){

    if(this.active){
        this.handleInput();
        Canvas2D.clear();
        this.draw();
        Mouse.reset();
        requestAnimationFrame(this.menuLoop.bind(this));
    }

}

