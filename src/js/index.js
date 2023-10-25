let inputs = document.querySelectorAll("input");
let span = document.getElementById("number-selected");
let card = document.getElementById("card");
let thankYou = document.getElementById("thank-you");

for(let input = 0; input < inputs.length; input++){
    inputs[input].addEventListener("click", () => {
        span.innerHTML = inputs[input].value;
    });
};

document.getElementById("submit").addEventListener("click", () => {
    card.classList.add("to-hold");
    thankYou.classList.remove("to-hold");
});