const express = require('express');
const app = express();

// Ruta principal
app.get('/', (req, res) => {
  res.send('¡Bienvenido a mi aplicación!');
});

// Ruta para clientes
app.get('/clientes', (req, res) => {
  const clientes = ['Cliente 1', 'Cliente 2', 'Cliente 3'];
  res.send(clientes);
});

// Ruta para productos
app.get('/productos', (req, res) => {
  const productos = ['Producto 1', 'Producto 2', 'Producto 3'];
  res.send(productos);
});

// Iniciar servidor
app.listen(5000, () => {
  console.log('Aplicación Express iniciada en http://localhost:5000');
});
