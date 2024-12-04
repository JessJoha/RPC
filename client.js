const axios = require('axios');

// Función para realizar una solicitud RPC
async function callRPC(method, params) {
  try {
    const response = await axios.post('http://localhost:3000/rpc', {
      method,
      params,
    });
    console.log('Resultado:', response.data.result);
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

// Llamadas de ejemplo
callRPC('sum', [5, 3]);        // Suma: 8
callRPC('multiply', [4, 7]);  // Multiplicación: 28
callRPC('greet', ['Jess']);   // Saludo: "Hello, Jess!"
