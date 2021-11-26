const btnOne = document.querySelector('.btn-1');
const currentOperandText = document.querySelector('.current-operand');

btnOne.addEventListener('click', () => {
    currentOperandText.innerText = btnOne.innerText;
});