document.title = 'Coin Toss Game';
let result = '';


let computerMove = '';
const tossed = Math.random();
function Toss() {
  if (Math.random() <= 0.5) {
    alert('Head')
  }

  else {
    alert('Tail');
  }
};



function tail() {
  if (Math.random() >= 0.5)
  document.querySelector('.resulted').innerHTML = 'q';
  document.querySelector('.ls').innerHTML = '[Loss]'

  {
    alert(`The computer choosed Tail. You Win`);
    console.log('The computer chossed Tail. You win');
    if (computerMove === 'tail') {
  result = 'Win'
}

else if (computerMove === 'Head') {
  result = 'Loss'
}
  }
  /*else{
    alert('The computer choosed Head. You Lose');
    console.log('The computer choosed Head. You Lose');
    computerMove = 'Head'
  }*/
}



function ok() {
  if (Math.random() <= 0.5) {
    alert('The computer choosed Head. You win');
    document.querySelector('.cc').innerHTML = '.';

    let wins = document.querySelector('.cc').innerHTML = '.';


    

    console.log('The computer choosed Head. You win');
  }
  else {
    alert('The computer choosed tail. You Lose');
    console.log('The computer choosed tail. You Lose');
  }
}

const resulted = document.querySelector('.result')

//resulted.innerHTML = `q`;

/*console.log(computerMove)

const win = 0;*/