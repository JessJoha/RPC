const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json()); // Parsear JSON en las solicitudes

// Función remota disponible para el cliente
app.post('/rpc', (req, res) => {
  const { method, params } = req.body;

  // Definir funciones disponibles
  const methods = {
    sum: ([a, b]) => a + b,
    multiply: ([a, b]) => a * b,
    greet: ([name]) => `Hello, ${name}!`,
  };

  // Ejecutar la función solicitada
  if (methods[method]) {
    const result = methods[method](params);
    res.json({ result });
  } else {
    res.status(400).json({ error: 'Method not found' });
  }
});

// Inicia el servidor en el puerto 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor RPC escuchando en http://localhost:${PORT}`);
});
