/**
 * Configurações e conexão com o banco de dados.
 */

// Import bibliotecas
const sqlite3 = require("sqlite3").verbose();
const filepath = "./database.db";

/**
 * Cria uma conexão com o banco de dados.
 * @returns 
 */
function createDbConnection() {
  const db = new sqlite3.Database(filepath, (error) => {
    if (error) {
      return console.error(error.message);
    }
    createTable(db);
  });
  console.log("Conexão com SQLite foi estabelecida");
  return db;
}

/**
 * Cria a tabela de aluno se não existir.
 * 
 * @param {*} db 
 */
function createTable(db) {
    db.exec(`
    CREATE TABLE IF NOT EXISTS aluno (
            alunoId INTEGER, 
            nome VARCHAR(100), 
            curso VARCHAR(50), 
            cpf VARCHAR(11), 
            CONSTRAINT pk_aluno PRIMARY KEY (alunoId));
     `);
  }

  module.exports = createDbConnection();
  