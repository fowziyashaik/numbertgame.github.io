





let numberToGuess = Math.floor(Math.random() * 100) + 1;
let guessCount = 0;
let score = 100;
let attempt=3;
let hintCount = 0;

document.getElementById("submit").addEventListener("click", checkGuess);
document.getElementById("reset").addEventListener("click", resetGame);


function checkGuess() {
    let userGuess = document.getElementById("guess").value;
    if (userGuess === "") {
        document.getElementById("result").innerHTML = "Please enter a number!";
        return;
    }
    userGuess = parseInt(userGuess);
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        document.getElementById("result").innerHTML = "Please enter a number between 1 and 100!";
        return;
    }
    guessCount++;
    if (userGuess === numberToGuess) {
        score += 50;
        document.getElementById("result").innerHTML = `Congratulations! You found the number in ${guessCount} guesses.`;
        document.getElementById("score").innerHTML = `Score: ${score}`;
        document.getElementById("submit").disabled = true;
    } else if (userGuess < numberToGuess) {
        score -= 10;
        document.getElementById("result").innerHTML = "Try again:Too Low.....";
        document.getElementById("score").innerHTML = `Score: ${score}`;
        hintCount++;
        if (hintCount % 3 === 0) {
            
            document.getElementById("hint").innerHTML = `the number is greater than ${userGuess}.`;
            
        }
    } else {
        score -= 30;
        document.getElementById("result").innerHTML = " Try again:too High.......";
        document.getElementById("score").innerHTML = `Score: ${score}`;
        hintCount++;
        if (hintCount % 3 === 0) {
            document.getElementById("hint").innerHTML = `Hint: the number is less than ${userGuess}.`;
            
    }
}
}




function resetGame() {
    numberToGuess = Math.floor(Math.random() * 100) + 1;
    guessCount = 0
    score =100;
    hintCount = 0;
    document.getElementById("result").innerHTML = "";
    document.getElementById("hint").innerHTML = "";
    document.getElementById("score").innerHTML = `Score: ${score}`;
    document.getElementById("submit").disabled = false;
    document.getElementById("guess").value = "";
}
