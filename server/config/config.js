// =====================
// Puerto
// =====================

process.env.PORT = process.env.PORT || 3000;

// =====================
// Entorno
// =====================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// =====================
// Vencimiento del token
// =====================
// 60 segundos
// 60 minutos
// 24 horas
// 30 dias
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24;

// =====================
// SEED de autenticacion
// =====================
process.env.SEED = process.env.SEED || 'este-es-el-seed-de-desarrollo';


// =====================
// Base de datos
// =====================

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://geek:gBdrmU3f3TSQCvU6@cluster0-vne62.mongodb.net/cafe';
}

process.env.URLDB = urlDB;

// =====================
// Google Client ID
// =====================

process.env.CLIENT_ID = process.env.CLIENT_ID || '612084275817-3vi601narret1cjrm57sgafugrh15thp.apps.googleusercontent.com';