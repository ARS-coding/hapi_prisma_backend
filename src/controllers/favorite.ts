import Hapi, { Request, ResponseToolkit } from "@hapi/hapi";

import * as FavoriteService from "../services/favorite";
// use joi to validate the schema, look into doing that in the route creating option part instead of on the controller

export function favorite(req: Request, h: ResponseToolkit) {
  //   return FavoriteService.favorite;
}

export function unfavorite(req: Request, h: ResponseToolkit) {
  //   return FavoriteService.unfavorite;
}
