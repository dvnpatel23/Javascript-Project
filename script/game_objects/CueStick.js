"use strict";

function CueStick(position){
    this.position = position;
    this.origin = new trig(970,11);
    this.shotOrigin = new trig(950,11);
    this.shooting = false;
    this.visible = true;
    this.rotation = 0;
    this.power = 0;
    this.trackMouse = true;
}

CueStick.prototype.handleInput = function (delta) {

    if(AI_ON && Game.policy.turn === AI_PLAYER_NUM)
      return;

    if(Game.policy.turnPlayed)
      return;

    if(Keyboard.down(Keys.W) && KEYBOARD_INPUT_ON){
      if(this.power < 75){
        this.origin.x+=2;
        this.power+=1.2;
      }
    }

    if(Keyboard.down(Keys.S) && KEYBOARD_INPUT_ON){
      if(this.power>0){
        this.origin.x-=2;
        this.power-=1.2;
      }
    }

    else if (this.power>0 && Mouse.left.down){
      // var strike = sounds.strike.cloneNode(true);
      // strike.volume = (this.power/(10))<1?(this.power/(10)):1;
      // strike.play();
      Game.policy.turnPlayed = true;
      this.shooting = true;
      this.origin = this.shotOrigin.copy();

      Game.poolGame.whiteBall.shoot(this.power, this.rotation);
      var stick = this;
      setTimeout(function(){stick.visible = false;}, 500);
    }
    else if(this.trackMouse){
      var opposite = Mouse.position.y - this.position.y;
      var adjacent = Mouse.position.x - this.position.x;
      this.rotation = Math.atan2(opposite, adjacent);
    }
};

CueStick.prototype.shoot = function(power, rotation){
  this.power = power;
  this.rotation = rotation;

  // if(Game.sound && SOUND_ON){
  //   var strike = sounds.strike.cloneNode(true);
  //   strike.volume = (this.power/(10))<1?(this.power/(10)):1;
  //   strike.play();
  // }
  Game.policy.turnPlayed = true;
  this.shooting = true;
  this.origin = this.shotOrigin.copy();

  Game.poolGame.whiteBall.shoot(this.power, this.rotation);
  var stick = this;
  setTimeout(function(){stick.visible = false;}, 500);
}

CueStick.prototype.update = function(){
  if(this.shooting && !Game.poolGame.whiteBall.moving)
    this.reset();
};

CueStick.prototype.reset = function(){
  this.position.x = Game.poolGame.whiteBall.position.x;
  this.position.y = Game.poolGame.whiteBall.position.y;
	this.origin = new trig(970,11);
  this.shooting = false;
  this.visible = true;
	this.power = 0;
};

CueStick.prototype.draw = function () {
  if(!this.visible)
    return;
  Canvas2D.drawImage(images.stick, this.position,this.rotation,1, this.origin);
};