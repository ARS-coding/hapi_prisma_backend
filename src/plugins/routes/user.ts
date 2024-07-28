import Hapi, { ServerRoute } from "@hapi/hapi";

import * as UserController from "../../controllers/user";

const USER_ROUTES: ServerRoute[] = [
  {
    method: "POST",
    path: "/user/sign-up",
    handler: UserController.signUp,
  },
  {
    method: "POST",
    path: "/user/sign-in",
    handler: UserController.signIn,
  },
  {
    method: "GET",
    path: "/user/{user_id}",
    handler: UserController.getUser,
  },
  {
    method: "PATCH",
    path: "/user/{user_id}",
    handler: UserController.patchUser,
  },
  {
    method: "DELETE",
    path: "/user/{user_id}",
    handler: UserController.deleteUser,
  },
];

export const userPlugin: Hapi.Plugin<undefined> = {
  name: "user",
  dependencies: ["prisma"],
  register: async function (server: Hapi.Server) {
    try {
      server.route(USER_ROUTES);
    } catch (err) {
      console.error("An error occurred while registering 'user' plugin: ", err);
    }
  },
};
