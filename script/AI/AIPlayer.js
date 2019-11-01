function AIPlayer() {

    this.AIRules = new AIRules();

}

AIPlayer.prototype.init = function (state, gamePolicy) {

    AI.OtherPlayers = [];
    AI.currentOtherPlayer = new OtherPlayer();
    AI.finishedSession = true;
    AI.iteration = 0;

    AI.bestOtherPlayerIndex = 0;
    AI.bestOtherPlayerEval = 0;

    if (gamePolicy.foul) {
        //TO DO: Pick best position for the white BilliardsBall.
        state.whiteBall.position.x = 413;
        state.whiteBall.position.y = 413;
        state.whiteBall.inHole = false;
        gamePolicy.foul = false;
    }
    AI.initialState = JSON.parse(JSON.stringify(state));
    AI.initialGamePolicyState = JSON.parse(JSON.stringify(gamePolicy));

    AI.state = state;
    AI.gamePolicy = gamePolicy;

}

AIPlayer.prototype.train = function () {

    if (AI.iteration === TRAIN_ITER) {
        AI.finishedSession = true;
        AI.playTurn();
        return;
    }

    let BilliardsBallsMoving = AI.state.ballsMoving();

    if (!BilliardsBallsMoving) {

        if (AI.iteration !== 0) {
            AI.currentOtherPlayer.evaluation = AI.AIRules.evaluate(this.state, this.gamePolicy);

            AI.OtherPlayers.push(JSON.parse(JSON.stringify(AI.currentOtherPlayer)));

            if (AI.currentOtherPlayer.evaluation > AI.bestOtherPlayerEval) {
                AI.bestOtherPlayerEval = AI.currentOtherPlayer.evaluation;
                AI.bestOtherPlayerIndex = AI.OtherPlayers.length - 1;
            }

            if (LOG) {
                console.log('-------------' + new Number(AI.iteration + 1) + '--------------------');
                console.log('Current evaluation: ' + AI.currentOtherPlayer.evaluation);
                console.log('Current power: ' + AI.currentOtherPlayer.power);
                console.log('Current rotation: ' + AI.currentOtherPlayer.rotation);
                console.log('---------------------------------');
            }
        }

        AI.state.initiateState(AI.initialState.balls);
        AI.gamePolicy.initiateState(AI.initialGamePolicyState);
        AI.buildNewOtherPlayer();
        AI.simulate();
    }

}

AIPlayer.prototype.buildNewOtherPlayer = function () {

    if (AI.iteration % 10 === 0) {
        AI.currentOtherPlayer = new OtherPlayer();
        AI.iteration++;
        return;
    }

    let bestOtherPlayer = AI.OtherPlayers[AI.bestOtherPlayerIndex];

    let newPower = bestOtherPlayer.power;
    newPower += + ((Math.random() * 30) - 15);
    newPower = newPower < 20 ? 20 : newPower;
    newPower = newPower > 75 ? 75 : newPower;

    let newRotation = bestOtherPlayer.rotation;

    if (bestOtherPlayer.evaluation > 0) {
        newRotation += (1 / bestOtherPlayer.evaluation) * (Math.random() * 2 * Math.PI - Math.PI)
    }
    else {
        newRotation = (Math.random() * 2 * Math.PI - Math.PI);
    }

    AI.currentOtherPlayer = new OtherPlayer(newPower, newRotation);

    AI.iteration++;

}

AIPlayer.prototype.simulate = function () {
    AI.state.stick.shoot(AI.currentOtherPlayer.power, AI.currentOtherPlayer.rotation);
}

AIPlayer.prototype.playTurn = function () {

    bestOtherPlayer = AI.OtherPlayers[AI.bestOtherPlayerIndex];
    Game.poolGame.stick.rotation = bestOtherPlayer.rotation;
    Game.poolGame.stick.trackMouse = false;

    setTimeout(() => {

        Game.poolGame.stick.visible = true;
        Canvas2D.clear();
        Game.poolGame.draw();

        Game.sound = true;
        Game.poolGame.initiateState(AI.initialState.balls);
        Game.policy.initiateState(AI.initialGamePolicyState);

        DISPLAY = true;

        requestAnimationFrame(Game.mainLoop);

        Game.poolGame.stick
            .shoot(
                bestOtherPlayer.power,
                bestOtherPlayer.rotation
            );
        Game.poolGame.stick.trackMouse = true;

    }, 1000);
}

AIPlayer.prototype.OtherPlayerTrainingLoop = function () {

    Game.sound = false;
    DISPLAY = false;

    if (DISPLAY_TRAINING) {
        if (!AI.finishedSession) {
            AI.train();
            Game.poolGame.handleInput(DELTA);
            Game.poolGame.update(DELTA);
            Canvas2D.clear();
            Game.poolGame.draw();
            Mouse.reset();
            setTimeout(AI.OtherPlayerTrainingLoop, 0.00000000001);
        }
    }
    else {
        while (!AI.finishedSession) {
            AI.train();
            Game.poolGame.handleInput(DELTA);
            Game.poolGame.update(DELTA);
            Mouse.reset();
        }
    }

}

AIPlayer.prototype.startSession = function () {
    setTimeout(
        () => {
            Game.poolGame.stick.visible = false;
            Canvas2D.clear();
            Game.poolGame.draw();

            AI.init(Game.poolGame, Game.policy);
            AI.finishedSession = false;
            AI.OtherPlayerTrainingLoop();
        },
        1000
    );
}

const AI = new AIPlayer();