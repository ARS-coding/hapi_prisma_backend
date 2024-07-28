import Hapi from "@hapi/hapi";
import * as plugins from "./plugins";

const server = Hapi.server({
  port: process.env.PORT || 3000,
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

    await startServer();
    console.log("Server started running!");
  } catch (err) {
    console.error("An error occured while initializing the HTTP server: ", err);
  }
}
