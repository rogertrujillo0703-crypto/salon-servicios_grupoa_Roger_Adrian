// Menú responsive (móvil)
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
toggle.addEventListener("click", () => menu.classList.toggle("abierto"));

// Formulario de reserva (si existe en la página)
const form = document.getElementById("form-reserva");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value.trim();
    const servicio = document.getElementById("servicio").value;
    const fecha = document.getElementById("fecha").value;
    document.getElementById("mensaje").textContent =
      `¡Gracias ${nombre}! Tu reserva de "${servicio}" para el ${fecha} fue registrada.`;
    form.reset();
  });
}
