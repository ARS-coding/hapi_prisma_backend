import { Request } from "@hapi/hapi";

import * as LikeService from "../services/like";

export async function like(req: Request) {
  return await LikeService.like({ post_id: req.params.post_id, user_id: req.auth.credentials.user_id });
}

export async function unlike(req: Request) {
  return await LikeService.unlike({ post_id: req.params.post_id, user_id: req.auth.credentials.user_id });
}
