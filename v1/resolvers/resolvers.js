const data = require('./../dataAccess/dataAccess');

const root = {
  products: () => {
  	return data.getProducts();
  },
  cartItems: () => {
  	return data.getCartItems();
  },
  orders: () => {
  	return data.getOrders();
  },
  product: ({ id }) => {
  	return data.getProduct(id);
  },
  cartItem: ({ id }) => {
  	return data.getCartItem(id);
  },
  order: ({ id }) => {
  	return data.getOrder(id);
  },
  createOrder:({ items }) => {
  	return data.createOrder(items);
  },
  addOrUpdateCart:({ productId, productQty }) => {
  	return data.addOrUpdateCart(productId, productQty);
  },
  removeItemCart:({ productId }) => {
  	return data.removeItemCart(productId);
  },
  emptyCart:() => {
  	return data.emptyCart();
  },
};

module.exports = root;