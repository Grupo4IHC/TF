document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const usuario = document.getElementById("usuario").value;
  const contrasena = document.getElementById("password").value;

  const usuarioGuardado = localStorage.getItem("usuarioRegistrado");
  const contrasenaGuardada = localStorage.getItem("contrasenaRegistrada");
  const nombreGuardado = localStorage.getItem("nombreRegistrado");

  if (usuario === usuarioGuardado && contrasena === contrasenaGuardada) {
    const nombre = localStorage.getItem("nombreRegistrado");
    localStorage.setItem("usuarioActivo", nombre);
    window.location.href = "SesionIniciada.html";
  } else {
    window.location.href = "ErrorRegistro.html";
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
