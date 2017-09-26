const path = require('path');
const express = require('express');
const app = express();
const graphqlHTTP = require('express-graphql');

const PORT = process.env.PORT || 8080;

const db = require('./database');
const schema = require('./schema');
const resolvers = require('./schema/resolvers');

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  // graphiql: true,
  context: { db: db },
}));

app.use('/', function(request, response) {
  response.sendFile(__dirname + '/dist/index.html');
});

app.listen(PORT, error => (
  error
    ? console.error(error)
    : console.info(`Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`)
));
