const { buildSchema } = require('graphql');

const schema = buildSchema(
	`type Product {
		id: ID!
		name: String!
		image: String!
		price: Float!
	}

	type Cart {
		id: ID!
		productQty: Int!
		product: Product!
	}

	type Order {
		id: ID!
		code: String!
		shippingDate: String!
		orderDetails: [OrderDetail!]!
	}

	type OrderDetail {
		id: ID!
		productQty: Int!
		product: Product!
	}

	input OrderItem {
		productId: ID!
		productQty: Int!
	}

	type Query {
		products: [Product]
		cartItems: [Cart]
		orders: [Order]
		product(id: ID!): Product
		order(id: ID!): Order
		cartItem(id: ID!): Cart
	}

	type Mutation {
		createOrder(items: [OrderItem]): Order
		addOrUpdateCart(productId: Int! productQty: Int!): [Cart]
		removeItemCart(productId: Int!): [Cart]
		emptyCart: String
	}`
);

module.exports = schema;