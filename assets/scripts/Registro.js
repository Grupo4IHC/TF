document
  .querySelector(".register-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const usuario = document
      .querySelector('input[placeholder="Usuario"]')
      .value.trim();
    const contrasena = document
      .querySelector('input[placeholder="Contraseña"]')
      .value.trim();
    const nombre = document
      .querySelector('input[placeholder="Nombre"]')
      .value.trim();
    const correo = document
      .querySelector('input[placeholder="Correo"]')
      .value.trim();
    const numero = document
      .querySelector('input[placeholder="Número"]')
      .value.trim();

    // NUEVO: tipo de abastecimiento
    const selectAbastecimiento = document.getElementById("tipoAbastecimiento");
    const tipoAbastecimiento = selectAbastecimiento.value;

    // VALIDACIONES
    if (!usuario || !contrasena || !nombre || !correo || !numero) {
      alert("⚠ Por favor completa todos los campos.");
      return;
    }

    // Tipo de abastecimiento obligatorio
    if (!tipoAbastecimiento) {
      alert("⚠ Por favor selecciona tu tipo de abastecimiento de agua.");
      selectAbastecimiento.focus();
      return;
    }

    // Contraseña: mínimo 8 caracteres
    if (contrasena.length < 8) {
      alert("⚠ La contraseña debe tener al menos 8 caracteres.");
      return;
    }

    // Nombre: debe tener al menos nombre y apellido
    const nombreValido = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+ [A-Za-zÁÉÍÓÚáéíóúÑñ]+$/;
    if (!nombreValido.test(nombre)) {
      alert("⚠ Ingresa nombre y apellido (por ejemplo: Juan Pérez).");
      return;
    }

    // Correo: debe terminar en @gmail.com
    const correoValido = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!correoValido.test(correo)) {
      alert("⚠ El correo debe terminar en @gmail.com.");
      return;
    }

    // Número: solo 9 dígitos numéricos
    const numeroValido = /^[0-9]{9}$/;
    if (!numeroValido.test(numero)) {
      alert("⚠ El número debe tener exactamente 9 dígitos.");
      return;
    }

    // ==============
    // GUARDADO SIMPLE (lo que ya tenías)
    // ==============
    localStorage.setItem("usuarioRegistrado", usuario);
    localStorage.setItem("contrasenaRegistrada", contrasena);
    localStorage.setItem("nombreRegistrado", nombre);
    localStorage.setItem("correoRegistrado", correo);
    localStorage.setItem("numeroRegistrado", numero);

    localStorage.setItem("abastecimientoRegistrado", tipoAbastecimiento);
    localStorage.setItem("abastecimientoActivo", tipoAbastecimiento);

    // MUY IMPORTANTE 👉 que el activo sea el usuario (no el nombre)
    localStorage.setItem("usuarioActivo", usuario);

    // ==============
    // NUEVO: GUARDAR EN ARRAY usuariosAquaAlert CON ROL ADMIN
    // ==============
    let usuarios = JSON.parse(
      localStorage.getItem("usuariosAquaAlert") || "[]"
    );

    const nuevoUsuario = {
      usuario,
      nombre,
      correo,
      numero,
      password: contrasena,
      tipoAbastecimiento,
      rol: "admin", // 👉 todos admin en la beta
    };

    usuarios.push(nuevoUsuario);
    localStorage.setItem("usuariosAquaAlert", JSON.stringify(usuarios));

    // Redirige a la página de éxito
    window.location.href = "ExitoRegistro.html";
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

  // Cambiar ícono del menú
  hamburger.classList.toggle("open");
  if (hamburger.classList.contains("open")) {
    hamburger.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  } else {
    hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }
});
