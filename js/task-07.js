const inputField = document.querySelector(`#font-size-control`);
const text = document.querySelector(`#text`);


inputField.addEventListener(`input`, () => {
    const fontSize = inputField.value.toString() + `px`;
    console.log(fontSize);
    text.style.fontSize = fontSize; 

})