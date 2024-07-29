import { Request } from "@hapi/hapi";

import * as FavoriteService from "../services/favorite";

export async function favorite(req: Request) {
  return await FavoriteService.favorite({ post_id: req.params.post_id, user_id: req.auth.credentials.user_id });
}

export async function unfavorite(req: Request) {
  return await FavoriteService.unfavorite({ post_id: req.params.post_id, user_id: req.auth.credentials.user_id });
}
