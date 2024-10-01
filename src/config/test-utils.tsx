import { StyleSystemProvider } from "@architecture-it/stylesystem";
import { configureStore, PreloadedState } from "@reduxjs/toolkit";
import { render, renderHook } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import getTheme from "@architecture-it/stylesystem/Theme";
import React, { PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { ModuleContext } from "../store/hooks";
import { RootState, store } from "../store/store";
import { reducers } from "../store/reducers";
// As a basic setup, import your same slice reducers

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>;
  store?: typeof store;
  basename?: string;
}

interface WithProvidersProps {
  basename?: string;
  store: typeof store;
}

const colors = {
  primary: "#d71920",
  colorText: "#616161",
  error: "#d71920",
  secondary: "#b6040b",
};

export function WithProviders({ basename, store }: WithProvidersProps) {
  return function Wrapper({ children }: PropsWithChildren<{}>) {
    return (
      <BrowserRouter basename={basename}>
        <StyleSystemProvider theme={getTheme(false, colors)}>
          <Provider context={ModuleContext} store={store}>
            {children}
          </Provider>
        </StyleSystemProvider>
      </BrowserRouter>
    );
  };
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = configureStore({ reducer: reducers, preloadedState }),
    // Basename might be "/" for modules
    basename = "/",
    ...renderOptions
  }: ExtendedRenderOptions = {},
) {
  // Return an object with the store and all of RTL's query functions
  return {
    store,
    ...render(ui, { wrapper: WithProviders({ basename, store }), ...renderOptions }),
  };
}

export function renderHookWithProviders<Result, Props>(
  hook: (_initialProps: Props) => Result,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = configureStore({ reducer: reducers, preloadedState }),
    // Basename might be "/" for modules
    basename = "/",
    ...renderOptions
  }: ExtendedRenderOptions = {},
) {
  // Return an object with the store and all of RTL's query functions
  return {
    store,
    ...renderHook(hook, { wrapper: WithProviders({ basename, store }), ...renderOptions }),
  };
}
