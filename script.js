function activateButtons() {
  activateDigitButtons();
  activateOperatorButtons();
  activateClearButton();
  activatEqualsButton();
}

function activatEqualsButton() {
  button = document.querySelector('#equals');
  display = getDisplayReference();

  button.addEventListener('click', () => {
    if(numberCaptured) {
      secondNum = parseInt(display.textContent);
    }

    //First check if there are two numbers stored and an operation
    if(firstNum && secondNum && operatorPressed) {            
      let result = operate(operatorPressed, firstNum, secondNum);
      if(!Number.isSafeInteger(result)) {
        result = result.toFixed(2);
      }
      display.textContent = result;
      firstNum = result;
      secondNum = undefined;
      numberCaptured = false;
      operatorPressed = undefined;
    }  
  });
}

function activateOperatorButtons(){  
  let result = 0;
  buttons = document.querySelectorAll('.operator');
  
  buttons.forEach(function(button) {
    button.addEventListener('click', function() { 
      if(operatorPressed === undefined) {
        operatorPressed = button.textContent;
      }

      if(numberCaptured) {
        display = getDisplayReference();
        //check if there is a number stored
        if(firstNum === undefined) {
          firstNum = parseInt(display.textContent);
          operatorPressed = button.textContent;
        } else if(secondNum === undefined){
          //store the second number
          secondNum = parseInt(display.textContent);
          display.textContent = '' ;

          //Do the operation
          result = operate(operatorPressed, firstNum, secondNum);
          if(!Number.isSafeInteger(result)) {
            result = result.toFixed(2);
          }
          addDigitToDisplay(result);
          
          //store the result in the first number and delete the second value
          firstNum = result;
          secondNum = undefined;

          //Store the new operator
          operatorPressed = button.textContent;
        }
        numberCaptured = false;
      }
    });
  });
}

function activateClearButton() {
  clear = document.querySelector('#clear');

  clear.addEventListener('click', () => {
    const display = getDisplayReference();
    display.textContent = "0";
    firstNum = undefined;
    secondNum = undefined;
    operatorPressed = undefined;
    numberCaptured = false;
  });
}

function activateDigitButtons() {
  const buttons = document.querySelectorAll('.digits');

  buttons.forEach(function(button) {    
    button.addEventListener('click', function() {
      if(!numberCaptured) {
        const display = getDisplayReference();
        display.textContent = '';
        numberCaptured = true;
      }
      addDigitToDisplay(button.textContent);
    });
  });
}

function addDigitToDisplay(num) {
  displayNum = getNumber();
  const display = getDisplayReference();

  //Check if there is a number on the display
  if(typeof(displayNum) === 'number') {
    display.textContent += num;
  } else {
    display.textContent = num;
  }
}

function getDisplayReference() {
  return document.querySelector('.display');
}

function getNumber() {
  const display = getDisplayReference();
  return parseInt(display.textContent);
}

function operate(operator, num1, num2) {
  switch(operator) {
    case '+':
      return add(num1, num2);

    case '-':
      return substract(num1, num2);

    case 'x':
      return multiply(num1, num2);

    case '÷':
      return divide(num1, num2);
  }
}

function add(num1, num2) {
  return num1 + num2;
}

function substract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if(num2 === 0){
    return "Error, divide by 0";
  }
  return num1 / num2;
}

let firstNum;
let secondNum;
let operatorPressed;
let numberCaptured = false;
activateButtons();