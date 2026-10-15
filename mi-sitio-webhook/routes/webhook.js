// POST /webhook -> acá llegan los avisos de otros sistemas
const express = require("express");
const router = express.Router();
const { guardarEvento } = require("../services/almacenamiento");

router.post("/", (req, res) => {
  // 1) Verificar que quien manda conoce la clave secreta
  const clave = req.headers["x-webhook-secret"];
  if (clave !== process.env.WEBHOOK_SECRET) {
    return res.status(401).json({ ok: false, error: "Clave incorrecta" });
  }

  // 2) Validar que venga algo en el cuerpo
  const datos = req.body;
  if (!datos || Object.keys(datos).length === 0) {
    return res.status(400).json({ ok: false, error: "Cuerpo vacío" });
  }

  // 3) Guardar el evento con fecha y hora de recepción
  const evento = guardarEvento(datos);

  // 4) Responder rápido con 200 para confirmar que llegó
  res.status(200).json({ ok: true, id: evento.id });
});

module.exports = router;
