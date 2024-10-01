import { createSlice } from "@reduxjs/toolkit";
import {
  type IState,
  fullfiledSimpleCallbackCase,
  pendingSimpleCallbackCase,
  rejectCallbackCase,
} from "@architecture-it/core";

import { IUsers } from "../../../domain/IUsers";
import { RootState } from "../../store";

import { getUsers } from "./asyncActions";

const defaultData: IUsers[] = [
  {
    id: 1,
    name: "Lionel",
    lastName: "Messi",
    age: 36,
  },
  {
    id: 2,
    name: "Julián",
    lastName: "Alvarez",
    age: 23,
  },
  {
    id: 3,
    name: "Emiliano",
    lastName: "Martinez",
    age: 31,
  },
];

interface IUsersState extends IState<IUsers[]> {}

const initialState: IUsersState = {
  data: defaultData,
  error: null,
  isLoading: false,
};

export const usersSlice = createSlice({
  name: "contributor",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get Users
    builder.addCase(getUsers.pending, (state) => {
      pendingSimpleCallbackCase(state);
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      rejectCallbackCase(state, action);
    });
    builder.addCase(getUsers.fulfilled, (state, _action) => {
      fullfiledSimpleCallbackCase(state);
      // Set the response API data to the store
      // state.data = action.payload;
    });
  },
});

export default usersSlice.reducer;

export const selectUsers = (store: RootState) => store.usersReducer;
