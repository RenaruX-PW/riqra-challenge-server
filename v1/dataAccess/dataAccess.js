const db = require('./../../utils/sequelize');
const moment = require('moment');

exports.getProducts = async () => {
	try {
		let products = await db.Product.findAll();
		return products;
	} catch(e) {
		console.log(`Error: ${e}`);
		return null;
	}
	
};

exports.getCartItems = async () => {
	try {
		let items = await db.Cart.findAll({
			include: {
				model:db.Product,
				as: 'product'
			}
		});
		return items;
	} catch(e) {
		console.log(`Error: ${e}`);
		return null;
	}
};

exports.getOrders = async () => {
	try {	
		let orders = await db.Order.findAll({
			include: {
				model: db.OrderDetail,
				as: 'orderDetails',
				include: {
					model:db.Product,
					as: 'product'
				}
			}
		});
		return orders;
	} catch(e) {
		console.log(`Error: ${e}`);
		return null;
	}
};

exports.getProduct = async id => {
	try {
		let product = await db.Product.findOne({
			where: {
				id: id
			}
		});
		return product;
	} catch(e) {
		console.log(`Error: ${e}`);
		return null;
	}
};

exports.getCartItem = async id => {
	try {
		let item = await db.Cart.findOne({
			where: {
				id: id
			},
			include: {
				model:db.Product,
				as: 'product'
			}
		});
		return item;
	} catch(e) {
		console.log(`Error: ${e}`);
		return null;
	}
};

exports.getOrder = async id => {
	try {
		let order = await db.Order.findOne({
			where: {
				id: id
			},
			include: {
				model: db.OrderDetail,
				as: 'orderDetails',
				include: {
					model:db.Product,
					as: 'product'
				}
			}
		});
		return order;
	} catch(e) {
		console.log(`Error: ${e}`);
		return null;
	}
};

exports.createOrder = async items => {
	try {
		let order = await db.Order.create({
			shippingDate: (moment.utc().day() == 5) 
	          ? moment.utc().add(3, 'd')
	          : (moment.utc().day() == 6)
	            ? moment.utc().add(2, 'd')
	            : moment.utc().add(1, 'd')
		});
		order = await order.update({
			code: `P${('0000'+ order.id).substr(-4)}`
		});
		const promises = items.map(item => db.OrderDetail.create({
			productId: item.productId,
			orderId: order.id,
			productQty: item.productQty
		}));
		await Promise.all(promises);
		const details = await db.OrderDetail.findAll({
			where: {
				orderId: order.id
			},
			include:{
				model: db.Product,
				as: 'product'
			}
		});
		order.orderDetails = details
		return order;
	} catch(e) {
		console.log(`Error: ${e}`);
		return null;
	}
};

exports.addOrUpdateCart = async (productId, productQty) => {
	try {
		let cartItem = await db.Cart.findOne({
			where: {
				productId: productId
			}
		});
		if(!cartItem) await db.Cart.create({
			productId: productId,
			productQty: productQty
		});
		else await cartItem.update({
			productQty: productQty
		});
		let currentCart = this.getCartItems();
		return currentCart;
	} catch(e) {
		console.log(`Error: ${e}`);
		return null;
	}
};

exports.removeItemCart = async productId => {
	try {
		await db.Cart.destroy({
			where: {
				productId: productId
			}
		});
		let currentCart = this.getCartItems();
		return currentCart;
	} catch(e) {
		console.log(`Error: ${e}`);
		return null;
	}
};

exports.emptyCart = async () => {
	try {
		await db.Cart.destroy({
			truncate: true
		});
		return 'Cart Emptied';
	} catch(e) {
		console.log(`Error: ${e}`);
		return null;
	}
};