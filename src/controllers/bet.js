const db = require("../config/db");

exports.create = async function (req, res) {
  const {
    user_id,
    semi_final_1_team_1,
    semi_final_1_team_2,
    semi_final_2_team_1,
    semi_final_2_team_2,
    final_team_1,
    final_team_2,
    champion,
  } = req.body;

  const { rows: bet } = await db.query(
    `SELECT id FROM bets b WHERE b.user_id = '${user_id}' LIMIT 1`
  );
  console.log(bet);
  if (bet.length !== 0) {
    res.send(`You already voted`);
  } else {
    await db.query(
      `INSERT INTO bets (user_id, semi_final_1_team_1,
      semi_final_1_team_2,
      semi_final_2_team_1,
      semi_final_2_team_2,
      final_team_1,
      final_team_2,
      champion) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
      [
        user_id,
        semi_final_1_team_1,
        semi_final_1_team_2,
        semi_final_2_team_1,
        semi_final_2_team_2,
        final_team_1,
        final_team_2,
        champion,
      ]
    );
    res.send(`Sucessfully voted`);
  }
};
