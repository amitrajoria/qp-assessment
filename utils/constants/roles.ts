const rightsEnum = {
  GET_USERS: "get-users",
  MANAGE_GROCERY: "manage-grocery",
  MANAGE_CART: "manage-cart",
  PLACE_ORDER: "place-order",
};

const allRoles = {
  user: [rightsEnum.MANAGE_GROCERY, rightsEnum.MANAGE_CART, rightsEnum.PLACE_ORDER],
  admin: [
    rightsEnum.GET_USERS,
    rightsEnum.MANAGE_GROCERY,
    rightsEnum.MANAGE_CART,
    rightsEnum.PLACE_ORDER,
  ],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

export { roles, roleRights, rightsEnum };
