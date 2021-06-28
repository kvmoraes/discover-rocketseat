const Database = require("./config");

const initDb = {
  async init() {
    const db = await Database();

    await db.exec(`CREATE TABLE rooms (
        id INTENGER PRIMARY KEY,
        pass TEXT
    )`);
    await db.exec(`CREATE TABLE questions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        read INT,
        room INT
    )`);
    await db.close();
  },
};
//await: esperar vir resultado antes de rodar outra linha
//await depende do async

initDb.init();

//comando sql: maiusculo
