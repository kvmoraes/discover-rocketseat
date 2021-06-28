const sqlite3 = require("sqlite3");
const { open } = require("sqlite");
//open: abrir conexão com banco de dados (db)

module.exports = () =>
  open({
    filename: "./src/db/rocketq.sqlite",
    driver: sqlite3.Database,
  });
//sqlite: banco de dados sql simplificado
//driver: faz a gestao das coisas do banco de dados
