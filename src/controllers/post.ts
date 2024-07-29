import Hapi, { Request, ResponseToolkit } from "@hapi/hapi";

import * as PostService from "../services/post";
// use joi to validate the schema, look into doing that in the route creating option part instead of on the controller

export async function postPost(req: Request, h: ResponseToolkit) {
  type ExpectedPayload = { title: string; content: string };
  const { title, content } = req.payload as ExpectedPayload;

  return await PostService.postPost({ title, content, user_id: req.auth.credentials.user_id as number });
}

export function getRecentPosts() {
  //   return PostService.getRecentPosts;
}

export function getPost(req: Request, h: ResponseToolkit) {
  //   return PostService.getPost;
}
