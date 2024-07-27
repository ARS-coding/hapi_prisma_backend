"use strict";

import Hapi from "@hapi/hapi";

async function init() {
  const server: Hapi.Server = Hapi.server({
    port: process.env.PORT || 3000,
    host: process.env.HOST || "localhost",
  });
  await server.start();
}

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init()
  .then(() => console.log("Server started running!"))
  .catch((err) => console.error("An error occured while initializing the HTTP server: ", err));
