class Calculator {
   constructor(previousOperandText, currentOperandText) {
      this.currentOperandText = currentOperandText;
      this.previousOperandText = previousOperandText;
   }

   clear() {

   }

   appendNumber() {

   }

   chooseOperation() {

   }

   compute() {

   }

   updateDisplay() {
      
   }
}


const numberBtn = document.querySelectorAll('.btn-num');
const operationBtn = document.querySelectorAll('.btn-operation');
const equalBtn = document.querySelector('.btn-equal');
const clearBtn = document.querySelector('.btn-clear');
const currentOperandText = document.querySelector('.current-operand');
const previousOperandText = document.querySelector('.previous-operand');