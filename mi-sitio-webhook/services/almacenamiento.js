// Guarda los eventos en un archivo JSON (simple para empezar).
// Más adelante se puede reemplazar por una base de datos (MySQL, MongoDB, etc.)
const fs = require("fs");
const path = require("path");

const ARCHIVO = path.join(__dirname, "..", "data", "eventos.json");

function leerEventos() {
  if (!fs.existsSync(ARCHIVO)) return [];
  return JSON.parse(fs.readFileSync(ARCHIVO, "utf8"));
}

function guardarEvento(datos) {
  const eventos = leerEventos();
  const evento = {
    id: Date.now(),
    recibidoEn: new Date().toISOString(),
    datos: datos
  };
  eventos.push(evento);
  fs.writeFileSync(ARCHIVO, JSON.stringify(eventos, null, 2));
  return evento;
}

module.exports = { leerEventos, guardarEvento };
