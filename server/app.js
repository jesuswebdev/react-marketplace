const {
  ApolloServer,
  ApolloServerPluginStopHapiServer
} = require("apollo-server-hapi");
const Hapi = require("@hapi/hapi");
const schema = require("./src/graphql/schema");
const resolvers = require("./src/graphql/resolvers");
const config = require("./config");

async function startApolloServer(typeDefs, resolvers) {
  const app = Hapi.server({ port: 4000 });
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ request }) => ({
      request,
      mongoose: request.server.plugins.mongoose.connection
    }),
    plugins: [ApolloServerPluginStopHapiServer({ hapiServer: app })]
  });
  await server.start();
  await app.register([
    {
      plugin: require("./db"),
      options: config
    }
  ]);
  await server.applyMiddleware({ app });
  await app.start().then(() => console.log("Server ready"));
}

startApolloServer(schema, resolvers);
