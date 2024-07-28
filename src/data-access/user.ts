export function createUser(firstName: string, lastName: string, email: string, password: string) {
  return "signUp";
}

export function getUser(user_id: string) {
  return "getUser";
}

export function patchUser(user_id: string) {
  return "patchUser";
}

export function deleteUser(user_id: string) {
  return "deleteUser";
}
