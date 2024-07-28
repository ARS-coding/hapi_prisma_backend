import { prisma } from "../prisma";

export function createFavorite(post_id: string, user_id: string) {
  return "createFavorite";
}

export function deleteFavorite(post_id: string, user_id: string) {
  return "deleteFavorite";
}
