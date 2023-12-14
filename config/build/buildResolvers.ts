import { Configuration } from "webpack";

function buildResolvers(): Configuration["resolve"] {
  return {
    extensions: [".tsx", ".ts", ".js"],
  };
}

export default buildResolvers;
