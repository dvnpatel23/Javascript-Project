
function generateMainMenuLabels(headerText){

    let labels = [

        new Tag(
            headerText, 
            new trig(100,0),
            trig.zero,
            "white",
            "left",
            "Bookman",
            "100px"
        ),
        new Tag(

            new trig(1250,700),
            trig.zero,
            "white",
            "left",
            "Bookman",
            "20px"
        )
    ];


    return labels;
}


function generateMainMenuButtons(inGame){



    let buttons = [];

    let dev = 0;

    if(inGame){
        dev = 200;
        buttons.push(
            new Option
                (
                    // CONTINUE BUTTON
                    images.continueButton, 
                    new trig(200,200),
                    function(){
                        Game.mainMenu.active = false;
                        GAME_STOPPED = false;
                        setTimeout(Game.continueGame,200);
                        // sounds.fadeOut(Game.mainMenu.sound);
                    },
                    images.continueButtonHover
                )
        )
    }

    // let muteImage = images.muteButton;
    // let muteImageHover = images.muteButtonHover;

    // if(Game.mainMenu.sound && Game.mainMenu.sound.volume === 0){
    //     muteImage = images.muteButtonPressed;
    //     muteImageHover = images.muteButtonPressedHover;
    // }


    // let muteButton = new Button
    // (
    //     // MUTE BUTTON
    //     muteImage, 
    //     new trig(1430,10),
    //     function(){
    //         if(Game.mainMenu.sound.volume == 0){
    //             SOUND_ON = true;
    //             Game.mainMenu.sound.volume = 0.8;
    //             this.sprite = images.muteButton;
    //             this.hoverImage = sprites.muteButtonHover;
    //         }
    //         else{
    //             SOUND_ON = false;
    //             Game.mainMenu.sound.volume = 0.0;
    //             this.sprite = sprites.muteButtonPressed;
    //             this.hoverSprite = sprites.muteButtonPressedHover;
    //         }
    //     },
    //     muteSpriteHover
    // );

    let backButton = new Option
    (
        //BACK
        images.backButton, 
        new trig(100,150),
        function(){
            Game.mainMenu.labels = generateMainMenuLabels("Classic 8-Ball");
            Game.mainMenu.buttons = generateMainMenuButtons(inGame);
        },
        images.backButtonHover
    );

    buttons = buttons.concat([
        new Option
        (
            // PLAYER vs PLAYER
            images.twoPlayersButton, 
            new trig(200,dev+200),
            function(){
                AI_ON = false;
                Game.mainMenu.active = false;
                GAME_STOPPED = false;
                setTimeout(Game.startNewGame,200);
                // sounds.fadeOut(Game.mainMenu.sound);
            },
            images.twoPlayersButtonHover
        ),
        new Option
        (
            // PLAYER vs COMPUTER
            images.onePlayersButton, 
            new trig(200,dev+400),
            function(){
                Game.mainMenu.labels = generateMainMenuLabels("Choose Difficulty");

                Mouse.reset();
                Game.mainMenu.buttons = [
                    new Option
                    (
                        //EASY
                        images.easyButton, 
                        new trig(200,150),
                        function(){
                            AI_PLAYER_NUM = 1;
                            AI_ON = true;
                            TRAIN_ITER = 30;
                            Game.mainMenu.active = false;
                            GAME_STOPPED = false;
                            setTimeout(Game.startNewGame,200);
                            // sounds.fadeOut(Game.mainMenu.sound);
                        },
                        images.easyButtonHover
                    ),
                    new Option
                    (
                        //MEDIUM
                        images.mediumButton, 
                        new trig(200,300),
                        function(){
                            AI_PLAYER_NUM = 1;
                            AI_ON = true;
                            TRAIN_ITER = 50;
                            Game.mainMenu.active = false;
                            GAME_STOPPED = false;
                            setTimeout(Game.startNewGame,200);
                            // sounds.fadeOut(Game.mainMenu.sound);
                        },
                        images.mediumButtonHover
                    ),
                    new Option
                    (
                        //HARD
                        images.hardButton, 
                        new trig(200,450),
                        function(){
                            AI_PLAYER_NUM = 1;
                            AI_ON = true;
                            TRAIN_ITER = 100;
                            Game.mainMenu.active = false;
                            GAME_STOPPED = false;
                            setTimeout(Game.startNewGame,200);
                            // sounds.fadeOut(Game.mainMenu.sound);
                        },
                        images.hardButtonHover
                    ),
                    new Option
                    (
                        //INSANE
                        images.insaneButton, 
                        new trig(200,600),
                        function(){
                            AI_PLAYER_NUM = 0;
                            AI_ON = true;
                            TRAIN_ITER = 700;
                            Game.mainMenu.active = false;
                            GAME_STOPPED = false;
                            setTimeout(Game.startNewGame,200);
                            // sounds.fadeOut(Game.mainMenu.sound);
                        },
                        images.insaneButtonHover
                    ),
                    // muteButton,
                    backButton

                ];
            },
            images.onePlayersButtonHover
        ),
        // muteButton
    ]);

    return buttons;
}