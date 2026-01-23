const recipe = {
    title: "Khinkaliai",
    baseServings: 12,
    ingredients: [
        { name: "Malta mėsa (jautiena/kiauliena)", amt: 400, unit: "g", mAmt: 400, mUnit: "g" },
        { name: "Svogūnai", amt: 2, unit: "vnt.", mAmt: 2, mUnit: "vnt." },
        { name: "Milti (kvietiniai)", amt: 400, unit: "g", mAmt: 400, mUnit: "g" },
        { name: "Vanduo (tešlai ir mėsai)", amt: 250, unit: "ml", mAmt: 250, mUnit: "ml" },
        { name: "Kiaušinis", amt: 1, unit: "vnt.", mAmt: 1, mUnit: "vnt." },
        { name: "Česnako skiltelės", amt: 3, unit: "vnt.", mAmt: 3, mUnit: "vnt." },
        { name: "Kuminas", amt: 1, unit: "a.š.", mAmt: 5, mUnit: "g" },
        { name: "Druska ir pipirai", amt: 2, unit: "a.š.", mAmt: 10, mUnit: "g" },
        { name: "Šviežia petražolė", amt: 1, unit: "sauja", mAmt: 10, mUnit: "g" }
    ]
};

const servingsInput = document.getElementById('servings');
const unitToggle = document.getElementById('unitToggle');
const listEl = document.getElementById('ingredient-list');
const yieldEl = document.getElementById('yield-count');
const notesBox = document.getElementById('kitchen-notes');
const storageKey = "khinkaliai_notes";

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
    notesBox.innerText = localStorage.getItem(storageKey) || "Nepamirškite – khinkalių uodegėlių nevalgome!";
    render();
    servingsInput.oninput = render;
    unitToggle.onchange = render;
    notesBox.oninput = () => localStorage.setItem(storageKey, notesBox.innerText);
    document.getElementById('resetRecipe').onclick = () => {
        servingsInput.value = recipe.baseServings;
        localStorage.removeItem(storageKey);
        notesBox.innerText = "Nepamirškite – khinkalių uodegėlių nevalgome!";
        render();
    };
});

function openModal(id) { document.getElementById(id).style.display = "block"; }
function closeModal(id) { document.getElementById(id).style.display = "none"; }
function handleContact(e) { e.preventDefault(); alert("Žinutė gauta!"); closeModal('contactModal'); }