import sequelize from "./index.js";
import Sequelize from "sequelize";

const Posicao = sequelize.define('posicao', {
    id_posicao: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    vetorXY: {
      type: Sequelize.STRING,
      allowNull: false
    },
}, {
  freezeTableName: true
});

export default Posicao;