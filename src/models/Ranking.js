import sequelize from "./index.js";
import Sequelize from "sequelize";

const Ranking = sequelize.define('ranking', {
    id_ranking: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome_jogador: {
      type: Sequelize.STRING,
      allowNull: false
    },
    pontuacao: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
}, {
  freezeTableName: true
});

export default Ranking;
