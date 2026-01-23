const recipe = {
    title: "Česnakinio sviesto bulvės",
    baseServings: 6,
    ingredients: [
        { name: "Didelės bulvės", amt: 3, unit: "vnt.", mAmt: 3, mUnit: "vnt." },
        { name: "Sviestas", amt: 30, unit: "g", mAmt: 30, mUnit: "g" },
        { name: "Česnako skiltelės", amt: 1, unit: "vnt.", mAmt: 1, mUnit: "vnt." },
        { name: "Druska", amt: 1, unit: "a.š.", mAmt: 5, mUnit: "g" },
        { name: "Pipirai", amt: 1, unit: "a.š.", mAmt: 3, mUnit: "g" },
        { name: "Saldžioji paprika", amt: 1, unit: "a.š.", mAmt: 4, mUnit: "g" },
        { name: "Aliejus", amt: 1, unit: "šlak.", mAmt: 10, mUnit: "ml" },
        { name: "Šviežios petražolės", amt: 1, unit: "sauja", mAmt: 5, mUnit: "g" }
    ]
};

const servingsInput = document.getElementById('servings');
const unitToggle = document.getElementById('unitToggle');
const listEl = document.getElementById('ingredient-list');
const yieldEl = document.getElementById('yield-count');
const notesBox = document.getElementById('kitchen-notes');
const storageKey = "bulves_notes"; // Changed to keep potato notes separate

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
    // Load Notes using the specific key for potatoes
    if (notesBox) {
        notesBox.innerText = localStorage.getItem(storageKey) || "Skanios bulvės pavyksta, kai...";
    }
    
    render();

    if (servingsInput) servingsInput.oninput = render;
    if (unitToggle) unitToggle.onchange = render;
    if (notesBox) {
        notesBox.oninput = () => localStorage.setItem(storageKey, notesBox.innerText);
    }

    const resetBtn = document.getElementById('resetRecipe');
    if (resetBtn) {
        resetBtn.onclick = () => {
            servingsInput.value = recipe.baseServings;
            localStorage.removeItem(storageKey);
            notesBox.innerText = "Skanios bulvės pavyksta, kai...";
            render();
        };
    }
});

// MODAL CONTROLS
function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.style.display = "block";
}

function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.style.display = "none";
}

function handleContact(e) {
    e.preventDefault();
    alert("Dėkojame! Žinutė sėkmingai išsiųsta.");
    closeModal('contactModal');
}

window.onclick = function(event) {
    if (event.target.className === 'modal') {
        closeModal(event.target.id);
    }
};