'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrderDetail = sequelize.define('OrderDetail', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    orderId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    productQty: DataTypes.INTEGER
  }, {});
  OrderDetail.associate = (models) => {
    OrderDetail.belongsTo(models.Product, {
      foreignKey: 'productId',
      as: 'product'
    });
    OrderDetail.belongsTo(models.Order, {
      foreignKey: 'orderId',
      as: 'order'
    });
  };
  return OrderDetail;
};