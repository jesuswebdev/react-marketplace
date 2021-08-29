const permissionResolvers = require("../permission/resolvers");
const roleResolvers = require("../role/resolvers");
const userResolvers = require("../user/resolvers");

const resolvers = {
  Query: {
    ...permissionResolvers.query
  },
  Mutation: {
    ...permissionResolvers.mutations
  }
};

module.exports = resolvers;
