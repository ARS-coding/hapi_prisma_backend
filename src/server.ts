import Hapi from "@hapi/hapi";

import * as plugins from "./plugins";
import { setAuth } from "./auth";

const server = Hapi.server({
  port: Number(process.env.PORT) || 3001,
  host: process.env.HOST || "localhost",
});

async function registerServerPlugins() {
  await server.register(Object.values(plugins));
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

    await setAuth(server);
    console.log("Authentication got successfully set up!");

    await startServer();
    console.log("Server started running!");
  } catch (err) {
    console.error("An error occured while initializing the HTTP server: ", err);
  }
}
