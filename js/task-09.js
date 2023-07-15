
const btnChangeColor = document.querySelector('.change-color');
const valueColor = document.querySelector('.color');

btnChangeColor.addEventListener(`click`, changeBodyColor); 

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
 
function changeBodyColor() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  valueColor.textContent = randomColor;

}






// Напиши скрипт, який змінює кольори фону
// елемента < body > через інлайн - стиль 
// по кліку на button.change - color і 
// виводить значення кольору 
// в span.color.