//==================
//Puerto
//==================
process.env.PORT = process.env.PORT || 3000;


//==================
//Entorno
//==================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//==================
//Vencimiento del token
//==================
//60 segundos
//60 minutos
//24 horas
//30 dias
process.env.CADUCIDAD_TOKEN = '48h';

//==================
//Seed de autenticacion
//==================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

//==================
//Base de datos
//==================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://eduardo:Gl9LeLQZjGuzwkgq@cluster0-gibkr.mongodb.net/cafe';
}
process.env.URLDB = urlDB;

//==================
//Google Client ID
//==================
process.env.CLIENT_ID = process.env.CLIENT_ID || '698265223195-7vt68rj12mrbn6nqap8kic45000h2pro.apps.googleusercontent.com';