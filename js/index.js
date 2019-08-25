//Function responsible for the addition operator
function addFunction() {
    const num1 = document.querySelector(".input1").value;
    const num2 = document.querySelector(".input2").value;
    const sum = parseFloat(num1) + parseFloat(num2)
    window.alert(`${num1} + ${num2} = ${sum}`)
}
//Function responsible for the subtraction operator
function subFunction() {
    const num1 = document.querySelector(".input3").value;
    const num2 = document.querySelector(".input4").value;
    const subtract = num1 - num2
    window.alert(`${num1} - ${num2} = ${subtract}`)
}
//Function responsible for the multiplication operator
function multiplicationFunction() {
    const num1 = document.querySelector(".input5").value;
    const num2 = document.querySelector(".input6").value;
    const multiply = num1 * num2
    window.alert(`${num1} X ${num2} = ${multiply}`)
}
//Function responsible for the division operator
function divisionFunction() {
    const num1 = document.querySelector(".input7").value;
    const num2 = document.querySelector(".input8").value;
    const divide = num1 / num2
    window.alert(`${num1} / ${num2} = ${divide}`)
}
//Function to reset all calculator inputs
function reset() {
    const inputElements = document.getElementsByTagName("input");
    for (let i = 0; i < inputElements.length; i++) {
        if (inputElements[i].type === 'number') {
            inputElements[i].value = '';
        }
    }
}