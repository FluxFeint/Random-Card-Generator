let suits = ["♠", "♣", "♥", "♦"];
let ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
let timerId = null;
let timerValue = 10;

function startTimer() {
    clearInterval(timerId); 
    timerValue = 10;
    document.getElementById('timer').innerText = timerValue;

    timerId = setInterval(function() {
        timerValue--;
        document.getElementById('timer').innerText = timerValue;

        if (timerValue <= 0) {
            generateCard();
        }
    }, 1000);
}

function generateCard() {
    let randomSuit = suits[Math.floor(Math.random() * suits.length)];
    let randomRank = ranks[Math.floor(Math.random() * ranks.length)];

    let symbol1 = document.getElementById('symbol1');
    let symbol2 = document.getElementById('symbol2');
    let number = document.getElementById('number');

    symbol1.innerText = randomSuit;
    symbol2.innerText = randomSuit;
    number.innerText = randomRank;

    symbol1.classList.remove("red");
    symbol2.classList.remove("red");

    if (randomSuit === "♥" || randomSuit === "♦") {
        symbol1.classList.add("red");
        symbol2.classList.add("red");
    }

    startTimer();
}

document.getElementById('generate').addEventListener('click', generateCard);

window.onload = generateCard;

document.getElementById('widthInput').addEventListener('change', function() {
  let width = this.value;
  document.getElementById('card').style.width = width + 'px';
});

document.getElementById('heightInput').addEventListener('change', function() {
  let height = this.value;
  document.getElementById('card').style.height = height + 'px';
});