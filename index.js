// randomnumber 1 - 6 and setting images corresponding to it.
randomNumber1 = Math.floor(Math.random()*6 + 1);
var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);

randomNumber2 = Math.floor(Math.random()*6 + 1);
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

// game winner
if (randomNumber1 > randomNumber2){
document.querySelector(".container h1").textContent = "🚩Player 1 wins!";
}
else if (randomNumber1 < randomNumber2){
document.querySelector(".container h1").textContent = "Player 2 wins!🚩";
}
else{
document.querySelector(".container h1").textContent = "Draw!";
}

const reloadtButton = document.querySelector("#reload");
// Reload everything:
function reload() {
    reload = location.reload();
}
// Event listeners for reload
reloadButton.addEventListener("click", reload, false);