const { DataTypes, Sequelize} = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id:{
      type: DataTypes.UUID,
      primaryKey:true,
      allowNull:null,
      defaultValue: Sequelize.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hp:{
       type: DataTypes.INTEGER,
    },
    attack: {
        type: DataTypes.INTEGER,
    },
    defense:{
      type: DataTypes.INTEGER
    },
    speed: {
      type:DataTypes.INTEGER
    },
    height:{
      type: DataTypes.INTEGER
    },
    weight:{
      type: DataTypes.INTEGER
    }
  });
};
