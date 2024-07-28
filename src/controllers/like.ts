import Hapi, { Request, ResponseToolkit } from "@hapi/hapi";

import * as LikeService from "../services/like";
// use joi to validate the schema, look into doing that in the route creating option part instead of on the controller

export function like(req: Request, h: ResponseToolkit) {
  //   return LikeService.like;
}

export function unlike(req: Request, h: ResponseToolkit) {
  //   return LikeService.unlike;
}
