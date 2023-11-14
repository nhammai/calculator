// Basic operations
function add(a, b) {
    return parseFloat(a) + parseFloat(b);
  }
  
  function subtract(a, b) {
    return parseFloat(a) - parseFloat(b);
  }
  
  function multiply(a, b) {
    return parseFloat(a) * parseFloat(b);
  }
  
  function divide(a, b) {
    if (b === 0) {
        alert("Cannot divide by zero!");
        return;
    }
    return parseFloat(a) / parseFloat(b);
  }
  
  // Operate function
  function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case 'x':
            return multiply(a, b);
        case '÷':
            return divide(a, b);
        default:
            return;
    }
  }
  
  // Event handlers
  const numberButtons = document.querySelectorAll('.number');
  const operatorButtons = document.querySelectorAll('.operator');
  const equalsButton = document.querySelector('.equals');
  const clearButton = document.querySelector('.clear');
  const backspaceButton = document.querySelector('.backspace');
  const decimalButton = document.querySelector('.decimal');
  
  let displayValue = '0';
  let firstNumber = '';
  let secondNumber = '';
  let operator = '';
  
  numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (displayValue === '0') {
            displayValue = button.textContent;
        } else {
            displayValue += button.textContent;
        }
        document.getElementById('display').textContent = displayValue;
    });
  });
  
  operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        operator = button.textContent;
        firstNumber = displayValue;
        displayValue = '0';
        document.getElementById('display').textContent = displayValue;
    });
  });
  
  equalsButton.addEventListener('click', () => {
    secondNumber = displayValue;
    displayValue = operate(operator, firstNumber, secondNumber);
    document.getElementById('display').textContent = displayValue;
  });
  
  clearButton.addEventListener('click', () => {
    displayValue = '0';
    firstNumber = '';
    secondNumber = '';
    operator = '';
    document.getElementById('display').textContent = displayValue;
  });
  
  backspaceButton.addEventListener('click', () => {
    displayValue = displayValue.slice(0, -1);
    if (displayValue === '') {
        displayValue = '0';
    }
    document.getElementById('display').textContent = displayValue;
  });
  
  decimalButton.addEventListener('click', () => {
    if (!displayValue.includes('.')) {
        displayValue += '.';
        document.getElementById('display').textContent = displayValue;
    }
  });
  