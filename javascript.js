function checkAge() {
    const age = document.getElementById('age').value;
    const messageElement = document.getElementById('ageMessage');
    
    if (age >= 18) {
        messageElement.textContent = "Přístup povolen.";
        displayNumbers();  
    } else {
        messageElement.textContent = "Přístup zamítnut.";
    }
}

function displayNumbers() {
    let numbers = '';
    for (let i = 1; i <= 10; i++) {
        numbers += i + ' ';
    }
    document.getElementById('numberSequence').textContent = numbers;
}

function sum(a, b) {
    return a + b;
}

function calculateSum() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    
    const result = sum(number1, number2);
    document.getElementById('sumResult').textContent = "Součet: " + result;
}
