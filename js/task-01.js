// const categoriesListEl = document.querySelectorAll('.item')
// const showNumbersOfCategories = element => `В списке ${element.length} категории.`
// console.log(showNumbersOfCategories(categoriesListEl));

// const showCategories = element => element.forEach(el =>
//     console.log(`Категория: ${el.querySelector(`h2`).textContent}. Количество элементов: ${el.querySelectorAll(`li`).length}.`))
// showCategories(categoriesListEl);

const categoriesListEl = document.querySelectorAll(`.item`);
console.log(`В списке ${categoriesListEl.length} категории.`);

const showCategoriesEl = document.querySelectorAll(`h2`);
const  hm = showCategoriesEl.forEach(el =>
    console.log(`Категория: ${el.textContent}. Количество элементов: ${el.parentNode.querySelectorAll(`li`).length}.`),
);

