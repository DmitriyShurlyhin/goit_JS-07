const categoryEl = document.querySelector(`ul#categories`);
const allCategoryEl = categoryEl.querySelectorAll(`.item`);
const quantityOfAllCategoriesEl = allCategoryEl.length;
console.log(`В списке ${quantityOfAllCategoriesEl} категории.`)



const nameOfCategory = allCategoryEl[0].firstElementChild.textContent;
console.log(`Категория: ${nameOfCategory}`)
const quantityOfItems = allCategoryEl[0].querySelectorAll(`li`).length;
console.log(`Количество элементов: ${quantityOfItems}`)



const nameOfCategory1 = allCategoryEl[1].firstElementChild.textContent;
console.log(`Категория: ${nameOfCategory1}`)
const quantityOfItems1 = allCategoryEl[1].querySelectorAll(`li`).length;
console.log(`Количество элементов: ${quantityOfItems1}`)


const nameOfCategory2 = allCategoryEl[2].firstElementChild.textContent;
console.log(`Категория: ${nameOfCategory2}`)
const quantityOfItems2 = allCategoryEl[2].querySelectorAll(`li`).length;
console.log(`Количество элементов: ${quantityOfItems2}`)
