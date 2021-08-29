const permissionResolvers = require("../permission/resolvers");
const roleResolvers = require("../role/resolvers");
const userResolvers = require("../user/resolvers");

const resolvers = {
  Query: {
    ...permissionResolvers.query,
    ...roleResolvers.query
  },
  Mutation: {
    ...permissionResolvers.mutations,
    ...roleResolvers.mutations
  }
};

module.exports = resolvers;
