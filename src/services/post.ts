import * as PostDataAccess from "../data-access/post";

export async function postPost({ title, content, user_id }: any) {
  return await PostDataAccess.postPost({ title, content, user_id });
}

export function getRecentPosts() {
  //   return PostDataAccess.getRecentPosts
}

export function getPost(user_id: string) {
  //   return PostDataAccess.getPost
}
