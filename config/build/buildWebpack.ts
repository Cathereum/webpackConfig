import webpack from "webpack";
import path from "path";
import buildDevServer from "./buildDevServer";
import buildLoaders from "./buildLoaders";
import buildPlugins from "./buildPlugins";
import buildResolvers from "./buildResolvers";

function buildWebpack(option): webpack.Configuration {
  return {
    mode: env.mode ?? "development",
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "[name].[contenthash:8].js",
      clean: true,
    },
    plugins: buildPlugins(),

    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
    devServer: isDev ? buildDevServer() : undefined,
  };
}

export default buildWebpack;
