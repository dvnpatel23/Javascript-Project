
function AIRules() {

}

AIRules.prototype.evaluate = function (state, gamePolicy) {

    let evaluation = 1;

    for (var i = 0; i < state.balls.length; i++) {
        for (var j = i + 1; j < state.balls.length; j++) {

            let firstBilliardsBall = state.balls[i];
            let secondBilliardsBall = state.balls[j];

            if (firstBilliardsBall === state.whiteBilliardsBall || secondBilliardsBall === state.whiteBilliardsBall
                ||
                firstBilliardsBall.inHole || secondBilliardsBall.inHole) {
                continue;
            }
            evaluation += firstBilliardsBall.position.distanceFrom(secondBilliardsBall.position);
        }
    }

    evaluation = evaluation / 5800;

    if (!gamePolicy.firstCollision) {
        evaluation += 100;
    }

    evaluation += 2000 * gamePolicy.validBilliardsBallsInsertedOnTurn;

    gamePolicy.updateTurnOutcome();


    if (gamePolicy.won) {
        if (!gamePolicy.foul) {
            evaluation += 10000;
        }
        else {
            evaluation -= 10000;
        }
    }

    if (gamePolicy.foul) {
        evaluation = evaluation - 3000;
    }

    return evaluation;
}