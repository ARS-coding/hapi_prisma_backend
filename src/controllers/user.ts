import Hapi, { Request, ResponseToolkit } from "@hapi/hapi";

import * as UserService from "../services/user";
// use joi to validate the schema, look into doing that in the route creating option part instead of on the controller

export function signUp(req: Request, h: ResponseToolkit) {
  //   return UserService.signUp;
}

export function signIn(req: Request, h: ResponseToolkit) {
  //   return UserService.signIn;
}

export function getUser(req: Request, h: ResponseToolkit) {
  //   return UserService.getUser;
}

export function patchUser(req: Request, h: ResponseToolkit) {
  //   return UserService.patchUser;
}

export function deleteUser(req: Request, h: ResponseToolkit) {
  //   return UserService.deleteUser;
}
