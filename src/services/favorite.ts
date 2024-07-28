import * as FavoriteDataAccess from "../data-access/favorite";
// use joi to validate the schema, look into doing that in the route creating option part instead of on the controller

export function favorite(post_id: string, user_id: string) {
  //   return FavoriteDataAccess.createFavorite;
}

export function unfavorite(post_id: string, user_id: string) {
  //   return FavoriteDataAccess.deleteFavorite;
}
