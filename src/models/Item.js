import sequelize from "./index.js";
import Sequelize from "sequelize";

const Item = sequelize.define('item', {
    id_item: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    descricao: {
      type: Sequelize.STRING,
      allowNull: false
    },
    encontrado: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    }
});

export default Item;