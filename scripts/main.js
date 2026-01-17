// 1. Your recipe data
const recipes = [
    { title: "Tikka masala", ingredients: ["vištiena", "kokosų pienas", "svogūnai"], link: "recipes/tikka-masala.html",laikas:"3 h",sudetingumas:"Vidutiniškai", img:"https://chefbook-prod.s3.us-west-2.amazonaws.com/1766927860073-1a04bd66dc9152"},
    { title: "Česnakinio sviesto bulvės", ingredients: ["bulvės", "sviestas", "česnakas"], link: "recipes/bulves.html",laikas:"1 h",sudetingumas:"Lengvai", img:"bulves.jpg"}, 
    { title: "Khinkaliai", ingredients: ["faršas", "miltai", "kaiušinis"], link: "recipes/khinkaliai.html",laikas:"2 h",sudetingumas:"Vidutiniškai", img:"khinkaliai.jpg"},
];

// 2. Function to display recipes
function displayRecipes(recipeArray) {
    const container = document.getElementById('recipeList');
    container.innerHTML = ""; // Clear current list

    recipeArray.forEach(recipe => {
        container.innerHTML += `
              <a class="card" href="${recipe.link}" data-title="${recipe.title}">
          <div class="card-img" style="background-image:url(${recipe.img})"></div>
          <div class="card-body">
            <div class="tags">
              <span class="tag accent">indiška</span>
              <span class="tag">baltymai</span>
              <span class="tag">sotu</span>
            </div>
            <h3>${recipe.title}</h3>
            <p>Indiškos virtuvės klasika</p>
            <div class="meta">
              <span>⏱️ ${recipe.laikas}</span>
              <span>⚡ ${recipe.sudetingumas}</span>
            </div>
          </div>
        </a>`;
    });
}

// 3. The Search Logic
function filterRecipes() {
    const searchTerm = document.getElementById('recipeSearch').value.toLowerCase();
    
    const filtered = recipes.filter(recipe => {
        return recipe.title.toLowerCase().includes(searchTerm) || 
               recipe.ingredients.some(ing => ing.toLowerCase().includes(searchTerm));
    });

    displayRecipes(filtered);
}

// Initialize the page with all recipes
displayRecipes(recipes);
