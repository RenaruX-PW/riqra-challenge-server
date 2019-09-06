'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [
    {
      name: 'Ocean Blue Shirt',
      image: '/image/young-man-in-bright-fashion_925x.jpg',
      price: 50.00,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Classic Varsity Top',
      image: '/image/casual-fashion-woman_925x.jpg',
      price: 75.00,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Yellow Wool Jumper',
      image: '/image/autumn-photographer-taking-picture_925x.jpg',
      price: 50.00,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Floral White Top',
      image: '/image/city-woman-fashion_925x@2x.jpg',
      price: 80.00,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Striped Silk Blouse',
      image: '/image/striped-blouse-fashion_925x.jpg',
      price: 60.00,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Classic Leather Jacket',
      image: '/image/leather-jacket-and-tea_925x.jpg',
      price: 60.00,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Dark Denim Top',
      image: '/image/young-female-models-denim_925x.jpg',
      price: 50.00,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Navy Sports Jacket',
      image: '/image/mens-fall-fashion-jacket_925x.jpg',
      price: 30.00,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Soft Winter Jacket',
      image: '/image/smiling-woman-on-snowy-afternoon_925x.jpg',
      price: 65.00,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Black Leather Bag',
      image: '/image/black-bag-over-the-shoulder_925x.jpg',
      price: 70.00,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
