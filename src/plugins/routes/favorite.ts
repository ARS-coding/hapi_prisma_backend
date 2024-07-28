import Hapi, { ServerRoute } from "@hapi/hapi";

import * as FavoriteController from "../../controllers/favorite";

const FAVORITE_ROUTES: ServerRoute[] = [
  {
    method: "POST",
    path: "/favorite/{post_id}",
    handler: FavoriteController.favorite,
  },
  {
    method: "DELETE",
    path: "/favorite/unfavorite/{post_id}",
    handler: FavoriteController.unfavorite,
  },
];

export const favoritePlugin: Hapi.Plugin<undefined> = {
  name: "favorite",
  register: async function (server: Hapi.Server) {
    try {
      server.route(FAVORITE_ROUTES);
    } catch (err) {
      console.error("An error occurred while registering 'favorite' plugin: ", err);
    }
  },
};
