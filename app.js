const screens = {
  id: document.getElementById("screen-id"),
  loading: document.getElementById("screen-loading"),
  error: document.getElementById("screen-error"),
  menu: document.getElementById("screen-menu")
};

function show(name) {
  Object.values(screens).forEach(s => s.classList.remove("active"));
  screens[name].classList.add("active");
}

const phrases = [
  "Un momento, el ph perfecto toma tiempo",
  "Contando burbujas y pidiendo a los peces no morder los sensores",
  "Calibrando las mareas",
  "Tu mundo acuático casi está listo",
  "Traduciendo acento de Veracruz",
  "Espere un momento"
];

document.getElementById("connectBtn").onclick = () => {
  const id = aquariumId.value.trim().toUpperCase();
  idError.textContent = "";

  if (!/^[A-Z0-9]{6}$/.test(id)) {
    idError.textContent = "ID inválido";
    return;
  }

  show("loading");
  loadingText.textContent = phrases[Math.floor(Math.random() * phrases.length)];

  setTimeout(() => {
    if (id === "4G5HTD") {
      show("menu");
    } else {
      show("error");
    }
  }, 4000);
};

document.getElementById("retryBtn").onclick = () => show("id");

/* Simulación sensores */
setInterval(() => {
  const t = (25 + Math.random() * 2 - 1).toFixed(1);
  const p = (7 + Math.random() * 0.4 - 0.2).toFixed(2);
  tempValue.textContent = `${t} °C`;
  phValue.textContent = p;
}, 3000);
