import Hapi from "@hapi/hapi";
import { prisma } from "../prisma";

declare module "@hapi/hapi" {
  interface ServerApplicationState {
    prisma: typeof prisma;
  }
}

export const prismaPlugin: Hapi.Plugin<undefined> = {
  name: "prisma",
  register: async function (server: Hapi.Server) {
    try {
      server.app.prisma = prisma;

      server.ext({
        type: "onPostStop",
        method: async (server: Hapi.Server) => {
          server.app.prisma.$disconnect();
        },
      });
    } catch (err) {
      console.error("There was an error registering prisma plugin: ", err);
    }
  },
};
