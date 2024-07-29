import { Prisma } from "@prisma/client";
import Boom from "@hapi/boom";

import { prisma } from "../prisma";

export async function postPost({ title, content, user_id }: any) {
  try {
    return await prisma.post.create({
      data: {
        userId: user_id,
        title,
        content,
      },
    });
  } catch (error) {
    throw Boom.badImplementation("Unknown error at postPost data-access layer.");
  }
}

export async function getRecentPosts() {
  try {
    return await prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 3,
    });
  } catch (error) {
    throw Boom.badImplementation("Unknown error at getRecentPosts data-access layer.");
  }
}

export async function getPost({ post_id }: { post_id: number }) {
  try {
    return await prisma.post.findUniqueOrThrow({
      where: {
        id: post_id,
      },
    });
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === "P2025") {
        throw Boom.badRequest("Couldn't find a post with the given id.");
      }
    }

    throw Boom.badImplementation("Unknown error at getPost data-access layer.");
  }
}
