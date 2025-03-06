// Petrol pump data
const petrolPumps = [
  {
    name: "Indian Oil - CP",
    location: "Connaught Place, Delhi",
    amenities: ["Free Air", "Restrooms", "24/7 Service"],
  },
  {
    name: "HP Petrol Pump - Karol Bagh",
    location: "Karol Bagh, Delhi",
    amenities: ["Convenience Store", "Oil Change", "Fast Billing"],
  },
  {
    name: "BPCL - South Extension",
    location: "South Extension, Delhi",
    amenities: ["EV Charging", "24/7 Open", "Nitrogen Air"],
  },
  {
    name: "Shell - Vasant Kunj",
    location: "Vasant Kunj, Delhi",
    amenities: ["Car Wash", "Restrooms", "Cafe"],
  },
  {
    name: "Essar - Lajpat Nagar",
    location: "Lajpat Nagar, Delhi",
    amenities: ["Free Air", "ATM", "Card Payment Accepted"],
  },
  {
    name: "Reliance Petroleum - Saket",
    location: "Saket, Delhi",
    amenities: ["Fast Fueling", "EV Charging", "Lounge"],
  },
  {
    name: "Nayara Energy - Dwarka",
    location: "Dwarka Sector 10, Delhi",
    amenities: ["Free Air", "Nitrogen Air", "Diesel Filtration"],
  },
  {
    name: "BPCL - Mayur Vihar",
    location: "Mayur Vihar, Delhi",
    amenities: ["24/7 Service", "Oil Change", "ATM"],
  },
  {
    name: "Indian Oil - Rohini",
    location: "Rohini Sector 16, Delhi",
    amenities: ["Free Air", "Tyre Inflation", "Restrooms"],
  },
  {
    name: "HP Petrol Pump - Pitampura",
    location: "Pitampura, Delhi",
    amenities: ["CNG Available", "Car Wash", "Mobile Payment"],
  },
  {
    name: "Shell - Chanakyapuri",
    location: "Chanakyapuri, Delhi",
    amenities: ["EV Charging", "Convenience Store", "Nitrogen Air"],
  },
  {
    name: "Essar - Rajouri Garden",
    location: "Rajouri Garden, Delhi",
    amenities: ["24/7 Open", "Diesel Filtration", "ATM"],
  },
  {
    name: "Indian Oil - Janakpuri",
    location: "Janakpuri, Delhi",
    amenities: ["Free Air", "Restrooms", "Oil Change"],
  },
  {
    name: "HP Petrol Pump - Green Park",
    location: "Green Park, Delhi",
    amenities: ["Nitrogen Air", "Fast Billing", "Cafe"],
  },
  {
    name: "Reliance Petroleum - Uttam Nagar",
    location: "Uttam Nagar, Delhi",
    amenities: ["Free Air", "Tyre Inflation", "24/7 Service"],
  },
  {
    name: "BPCL - Anand Vihar",
    location: "Anand Vihar, Delhi",
    amenities: ["EV Charging", "Diesel Filtration", "Nitrogen Air"],
  },
];

// Fuel prices
const fuelPrices = { petrol: "₹98.50 per Litre", diesel: "₹89.30 per Litre" };

// Populate dropdown
const petrolPumpSelect = document.getElementById("petrolPumpSelect");
petrolPumps.forEach((pump, index) => {
  const option = document.createElement("option");
  option.value = index;
  option.textContent = pump.name;
  petrolPumpSelect.appendChild(option);
});

// Fetch data
function fetchData() {
  const selectedIndex = petrolPumpSelect.value;
  const outputDiv = document.getElementById("output");
  const loader = document.getElementById("loader");

  if (selectedIndex === "") {
    outputDiv.classList.add("hidden");
    return;
  }

  outputDiv.classList.add("hidden");
  loader.classList.remove("hidden");

  setTimeout(() => {
    const pump = petrolPumps[selectedIndex];
    outputDiv.innerHTML = `
              <h2>${pump.name}</h2>
              <p><strong>Location:</strong> ${pump.location}</p>
              <p><strong>Petrol Price:</strong> ${fuelPrices.petrol}</p>
              <p><strong>Diesel Price:</strong> ${fuelPrices.diesel}</p>
              <p><strong>Amenities:</strong> ${pump.amenities.join(", ")}</p>
          `;
    loader.classList.add("hidden");
    outputDiv.classList.remove("hidden");
  }, 1500);
}
