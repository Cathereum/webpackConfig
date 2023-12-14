import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

function buildDevServer(): DevServerConfiguration {
  return {
    port: env.port ?? 3000,
    open: true,
  };
}

export default buildDevServer;
