import Hapi from "@hapi/hapi";
import { PrismaClient } from "@prisma/client";

declare module "@hapi/hapi" {
  interface ServerApplicationState {
    prisma: PrismaClient;
  }
}

export const prismaPlugin: Hapi.Plugin<undefined> = {
  name: "prisma",
  register: async function (server: Hapi.Server) {
    try {
      server.app.prisma = new PrismaClient();

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
