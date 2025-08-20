let player1Score = 6;
let player2Score = 6;


function rollDice(playerNumber) {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    const diceImageSrc = "dice" + randomNumber + ".png";
    
    if (playerNumber === 1) {
        player1Score = randomNumber;
        document.querySelector(".img1").setAttribute("src", diceImageSrc);
    } else if (playerNumber === 2) {
        player2Score = randomNumber;
        document.querySelector(".img2").setAttribute("src", diceImageSrc);
    }
    
    
    updateWinnerDisplay();
}


function updateWinnerDisplay() {
    const winnerText = document.getElementById("winner-text");
    
    if (player1Score > player2Score) {
        winnerText.innerHTML = "🎉 PLAYER 1 WINS! 🎉";
        winnerText.style.color = "#00ff00";
    } else if (player2Score > player1Score) {
        winnerText.innerHTML = "🎉 PLAYER 2 WINS! 🎉";
        winnerText.style.color = "#00ff00";
    } else {
        winnerText.innerHTML = "🤝 IT'S A TIE! 🤝";
        winnerText.style.color = "#ffff00";
    }
}


function rollBothDice() {
    rollDice(1);
    rollDice(2);
}


document.addEventListener('DOMContentLoaded', function() {
   
    document.querySelector(".img1").setAttribute("src", "dice6.png");
    document.querySelector(".img2").setAttribute("src", "dice6.png");
    
    
    updateWinnerDisplay();
});
