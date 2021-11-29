class Calculator {
   constructor(previousOperandText, currentOperandText) {
      this.currentOperandText = currentOperandText;
      this.previousOperandText = previousOperandText;
      this.clear();
   }

   clear() {
      this.currentOperand = '';
      this.previousOperand = '';
      this.operation = undefined;

   }

   appendNumber(number) {
      if(number === '.' && this.currentOperand.includes('.')) {
         return;
      }
      this.currentOperand = this.currentOperand.toString() + number.toString();

   }

   chooseOperation(operation) {
      this.operation = operation;
      this.previousOperand = this.currentOperand;
      this.currentOperand = '';
   }

   compute() {

   }

   updateDisplay() {
      this.currentOperandText.innerText = this.currentOperand;
      this.previousOperandText.innerText = this.previousOperand;
   }
}


const numberBtn = document.querySelectorAll('.btn-num');
const operationBtn = document.querySelectorAll('.btn-operation');
const equalBtn = document.querySelector('.btn-equal');
const clearBtn = document.querySelector('.btn-clear');
const currentOperandText = document.querySelector('.current-operand');
const previousOperandText = document.querySelector('.previous-operand');

const calculator = new Calculator(previousOperandText, currentOperandText);

numberBtn.forEach(button => {
   button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText);
      calculator.updateDisplay();
   });
});

operationBtn.forEach(button => {
   button.addEventListener('click', () => {
      calculator.chooseOperation(button.innerText);
      calculator.updateDisplay();
   });
});
