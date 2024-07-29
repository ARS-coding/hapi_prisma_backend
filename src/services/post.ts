import * as PostDataAccess from "../data-access/post";

export async function postPost({ title, content, user_id }: any) {
  return await PostDataAccess.postPost({ title, content, user_id });
}

export async function getRecentPosts() {
  return await PostDataAccess.getRecentPosts();
}

export async function getPost({ post_id }: { post_id: string }) {
  return await PostDataAccess.getPost({ post_id: Number(post_id) });
}
