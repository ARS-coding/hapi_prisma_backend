import * as UserDataAccess from "../data-access/user";

export function signUp(firstName: string, lastName: string, email: string, password: string) {
  //   return UserDataAccess.createUser
}

export function signIn(email: string, password: string) {
  //   return UserDataAccess.getUserByEmail
}

export function signOut(email: string, password: string) {}

export function getUser(user_id: string) {
  //   return UserDataAccess.getUserById
}

export function patchUser(user_id: string) {
  //   return UserDataAccess.patchUser
}

export function deleteUser(user_id: string) {
  //   return UserDataAccess.deleteUser
}
