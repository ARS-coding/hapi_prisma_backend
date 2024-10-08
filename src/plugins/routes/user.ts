import Hapi, { ServerRoute } from "@hapi/hapi";
import Joi from "joi";

import * as UserController from "../../controllers/user";

const USER_ROUTES: ServerRoute[] = [
  {
    method: "POST",
    path: "/user/sign-up",
    handler: UserController.signUp,
    options: {
      auth: false,
      validate: {
        payload: Joi.object({
          email: Joi.string().email().max(200).required(),
          password: Joi.string().max(100).required(),
          firstName: Joi.string().max(100).required(),
          lastName: Joi.string().max(100).required(),
        }),
        failAction: (req, h, err) => {
          throw err;
        },
      },
      tags: ["api"],
    },
  },
  {
    method: "POST",
    path: "/user/sign-in",
    handler: UserController.signIn,
    options: {
      auth: false,
      validate: {
        payload: Joi.object({
          email: Joi.string().email().max(200).required(),
          password: Joi.string().max(100).required(),
        }),
        failAction: (req, h, err) => {
          throw err;
        },
      },
      tags: ["api"],
    },
  },
  {
    method: "GET",
    path: "/user/{user_id}",
    handler: UserController.getUser,
    options: {
      validate: {
        params: Joi.object({ user_id: Joi.number().max(100) }),
        failAction: (req, h, err) => {
          throw err;
        },
      },
      tags: ["api"],
    },
  },
  {
    method: "PATCH",
    path: "/user/{user_id}",
    handler: UserController.patchUser,
    options: {
      validate: {
        params: Joi.object({ user_id: Joi.number().max(100).required() }),
        payload: Joi.object({
          email: Joi.string().email().max(200),
          password: Joi.any().forbidden(), // can't change password, could create a separate endpoint for this change only
          firstName: Joi.string().max(100),
          lastName: Joi.string().max(100),
        }),
        failAction: (req, h, err) => {
          throw err;
        },
      },
      tags: ["api"],
    },
  },
  {
    method: "DELETE",
    path: "/user/{user_id}",
    handler: UserController.deleteUser,
    options: {
      validate: {
        params: Joi.object({ user_id: Joi.number().max(100).required() }),
        failAction: (req, h, err) => {
          throw err;
        },
      },
      tags: ["api"],
    },
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
