import { Request } from "@hapi/hapi";

import * as UserService from "../services/user";
import { prisma } from "../prisma";

export async function signUp(req: Request) {
  type ExpectedRequestPayload = { email: string; password: string; firstName: string; lastName: string };
  const { email, password, firstName, lastName } = req.payload as ExpectedRequestPayload;

  const { access_token } = await UserService.signUp({ email, password, firstName, lastName });

  return { access_token };
}

export async function signIn(req: Request) {
  type ExpectedRequestPayload = { email: string; password: string };
  const { email, password } = req.payload as ExpectedRequestPayload;

  const { access_token } = await UserService.signIn({ email, password });

  return { access_token };
}

export async function getUser(req: Request) {
  type ExpectedRequestParams = { user_id: string };
  const { user_id } = req.params as ExpectedRequestParams;

  return await UserService.getUser({ user_id });
}

export async function patchUser(req: Request) {
  return await UserService.patchUser({ userFieldsToOverride: req.payload, user_id: req.auth.credentials.user_id, userToBeChangedId: req.params.user_id });
}

export async function deleteUser(req: Request) {
  return await UserService.deleteUser({ userToBeDeletedId: req.params.user_id, user_id: req.auth.credentials.user_id });
}
