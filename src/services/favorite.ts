import * as FavoriteDataAccess from "../data-access/favorite";

export async function favorite({ post_id, user_id }: any) {
  return await FavoriteDataAccess.createFavorite({ post_id: Number(post_id), user_id: Number(user_id) });
}

export async function unfavorite({ post_id, user_id }: any) {
  return await FavoriteDataAccess.deleteFavorite({ post_id: Number(post_id), user_id: Number(user_id) });
}
