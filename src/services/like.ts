import * as LikeDataAccess from "../data-access/like";

export async function like({ post_id, user_id }: any) {
  return await LikeDataAccess.createLike({ post_id: Number(post_id), user_id: Number(user_id) });
}

export async function unlike({ post_id, user_id }: any) {
  return await LikeDataAccess.deleteLike({ post_id: Number(post_id), user_id: Number(user_id) });
}
