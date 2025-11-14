document.addEventListener("DOMContentLoaded", () => {
  const nombreActivo = localStorage.getItem("usuarioActivo");
  const authButtons = document.getElementById("auth-buttons");
  const profileButton = document.getElementById("profile-button");

  if (nombreActivo) {
    authButtons.style.display = "none";
    profileButton.style.display = "block";
    document.getElementById("btnPerfil").textContent = nombreActivo;
    const profileMenu = document.getElementById("profile-menu");
    document.getElementById("btnPerfil").addEventListener("click", () => {
      profileMenu.classList.toggle("show");
    });
    document.getElementById("cerrarSesion").addEventListener("click", () => {
      localStorage.removeItem("usuarioActivo");
      window.location.href = "index.html";
    });

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

  // Validación del formulario
  const formContacto = document.getElementById("formContacto");
  const mensajeFormContacto = document.getElementById("mensajeFormContacto");

  formContacto.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !correo || !mensaje) {
      mensajeFormContacto.textContent = "Por favor, completa todos los campos.";
      mensajeFormContacto.style.color = "red";
      return;
    }

    mensajeFormContacto.textContent = "¡Mensaje enviado correctamente!";
    mensajeFormContacto.style.color = "green";

    formContacto.reset();
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
