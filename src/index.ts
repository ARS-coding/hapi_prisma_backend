"use strict";

import { initializeServer } from "./server";

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

(async function main() {
  try {
    await initializeServer();

    console.log("All is initialized and everything is fine!"); // keep this at the end of the try block
  } catch (err) {
    console.error("An error occured on root entry level: ", err);
  }
})();
