const baseEndpoint = 'http://www.recipepuppy.com/api';
const proxy = `https://cors-anywhere.herokuapp.com/`;
const form = document.querySelector('form.search');

async function fetchRecipes(query) {
    const res = await fetch(`${proxy}${baseEndpoint}?q=${query}`);
    const data = await res.json();
    return data;
}

function displayRecipes(recipes) {
    console.log('Crating HTML');
    const html = recipes.map(recipe =>
        `<div>
          <h2>${recipe.title}</h2>
          <p>${recipe.ingredients}</p>
          ${recipe.thumbnail && `<img src="${recipe.thumbnail}" alt="${recipe.title}"/>`}
        div>`);
    console.log(html);
}

async function handleSubmit(event) {
    event.preventDefault();
    const el = event.currentTarget;
    console.log(el.query.value);
    // turn the form off
    el.submit.disabled = true;
    // submit the search
    const recipes = await fetchRecipes(el.query.value);
    console.log(recipes.results);
    el.submit.disabled = false;
    displayRecipes(recipes.result);
};


form.addEventListener('submit', handleSubmit)
fetchRecipes('pizza');