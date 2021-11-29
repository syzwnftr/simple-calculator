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

   }

   compute() {

   }

   updateDisplay() {
      this.currentOperandText.innerText = this.currentOperand;
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
})
