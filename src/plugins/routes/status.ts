import Hapi, { ServerRoute } from "@hapi/hapi";

const STATUS_ROUTES: ServerRoute[] = [
  {
    method: ["GET"],
    path: "/status",
    handler: (req: Hapi.Request, h: Hapi.ResponseToolkit) => {
      return h.response({ up: true }).code(200);
    },
    options: {
      auth: false,
      tags: ["api"],
    },
  },
];

export const statusPlugin: Hapi.Plugin<undefined> = {
  name: "status",
  register: async function (server: Hapi.Server) {
    try {
      server.route(STATUS_ROUTES);
    } catch (err) {
      console.error("An error occurred while registering status plugin: ", err);
    }
  },
};
