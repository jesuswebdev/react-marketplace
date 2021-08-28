const {
  ApolloServer,
  ApolloServerPluginStopHapiServer
} = require("apollo-server-hapi");
const Hapi = require("@hapi/hapi");
const schema = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");
const config = require("./config");

async function startApolloServer(typeDefs, resolvers) {
  const app = Hapi.server({ port: 4000 });
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginStopHapiServer({ hapiServer: app })]
  });
  await server.start();
  await server.applyMiddleware({ app });
  await app.register([
    {
      plugin: require("./db"),
      options: config
    }
  ]);
  await app.start().then(() => console.log("Server ready"));
}

startApolloServer(schema, resolvers);
