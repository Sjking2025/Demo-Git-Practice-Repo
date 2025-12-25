const display = document.getElementById("display");

function appendToDisplay(input) {
    if (/^[0-9+\-*/.() ]$/.test(input)) {
        display.value += input;
    }
}

function clearDisplay() {
    display.value = "";
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        const expr = display.value.replace(/\s/g, '');
        if (!/^[0-9+\-*/.()]+$/.test(expr)) throw new Error('Invalid');
        display.value = Function('"use strict"; return (' + expr + ')')();
    } catch {
        display.value = "Error";
    }
}

// Keyboard support
document.addEventListener('keydown', (e) => {
    if (/[0-9+\-*/.]/.test(e.key)) appendToDisplay(e.key);
    if (e.key === 'Enter' || e.key === '=') calculate();
    if (e.key === 'Escape') clearDisplay();
    if (e.key === 'Backspace') backspace();
});
