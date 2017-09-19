/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Project', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    client: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: true
    },
    img_thumbnail: {
      type: DataTypes.STRING,
      allowNull: true
    },
    img_full: {
      type: DataTypes.STRING,
      allowNull: true
    },
    description: {
      type:DataTypes.TEXT,
      allowNull:false
    }
    
  }, {
    tableName: 'Project',
    timestamps: false
  });
};