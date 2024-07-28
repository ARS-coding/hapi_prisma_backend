import { Request, ResponseToolkit } from "@hapi/hapi";
import bcrypt from "bcrypt";

import { prisma } from "./prisma";

export async function validate(request: Request, email: string, password: string, h: ResponseToolkit) {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (!user) {
    return { credentials: null, isValid: false };
  }

  const isValid = await bcrypt.compare(password, user.password);
  const credentials = { id: user.id, firstName: user.firstName, lastName: user.lastName, email: user.email };
  return { isValid, credentials };
}
