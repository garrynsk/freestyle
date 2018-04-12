// Require the framework and instantiate it

const fastify = require('fastify')()
const fs = require('fs');
const marked = require('marked');
const serveStatic = require('serve-static')
const { graphql, buildSchema } = require('graphql');
const {graphiqlFastify, graphqlFastify} = require('fastify-graphql');

const cors = require('cors')


var html;

fastify.use(cors())

fs.readFile('./public/content/2018-03-26/2018-03-26-Why do I need monads, anyway?.md', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  html = marked(data);
});

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
  hello: () => {
    return html;
  },
};

fastify.register(graphqlFastify, { 
  prefix: '/graphql', 
  graphql: {
    schema: schema,
    rootValue: root,
  },
});
fastify.register(graphiqlFastify, {
  prefix: '/graphiql',
  graphiql: {
    endpointURL: '/graphql',
    query: `{
      hello
    }`
  }
});
let currentApp = fastify
// Run the server!
fastify.listen(3000, '127.0.0.1', function (err) {
  if (err) throw err
  console.log(`server listening on ${fastify.server.address().port}`)
})


if (module.hot) {
  module.hot.accept('./index', () => {
   server.removeListener('request', currentApp)
   server.on('request', fastify)
   currentApp = fastify
  })
 }