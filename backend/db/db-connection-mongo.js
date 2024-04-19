const mongoose = require('mongoose');

const URI = "mongodb+srv://pandaTV:pandatv@pandatv.bmfcmb9.mongodb.net/?retryWrites=true&w=majority&appName=PandaTV";

mongoose.connect(URI);

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Base de Datos conectada exitosamente a MongoDB');
});
