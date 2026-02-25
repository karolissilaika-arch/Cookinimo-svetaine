/* --- GLOBAL DATA: ALL RECIPES --- */
const allRecipes = {
    "naan": {
        title: "Česnakinė Naan duona",
        baseServings: 4,
        storageKey: "naan_notes",
        defaultNote: "Kepkite sausoje keptuvėje, kol pasirodys pūslės!",
        ingredients: [
            { name: "Miltai (kvietiniai)", amt: 2, unit: "stikl.", mAmt: 250, mUnit: "g" },
            { name: "Graikiškas jogurtas", amt: 3, unit: "v.š.", mAmt: 60, mUnit: "g" },
            { name: "Sausos mielės", amt: 1, unit: "a.š.", mAmt: 7, mUnit: "g" },
            { name: "Cukrus", amt: 1, unit: "a.š.", mAmt: 5, mUnit: "g" },
            { name: "Druska", amt: 0.5, unit: "a.š.", mAmt: 3, mUnit: "g" },
            { name: "Kepimo milteliai", amt: 1, unit: "a.š.", mAmt: 5, mUnit: "g" },
            { name: "Kepimo soda", amt: 0.5, unit: "a.š.", mAmt: 3, mUnit: "g" },
            { name: "Lydytas sviestas", amt: 2, unit: "v.š.", mAmt: 30, mUnit: "g" },
            { name: "Kalendros(smulkintos)", amt: 1, unit: "vnt.", mAmt: 5, mUnit: "g" },
            { name: "Šiltas vanduo", amt: 100, unit: "ml", mAmt: 100, mUnit: "ml" },
            { name: "Česnako skiltelės", amt: 2, unit: "vnt.", mAmt: 10, mUnit: "g" }
        ]
    },
    "carbonara": {
        title: "Tikroji Carbonara",
        baseServings: 2,
        storageKey: "carbonara_notes",
        defaultNote: "Nenaudokite grietinėlės – kremiškumą suteikia kiaušiniai ir sūris.",
        ingredients: [
            { name: "Spaghetti makaronai", amt: 200, unit: "g", mAmt: 200, mUnit: "g" },
            { name: "Guanciale arba šoninė", amt: 100, unit: "g", mAmt: 100, mUnit: "g" },
            { name: "Kiaušiniai", amt: 2, unit: "vnt.", mAmt: 100, mUnit: "g" },
            { name: "Pecorino Romano sūris", amt: 50, unit: "g", mAmt: 50, mUnit: "g" },
            { name: "Juodieji pipirai", amt: 1, unit: "v.š.", mAmt: 5, mUnit: "g" }
        ]
    },
    "benedict": {
        title: "Benedikto kiaušiniai",
        baseServings: 2,
        storageKey: "benedict_notes",
        defaultNote: "Olandišką padažą plakite lėtai virš garų vonelės.",
        ingredients: [
            { name: "Kiaušiniai", amt: 2, unit: "vnt.", mAmt: 100, mUnit: "g" },
            { name: "Angliška bandelė", amt: 1, unit: "vnt.", mAmt: 60, mUnit: "g" },
            { name: "Kumpis", amt: 2, unit: "riek.", mAmt: 40, mUnit: "g" },
            { name: "Sviestas (atšilęs)", amt: 100, unit: "g", mAmt: 100, mUnit: "g" },
            { name: "Actas (virti)", amt: 1, unit: "v.š.", mAmt: 15, mUnit: "ml" },
            { name: "Citrinos sultys", amt: 1, unit: "a.š.", mAmt: 5, mUnit: "ml" }
        ]
    },
    "shakshuka": {
        title: "Pikantiška Šakšuka",
        baseServings: 2,
        storageKey: "shakshuka_notes",
        defaultNote: "Skaniausia su feta ir šviežia duona.",
        ingredients: [
            { name: "Pomidorai savo sultyse", amt: 1, unit: "skard.", mAmt: 400, mUnit: "g" },
            { name: "Kiaušiniai", amt: 3, unit: "vnt.", mAmt: 150, mUnit: "g" },
            { name: "Paprika", amt: 1, unit: "vnt.", mAmt: 150, mUnit: "g" },
            { name: "Kuminas", amt: 1, unit: "a.š.", mAmt: 3, mUnit: "g" },
            { name: "Česnako skiltelės", amt: 2, unit: "vnt.", mAmt: 10, mUnit: "g" }
        ]
    },
    "chachapuri": {
        title: "Adžarijos Chačapuri",
        baseServings: 1,
        storageKey: "chachapuri_notes",
        defaultNote: "Prieš valgant, išmaišykite trynį ir sviestą sūrio masėje.",
        ingredients: [
            { name: "Milti (kvietiniai)", amt: 200, unit: "g", mAmt: 200, mUnit: "g" },
            { name: "Mozzarella sūris", amt: 150, unit: "g", mAmt: 150, mUnit: "g" },
            { name: "Feta sūris", amt: 100, unit: "g", mAmt: 50, mUnit: "g" },
            { name: "Kiaušinio trynys", amt: 1, unit: "vnt.", mAmt: 20, mUnit: "g" },
            { name: "Sviestas", amt: 1, unit: "gabal.", mAmt: 20, mUnit: "g" },
            { name: "Vanduo", amt: 100, unit: "ml", mAmt: 100, mUnit: "ml" },
            { name: "Druska", amt: 1, unit: "a.š.", mAmt: 5, mUnit: "g"},
            { name: "Cukrus", amt: 0.5, unit: "a.š.", mAmt: 3, mUnit: "g" },
            { name: "Mielės (sausos)", amt: 1, unit: "a.š.", mAmt: 7, mUnit: "g" }
        ]
    },
    "ramen": {
        title: "Naminis Ramen",
        baseServings: 1,
        storageKey: "ramen_notes",
        defaultNote: "Makaronus virkite atskirai, kad sultinys neliktų krakmolingas.",
        ingredients: [
            { name: "Ramen makaronai", amt: 1, unit: "porc.", mAmt: 150, mUnit: "g" },
            { name: "Vištienos šlaunelės (be kaulo)", amt: 4, unit: "vnt.", mAmt: 400, mUnit: "g" },
            { name: "Svogūnas(smulkiai supjaustytas)", amt: 1, unit: "vnt.", mAmt: 100, mUnit: "g" },
            { name: "Česnakas(smulkiai supjaustytas)", amt: 3, unit: "vnt.", mAmt: 15, mUnit: "g" },
            { name: "Vištienos sultinys", amt: 500, unit: "ml", mAmt: 500, mUnit: "ml" },
            { name: "Sojos padažas", amt: 100, unit: "ml", mAmt: 30, mUnit: "ml" },
            { name: "Rudasis cukrus", amt: 2, unit: "v.š.", mAmt: 30, mUnit: "g" },
            { name: "Kiaušinis (virtas)", amt: 1, unit: "vnt.", mAmt: 50, mUnit: "g" },
            { name: "Jauni svogūnai", amt: 1, unit: "sauja", mAmt: 10, mUnit: "g" }
        ]
    },
    "sausage-rolls": {
        title: "Dešrelės tešloje",
        baseServings: 4,
        storageKey: "sausage_notes",
        defaultNote: "Galite pabarstyti sezamais prieš kepant.",
        ingredients: [
            { name: "Sluoksniuota tešla", amt: 1, unit: "pak.", mAmt: 400, mUnit: "g" },
            { name: "Malta jautiena su kiauliena", amt: 8, unit: "vnt.", mAmt: 400, mUnit: "g" },
            { name: "Kiaušinio plakinys", amt: 1, unit: "vnt.", mAmt: 50, mUnit: "g" },
            { name: "Garstyčios", amt: 1, unit: "v.š.", mAmt: 15, mUnit: "g" },
            { name: "Druska ir pipirai", amt: 1, unit: "a.š.", mAmt: 5, mUnit: "g" },
            { name: "kiaušinis", amt: 1, unit: "vnt.", mAmt: 50, mUnit: "g" },
            { name: "Petražolės (smulkintos)", amt: 2, unit: "v.š.", mAmt: 10, mUnit: "g" },
            { name: "kiaušinis(plaktas)", amt: 1, unit: "vnt.", mAmt: 50, mUnit: "g" },
        ]
    },
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
    },
    "risotas": {
    title: "Grybų risotas",
    baseServings: 2,
    storageKey: "risotas_notes",
    defaultNote: "Svarbiausia – nuolatinis maišymas ir kantrybė pilant sultinį.",
    ingredients: [
        { name: "Arborio ryžiai", amt: 200, unit: "g", mAmt: 200, mUnit: "g" },
        { name: "Grybai (pievagrybiai)", amt: 250, unit: "g", mAmt: 250, mUnit: "g" },
        { name: "Daržovių sultinys", amt: 700, unit: "ml", mAmt: 700, mUnit: "ml" },
        { name: "Sviestas", amt: 30, unit: "g", mAmt: 30, mUnit: "g" },
        { name: "Parmezano sūris", amt: 50, unit: "g", mAmt: 50, mUnit: "g" },
        { name: "Svogūnas", amt: 1, unit: "vnt.", mAmt: 100, mUnit: "g" },
        { name: "Baltas vynas (nebūtina)", amt: 50, unit: "ml", mAmt: 50, mUnit: "ml" }
    ]
    },
    "fried-rice": {
    title: "Kepti ryžiai (Fried Rice)",
    baseServings: 2,
    storageKey: "fried_rice_notes",
    defaultNote: "Geriausia naudoti vakarykščius, šaldytuve pastovėjusius ryžius.",
    ingredients: [
        { name: "Virti ryžiai", amt: 400, unit: "g", mAmt: 400, mUnit: "g" },
        { name: "Kiaušiniai", amt: 2, unit: "vnt.", mAmt: 100, mUnit: "g" },
        { name: "Svogūnas", amt: 1, unit: "stikl.", mAmt: 150, mUnit: "g" },
        { name: "Sojos padažas", amt: 3, unit: "v.š.", mAmt: 45, mUnit: "ml" },
        { name: "Cukrus", amt: 2, unit: "a.š.", mAmt: 10, mUnit: "g" },
        { name: "Austrių padažas", amt: 1, unit: "v.š.", mAmt: 15, mUnit: "ml" },
        { name: "Sezamų aliejus", amt: 1, unit: "a.š.", mAmt: 5, mUnit: "ml" },
        { name: "Česnako skiltelės", amt: 2, unit: "vnt.", mAmt: 10, mUnit: "g" },
        { name: "Svogūnų laiškai", amt: 1, unit: "sauja", mAmt: 10, mUnit: "g" }
    ]
    },
    "chow-mein": {
    title: "Chow Mein makaronai",
    baseServings: 2,
    storageKey: "chow_mein_notes",
    defaultNote: "Nekepkite daržovių per ilgai – jos turi likti traškios!",
    ingredients: [
        { name: "Kiaušininiai makaronai", amt: 200, unit: "g", mAmt: 200, mUnit: "g" },
        { name: "Kopūstas (pjaustytas)", amt: 2, unit: "stikl.", mAmt: 150, mUnit: "g" },
        { name: "Morkos (šiaudeliais)", amt: 1, unit: "vnt.", mAmt: 80, mUnit: "g" },
        { name: "Sojos padažas", amt: 2, unit: "v.š.", mAmt: 30, mUnit: "ml" },
        { name: "Austrių padažas", amt: 1, unit: "v.š.", mAmt: 15, mUnit: "ml" },
        { name: "Vištienos krūtinėlė", amt: 200, unit: "g", mAmt: 200, mUnit: "g" },
        { name: "Aliejus", amt: 2, unit: "v.š.", mAmt: 20, mUnit: "ml" }
    ]
    }
};

/* --- SEARCH INDEX --- */
const searchItems = [
    { title: "Česnakinė Naan duona", link: "../recipes/naan.html", category: "Indiška", img: "../naan.jpg" },
    { title: "Tikroji Carbonara", link: "../recipes/carbonara.html", category: "Itališka", img: "../carbonara.jpg" },
    { title: "Benedikto kiaušiniai", link: "../recipes/benedict.html", category: "Pusryčiai", img: "../benedict.jpg" },
    { title: "Pikantiška Šakšuka", link: "../recipes/shakshuka.html", category: "Pusryčiai", img: "../shakshuka.jpg" },
    { title: "Adžarijos Chačapuri", link: "../recipes/chachapuri.html", category: "Sakartvelo", img: "../chachapuri.jpg" },
    { title: "Naminis Ramen", link: "../recipes/ramenas.html", category: "Azijietiška", img: "../ramen.jpg" },
    { title: "Dešrelės tešloje", link: "../recipes/sausage-rolls.html", category: "Užkandžiai", img: "../sausage-rolls.jpg" },
    { title: "Chicken Tikka Masala", link: "../recipes/tikka-masala.html", category: "Indiška", img: "https://chefbook-prod.s3.us-west-2.amazonaws.com/1766927860073-1a04bd66dc9152" },
    { title: "Česnakinio sviesto bulvės", link: "../recipes/bulves.html", category: "Garnyras", img: "https://images.unsplash.com/photo-1518977676601-b53f02ac6d31?auto=format&fit=crop&w=800&q=80" },
    { title: "Khinkaliai", link: "../recipes/khinkaliai.html", category: "Sakartvelo", img: "https://images.unsplash.com/photo-1626128665085-483747621778?auto=format&fit=crop&w=800&q=80" },
    { title: "Grybų risotas", link: "../recipes/risotas.html", category: "Itališka", img: "../risotas.jpg" },
    { title: "Kepti ryžiai (Fried Rice)", link: "../recipes/fried-rice.html", category: "Azijietiška", img: "../fried-rice.jpg" },
    { title: "Chow Mein makaronai", link: "../recipes/chow-mein.html", category: "Azijietiška", img: "../chow-mein.jpg" }
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