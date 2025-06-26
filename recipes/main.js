import recipes from './recipes.mjs';

function random(num) {
	return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
	const listLength = list.length;
	const randomNum = random(listLength);
	return list[randomNum];
}
console.log(getRandomListEntry(recipes));

const recipe = getRandomListEntry(recipes);
console.log(recipeTemplate(recipe));


function tagsTemplate(tags) {
	const html = tags.map(tag => `<div class="tag">${tag}</div>`).join("  ")

	return html;
}

function ratingTemplate(rating) {
	let html = `<span
		class="rating"
		role="img"
		aria-label="Rating: ${rating} out of 5 stars"
	>`;

	for (let i = 1; i <= 5; i++) {
		if (i <= rating) {
			html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
		} else {
			html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
		}
	}

	html += `</span>`;
	return html;
}

function recipeTemplate(recipe) {
	return `<figure id="recipe">
            <img src="${recipe.image}" alt="${recipe.description}">
            <figcaption id="recipeinfo">
                <div id="tagscontainer">
                    ${tagsTemplate(recipe.tags)}
                </div>
                <p id="recipename"><a  href="${recipe.url}">
                    ${recipe.name}
                </a></p>

                ${ratingTemplate(recipe.rating)}

                <p id="recipedescription">
                ${recipe.description}
                </p>
            </figcaption>
        </figure>`;
}


function renderRecipes(recipeList) {
	// get the element we will output the recipes into
    const container = document.getElementById("recipecontainer");
	// use the recipeTemplate function to transform our recipe objects into recipe HTML strings
    const html = recipeList.map(recipe => recipeTemplate(recipe)).join("");
	// Set the HTML strings as the innerHTML of our output element.
    container.innerHTML = html;
}

function init() {
  // get a random recipe
  const recipe = getRandomListEntry(recipes);
  // render the recipe with renderRecipes.
  renderRecipes([recipe]);
}

document.getElementById("searchbutton").addEventListener("click", () => {
  const inputBox = document.getElementById("searchbox");
  const userInput = inputBox.value.toLowerCase();
  console.log(userInput);
  filterRecipes(userInput);
});

function filterRecipes(query) {
  const filtered = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(query) ||
    recipe.tags.some(tag => tag.toLowerCase().includes(query)) ||
    recipe.description.toLowerCase().includes(query) ||
    recipe.recipeIngredient.join(" ").toLowerCase().includes(query)
  );
  renderRecipes(filtered);
}
init();