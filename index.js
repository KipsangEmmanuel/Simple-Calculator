let input = '';
let result = '';

function display(value) {
    if (value === '=') {
        try {
            result = eval(input);
        } catch (error) {
            result = 'Error';
        }
        document.getElementById('result').value = result;
        input = result;
    }
    else if (value === 'C') {
        input = '';
        result = '';
        document.getElementById('result').value = '';
    }
    else {
        input += value;
        document.getElementById('result').value = input;
    }
}

function clearScreen() {
    input = '';
    result = '';
    document.getElementById('result').value = '';
}
