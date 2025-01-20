import { mfeConfig } from "@architecture-it/rsbuild/mfeConfig";

import { dependencies } from "./package.json";

export default mfeConfig({
  dependencies,
  moduleFederation: {
    options: {
      name: "map",
      exposes: {
        "./App": "./src/App",
      },
    },
  },
});
