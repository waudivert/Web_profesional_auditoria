function alturaNavbar() {
  const nav = document.querySelector(".navbar_personal");
  return nav ? nav.offsetHeight : 0;
}


// ====== FORM: validación básica y mensaje ======

const form = document.querySelector("#ContactoSeccion form");

function emailValido(email) {
  // validación simple (no rebuscada)
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function mostrarAlerta(texto, tipo) {
  // tipo: "success" o "danger"
  let alerta = document.getElementById("alertaForm");

  if (!alerta) {
    alerta = document.createElement("div");
    alerta.id = "alertaForm";
    alerta.className = "alert mt-3";
    form.appendChild(alerta);
  }

  alerta.classList.remove("alert-success", "alert-danger");
  alerta.classList.add(tipo === "success" ? "alert-success" : "alert-danger");
  alerta.textContent = texto;
}

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = form.querySelector('input[type="text"]');
    const email = form.querySelector('input[type="email"]');
    const asunto = form.querySelectorAll('input[type="text"]')[1]; // segundo text = asunto
    const mensaje = form.querySelector("textarea");

    // limpiar espacios
    const vNombre = nombre.value.trim();
    const vEmail = email.value.trim();
    const vAsunto = asunto.value.trim();
    const vMensaje = mensaje.value.trim();

    // Validaciones
    if (!vNombre || !vEmail || !vAsunto || !vMensaje) {
      mostrarAlerta("Por favor, completa todos los campos.", "danger");
      return;
    }
    if (vNombre.length < 3) {
      mostrarAlerta("El nombre debe tener al menos 3 caracteres.", "danger");
      return;
    }

    if (!emailValido(vEmail)) {
      mostrarAlerta("Por favor, ingresa un email válido.", "danger");
      return;
    }

    if (vMensaje.length < 10) {
      mostrarAlerta("El mensaje debe tener al menos 10 caracteres.", "danger");
      return;
    }

    // Simular envío (sin backend)
    mostrarAlerta("Mensaje enviado correctamente. Me contactaré pronto.", "success");
    form.reset();
  });
}