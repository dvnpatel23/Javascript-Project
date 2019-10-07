function Billiards()  {

}

Billiards.prototype.init = function() {
    this.poolGame = new PoolGame();

}

Billiards.prototype.start = function() {
    BilliardsGame.init();
    BilliardsGame.game(); 
}

Billiards.prototype.game = function() {
    Canvas.clear();
    BilliardsGame.poolGame.update();
    BilliardsGame.poolGame.create();
    Mouse.reset();
    
    requestAnimationFrame(BilliardsGame.game);
}

let BilliardsGame = new Billiards();