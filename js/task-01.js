    
const calcElemLi = document.querySelectorAll(`#categories li.item`).length;

console.log(`Number of categories: ${calcElemLi}`)

const numElemLi = document.querySelectorAll(`#categories li.item`);

numElemLi.forEach((item) => {
    const categoryName = item.querySelector(`h2`).textContent;
    const numberElemCategory = item.querySelectorAll(`li`).length

    console.log(`Category: ${categoryName}`)
    console.log(`Elements: ${numberElemCategory}`)
});

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5