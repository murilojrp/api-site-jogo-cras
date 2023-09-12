import sequelize from "./index.js";
import Sequelize from "sequelize";

const Ranking = sequelize.define('ranking', {
    id_ranking: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    vetorXY: {
      type: Sequelize.STRING,
      allowNull: false
    }
});

export default Ranking;
