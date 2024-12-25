const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost', // oder deine Datenbank-URL
  user: 'root', // dein Datenbank-Benutzername
  password: 'yourpassword', // dein Datenbank-Passwort
  database: 'yourdatabase' // Name der Datenbank
});

db.connect((err) => {
  if (err) {
    console.error('Datenbankverbindung fehlgeschlagen:', err);
  } else {
    console.log('Mit der Datenbank verbunden!');
  }
});

module.exports = db;
