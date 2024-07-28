import Hapi from "@hapi/hapi";
import authPlugin from "@hapi/basic";

import * as plugins from "./plugins";
import { validate } from "./auth";

const server = Hapi.server({
  port: process.env.PORT || 3000,
  host: process.env.HOST || "localhost",
});

async function registerServerPlugins() {
  await server.register(Object.values(plugins));
  return server;
}

async function setAuth() {
  await server.register(authPlugin); // register basic auth as plugin before setting server auth configurations
  server.auth.strategy("simple", "basic", { validate });
  server.auth.default("simple");

  return server;
}

async function startServer() {
  await server.start();
  return server;
}

export async function initializeServer() {
  try {
    await registerServerPlugins();
    console.log("Server plugins registered!");

    await setAuth();
    console.log("Authentication got successfully set up!");

    await startServer();
    console.log("Server started running!");
  } catch (err) {
    console.error("An error occured while initializing the HTTP server: ", err);
  }
}
