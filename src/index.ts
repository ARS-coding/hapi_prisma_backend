"use strict";

import Hapi from "@hapi/hapi";
import { statusPlugin } from "./plugins/status";

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

const server = Hapi.server({
  port: process.env.PORT || 3000,
  host: process.env.HOST || "localhost",
});

async function registerServerPlugins() {
  server.register([statusPlugin]);
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
