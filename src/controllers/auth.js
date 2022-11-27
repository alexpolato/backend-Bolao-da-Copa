const db = require("../config/db");

exports.login = async function (req, res) {
  const { username, password } = req.body;
  const { rows: user } = await db.query(
    `SELECT id, username FROM users u WHERE u.username = '${username}' AND u.password = '${password}' LIMIT 1`
  );
  if (user.length === 0) {
    res.send(`Username or password invalid`);
  } else {
    res.json(user[0]);
  }
};

exports.register = async function (req, res) {
  const { username, password } = req.body;
  const { rows: user } = await db.query(
    `SELECT username FROM users u WHERE u.username = '${username}'`
  );
  if (user.length !== 0) {
    res.send(`User already exists`);
  } else {
    await db.query("INSERT INTO users (username, password) VALUES ($1, $2)", [
      username,
      password,
    ]);
    const { rows: user } = await db.query(
      `SELECT id,username FROM users u WHERE u.username = '${username}'`
    );
    res.json(user[0]);
  }
};
