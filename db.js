const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'login_db'
});

db.connect((err) => {
  if (err) {
    console.error('Error al conectar con MySQL:', err);
    throw err;
  }
  console.log('Conectado a MySQL');
});

module.exports = db;