import Hapi, { ServerRoute } from "@hapi/hapi";

import * as LikeController from "../../controllers/like";

const LIKE_ROUTES: ServerRoute[] = [
  {
    method: "POST",
    path: "/like/{post_id}",
    handler: LikeController.like,
  },
  {
    method: "DELETE",
    path: "/like/unlike/{post_id}",
    handler: LikeController.unlike,
  },
];

export const likePlugin: Hapi.Plugin<undefined> = {
  name: "like",
  dependencies: ["prisma"],
  register: async function (server: Hapi.Server) {
    try {
      server.route(LIKE_ROUTES);
    } catch (err) {
      console.error("An error occurred while registering 'like' plugin: ", err);
    }
  },
};
