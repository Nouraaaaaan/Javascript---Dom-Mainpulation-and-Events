
//Declerations and Initialization
var Score , RoundScore , ActivePlayer ,dice;

Score = [0,0];
RoundScore = 0;
ActivePlayer = 0; // 0 for first player , 1 for second player.



//object that gives us access to DOM is document object. we use # bec. we knew from css that we use # to select id.
//document.querySelector('#current-' + ActivePlayer).textContent = dice;
//document.querySelector('#current-' + ActivePlayer).innerHTML = '<em>' + dice +'</em>';

//read a value from dom and store it in a variable
//var x = document.querySelector('#current-0').textContent;
//console.log(x);

//change also css , hide dice at beginning
document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

//Events
function btn()
{

}

document.querySelector('.btn-roll').addEventListener('click',btn); //btn is called callback function.

//using anyounous function
document.querySelector('.btn-roll').addEventListener('click',function() {

    //1.Random number
    var dice = Math.floor(Math.random() * 6) + 1;

    //2.Display Result
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';

    //3.Update score if the rolled number was not 1.
    if(dice !== 1)
    {
        RoundScore += dice;
        document.querySelector('#current-' + ActivePlayer).textContent = RoundScore;
    }
    else
    {
        //Next player
        
        ActivePlayer === 0 ? ActivePlayer = 1 : ActivePlayer = 0 ; //note : this is called ternary operator
        console.log("ActivePlayer " + ActivePlayer);

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

    }
   

});





















/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/