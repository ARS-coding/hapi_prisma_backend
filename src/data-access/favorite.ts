import { Prisma } from "@prisma/client";
import Boom from "@hapi/boom";

import { prisma } from "../prisma";

export async function createFavorite({ post_id, user_id }: { post_id: number; user_id: number }) {
  try {
    return await prisma.favorite.create({
      data: {
        postId: post_id,
        userId: user_id,
      },
    });
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === "P2002") {
        throw Boom.badRequest(
          "There is a unique constraint violation! A new favorite can't be created with this user on this post, since this user already favorited this post."
        );
      }
      if (err.code === "P2003") {
        throw Boom.badRequest("Either the user or the post doesn't exist.");
      }
    }

    throw Boom.badImplementation("Unknown error at createFavorite data-access layer.");
  }
}

export async function deleteFavorite({ post_id, user_id }: { post_id: number; user_id: number }) {
  try {
    return await prisma.favorite.delete({
      where: {
        id: { postId: post_id, userId: user_id },
      },
    });
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === "P2025") {
        throw Boom.badRequest("This favorite doesn't exist.");
      }
    }

    throw Boom.badImplementation("Unknown error at deleteFavorite data-access layer.");
  }
}
