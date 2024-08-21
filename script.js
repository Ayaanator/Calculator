let operand_active = false;
let num1;
let num2;
let prev_op;

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

function action(val) {
    if(val === "AC") {
        field.textContent = "";
    } else if (val === "DEL") {
        field.textContent = field.textContent.slice(0, -1);
    } else if (val === "%") {
        field.textContent /= 100;
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

const actions = Array.from(document.querySelectorAll(".action"));
actions.forEach(actn => {
    actn.addEventListener("click", () => {
        action(actn.textContent);
    })
})

const operands = Array.from(document.querySelectorAll(".operand"));
operands.forEach(ops => {
    ops.addEventListener("click", () => {
        if(operand_active === false && ops.textContent != "=") {
            num1 = Number(field.textContent);
            field.textContent += `${" " + ops.textContent + " "}`;

            operand_active = true;
            prev_op = ops.textContent;
        } else {
            let num2 = Number(field.textContent.split(`${prev_op}`)[1].trim());
            console.log(num2);
            result = operate(prev_op, num1, num2);

            if(ops.textContent === "=") {
                field.textContent = result;
            } else {
                field.textContent = `${result} ${ops.textContent} `;
                prev_op = ops.textContent;
            }

            num1 = result;
        }
    })
})


function make_button(val) {
    const button = document.createElement("button");
    button.textContent = val;
    button.addEventListener("click", () => {field.textContent += button.textContent})
    container.appendChild(button);
}