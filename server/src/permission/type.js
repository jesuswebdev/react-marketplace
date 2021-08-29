module.exports = `
    type Permission {
        _id: String
        name: String
        value: String
    }

    input PermissionInput {
        name: String
        value: String
    }
`;