
const products = [
  { name: "Nice T-shirts", category: "dress", image: "images/christian/chris-001.jpg", code: "chris-001", seller: "Christian", location: "Ejisu", whatsapp: "233548513829" },
  { name: "Barcelona Jersey", category: "sports", image: "images/abdala/abd-001.jpg", code: "abd-001", seller: "Abdala", location: "Kumasi", whatsapp: "233246297659" },
  { name: "Kids sneakers", category: "shoes", image: "images/prudence/prudy-001.jpg", code: "Prudy-001", seller: "Prudence", location: "Techiman", whatsapp: "233247005878" },
  { name: "Ladies Slippers", category: "shoes", image: "images/rita/rit-001.jpg", code: "Rit-001", seller: "Rita", location: "Kintampo", whatsapp: "233543777346" },
  { name: "Glasses / frames", category: "", image: "images/obah/oba-001.jpg", code: "oba-001", seller: "Obah", location: "Sunyani", whatsapp: "233245296198" },
  { name: "Nice T-shirts", category: "dress", image: "images/christian/chris-002.jpg", code: "chris-002", seller: "Christian", location: "Ejisu", whatsapp: "233548513829" },
  { name: "Football", category: "sports", image: "images/abdala/abd-002.jpg", code: "abd-002", seller: "Abdala", location: "Kumasi", whatsapp: "233246297659" },
  { name: "Ladies slippers", category: "shoes", image: "images/prudence/prudy-002.jpg", code: "Prudy-002", seller: "Prudence", location: "Techiman", whatsapp: "233247005878" },
  { name: "Men shorts", category: "dress", image: "images/christian/chris-003.jpg", code: "chris-003", seller: "Christian", location: "Ejisu", whatsapp: "233548513829" },
  { name: "Ladies hand bags", category: "bags", image: "images/rita/rit-002.jpg", code: "Rit-002", seller: "Rita", location: "Kintampo", whatsapp: "233543777346" },
  { name: "Men shorts", category: "dress", image: "images/christian/chris-004.jpg", code: "chris-004", seller: "Christian", location: "Ejisu", whatsapp: "233548513829" },
  { name: "Jersey", category: "sports", image: "images/abdala/abd-003.jpg", code: "abd-003", seller: "Abdala", location: "Kumasi", whatsapp: "233246297659" },
  { name: "Ladies' wear", category: "shoes", image: "images/prudence/prudy-003.jpg", code: "Prudy-003", seller: "Prudence", location: "Techiman", whatsapp: "233247005878" },
  { name: "Jersey", category: "sports", image: "images/abdala/abd-004.jpg", code: "abd-004", seller: "Abdala", location: "Kumasi", whatsapp: "233246297659" },
  { name: "Jersey", category: "sports", image: "images/abdala/abd-004.jpg", code: "abd-004", seller: "Abdala", location: "Kumasi", whatsapp: "233246297659" },
  { name: "Jersey", category: "sports", image: "images/abdala/abd-005.jpg", code: "abd-005", seller: "Abdala", location: "Kumasi", whatsapp: "233246297659" },
  { name: "Jersey", category: "sports", image: "images/abdala/abd-006.jpg", code: "abd-006", seller: "Abdala", location: "Kumasi", whatsapp: "233246297659" },
  { name: "Jersey", category: "sports", image: "images/abdala/abd-007.jpg", code: "abd-007", seller: "Abdala", location: "Kumasi", whatsapp: "233246297659" },
  { name: "Jersey", category: "sports", image: "images/abdala/abd-008.jpg", code: "abd-008", seller: "Abdala", location: "Kumasi", whatsapp: "233246297659" },
  { name: "Jersey", category: "sports", image: "images/abdala/abd-009.jpg", code: "abd-009", seller: "Abdala", location: "Kumasi", whatsapp: "233246297659" },
  { name: "Jersey", category: "sports", image: "images/abdala/abd-010.jpg", code: "abd-010", seller: "Abdala", location: "Kumasi", whatsapp: "233246297659" },
  { name: "Jersey", category: "sports", image: "images/abdala/abd-011.jpg", code: "abd-011", seller: "Abdala", location: "Kumasi", whatsapp: "233246297659" },
  { name: "Jersey", category: "sports", image: "images/abdala/abd-012.jpg", code: "abd-012", seller: "Abdala", location: "Kumasi", whatsapp: "233246297659" },
  { name: "Jersey", category: "sports", image: "images/abdala/abd-013.jpg", code: "abd-013", seller: "Abdala", location: "Kumasi", whatsapp: "233246297659" },
  { name: "Jersey", category: "sports", image: "images/abdala/abd-014.jpg", code: "abd-014", seller: "Abdala", location: "Kumasi", whatsapp: "233246297659" },
  { name: "Jersey", category: "sports", image: "images/abdala/abd-015.jpg", code: "abd-015", seller: "Abdala", location: "Kumasi", whatsapp: "233246297659" },
  { name: "Jersey", category: "sports", image: "images/abdala/abd-016.jpg", code: "abd-016", seller: "Abdala", location: "Kumasi", whatsapp: "233246297659" },
  { name: "Jersey", category: "sports", image: "images/abdala/abd-017.jpg", code: "abd-017", seller: "Abdala", location: "Kumasi", whatsapp: "233246297659" },
  { name: "Jersey", category: "sports", image: "images/abdala/abd-018.jpg", code: "abd-018", seller: "Abdala", location: "Kumasi", whatsapp: "233246297659" },
  { name: "Jersey", category: "sports", image: "images/abdala/abd-019.jpg", code: "abd-019", seller: "Abdala", location: "Kumasi", whatsapp: "233246297659" },
  { name: "Jersey", category: "sports", image: "images/abdala/abd-020.jpg", code: "abd-020", seller: "Abdala", location: "Kumasi", whatsapp: "233246297659" },
  { name: "Jersey", category: "sports", image: "images/abdala/abd-021.jpg", code: "abd-021", seller: "Abdala", location: "Kumasi", whatsapp: "233246297659" },
  { name: "Jersey", category: "sports", image: "images/abdala/abd-022.jpg", code: "abd-022", seller: "Abdala", location: "Kumasi", whatsapp: "233246297659" },
  { name: "Jersey", category: "sports", image: "images/abdala/abd-023.jpg", code: "abd-023", seller: "Abdala", location: "Kumasi", whatsapp: "233246297659" },
  { name: "Jersey", category: "sports", image: "images/abdala/abd-024.jpg", code: "abd-024", seller: "Abdala", location: "Kumasi", whatsapp: "233246297659" },
  { name: "Jersey", category: "sports", image: "images/abdala/abd-025.jpg", code: "abd-025", seller: "Abdala", location: "Kumasi", whatsapp: "233246297659" },
  { name: "Jersey", category: "sports", image: "images/abdala/abd-026.jpg", code: "abd-026", seller: "Abdala", location: "Kumasi", whatsapp: "233246297659" },
  { name: "Jersey", category: "sports", image: "images/abdala/abd-027.jpg", code: "abd-027", seller: "Abdala", location: "Kumasi", whatsapp: "233246297659" },
  { name: "Jersey", category: "sports", image: "images/abdala/abd-028.jpg", code: "abd-028", seller: "Abdala", location: "Kumasi", whatsapp: "233246297659" },
  { name: "Jersey", category: "sports", image: "images/abdala/abd-029.jpg", code: "abd-029", seller: "Abdala", location: "Kumasi", whatsapp: "233246297659" },
  { name: "Jersey", category: "sports", image: "images/abdala/abd-030.jpg", code: "abd-030", seller: "Abdala", location: "Kumasi", whatsapp: "233246297659" },
  { name: "Jersey", category: "sports", image: "images/abdala/abd-031.jpg", code: "abd-031", seller: "Abdala", location: "Kumasi", whatsapp: "233246297659" },
  { name: "Jersey", category: "sports", image: "images/abdala/abd-032.jpg", code: "abd-032", seller: "Abdala", location: "Kumasi", whatsapp: "233246297659" },
  { name: "Jersey", category: "sports", image: "images/abdala/abd-033.jpg", code: "abd-033", seller: "Abdala", location: "Kumasi", whatsapp: "233246297659" },
  { name: "Jersey", category: "sports", image: "images/abdala/abd-034.jpg", code: "abd-034", seller: "Abdala", location: "Kumasi", whatsapp: "233246297659" },
  { name: "Jersey", category: "sports", image: "images/abdala/abd-035.jpg", code: "abd-035", seller: "Abdala", location: "Kumasi", whatsapp: "233246297659" },
  { name: "Jersey", category: "sports", image: "images/abdala/abd-036.jpg", code: "abd-036", seller: "Abdala", location: "Kumasi", whatsapp: "233246297659" },
  { name: "Jersey", category: "sports", image: "images/abdala/abd-037.jpg", code: "abd-037", seller: "Abdala", location: "Kumasi", whatsapp: "233246297659" },
  { name: "Jersey", category: "sports", image: "images/abdala/abd-038.jpg", code: "abd-038", seller: "Abdala", location: "Kumasi", whatsapp: "233246297659" },
  { name: "Jersey", category: "sports", image: "images/abdala/abd-039.jpg", code: "abd-039", seller: "Abdala", location: "Kumasi", whatsapp: "233246297659" },
  { name: "Jersey", category: "sports", image: "images/abdala/abd-040.jpg", code: "abd-040", seller: "Abdala", location: "Kumasi", whatsapp: "233246297659" },
  { name: "Jersey", category: "sports", image: "images/abdala/abd-041.jpg", code: "abd-041", seller: "Abdala", location: "Kumasi", whatsapp: "233246297659" },
  { name: "Jersey", category: "sports", image: "images/abdala/abd-042.jpg", code: "abd-042", seller: "Abdala", location: "Kumasi", whatsapp: "233246297659" },
  { name: "Jersey", category: "sports", image: "images/abdala/abd-043.jpg", code: "abd-043", seller: "Abdala", location: "Kumasi", whatsapp: "233246297659" },
  { name: "Jersey", category: "sports", image: "images/abdala/abd-044.jpg", code: "abd-044", seller: "Abdala", location: "Kumasi", whatsapp: "233246297659" },
  { name: "Jersey", category: "sports", image: "images/abdala/abd-045.jpg", code: "abd-045", seller: "Abdala", location: "Kumasi", whatsapp: "233246297659" },
  { name: "Jersey", category: "sports", image: "images/abdala/abd-046.jpg", code: "abd-046", seller: "Abdala", location: "Kumasi", whatsapp: "233246297659" },
  { name: "Jersey", category: "sports", image: "images/abdala/abd-047.jpg", code: "abd-047", seller: "Abdala", location: "Kumasi", whatsapp: "233246297659" },
  { name: "Jersey", category: "sports", image: "images/abdala/abd-048.jpg", code: "abd-048", seller: "Abdala", location: "Kumasi", whatsapp: "233246297659" },
  { name: "Jersey", category: "sports", image: "images/abdala/abd-049.jpg", code: "abd-049", seller: "Abdala", location: "Kumasi", whatsapp: "233246297659" },
  { name: "Jersey", category: "sports", image: "images/abdala/abd-050.jpg", code: "abd-050", seller: "Abdala", location: "Kumasi", whatsapp: "233246297659" },
  { name: "Jersey", category: "sports", image: "images/abdala/abd-051.jpg", code: "abd-051", seller: "Abdala", location: "Kumasi", whatsapp: "233246297659" },
  { name: "Jersey", category: "sports", image: "images/abdala/abd-052.jpg", code: "abd-052", seller: "Abdala", location: "Kumasi", whatsapp: "233246297659" }
];


function displayProducts(list) {
  const loader = document.getElementById('loader');
  loader.style.display = 'none'; // hide loader when products are ready

  const grid = document.getElementById('productGrid');
  grid.innerHTML = '';
  list.forEach(product => {
    const card = document.createElement('div');
    card.className = `product-card ${product.category}`;
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name} by ${product.seller} in ${product.location}">
      <div class="name">${product.name}</div>
      <div class="code">code: ${product.code}</div>
      <div class="seller">By: ${product.seller}</div>
      <div class="location">📍 ${product.location}</div>
      <a class="whatsapp" href="https://wa.me/${product.whatsapp}?text=Hi%20I%20want%20to%20buy%20${product.name}%20(ID:${product.code})" target="_blank">WhatsApp</a>
    `;

    // Stop WhatsApp click from opening modal
    card.querySelector('.whatsapp').addEventListener('click', (e) => {
      e.stopPropagation();
    });

    card.addEventListener('click', () => showModal(product));
    grid.appendChild(card);
  });
}

function showModal(product) {
  document.getElementById('modalImg').src = product.image;
  document.getElementById('modalDetails').innerHTML = `
    <h2>${product.name}</h2>
    <p>Sold by: ${product.seller}</p>
    <p>Location: ${product.location}</p>
    <p>Product code:<span style="color:red; font-weight:bolder"> ${product.code}</span></p>
    <a class="whatsapp" href="https://wa.me/${product.whatsapp}?text=Hi%20I%20want%20to%20buy%20${product.name}%20(ID:${product.code})" target="_blank">WhatsApp</a>
  `;
  document.getElementById('modal').style.display = 'flex';
}

document.getElementById('hamburger').onclick = () => {
  document.querySelector('.nav-links').classList.toggle('active');
};

function filterItems(category) {
  const cards = document.querySelectorAll('.product-card');
  cards.forEach(card => {
    if (category === 'all' || card.classList.contains(category)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

document.getElementById('searchInput').addEventListener('input', function () {
  const value = this.value.toLowerCase();
  const cards = document.querySelectorAll('.product-card');
  cards.forEach(card => {
    const text = card.textContent.toLowerCase();
    card.style.display = text.includes(value) ? 'block' : 'none';
  });
});

window.onload = () => {
  // Show loader first
  const loader = document.getElementById('loader');
  loader.style.display = 'flex';

  // Simulate network delay for demo (remove setTimeout in production)
  setTimeout(() => {
    displayProducts(products);
  }, 1500);
};

// Modal closing logic
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');

modal.addEventListener('click', (e) => {
  if (e.target === modal || e.target === modalImg) {
    modal.style.display = 'none';
  }
});

document.getElementById('closeModal').onclick = () => {
  modal.style.display = 'none';
};

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    modal.style.display = 'none';
  }
});

/////////////////terms and condition modal start/////////////
// Modal elements
const termsModal = document.getElementById("termsModal");
const btn = document.getElementById("termsBtn");
const span = document.getElementsByClassName("close")[0];

// Open modal
btn.onclick = function() {
  termsModal.style.display = "flex";
}

// Close modal
span.onclick = function() {
  termsModal.style.display = "none";
}

// Close if clicking outside content
window.onclick = function(event) {
  if (event.target == termsModal) {
    termsModal.style.display = "none";
  }
}

/////////////////terms and condition modal end/////////////
// Get the close button inside the terms modal
const termsCloseBtn = document.querySelector("#termsModal .close");

// When user clicks the x, close the terms modal start
termsCloseBtn.onclick = function() {
  termsModal.style.display = "none";
};
// When user clicks the x, close the terms modal start