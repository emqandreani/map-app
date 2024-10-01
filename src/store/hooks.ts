import {
  type TypedUseSelectorHook,
  createDispatchHook,
  createSelectorHook,
  ReactReduxContextValue,
} from "react-redux";
import React from "react";

import type { RootState, AppDispatch } from "./store";

export const ModuleContext = React.createContext<ReactReduxContextValue<RootState, any>>(
  null as any,
);

const useDispatch = createDispatchHook(ModuleContext);
const useSelector = createSelectorHook(ModuleContext);

// y se crean dispatch y selectores tipados desde el contexto
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
