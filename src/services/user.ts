import bcrypt from "bcrypt";
import Boom from "@hapi/boom";
import * as UserDataAccess from "../data-access/user";

import { sign } from "jsonwebtoken";
function generateAccessToken({ user_id }: { user_id: number }) {
  const access_token = sign({ user_id }, process.env.JWT_SECRET as string, { expiresIn: "1h" });
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

type GetUserArguments = {
  user_id: string;
};
export async function getUser({ user_id }: GetUserArguments) {
  return await UserDataAccess.getUserById({ user_id });
}

export async function patchUser({ userFieldsToOverride, user_id, userToBeChangedId }: any) {
  if (!(user_id == userToBeChangedId)) {
    throw Boom.badRequest("User only can change their own user details.");
  }

  return await UserDataAccess.patchUser({ userFieldsToOverride, userToBeChangedId });
}

type DeleteUserArguments = {
  user_id: string;
};
export async function deleteUser({ user_id }: DeleteUserArguments) {
  //   return UserDataAccess.deleteUser
}
