const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientslist = document.querySelector(`#ingredients`)
const element = ingredients.map(option => {
    const ingredientslistElement = document.createElement(`li`)
    ingredientslistElement.textContent = option
    console.log(ingredientslistElement)
    return ingredientslistElement
})
ingredientslist.append(...element)