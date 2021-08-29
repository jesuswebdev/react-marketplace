module.exports = {
  query: `
    permissions: [Permission]
    permission(id: ID!): Permission
`,
  mutations: `
    addPermission(permissionInput: PermissionInput): Permission    
    editPermission(id: ID!, permissionInput: PermissionInput): Permission    
    deletePermission(id: ID!): Permission    
`
};
