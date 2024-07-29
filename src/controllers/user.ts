import Hapi, { Request, ResponseToolkit } from "@hapi/hapi";

import * as UserService from "../services/user";
// use joi to validate the schema, look into doing that in the route creating option part instead of on the controller

export async function signUp(req: Request, h: ResponseToolkit) {
  type ExpectedRequestPayload = { email: string; password: string; firstName: string; lastName: string };
  const { email, password, firstName, lastName } = req.payload as ExpectedRequestPayload;

  const { access_token } = await UserService.signUp({ email, password, firstName, lastName });

  return { access_token };
}

export async function signIn(req: Request, h: ResponseToolkit) {
  type ExpectedRequestPayload = { email: string; password: string };
  const { email, password } = req.payload as ExpectedRequestPayload;

  const { access_token } = await UserService.signIn({ email, password });

  return { access_token };
}

export async function signOut(req: Request, h: ResponseToolkit) {
  //   return UserService.signOut;
}

export async function getUser(req: Request, h: ResponseToolkit) {
  type ExpectedRequestParams = { user_id: string };
  const { user_id } = req.params as ExpectedRequestParams;

  return UserService.getUser({ user_id });
}

export async function patchUser(req: Request, h: ResponseToolkit) {
  //   return UserService.patchUser;
}

export async function deleteUser(req: Request, h: ResponseToolkit) {
  //   return UserService.deleteUser;
}
