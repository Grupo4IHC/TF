function mostrarPopup(event) {
  event.preventDefault();
  const email = document.getElementById("correo").value;
  if (email.trim() === "") {
    alert("Por favor, ingresa un correo electrónico válido.");
    return;
  }
  document.getElementById("popup").style.display = "flex";
}

function cerrarPopup() {
  document.getElementById("popup").style.display = "none";
  window.location.href = "Login.html";
}

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
