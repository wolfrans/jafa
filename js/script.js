const products = [
  {
    name: "Nice T-shirts",
    category: "dress",
    image: "images/product1.jpg",
    code:"chris-001",
    seller: "Christian",
    location: "Ejisu",
    whatsapp: "233548513829"
  },
  {
    name: "Barcelona Jersey",
    category: "sports",
    image: "images/product2.jpg",
    code:"abd-001",
    seller: "Abdala",
    location: "Kumasi",
    whatsapp: "233246297659"
  },
  {
    name: "Kids sneakers",
    category: "shoes",
    image: "images/product3.jpg",
    code:"Prudy-001",
    seller: "Prudence",
    location: "Techiman",
    whatsapp: "233247005878"
  },
  {
    name: "Ladies Slippers",
    category: "shoes",
    image: "images/product4.jpg",
    code:"Rit-001",
    seller: "Rita",
    location: "Kintampo",
    whatsapp: "233543777346"
  },
  {
    name: "Glasses / frames",
    category: "",
    image: "images/product5.jpg",
    code:"oba-001",
    seller: "Obah",
    location: "Sunyani",
    whatsapp: "233245296198"
  },
   {
    name: "Nice T-shirts",
    category: "dress",
    image: "images/product6.jpg",
    code:"chris-002",
    seller: "Christian",
    location: "Ejisu",
    whatsapp: "233548513829"
  },
   {
    name: "Football",
    category: "sports",
    image: "images/product7.jpg",
    code:"abd-002",
    seller: "Abdala",
    location: "Kumasi",
    whatsapp: "233246297659"
  },
  {
    name: "Ladies slippers",
    category: "shoes",
    image: "images/product8.jpg",
    code:"Prudy-002",
    seller: "Prudence",
    location: "Techiman",
    whatsapp: "233247005878"
  },
  {
    name: "Ladies hand bags",
    category: "bags",
    image: "images/product9.jpg",
    code:"Rit-002",
    seller: "Rita",
    location: "Kintampo",
    whatsapp: "233543777346"
  },
   {
    name: "Men shorts",
    category: "dress",
    image: "images/product10.jpg",
    code:"chris-003",
    seller: "Christian",
    location: "Ejisu",
    whatsapp: "233548513829"
  },
     {
    name: "Jersey",
    category: "sports",
    image: "images/product11.jpg",
    code:"abd-003",
    seller: "Abdala",
    location: "Kumasi",
    whatsapp: "233246297659"
  },
    {
    name: "Ladies wear",
    category: "shoes",
    image: "images/product12.jpg",
    code:"Prudy-003",
    seller: "Prudence",
    location: "Techiman",
    whatsapp: "233247005878"
  }
];

function displayProducts(list) {
  const grid = document.getElementById('productGrid');
  grid.innerHTML = '';
  list.forEach(product => {
    const card = document.createElement('div');
    card.className = `product-card ${product.category}`;
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
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

document.getElementById('closeModal').onclick = () => {
  document.getElementById('modal').style.display = 'none';
};

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

window.onload = () => displayProducts(products);

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

// Optional: Close modal with ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    modal.style.display = 'none';
  }
});



