function getNumber() {
  const display = document.querySelector('.display');
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