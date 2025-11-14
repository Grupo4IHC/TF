// Mostrar nombre del usuario activo
document.addEventListener("DOMContentLoaded", () => {
  const nombreActivo = localStorage.getItem("usuarioActivo");

  if (nombreActivo) {
    document.getElementById("auth-buttons").style.display = "none";
    const profileButton = document.getElementById("profile-button");
    profileButton.style.display = "block";
    document.getElementById("btnPerfil").textContent = nombreActivo;

    const btnPerfil = document.getElementById("btnPerfil");
    const profileMenu = document.getElementById("profile-menu");
    btnPerfil.addEventListener("click", () => {
      profileMenu.classList.toggle("show");
    });

    document.getElementById("cerrarSesion").addEventListener("click", () => {
      localStorage.removeItem("usuarioActivo");
      window.location.href = "index.html";
    });

    // Footer dinámico
    const footerUserSection = document.getElementById("footer-user-section");
    footerUserSection.innerHTML = `
        <h4 class="active">Perfil de ${nombreActivo}</h4>
        <ul>
          <li><a href="Perfil.html">Ver Perfil</a></li>
          <li><a href="#" id="cerrarSesionFooter">Cerrar Sesión</a></li>
        </ul>
      `;
    document
      .getElementById("cerrarSesionFooter")
      .addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.removeItem("usuarioActivo");
        window.location.href = "index.html";
      });
  }

  // Botón volver
  document
    .getElementById("btnAtras")
    .addEventListener("click", () => window.history.back());
});

// Inicializar mapa
const map = L.map("map").setView([-12.0464, -77.0428], 12);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
}).addTo(map);

const iconoAgua = L.icon({
  iconUrl: "https://img.icons8.com/ios/100/000000/water.png",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

// Datos de puntos de agua potable
const puntos = [
  { lat: -12.042, lng: -77.03, direccion: "Av. Petit Thouars 1200" },
  { lat: -12.05, lng: -77.04, direccion: "Parque Kennedy, Miraflores" },
  { lat: -12.06, lng: -77.02, direccion: "Av. Grau 890" },
  { lat: -12.07, lng: -77.06, direccion: "Plaza San Miguel" },
];

puntos.forEach((p, i) => {
  p.tiempo = Math.floor(Math.random() * 60) + 30;
  p.marcador = L.marker([p.lat, p.lng], { icon: iconoAgua }).addTo(map);
  p.marcador.bindPopup(crearPopupHTML(p, i), { minWidth: 280 });
});

function crearPopupHTML(p, i) {
  const horaActual = new Date();
  const horaLimite = new Date(horaActual.getTime() + p.tiempo * 1000);
  const horaFormateada = horaLimite.toLocaleTimeString("es-PE", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return `
      <div style="font-family: Poppins, sans-serif; text-align: center;">
        <h3 style="margin: 5px 0; color: #004aad;">Punto de Agua Potable</h3>
        <hr style="border: none; border-top: 1px solid #ccc; margin: 6px 0;">
        <p style="margin: 3px 0;"><b>Ubicación:</b> ${p.direccion}</p>
        <p style="margin: 3px 0;"><b>Estado:</b> <span id="estado${i}" style="color: green;">Disponible</span></p>
        <p style="margin: 3px 0;"><b>Tiempo restante:</b> <span id="tiempo${i}">${
    p.tiempo
  }</span> seg</p>
        <p style="margin: 3px 0;"><b>Disponible hasta:</b> ${horaFormateada}</p>
        <button onclick="window.open('https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          p.direccion
        )}','_blank')" 
          style="margin-top: 6px; background-color:#004aad; color:white; border:none; padding:6px 12px; border-radius:6px; cursor:pointer; font-weight:bold;">
          Ver en Google Maps
        </button>
      </div>
    `;
}

// Actualizar estado dinámico
setInterval(() => {
  puntos.forEach((p, i) => {
    p.tiempo--;
    const tiempoElem = document.getElementById(`tiempo${i}`);
    const estadoElem = document.getElementById(`estado${i}`);

    if (tiempoElem) tiempoElem.textContent = p.tiempo;

    if (p.tiempo <= 15) {
      if (estadoElem) {
        estadoElem.textContent = "Por terminar";
        estadoElem.style.color = "red";
      }
    } else {
      if (estadoElem) {
        estadoElem.textContent = "Disponible";
        estadoElem.style.color = "green";
      }
    }

    if (p.tiempo <= 0) p.tiempo = Math.floor(Math.random() * 90) + 30;

    if (p.marcador.isPopupOpen()) {
      p.marcador.setPopupContent(crearPopupHTML(p, i));
    }
  });
}, 1000);

// ----- MENÚ HAMBURGUESA -----
const hamburger = document.getElementById("hamburger");
const nav = document.querySelector(".nav");
const registrarBtn = document.querySelector(".btn-registrarse");
const iniciarSesionBtn = document.querySelector(".btn-iniciarSesion");

hamburger.addEventListener("click", () => {
  // Alternar visibilidad del menú
  nav.classList.toggle("nav-active");
  registrarBtn.classList.toggle("nav-active");
  iniciarSesionBtn.classList.toggle("nav-active");

  // Cambiar ícono del menú)
  hamburger.classList.toggle("open");
  if (hamburger.classList.contains("open")) {
    hamburger.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  } else {
    hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }
});
