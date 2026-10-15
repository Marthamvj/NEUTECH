# Mi Sitio con Webhook

## Cómo ejecutarlo
1. Instalar Node.js (versión 18 o superior).
2. En esta carpeta: `npm install`
3. Copiar `.env.example` como `.env` y cambiar `WEBHOOK_SECRET`.
4. `npm start`
5. Abrir http://localhost:3000

## Probar el webhook
curl -X POST http://localhost:3000/webhook \
  -H "Content-Type: application/json" \
  -H "x-webhook-secret: LA_CLAVE_DEL_ENV" \
  -d '{"sensor":"nivel","valor":2.8}'

## Carpetas
- server.js        -> arranca el servidor
- routes/          -> webhook.js (recibe) y api.js (entrega a la web)
- services/        -> almacenamiento.js (guarda los eventos)
- data/            -> archivo eventos.json (se crea solo)
- public/          -> toda la página web (HTML, CSS, JS, imágenes)
