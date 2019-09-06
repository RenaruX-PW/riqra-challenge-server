'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    image: {
      type: DataTypes.STRING,
      get: function() {
        return `${process.env.URL}:${process.env.PORT}${this.getDataValue('image')}`;
      }
    },
    price: DataTypes.DECIMAL
  }, {});
  Product.associate = (models) => {
    Product.hasOne(models.Cart, {
      foreignKey: 'productId',
      as: 'cart'
    });
    Product.hasMany(models.OrderDetail, {
      foreignKey: 'productId',
      as: 'orders'
    });
  };
  return Product;
};