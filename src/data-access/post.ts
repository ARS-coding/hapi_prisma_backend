import { Prisma } from "@prisma/client";
import Boom from "@hapi/boom";

import { prisma } from "../prisma";

export async function postPost({ title, content, user_id }: any) {
  return await prisma.post.create({
    data: {
      userId: user_id,
      title,
      content,
    },
  });
}

export function getRecentPosts() {
  return "getRecentPosts";
}

type GetPostArgs = { post_id: number };
export function getPost({ post_id }: GetPostArgs) {
  try {
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === "P2025") {
        throw Boom.badRequest("Couldn't find a post with the given id.");
      }
    }
  }
  return "getPost";
}
