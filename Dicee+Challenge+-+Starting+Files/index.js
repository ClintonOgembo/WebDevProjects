var randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);
var randomImage = "./images/dice" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src", randomImage);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber2);
var randomImage2 = "./images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", randomImage2);

if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").textContent = "Draw";
}
else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player 1 wins";
}
else
    document.querySelector("h1").textContent = "Player 2 wins";
