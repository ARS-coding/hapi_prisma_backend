import { Server } from "@hapi/hapi";
import Inert from "@hapi/inert";
import Vision from "@hapi/vision";
import HapiSwagger from "hapi-swagger";

export async function setSwagger(server: Server) {
  await server.register([
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: {
        info: {
          title: "Test API Documentation",
          version: "1.0.0",
        },
        schemes: ["http", "https"],
        host: "localhost:3001",
        documentationPath: "/docs",
      },
    },
  ]);

  return server;
}
