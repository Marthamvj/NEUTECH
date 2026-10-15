// Pide a la API los eventos que llegaron por webhook y los muestra
async function cargarEventos() {
  const lista = document.getElementById("lista-eventos");
  if (!lista) return; // esta página no tiene la lista

  try {
    const respuesta = await fetch("/api/eventos");
    const eventos = await respuesta.json();

    lista.innerHTML = "";
    if (eventos.length === 0) {
      lista.innerHTML = "<li>Todavía no llegó ningún evento.</li>";
      return;
    }

    // Los más nuevos primero
    eventos.reverse().forEach(function (evento) {
      const li = document.createElement("li");
      li.textContent =
        new Date(evento.recibidoEn).toLocaleString("es-AR") +
        " - " + JSON.stringify(evento.datos);
      lista.appendChild(li);
    });
  } catch (error) {
    lista.innerHTML = "<li>Error al conectar con el servidor.</li>";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  cargarEventos();
  setInterval(cargarEventos, 5000); // actualiza cada 5 segundos
});
