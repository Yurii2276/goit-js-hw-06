
const inputField = document.querySelector(`#name-input`);
const textField = document.querySelector(`#name-output`);

inputField.addEventListener(`input`, () => {
    const textInput = inputField.value;

    if (textInput === ``) {
        textField.textContent = `Anonymous`;
    } else {
        textField.textContent = textInput;
    }
})




// Напиши скрипт, який під час набору тексту в інпуті 
// input#name - input(подія input),
    // підставляє його поточне значення в span#name - output.
// Якщо інпут порожній,
    // у спані повинен відображатися рядок "Anonymous".