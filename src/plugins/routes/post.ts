import Hapi, { ServerRoute } from "@hapi/hapi";
import Joi from "joi";

import * as PostController from "../../controllers/post";

const POST_ROUTES: ServerRoute[] = [
  {
    method: "POST",
    path: "/post",
    handler: PostController.postPost,
    options: {
      validate: {
        payload: Joi.object({
          title: Joi.string().max(200).required(),
          content: Joi.string().max(500).required(),
        }),
      },
    },
  },
  {
    method: "GET",
    path: "/post/recents",
    handler: PostController.getRecentPosts,
  },
  {
    method: "GET",
    path: "/post/{post_id}",
    handler: PostController.getPost,
    options: {
      validate: {
        params: Joi.object({
          post_id: Joi.number().max(100),
        }),
      },
    },
  },
];

export const postPlugin: Hapi.Plugin<undefined> = {
  name: "post",
  dependencies: ["prisma"],
  register: async function (server: Hapi.Server) {
    try {
      server.route(POST_ROUTES);
    } catch (err) {
      console.error("An error occurred while registering 'post' plugin: ", err);
    }
  },
};
