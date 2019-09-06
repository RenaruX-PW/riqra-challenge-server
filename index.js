require('dotenv').config();

const cors = require('cors');
const bodyParser = require('body-parser-graphql');
const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./v1/schema/schema');
const resolver = require('./v1/resolvers/resolvers');

let app = express();

app.use(cors());
app.use(bodyParser.graphql());

app.use('/image', express.static('images'));

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolver,
  graphiql: true,
}));

app.listen(process.env.PORT);

app.on('error', err => {
	console.error(err);
});

console.log(`Running a GraphQL API server at localhost:${process.env.PORT}/graphql`);