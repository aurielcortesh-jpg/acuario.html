const screens = {
  id: document.getElementById("screen-id"),
  connecting: document.getElementById("screen-connecting"),
  fail: document.getElementById("screen-fail"),
  menu: document.getElementById("screen-menu")
};

function show(screen) {
  Object.values(screens).forEach(s => s.classList.remove("active"));
  screens[screen].classList.add("active");
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
  const id = document.getElementById("aquariumId").value.trim().toUpperCase();
  const error = document.getElementById("idError");

  error.textContent = "";

  if (!/^[A-Z0-9]{6}$/.test(id)) {
    error.textContent = "ID inválido";
    return;
  }

  show("connecting");
  simulateConnection(id);
};

document.getElementById("retryBtn").onclick = () => {
  show("id");
};

function simulateConnection(id) {
  const text = document.getElementById("loadingText");
  text.textContent = phrases[Math.floor(Math.random() * phrases.length)];

  setTimeout(() => {
    if (id === "4G5HTD") {
      show("menu");
    } else {
      show("fail");
    }
  }, 4000);
}

/* Simulación de sensores */
setInterval(() => {
  const temp = (25 + Math.random() * 2 - 1).toFixed(1);
  const ph = (7 + Math.random() * 0.4 - 0.2).toFixed(2);

  const t = document.getElementById("tempValue");
  const p = document.getElementById("phValue");

  if (t && p) {
    t.textContent = temp + " °C";
    p.textContent = ph;
  }
}, 3000);
