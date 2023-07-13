const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngridients = ingredients.map((igridient) => {
  const listIngridient = document.createElement(`li`);
  listIngridient.textContent = igridient;
  listIngridient.classList.add(`item`);
  return listIngridient;

}); 

const ingridientsElem = document.querySelector(`#ingredients`);
ingridientsElem.append(...listIngridients);

// Створить окремий елемент <li>. 
// Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію 
// у список ul#ingredients.