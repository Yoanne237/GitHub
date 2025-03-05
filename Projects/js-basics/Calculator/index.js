const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        // Replace eval() with a safer calculation method
        display.value = Function('"use strict"; return (' + display.value + ')')();
    } catch (error) {
        display.value = "Error";
    }
}