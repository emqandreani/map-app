import { mfeConfig } from "@architecture-it/rsbuild/mfeConfig";

import { dependencies } from "./package.json";

export default mfeConfig({
  dependencies,
  moduleFederation: {
    options: {
      //TODO: revisar que el export y el exposes sea cómo lo tenías antes
      name: "map",
      exposes: {
        "./App": "./src/App",
      },
    },
  },
});
