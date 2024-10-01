import { Provider as LocalProvider } from "react-redux";
import React, { Suspense } from "react";
import { ErrorBoundary } from "@architecture-it/stylesystem";

import AppRoutes from "./routes";
import { store } from "./store/store";
import { ModuleContext } from "./store/hooks";

const App = () => (
  <LocalProvider context={ModuleContext} store={store}>
    <ErrorBoundary>
      <Suspense>
        <AppRoutes />
      </Suspense>
    </ErrorBoundary>
  </LocalProvider>
);

export default App;
