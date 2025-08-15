document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("product-list");

  // Inline product data (instead of fetching JSON)
  const products = [
    { name: "Wheel Lug Nuts", desc: "Hardened steel, corrosion-resistant finish", img: "images/lugnuts.png" },
    { name: "Brake Pads", desc: "Ceramic compound for low dust and quiet braking", img: "images/brakepads.png" },
    { name: "Air Filter", desc: "High-flow filter media, OEM fitment", img: "images/airfilter.jpeg" },
    { name: "Serpentine Belt", desc: "EPDM construction, long life and quiet operation", img: "images/belt.jpg" },
    { name: "Engine Oil", desc: "Full synthetic 5W-30, meets API SP / ILSAC GF-6", img: "images/oil.jpg" },
    { name: "Battery", desc: "Maintenance-free AGM, high cold-cranking amps", img: "images/battery.jpg" }
  ];

  // Generate product cards
  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
    `;
    productList.appendChild(card);
  });
});
