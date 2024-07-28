"use strict";

import Hapi from "@hapi/hapi";
import * as plugins from "./plugins";

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

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

(async function main() {
  try {
    await registerServerPlugins();
    console.log("Server plugins registered!");

    await startServer();
    console.log("Server started running!");
  } catch (err) {
    console.error("An error occured while initializing the HTTP server: ", err);
  }
})();
