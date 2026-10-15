// GET /api/eventos -> la página web pide acá los datos guardados
const express = require("express");
const router = express.Router();
const { leerEventos } = require("../services/almacenamiento");

router.get("/eventos", (req, res) => {
  res.json(leerEventos());
});

module.exports = router;
