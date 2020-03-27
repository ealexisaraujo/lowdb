const low = require('lowdb');

// Desde sus modulos adapters
// Hay dos maneras de crear un archivo para guardar la base de datos de manera sincrona
// se bloquea hasta que termine de crearlo y asincrona que lo vamos haciendo
// en los hilos de node
const fileAsync = require('lowdb/adapters/FileAsync');

let db;

const createConnection = async () => {
  const adapter = new fileAsync('db.json');
  db = await low(adapter);
  db.defaults({ tasks: [] }).write();
};
