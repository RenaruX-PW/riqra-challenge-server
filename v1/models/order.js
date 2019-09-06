'use strict';
const moment = require('moment');
const format = 'DD-MM-YYYY';

module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    id: {
  		type: DataTypes.INTEGER,
  		allowNull: false,
  		primaryKey: true,
  		autoIncrement: true
  	},
    code: DataTypes.STRING,
    shippingDate: {
      type: DataTypes.DATE,
      get: function(){
        return moment.utc(this.getDataValue('shippingDate')).format(format);
      }
    }
  }, {});
  Order.associate = (models) => {
    Order.hasMany(models.OrderDetail, {
      foreignKey: 'orderId',
      as: 'orderDetails'
    });
  };
  return Order;
};