var scores, roundScore, activePlayer, gamePlaying;

init();

var double;





//------------------ROLL DICE 1--------------------------------
document.querySelector('.roll').addEventListener('click', function () {
    if (gamePlaying) {
        //1. Random Number
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
        console.log(dice1);
        console.log(dice2);

        //2. Display the result OF DICE 1
        document.getElementById('dice1').style.display = 'block';
        document.getElementById('dice2').style.display = 'block';
        document.getElementById('dice1').src = 'dice-' + dice1 + '.svg';
        document.getElementById('dice2').src = 'dice-' + dice2 + '.svg';



        // 3. Update the  round score IF  the rolled number was NOT 1
        if (dice1 !== 1 && dice2 !== 1) {
            //Add score
            roundScore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            //Next Player
            nextPlayer();
        };
        /*
        
        if (double === 6 && dice1 === 6) {
            //Pllayer Loses
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = '0';
            nextPlayer();
        } else if (dice1 !== 1) {
            //Add score
            roundScore += dice1;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            //Next Player
            nextPlayer();
        };
        double = dice1;
        */
    }
});


//-----------------------HOLD--------------------------------------------------------
document.querySelector('.hold').addEventListener('click', function () {
    if (gamePlaying) {
        // 1. Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;


        //2. Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        var input = document.querySelector('.final-score').value;
        var winningScore;

        // Undefine, 0, null or "" are  COERCED to false
        // Anything else is COERCED to true

        if (input) {
            winningScore = input;
        } else {
            winningScore = 100;
        }

        //3. Check IF player wins the game
        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
            document.getElementById('dice1').style.display = 'none';
            document.getElementById('dice2').style.display = 'none';

            document.querySelector('.player-' + activePlayer).classList.add('winner');
            document.querySelector('.player-' + activePlayer).classList.remove('active');
            gamePlaying = false;
        } else {
            //Next Player
            nextPlayer();
        }
    }
});
//===================================================================



//---------------NEXT PLAYER FUNCTION---------------
function nextPlayer() {
    //Next Player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0').classList.toggle('active');
    document.querySelector('.player-1').classList.toggle('active');

    //HIDE DICE WHEN PLAYER ROLLS 1
    document.getElementById('dice1').style.display = 'none';
    document.getElementById('dice2').style.display = 'none';
};
//==========================================

//-------------------DISSAPPEAR--------




//--------------NEW GAME-----------
document.querySelector('.new').addEventListener('click', init);
//====================================================

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    document.querySelector('#dice1').style.display = 'none';
    document.querySelector('#dice2').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent = 'PLAYER 1';
    document.getElementById('name-1').textContent = 'PLAYER 2';

    document.querySelector('.player-0').classList.remove('winner');
    document.querySelector('.player-0').classList.remove('active');
    document.querySelector('.player-0').classList.add('active');
    document.querySelector('.player-1').classList.remove('winner');
    document.querySelector('.player-1').classList.remove('active');

}
//===============================================



































