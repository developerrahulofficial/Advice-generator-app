const dice = document.getElementById("dice");
const adviceNum = document.getElementById("advice-number");
const adviceText = document.querySelector(".advice-text");

window.onload = showQuote;

dice.addEventListener("click", function(){
    showQuote();
});

function showQuote() {
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then((data) => data.slip)
    .then((data) => {
        adviceNum.textContent = data.id;
        adviceText.textContent = data.advice;
    })
    .catch((error) => {
        alert(`Error ${error}`);
    })
}