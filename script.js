const btnOne = document.querySelector('.btn-1');
const currentOperandText = document.querySelector('.current-operand');
const allBtn = document.querySelectorAll('.btn')

// btnOne.addEventListener('click', () => {
//     currentOperandText.innerText = btnOne.innerText;
// });

allBtn.forEach((btn) => {
   btn.addEventListener('click', () => {
    currentOperandText.innerText = btn.innerText;
   });
})

