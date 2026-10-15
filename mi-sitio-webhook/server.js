// Servidor principal: sirve la página web y atiende webhook + API
require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Permite leer el cuerpo de las peticiones en formato JSON
app.use(express.json());

// Rutas del backend
app.use("/webhook", require("./routes/webhook")); // recibe datos de afuera
app.use("/api", require("./routes/api"));         // entrega datos a la página

// Sirve el frontend (carpeta public)
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log("Servidor andando en http://localhost:" + PORT);
});
