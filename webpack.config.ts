import webpack from "webpack";
import buildWebpack from "./config/build/buildWebpack";

interface Env {
  mode: "development" | "production";
  port: number;
}

export default (env: Env) => {
  const isDev = env.mode === "development";
  const isProd = env.mode === "production";

  const config: webpack.Configuration = buildWebpack();
  return config;
};
