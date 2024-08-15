function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    switch(operator) {
        case "+":
            return add(num1, num2)
        case "-":
            return subtract(num1, num2)
        case "*":
            return multiply(num1, num2)
        case "/":
            return divide(num1, num2)
    }
}

/*val1 = Number(prompt("enter a value: "));
op = prompt("Enter an operator: ")
val2 = Number(prompt("enter another value: "));

alert(operate(op, val1, val2));*/

const container = document.querySelector(".container");
const field = document.querySelector(".field");

const numbers = Array.from(document.querySelectorAll(".num"));
numbers.forEach(num => {
    num.addEventListener("click", () => {
        field.textContent += num.textContent;
    })
})


function make_button(val) {
    const button = document.createElement("button");
    button.textContent = val;
    button.addEventListener("click", () => {field.textContent += button.textContent})
    container.appendChild(button);
}