import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { Configuration } from "webpack";
import { BuildOptions } from "./types/types";

function buildPlugins(options: BuildOptions): Configuration["plugins"] {
  const isProd = options.mode === "production";

  return [
    new HtmlWebpackPlugin({
      template: options.paths.html,
    }),
    isProd &&
      new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash:8].css",
        chunkFilename: "css/[name].[contenthash:8].css",
      }),
  ];
}

export default buildPlugins;
