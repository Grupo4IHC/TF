document.addEventListener("DOMContentLoaded", () => {
  const nombre = localStorage.getItem("usuarioActivo");

  if (nombre) {
    // Header
    document.getElementById("auth-buttons").style.display = "none";
    const profileButton = document.getElementById("profile-button");
    profileButton.style.display = "block";
    document.getElementById("btnPerfil").textContent = nombre;

    // Alternar menú perfil
    const btnPerfil = document.getElementById("btnPerfil");
    const profileMenu = document.getElementById("profile-menu");
    btnPerfil.addEventListener("click", () => {
      profileMenu.classList.toggle("show");
    });

    // Cerrar sesión (header)
    document.getElementById("cerrarSesion").addEventListener("click", () => {
      localStorage.removeItem("usuarioActivo");
      window.location.href = "index.html";
    });

    // Footer dinámico
    const footerUserSection = document.getElementById("footer-user-section");
    footerUserSection.innerHTML = `
        <h4 class="active">Perfil de ${nombre}</h4>
        <ul>
          <li><a href="Perfil.html">Ver Perfil</a></li>
          <li><a href="#" id="cerrarSesionFooter">Cerrar Sesión</a></li>
        </ul>
      `;

    // Cerrar sesión (footer)
    document
      .getElementById("cerrarSesionFooter")
      .addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.removeItem("usuarioActivo");
        window.location.href = "index.html";
      });
  }
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
