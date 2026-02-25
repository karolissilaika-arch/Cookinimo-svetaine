const recipes = [
    { 
        title: "Tikka masala", 
        ingredients: ["vištiena", "kokosų pienas", "svogūnai", "garam masala"], 
        link: "recipes/tikka-masala.html",
        laikas: "3 h", sudetingumas: "Vidutiniškai", 
        img: "https://chefbook-prod.s3.us-west-2.amazonaws.com/1766927860073-1a04bd66dc9152",
        category: "Indiška", desc: "Klasikinis indiškas patiekalas su sodriu padažu."
    },
    { 
        title: "Česnakinio sviesto bulvės", 
        ingredients: ["bulvės", "sviestas", "česnakas", "petražolės"], 
        link: "recipes/bulves.html",
        laikas: "35 min", sudetingumas: "Lengvai", 
        img: "https://images.unsplash.com/photo-1518977676601-b53f02ac6d31?auto=format&fit=crop&w=800&q=80",
        category: "Garnyras", desc: "Traškios bulvytės su aromatingu česnakiniu sviestu."
    }, 
    { 
        title: "Khinkaliai", 
        ingredients: ["faršas", "miltai", "kiaušinis", "kuminas"], 
        link: "recipes/khinkaliai.html",
        laikas: "2 h", sudetingumas: "Vidutiniškai", 
        img: "https://images.unsplash.com/photo-1626128665085-483747621778?auto=format&fit=crop&w=800&q=80",
        category: "Sakartvelo", desc: "Sultingi tradiciniai koldūnai su mėsos sultiniu viduje."
    },
    { 
        title: "Tikroji Carbonara", 
        ingredients: ["spaghetti", "kiaušiniai", "šoninė", "sūris", "pipirai"], 
        link: "recipes/carbonara.html",
        laikas: "20 min", sudetingumas: "Vidutiniškai", 
        img: "../carbonara.jpg",
        category: "Itališka", desc: "Tikras romėniškas skonis be jokios grietinėlės."
    },
    { 
        title: "Česnakinė Naan duona", 
        ingredients: ["miltai", "jogurtas", "mielės", "sviestas", "česnakas"], 
        link: "recipes/naan.html",
        laikas: "1 val 20 min", sudetingumas: "Vidutiniškai", 
        img: "../naan.jpg",
        category: "Indiška", desc: "Minkšta, puri ir puikiai tinkanti prie troškinių."
    },
    { 
        title: "Benedikto kiaušiniai", 
        ingredients: ["kiaušiniai", "bandelė", "kumpis", "sviestas", "citrina"], 
        link: "recipes/benedict.html",
        laikas: "25 min", sudetingumas: "Sudėtingiau", 
        img: "../benedict.jpg",
        category: "Pusryčiai", desc: "Prabangūs pusryčiai su šilkiniu olandišku padažu."
    },
    { 
        title: "Pikantiška Šakšuka", 
        ingredients: ["kiaušiniai", "pomidorai", "paprika", "svogūnas", "kuminas"], 
        link: "recipes/shakshuka.html",
        laikas: "20 min", sudetingumas: "Lengvai", 
        img: "../shakshuka.jpg",
        category: "Pusryčiai", desc: "Vieno puodo pusryčiai tiesiai iš Vidurio Rytų."
    },
    { 
        title: "Adžarijos Chačapuri", 
        ingredients: ["tešla", "sūris", "kiaušinis", "sviestas"], 
        link: "recipes/chachapuri.html",
        laikas: "40 min", sudetingumas: "Vidutiniškai", 
        img: "../chachapuri.jpg",
        category: "Sakartvelo", desc: "Garsusis sūrio laivelis su skystu tryniu viduryje."
    },
    { 
        title: "Naminis Ramen", 
        ingredients: ["makaronai", "sultinys", "soja", "kiaušinis", "imbieras"], 
        link: "recipes/ramenas.html",
        laikas: "45 min", sudetingumas: "Vidutiniškai", 
        img: "../ramen.jpg",
        category: "Azijietiška", desc: "Sotus ir šildantis japoniškos sriubos dubenėlis."
    },
    { 
        title: "Dešrelės tešloje", 
        ingredients: ["sluoksniuota tešla", "dešrelės", "kiaušinis", "garstyčios"], 
        link: "recipes/sausage-rolls.html",
        laikas: "30 min", sudetingumas: "Lengvai", 
        img: "../sausage-rolls.jpg",
        category: "Užkandžiai", desc: "Traškus užkandis, kurį dievina visi."
    },
    { 
        title: "Grybų risotas", 
        ingredients: ["ryžiai", "grybai", "sultinys", "parmezanas"], 
        link: "recipes/risotas.html",
        laikas: "40 min", sudetingumas: "Vidutiniškai", 
        img: "../risotas.jpg",
        category: "Itališka", desc: "Kreminis itališkas ryžių patiekalas su miško grybais."
    },
    { 
        title: "Kepti ryžiai (Fried Rice)", 
        ingredients: ["ryžiai", "kiaušiniai", "daržovės", "soja"], 
        link: "recipes/fried-rice.html",
        laikas: "15 min", sudetingumas: "Lengvai", 
        img: "../fried-rice.jpg",
        category: "Azijietiška", desc: "Greitai paruošiami kiniški kepti ryžiai su kiaušiniu."
    },
    { 
        title: "Chow Mein makaronai", 
        ingredients: ["makaronai", "vištiena", "kopūstai", "soja"], 
        link: "recipes/chow-mein.html",
        laikas: "20 min", sudetingumas: "Lengvai", 
        img: "../chow-mein.jpg",
        category: "Azijietiška", desc: "Populiarūs kepinti kiaušininiai makaronai su daržovėmis."
    }
];

// --- GRID DISPLAY LOGIC ---
function displayRecipes(recipeArray) {
    const container = document.getElementById('recipeList');
    if (!container) return;
    
    const favs = JSON.parse(localStorage.getItem('my_favorites')) || [];
    container.innerHTML = ""; 

    recipeArray.forEach(r => {
        const isFav = favs.includes(r.title);
        container.innerHTML += `
        <div class="card-wrapper">
            <button class="fav-btn ${isFav ? 'active' : ''}" onclick="toggleFavorite('${r.title}')">❤</button>
            <a class="card" href="${r.link}">
                <div class="card-img" style="background-image:url(${r.img})"></div>
                <div class="card-body">
                    <span class="tag accent">${r.category}</span>
                    <h3>${r.title}</h3>
                    <p>${r.desc}</p>
                    <div class="meta">
                        <span>⏱️ ${r.laikas}</span>
                        <span>⚡ ${r.sudetingumas}</span>
                    </div>
                </div>
            </a>
        </div>`;
    });
}

// --- SEARCH DROPDOWN (COOKIE STYLE) ---
function showDropdownOnly() {
    const q = document.getElementById('recipeSearch').value.toLowerCase();
    const dropdown = document.getElementById('searchResults');

    if (q.length > 0) {
        const filtered = recipes.filter(r => 
            r.title.toLowerCase().includes(q) || 
            r.ingredients.some(i => i.toLowerCase().includes(q))
        );
        
        dropdown.style.display = "block";
        
        if (filtered.length > 0) {
            dropdown.innerHTML = filtered.map(r => `
                <a href="${r.link}" class="search-item">
                    <img src="${r.img}" alt="${r.title}">
                    <div class="search-item-info">
                        <h4>${r.title}</h4>
                        <span>${r.category} • ${r.laikas}</span>
                    </div>
                </a>
            `).join('');
        } else {
            dropdown.innerHTML = '<div class="search-item"><h4>Nerasta</h4></div>';
        }
    } else {
        dropdown.style.display = "none";
    }
}

// --- FILTERING LOGIC ---
function filterByCategory(cat) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
    
    const filtered = (cat === 'Visi') ? recipes : recipes.filter(r => r.category === cat);
    displayRecipes(filtered);
}

function showOnlyFavorites() {
    const favs = JSON.parse(localStorage.getItem('my_favorites')) || [];
    displayRecipes(recipes.filter(r => favs.includes(r.title)));
}

function toggleFavorite(t) {
    let favs = JSON.parse(localStorage.getItem('my_favorites')) || [];
    if (favs.includes(t)) {
        favs = favs.filter(x => x !== t);
    } else {
        favs.push(t);
    }
    localStorage.setItem('my_favorites', JSON.stringify(favs));
    
    // Refresh the current view
    const activeFilter = document.querySelector('.filter-btn.active')?.innerText || 'Visi';
    if (activeFilter.includes('Mėgstami')) {
        showOnlyFavorites();
    } else {
        displayRecipes(recipes); 
    }
}

// --- MODAL & UI CONTROLS ---
function openModal(id) {
    document.getElementById(id).style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
    document.body.style.overflow = "auto";
}

function handleContact(e) {
    e.preventDefault();
    alert("Dėkojame! Žinutė sėkmingai išsiųsta.");
    closeModal('contactModal');
}

// --- INITIALIZATION ---
window.onload = () => {
    const path = window.location.pathname;
    const page = path.split("/").pop();

    if (page === "index.html" || page === "") {
        // Home page: Show only 3 latest
        displayRecipes(recipes.slice(0, 3));
    } else {
        // All Recipes page: Show everything
        displayRecipes(recipes);
    }
};

// Close dropdown or modal on outside click
window.onclick = function(event) {
    if (event.target.className === 'modal') {
        closeModal(event.target.id);
    }
    if (!event.target.closest('.search')) {
        document.getElementById('searchResults').style.display = "none";
    }
};

// Mobile menu toggle
document.getElementById('mobile-menu').onclick = () => {
    document.getElementById('nav-content').classList.toggle('active');
};