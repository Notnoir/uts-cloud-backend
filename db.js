// db.js
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'uts-startup-db.cmhu6o6g84bg.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password: 'passwordku123.',
  database: 'uts_store',
});

db.connect(err => {
  if (err) {
    console.error('❌ Koneksi ke DB gagal:', err);
  } else {
    console.log('✅ Koneksi ke DB berhasil');
  }
});

module.exports = db;
