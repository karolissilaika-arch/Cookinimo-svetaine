/* --- GLOBAL DATA: ALL RECIPES --- */
const allRecipes = {
    "bulves": {
        title: "Česnakinio sviesto bulvės",
        baseServings: 6,
        storageKey: "bulves_notes",
        defaultNote: "Skanios bulvės pavyksta, kai...",
        ingredients: [
            { name: "Didelės bulvės", amt: 3, unit: "vnt.", mAmt: 600, mUnit: "g" },
            { name: "Sviestas", amt: 2, unit: "vnt.", mAmt: 30, mUnit: "g" },
            { name: "Česnako skiltelės", amt: 1, unit: "vnt.", mAmt: 5, mUnit: "g" },
            { name: "Druska", amt: 1, unit: "a.š.", mAmt: 5, mUnit: "g" },
            { name: "Pipirai", amt: 1, unit: "a.š.", mAmt: 3, mUnit: "g" },
            { name: "Saldžioji paprika", amt: 1, unit: "a.š.", mAmt: 4, mUnit: "g" },
            { name: "Aliejus", amt: 1, unit: "šlak.", mAmt: 10, mUnit: "ml" },
            { name: "Šviežios petražolės", amt: 1, unit: "sauja", mAmt: 5, mUnit: "g" }
        ]
    },
    "khinkaliai": {
        title: "Khinkaliai",
        baseServings: 12,
        storageKey: "khinkaliai_notes",
        defaultNote: "Nepamirškite – khinkalių uodegėlių nevalgome!",
        ingredients: [
            { name: "Malta mėsa", amt: 400, unit: "g", mAmt: 400, mUnit: "g" },
            { name: "Svogūnai", amt: 2, unit: "vnt.", mAmt: 150, mUnit: "g" },
            { name: "Milti (kvietiniai)", amt: 400, unit: "g", mAmt: 400, mUnit: "g" },
            { name: "Vanduo", amt: 250, unit: "ml", mAmt: 250, mUnit: "ml" },
            { name: "Kiaušinis", amt: 1, unit: "vnt.", mAmt: 50, mUnit: "g" },
            { name: "Česnako skiltelės", amt: 3, unit: "vnt.", mAmt: 15, mUnit: "g" },
            { name: "Kuminas", amt: 1, unit: "a.š.", mAmt: 5, mUnit: "g" },
            { name: "Druska ir pipirai", amt: 2, unit: "a.š.", mAmt: 10, mUnit: "g" },
            { name: "Šviežia petražolė", amt: 1, unit: "sauja", mAmt: 10, mUnit: "g" }
        ]
    },
    "tikka": {
        title: "Chicken Tikka Masala",
        baseServings: 8,
        storageKey: "tikka_notes",
        defaultNote: "Geriausia patiekti su Naan duona...",
        ingredients: [
            { name: "Vištienos šlaunelės", amt: 1, unit: "kg", mAmt: 1000, mUnit: "g" },
            { name: "Konservuoti pomidorai", amt: 1, unit: "skard.", mAmt: 400, mUnit: "g" },
            { name: "Kokosų pienas", amt: 1, unit: "puod.", mAmt: 250, mUnit: "ml" },
            { name: "Sviestas", amt: 0.5, unit: "pak.", mAmt: 100, mUnit: "g" },
            { name: "Graikiškas jogurtas", amt: 4, unit: "v.š.", mAmt: 100, mUnit: "g" },
            { name: "Pomidorų pasta", amt: 1, unit: "šaukšt.", mAmt: 15, mUnit: "g" },
            { name: "Didelis svogūnas", amt: 1, unit: "vnt.", mAmt: 100, mUnit: "g" },
            { name: "Česnako skiltelės", amt: 5, unit: "vnt.", mAmt: 25, mUnit: "g" },
            { name: "Garam Masala", amt: 4, unit: "v.š.", mAmt: 60, mUnit: "g" },
            { name: "Ciberžolė", amt: 1, unit: "a.š.", mAmt: 5, mUnit: "g" },
            { name: "Paprikos milteliai", amt: 2, unit: "v.š.", mAmt: 30, mUnit: "g" },
            { name: "Kumino milteliai", amt: 2, unit: "v.š.", mAmt: 30, mUnit: "g" }
        ]
    }
};

/* --- SEARCH INDEX --- */
const searchItems = [
    { title: "Chicken Tikka Masala", link: "../recipes/tikka-masala.html", category: "Indiška", img: "https://chefbook-prod.s3.us-west-2.amazonaws.com/1766927860073-1a04bd66dc9152" },
    { title: "Česnakinio sviesto bulvės", link: "../recipes/bulves.html", category: "Garnyras", img: "https://images.unsplash.com/photo-1518977676601-b53f02ac6d31?auto=format&fit=crop&w=800&q=80" },
    { title: "Khinkaliai", link: "../recipes/khinkaliai.html", category: "Sakartvelo", img: "https://images.unsplash.com/photo-1626128665085-483747621778?auto=format&fit=crop&w=800&q=80" }
];

/* --- FUNCTIONS: SEARCH --- */
function showLiveResults() {
    const q = document.getElementById('recipeSearch').value.toLowerCase().trim();
    const dropdown = document.getElementById('searchResults');
    if (q === "") { dropdown.style.display = "none"; return; }

    const filtered = searchItems.filter(r => r.title.toLowerCase().includes(q));
    dropdown.style.display = "block";
    
    if (filtered.length > 0) {
        dropdown.innerHTML = filtered.map(r => `
            <a href="${r.link}" class="search-item">
                <img src="${r.img}">
                <div class="search-item-info"><h4>${r.title}</h4><span>${r.category}</span></div>
            </a>`).join('');
    } else {
        dropdown.innerHTML = '<div class="search-item"><h4>Nerasta rezultatų</h4></div>';
    }
}

/* --- FUNCTIONS: RECIPE RENDERING --- */
let activeRecipe = null;

function render() {
    const listEl = document.getElementById('ingredient-list');
    const servingsInput = document.getElementById('servings');
    const unitToggle = document.getElementById('unitToggle');
    const yieldEl = document.getElementById('yield-count');

    if (!activeRecipe || !listEl) return;

    const ratio = (parseFloat(servingsInput.value) || 1) / activeRecipe.baseServings;
    const isMetric = unitToggle.value === 'metric';
    if(yieldEl) yieldEl.innerText = servingsInput.value;

    listEl.innerHTML = activeRecipe.ingredients.map(ing => {
        const amt = isMetric ? Math.round(ing.mAmt * ratio) : parseFloat((ing.amt * ratio).toFixed(2));
        const unit = isMetric ? ing.mUnit : ing.unit;
        return `<li><span>${ing.name}</span> <strong>${amt} ${unit}</strong></li>`;
    }).join('');
}

/* --- CORE SETUP --- */
document.addEventListener('DOMContentLoaded', () => {
    // Detect which recipe page we are on
    const mainEl = document.querySelector('[data-recipe-id]');
    
    if (mainEl) {
        const id = mainEl.getAttribute('data-recipe-id');
        activeRecipe = allRecipes[id];
        
        if (activeRecipe) {
            // Setup Kitchen Notes
            const notesBox = document.getElementById('kitchen-notes');
            if (notesBox) {
                notesBox.innerText = localStorage.getItem(activeRecipe.storageKey) || activeRecipe.defaultNote;
                notesBox.oninput = () => localStorage.setItem(activeRecipe.storageKey, notesBox.innerText);
            }

            // Setup Event Listeners for controls
            const servingsInput = document.getElementById('servings');
            const unitToggle = document.getElementById('unitToggle');
            const resetBtn = document.getElementById('resetRecipe');

            if (servingsInput) servingsInput.oninput = render;
            if (unitToggle) unitToggle.onchange = render;
            if (resetBtn) {
                resetBtn.onclick = () => {
                    servingsInput.value = activeRecipe.baseServings;
                    localStorage.removeItem(activeRecipe.storageKey);
                    if (notesBox) notesBox.innerText = activeRecipe.defaultNote;
                    render();
                };
            }
            render(); // Initial draw
        }
    }
});

/* --- MODALS & NAVIGATION --- */
function openModal(id) { document.getElementById(id).style.display = "block"; }
function closeModal(id) { document.getElementById(id).style.display = "none"; }
function handleContact(e) {
    e.preventDefault();
    alert("Dėkojame! Žinutė sėkmingai išsiųsta.");
    closeModal('contactModal');
}

window.onclick = function(e) {
    if (e.target.className === 'modal') closeModal(e.target.id);
    if (!e.target.closest('.search')) {
        const results = document.getElementById('searchResults');
        if (results) results.style.display = "none";
    }
};