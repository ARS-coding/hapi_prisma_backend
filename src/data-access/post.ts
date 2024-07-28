import { prisma } from "../prisma";

export function postPost(title: string, content: string, user_id: string) {
  return "postPost";
}

export function getRecentPosts(user_id: string) {
  return "getRecentPosts";
}

export function getPost(user_id: string) {
  return "getPost";
}
