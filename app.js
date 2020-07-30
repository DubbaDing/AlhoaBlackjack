
// this lists all the image sources and values of the cards
// sorry it is so big
var cards = [
    {
        "imgSrc": "img/2C.png",
        "points": 2,
        "isUsed": false
    },{
        "imgSrc": "img/2D.png",
        "points": 2,
        "isUsed": false
    },{
        "imgSrc": "img/2H.png",
        "points": 2,
        "isUsed": false
    },{
        "imgSrc": "img/2S.png",
        "points": 2,
        "isUsed": false
    },
    {
        "imgSrc": "img/3C.png",
        "points": 3,
        "isUsed": false
    },{
        "imgSrc": "img/3D.png",
        "points": 3,
        "isUsed": false
    },{
        "imgSrc": "img/3H.png",
        "points": 3,
        "isUsed": false
    },{
        "imgSrc": "img/3S.png",
        "points": 3,
        "isUsed": false
    },
    {
        "imgSrc": "img/4C.png",
        "points": 4,
        "isUsed": false
    },{
        "imgSrc": "img/4D.png",
        "points": 4,
        "isUsed": false
    },{
        "imgSrc": "img/4H.png",
        "points": 4,
        "isUsed": false
    },{
        "imgSrc": "img/4S.png",
        "points": 4,
        "isUsed": false
    },
    {
        "imgSrc": "img/5C.png",
        "points": 5,
        "isUsed": false
    },{
        "imgSrc": "img/5D.png",
        "points": 5,
        "isUsed": false
    },{
        "imgSrc": "img/5H.png",
        "points": 5,
        "isUsed": false
    },{
        "imgSrc": "img/5S.png",
        "points": 5,
        "isUsed": false
    },
    {
        "imgSrc": "img/6C.png",
        "points": 6,
        "isUsed": false
    },{
        "imgSrc": "img/6D.png",
        "points": 6,
        "isUsed": false
    },{
        "imgSrc": "img/6H.png",
        "points": 6,
        "isUsed": false
    },{
        "imgSrc": "img/6S.png",
        "points": 6,
        "isUsed": false
    },
    {
        "imgSrc": "img/7C.png",
        "points": 7,
        "isUsed": false
    },{
        "imgSrc": "img/7D.png",
        "points": 7,
        "isUsed": false
    },{
        "imgSrc": "img/7H.png",
        "points": 7,
        "isUsed": false
    },{
        "imgSrc": "img/7S.png",
        "points": 7,
        "isUsed": false
    },
    {
        "imgSrc": "img/8C.png",
        "points": 8,
        "isUsed": false
    },{
        "imgSrc": "img/8D.png",
        "points": 8,
        "isUsed": false
    },{
        "imgSrc": "img/8H.png",
        "points": 8,
        "isUsed": false
    },{
        "imgSrc": "img/8S.png",
        "points": 8,
        "isUsed": false
    },
    {
        "imgSrc": "img/9C.png",
        "points": 9,
        "isUsed": false
    },{
        "imgSrc": "img/9D.png",
        "points": 9,
        "isUsed": false
    },{
        "imgSrc": "img/9H.png",
        "points": 9,
        "isUsed": false
    },{
        "imgSrc": "img/9S.png",
        "points": 9,
        "isUsed": false
    },
    {
        "imgSrc": "img/10C.png",
        "points": 10,
        "isUsed": false
    },{
        "imgSrc": "img/10D.png",
        "points": 10,
        "isUsed": false
    },{
        "imgSrc": "img/10H.png",
        "points": 10,
        "isUsed": false
    },{
        "imgSrc": "img/10S.png",
        "points": 10,
        "isUsed": false
    },
    {
        "imgSrc": "img/AC.png",
        "points": 11,
        "isUsed": false
    },{
        "imgSrc": "img/AD.png",
        "points": 11,
        "isUsed": false
    },{
        "imgSrc": "img/AH.png",
        "points": 11,
        "isUsed": false
    },{
        "imgSrc": "img/AS.png",
        "points": 11,
        "isUsed": false
    },
    {
        "imgSrc": "img/JC.png",
        "points": 10,
        "isUsed": false
    },{
        "imgSrc": "img/JD.png",
        "points": 10,
        "isUsed": false
    },{
        "imgSrc": "img/JH.png",
        "points": 10,
        "isUsed": false
    },{
        "imgSrc": "img/JS.png",
        "points": 10,
        "isUsed": false
    },
    {
        "imgSrc": "img/KC.png",
        "points": 10,
        "isUsed": false
    },{
        "imgSrc": "img/KD.png",
        "points": 10,
        "isUsed": false
    },{
        "imgSrc": "img/KH.png",
        "points": 10,
        "isUsed": false
    },{
        "imgSrc": "img/KS.png",
        "points": 10,
        "isUsed": false
    },
    {
        "imgSrc": "img/QC.png",
        "points": 10,
        "isUsed": false
    },{
        "imgSrc": "img/QD.png",
        "points": 10,
        "isUsed": false
    },{
        "imgSrc": "img/QH.png",
        "points": 10,
        "isUsed": false
    },{
        "imgSrc": "img/QS.png",
        "points": 10,
        "isUsed": false
    }
];

// the used cards will be moved into these arrays
var playerHand = [];
var computerHand = [];

// saving HTML elements to variables to more easily use them later
var playersHand = document.getElementById('playersHand'); 
var computersHand = document.getElementById('computersHand');
var hitBtn = document.getElementById('hit');
var standBtn = document.getElementById('stand')
var playerScoreArea = document.getElementById("playerScore");
var computerScoreArea = document.getElementById('computerScore');
var playArea = document.getElementById('playArea');
var logoTag = '<img id="logo" src="img/logo.png" />' // to easily put back the logo when the game is reset

// variables used in gameplay
var playerScore = 0; // keeps track of the players current score
var computerScore = 0; // keeps track of the computers current score
var breakScore = 21; // when does each player bust
var computerWillStand = 16; // when will the computer stop drawing cards
var playerTurnOver = false; // if the player has busted
var gameOver = false // if the game if over. don't let the player draw any more cards

// keep track of who is winning
var playerHandsWon = 0;
var computerHandsWon = 0;

// add event listener to hit/stand buttons
hitBtn.addEventListener('click', playerHit);
standBtn.addEventListener('click', computersTurn);

// tell the user the instructions
document.getElementById("computerInstructions").innerHTML = "The computer will stand at >= " + computerWillStand;

// start game
dealHands();

// this function deals 2 cards to the player and the computer.
function dealHands(){

    // give 2 cards to the player
    // this will calc their score. it also put their cards and score in the document
    playerHit();
    playerHit();

    // give 2 cards to the computer
    computerHand[0] = cards[getRandomCardIndex()]
    computerHand[1] = cards[getRandomCardIndex()]

    // draw the cards to the screen. the bool param is if we should hide the computer cards.
    computerCardsToScreen(true);

    // put the computer's score on the screen.
    computerScoreArea.innerHTML = `<h3 class="score">Score: ${computerHand[0].points}</h3>`

}


// this function will put everything back so we can play again.
function resetGame(){

    // change the score at the top of the page
    document.getElementById("totalScore").innerHTML = `<h4>Player: ${playerHandsWon}  -  Computer: ${computerHandsWon}</h4>`

    gameOver = false; // this will allow the user to hit and stand again.
    playArea.innerHTML = logoTag; // put back the logo

    // this loop will go though each card and put it back to "not in use" status
    for(var i=0 ; i<cards.length ; i++){
        cards[i].isUsed = false;
    }

    // remove all cards from the players hand
    playerHand = [];
    computerHand = [];
    // reset the score
    playerScore = 0;
    computerScore = 0;

    // deal fresh cards
    dealHands();
}


// adds 1 card to players hand. then puts the players hand and score on the screen
function playerHit(){

    // check if the game is already over. disable the button if so
    if(!gameOver){
        // add a random card to the players hand
        playerHand[playerHand.length] = cards[getRandomCardIndex()]
        // put the players cards on the screen
        playerCardsToScreen();
    }
}


// builds the inner html and puts it on the screen
function playerCardsToScreen(){

    // build the string of images
    var playerHandString = '';
    for(var i=0 ; i<playerHand.length ; i++){
        playerHandString += `<img src="${playerHand[i].imgSrc}" class="card"/>`;
    }
    // plop it on the screen
    playersHand.innerHTML = playerHandString;


    // calculate the player score.
    playerScore = calcHand(playerHand)

    // check if the player busted. We will print their score in red if so
    if(playerScore > breakScore){
        // player dun busted. if so, change the class of the h3 so it will be red
        playerScoreArea.innerHTML = '<h3 class="bustScore">Score: '+playerScore+' - BUSTED!</h3>';

        // we need to move on to the computers turn
        computersTurn();
    }else{
        // player is good. print in black
        playerScoreArea.innerHTML = '<h3 class="score">Score: '+playerScore+'</h3>';
    }
}

// this function will draw cards for the computer and write them to the screen.
// at the end of this function, we will calculate who won
function computersTurn(){

    // the computer will keep hitting cards until we reach our stand limit
    computerScore = calcHand(computerHand)
    while(computerScore < computerWillStand){
        computerHand[computerHand.length] = cards[getRandomCardIndex()]
        computerScore = calcHand(computerHand)
    }
    // now that we have all the cards. put them on the screen.
    computerCardsToScreen(false)

    // see if the computer busted. if so, change the class of the h3 so it will be red
    var scoreString = ''
    if(computerScore > breakScore){
        scoreString = `<h3 class="bustScore">Score: ${computerScore} - BUSTED!</h3>`;
    }else{
        scoreString = `<h3 class="score">Score: ${computerScore}</h3>`;
    }
    // print the computers score to the screen
    computerScoreArea.innerHTML = scoreString;


    // FIGURE OUT WHO WON
    if(playerScore > breakScore){
        // the player busted. we need to figure out if the computer busted too.
        if(computerScore > breakScore){
            // computer and player both busted
            showWinnerMessage('Both players busted. No winners :(');
        }else{
            // the player busted, but the computer did not
            showWinnerMessage('You busted! You are a big loser!');
            computerHandsWon++;
        }
    }else{
        // the player did not bust
        if(playerScore == computerScore){
            // the computer and the player tied
            showWinnerMessage('Both players tied. No winners :(')
        }else if(playerScore > computerScore){
            // the players score is higher than the computers. we already know the player didnt bust.
            showWinnerMessage('YOU WIN!! ~~~~ALOHA!~~~~')
            playerHandsWon++;
        }else{
            // the computer is higher. we need to check if they busted.
            if(computerScore > breakScore){
                // the computer busted
                showWinnerMessage('YOU WIN!! ~~~~ALOAH!~~~~')
                playerHandsWon++;
            }else{
                // the computer did not bust. 
                showWinnerMessage('LOSER!  The computer beat you! :(')
                computerHandsWon++;
            }
        }
    }
}


function computerCardsToScreen(hideCards){

    // always display the first card
    var computerHandString = `<img src="${computerHand[0].imgSrc}" class="card" />`
    if(hideCards){
        // the rest of the cards should be back only
        for(var c=1; c<computerHand.length ; c++){
            computerHandString += '<img src="img/back.png" class="card" />';
        }
    }else{
        // we can now show the cards
        for(var c=1; c<computerHand.length ; c++){
            computerHandString += `<img src="${computerHand[c].imgSrc}" class="card" />`;
        }
    }
    // plop the cards onto the screen
    computersHand.innerHTML = computerHandString;
}


// returns the best score for the provided cards. Aces can be 1 or 11.
function calcHand(hand){
    
    var currentScore = 0;
    var amountOfAces = 0;
    var breakPoint = 21;

    // loop through each card
    for(var i=0; i<hand.length ; i++){
        // if the card is an ace, record it. we can subtract it if they go over
        hand[i].points == 11 ? amountOfAces++ : amountOfAces;

        // add the points to the hand
        currentScore += hand[i].points;
    }

    // check if player is above 21. if so, we can subtract 10 for each ace they have.
    if(currentScore > breakPoint){

        // player busted. loop until score is below breakPoint or out of aces
        for(var usedAces=0 ; usedAces < amountOfAces && currentScore > breakScore ; usedAces++){
            currentScore -= (amountOfAces * 10);
        };
    };

    // send the score to the calling function
    return currentScore
}

// this function gets a random card that is not in use already. it returns the card index to the caller
function getRandomCardIndex(){

    // create a loop as large as we could possibly need. we can break out of it when we find a card not in use.
    for (var i=0; i<=52 ; i++){

        // gets a random number between 0-51
        var cardIndex = Math.floor((Math.random() * 52))

        // check if the card is already in use
        if(!cards[cardIndex].isUsed){
            // the card is not in use. put it in use and return the card index
            cards[cardIndex].isUsed = true
            return cardIndex
        }
    }
}

// replace the middle logo with the users message. 
function showWinnerMessage(msg){
    gameOver = true;
    playArea.innerHTML = "<div id='finalDiv'><h1 class='finalText'>"+msg+"</h1><p class='btn btn-success btn-lg' onclick='resetGame()'>Play again?</p></div>";
}