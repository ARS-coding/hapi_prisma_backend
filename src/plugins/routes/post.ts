import Hapi, { ServerRoute } from "@hapi/hapi";

import * as PostController from "../../controllers/post";

const POST_ROUTES: ServerRoute[] = [
  {
    method: "POST",
    path: "/post",
    handler: PostController.postPost,
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
  },
];

export const postPlugin: Hapi.Plugin<undefined> = {
  name: "user",
  register: async function (server: Hapi.Server) {
    try {
      server.route(POST_ROUTES);
    } catch (err) {
      console.error("An error occurred while registering 'post' plugin: ", err);
    }
  },
};
