import { Request, ResponseToolkit } from "@hapi/hapi";

import * as PostService from "../services/post";

export async function postPost(req: Request, h: ResponseToolkit) {
  type ExpectedPayload = { title: string; content: string };
  const { title, content } = req.payload as ExpectedPayload;

  return await PostService.postPost({ title, content, user_id: req.auth.credentials.user_id as number });
}

export async function getRecentPosts() {
  return await PostService.getRecentPosts();
}

export async function getPost(req: Request, h: ResponseToolkit) {
  const { post_id } = req.params as { post_id: string };
  return await PostService.getPost({ post_id });
}
