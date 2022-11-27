const { Pool } = require("pg");

// ==> Conexão com a Base de Dados:
const pool = new Pool({
  connectionString: `postgres://dsnwewpd:o4BlbwyEAawX4gl5kbquzxOwP_hlLh2E@babar.db.elephantsql.com/dsnwewpd`,
});

pool.on("connect", () => {
  console.log("Base de Dados conectado com sucesso!");
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
