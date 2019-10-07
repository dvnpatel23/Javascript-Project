let images = {};
let loadingObjects = 0;

function objectsLoadingCycle(cb) {
    
    if (loadingObjects) {
        requestAnimationFrame(objectsLoadingCycle.bind(this, cb));
    } else {
        cb();
    }
}

function loadObjects(cb) {
    function loadSprite(file) {
        loadingObjects++;

        let spriteImage = new Image();
        spriteImage.src = "./assets/images/" + file;

        spriteImage.onload = function() {
            loadingObjects--;
        }

        return spriteImage;
    }

    images.background = loadSprite("redpooltable.png");
    images.stick = loadSprite("cuestick.png");
    images.whiteBall = loadSprite("cueBall.png");
    images.redBall = loadSprite("redBall.png");
    images.yellowBall = loadSprite("yellowBall.png");
    images.blackBall = loadSprite("blackBall.png");


    objectsLoadingCycle(cb);
}

function getBallByColor(color) {
   switch(color) {
       case COLOR.RED:
           return images.redBall;
       case COLOR.YELLOW:
           return images.yellowBall;
       case COLOR.BLACK:
           return images.blackBall;
       case COLOR.WHITE:
           return images.whiteBall 
   }
}