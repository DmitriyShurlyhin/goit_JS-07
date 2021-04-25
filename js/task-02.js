const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const ingredientsEl = document.querySelector('#ingredients');

ingredients.forEach(ing => {
    const ingEl = document.createElement('li')
      ingEl.textContent = ing

      ingredientsEl.append(ingEl)
    })

    