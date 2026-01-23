const recipe = {
    title: "Chicken Tikka Masala",
    baseServings: 8,
    ingredients: [
        { name: "Vištienos šlaunelių mėsa", amt: 1, unit: "kg", mAmt: 1000, mUnit: "g" },
        { name: "Konservuoti pomidorai", amt: 400, unit: "g", mAmt: 400, mUnit: "g" },
        { name: "Kokosų pienas", amt: 250, unit: "ml", mAmt: 250, mUnit: "ml" },
        { name: "Sviestas", amt: 100, unit: "g", mAmt: 100, mUnit: "g" },
        { name: "Graikiškas jogurtas", amt: 100, unit: "g", mAmt: 100, mUnit: "g" },
        { name: "Pomidorų pasta", amt: 1, unit: "šaukšt.", mAmt: 1, mUnit: "šaukšt." },
        { name: "Didelis svogūnas", amt: 1, unit: "vnt.", mAmt: 1, mUnit: "vnt." },
        { name: "Česnako skiltelės", amt: 5, unit: "vnt.", mAmt: 5, mUnit: "vnt." },
        { name: "Garam Masala prieskoniai", amt: 60, unit: "g", mAmt: 60, mUnit: "g" },
        { name: "Ciberžolė", amt: 1, unit: "a.š.", mAmt: 1, mUnit: "a.š." },
        { name: "Paprikos milteliai", amt: 30, unit: "g", mAmt: 30, mUnit: "g" },
        { name: "Kumino milteliai", amt: 30, unit: "g", mAmt: 30, mUnit: "g" }
    ]
};

const servingsInput = document.getElementById('servings');
const unitToggle = document.getElementById('unitToggle');
const listEl = document.getElementById('ingredient-list');
const yieldEl = document.getElementById('yield-count');
const notesBox = document.getElementById('kitchen-notes');
const storageKey = "tikka_notes";

function render() {
    if (!listEl) return;
    const ratio = (parseFloat(servingsInput.value) || 1) / recipe.baseServings;
    const isMetric = unitToggle.value === 'metric';
    if(yieldEl) yieldEl.innerText = servingsInput.value;
    
    listEl.innerHTML = recipe.ingredients.map(ing => {
        const amt = isMetric ? Math.round(ing.mAmt * ratio) : parseFloat((ing.amt * ratio).toFixed(2));
        const unit = isMetric ? ing.mUnit : ing.unit;
        return `<li><span>${ing.name}</span> <strong>${amt} ${unit}</strong></li>`;
    }).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    notesBox.innerText = localStorage.getItem(storageKey) || "Geriausia patiekti su Naan duona...";
    render();
    servingsInput.oninput = render;
    unitToggle.onchange = render;
    notesBox.oninput = () => localStorage.setItem(storageKey, notesBox.innerText);
    document.getElementById('resetRecipe').onclick = () => {
        servingsInput.value = recipe.baseServings;
        localStorage.removeItem(storageKey);
        notesBox.innerText = "Geriausia patiekti su Naan duona...";
        render();
    };
});

function openModal(id) { document.getElementById(id).style.display = "block"; }
function closeModal(id) { document.getElementById(id).style.display = "none"; }
function handleContact(e) {
    e.preventDefault();
    alert("Dėkojame! Žinutė sėkmingai išsiųsta.");
    closeModal('contactModal');
}
window.onclick = function(event) {
    if (event.target.className === 'modal') { closeModal(event.target.id); }
};