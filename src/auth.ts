import { Request, Server } from "@hapi/hapi";
import authPlugin from "hapi-auth-bearer-token";
import { verify, JwtPayload } from "jsonwebtoken";

export async function validate(request: Request, token: string) {
  const { user_id, exp } = verify(token, process.env.JWT_SECRET as string) as { user_id: number; exp: number };
  const notExpired = Math.floor(Date.now() / 1000) < exp;

  return { isValid: notExpired, credentials: { user_id } };
}

export async function setAuth(server: Server) {
  await server.register(authPlugin); // register basic auth as plugin before setting server auth configurations
  server.auth.strategy("simple", "bearer-access-token", { validate });
  server.auth.default("simple");

  return server;
}
