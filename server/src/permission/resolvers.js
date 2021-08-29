const { castToObjectId } = require("../utils");

module.exports = {
  query: {
    permissions: async (_, args, ctx) => {
      const PermissionModel = ctx.mongoose.model("Permission");
      const permissions = await PermissionModel.find({}).lean();
      return permissions;
    },
    permission: async (parent, { id }, ctx) => {
      const PermissionModel = ctx.mongoose.model("Permission");
      const permission = await PermissionModel.findById(
        castToObjectId(id)
      ).lean();
      return permission;
    }
  },
  mutations: {
    addPermission: async (parent, { permissionInput }, ctx) => {
      const PermissionModel = ctx.mongoose.model("Permission");
      const created = await PermissionModel.create(permissionInput);
      return created;
    },
    editPermission: async (_, { id, permissionInput }, ctx) => {
      const PermissionModel = ctx.mongoose.model("Permission");
      const edited = await PermissionModel.findByIdAndUpdate(
        castToObjectId(id),
        { $set: permissionInput },
        { new: true }
      );

      return edited;
    },
    deletePermission: async (_, { id }, ctx) => {
      const PermissionModel = ctx.mongoose.model("Permission");
      const removed = await PermissionModel.findByIdAndRemove(
        castToObjectId(id)
      );
      return removed;
    }
  }
};
