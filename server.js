const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/login', (req, res) => {
  const { usuario, contrasena } = req.body;
  const sql = 'SELECT * FROM usuarios WHERE usuario = ? AND contrasena = ?';
  db.query(sql, [usuario, contrasena], (err, resultados) => {
    if (err) {
      console.error('Error en la consulta a la base de datos:', err);
      return res.status(500).send('Error en el servidor');
    }
    if (resultados.length > 0) {
      res.send('Inicio de sesión exitoso');
    } else {
      res.send('Credenciales incorrectas');
    }
  });
});

app.post('/register', (req, res) => {
  const { 'nuevo-usuario': nuevoUsuario, 'nueva-contrasena': nuevaContrasena } = req.body;
  const sql = 'INSERT INTO usuarios (usuario, contrasena) VALUES (?, ?)';
  db.query(sql, [nuevoUsuario, nuevaContrasena], (err, resultados) => {
    if (err) {
      console.error('Error al registrar usuario:', err);
      if (err.code === 'ER_DUP_ENTRY') {
        return res.send('El usuario ya existe');
      }
      return res.status(500).send('Error en el servidor');
    }
    res.send('Registro exitoso');
  });
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});