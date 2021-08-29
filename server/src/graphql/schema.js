const { gql } = require("apollo-server-hapi");
const permissionTypes = require("../permission/type");
const roleTypes = require("../role/type");
const userTypes = require("../user/type");

const permissionSchema = require("../permission/schema");
const roleSchema = require("../role/schema");
const userSchema = require("../user/schema");

const typeDefs = gql`
  ${permissionTypes}
  ${roleTypes}

  type Query {
    ${permissionSchema.query}
    ${roleSchema.query}
  }

  type Mutation {
    ${permissionSchema.mutations}
    ${roleSchema.mutations}
  }
`;

module.exports = typeDefs;
