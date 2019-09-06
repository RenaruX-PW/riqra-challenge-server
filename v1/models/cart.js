'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
    id: {
  		type: DataTypes.INTEGER,
  		allowNull: false,
  		primaryKey: true,
  		autoIncrement: true
  	},
  	productId: DataTypes.UUID,
    productQty: DataTypes.INTEGER
  }, {});
  Cart.associate = (models) => {
    Cart.belongsTo(models.Product, {
      foreignKey: 'productId',
      as: 'product'
    });
  };
  return Cart;
};