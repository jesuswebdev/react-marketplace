const { castToObjectId } = require("../utils");

module.exports = {
  query: {
    roles: async (_, __, ctx) => {
      const RoleModel = ctx.mongoose.model("Role");
      const roles = await RoleModel.find({}).lean();
      return roles;
    },
    role: async (_, { id }, ctx) => {
      const RoleModel = ctx.mongoose.model("Role");
      const role = await RoleModel.findById(castToObjectId(id)).lean();
      return role;
    }
  },
  mutations: {
    addRole: async (_, { roleInput }, ctx) => {
      const RoleModel = ctx.mongoose.model("Role");
      const created = await RoleModel.create(roleInput);
      return created;
    },
    editRole: async (_, { id, roleInput }, ctx) => {
      const RoleModel = ctx.mongoose.model("Role");
      const updated = await RoleModel.findByIdAndUpdate(
        castToObjectId(id),
        { $set: roleInput },
        { new: true }
      );
      return updated;
    },
    removeRole: async (_, { id }, ctx) => {
      const RoleModel = ctx.mongoose.model("Role");
      const deleted = await RoleModel.findByIdAndRemove(castToObjectId(id));
      return deleted;
    },
    editRolePermissions: async (_, { id, editRolePermissionsInput }, ctx) => {
      const RoleModel = ctx.mongoose.model("Role");
      const updated = await RoleModel.findByIdAndUpdate(
        castToObjectId(id),
        { $set: editRolePermissionsInput },
        { new: true }
      );
      return updated;
    }
  }
};
