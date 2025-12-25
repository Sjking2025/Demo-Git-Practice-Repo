// Select the display element from the DOM [10]
const display = document.getElementById("display");

// Appends the character of the pressed button to the display [10]
function appendToDisplay(input) {
    display.value += input;
}

// Resets the display to an empty string [13]
function clearDisplay() {
    display.value = "";
}

// Evaluates the mathematical expression [13]
function calculate() {
    try {
        // eval() takes the string (e.g., "1+2") and returns the result [13]
        display.value = eval(display.value);
    } catch (error) {
        // If the expression is invalid (e.g., "7++"), show Error [14]
        display.value = "Error";
    }
}