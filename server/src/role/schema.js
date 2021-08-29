module.exports = {
  query: `
    roles: [Role]
    role(id: ID!): Role
`,
  mutations: `
    addRole(roleInput: RoleInput): Role
    editRole(roleInput: RoleInput): Role
    removeRole(id: ID!): Role
    editRolePermissions(id: ID!, editRolePermissionsInput: EditRolePermissionsInput): Role
`
};
