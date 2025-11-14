// Mostrar nombre si hay sesión iniciada
document.addEventListener("DOMContentLoaded", () => {
  const nombreActivo = localStorage.getItem("usuarioActivo");

  if (nombreActivo) {
    document.getElementById("auth-buttons").style.display = "none";
    const profileButton = document.getElementById("profile-button");
    profileButton.style.display = "block";
    document.getElementById("btnPerfil").textContent = nombreActivo;

    document
      .getElementById("btnPerfil")
      .addEventListener("click", () =>
        document.getElementById("profile-menu").classList.toggle("show")
      );

    document.getElementById("cerrarSesion").addEventListener("click", () => {
      localStorage.removeItem("usuarioActivo");
      window.location.href = "index.html";
    });

    // Cambiar footer si hay sesión
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
});

// Mostrar popup
function mostrarPopup() {
  document.getElementById("popupLogin").style.display = "flex";
}

// Cerrar popup
function cerrarPopup() {
  document.getElementById("popupLogin").style.display = "none";
}

// Detectar clic en servicios
document.addEventListener("DOMContentLoaded", () => {
  const servicios = document.querySelectorAll(".service-card");
  servicios.forEach((card) => {
    card.addEventListener("click", (e) => {
      e.preventDefault();
      mostrarPopup();
    });
  });

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
});
