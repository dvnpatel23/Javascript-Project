function controlMouseMove(move) {
    let x = move.pageX;
    let y = move.pageY;

    Mouse.pos = new trig(x, y);
}

function controlMouseDown(move) {
    controlMouseMove(move);

    if (move.which === 1) {
        if (!Mouse.left.down) 
            Mouse.left.pressed = true;
            Mouse.left.down = true;
    } else if (move.which === 2) {
        if (!Mouse.middle.down) 
        Mouse.middle.pressed = true;
        Mouse.middle.down = true;
    } else if (move.which === 3) {
        if (!Mouse.right.down)
        Mouse.right.pressed = true;
        Mouse.right.down = true;
    }
}

function controlMouseUp(move) {
    controlMouseMove(move);

    if (move.which === 1)
        Mouse.left.down = false;
    else if (move.which === 2)
        Mouse.middle.down = false;
    else if (move.which === 3)
        Mouse.right.down = false;
 
}


function MouseControl() {
    this.left = new ButtonPress();
    this.middle = new ButtonPress();
    this.right = new ButtonPress();
    
    this.pos = new trig();

    document.onmousemove = controlMouseMove;
    document.onmousedown = controlMouseDown;
    document.onmouseup = controlMouseUp;
}

MouseControl.prototype.reset = function() {
    this.left.pressed = false;
    this.right.pressed = false;
    this.middle.pressed = false;
}

let Mouse = new MouseControl();
