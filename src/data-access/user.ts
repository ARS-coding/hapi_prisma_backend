import bcrypt from "bcrypt";
import { Prisma } from "@prisma/client";
import Boom from "@hapi/boom";

import { prisma } from "../prisma";

type CreateUserArguments = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};
export async function createUser({ email, password, firstName, lastName }: CreateUserArguments) {
  try {
    const encryptedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        email,
        password: encryptedPassword,
        firstName,
        lastName,
      },
    });

    return user;
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === "P2002") {
        throw Boom.badRequest("There is a unique constraint violation, a new user cannot be created with this email.");
      }
    }

    throw Boom.badImplementation("Unknown error at createUser data-access layer.");
  }
}

type GetUserByIdArguments = {
  user_id: string;
};
export async function getUserById({ user_id }: GetUserByIdArguments) {
  try {
    const user = await prisma.user.findUniqueOrThrow({
      where: {
        id: Number(user_id),
      },
    });

    return user;
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === "P2025") {
        throw Boom.badRequest("Couldn't find a user with the given id.");
      }
    }

    throw Boom.badImplementation("Unknown error at createUser data-access layer.");
  }
}

type GetUserByEmailArguments = {
  email: string;
};
export async function getUserByEmail({ email }: GetUserByEmailArguments) {
  try {
    const user = await prisma.user.findUniqueOrThrow({
      where: {
        email,
      },
    });

    return user;
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === "P2025") {
        throw Boom.badRequest("Couldn't find a user with the given email.");
      }
    }

    throw Boom.badImplementation("Unknown error at getUserByEmail data-access layer.");
  }
}

export async function patchUser({ userFieldsToOverride, userToBeChangedId }: any) {
  try {
    return await prisma.user.update({
      where: {
        id: userToBeChangedId,
      },
      data: userFieldsToOverride,
    });
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === "P2025") {
        throw Boom.badRequest("Couldn't find a user with the given id.");
      }
    }

    throw Boom.badImplementation("Unknown error at patchUser data-access layer.");
  }
}

export async function deleteUser({ userToBeDeletedId }: any) {
  try {
    return await prisma.user.delete({
      where: {
        id: userToBeDeletedId,
      },
    });
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === "P2025") {
        throw Boom.badRequest("Couldn't find a user with the given id.");
      }
    }

    throw Boom.badImplementation("Unknown error at deleteUser data-access layer.");
  }
}
