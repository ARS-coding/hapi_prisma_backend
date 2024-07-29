import bcrypt from "bcrypt";
import Boom from "@hapi/boom";
import * as UserDataAccess from "../data-access/user";

import { sign } from "jsonwebtoken";
function generateAccessToken({ user_id }: { user_id: number }) {
  const access_token = sign({ id: user_id }, process.env.JWT_SECRET as string, { expiresIn: "1h" });
  return { access_token };
}

type SignUpArguments = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};
export async function signUp({ email, password, firstName, lastName }: SignUpArguments) {
  const createdUser = await UserDataAccess.createUser({ email, password, firstName, lastName });

  return generateAccessToken({ user_id: createdUser.id });
}

type SignInArguments = {
  email: string;
  password: string;
};
export async function signIn({ email, password }: SignInArguments) {
  const user = await UserDataAccess.getUserByEmail({ email });

  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    throw Boom.badRequest("Given password for user with the specific email was incorrect.");
  }

  return generateAccessToken({ user_id: user.id });
}

type SignOutArguments = {
  email: string;
  password: string;
};
export async function signOut({ email, password }: SignOutArguments) {}

type GetUserArguments = {
  user_id: string;
};
export async function getUser({ user_id }: GetUserArguments) {
  return UserDataAccess.getUserById({ user_id });
}

type PatchUserArguments = {
  user_id: string;
};
export async function patchUser({ user_id }: PatchUserArguments) {
  //   return UserDataAccess.patchUser
}

type DeleteUserArguments = {
  user_id: string;
};
export async function deleteUser({ user_id }: DeleteUserArguments) {
  //   return UserDataAccess.deleteUser
}
