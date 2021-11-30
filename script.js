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
      if(this.currentOperand === '') {
         return;
      }

      if(this.previousOperand != '') {
         this.compute();
      }

      this.operation = operation;
      this.previousOperand = this.currentOperand;
      this.currentOperand = '';
   }

   percent() {
      if(this,this.previousOperand === '') {
         return;
      }
      this.currentOperand  = parseFloat((this.currentOperand / 100) * this.previousOperand);
   }

   compute() {
      let result;
      const previousNumber = parseFloat(this.previousOperand);
      const currentNumber = parseFloat(this.currentOperand);

      if(isNaN(previousNumber) || isNaN(currentNumber)) {
         return;
      }

      switch (this.operation) {
         case '+': 
            result = previousNumber + currentNumber;
            break;
         case '-': 
            result = previousNumber - currentNumber;
            break;
         case 'x': 
            result = previousNumber * currentNumber;
            break;
         case '/': 
            result = previousNumber / currentNumber;
            break;
         default:
            return;
      }

      this.currentOperand = result;
      this.previousOperand = '';
      this.operation = undefined;
   }

   updateDisplay() {
      this.currentOperandText.innerText = this.currentOperand;
      if(this.operation != null) {
         this.previousOperandText.innerText = `${this.previousOperand} ${this.operation}`;   
      } else  {
         this.previousOperandText.innerText = '';
      }
   }
}


const numberBtn = document.querySelectorAll('.btn-num');
const operationBtn = document.querySelectorAll('.btn-operation');
const equalBtn = document.querySelector('.btn-equal');
const clearBtn = document.querySelector('.btn-clear');
const currentOperandText = document.querySelector('.current-operand');
const previousOperandText = document.querySelector('.previous-operand');
const percentBtn = document.querySelector('.btn-percent');

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

percentBtn.addEventListener('click', () => {
   calculator.percent();
   calculator.updateDisplay();
});

equalBtn.addEventListener('click', () =>   {
   calculator.compute();
   calculator.updateDisplay();
});

clearBtn.addEventListener('click', () =>   {
   calculator.clear();
   calculator.updateDisplay();
});