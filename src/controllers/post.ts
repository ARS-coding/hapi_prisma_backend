import Hapi, { Request, ResponseToolkit } from "@hapi/hapi";

import * as PostService from "../service/post";
// use joi to validate the schema, look into doing that in the route creating option part instead of on the controller

export function postPost(req: Request, h: ResponseToolkit) {
  //   return PostService.postPost;
}

export function getRecentPosts(req: Request, h: ResponseToolkit) {
  //   return PostService.getRecentPosts;
}

export function getPost(req: Request, h: ResponseToolkit) {
  //   return PostService.getPost;
}
