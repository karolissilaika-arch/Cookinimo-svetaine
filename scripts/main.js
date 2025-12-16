// Minimal paieška tik index.html kortelėms
const yearEl = document.querySelector("#year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const input = document.querySelector("#search");
const cards = Array.from(document.querySelectorAll("#grid .card"));

if (input) {
  input.addEventListener("input", (e) => {
    const q = e.target.value.trim().toLowerCase();
    cards.forEach(card => {
      const hay = (card.getAttribute("data-title") || "").toLowerCase();
      const show = !q || hay.includes(q);
      card.style.display = show ? "" : "none";
    });
  });
}
