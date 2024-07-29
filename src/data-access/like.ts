import { Prisma } from "@prisma/client";
import Boom from "@hapi/boom";

import { prisma } from "../prisma";

export async function createLike({ post_id, user_id }: { post_id: number; user_id: number }) {
  try {
    return await prisma.like.create({
      data: {
        postId: post_id,
        userId: user_id,
      },
    });
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === "P2002") {
        throw Boom.badRequest(
          "There is a unique constraint violation! A new like can't be created with this user on this post, since this user already liked this post."
        );
      }
      if (err.code === "P2003") {
        throw Boom.badRequest("Either the user or the post doesn't exist.");
      }
    }

    throw Boom.badImplementation("Unknown error at createLike data-access layer.");
  }
}

export async function deleteLike({ post_id, user_id }: { post_id: number; user_id: number }) {
  try {
    return await prisma.like.delete({
      where: {
        id: { postId: post_id, userId: user_id },
      },
    });
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === "P2025") {
        throw Boom.badRequest("This like doesn't exist.");
      }
    }

    throw Boom.badImplementation("Unknown error at deleteLike data-access layer.");
  }
}
