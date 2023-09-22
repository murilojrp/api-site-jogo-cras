import sequelize from "./index.js";
import Sequelize from "sequelize";

const Tarefa = sequelize.define('tarefa', {
    id_tarefa: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    descricao: {
      type: Sequelize.STRING,
      allowNull: false
    },
    finalizada: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    },
    titulo: {
      type: Sequelize.STRING,
      allowNull: false
    }
}, {
  freezeTableName: true
});

export default Tarefa;
