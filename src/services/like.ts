import * as LikeDataAccess from "../data-access/like";
// use joi to validate the schema, look into doing that in the route creating option part instead of on the controller

export function like(post_id: string, user_id: string) {
  //   return LikeDataAccess.createLike;
}

export function unlike(post_id: string, user_id: string) {
  //   return LikeDataAccess.deleteLike;
}
