document.title = 'MultiPlayer Tossing game';

const tossed = Math.random();
function Toss() {
  if (Math.random() <= 0.5) {
    alert('Head')
  }

  else {
    alert('Tail');
  }
};

const scores = {
  wins: 0,
  losses: 0,
  ties: 0
}

function tail() {
  if (Math.random() >= 0.5) {
    alert('The computer choosed Tail. You win');
    if (tossed <= 0.5) {
      console.log(Number + 1)
    }
    
  }
  else {
    alert('You Lose');
    console.log('You Lose')
  }

// console.log('The computer choosed Tail. You win');
}

function ok() {
  if (Math.random() <= 0.5) {
    alert('You win');
    console.log('The computer choosed Head. You win')
  }
  else {
    alert('You Lose');
    console.log('The computer choosed tail. You Lose');
  }
}
let result = '';

let computerMove = '';
if (computerMove === 'You Lose') {
  result = 'You win'
}

if (result === 'You win') {
  scores.wins = scores.wins + 1;
}

else if (result === 'You lose') {scores.losses += 1;} else if (result === 'Tie.') {
  scores.ties += 1;
}

let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  Losses: 0,
  Ties: 0,
}

const Number = 0;


//document.querySelector('.results').innerHTML = `Wins: ${scores.wins} Losses: ${scores.Losses} Ties: ${scores.Ties}`;
 
//document.querySelector('.js-scores').innerHTML = `Player 1 ${scores.wins} Player 2 ${scores.wins}`

if (tossed >= 0.5) {'Tail'}
else if (tossed <= 0.5) {'Head'};

