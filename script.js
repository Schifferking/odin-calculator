function ActivateDigitButtons() {
  const buttons = document.querySelectorAll('.digits');

  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
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
      add(num1, num2);
    break;

    case '-':
      substract(num1, num2);
    break;

    case '*':
      multiply(num1, num2);
    break;

    case '/':
      divide(num1, num2);
    break;
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

ActivateDigitButtons();