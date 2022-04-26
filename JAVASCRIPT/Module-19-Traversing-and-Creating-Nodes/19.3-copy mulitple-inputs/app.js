const inputs = [...document.querySelectorAll('input')];
const button = document.querySelector('button');

let userInput = "";
inputs.forEach((input, index) => {
    input.addEventListener('keyup', (event) => {
        userInput = event.target.value;
        inputs[index + 1] = focus();
    })
})