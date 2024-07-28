import Hapi from "@hapi/hapi";

export const statusPlugin: Hapi.Plugin<undefined> = {
  name: "app/status",
  register: async function (server: Hapi.Server) {
    try {
      server.route({
        method: "GET",
        path: "/status",
        handler: (_, h: Hapi.ResponseToolkit) => {
          return h.response({ up: true }).code(200);
        },
      });
    } catch (err) {
      console.error("An error occurred while registering status plugin: ", err);
    }
  },
};
