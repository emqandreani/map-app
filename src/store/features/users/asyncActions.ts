import { createAsyncThunk } from "@reduxjs/toolkit";
import { isAxiosError } from "@architecture-it/core";

import { displayAlert } from "../alert/asyncActions";
import { RootState } from "../../store";
import * as useCases from "../../../app/users";

const MESSAGE_STATUS = new Map<number, string>();

MESSAGE_STATUS.set(404, "La información solicitada no existe.");
MESSAGE_STATUS.set(500, "Error de servidor. Inténtelo de nuevo más tarde.");

export const getUsers = createAsyncThunk(
  "users/getAll",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await useCases.getAll();

      return data;
    } catch (error: any) {
      let message = "Ocurrió un error al obtener los colaboradores.";

      if (isAxiosError(error)) {
        const errorCode = error.response?.status as number;

        message = MESSAGE_STATUS.get(errorCode) ?? message;
      }

      dispatch(
        displayAlert({
          type: "error",
          message,
        }),
      );

      return rejectWithValue(error);
    }
  },
  {
    condition: (_, { getState }) => {
      const { usersReducer } = getState() as RootState;

      return !usersReducer.isLoading;
    },
  },
);
