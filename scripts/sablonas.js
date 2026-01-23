const recipe = {
    title: "Perfect Chocolate Chip Cookies",
    baseServings: 24,
    ingredients: [
        { name: "Sviestas", amt: 1, unit: "stikl.", mAmt: 227, mUnit: "g" },
        { name: "Rudas cukrus", amt: 1, unit: "stikl.", mAmt: 200, mUnit: "g" },
        { name: "Miltai", amt: 3, unit: "stikl.", mAmt: 375, mUnit: "g" },
        { name: "Šokoladas", amt: 2, unit: "stikl.", mAmt: 340, mUnit: "g" }
    ]
};

const servingsInput = document.getElementById('servings');
const unitToggle = document.getElementById('unitToggle');
const listEl = document.getElementById('ingredient-list');
const yieldEl = document.getElementById('yield-count');
const notesBox = document.getElementById('kitchen-notes');

function render() {
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
    // Load Notes
    notesBox.innerText = localStorage.getItem("cookies_notes") || "Pasirašykite pastabas...";
    render();

    servingsInput.oninput = render;
    unitToggle.onchange = render;
    notesBox.oninput = () => localStorage.setItem("cookies_notes", notesBox.innerText);

    document.getElementById('resetRecipe').onclick = () => {
        servingsInput.value = recipe.baseServings;
        localStorage.removeItem("cookies_notes");
        notesBox.innerText = "Pasirašykite pastabas...";
        render();
    };
});
// MODAL CONTROLS
function openModal(id) {
    document.getElementById(id).style.display = "block";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

function handleContact(e) {
    e.preventDefault();
    alert("Dėkojame! Žinutė sėkmingai išsiųsta.");
    closeModal('contactModal');
}

// Close modal if user clicks outside of the box
window.onclick = function(event) {
    if (event.target.className === 'modal') {
        closeModal(event.target.id);
    }
};