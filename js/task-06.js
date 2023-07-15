const inputField = document.querySelector(`#validation-input`);


inputField.addEventListener(`blur`, () => {
    const validationValue = inputField.value.length;

    if (validationValue === 6) {
        inputField.classList.add(`valid`); 
        inputField.classList.remove(`invalid`);
    } else {
        inputField.classList.add(`invalid`);
        inputField.classList.remove(`valid`);
    }

});