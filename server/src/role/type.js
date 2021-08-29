module.exports = `
    type Role {
        name: String
        permissions: [Permission]
    }

    input RoleInput {
        name: String
    }

    input EditRolePermissionsInput {
        permissions: [ID]
    }
`;
