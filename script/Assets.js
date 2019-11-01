"use strict";

var images = {};
// var sounds = {};

Game.loadAssets = function () {
    var loadImage = function (image) {
        return Game.loadImage("assets/images/" + image);
    };

    // var loadSound = function (sound) {
    //     return new Audio("assets/sounds/" + sound);
    // };

    images.mainMenuBackground = loadImage("PoolGameBackground.png");
    images.background = loadImage("spr_background4.png");
    images.ball = loadImage("spr_ball2.png");
    images.redBall = loadImage("spr_redBall2.png");
    images.yellowBall = loadImage("spr_yellowBall2.png");
    images.blackBall = loadImage("spr_blackBall2.png");
    images.stick = loadImage("spr_stick.png");
    images.twoPlayersButton = loadImage("2_players_button.png");
    images.twoPlayersButtonHover = loadImage("2_players_button_hover.png");
    images.onePlayersButton = loadImage("1_player_button.png");
    images.onePlayersButtonHover = loadImage("1_player_button_hover.png");
    images.muteButton = loadImage("mute_button.png");
    images.muteButtonHover = loadImage("mute_button_hover.png");
    images.muteButtonPressed = loadImage("mute_button_pressed.png");
    images.muteButtonPressedHover = loadImage("mute_button_pressed_hover.png");
    images.easyButton = loadImage("easy_button.png");
    images.easyButtonHover = loadImage("easy_button_hover.png");
    images.mediumButton = loadImage("medium_button.png");
    images.mediumButtonHover = loadImage("medium_button_hover.png");
    images.hardButton = loadImage("hard_button.png");
    images.hardButtonHover = loadImage("hard_button_hover.png");
    images.backButton = loadImage("back_button.png");
    images.backButtonHover = loadImage("back_button_hover.png");
    images.continueButton = loadImage("continue_button.png");
    images.continueButtonHover = loadImage("continue_button_hover.png");
    images.insaneButton = loadImage("insane_button.png");
    images.insaneButtonHover = loadImage("insane_button_hover.png");
    images.aboutButton = loadImage("about_button.png");
    images.aboutButtonHover = loadImage("about_button_hover.png");
    images.controls = loadImage("controls.png");

    // sounds.side = loadSound("Side.wav");
    // sounds.ballsCollide = loadSound("BallsCollide.wav");
    // sounds.strike = loadSound("Strike.wav");
    // sounds.hole = loadSound("Hole.wav");

    // // Bossa Antigua Kevin MacLeod (incompetech.com)
    // // Licensed under Creative Commons: By Attribution 3.0 License
    // // http://creativecommons.org/licenses/by/3.0/
    // sounds.jazzTune = loadSound("Bossa Antigua.mp3");
}

// sounds.fadeOut = function (sound) {

//     var fadeAudio = setInterval(function () {

//         if (GAME_STOPPED)
//             return;

//         // Only fade if past the fade out point or not at zero already
//         if ((sound.volume >= 0.05)) {
//             sound.volume -= 0.05;
//         }
//         else {
//             sound.pause();
//             clearInterval(fadeAudio);
//         }
//     }, 400);
// }