const RECIPES_JSON_URL = './assets/json/galbani_recipes.json';

const getRecipesData = async () => {
  try {
    const response = await fetch(RECIPES_JSON_URL);

    if (!response.ok) {
      console.error(`Recipes loading failed: ${response.status}`);
      return [];
    }

    const data = await response.json();

    return data.recipes;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const renderRegion = (el, region) => {
  if (!region) return;
  el.insertAdjacentHTML('beforeend', `<h2 class="title title--40 red">${region}</h2>`);
};

const renderTitle = (el, title) => {
  if (!title) return;
  const markup = `
    <div class="recipe-subtitle">
      <span>Рецепт:</span>
      <p>${title}</p>
    </div>
  `;

  el.insertAdjacentHTML('beforeend', markup);
};

const renderImage = (el, image, alt) => {
  if (!image) return;
  const markup = `
    <div class="recipe-image">
      <img src="${image}" alt="${alt || 'Galbani recipe image'}" />
    </div>
  `;

  el.insertAdjacentHTML('beforeend', markup);
};

const renderList = (el, heading, items, ordered) => {
  if (!items?.length) return;

  const tag = ordered ? 'ol' : 'ul';
  const listItems = items.map(item => `<li><span>${item}</span></li>`).join('');
  const markup = `<div class="recipe-list"><b>${heading}</b><${tag}>${listItems}</${tag}></div>`;

  el.insertAdjacentHTML('beforeend', markup);
};

const renderRecipeMarkup = recipe => {
  const recipeEl = document.querySelector('[data-recipe-content]');
  if (!recipeEl) return;

  recipeEl.innerHTML = '';

  const { region, title, image, ingredients, steps } = recipe;

  renderRegion(recipeEl, region);
  renderTitle(recipeEl, title);
  renderImage(recipeEl, image, title);
  renderList(recipeEl, 'Ингредиенты:', ingredients, false);
  renderList(recipeEl, 'Приготовление:', steps, true);
};

export const showRecipe = async id => {
  const recipesData = await getRecipesData();
  const recipe = recipesData.find(item => item.id === id);

  if (!recipe) {
    console.warn(`Рецепт с id="${id}" не найден`);
    return;
  }

  renderRecipeMarkup(recipe);
};
