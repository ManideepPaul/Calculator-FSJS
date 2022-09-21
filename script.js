const display = document.querySelector(".display");

function btnClick(val) {
    let lastInput = display.value[display.value.length - 1];

    // This will check the operators
    if (val === '+' || val === '-' || val === '*' || val === '/' || val === '=') {

        // This will check if the length is greater than 2 evaluate the value.
        if (display.value.length > 2) {

            // If the lst input is not equal to any of the operators then evaluate
            if (lastInput !== '+' && lastInput !== '-' && lastInput !== '*' && lastInput !== '/') {
                display.value = eval(display.value)
            }
        }
    }

    // Clear the input value
    if (val === 'ac') {
        display.value = ''
    }

    // Remove one item from right
    if (val === 'del') {
        display.value = display.value.slice(0, -1)
    }

    // "=", "ac", and "del" should not be printed in input
    if (val !== '=' && val !== 'ac' && val !== 'del') {

        // Add the "val" of last input item is not an operator then add to input
        if (lastInput !== '+' && lastInput !== '-' && lastInput !== '*' && lastInput !== '/') {
            display.value += val
        } else {

            // if lat input item is operator the only input number from 0 - 9
            for (let i = 0; i < 10; i++) {
                if (val === i) {
                    display.value += val
                }
            }
        }
    }

}
